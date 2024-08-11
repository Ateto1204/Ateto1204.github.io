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

function Skill() {
    
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <section className='pt-44' data-aos="fade-up"> {/* skill */}
            <div className='flex justify-center items-center m-0 pb-5'> {/* skill-title */}
                <FontAwesomeIcon icon={faCodeMerge} size="xl" />
                <h1 className='font-serif text-6xl font-semibold m-0 pl-5'>
                    Skills
                </h1>
            </div>
            <h2 className='font-serif text-2xl font-semibold my-2 mb-2 text-center'>
                My Development Skills
            </h2>
            <div className='flex justify-evenly flex-wrap'> {/* card-set */}
                {/* front-end skill */}
                <div className='flex flex-col flex-[0_0_auto] grow-0 shrink-0 basis-auto
                                min-w-[500px] w-1/2 shadow-[1px_1px_10px] 
                                border rounded-2xl  border-[rgb(184,190,197) 
                                p-6 mt-4'> {/* card */}
                    <div className='text-center text-[1.7rem] font-semibold'> {/* card-title */}
                        Frontend
                    </div>
                    <hr className='m-4 opacity-75' />
                    <div className='flex flex-wrap'> {/* skill-card-col-set */}
                        <div className='flex-[0_0_auto] w-1/2 text-lg py-4'> {/* skill-card-col */}
                            <span className='pr-3 inline-flex'>
                                <FontAwesomeIcon icon={faCode} className='pr-2 pt-1' />
                                Swift (SwiftUI, UIKit)
                                {/* skill-card-col-icon */}
                                <GrSwift className='w-8 h-auto pl-2' color='#FF4500'/>
                            </span>
                        </div>
                        <div className='flex-[0_0_auto] w-1/2 text-lg py-4'>
                            <span className='pr-3 inline-flex'>
                                <FontAwesomeIcon icon={faCode} className='pr-2 pt-1' />
                                React.js
                                {/* skill-card-col-icon */}
                                <FaReact className='w-8 h-auto pl-2' color='00FFFF'/>
                            </span>
                        </div>
                    </div>
                </div>
                {/* back-end skill */}
                <div className='flex flex-col grow-0 shrink-0 basis-auto
                                min-w-[500px] w-5/12 shadow-[1px_1px_10px] 
                                border rounded-2xl  border-[rgb(184,190,197) 
                                p-6 mt-4'> {/* card */}
                    <div className='text-center text-[1.7rem] font-semibold'> {/* card-title */}
                        Backend
                    </div>
                    <hr className='m-4 opacity-75' />
                    <div className='flex flex-wrap'>
                        <div className='flex-[0_0_auto] w-1/2 text-lg py-4'>
                            <span className='pr-3 inline-flex'>
                                <FontAwesomeIcon icon={faCode} className='pr-2 pt-1' />
                                Java (Spring Boot)
                                {/* skill-card-col-icon */}
                                <SiSpringboot className='w-8 h-auto pl-2' color='#66CD00' />
                            </span>
                        </div>
                        <div className='flex-[0_0_auto] w-1/2 text-lg py-4'>
                            <span className='pr-3 inline-flex'>
                                <FontAwesomeIcon icon={faCode} className='pr-2 pt-1' />
                                Go (Gin, Gorilla)
                                {/* skill-card-col-icon */}
                                <FaGolang className='w-10 h-auto pl-2' color='#00BFFF'/>
                            </span>
                        </div>
                        <div className='flex-[0_0_auto] w-1/2 text-lg py-4'>
                            <span className='pr-3 inline-flex'>
                                <FontAwesomeIcon icon={faCode} className='pr-2 pt-1' />
                                GCP (Firebase)
                                {/* skill-card-col-icon */}
                                <IoLogoFirebase className='w-8 h-auto pl-2' color='#EEAD0E' />
                            </span>
                        </div>
                        <div className='flex-[0_0_auto] w-1/2 text-lg py-4'>
                            <span className='pr-3 inline-flex'>
                                <FontAwesomeIcon icon={faCode} className='pr-2 pt-1' />
                                MySQL
                                {/* skill-card-col-icon */}
                                <GrMysql className='w-8 h-auto pl-2' color='#1874CD' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;