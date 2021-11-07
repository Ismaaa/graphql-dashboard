module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: 'repeat(auto-fit, minmax(260px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
