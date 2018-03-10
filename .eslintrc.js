module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  rules: {
    "comma-dangle": ["error", "never"],
    "no-plusplus": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/jsx-boolean-value": ["error", "always"],
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true }
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "consistent-return": "off"
  }
};
