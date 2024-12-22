// eslint-disable-next-line no-undef
module.exports = {
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    printWidth: 120,
    tabWidth: 4,
    insertFinalNewLine: 'true',
    overrides: [
        {
            files: ['*.json'],
            options: {
                semi: false,
            },
        },
    ],
};
