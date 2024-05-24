/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FF6600',
          light: '#FBEBE3'
        },
        dark: '#181717',
        gray: {
          f2: '#F2F2F2',
          fa: '#FAFAFA',
          c4: '#C4C4C4',
          e5: '#E5E5E5'
        },
        black: {
          100: '#646464',
          2: '#8B8B8B'
        },
        pending: '#FFC325',
        red: {
          100: '#CC4424'
        },
        green: {
          100: '#00923F',
          2: '#F6FAF9'
        },
        blue: {
          100: '#2196F3',
          2: '#F6FAF9'
        },
        purple: {
          100: '#8B5CF6',
          2: '#F6F6FC'
        }
      }
    },
  },
  plugins: [],
}

