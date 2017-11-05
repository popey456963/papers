// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'static/js'),
  JS: path.resolve(__dirname, 'js'),
  TEMP:path.resolve(__dirname,'templates')
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'entry.js'),
  output: {
    path: paths.DIST,
    filename: 'pageloader.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/templates/notes.html',
      filename: 'notes.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};