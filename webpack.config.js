// We are using node's native package 'path'
// https://nodejs.org/api/path.html
<<<<<<< HEAD
const path = require('path');
=======
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
>>>>>>> e3c52db2035b2759fb90159b5ed7a49b6583c4f7
// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'static/js'),
  JS: path.resolve(__dirname, 'front-js')
}

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'main.js'),
  output: {
    path: paths.DIST,
    filename: 'main.js'
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
  //
  // So we can write:
  // import MyComponent from './my-component';
  //
  // Instead of:
  // import MyComponent from './my-component.jsx';
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
}
