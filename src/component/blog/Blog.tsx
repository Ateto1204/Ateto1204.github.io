import { glassBgStyle } from "@/data/glassStyle";
import Subtitle from "@/component/subtitle/Subtitle";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const blogPreviews = [
    {
        title: "Pointer",
        excerpt: "A quick start to learn abuot pointers in C.",
        slug: "pointer",
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
                        <Link
                            to={`/blog/${slug}`}
                            className="text-blue-500 hover:underline"
                        >
                            Read more
                        </Link>
                    </article>
                ))}
            </article>
        </section>
    );
}

export default Blog;
