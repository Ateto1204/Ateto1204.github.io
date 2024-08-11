import Profile from './Components/Profile/Profile'
import Experience from './Components/Experience/Experience'
import Skill from './Components/Skill/Skill'
import Specialty from './Components/Specialty/Specialty'
import Footer from './Components/Footer/Footer'

import ThemeModeButton from './Components/Button/ThemeModeButton'
import FaviconSetter from './Api/FaviconSetter'

function App() {
  return (
    <>
      <FaviconSetter />
      <main className='flex justify-center items-center'>
        <nav className='shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[20px] m-[60px]
                        border max-w-[1200px] rounded-2xl border-solid border-[rgba(255,255,255,0.3)]
                        background: rgba(255, 255, 255, 0.05)
                        -webkit-backdrop-filter: blur(20px)'>
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
