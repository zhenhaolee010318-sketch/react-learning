import { useEffect, type FC } from "react";
import { Link } from "react-router-dom";
import { useUser, type UserStore } from "../../store/userStore";
import MDXContent from "@/components/MDXContent";

const selectUser = (state: UserStore) => state.user;
const selectSetUser = (state: UserStore) => state.setUser;

/**
 * Zustand 详情页面
 */
const ZustandDetail: FC = () => {
    const user = useUser(selectUser);
    const setUser = useUser(selectSetUser);

    useEffect(() => {
        setUser({
            name: "Jonh",
            age: 20,
            email: "jon@gmail.com"
        });
    }, [setUser]);

    return (
        <div className="min-h-screen  from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* 返回按钮 */}
                <Link
                    to="/"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    返回首页
                </Link>

                {/* 标题区域 */}
                <div className="mb-8">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-blue-500 dark:bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-3xl">Z</span>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                Zustand 状态管理
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
                                轻量级、类型安全的状态管理解决方案
                            </p>
                        </div>
                    </div>
                </div>

                {/* 主要内容区域 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        示例演示
                    </h2>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 border border-blue-200 dark:border-gray-600">
                        {user ? (
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                        {user.name[0].toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                                            {user.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                                            用户信息
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">年龄</p>
                                        <p className="text-3xl font-semibold text-gray-900 dark:text-white">
                                            {user.age} 岁
                                        </p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">邮箱</p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">加载中...</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* MDX 知识点内容 */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 mt-8">
                    <MDXContent mdxPath="/src/content/zustand.mdx" />
                </div>
            </div>
        </div>
    );
};

export default ZustandDetail;
