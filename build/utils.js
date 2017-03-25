var path = require('path')
var config = require('../config')
var postCssConfig = require('./postcss.config.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  // CSS to CommonJS
  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }


  // Postprocess CSS, i.e. autoprefixer
  postCssConfig.sourceMap = options.sourceMap
  var postCssLoader = {
    loader: 'postcss-loader',
    options: postCssConfig
  }

  // Preprocess CSS from SCSS, etc
  // generate loader string to be used with extract text plugin
  function generateLoaders (loader) {
    var loaders = [cssLoader]
    if (options.postcss) {
      loaders.push(postCssLoader)
    }

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: {
          sourceMap: options.sourceMap
        }
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return  {
    scss: generateLoaders('sass')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
