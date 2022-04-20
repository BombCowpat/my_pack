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
            loader: 'css-loader',
            // loader 配置
            // options: {}
          }
        ]
      },
    ],
  },
}