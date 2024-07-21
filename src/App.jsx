import { useState } from 'react'
import Profile from './Profile/Profile.jsx'
import Experience from './Experience/Experience.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container">
        <main>
          <Profile />
        </main>
        <Experience />
      </div>
    </>
  )
}

export default App
