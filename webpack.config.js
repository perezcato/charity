const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  entry: {
    main: './js/index.js',
    sliderRevolution: './js/slider.js'
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  plugins: [
    new CompressionPlugin({
      include: /\.(js|css|png|svg|jpg|gif)$/,
      algorithm: 'gzip'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  }
};
