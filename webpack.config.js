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
};