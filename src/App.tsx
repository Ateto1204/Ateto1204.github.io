import Profile from './Components/Profile/Profile'
import Experience from './Components/Experience/Experience'
import Skill from './Components/Skill/Skill'
import Specialty from './Components/Specialty/Specialty'
import Footer from './Components/Footer/Footer'

import ThemeModeButton from './Components/Button/ThemeModeButton'
import FaviconSetter from './Api/FaviconSetter'
import './App.css'

function App() {
  return (
    <>
      <FaviconSetter />
      <div className="container">
        <main>
          <Profile />
        </main>
        <Experience />
        <Specialty />
        <Skill />
        <Footer />
      </div>
      <ThemeModeButton />
    </>
  );
}

export default App
