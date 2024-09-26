import { faBedPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { profileSubtitle } from '../../data/profile/profileData';

export const ProfileSubtitle = () => (
    <div className='flex items-center mt-[10px] mb-5'>
        <FontAwesomeIcon icon={faBedPulse} />
        <h2 className='font-serif font-semibold px-[10px] 
                    text-base max-w-48 md:text-lg md:max-w-60
                    lg:text-xl xl:max-w-max xl:text-2xl'>
            {profileSubtitle}
        </h2>
        <FontAwesomeIcon icon={faAccessibleIcon} size='lg' />
    </div>
);