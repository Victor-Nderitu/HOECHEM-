---
name: Kinship Finance
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#45464e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#75777f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4f5d85'
  primary: '#00020d'
  on-primary: '#ffffff'
  primary-container: '#0b1b3f'
  on-primary-container: '#7684ae'
  inverse-primary: '#b7c5f3'
  secondary: '#006d38'
  on-secondary: '#ffffff'
  secondary-container: '#94f8af'
  on-secondary-container: '#00743c'
  tertiary: '#050200'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1a00'
  on-tertiary-container: '#b27a01'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b7c5f3'
  on-primary-fixed: '#091a3e'
  on-primary-fixed-variant: '#38466c'
  secondary-fixed: '#94f8af'
  secondary-fixed-dim: '#78db95'
  on-secondary-fixed: '#00210d'
  on-secondary-fixed-variant: '#005229'
  tertiary-fixed: '#ffddae'
  tertiary-fixed-dim: '#fcbb4a'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#604100'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style
The design system for this financial institution prioritizes **Credibility, Warmth, and Community**. It reflects a "bank-grade" polish that balances the heritage of a savings and credit cooperative with the modern expectations of digital banking.

The visual direction follows a **Corporate Modern** style with **Tactile** influences. This is achieved through generous whitespace, soft depth, and a high-contrast palette that ensures accessibility and trust. The interface should feel permanent and reliable rather than transient or "flashy," favoring stable layouts and clear information hierarchy over aggressive animations.

## Colors
The palette is rooted in a deep **Primary Navy**, representing stability and institutional strength. This is balanced by a **Primary Green** that evokes growth and community prosperity. 

- **Primary Navy (#0B1B3F):** Reserved for high-authority elements like headers, primary navigation backgrounds, and main action buttons.
- **Primary Green (#4CAF6E):** Used for functional success states, accent icons, and secondary actions that suggest growth.
- **Accent Gold (#E8A93A):** Used sparingly for currency-related icons, membership badges, and specific highlights to draw attention without creating visual noise.
- **Tints:** Use the pale green, navy, and gold tints as subtle background fills for cards or icon containers to maintain a soft, approachable feel.

## Typography
This design system utilizes **Inter** for its exceptional legibility and systematic, professional character. 

For large headlines, use a "Dual-Tone" strategy: set the majority of the headline in **Primary Navy** and highlight the "value" or "action" word in **Primary Green**. This guides the user's eye to the most impactful part of the message. 

Body copy should primarily use the 17px `body-lg` for readability on marketing pages, scaling down to 15px `body-md` for data-dense SACCO account views.

## Layout & Spacing
The layout uses a **12-column Fixed Grid** (1200px max-width) for desktop to ensure a stable, contained professional appearance. 

- **Vertical Rhythm:** A strict 8px/4px grid system governs all internal spacing.
- **Sectioning:** Use generous 80px - 120px padding between major vertical sections to maintain "breathability."
- **Mobile:** Transition to a 4-column fluid grid with 16px side margins. 
- **Utility Bar:** A permanent 40px dark navy bar sits at the very top for "Contact" and "Member Login" links.
- **Horizontal Stat Bars:** For financial metrics, use full-width Navy bands with centered, high-contrast white or green typography.

## Elevation & Depth
Visual hierarchy is established through **Ambient Shadows** and **Tonal Layers**. 

1. **The Base:** Backgrounds should alternate between `#FFFFFF` and `#F7F8FA` to distinguish content sections.
2. **Elevated Cards:** Use a soft, multi-layered shadow (e.g., `0px 4px 20px rgba(11, 27, 63, 0.05)`) on white cards.
3. **Icon Badges:** Circular containers for icons should use the Pale Green (`#E7F5EC`) or Pale Navy (`#EAF0FA`) tints with no shadow, keeping them subordinate to the card itself.

## Shapes
A consistent **Rounded (12px to 16px)** corner radius is applied to all primary containers, including buttons, input fields, and cards. 

- **Standard Elements:** 12px (0.75rem) for buttons and inputs.
- **Container Elements:** 16px (1rem) for content cards and modal windows.
- **Icon Badges:** 50% (circular) for a soft, community-focused feel.

## Components
- **Buttons:** 
  - *Primary:* Navy background, white text, 12px radius, bold weight.
  - *Secondary:* Green background or Green outline, 12px radius.
- **Cards:** White background, 16px radius, subtle shadow. Top-align a circular pale-tinted badge containing a green or gold icon.
- **Navigation:** 
  - *Utility Bar:* Navy background, white text, height 40px.
  - *Main Nav:* White background, Navy text, height 80px.
- **Input Fields:** White fill with a 1px border of `#E5E7EB` (Gray-200), 12px radius. Focus state uses a 2px Green border.
- **Footer:** 4-column layout with a Navy background. Use white text for headers and Gray-400 for secondary links to maintain hierarchy.
- **Stat Bars:** Dark Navy horizontal containers with large green/gold text for impact numbers (e.g., "Interest Rate: 12%").