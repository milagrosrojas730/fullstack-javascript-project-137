export default [
    {
      ignores: ['node_modules/', 'dist/'], 
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'no-unused-vars': 'warn',
        'no-console': 'off',
        indent: ['error', 2],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-trailing-spaces': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }], 
        'object-curly-newline': ['error', { consistent: true }], 
        'object-curly-spacing': ['error', 'always'],
        'prefer-destructuring': ['error', { object: true, array: true }],
        'quote-props': ['error', 'as-needed'], 
        'implicit-arrow-linebreak': 'off', 
        'function-paren-newline': ['error', 'consistent'], 
        'import/prefer-default-export': 'off',
      }
    }
  ];