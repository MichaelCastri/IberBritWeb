/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          rojoIber1: '#FF161F',   // Rojo más claro
          rojoIber2: '#991B1B',   // Rojo principal (el que usas en botones)
          cafeOscuro: '#1B1213',  // Marrón oscuro que usas de fondo
          grisIberbrit: '#262425', // Gris oscuro de tu marca
        },
      },
    },
    plugins: [],
  }
  