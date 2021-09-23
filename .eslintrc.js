module.exports = {
	root : true,
	env  : {
		node : true
	},
	extends : ['plugin:vue/vue3-essential',
		'eslint:recommended',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:nuxt/recommended'],
	plugins : [
		'vue'
	],
	parserOptions : {
		ecmaVersion : 2020
	},
	parser : 'vue-eslint-parser',
	rules  : {
		'no-console'          : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger'         : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		quotes                : ['error', 'single'],
		semi                  : ['error', 'never'],
		'space-before-blocks' : ['error', 'always'],
		indent                : [2, 'tab', { VariableDeclarator: 'first' }],
		'padded-blocks'       : ['error', 'never'],
		'brace-style'         : ['error', '1tbs'],
		'max-len'             : ['error', {
			code           : 120,
			tabWidth       : 4,
			ignoreComments : true
		}],
		'space-before-function-paren' : ['error', {
			anonymous  : 'always',
			named      : 'never',
			asyncArrow : 'always'
		}],
		'key-spacing' : ['error', {
			multiLine : {
				beforeColon : true,
				afterColon  : true,
				mode        : 'strict'
			},
			align : {
				beforeColon : true,
				afterColon  : true,
				mode        : 'strict'
			}
		}],
		'quote-props'             : ['error', 'as-needed'],
		'no-param-reassign'       : ['error', { props: false }],
		'no-multi-spaces'         : 0,
		'prefer-const'            : 'error',
		'array-element-newline'   : ['error', 'consistent'],
		'object-curly-spacing'    : ['error', 'always'],
		'object-property-newline' : 'error',
		'vue/html-indent'         : ['error', 'tab', {
			attribute                 : 1,
			baseIndent                : 1,
			closeBracket              : 0,
			alignAttributesVertically : true,
			ignores                   : []
		}],
		'vue/mustache-interpolation-spacing'   : ['error', 'always'],
		'vue/max-attributes-per-line'          : 'off',
		'vue/component-definition-name-casing' : 'off',
		'vue/html-closing-bracket-newline'     : ['error', {
			singleline : 'never',
			multiline  : 'never'
		}],
		'no-trailing-spaces'      : ['error'],
		'no-multiple-empty-lines' : ['error', {
			max    : 1,
			maxEOF : 0
		}],
		'array-bracket-spacing' : ['error', 'never'],
		'space-in-parens'       : ['error', 'never']
	}
}
