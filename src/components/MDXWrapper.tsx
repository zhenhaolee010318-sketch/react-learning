import type { ReactNode } from "react";

interface MDXWrapperProps {
    children: ReactNode;
}

/**
 * MDX 内容包装器
 * 为 MDX 内容提供统一的样式
 */
const MDXWrapper: React.FC<MDXWrapperProps> = ({ children }) => {
    return (
        <div className="mdx-content prose prose-lg max-w-none text-left
            /* 标题样式 */
            [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:text-gray-900 [&_h1]:dark:text-white 
            [&_h1]:mb-6 [&_h1]:mt-0 [&_h1]:pb-3
            [&_h1]:bg-gradient-to-r [&_h1]:from-blue-600 [&_h1]:to-purple-600 [&_h1]:dark:from-blue-400 [&_h1]:dark:to-purple-400
            [&_h1]:bg-clip-text [&_h1]:text-transparent [&_h1]:pb-2
            
            [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:dark:text-white 
            [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:first:mt-0
            [&_h2]:relative [&_h2]:pl-4 [&_h2]:before:content-[''] [&_h2]:before:absolute [&_h2]:before:left-0 [&_h2]:before:top-0
            [&_h2]:before:bottom-0 [&_h2]:before:w-1 [&_h2]:before:bg-gradient-to-b [&_h2]:before:from-blue-500 [&_h2]:before:to-purple-500
            [&_h2]:before:rounded-full
            
            [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-gray-800 [&_h3]:dark:text-gray-100
            [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:flex [&_h3]:items-center [&_h3]:gap-2
            [&_h3]:before:content-['▸'] [&_h3]:before:text-blue-500 [&_h3]:before:text-xl
            
            /* 段落样式 */
            [&_p]:text-gray-700 [&_p]:dark:text-gray-300 [&_p]:mb-5 [&_p]:leading-7
            [&_p]:text-base [&_p]:md:text-lg [&_p]:text-left
            
            /* 链接样式 */
            [&_a]:text-blue-600 [&_a]:dark:text-blue-400 [&_a]:font-medium
            [&_a]:hover:text-blue-700 [&_a]:dark:hover:text-blue-300 [&_a]:underline
            [&_a]:underline-offset-2 [&_a]:decoration-2 [&_a]:decoration-blue-300 [&_a]:dark:decoration-blue-600
            [&_a]:transition-colors [&_a]:duration-200
            
            /* 强调文本 */
            [&_strong]:font-bold [&_strong]:text-gray-900 [&_strong]:dark:text-white
            [&_strong]:bg-yellow-100 [&_strong]:dark:bg-yellow-900/30 [&_strong]:px-1.5 [&_strong]:py-0.5
            [&_strong]:rounded [&_strong]:text-yellow-900 [&_strong]:dark:text-yellow-200
            
            /* 行内代码 */
            [&_code]:text-blue-600 [&_code]:dark:text-blue-400
            [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md [&_code]:text-sm [&_code]:font-mono
            [&_code]:border [&_code]:border-blue-200 [&_code]:dark:border-blue-800
            [&_code]:font-semibold
            
            /* 代码块 */
            [&_pre]:bg-transparent [&_pre]:text-gray-900 [&_pre]:dark:text-gray-100
            [&_pre]:p-6 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_pre]:mb-6
            [&_pre]:border [&_pre]:border-gray-200 [&_pre]:dark:border-gray-700
            [&_pre]:relative [&_pre]:text-left
            
            [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0 [&_pre_code]:border-none
            [&_pre_code]:text-sm [&_pre_code]:leading-relaxed
            
            /* 引用块 */
            [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:dark:border-blue-400
            [&_blockquote]:pl-6 [&_blockquote]:pr-4 [&_blockquote]:py-4 [&_blockquote]:my-6
            [&_blockquote]:bg-blue-50/50 [&_blockquote]:dark:bg-blue-900/10 [&_blockquote]:rounded-r-lg
            [&_blockquote]:italic [&_blockquote]:text-gray-700 [&_blockquote]:dark:text-gray-300
            [&_blockquote]:relative [&_blockquote]:before:content-[''] [&_blockquote]:before:text-4xl
            [&_blockquote]:before:text-blue-300 [&_blockquote]:before:dark:text-blue-600 [&_blockquote]:before:absolute
            [&_blockquote]:before:left-2 [&_blockquote]:before:top-0 [&_blockquote]:before:opacity-30
            [&_blockquote]:text-left
            
            /* 列表样式 */
            [&_ul]:list-none [&_ul]:pl-0 [&_ul]:mb-6 [&_ul]:space-y-3
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
            [&_li]:relative [&_li]:text-gray-700 [&_li]:dark:text-gray-300 [&_li]:text-left
            [&_ul_li]:pl-7 [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-2.5
            [&_ul_li]:before:w-2 [&_ul_li]:before:h-2 [&_ul_li]:before:bg-blue-500 [&_ul_li]:before:rounded-full
            
            /* 分隔线 */
            [&_hr]:border-0 [&_hr]:border-t-2 [&_hr]:border-gray-300 [&_hr]:dark:border-gray-700
            [&_hr]:my-10 [&_hr]:relative [&_hr]:before:content-[''] [&_hr]:before:absolute [&_hr]:before:left-1/2
            [&_hr]:before:-translate-x-1/2 [&_hr]:before:top-0 [&_hr]:before:w-12 [&_hr]:before:h-1
            [&_hr]:before:bg-gradient-to-r [&_hr]:before:from-blue-500 [&_hr]:before:to-purple-500 [&_hr]:before:rounded-full">
            {children}
        </div>
    );
};

export default MDXWrapper;
