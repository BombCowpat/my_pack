const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
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
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'img/[name].[hash:8].[ext]',
              //outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
}
