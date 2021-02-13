const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack4');

module.exports = {
  mode: 'development',

  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': Path.resolve(__dirname, 'src'),
      '@assets': '@/assets',
      '@view': '@/view',
    },
  },

  entry: '@/index.js',

  output: {
    filename: 'main.js',
    path: Path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.scss$|\.css$|\.sass/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new VueLoaderPlugin(),
  ],

  devServer: {
    port: 8080,
    open: true,
    contentBase: Path.resolve(__dirname, 'dist'),
  },
};
