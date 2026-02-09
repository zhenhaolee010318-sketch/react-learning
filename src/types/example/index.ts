import type { ComponentType } from "react";

/**
 * 示例数据类型定义
 */
export interface ExampleItem {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    darkColor: string;
    status: "已学习" | "学习中" | "计划中";
    route: string; // 路由路径
    component: ComponentType; // 详情页组件
    content?: React.ReactNode; // 预览内容
    tips?: string; // 提示信息
    mdxPath?: string; // MDX 文件路径（可选）
}
