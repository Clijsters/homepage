// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  extends: '.eslintrc-default.js',
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    semi: [2, 'never'],
    'object-shorthand': [2, 'always'],
    'id-length': 0,
    'no-undef': 1,
    indent: [2, 2, {
      SwitchCase: 1,
      VariableDeclarator: { var: 1, let: 1, const: 1 },
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1 },
      FunctionExpression: { parameters: 1 },
      CallExpression: { arguments: 1 }
    }]
  }
}
