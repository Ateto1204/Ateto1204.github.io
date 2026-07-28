import { lazy, Suspense } from "react";
import FaviconSetter from "./controller/FaviconSetter";
import { LanProvider } from "./model/LanCxtProvider";
import Main from "./view/Main";
import { Routes, Route } from "react-router-dom";

const BlogPost = lazy(() => import("./component/blog/BlogPost"));

function App() {
    FaviconSetter();

    return (
        <LanProvider>
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
            </Routes>
        </LanProvider>
    );
}

export default App;
