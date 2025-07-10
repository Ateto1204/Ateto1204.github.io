import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const [mdContent, setMdContent] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        import(`../../data/blog/${slug}.md?raw`)
            .then((mod: any) => {
                setMdContent(mod.default);
            })
            .catch(() => {
                setMdContent(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <p>載入中...</p>;
    }
    if (mdContent === null) {
        return <p>找不到文章：{slug}</p>;
    }
    return (
        <article className="p-8">
            <ReactMarkdown>{mdContent}</ReactMarkdown>
        </article>
    );
}
export default BlogPost;
