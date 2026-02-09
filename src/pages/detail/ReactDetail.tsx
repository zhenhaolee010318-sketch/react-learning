import MDXContent from "@/components/MDXContent";
import { FC } from "react";
import { Link } from "react-router-dom";

const ReactDetail: FC = () => {
    return (
        <div>
            <h1>ReactDetail</h1>
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
            <MDXContent mdxPath="/src/content/react.mdx" />
        </div>
    );
};

export default ReactDetail;