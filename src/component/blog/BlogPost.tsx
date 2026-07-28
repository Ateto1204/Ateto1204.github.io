import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import "prism-themes/themes/prism-vsc-dark-plus.css";

function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const [mdContent, setMdContent] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        document.documentElement.dataset.theme =
            savedTheme === "dark" ? "dark" : "light";

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

    useEffect(() => {
        document
            .querySelectorAll<HTMLAnchorElement>('a[href^="http"]')
            .forEach((link) => {
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            });
    }, [mdContent]);

    if (loading) {
        return <p className="blog-page">載入中...</p>;
    }
    if (mdContent === null) {
        return (
            <main className="blog-page">
                <Link className="blog-back" to="/">← Back home</Link>
                <p>找不到文章：{slug}</p>
            </main>
        );
    }
    return (
        <main className="blog-page">
            <header className="blog-header">
                <Link className="blog-back" to="/">← Back home</Link>
                <span>ATETO / NOTES</span>
            </header>
            <article className="blog-prose">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[[rehypePrism, { ignoreMissing: true }]]}
                >
                    {mdContent}
                </ReactMarkdown>
            </article>
            <footer className="blog-footer">
                <Link to="/">← More from Ateto</Link>
            </footer>
        </main>
    );
}
export default BlogPost;
