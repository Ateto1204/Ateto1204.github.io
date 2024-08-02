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
                    <div className={styles['card-title']}>Frontend</div>
                    <hr />
                    <div className={styles['skill-card-col-set']}>
                        <div className={styles['skill-card-col']}>
                            <span>
                                Swift (SwiftUI, UIKit)&nbsp;
                                <img src={swiftLogo} />
                            </span>
                            
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                {/* {skillItemMark} */}
                                React.js&nbsp;
                                <img src={reactLogo} />
                            </span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                HTML/CSS/Javascript
                            </span>
                        </div>
                    </div>
                </div>
                {/* back-end skill */}
                <div className={styles['card']}>
                    <div className={styles['card-title']}>Backend</div>
                    <hr />
                    <div className={styles['skill-card-col-set']}>
                        <div className={styles['skill-card-col']}>
                            <span>
                                Java (Spring Boot)&nbsp;&nbsp;
                                <img src={springBootLogo} />
                            </span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                Go (Gin, Gorilla)
                                <img src={goLogo} id={styles['go-logo']}/>
                            </span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                GCP (Firebase)&nbsp;
                                <img src={firebaseLogo} />
                            </span>
                            
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                MySQL&nbsp;
                                <img src={mysqlLogo} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill