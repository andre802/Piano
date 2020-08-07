const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
      scales: './src/scales.js',
      chords: './src/chords.js',
      buttons: './src/buttons.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ // specify style before css
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ttf$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};