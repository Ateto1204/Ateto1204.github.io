import { useEffect } from 'react';

import { faLinkedin, faGithub, faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBedPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import myProfile from '../../assets/profile.png';

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
        <div className='flex m-14 p-12 px-24 py-36 items-end' data-aos='fade-up'> {/* profile */}
            <img 
                src={myProfile} 
                alt='Dong-Yi Su' 
                className='h-[360px] w-auto rounded-lg shadow-[1px_1px_10px] mr-20' 
            /> {/* profile-image */}
            <div className='max-w-xl'> {/* profile-info */}
                <h1 className='font-serif text-[3.2rem] leading font-semibold mb-8'>Dong-Yi Su</h1>
                <div className='flex items-center mt-[10px] mb-5'> {/* profile-info-subtitle */}
                    <FontAwesomeIcon icon={faBedPulse} />
                    <h2 className='font-serif text-2xl font-semibold px-[10px]'>Software Engineer / Developer</h2>
                    <FontAwesomeIcon icon={faAccessibleIcon} size='lg' />
                </div>
                <p className='text-[1.05rem] leading-[1.6] mb-5'>
                    這裡是蘇東毅 aka Ateto，雖然很想休學但姑且就讀國立臺灣海洋大學資訊工程學系二年級，並在 {aidmicsLink} 擔任 Software Engineer Intern。
                </p>
                <p className='text-[1.05rem] leading-[1.6] mb-5'>
                    我的專長領域包含譁眾取寵、軟體工程、物件導向、程式教學，目前主要投入於 iOS mobile APP 的設計開發與測試，並專注於相機軟體的開發。
                </p>
                <div className='pt-3'> {/* contact-icon */}
                    <a 
                        href='https://github.com/Ateto1204'
                        target='_blank'
                        className='opacity-80 p-2 hover:opacity-40 hover:transition-opacity'
                    >
                        <FontAwesomeIcon icon={faGithub} size='xl' />
                    </a>
                    <a 
                        href='mailto:tonysu1204@gmail.com'
                        target='_blank'
                        className='opacity-80 p-2 hover:opacity-40 hover:transition-opacity'
                    >
                        <FontAwesomeIcon icon={faEnvelope} size='xl' />
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/ateto' 
                        target='_blank'
                        className='opacity-80 p-2 hover:opacity-40 hover:transition-opacity'
                    >
                        <FontAwesomeIcon icon={faLinkedin} size='xl' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile;