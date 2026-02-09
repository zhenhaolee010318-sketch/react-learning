import { Link } from "react-router-dom";
import type { ExampleItem } from "../types/example";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities'

interface ExampleCardProps {
    example: ExampleItem;
    index: number;
}

/**
 * 示例展示卡片组件
 * 可点击跳转到详情页
 */
const ExampleCard: React.FC<ExampleCardProps> = ({ example, index }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: example.id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };
    return (

        <div
            ref={setNodeRef}
            style={style}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
            <div
                {...attributes}
                {...listeners}
                className="cursor-grab active:cursor-grabbing mt-1"
            >
                <svg
                    className="w-6 h-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" />
                </svg>
            </div>
            <div className="flex items-center mb-6">
                <div className={`${example.color} ${example.darkColor} w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl font-bold">
                        {example.icon}
                    </span>
                </div>
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {example.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {example.description}
                    </p>
                </div>
                <div className="ml-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        {example.status}
                    </span>
                </div>
            </div>

            {/* 预览内容 */}
            {example.content && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border border-blue-200 dark:border-gray-600 mb-4">
                    {example.content}
                </div>
            )}

            {/* 提示信息 */}
            {example.tips && (
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">💡 提示：</span>
                        {example.tips}
                    </p>
                </div>
            )}

            <Link
                to={example.route}
                className="group block bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
            >
                {/* 点击提示 */}
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                    <span className="text-sm font-medium">查看详情</span>
                    <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </Link>
        </div>
    );
};

export default ExampleCard;
