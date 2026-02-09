import MDXWrapper from "./MDXWrapper";
import zustandMdx from "@/content/zustand.mdx";
import reactMdx from "@/content/react.mdx";
import webapiMdx from "@/content/webapi.mdx";

interface MDXContentProps {
    mdxPath: string;
}

/**
 * MDX 内容组件
 * 动态加载并渲染 MDX 文件
 */
const MDXContent: React.FC<MDXContentProps> = ({ mdxPath }) => {
    // 根据路径获取对应的 MDX 组件
    const getMDXComponent = () => {
        const fileName = mdxPath.split("/").pop()?.replace(".mdx", "");

        switch (fileName) {
            case "zustand":
                return zustandMdx;
            case "react":
                return reactMdx;
            case "webapi":
                return webapiMdx;
            default:
                return null;
        }
    };

    const MDXComponent = getMDXComponent();

    if (!MDXComponent) {
        return (
            <div className="text-center py-8 text-red-600 dark:text-red-400">
                <p>无法加载 MDX 文件: {mdxPath}</p>
            </div>
        );
    }

    return (
        <MDXWrapper>
            <MDXComponent />
        </MDXWrapper>
    );
};

export default MDXContent;
