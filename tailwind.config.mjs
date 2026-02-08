/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf5f6',
          100: '#f9e8ea',
          200: '#f1cfd5',
          300: '#e4a9b4',
          400: '#cf7184',
          500: '#a83a53',
          600: '#800000',
          700: '#660000',
          800: '#4d0000',
          900: '#2f0000'
        }
      },
      boxShadow: {
        soft: '0 8px 24px -12px rgba(15, 23, 42, 0.25)'
      }
    }
  },
  plugins: []
};
