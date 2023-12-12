/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(\w+)-(\d{2}|\d{3})/,
      variants: [
        'sm',
        'md',
        'lg',
        'hover',
        'focus',
        'sm:hover',
        'md:hover',
        'lg:hover',
        'sm:focus',
        'md:focus',
        'lg:focus',
        'lg:hover:focus',
      ],
    },
  ],
};
