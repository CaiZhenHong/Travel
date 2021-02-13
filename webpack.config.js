const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack4');

module.exports = {
  mode: 'development',

  resolve: {
    extensions: ['.vue', '.js', '.scss', '.css'],
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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        // 默认无法处理 HTML 中的图片
        test: /\.png$|\.jpg$|\.gif$|\.svg$/,
        loader: 'url-loader',
        // 需要下载 url-loader, file-loader
        options: {
          // 图片大小小于 8kb ,就会被 base64 处理
          // 优点：减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大
          limit: 8 * 1024,
          // 问题：因为 url-loader 默认使用 es6 模块解析，而 html-loader 引入图片是 commonjs
          // 解决： 关闭 url-loader 的 es6 模块化，使用 commonjs 解析
          esModule: false, //不使用 es6 模块解析
          // 给图片重命名
          //取十位哈希值
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
        },
      },
      {
        test: /\.html$/,
        // 专门处理 html 文件中的img 图片 （负责引入，从而能被 url-loader 处理)
        loader: 'html-loader',
      },
      {
        exclude: /\.(vue|scss|js|html)$/,
        loader: 'file-loader',
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
