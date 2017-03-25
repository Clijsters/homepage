var utils = require('./utils')
var config = require('../config')
var postCssConfig = require('./postcss.config.js')
var isProduction = process.env.NODE_ENV === 'production'
var useSourceMap = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: useSourceMap,
    extract: isProduction,
    postcss: false
  }),
  postcss: postCssConfig.plugins
}
