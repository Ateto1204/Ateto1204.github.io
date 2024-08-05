import { useEffect } from 'react';

import styles from './Skill.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { GrSwift } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeMerge } from '@fortawesome/free-solid-svg-icons';

function Skill() {
    
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <section className={styles['skill']} data-aos="fade-up">
            <div className={styles['skill-title']}>
                <FontAwesomeIcon icon={faCodeMerge} size="xl" />
                <h1>Skills</h1>
            </div>
            <h2>My Development Skills</h2>
            <div className={styles['card-set']}>
                {/* front-end skill */}
                <div className={styles['card']}>
                    <div className={styles['card-title']}>Frontend</div>
                    <hr />
                    <div className={styles['skill-card-col-set']}>
                        <div className={styles['skill-card-col']}>
                            <span>
                                <FontAwesomeIcon icon={faCode} />
                                &nbsp;Swift (SwiftUI, UIKit)
                                {/* <img src={swiftLogo} /> */}
                                <GrSwift className={styles['skill-card-col-icon']} color='#FF4500'/>
                            </span>
                            
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                <FontAwesomeIcon icon={faCode} />
                                &nbsp;React.js
                                {/* <img src={reactLogo} /> */}
                                <FaReact className={styles['skill-card-col-icon']} color='00FFFF'/>
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
                                <FontAwesomeIcon icon={faCode} />
                                &nbsp;Java (Spring Boot)
                                {/* <img src={springBootLogo} /> */}
                                <SiSpringboot className={styles['skill-card-col-icon']} color='#66CD00' />
                            </span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                <FontAwesomeIcon icon={faCode} />
                                &nbsp;Go (Gin, Gorilla)
                                {/* <img src={goLogo} style={{width: "38px"}}/> */}
                                <FaGolang className={styles['skill-card-col-icon']} 
                                style={{color: '#00BFFF', width: '35px', bottom: '10px'}} />
                            </span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                <FontAwesomeIcon icon={faCode} />
                                &nbsp;GCP (Firebase)
                                {/* <img src={firebaseLogo} /> */}
                                <IoLogoFirebase className={styles['skill-card-col-icon']} color='#EEAD0E' />
                            </span>
                            
                        </div>
                        <div className={styles['skill-card-col']}>
                            <span>
                                <FontAwesomeIcon icon={faCode} />
                                &nbsp;MySQL
                                {/* <img src={mysqlLogo} /> */}
                                <GrMysql className={styles['skill-card-col-icon']} color='#1874CD' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill