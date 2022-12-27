module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
	],
	overrides: [
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'simple-import-sort',
	],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		indent: [2, 'tab'],
		'react/jsx-indent': [2, 'tab', { checkAttributes: false, indentLogicalExpressions: true }],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 0,
		'linebreak-style': [2, 'unix'],
		quotes: [2, 'single'],
		semi: [2, 'always'],
		'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
		'react/jsx-filename-extension': [2, {
			extensions: ['.js', 'jsx', '.ts', '.tsx'],
		}],
		'import/prefer-default-export': 'off',
		'import/extensions': [
			2,
			'ignorePackages', {
				js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
			},
		],
		'react/require-default-props': ['off'],
		'padded-blocks': ['off'],

		// typescript rules
		'@typescript-eslint/member-delimiter-style': 2,
		'@typescript-eslint/type-annotation-spacing': 'warn',
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': 'warn',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [2],
		'space-before-blocks': 'off',
		'@typescript-eslint/space-before-blocks': 'warn',
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['warn', 'always'],

		'simple-import-sort/imports': [2, {
			groups: [
				['^react'],
				['^antd'],
				['^@?\\w'],
				['@/(.*)'],
				['^~'],
				['^[./]'],
			],
		}],

		'react/no-unknown-property': [2, { ignore: ['css'] }],
		'react/jsx-props-no-spreading': 'off',

		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'state',
			],
		}],

		"jsx-a11y/label-has-associated-control": [ "error", {
			"required": {
			  "some": [ "nesting", "id"  ]
			}
		 }],

		 "max-len": [
			"error",
			{
			  "code": 100,
			  "tabWidth": 3,
			  "ignoreComments": true,
			  "ignoreUrls": true,
			  "ignoreStrings": true,
			  "ignoreTemplateLiterals": true
			}
		 ]
	},
};