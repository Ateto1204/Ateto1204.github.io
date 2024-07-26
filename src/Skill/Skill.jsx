import React, { useEffect } from 'react';

import styles from './Skill.module.css'
import swiftLogo from '../assets/swift-logo.png'
import reactLogo from '../assets/react-logo.png'
import springBootLogo from '../assets/spring-boot-logo.png'
import mysqlLogo from '../assets/mysql-logo.png'
import firebaseLogo from '../assets/firebase-logo.png'
import goLogo from '../assets/go-logo.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Skill() {
    const skillCircleIcon = <i className={styles['skill-circle-icon']}></i>
    
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <section className={styles['skill']} data-aos="fade-up">
            <h1>Skills</h1>
            <h2>My Development Skills</h2>
            <div className={styles['card-set']}>
                {/* front-end skill */}
                <div className={styles['card']}>
                    <div className={styles['cardTitle']}>Frontend</div>
                    <hr />
                    <div className={styles['skill-card-col-set']}>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>Swift (SwiftUI, UIKit)</span>
                            <img src={swiftLogo} />
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>React.js</span>
                            <img src={reactLogo} />
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>HTML/CSS/Javascript</span>
                        </div>
                    </div>
                </div>
                {/* back-end skill */}
                <div className={styles['card']}>
                    <div className={styles['cardTitle']}>Backend</div>
                    <hr />
                    <div className={styles['skill-card-col-set']}>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>Java (Spring Boot)</span>
                            <img src={springBootLogo} />
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>Go (Gin, Gorilla)</span>
                            <img src={goLogo} id={styles['go-logo']}/>
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>GCP (Firebase)</span>
                            <img src={firebaseLogo} />
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>MySQL</span>
                            <img src={mysqlLogo} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill