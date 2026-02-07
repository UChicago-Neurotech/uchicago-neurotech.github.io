/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8ff',
          100: '#dcecff',
          200: '#bddcff',
          300: '#8cc1ff',
          400: '#589dff',
          500: '#2f7cf6',
          600: '#1f61dc',
          700: '#1e4db2',
          800: '#1d438e',
          900: '#1f3a73'
        }
      },
      boxShadow: {
        soft: '0 8px 24px -12px rgba(15, 23, 42, 0.25)'
      }
    }
  },
  plugins: []
};
