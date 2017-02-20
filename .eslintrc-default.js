/* eslint no-inline-comments: 0 */
/* global module */
'use strict';

module.exports = {
    env: {
        browser: false,
        node: false,
        es6: true
    },
    rules: {
        // The rules below are listed in the order they appear on the eslint
        // rules page. All rules are listed to make it easier to keep in sync
        // as new ESLint rules are added.
        // http://eslint.org/docs/rules/

        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        // ---------------------------------------------
        'no-cond-assign': [2, 'except-parens'], // eslint:recommended
        // 'no-console': 2, // eslint:recommended TODO: shouldn't be applied to node environment
        'no-constant-condition': [2, { checkLoops: true }], // eslint:recommended
        'no-control-regex': 2, // eslint:recommended
        'no-debugger': 2, // eslint:recommended
        'no-dupe-args': 2, // eslint:recommended
        'no-dupe-keys': 2, // eslint:recommended
        'no-duplicate-case': 2, // eslint:recommended
        'no-empty-character-class': 2, // eslint:recommended
        'no-empty': [2, { allowEmptyCatch: false }], // eslint:recommended
        'no-ex-assign': 2, // eslint:recommended
        'no-extra-boolean-cast': 2, // eslint:recommended
        'no-extra-parens': [2, 'all', { nestedBinaryExpressions: false }],
        'no-extra-semi': 2, // eslint:recommended
        'no-func-assign': 2, // eslint:recommended
        'no-inner-declarations': [2, 'functions'], // eslint:recommended
        'no-invalid-regexp': 2, // eslint:recommended
        'no-irregular-whitespace': [2, { skipStrings: true }], // eslint:recommended
        'no-obj-calls': 2, // eslint:recommended
        'no-prototype-builtins': 0,
        'no-regex-spaces': 2, // eslint:recommended
        'no-sparse-arrays': 2, // eslint:recommended
        'no-template-curly-in-string': 1,
        'no-unexpected-multiline': 2, // eslint:recommended
        'no-unreachable': 2, // eslint:recommended
        'no-unsafe-finally': 2, // eslint:recommended
        'no-unsafe-negation': 1,
        'use-isnan': 2, // eslint:recommended
        // TODO: think about jsdoc
        'valid-jsdoc': [2, {
            prefer: { returns: 'return' },
            preferType: { Boolean: 'boolean', Number: 'number', Object: 'object', String: 'string' },
            requireReturn: false,
            requireReturnType: true,
            matchDescription: '.+\\.',
            requireParamDescription: false,
            requireReturnDescription: false
        }],
        'valid-typeof': 2, // eslint:recommended

        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        // --------------------------------------------

        'accessor-pairs': 0,
        'array-callback-return': 1,
        'block-scoped-var': 2,
        'class-methods-use-this': 2,
        complexity: 0,
        'consistent-return': 0,
        curly: [2, 'all'],
        'default-case': 2,
        'dot-location': [2, 'property'],
        'dot-notation': [1, { allowKeywords: true }],
        eqeqeq: [2, 'smart'],
        'guard-for-in': 1,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2, // eslint:recommended
        'no-div-regex': 0,
        'no-else-return': 1,
        'no-empty-function': 1,
        'no-empty-pattern': 2, // eslint:recommended
        'no-eq-null': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        // 'no-extra-label': 0, // labels are not allowed
        'no-fallthrough': 2, // eslint:recommended
        'no-floating-decimal': 2,
        'no-global-assign': 2,
        'no-implicit-coercion': [2, {
            boolean: true,
            number: true,
            string: true,
            allow: ['!!']
        }],
        'no-implicit-globals': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 2,
        'no-iterator': 2,
        'no-labels': [2, { allowLoop: false, allowSwitch: false }],
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2, // eslint:recommended
         // TODO: should we require this?
        'no-param-reassign': [2, { props: false }],
        'no-proto': 2,
        'no-redeclare': [2, { builtinGlobals: true }], // eslint:recommended
        'no-restricted-properties': 0,
        'no-return-assign': [2, 'except-parens'],
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-assign': [2, { props: true }], // eslint:recommended
        'no-self-compare': 2,
        'no-sequences': 0,
        'no-throw-literal': 2, // eslint:recommended
        'no-unmodified-loop-condition': 0,
        'no-unused-expressions': 2,
        // 'no-unused-labels': 2, labels are not allowed // eslint:recommended
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'no-void': 2,
        'no-warning-comments': [1, {
            terms: ['fix'],
            location: 'start'
        }],
        'no-with': 2,
        radix: 0,
        'vars-on-top': 2,
        'wrap-iife': [2, 'outside', { functionPrototypeMethods: true }],
        yoda: 0,

        // Strict Mode
        // http://eslint.org/docs/rules/#strict-mode
        // -----------------------------------------
         // TODO: should we require this?
        strict: [1, 'global'],

        // Variables
        // http://eslint.org/docs/rules/#variables
        // ---------------------------------------
        'init-declarations': 0,
        'no-catch-shadow': 0,
        'no-delete-var': 2, // eslint:recommended
        // 'no-label-var': 0, labels are not allowed
        'no-restricted-globals': 0,
        'no-shadow-restricted-names': 2,
        'no-shadow': [2, { builtinGlobals: true, hoist: 'functions' }],
        'no-undef-init': 2,
        'no-undef': 2, // eslint:recommended
        'no-undefined': 0,
        'no-unused-vars': [2, { vars: 'all', args: 'none' }], // eslint:recommended
         // TODO: doesn't work well because we enforce object-shorthand: never, maybe dont check for functions?
        'no-use-before-define': [1, { functions: true, classes: true }],

        // Node.js and CommonJS
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -------------------------------------------------
        'callback-return': [2, ['callback', 'cb', 'next']],
        'global-require': 0,
        'handle-callback-err': [1, 'err'],
        'no-mixed-requires': [2, { grouping: true, allowCall: false }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-restricted-modules': 0,
        'no-sync': 0,

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', { allowSingleLine: false }],
        camelcase: [2, { properties: 'always' }],
        'comma-dangle': [2, 'never'],
        'comma-spacing': [2, { before: false, after: true }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        // 'consistent-this': 0, saving this references is not allowed
        'eol-last': [2, 'always'],
        'func-call-spacing': [2, 'never'],
        // 'func-name-matching': 0, named function expressions are not allowed
        'func-names': [2, 'never'],
        'func-style': [2, 'declaration', { allowArrowFunctions: true }],
        'id-blacklist': 0,
        'id-length': [1, {
            min: 3,
            properties: 'never',
            exceptions: ['i', 'x', 'y', 'z', 'e', 'p', 'q', '_', '$', 'cb', 'vm', 'fs', 'co', 'ws', 'id']
        }],
        'id-match': 0,
        // TODO: think about parameter alignment
        indent: [2, 4, {
            SwitchCase: 1,
            VariableDeclarator: { var: 1, let: 1, const: 1 },
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: { parameters: 1 },
            FunctionExpression: { parameters: 1 },
            CallExpression: { arguments: 1 }
        }],
        'jsx-quotes': [2, 'prefer-double'],
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }],
        'keyword-spacing': [2, {
            before: true,
            after: true
        }],
        'line-comment-position': [2, 'above'],
        'linebreak-style': [2, 'unix'],
        // 'lines-around-comment': [2, { // TODO: support comments without a preceding newline inside of object literals
        //   beforeBlockComment: true,
        //   beforeLineComment: true,
        //   allowBlockStart: true,
        //   allowBlockEnd: true,
        //   allowObjectStart: true,
        //   allowObjectEnd: true,
        //   allowArrayStart: true,
        //   allowArrayEnd: true
        // }],
        'lines-around-directive': [2, { before: 'never', after: 'always' }],
        'max-depth': 0,
        'max-len': [2, {
            code: 120,
            tabWidth: 4,
            ignoreUrls: true
        }],
        'max-lines': 0,
        'max-nested-callbacks': 0,
        'max-params': 0,
        'max-statements-per-line': 0,
        'max-statements': 0,
        'multiline-ternary': 0,
        'new-cap': 2,
        'new-parens': 2,
         // TODO: should we require this?
        'newline-after-var': 0,
        // TODO: a blank line should be required after blocks and before the next statement,
        // not before any expression
        // 'newline-before-return': 2,
        'newline-per-chained-call': [2, { ignoreChainWithDepth: 2 }],
        'no-array-constructor': 2,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-inline-comments': 2,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2, // eslint:recommended
        'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1, maxBOF: 0 }],
        'no-negated-condition': 0,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': [2, { skipBlankLines: true }],
        'no-underscore-dangle': 2,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        // 'object-curly-newline': [2, { multiline: true }], //TODO: rework
        'object-curly-spacing': [2, 'always'],
        'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
        // 'one-var-declaration-per-line': 0, multiple variable declarations at once are not allowed
        'one-var': [2, {
            var: 'never',
            let: 'never',
            const: 'never'
        }],
        'operator-assignment': 0,
        'operator-linebreak': 0,
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single', { allowTemplateLiterals: true }],
        // TODO: specify jsdoc rule
        'require-jsdoc': [1, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: false
            }
        }],
        'semi-spacing': [2, { before: false, after: true }],
        semi: [2, 'always'],
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, 'never'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, { words: true, nonwords: false }],
        'spaced-comment': [2, 'always'],
        'unicode-bom': 0,
        'wrap-regex': 0,

        // ECMAScript 6
        // http://eslint.org/docs/rules/#ecmascript-6
        // ------------------------------------------
        'arrow-body-style': 0,
        'arrow-parens': [2, 'always'],
        'arrow-spacing': [2, { before: true, after: true }],
        'constructor-super': 2, // eslint:recommended
        'generator-star-spacing': [2, 'after'],
        'no-class-assign': 2, // eslint:recommended
        'no-confusing-arrow': [2, { allowParens: true }],
        'no-const-assign': 2, // eslint:recommended
        'no-dupe-class-members': 2, // eslint:recommended
        'no-duplicate-imports': 2,
        'no-new-symbol': 2, // eslint:recommended
        'no-restricted-imports': 0,
        'no-this-before-super': 2, // eslint:recommended
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-useless-rename': 2,
        'no-var': 2,
        'object-shorthand': [2, 'never'],
        'prefer-arrow-callback': [2, { allowNamedFunctions: false }],
        'prefer-const': 2,
        'prefer-numeric-literals': 0,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 1,
        'require-yield': 2, // eslint:recommended
        'rest-spread-spacing': [2, 'never'],
        'sort-imports': 0,
        'symbol-description': 0,
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2, 'after']
    }
};
