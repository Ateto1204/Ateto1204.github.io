import BlogPost from "./component/blog/BlogPost";
import FaviconSetter from "./controller/FaviconSetter";
import { LanProvider } from "./model/LanCxtProvider";
import Aside from "./view/Aside";
import Main from "./view/Main";
import { Routes, Route } from "react-router-dom";

function App() {
    FaviconSetter();

    return (
        <LanProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Main />
                            <Aside />
                        </>
                    }
                />
                <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
        </LanProvider>
    );
}

export default App;
