module.exports = {
  entry: './src',
  output: {
    path: 'builds',
    filename: 'bundle.js',
    publicPath: 'builds/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: /src/,
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
      {
        test: /\.html/,
        loader: 'html',
      }
    ],
  }
};