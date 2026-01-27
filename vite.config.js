"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var vite_2 = require("@tailwindcss/vite");
var vite_tsconfig_paths_1 = require("vite-tsconfig-paths");
// https://vite.dev/config/
exports.default = (0, vite_1.defineConfig)(function (_a) {
    var mode = _a.mode;
    return {
        base: mode === 'production' ? '/todo-app/' : '/',
        plugins: [
            (0, plugin_react_1.default)(),
            (0, vite_2.default)(),
            (0, vite_tsconfig_paths_1.default)(),
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
    };
});
