# Monitor
前端监控项目

# 启动说明
* 本项目使用 [pnpm](https://pnpm.io/zh/) 作为包管理器和 Monorepo 管理工具，推荐使用 npm 全局安装
```
# i 为 install 的缩写，g 为 global 的缩写，表示全局安装
npm i -g pnpm
```

* 克隆项目后，安装依赖
```
pnpm i
```
* 执行命令启用调试服务器
```
# t 为 test 的缩写
pnpm t
```
* 用浏览器打开 ./packages/monitor-plugin/test 目录下的 error.html 文件，然后在浏览器中按 F12 打开开发者工具，点击 Network 标签，即可看到上报数据的网络请求。




# 参考 / 致谢
[ woai3c /
monitor-demo ](https://github.com/woai3c/monitor-demo)


