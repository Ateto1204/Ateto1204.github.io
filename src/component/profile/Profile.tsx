import { useEffect } from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ProfileAvatar } from './ProfileAvatar';
import { IconLink } from './IconLink';
import { ProfileTitle } from './ProfileTitle';
import { ProfileSubtitle } from './ProfileSubtitle';
import { ProfileTextParagraph } from './ProfileTextParagraph';
import { profileParagraphsData } from '../../data/profileParagraphsData';

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
                { profileParagraphsData.map((text, index) => (
                    <ProfileTextParagraph key={index} text={text} />
                )) }
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