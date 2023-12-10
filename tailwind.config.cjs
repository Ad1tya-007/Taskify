/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(red|green|blue)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
};
