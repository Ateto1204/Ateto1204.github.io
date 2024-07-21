import { useState } from 'react'
import Profile from './Profile/Profile.jsx'
import Experience from './Experience/Experience.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const aidmicsLink = <a href='https://www.aidmics.com/' target="_blank">Aidmics Biotechnology</a>

  return (
    <>
      <div class="container">
        <main>
          <Profile />
        </main>
        <Experience />
      </div>
    </>
  );
}

export default App
