var path = require('path')
var webpack = require('webpack')
  // const ExtractTextPlugin = require('extract-text-webpack-plugin');
  // const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // extractCSS
      // {
      //   test: /\.scss$/,
      //   loader: extractCSS.extract(['css-loader', 'sass-loader'])
      // },
      // vue-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      // babel-loader
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      // file-loader
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     Vue: 'vue',
  //   })
  // ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
    // modules: [
    //     'D:/WINDOWS/GD2/web/dev/_npm/libs/vue_2.1.10/node_modules'
    //   ]
  },
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true
  // },
  // performance: {
  //   hints: false
  // },
  // devtool: '#eval-source-map'
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//     // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }