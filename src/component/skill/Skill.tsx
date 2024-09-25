import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';

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
                <h1 className='font-serif font-semibold leading pl-6 text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem]'>
                    Skills
                </h1>
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