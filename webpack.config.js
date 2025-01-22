const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder for the bundled code
    filename: 'bundle.js', // Name of the bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader', // Use Babel to transpile JavaScript files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template for the index.html file
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Serve content from the dist folder
    port: 3000, // Port to run the development server
    open: true, // Automatically open the browser when the server starts
  },
};
