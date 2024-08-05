import { useEffect } from 'react';

import { faLinkedin, faGithub, faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBedPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Profile.module.css'
import myProfile from '../../assets/profile/graduate-profile.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Profile() {
    const aidmicsLink = <a 
                            href='https://www.aidmics.com/'
                            target='_blank'
                            style={{transition: `0.2s`}}
                            onMouseEnter={e => e.currentTarget.style.opacity = `0.41` }
                            onMouseLeave={e => e.currentTarget.style.opacity = `0.82` }
                        >
                            Aidmics Biotechnology Ltd.
                        </a>
    
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);
    
    return (
        <div className={styles['profile']} data-aos="fade-up">
            <img src={myProfile} alt="Dong-Yi Su" className={styles['profile-image']} />
            <div className={styles['profile-info']}>
                <h1>Dong-Yi Su</h1>
                <div className={styles['profile-info-subtitle']}>
                    <FontAwesomeIcon icon={faBedPulse} />
                    <h2>Software Engineer / Developer</h2>
                    <FontAwesomeIcon icon={faAccessibleIcon} size="lg" />
                </div>
                <p>這裡是蘇東毅 aka Ateto，雖然很想休學但姑且就讀國立臺灣海洋大學資訊工程學系二年級，並在 {aidmicsLink} 擔任 Software Engineer Intern。</p>
                <p>我的專長領域包含譁眾取寵、軟體工程、物件導向、程式教學，目前主要投入於 iOS mobile APP 的設計開發與測試，並專注於相機軟體的開發。</p>
                <div className={styles['contact-icon']}>
                    <a href="https://github.com/Ateto1204" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>
                    <a href="mailto:tonysu1204@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/ateto" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile