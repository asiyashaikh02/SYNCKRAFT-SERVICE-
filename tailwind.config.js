/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#131b2e",
        "inverse-primary": "#006591",
        "tertiary": "#ddb7ff",
        "secondary": "#c0c1ff",
        "on-primary-container": "#0089c3",
        "background": "#0b1326",
        "surface-container": "#171f33",
        "outline-variant": "#45464d",
        "surface-container-high": "#222a3d",
        "primary-fixed-dim": "#89ceff",
        "primary": "#89ceff",
        "on-primary-fixed-variant": "#004c6e",
        "error": "#ffb4ab",
        "surface": "#0b1326",
        "on-tertiary-fixed-variant": "#6900b3",
        "on-secondary": "#1000a9",
        "on-surface-variant": "#c6c6cd",
        "secondary-container": "#3131c0",
        "surface-dim": "#0b1326",
        "tertiary-fixed-dim": "#ddb7ff",
        "surface-tint": "#89ceff",
        "on-tertiary": "#490080",
        "on-primary": "#00344d",
        "secondary-fixed-dim": "#c0c1ff",
        "tertiary-container": "#270048",
        "on-tertiary-container": "#a956f8",
        "error-container": "#93000a",
        "outline": "#909097",
        "on-secondary-fixed-variant": "#2f2ebe",
        "on-error-container": "#ffdad6",
        "tertiary-fixed": "#f0dbff",
        "on-tertiary-fixed": "#2c0051",
        "inverse-surface": "#dae2fd",
        "surface-container-highest": "#2d3449",
        "on-surface": "#dae2fd",
        "primary-fixed": "#c9e6ff",
        "secondary-fixed": "#e1e0ff",
        "primary-container": "#001a29",
        "on-background": "#dae2fd",
        "inverse-on-surface": "#283044",
        "on-primary-fixed": "#001e2f",
        "on-secondary-fixed": "#07006c",
        "surface-container-lowest": "#060e20",
        "on-secondary-container": "#b0b2ff",
        "surface-variant": "#2d3449",
        "on-error": "#690005",
        "surface-bright": "#31394d"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
