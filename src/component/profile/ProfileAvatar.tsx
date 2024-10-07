import React, { useRef } from 'react';
import myProfile from '../../assets/profile.png';
import mbti from '../../assets/mbti.svg';
import { name } from '../../data/profile/profileData';

function ProfileAvatar() {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (cardRef.current) {
            cardRef.current.classList.toggle('transform-rotateY-180');
        }
    };

    return (
        <div 
            ref={cardRef}
            onClick={handleClick}
            className={`relative transform-style-3d transition duration-300
                        h-36 w-36 mb-3 mt-12 mr-6 
                        md:h-52 md:w-44 lg:h-80 lg:w-56 lg:float-left
                        xl:h-96 xl:w-80 xl:mr-16`}
        >
            <div className='card'>
                <img 
                    src={myProfile} 
                    alt={name}
                    className='h-36 w-auto shadow-2xl rounded-lg
                                md:h-52 lg:h-72 2xl:h-80'
                />
            </div>
            <div className='card w-28 h-auto transform-rotateY-180
                            bg-slate-100 rounded-lg shadow-2xl
                            2xl:w-64 lg:w-52 md:w-36 xl:left-16 md:left-4'>
                <p className='flex justify-center text-sm pt-1 
                                md:text-xl lg:text-2xl xl:text-3xl md:pt-4 
                                font-semibold text-violet-600'>
                    ENTJ
                </p>
                <img
                    src={mbti}
                    alt='ENTJ'
                    className='md:m-5 py-1 md:py-2 drop-shadow-2xl'
                />
            </div>
        </div>
    );
}

export default ProfileAvatar;