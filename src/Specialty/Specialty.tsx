import React, { useEffect } from 'react';

import styles from './Specialty.module.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCodePullRequest, faCubes } from '@fortawesome/free-solid-svg-icons';

function Specialty() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <section className={styles['specialty']} data-aos="fade-up">
            <h1>Specialties</h1>
            <div className={styles['specialty-grid']}>
                <div className={styles['specialty-item']}>
                    <div className={styles['specialty-item-title']}>
                        <FontAwesomeIcon icon={faCodePullRequest} />
                        <h3>軟體工程</h3>
                    </div>
                    <p>熟悉軟體開發流程如 Scrum，於大一開始擔任軟體工程實習生，目前主要使用 Swift 進行 iOS APP 開發，並專注於相機軟體的開發。</p>
                </div>
                <div className={styles['specialty-item']}>
                    <div className={styles['specialty-item-title']}>
                        <FontAwesomeIcon icon={faCubes} />
                        <h3>物件導向</h3>
                    </div>
                    <p>熟悉 SOLID 原則以及設計模式，習慣且擅長基於 OOP 開發出具有低耦合且高模組化特性的架構模式以達成槓桿未來。</p>
                </div>
                <div className={styles['specialty-item']}>
                    <div className={styles['specialty-item-title']}>
                        <FontAwesomeIcon icon={faBook} />
                        <h3>程式教學</h3>
                    </div>
                    <p>自高中至今多次以講師身份教授程式設計相關課程，我擅長換位思考找出學生的學習痛點，由此可知我是一個有同理心的人。</p>
                </div>
            </div>
        </section>
    );
}

export default Specialty