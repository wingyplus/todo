const webpack = require('webpack');

module.exports = {
  entry: './src/TodoApp',
  output: {
    filename: 'todo-ui.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
    ],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': 'jQuery',
  },
  watch: true,
};
