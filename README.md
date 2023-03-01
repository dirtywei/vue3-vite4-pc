# Vue3-Vite-Project

## 项目简介

Vue3-Vite-Project 基于 Vue3、Vite3、Pinia、Unocss 和 Naive UI 等前端最新技术栈。相较于其他比较流行的后台管理模板，此项目更加简洁、轻量，风格清新，学习成本非常低，非常适合中小型项目或者个人项目。

## 项目特性

- 🍒 集成 Naive UI
- 🍐 集成多环境配置，dev、测试、生产
- 🍎 集成 eslint + prettier，代码约束和格式化统一
- 🍌 集成 husky + lint-staged，保证了代码提交规范化
- 🍍 集成 pinia，vuex 的替代方案，轻量、简单、易用
- 📦 集成 unplugin 插件，自动导入，解放双手，开发效率直接起飞
- 🤹 集成 iconify 图标，支持自定义 svg 图标, 优雅使用 icon
- 🍇 集成 unocss 开源的原子 css 解决方案，非常轻量

## 运行环境

- pnpm 7.20.x
- Node.js 18.14+

## 快速开始

- 安装依赖

```git
pnpm i
```

- 运行

```
pnpm dev
```

- 打包

```
pnpm build
```

## 构建发布

```
# 构建测试环境
pnpm build:test

# 构建生产环境
pnpm build
```

## 其他指令

```
# 代码检查并修复
pnpm lint

# 预览发布包效果（需先执行构建指令）
pnpm preview
```
