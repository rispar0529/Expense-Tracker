import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  ignorePatterns: ['dist', 'node_modules'], // You can add more directories to ignore
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      extends: [
        js.configs.recommended,
        'plugin:react/recommended', // React plugin recommended config
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
      languageOptions: {
        globals: globals.browser, // Make sure you're using the right globals for browser
      },
      rules: {
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      },
    },
  ],
});
