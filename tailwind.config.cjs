/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg-(\w+)-(\d{3}))|(bg-\[#[a-fA-F0-9]{6}\])/,
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
