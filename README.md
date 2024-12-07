# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ['./tsconfig.node.json', './tsconfig.app.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
	// Set the react version
	settings: {react: {version: '18.3'}},
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs['jsx-runtime'].rules,
	},
});
```

### Required Extensions

Before working on this project, make sure you have the following Visual Studio Code extensions installed:

- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

You can install them manually or run:

```bash
npm run setup
```

### **Code Quality and Pre-Commit Considerations**

This application already includes **Prettier** and **ESLint** as dev dependencies to ensure consistent code formatting and adherence to linting rules. While pre-commit hooks (e.g., **Lefthook** or **Husky**) are under consideration for automation, the following steps should be followed manually before pushing changes:

#### **Pre-Commit Steps**

1. **Format Code**  
   Use Prettier to format the codebase:
   ```bash
   npm run format
   ```
2. **Lint Code**  
   Use ESLint to lint the codebase:
   ```bash
   npm run lint
   ```
