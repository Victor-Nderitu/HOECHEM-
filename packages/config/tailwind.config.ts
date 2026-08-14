import type { Config } from 'tailwindcss'

// HOECHEM SACCO Design System — extracted from Stitch HTML exports + DESIGN.md
const hoechemColors = {
  // Primary — Deep Navy (trust, stability)
  primary: '#00020d',
  'on-primary': '#ffffff',
  'primary-container': '#0b1b3f',
  'on-primary-container': '#7684ae',
  'primary-fixed': '#dae2ff',
  'primary-fixed-dim': '#b7c5f3',
  'on-primary-fixed': '#091a3e',
  'on-primary-fixed-variant': '#38466c',
  'inverse-primary': '#b7c5f3',

  // Secondary — Green (growth, community)
  secondary: '#006d38',
  'on-secondary': '#ffffff',
  'secondary-container': '#94f8af',
  'on-secondary-container': '#00743c',
  'secondary-fixed': '#94f8af',
  'secondary-fixed-dim': '#78db95',
  'on-secondary-fixed': '#00210d',
  'on-secondary-fixed-variant': '#005229',

  // Tertiary — Gold (highlights, awards)
  tertiary: '#050200',
  'on-tertiary': '#ffffff',
  'tertiary-container': '#2a1a00',
  'on-tertiary-container': '#b27a01',
  'tertiary-fixed': '#ffddae',
  'tertiary-fixed-dim': '#fcbb4a',
  'on-tertiary-fixed': '#281800',
  'on-tertiary-fixed-variant': '#604100',

  // Error
  error: '#ba1a1a',
  'on-error': '#ffffff',
  'error-container': '#ffdad6',
  'on-error-container': '#93000a',

  // Surface
  background: '#f8f9fb',
  'on-background': '#191c1e',
  surface: '#f8f9fb',
  'on-surface': '#191c1e',
  'surface-variant': '#e1e2e4',
  'on-surface-variant': '#45464e',
  'surface-bright': '#f8f9fb',
  'surface-dim': '#d9dadc',
  'surface-container-lowest': '#ffffff',
  'surface-container-low': '#f2f4f6',
  'surface-container': '#edeef0',
  'surface-container-high': '#e7e8ea',
  'surface-container-highest': '#e1e2e4',
  'inverse-surface': '#2e3132',
  'inverse-on-surface': '#f0f1f3',
  'surface-tint': '#4f5d85',

  // Outline
  outline: '#75777f',
  'outline-variant': '#c5c6cf',
}

const config: Config = {
  darkMode: 'class',
  content: [
    '../../apps/web/src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: hoechemColors,
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'display-lg': ['Inter', 'sans-serif'],
        'display-lg-mobile': ['Inter', 'sans-serif'],
        'headline-md': ['Inter', 'sans-serif'],
        'label-sm': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'body-lg': ['17px', { lineHeight: '28px', fontWeight: '400' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'label-sm': ['13px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '16px',
        'section-gap': '80px',
        gutter: '24px',
        base: '4px',
      },
      boxShadow: {
        card: '0px 4px 20px rgba(11, 27, 63, 0.05)',
        'card-md': '0px 4px 20px rgba(11, 27, 63, 0.10)',
        'card-lg': '0px 8px 24px rgba(11, 27, 63, 0.12)',
        floating: '0px 4px 20px rgba(11, 27, 63, 0.1)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-reverse': 'float 7s ease-in-out infinite reverse',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
export { hoechemColors }
