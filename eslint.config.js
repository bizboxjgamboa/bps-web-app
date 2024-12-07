import js from '@eslint/js';
import eslintComments from 'eslint-plugin-eslint-comments';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ignores: ['dist']},
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommendedTypeChecked,
		],
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
			'jsx-quotes': ['error', 'prefer-double'], // Enforce double quotes in JSX
			'no-var': 'error', // Prefer const/let over var
			'no-trailing-spaces': 'error', // Disallow trailing spaces
			'array-bracket-spacing': ['error', 'never'], // No spaces inside array brackets
			semi: ['error', 'always'],
			'comma-dangle': ['error', 'only-multiline'],
			'object-curly-spacing': ['error', 'never'],
			indent: ['error', 'tab'],
			'react-hooks/rules-of-hooks': 'error', // Ensures correct use of React hooks
			'react-hooks/exhaustive-deps': 'warn',
			'eslint-comments/no-use': 'error',
		},
	}
);
