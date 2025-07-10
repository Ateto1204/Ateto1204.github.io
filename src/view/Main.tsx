import { glassBgStyle } from "../data/glassStyle";
import Profile from "../component/profile/Profile";
import Experience from "../component/experience/Experience";
import Specialty from "../component/specialty/Specialty";
import Skill from "../component/skill/Skill";
import Footer from "../component/footer/Footer";
import Blog from "../component/blog/Blog";

function Main() {
    return (
        <main className="flex justify-center items-center">
            <nav
                className={`w-full my-6 sm:m-6 md:m-16 md:max-w-3xl lg:max-w-7xl
                            ${glassBgStyle}`}
            >
                <header className="flex justify-center items-center px-0 py-[60px]">
                    <Profile />
                </header>
                <Experience />
                <Specialty />
                <Skill />
                <Blog />
                <Footer />
            </nav>
        </main>
    );
}

export default Main;
