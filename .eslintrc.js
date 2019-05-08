module.exports = {
  extends: "airbnb",
  rules: {
    "linebreak-style": 0,
    "react/jsx-no-literals": "error",
    "no-underscore-dangle": "off"
  },
  globals: {
    window: true,
    document: true,
    location: true,
    localStorage: true
  },
  env: {},
  plugins: []
};
