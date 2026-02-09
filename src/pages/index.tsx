import { useEffect, useState, type FC } from "react";
import { useUser, type UserStore } from "../store/userStore";
import { examples } from "../data/examples";
import ExampleCard from "../components/ExampleCard";
import type { DragEndEvent, DraggableAttributes } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { ExampleItem } from "@/types/example";
const selectUser = (state: UserStore) => state.user;
const selectSetUser = (state: UserStore) => state.setUser;


// 为 Zustand 示例添加预览内容
const examplesWithContent = examples.map(example => {
    if (example.id === "zustand") {
        return {
            ...example,
            // content: (
            //     <div className="text-center py-8">
            //         <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            //         <p className="mt-4 text-gray-600 dark:text-gray-400">加载中...</p>
            //     </div>
            // )
        };
    }
    return example;
});
/**
 * React 插件学习项目主页
 * 用于学习和实践不同的 React 插件及其源码知识
 */
const MainPage: FC = () => {
    const user = useUser(selectUser);
    const setUser = useUser(selectSetUser);

    const [data, setData] = useState<ExampleItem[] | null>(null);

    useEffect(() => {
        // 模拟加载
        const timer = setTimeout(() => {
            setData(examplesWithContent);
        }, 0);

        // 设置用户信息
        setUser({
            name: "John",
            age: 20,
            email: "jon@gmail.com"
        });
        return () => clearTimeout(timer);
    }, []); // ← 空依赖数组，只执行一次

    const onDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }

        setData((items) => {
            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);

            return arrayMove(items, oldIndex, newIndex);
        });
    };

    // if (isLoading) {
    //     return (
    //         <div className="min-h-screen flex items-center justify-center">
    //             <div className="text-center">
    //                 <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    //                 <p className="mt-4 text-gray-600 dark:text-gray-400">加载中...</p>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* 头部区域 */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        React 插件学习实验室
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        探索和实践各种 React 生态系统的插件和库，深入理解其源码实现
                    </p>
                </div>

                {/* 示例展示区域 */}
                <DndContext
                    modifiers={[restrictToVerticalAxis]}
                    onDragEnd={onDragEnd}
                    id="list-drag-sorting-handler"
                >
                    <SortableContext items={examplesWithContent.map(item => item.id)} strategy={verticalListSortingStrategy}>
                        <div className="space-y-6 mb-12">
                            {data && data.map((example, index) => (
                                <ExampleCard key={example.id} example={example} index={index} />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
                {/* 底部信息 */}
                <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
                    <p className="text-sm">
                        持续更新中，更多插件示例即将到来...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
