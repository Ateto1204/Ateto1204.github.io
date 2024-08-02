import Profile from './Profile/Profile'
import Experience from './Experience/Experience'
import Skill from './Skill/Skill'
import Specialty from './Specialty/Specialty'
import Footer from './Footer/Footer'

import DarkModeButton from './Button/DarkModeButton'
import ToggleBackground from './Api/ToggleBackground'
import './App.css'


function App() {
  
  ToggleBackground();

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
