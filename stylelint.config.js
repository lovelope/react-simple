module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    // `standard` conflict with `rational-order`
    'declaration-empty-line-before': [
      'never',
      {
        except: ['after-comment', 'after-declaration', 'first-nested'],
        ignore: [
          'after-comment',
          'after-declaration',
          'first-nested',
          'inside-single-line-block',
        ],
      },
    ],
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': true,
      },
    ],
  },
};
