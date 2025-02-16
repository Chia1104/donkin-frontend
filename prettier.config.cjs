/** @type {import("prettier").Config} */
module.exports = {
	printWidth: 120,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	arrowParens: 'avoid',
	insertPragma: false,
	tabWidth: 2,
	useTabs: true,
	bracketSpacing: true,
	endOfLine: 'auto',
	importOrder: ['^react$', '<THIRD_PARTY_MODULES>', '^@roswell/(.*)$', '^@/(.*)$', '^~/(.*)$', '^[./]'],
	importOrderSeparation: true,
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	plugins: [require.resolve('prettier-plugin-tailwindcss'), require.resolve('@trivago/prettier-plugin-sort-imports')],
};
