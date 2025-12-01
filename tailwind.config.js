/** @type {import('tailwindcss').Config} */
module.exports = {
  // Asegúrate de que Tailwind esté escaneando todos tus archivos de componentes y páginas
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. DEFINICIÓN DE KEYFRAMES (Necesario para las animaciones)
      keyframes: {
        // Animación de rotación del borde para el efecto 'back'
        rotation_481: {
          '0%': { transform: 'rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
        // Animación de 'flotación' de los círculos
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      
      // 2. CREACIÓN DE CLASES DE ANIMACIÓN (Clases que usarás en el JSX)
      animation: {
        'rotation-border': 'rotation_481 5000ms infinite linear',
        'floating-blur': 'floating 2600ms infinite linear',
      },

      // 3. UTILIDADES 3D NECESARIAS PARA EL FLIP
      // Esto genera la utilidad 'transform-style-3d'
      transformStyle: {
        '3d': 'preserve-3d',
      },
      // Esto genera la utilidad 'backface-hidden'
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [
    // Si usas un plugin para utilidades de 3D, puedes descomentar la siguiente línea.
    // Si no tienes el plugin instalado, no lo incluyas.
    // require('tailwindcss-3d') 
  ],
}