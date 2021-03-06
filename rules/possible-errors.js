module.exports = {
    rules: {
        'color-no-invalid-hex': true,
        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,
        'string-no-newline': true,
        'unit-no-unknown': true,
        'property-no-unknown': [true, {
            checkPrefixed: true
        }],
        'keyframe-declaration-no-important': true,
        'declaration-block-no-duplicate-properties': [true, {
            ignore: ['consecutive-duplicates']
        }],
        'declaration-block-no-shorthand-property-overrides': true,
        'block-no-empty': true,
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': true,
        'selector-type-no-unknown': [true, {
            ignore: ['custom-elements']
        }],
        'media-feature-name-no-unknown': true,
        'at-rule-no-unknown': true,
        'comment-no-empty': true,
        'no-descending-specificity': true,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true
    }
};
