import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function Experience() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);
    return (
        <section className='px-8 py-44 transition-[10s]' data-aos='fade-up'> {/* experience */}
            <div className='flex justify-center items-center m-0'> {/* experience-title */}
                <FontAwesomeIcon icon={faCodeBranch} size='xl'/>
                <h1 className='font-serif font-semibold leading pl-6
                               text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem]'>
                    Experience
                </h1>
            </div>
            <h2 className='font-serif font-semibold text-center my-6
                            text-base md:text-lg lg:text-xl xl:text-2xl '>
                Software Engineer / Teacher / Leader
            </h2>
            <div className='flex justify-center mt-20' > {/* timeline */}
                <ul className='flex flex-col justify-start items-stretch'> {/* timeline-list */}
                    <li className='overflow-hidden relative m-0'>
                        <p className='text-sm md:text-base float-left font-semibold w-[70px] md:w-[170px] mt-4 mr-5 md:mr-0'>
                            Jul2024 - Present
                        </p> {/* timeline-date */}
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8 py-4
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[86px] md:before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <div 
                                className='cursor-pointer pl-4 py-2 hover:opacity-60 transition-opacity
                                            shadow-[1px_1px_10px] border rounded-2xl  border-[rgb(184,190,197)'
                                onClick={() => alert('Software Engineer Intern')}
                            > {/* exp-btn */}
                                <h3 className='font-serif text-lg lg:text-xl font-semibold my-4'>
                                    Software Engineer Intern
                                </h3>
                                <p className='my-2'>
                                    Aidmics Biotechnology Ltd. | Swift (UIKit, SwiftUI)
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='overflow-hidden relative m-0'>
                        <p className='text-sm md:text-base float-left font-semibold w-[70px] md:w-[170px] mt-4 mr-5 md:mr-0'>
                            Feb2024 - Jun2024
                        </p> {/* timeline-date */}
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8 py-4
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[86px] md:before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <div 
                                className='cursor-pointer pl-4 py-2 hover:opacity-60 transition-opacity
                                            shadow-[1px_1px_10px] border rounded-2xl  border-[rgb(184,190,197)'
                                onClick={() => alert('NSTC Part-time Contracted Assistant')}
                            > {/* exp-btn */}
                                <h3 className='font-serif text-lg lg:text-xl font-semibold my-4'>
                                    NSTC Part-time Contracted Assistant
                                </h3>
                                <p className='my-2'>
                                    National Taiwan Ocean University (NTOU) | C++
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='overflow-hidden relative m-0'>
                        <p className='text-sm md:text-base float-left font-semibold w-[70px] md:w-[170px] mt-4 mr-5 md:mr-0'>
                            Sep2023 - Jan2024
                        </p> {/* timeline-date */}
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8 py-4
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[86px] md:before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <div 
                                className='cursor-pointer pl-4 py-2 hover:opacity-60 transition-opacity
                                            shadow-[1px_1px_10px] border rounded-2xl  border-[rgb(184,190,197)'
                                onClick={() => alert('Lecturer of Basic Programming')}
                            > {/* exp-btn */}
                                <h3 className='font-serif text-lg lg:text-xl font-semibold my-4'>
                                    Lecturer of Basic Programming
                                </h3>
                                <p className='my-2'>
                                    National Taiwan Ocean University (NTOU) | C/C++
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='overflow-hidden relative m-0'>
                        <p className='text-sm md:text-base float-left font-semibold w-[70px] md:w-[170px] mt-4 mr-5 md:mr-0'>
                            Jan2023 - Jun2023
                        </p> {/* timeline-date */}
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8 py-4
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[86px] md:before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <div 
                                className='cursor-pointer pl-4 py-2 hover:opacity-60 transition-opacity
                                            shadow-[1px_1px_10px] border rounded-2xl  border-[rgb(184,190,197)'
                                onClick={() => alert('General Coordinator of College Admission Sharing Event')}
                            > {/* exp-btn */}
                                <h3 className='font-serif text-lg lg:text-xl font-semibold my-4'>
                                    General Coordinator of College Admission Sharing Event
                                </h3>
                                <p className='my-2'>
                                    Ying-Hai High School (YHSH)
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className='overflow-hidden relative m-0'>
                        <p className='text-sm md:text-base float-left font-semibold w-[70px] md:w-[170px] mt-4 mr-5 md:mr-0'>
                            Oct2021 - Jun2022
                        </p> {/* timeline-date */}
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8 py-4
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[86px] md:before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <div 
                                className='cursor-pointer pl-4 py-2 hover:opacity-60 transition-opacity
                                            shadow-[1px_1px_10px] border rounded-2xl  border-[rgb(184,190,197)'
                                onClick={() => alert('Lecturer of Basic Programming')}
                            > {/* exp-btn */}
                                <h3 className='font-serif text-xl font-semibold my-4'>
                                    Lecturer of Basic Programming
                                </h3>
                                <p className='my-2'>
                                    Ying-Hai High School (YHSH) | Python
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;