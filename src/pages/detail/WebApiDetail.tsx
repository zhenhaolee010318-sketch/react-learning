import MDXContent from "@/components/MDXContent";
import { FC, ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

interface FileInfo {
    name: string;
    size: string;
    type: string;
    lastModified: string;
    preview?: string;
}

const WebApiDetail: FC = () => {
    const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
    const [fileContent, setFileContent] = useState<string>('');

    // 单文件上传
    const handleSingleFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        // 显示文件信息
        setFileInfo({
            name: file.name,
            size: formatFileSize(file.size),
            type: file.type || '未知',
            lastModified: new Date(file.lastModified).toLocaleString('zh-CN'),
        });

        // 如果是图片，生成预览
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileInfo(prev => prev ? {
                    ...prev,
                    preview: e.target?.result as string
                } : null);
            };
            reader.readAsDataURL(file);
        }

        // 如果是文本，读取内容
        if (file.type.startsWith('text/') || file.name.endsWith('.json')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target?.result as string);
            };
            reader.readAsText(file);
        }
    };

    // 多文件上传
    const handleMultipleFiles = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return;

        console.log(`选择了 ${files.length} 个文件`);

        Array.from(files).forEach((file, index) => {
            console.log(`文件 ${index + 1}:`, {
                name: file.name,
                size: formatFileSize(file.size),
                type: file.type,
            });
        });
    };

    // 拖拽上传
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const files = event.dataTransfer.files;

        if (files.length > 0) {
            const file = files[0];
            console.log('拖拽的文件:', file.name);
            // 处理文件...
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    // 格式化文件大小
    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };

    return (
        <div className="flex flex-col gap-6 p-6">
            <h1 className="text-3xl font-bold">Web File API 示例</h1>

            <Link
                to="/"
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors w-fit"
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

            {/* 单文件上传 */}
            <div className="p-6 border rounded-lg bg-white dark:bg-gray-800">
                <h2 className="text-xl font-semibold mb-4">1. 单文件上传</h2>
                <input
                    type="file"
                    onChange={handleSingleFile}
                    accept="image/*,text/*,.json"
                    className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100
                        dark:file:bg-blue-900 dark:file:text-blue-200"
                />

                {/* 显示文件信息 */}
                {fileInfo && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                        <h3 className="font-semibold mb-2">文件信息：</h3>
                        <p><strong>文件名:</strong> {fileInfo.name}</p>
                        <p><strong>大小:</strong> {fileInfo.size}</p>
                        <p><strong>类型:</strong> {fileInfo.type}</p>
                        <p><strong>最后修改:</strong> {fileInfo.lastModified}</p>

                        {/* 图片预览 */}
                        {fileInfo.preview && (
                            <div className="mt-4">
                                <h4 className="font-semibold mb-2">预览：</h4>
                                <img
                                    src={fileInfo.preview}
                                    alt="预览"
                                    className="max-w-sm rounded-lg border"
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* 显示文件内容 */}
                {fileContent && (
                    <div className="mt-4">
                        <h3 className="font-semibold mb-2">文件内容：</h3>
                        <pre className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md overflow-auto max-h-60 text-sm">
                            {fileContent}
                        </pre>
                    </div>
                )}
            </div>

            {/* 多文件上传 */}
            <div className="p-6 border rounded-lg bg-white dark:bg-gray-800">
                <h2 className="text-xl font-semibold mb-4">2. 多文件上传</h2>
                <input
                    type="file"
                    multiple
                    onChange={handleMultipleFiles}
                    className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-green-50 file:text-green-700
                        hover:file:bg-green-100"
                />
                <p className="mt-2 text-sm text-gray-500">
                    可以选择多个文件（按住 Ctrl/Cmd 键）
                </p>
            </div>

            {/* 拖拽上传 */}
            <div className="p-6 border rounded-lg bg-white dark:bg-gray-800">
                <h2 className="text-xl font-semibold mb-4">3. 拖拽上传</h2>
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer"
                >
                    <input type="file"
                        onChange={handleSingleFile}
                        className=""
                        style={{ opacity: 0 }}

                    />
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        拖拽文件到这里，或点击选择文件
                    </p>
                </div>
            </div>

            <MDXContent mdxPath="/src/content/webapi.mdx" />
        </div>
    );
};

export default WebApiDetail;
