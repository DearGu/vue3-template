module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    indentation: 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    'number-leading-zero': 'always',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],
    'max-nesting-depth': [
      3,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
  },
};
