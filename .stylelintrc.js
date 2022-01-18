module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss', 'stylelint-config-ali', 'stylelint-config-prettier'],
  rules: {
    'scss/at-import-partial-extension': 'always',
    'selector-class-pattern': /^[a-z]+.*$/,
  }
};
