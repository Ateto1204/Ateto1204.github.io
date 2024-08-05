import Profile from './Components/Profile/Profile'
import Experience from './Components/Experience/Experience'
import Skill from './Components/Skill/Skill'
import Specialty from './Components/Specialty/Specialty'
import Footer from './Components/Footer/Footer'

import DarkModeButton from './Components/Button/DarkModeButton'
import ToggleBackground from './Api/ToggleBackground'
import './App.css'

function App() {
  
  ToggleBackground('init', 'init');

  return (
    <>
      <div className="container">
        <main>
          <Profile />
        </main>
        <Experience />
        <Specialty />
        <Skill />
        <Footer />
      </div>
      <DarkModeButton />
    </>
  );
}

export default App
