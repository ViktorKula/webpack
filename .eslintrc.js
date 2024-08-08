module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'  // Для TypeScript.
  ],
  ignorePatterns: ['.eslintrc.js'],
  "rules": {
		"semi": ["error", "always"],
		"quotes": ["error", "double"]
	}
};
