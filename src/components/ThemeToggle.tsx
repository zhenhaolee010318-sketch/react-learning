import { type FC } from "react";
import { useTheme, type ThemeStore } from "../store/themeStore";

const selectTheme = (state: ThemeStore) => state.theme;
const selectToggleTheme = (state: ThemeStore) => state.toggleTheme;

/**
 * 主题切换组件
 * @returns 
 */
const ThemeToggle: FC = () => {
    const theme = useTheme(selectTheme);
    const toggleTheme = useTheme(selectToggleTheme);
    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 shadow-lg"
            aria-label="切换主题"
        >
            {theme === 'light' ? (
                // 月亮图标（暗色模式）
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            ) : (
                // 太阳图标（亮色模式）
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
