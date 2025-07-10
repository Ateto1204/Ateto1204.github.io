import { glassBgStyle } from "@/data/glassStyle";
import Subtitle from "@/component/subtitle/Subtitle";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const blogPreviews = [
    {
        title: "第一篇範例文章",
        excerpt: "這是一段示例摘要內容，用於展示文章預覽。",
        slug: "example-post-1",
    },
    {
        title: "第二篇範例文章",
        excerpt: "這裡是另一段示例摘要，提供更多預覽資訊。",
        slug: "example-post-2",
    },
    {
        title: "第三篇範例文章",
        excerpt: "第三篇的摘要同樣只是示意，不代表真實內容。",
        slug: "example-post-3",
    },
];

function Blog() {
    return (
        <section className="pt-44" data-aos="fade-up">
            <Subtitle content="Blog" icon={faNewspaper} />
            <article className="blog-preview-section w-full px-20 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPreviews.map(({ title, excerpt, slug }) => (
                    <article key={slug} className={`p-6 m-2 ${glassBgStyle}`}>
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-gray-700 mb-2">{excerpt}</p>
                        <a
                            href={`/blog/${slug}`}
                            className="text-blue-500 hover:underline"
                        >
                            Read more
                        </a>
                    </article>
                ))}
            </article>
        </section>
    );
}

export default Blog;
