import { useState } from 'react'
import Profile from './Profile/Profile.jsx'
import Experience from './Experience/Experience.jsx'
import Skill from './Skill/Skill.jsx'
import Footer from './Footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <div class="container">
      <main>
        <Profile />
      </main>
      <Experience />
      <Skill />
      <Footer />
    </div>
  );
}

export default App
