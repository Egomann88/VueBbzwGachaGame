const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // main colors
      primary: colors.blue,
      secondary: colors.sky,
      tertiary: colors.indigo,
      success: colors.lime,
      warning: colors.yellow,
      danger: colors.red,
      info: colors.purple,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      // optional
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
}