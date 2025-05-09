import { useEffect, useRef, useState } from 'react';
import { mbtiUrls } from '../data/profile/profileData';
import ProfileAvatar from '../component/profile/avatar/ProfileAvatar';



function ProfileAvatarController() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [currentMBTIimg, setCurrentMBTIimg] = useState<string>('');
    const [isFront, setIsFront] = useState(true);
    const [randSequence, setRandSequence] = useState<number[]>([]);

    useEffect(() => {
        toggleMBTIurl();
    }, [])

    const handleClick = async() => {
        if (cardRef.current) {
            cardRef.current.classList.toggle('transform-rotateY-180');
            setIsFront(!isFront);
            if (!isFront) {
                setTimeout(() => {
                    toggleMBTIurl();
                }, 150);
            }
        }
    };

    const toggleMBTIurl = async () => {
        if (randSequence.length < 3) {
            await generateRandSequence();
        }
      
        const idx = randSequence[0];
        const img = mbtiUrls[idx ?? 0];
      
        setRandSequence(randSequence.slice(1));
        console.log(randSequence);
        setCurrentMBTIimg(img);
    };

    const getRandMbtiUrlIndex = (last: number): number => {
        const urlIdx = Math.floor(Math.random() * mbtiUrls.length);
        if (urlIdx === last) {
            if (urlIdx + 1 === mbtiUrls.length) return 0;
            return urlIdx + 1;
        }
        return urlIdx;
    }

    const generateRandSequence = async() => {
        const number = 10;
        let urlSeq: number[] = randSequence;
        let last = -1;
        for (let i = 0; i < number; i++) {
            const url: number = getRandMbtiUrlIndex(last);
            urlSeq.push(url);
            last = url;
        }
        setRandSequence(urlSeq);
    }

    return (
        <ProfileAvatar
            cardRef={cardRef} 
            handleClick={handleClick} 
            imgUrl={currentMBTIimg} 
        />
    );
}

export default ProfileAvatarController;