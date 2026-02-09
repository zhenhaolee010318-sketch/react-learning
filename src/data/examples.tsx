import ReactDetail from "@/pages/detail/ReactDetail";
import { type ExampleItem } from "../types/example";
import ZustandDetail from "@/pages/detail/ZustandDetail";
import type { ComponentType } from "react";
import WebApiDetail from "@/pages/detail/WebApiDetail";

// 临时组件，用于未实现的详情页
const PlaceholderDetail: ComponentType = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    详情页待实现
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    这个示例的详情页正在开发中...
                </p>
            </div>
        </div>
    );
};

/**
 * 示例数据列表
 * 用于管理所有的插件学习示例
 */
export const examples: ExampleItem[] = [
    {
        id: "zustand",
        name: "Zustand",
        description: "轻量级状态管理库",
        icon: "Z",
        color: "bg-blue-500",
        darkColor: "dark:bg-blue-600",
        status: "已学习",
        route: "/examples/zustand",
        component: ZustandDetail,
        tips: "这个示例展示了如何使用 Zustand 进行状态管理。状态通过 Context API 和 Zustand store 进行管理，实现了类型安全的状态更新。"
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        description: "实用优先的 CSS 框架",
        icon: "T",
        color: "bg-cyan-500",
        darkColor: "dark:bg-cyan-600",
        status: "已学习",
        route: "/examples/tailwind",
        component: PlaceholderDetail,
        tips: "Tailwind CSS 是一个实用优先的 CSS 框架，通过类名快速构建界面。"
    },
    {
        id: "react",
        name: "React",
        description: "React 原理理解",
        icon: "R",
        color: "bg-indigo-500",
        darkColor: "dark:bg-indigo-600",
        status: "学习中",
        route: "/examples/react",
        component: ReactDetail,
        tips: "React的原理学习。"
    },
    {
        id: "webApi",
        name: "WebApi",
        description: "WebApi理解",
        icon: "R",
        color: "bg-indigo-500",
        darkColor: "dark:bg-indigo-600",
        status: "学习中",
        route: "/examples/web-api",
        component: WebApiDetail,
        tips: "WebApi理解。"
    }
];
