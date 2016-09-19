module.exports = {
  entry: './src/TodoApp',
  output: {
    filename: 'todo-ui.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['', '.webpack.config.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      { test: /.tsx?$/, loader: 'ts-loader' },
    ],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': 'jQuery',
  },
};
