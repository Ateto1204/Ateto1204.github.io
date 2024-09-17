import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { GrSwift } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

interface SkillProps {
    title: string, 
    IconComponent: any, 
    iconColor: string,
}

interface SkillCardProps {
    title: string,
    skills: any[],
}

const MySkill = ({ title, IconComponent, iconColor }: SkillProps) => {
    return (
        <div className='flex-[0_0_auto] relative lg:w-1/2 text-lg py-4'>
            <span className='pr-3 inline-flex text-base lg:text-sm xl:text-lg'>
                <FontAwesomeIcon icon={faCode} className='pr-2 pt-1' />
                {title}
                <IconComponent className='w-8 h-auto pl-2' color={iconColor} />
            </span>
        </div>
    );
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <div className='flex flex-col flex-[0_0_auto] grow-0 shrink-0 basis-auto 
                        min-w-72 lg:min-w-[460px] xl:min-w-[550px] 
                        w-5/12 shadow-[1px_1px_10px] border rounded-2xl 
                        border-[rgb(184,190,197)] p-6 mt-4'>
            <div className='text-center text-xl md:text-2xl font-semibold'>
                {title}
            </div>
            <hr className='m-4 opacity-75' />
            <div className='lg:flex flex-wrap'>
                { skills.map((skill, index) => (
                    <MySkill
                        key={index}
                        title={skill.title}
                        IconComponent={skill.icon}
                        iconColor={skill.color}
                    />
                )) }
            </div>
        </div>
    );
};

function Skill() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    const frontendSkills = [
        { title: 'Swift (SwiftUI, UIKit)', icon: GrSwift, color: '#FF4500' },
        { title: 'React.js', icon: FaReact, color: '#00FFFF' },
        { title: 'Tailwind CSS', icon: RiTailwindCssFill, color: '#00E5EE' },
    ];

    const backendSkills = [
        { title: 'Java (Spring Boot)', icon: SiSpringboot, color: '#66CD00' },
        { title: 'Go (Gin, Gorilla)', icon: FaGolang, color: '#00BFFF' },
        { title: 'Firebase', icon: IoLogoFirebase, color: '#EEAD0E' },
        { title: 'MySQL', icon: GrMysql, color: '#1874CD' },
        { title: 'PostgreSQL', icon: BiLogoPostgresql, color: '#36648B' },
    ];

    return (
        <section className='pt-44' data-aos='fade-up'> {/* skill */}
            <div className='flex justify-center items-center m-0 pb-5'> {/* skill-title */}
                <FontAwesomeIcon icon={faCodeMerge} size='xl' />
                <h1 className='font-serif font-semibold leading pl-6 text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem]'>
                    Skills
                </h1>
            </div>
            <h2 className='font-serif font-semibold text-center my-2 mb-2 text-base md:text-lg lg:text-xl xl:text-2xl '>
                My Development Skills
            </h2>
            <div className='flex justify-evenly flex-wrap'> {/* card-set */}
                <SkillCard title="Frontend" skills={frontendSkills} />
                <SkillCard title="Backend" skills={backendSkills} />
            </div>
        </section>
    );
}

export default Skill;