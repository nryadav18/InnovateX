/** @type {import('tailwindcss').Config} */

// The design tokens live as hex values inside CSS variables (see index.css) so that
// inline `var(--color-x)` usages keep working as full colors. Tailwind, however, cannot
// synthesise `/opacity` variants (bg-primary/10, from-bg/80, …) from a raw `var()` string.
// This helper returns a function-form color so opacity modifiers resolve via color-mix,
// while a bare usage (no opacity) still returns the plain variable.
const withAlpha = (varName) => ({ opacityValue }) =>
  opacityValue === undefined
    ? `var(${varName})`
    : `color-mix(in srgb, var(${varName}) calc(${opacityValue} * 100%), transparent)`;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: withAlpha('--color-bg'),
        surface: withAlpha('--color-surface'),
        primary: withAlpha('--color-primary'),
        'primary-dim': withAlpha('--color-primary-dim'),
        text: withAlpha('--color-text'),
        'text-muted': withAlpha('--color-text-muted'),
        border: withAlpha('--color-border'),
        card: withAlpha('--color-card'),
        highlight: withAlpha('--color-highlight'),
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
