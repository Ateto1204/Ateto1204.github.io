import Profile from './View/Profile/Profile'
import Experience from './View/Experience/Experience'
import Skill from './View/Skill/Skill'
import Specialty from './View/Specialty/Specialty'
import Footer from './View/Footer/Footer'

import ThemeModeButton from './View/Button/ThemeModeButton'
import FaviconSetter from './Controller/FaviconSetter'

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
