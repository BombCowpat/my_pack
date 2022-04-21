module.exports = {
  // 防止 node_modules 下面的依赖包被二次处理
  exclude: ['./node_modules'],
  presets: [
    [
      // 使用babel预设
      '@babel/preset-env',
      // 使用polyfill语法填充
      {
        useBuiltIns: 'usage',
        // 使用的core-js 版本
        corejs: 3
      },
    ],
  ],
}
