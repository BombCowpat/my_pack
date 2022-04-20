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
            // options: {}
          },
          {
            loader: 'postcss-loader'
          }
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
            // options: {}
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
}
