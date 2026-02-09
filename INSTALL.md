# 安装说明

## 安装 React Router DOM

由于网络问题，请手动运行以下命令安装依赖：

```bash
pnpm add react-router-dom
```

或者使用 npm：

```bash
npm install react-router-dom
```

## 项目结构说明

### 路由配置
- `src/App.tsx` - 主应用组件，配置了路由
- `src/pages/index.tsx` - 主页
- `src/pages/detail/` - 详情页目录

### 数据管理
- `src/data/examples.tsx` - 示例数据数组，统一管理所有插件示例
- `src/types/example/index.ts` - 示例数据类型定义

### 组件
- `src/components/ExampleCard.tsx` - 示例展示卡片组件，可点击跳转

## 添加新示例

1. 在 `src/data/examples.tsx` 的 `examples` 数组中添加新项
2. 创建对应的详情页组件在 `src/pages/detail/` 目录
3. 路由会自动注册，无需额外配置
