import { useState } from 'react'
import myProfile from './assets/graduate-profile.png'
import githubLogo from './assets/github-logo.png'
import mailIcon from './assets/email.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const aidmicsLink = <a href='https://www.aidmics.com/' target="_blank">Aidmics Biotechnology</a>

  return (
    <>
      <div class="container">
        <main>
            <section class="profile">
                <img src={myProfile} alt="Dong-Yi Su" class="profile-image" />
                <div class="profile-info">
                    <h1>Dong-Yi Su</h1>
                    <h2>Software Engineer / Developer</h2>
                    <p>這裡是蘇東毅，雖然很想休學但目前就讀國立臺灣海洋大學資訊工程學系二年級，並在 {aidmicsLink} 擔任 Software Engineer Intern。</p>
                    <p>專長領域包含：軟體工程、物件導向、演算法與資料結構、程式教學、活動籌辦與團隊領導，目前主要投入於 iOS mobile APP 的設計與開發。</p>
                    <ul class="contact-list">
                      <li>
                        <a href="https://github.com/Ateto1204" target="_blank">
                        <span>
                          <img src={githubLogo} class="github-logo"/>
                        </span>
                        github.com/Ateto1204</a>
                      </li>
                      <li>
                        <a href="tonysu1204@gmail.com" target="_blank">
                          <span>
                            <img src={mailIcon} class="mail-icon"/>
                          </span>
                          tonysu1204@gmail.com</a>
                      </li>
                    </ul>
                </div>
            </section>
        </main>
      </div>
    </>
  )
}

export default App
