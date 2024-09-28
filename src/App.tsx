import Profile from './component/profile/Profile'
import Experience from './component/experience/Experience'
import Skill from './component/skill/Skill'
import Specialty from './component/specialty/Specialty'
import Footer from './component/footer/Footer'

import ThemeModeButton from './component/button/ThemeModeButton'
import FaviconSetter from './controller/FaviconSetter'
import { LanSetButton } from './component/button/LanSetButton'
import { LanProvider } from './component/button/LanSetButton'

import { glassBgStyle } from './data/glassStyle'

function App() {
  return (
    <LanProvider>
      <FaviconSetter />
      <main className='flex justify-center items-center'>
        <nav className={`max-w-full m-[25px] md:m-[60px] md:max-w-[800px] lg:max-w-[1200px]
                        ${glassBgStyle}`}> {/* container */}
          <header className='flex justify-center items-center px-0 py-[60px]'>
            <Profile />
          </header>
          <Experience />
          <Specialty />
          <Skill />
          <Footer />
        </nav>
        <ThemeModeButton />
        <aside>
          <LanSetButton />
        </aside>
      </main>
    </LanProvider>
  );
}

export default App
