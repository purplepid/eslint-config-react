module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    plugins: ['prettier', 'react-hooks'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        // react
        'react/jsx-filename-extension': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-curly-brace-presence': 'off',
        'react/jsx-fragments': ['error', 'element'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // prettier
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'none',
                tabWidth: 4,
                printWidth: 120
            }
        ]
    }
};
