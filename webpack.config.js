module.exports = {
  devtool: 'inline-source-map',
  entry: './entry.jsx',
  output: {
    path: __dirname,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}