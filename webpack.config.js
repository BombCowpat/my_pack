const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    // assetModuleFilename: 'img/[name].[hash:8][ext]',
  },
  module: {
    rules: [
      {
        // 匹配规则
        test: /\.css$/,
        // 规则使用的所有loader数组
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            // loader 配置
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        // 匹配规则
        test: /\.less$/,
        // 规则使用的所有loader数组
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            // loader 配置
            options: {
              importLoaders: 1,
              esModule: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        // type: 'asset/inline',
        /* type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:6][ext]',
        }, */
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]'
        }
      },
      {
       test: /\.js$/,
       use: [
         {
           loader: 'babel-loader'
         }
       ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'MyPack App',
      template: './public/index.html'
    }),
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}
