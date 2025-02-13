import baseConfig from './eslint/base.js';
import nextjsConfig from './eslint/nextjs.js';
import reactConfig from './eslint/react.js';

/** @type {import('typescript-eslint').Config} */
export default [
	{
		ignores: ['.next/**'],
	},
	...baseConfig,
	...reactConfig,
	...nextjsConfig,
];
