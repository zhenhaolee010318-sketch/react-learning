# MDX 配置说明

## 安装依赖

需要安装以下依赖来支持 MDX：

```bash
pnpm add @mdx-js/rollup @mdx-js/react
```

或者使用 npm：

```bash
npm install @mdx-js/rollup @mdx-js/react
```

**注意**：如果遇到网络问题，可以稍后安装。代码结构已经配置完成。

## 配置说明

### 1. Vite 配置

已在 `vite.config.ts` 中添加了 MDX 插件：

```typescript
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    mdx({
      jsxImportSource: 'react',
    }),
  ],
})
```

### 2. MDX 文件位置

MDX 文件存放在 `src/content/` 目录下：
- `zustand.mdx` - Zustand 知识点
- `react.mdx` - React 原理知识点

### 3. 使用方式

在详情页组件中使用 `MDXContent` 组件：

```tsx
import MDXContent from "../../components/MDXContent";

<MDXContent mdxPath="/src/content/zustand.mdx" />
```

### 4. 添加新的 MDX 文件

1. 在 `src/content/` 目录下创建新的 `.mdx` 文件
2. 在 `src/components/MDXContent.tsx` 中添加对应的导入映射
3. 在 `src/data/examples.tsx` 中为示例添加 `mdxPath` 属性

## MDX 语法

MDX 支持标准的 Markdown 语法，同时可以在其中使用 React 组件：

```mdx
# 标题

这是普通文本。

## 代码块

\`\`\`typescript
const example = "代码示例";
\`\`\`

## 使用 React 组件

<CustomComponent prop="value" />
```

## 样式

MDX 内容通过 `MDXWrapper` 组件包装，提供了统一的样式。样式定义在：
- `src/components/MDXWrapper.tsx` - 组件样式
- `src/index.css` - 全局 MDX 样式增强
