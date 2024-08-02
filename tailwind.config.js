/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors: {
        'gray-50': 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

