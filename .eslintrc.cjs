// module.exports = {
//   root: true,
//   env: { browser: true, es6: true },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     project: './tsconfig.eslint.json',
//     sourceType: 'module',
//   },
//   extends: [
//     'airbnb',
//     'airbnb/hooks',
//     'airbnb-typescript',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:prettier/recommended',
//   ],
//   plugins: ['@typescript-eslint/eslint-plugin', 'react', 'react-hooks'],
//   settings: {
//     'import/resolver': {
//       typescript: {
//         project: './tsconfig.eslint.json',
//       },
//     },
//   },
//   rules: {
//     'prettier/prettier': [
//       'error',
//       {
//         printWidth: 80,
//         tabWidth: 2,
//         semi: true,
//         singleQuote: true,
//         trailingComma: 'es5',
//         bracketSpacing: true,
//         arrowParens: 'always',
//       },
//     ],
//     'react/function-component-definition': [
//       'error',
//       {
//         namedComponents: 'arrow-function',
//         unnamedComponents: 'arrow-function',
//       },
//     ],
//     'react/jsx-props-no-spreading': 'off',
//     'react/react-in-jsx-scope': 'off',
//     'react/prop-types': 'off',
//     'react/require-default-props': 'off',
//     'import/no-unresolved': 'error',
//     'import/order': [
//       'error',
//       {
//         groups: [
//           'builtin',
//           'external',
//           'internal',
//           ['parent', 'sibling', 'index'],
//           'type',
//           'unknown',
//         ],
//         pathGroups: [
//           {
//             pattern: '{react*,react*/**}',
//             group: 'external',
//             position: 'before',
//           },
//           {
//             pattern: '{~*,~*/**}',
//             group: 'internal',
//             position: 'before',
//           },
//         ],
//         'newlines-between': 'always',
//         alphabetize: {
//           order: 'asc',
//           caseInsensitive: true,
//         },
//       },
//     ],
//   },
// };
