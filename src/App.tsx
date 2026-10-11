import { lazy, Suspense } from "react";
import FaviconSetter from "./controller/FaviconSetter";
import Main from "./view/Main";
import ExperiencePage from "./view/ExperiencePage";
import PublicationsPage from "./view/PublicationsPage";
import { Routes, Route } from "react-router-dom";

const BlogPost = lazy(() => import("./component/blog/BlogPost"));

function App() {
    FaviconSetter();

    return (
        <Routes>
                <Route
                    path="/"
                    element={
                        <Main />
                    }
                />
                <Route
                    path="/blog/:slug"
                    element={
                        <Suspense fallback={<p className="blog-page">載入中...</p>}>
                            <BlogPost />
                        </Suspense>
                    }
                />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/publications" element={<PublicationsPage />} />
        </Routes>
    );
}

export default App;
