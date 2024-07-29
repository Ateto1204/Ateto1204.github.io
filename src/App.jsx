import React, { useState, useEffect } from 'react';
import Profile from './Profile/Profile.jsx'
import Experience from './Experience/Experience.jsx'
import Skill from './Skill/Skill.jsx'
import Specialty from './Specialty/Specialty.jsx'
import Footer from './Footer/Footer.jsx'
import './App.css'

const images = [
  '/src/assets/background.JPG',
  '/src/assets/background2.JPG',
  '/src/assets/background3.JPG',
  '/src/assets/background4.JPG',
];

function App() {

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const root = document.documentElement;
    root.style.backgroundImage = `url(${randomImage})`;
    root.style.backgroundPosition = 'center';
    root.style.backgroundRepeat = 'no-repeat';
    root.style.backgroundSize = 'cover';
    root.style.backgroundAttachment = 'fixed';

    return () => {
      root.style.backgroundImage = '';
      root.style.backgroundPosition = '';
      root.style.backgroundRepeat = '';
      root.style.backgroundSize = '';
      root.style.backgroundAttachment = '';
    };
  }, []);

  return (
    <div className="container">
      <main>
        <Profile />
      </main>
      <Experience />
      <Specialty />
      <Skill />
      <Footer />
    </div>
  );
}

export default App
