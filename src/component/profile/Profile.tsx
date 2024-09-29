import { useAOS } from '../../controller/useAOS';
import 'aos/dist/aos.css';

import { ProfileAvatar } from './ProfileAvatar';
import { IconLink } from './IconLink';
import { ProfileTitle } from './ProfileTitle';
import { ProfileSubtitle } from './ProfileSubtitle';
import { ProfileTextParagraph } from './ProfileTextParagraph';
import { contactData } from '../../data/profile/contactData';
import { LanguageManager } from '../../controller/LanguageManager';

function Profile() {
    const profileParagraph = LanguageManager.localString('profile-paragraph')
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
                { Array.isArray(profileParagraph) && 
                    profileParagraph.map((text, index) => (
                    <ProfileTextParagraph key={index} text={text} />
                )) }
                <div className='pt-3'>
                    { contactData.map((contact, index) => (
                        <IconLink 
                            key={index}
                            href={contact.href}
                            icon={contact.icon} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;