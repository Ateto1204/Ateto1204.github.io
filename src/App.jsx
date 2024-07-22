import { useState } from 'react'
import Profile from './Profile/Profile.jsx'
import Experience from './Experience/Experience.jsx'
import './App.css'

function App() {
  const skillCircleIcon = <i class="skill-circle-icon"></i>
  return (
    <>
      <div class="container">
        <main>
          <Profile />
        </main>
        <Experience />
        <section class="skill">
          <div class="card-set">
            {/* front-end skill */}
            <div class="card">
              <div class="cardTitle">Frontend</div>
              <hr />
              <div class="skill-card-col-set">
                <div class="skill-card-col">
                  {skillCircleIcon}
                  <span>Swift (SwiftUI, UIKit)</span>
                </div>
                <div class="skill-card-col">
                  {skillCircleIcon}
                  <span>React.js</span>
                </div>
                <div class="skill-card-col">
                  {skillCircleIcon}
                  <span>HTML/CSS/Javascript</span>
                </div>
              </div>
            </div>
            {/* back-end skill */}
            <div class="card">
              <div class="cardTitle">Backend</div>
              <hr />
              <div class="skill-card-col-set">
                <div class="skill-card-col">
                  {skillCircleIcon}
                  <span>Java (Spring Boot)</span>
                </div>
                <div class="skill-card-col">
                  {skillCircleIcon}
                  <span>Go (Gin, Gorilla)</span>
                </div>
                <div class="skill-card-col">
                  {skillCircleIcon}
                  <span>GCP (Firebase)</span>
                </div>
                <div class="skill-card-col">
                  {skillCircleIcon}
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App
