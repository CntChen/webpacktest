var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// `"build": "set NODE_ENV=production&& webpack"`
// no space before `&&`
var production = process.env.NODE_ENV.toString() === 'production';

var plugins = [
  new ExtractTextPlugin('bundle.css'), // <=== where should content be piped
  new webpack.optimize.CommonsChunkPlugin({
    name: 'main',
    children: true,
    minChunks: 2,
  })
];

if (production) {
  plugins = plugins.concat([
    new CleanPlugin('builds'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200, // ~50kb
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
      },
    }),
    new webpack.DefinePlugin({
      __SERVER__: !production,
      __DEVELOPMENT__: !production,
      __DEVTOOLS__: !production,
      'process.env': {
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]);
}

module.exports = {
  debug: !production,
  devtool: production ? false : 'eval',
  entry: './src',
  output: {
    path: 'builds',
    //filename: production ? '[name]-[hash].js' : 'bundle.js',
    filename: 'bundle.js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: 'builds/',
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      include: /src/,
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style', 'css!less'),
    }, {
      test: /\.html/,
      loader: 'html',
    }],
  }
};