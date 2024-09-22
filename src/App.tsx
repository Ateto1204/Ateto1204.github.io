import Profile from './component/profile/Profile'
import Experience from './component/experience/Experience'
import Skill from './component/skill/Skill'
import Specialty from './component/specialty/Specialty'
import Footer from './component/footer/Footer'

import ThemeModeButton from './component/button/ThemeModeButton'
import FaviconSetter from './controller/FaviconSetter'

function App() {
  return (
    <>
      <FaviconSetter />
      <main className='flex justify-center items-center'>
        <nav className='shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[20px] 
                        m-[25px] md:m-[60px] max-w-full md:max-w-[800px] lg:max-w-[1200px]
                        border rounded-2xl border-solid border-[rgba(255,255,255,0.3)]
                        background: rgba(255, 255, 255, 0.05)
                        -webkit-backdrop-filter: blur(20px)'> {/* container */}
          <header className='flex justify-center items-center px-0 py-[60px]'>
            <Profile />
          </header>
          <Experience />
          <Specialty />
          <Skill />
          <Footer />
        </nav>
        <ThemeModeButton />
      </main>
    </>
  );
}

export default App
