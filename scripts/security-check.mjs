#!/usr/bin/env node
/**
 * Repo malware guard.
 *
 * Detects the attack that hit this repo in commit bac7294:
 *   - .vscode/tasks.json auto-running a script on folder open
 *   - JavaScript disguised as a font file (fa-solid-900.woff2)
 *   - obfuscated code hidden after whitespace in a config file (postcss.config.mjs)
 *   - .gitignore no longer ignoring .env
 *
 * Usage:  node scripts/security-check.mjs          (scans files tracked by git)
 *         node scripts/security-check.mjs --all    (scans the whole working tree)
 * Exits 1 if anything suspicious is found.
 */
import { execSync } from "node:child_process";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname, basename } from "node:path";

const ROOT = process.cwd();
const SKIP_DIRS = new Set(["node_modules", ".git", ".next", "dist", "build", ".turbo", "coverage"]);
const CODE_EXT = new Set([".js", ".mjs", ".cjs", ".ts", ".mts", ".cts", ".jsx", ".tsx", ".json"]);
const FONT_MAGIC = {
  ".woff2": ["774f4632"], // wOF2
  ".woff": ["774f4646"], // wOFF
  ".ttf": ["00010000", "74727565"], // 0x00010000 / "true"
  ".otf": ["4f54544f"], // OTTO
};
// Built from parts so this file doesn't match itself.
const SIGNATURES = ["'", '"'].map((q) => `global[${q}!${q}]` + "=");

function listFiles() {
  if (!process.argv.includes("--all")) {
    return execSync("git ls-files -z", { encoding: "utf8" }).split("\0").filter(Boolean);
  }
  const out = [];
  const walk = (dir) => {
    for (const name of readdirSync(join(ROOT, dir))) {
      if (SKIP_DIRS.has(name)) continue;
      const rel = dir ? `${dir}/${name}` : name;
      const st = statSync(join(ROOT, rel));
      if (st.isDirectory()) walk(rel);
      else if (st.isFile()) out.push(rel);
    }
  };
  walk("");
  return out;
}

const findings = [];
const flag = (file, reason) => findings.push(`${file}: ${reason}`);

for (const file of listFiles()) {
  const abs = join(ROOT, file);
  if (!existsSync(abs)) continue;
  const ext = extname(file).toLowerCase();
  const name = basename(file);
  const buf = readFileSync(abs);

  // 1. Fonts must actually be fonts.
  if (FONT_MAGIC[ext] && !FONT_MAGIC[ext].includes(buf.subarray(0, 4).toString("hex"))) {
    flag(file, `not a real ${ext} font (wrong file header) - likely disguised code`);
  }

  // 2. Editor configs that auto-run commands when the folder is opened.
  if (/(^|\/)\.vscode\//.test(file)) {
    const text = buf.toString("utf8");
    if (/folderOpen/.test(text)) flag(file, 'runs a command automatically on folder open ("runOn": "folderOpen")');
    if (/task\.allowAutomaticTasks"\s*:\s*(true|"on")/.test(text)) flag(file, "enables automatic tasks without prompting");
  }

  if (!CODE_EXT.has(ext) && !FONT_MAGIC[ext]) continue;
  if (buf.length > 5 * 1024 * 1024) continue;
  const text = buf.toString("utf8");

  // 3. Known payload signature.
  for (const sig of SIGNATURES) if (text.includes(sig)) flag(file, `contains known malware signature ${sig}`);

  // 4. Obfuscator output (_0x1a2b3c identifiers) outside vendored code.
  const hexIds = text.match(/_0x[0-9a-f]{4,}/gi);
  if (hexIds && hexIds.length > 50) flag(file, `heavily obfuscated (${hexIds.length} _0x identifiers)`);

  // 5. Code pushed off-screen by a long run of whitespace.
  if (/[ \t]{150,}\S/.test(text)) flag(file, "code hidden after a long run of whitespace");
}

// 6. Secrets must stay out of git.
const gitignore = existsSync(join(ROOT, ".gitignore")) ? readFileSync(join(ROOT, ".gitignore"), "utf8") : "";
if (!/^\.env$/m.test(gitignore)) flag(".gitignore", "does not ignore .env - secrets could be committed");

if (findings.length) {
  console.error(`\n✖ security-check found ${findings.length} problem(s):\n`);
  for (const f of findings) console.error(`  - ${f}`);
  console.error("\nDo NOT open this folder in VS Code with workspace trust, and do not run npm install/dev until reviewed.\n");
  process.exit(1);
}
console.log("✔ security-check: no malware indicators found");
