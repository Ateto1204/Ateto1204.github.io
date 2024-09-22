import { useEffect } from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ProfileAvatar } from './ProfileAvatar';
import { IconLink } from './IconLink';
import { HoverLink } from './HoverLink';
import { ProfileTitle } from './ProfileTitle';
import { ProfileSubtitle } from './ProfileSubtitle';

const useAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);
};

function Profile() {
    useAOS();

    return (
        <div 
            className='m-10 md:m-6 md:py-12 md:px-5 lg:m-14 lg:py-36 xl:px-24' 
            data-aos='fade-up'
        >
            
            <div className='max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
                <div className='flex lg:block'>
                    <ProfileAvatar />
                    <div className='flex flex-col justify-center'>
                        <ProfileTitle />
                        <ProfileSubtitle />
                    </div>
                </div>
                <p className='text-base md:text-[1.05rem] leading-7 mb-5'>
                    這裡是蘇東毅 aka Ateto，雖然很想休學但姑且就讀國立臺灣海洋大學資訊工程學系二年級，同時於 <HoverLink /> 擔任 Software Engineer Intern。
                </p>
                <p className='text-base md:text-[1.05rem] leading-7 mb-5'>
                    我的專長領域包含譁眾取寵、軟體工程、物件導向、程式教學，目前主要投入於 iOS APP 開發與測試，同時學習前後端開發。
                </p>
                <div className='pt-3'>
                    <IconLink href='https://github.com/Ateto1204' icon={faGithub} />
                    <IconLink href='mailto:tonysu1204@gmail.com' icon={faEnvelope} />
                    <IconLink href='https://www.linkedin.com/in/ateto' icon={faLinkedin} />
                </div>
            </div>
        </div>
    );
}

export default Profile;