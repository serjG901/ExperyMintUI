const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    colors: {
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      blue: colors.lightBlue,
      cyan: colors.cyan,
      indigo: colors.indigo,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      gray: colors.coolGray,
      black: colors.black,
      white: colors.white,
    },
  },
  variants: {},
  plugins: [],
};
