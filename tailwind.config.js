/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // blue-500
          dark: '#60A5FA', // blue-400
        },
        secondary: {
          light: '#4B5563', // gray-600
          dark: '#9CA3AF', // gray-400
        },
        background: {
          light: '#FFFFFF', // white
          dark: '#111827', // gray-900
        },
        text: {
          light: '#1F2937', // gray-800
          dark: '#F3F4F6', // gray-100
        },
        accent: {
          light: '#8B5CF6', // violet-500
          dark: '#A78BFA', // violet-400
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
