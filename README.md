# 旅游网 travel

## 从零开始搭建 Vue 开发环境

1. 打包工具：webpack

2. Vue(v2.6.1) 构建版本：编译器 + 运行时

3. 预编译器：sass

4. 开发服务器：webpack-dev-server

## 项目中出现的问题

1. vue 深度选择器使用 `>>>` 操作符为何不生效？

   答：sass 预处理器无法正确解析 `>>>` ，需要使用`::v-deep`操作符取而代之。
