import { useState } from 'react'
import Profile from './Profile/Profile.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        <main>
          <Profile />
        </main>
      </div>
    </>
  );
}

export default App
