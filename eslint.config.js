import js from '@eslint/js';
import eslintComments from 'eslint-plugin-eslint-comments';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ignores: ['dist', 'src/common/utils/createSelectors.ts']},
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'eslint-comments': eslintComments,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{allowConstantExport: true},
			],
			// Custom rules
			eqeqeq: ['error', 'always'], // Enforce === and !==
			'react/prop-types': 'off', // Disable if using TypeScript
			'react/react-in-jsx-scope': 'off', // Not needed for React 17+
			'no-var': 'error', // Prefer const/let over var
			'react-hooks/rules-of-hooks': 'error', // Ensures correct use of React hooks
			'react-hooks/exhaustive-deps': 'warn',
			'eslint-comments/no-use': 'error',
			'@typescript-eslint/no-explicit-any': 'error', // Disallow the `any` type
		},
	}
);
