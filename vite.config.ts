import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/todo-app/' : '/',
    plugins: [
      react(),
      tailwindcss(),
      tsconfigPaths(),
    ],
    serve: {
      open: true,
      port: 3000,
      /**用来预热 */
      warmup: {
        clientFiles: ['./src/components/ThemeToggle.tsx']
      },
      /**默认开启热更新
       * 启动一个 WebSocket 服务，专门给 HMR 用，专门启动了 websocket 服务
       * 
       */
      hmr: true
    },
  }
})
