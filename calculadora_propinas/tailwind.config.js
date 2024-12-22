/** @type {import('tailwindcss').Config} */
export default {
  content: [ // Especifica donde va a encontrar codigo html que va a tener clases de tailwindcss
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

