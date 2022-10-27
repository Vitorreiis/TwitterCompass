/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 15,
      md: 16,
      lg: 19,
      xl: 20,
    },
    colors: {
      'Black': '#0F1419',

      'Dark-1': '#17202A',
      'Dark-2': '#1C2733',
      'Dark-3': '#283340',
      'Dark-4': '#3A444C',
      'Dark-5': '#5B7083',
      'Dark-6': '#8899A6',
      'Dark-7': '#EBEEF0',
      'Dark-8': '#F7F9FA',

      'Primary-blue': '#1DA1F2',
      'White': '#FFFFFF'

    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}
