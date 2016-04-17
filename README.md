## webpack test

### 学习 webpack-your-bags

> https://blog.madewithlove.be/post/webpack-your-bags/

change module `sass` to  `less` because I failed in installing `node-sass` 

#### 运行

```
cd webpack-your-bages // 进入工作目录
npm install // 安装依赖
webpack // webpack处理
```
或者
```
webpack-dev-server // dev
```
*浏览器查看:*
>http://localhost:8080/webpack-dev-server/


#### 学习记录

* `production`模式
```
npm run build
```
或者
```
set NODE_ENV=production&& webpack
// 注意 && 符号前不能有空格
```

* `dubug`模式
```
npm run debug
```

* 出现Exract-text-webpack-glugin错误

> https://github.com/webpack/extract-text-webpack-plugin/issues/115

* webpack-dev-server
在win下需要全局安装才能在命令行中使用
```
npm install webpack-dev-server -g
```

#### 遇到问题

* **css文件的url引用** 和 **js chunk引用**

1. 指定`webpcal.output.publicPath`时
在css文件中引用image时
*打包前：*
```
  background-image: url(img/loading.png);
```
*打包后:*
```
  background-image: url(builds/./images/loading.png);
```
其中`webpcal.output.publicPath`指定的路径`builds/`成为css url 引用img的路径的一部分，但是此时img路径为`./images/loading.png`

2. 不指定`webpcal.output.publicPath`时
ccs文件中url引用正常，加载没有问题
js chunk 文件加载目录错误