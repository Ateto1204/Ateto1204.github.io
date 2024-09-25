import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';

import { Subtitle } from '../subtitle/Subtitle';
import { SkillCard } from './SkillCard';
import { frontendSkills, backendSkills, dbSkills } from '../../data/skillData';


function Skill() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <section className='pt-44' data-aos='fade-up'> {/* skill */}
            <div className='flex justify-center items-center m-0 pb-5'> {/* skill-title */}
                <FontAwesomeIcon icon={faCodeMerge} size='xl' />
                <Subtitle content='Skills' />
            </div>
            <div className='flex justify-evenly flex-wrap'> {/* card-set */}
                <SkillCard title="Frontend" skills={frontendSkills} />
                <SkillCard title="Backend" skills={backendSkills} />
                <SkillCard title="Database" skills={dbSkills} />
            </div>
        </section>
    );
}

export default Skill;