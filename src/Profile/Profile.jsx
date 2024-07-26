import React, { useEffect } from 'react';

import style from './Profile.module.css'
import myProfile from '../assets/graduate-profile.png'
import githubLogo from '../assets/github-logo.png'
import mailIcon from '../assets/email.png'
import linkedinIcon from '../assets/linkedin.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Profile() {
    const aidmicsLink = <a href='https://www.aidmics.com/' target="_blank">Aidmics Biotechnology Ltd.</a>
    
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);
    
    return (
        <div class={style['profile']} data-aos="fade-up">
            <img src={myProfile} alt="Dong-Yi Su" class={style['profile-image']} />
            <div className={style['profile-info']}>
                <h1>Dong-Yi Su</h1>
                <h2>Software Engineer / Developer</h2>
                <p>這裡是蘇東毅 aka Ateto，雖然很想休學但姑且就讀國立臺灣海洋大學資訊工程學系二年級，並在 {aidmicsLink} 擔任 Software Engineer Intern。</p>
                <p>我的專長領域包含譁眾取寵、軟體工程、物件導向、程式教學，目前主要投入於 iOS mobile APP 的設計開發與測試，並專注於相機軟體的開發。</p>
                <div class={style['contact-icon']}>
                    <a href="https://github.com/Ateto1204" target="_blank">
                    <img src={githubLogo} className={style['github-icon']} />
                    </a>
                    <a href="mailto:tonysu1204@gmail.com">
                        <img src={mailIcon} className={style['mail-icon']} />
                    </a>
                    <a href="https://www.linkedin.com/in/ateto" target="_blank">
                    <img src={linkedinIcon} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile