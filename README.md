# 旅游网 travel

## 从零开始搭建 Vue 开发环境

1. 打包工具：webpack

2. Vue(v2.6.1) 构建版本：编译器 + 运行时

3. 预编译器：sass

4. 开发服务器：webpack-dev-server

## 项目中出现的问题

1. vue 深度选择器使用 `>>>` 操作符为何不生效？

   答：sass 预处理器无法正确解析 `>>>` ，需要使用`::v-deep`操作符取而代之。

## 新东西

1. git 的实际应用

   会使用分支放置每个功能的代码，最后整合到 master 主分支上

   步骤：

   1. 在仓库中创建分支
   2. pull 到本地仓库
   3. 通过 `checkout 分支名` 切换分支
   4. `git push` 将分支推送到远程仓库
   5. 通过 `merg` 命令将主分支与当前分支合并
   6. 将主分支推送至远程仓库
