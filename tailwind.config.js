/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        dark: {
          title: '#E5E7EB',
          content: '#FFEDD5',
        },
        title: '#111827',
        content: '#1E293B'
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

