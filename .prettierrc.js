module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    parser: 'flow',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    printWidth: 80,
    jsxBracketSameLine: false,
    // singleAttributePerLine: false,
    overrides: [
        {
            files: '*.scss',
            options: {
                parser: 'scss',
                singleQuote: false,
                printWidth: 200,
            },
        },
        {
            files: '*.json',
            options: {
                parser: 'json',
                printWidth: 100,
            },
        },
    ],
};
