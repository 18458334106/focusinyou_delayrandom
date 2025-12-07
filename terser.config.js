/**
 * Terser 配置文件
 * 用于配置 JavaScript 代码混淆和压缩选项
 */

export default {
  // 混淆选项
  mangle: {
    // 混淆变量名
    toplevel: true,
    // 混淆函数名
    keep_fnames: false,
    // 保留类名
    keep_classnames: false,
    // 保留导出名称
    reserved: ['getTimeBasedDelay', 'formatInfo', 'default']
  },
  // 压缩选项
  compress: {
    // 移除 console
    drop_console: false,
    // 移除 debugger
    drop_debugger: true,
    // 移除未使用的变量
    unused: true,
    // 合并变量
    collapse_vars: true,
    // 移除死代码
    dead_code: true,
    // 控制流扁平化
    // 注意：这会使代码更难理解，但可能影响性能
    // 建议根据实际情况调整
    // conditionals: true,
    // booleans: true,
    // loops: true,
    // if_return: true,
    // join_vars: true
  },
  // 输出选项
  output: {
    // 移除所有注释
    comments: false,
    // 保留空格和换行，便于调试
    // 生产环境可以设置为 true
    beautify: false
  },
  // 源映射选项
  sourceMap: {
    // 生成源映射文件
    filename: 'index.js.map',
    url: 'index.js.map'
  }
};
