module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    // parser: 'flow',
    printWidth: 80,
    // jsxSingleQuote: true,
    // arrowParens: 'always',
    // max-len: ['error', 140, 2],
    overrides: [
        {
            files: '*.scss',
            options: {
                singleQuote: false,
                printWidth: 200,
            },
        },
    ],
};
