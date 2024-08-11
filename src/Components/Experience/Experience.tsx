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
        <section className='px-8 py-44' data-aos='fade-up'> {/* experience */}
            <div className='flex justify-center items-center m-0'> {/* experience-title */}
                <FontAwesomeIcon icon={faCodeBranch} size='xl'/>
                <h1 className='font-serif text-6xl font-semibold pl-6 m-0'>Experience</h1>
            </div>
            <h2 className='font-serif text-2xl font-semibold my-6 text-center'>
                Software Engineer / Teacher / Leader
            </h2>
            <div className='flex justify-center mt-20' > {/* timeline */}
                <ul className='flex flex-col justify-start items-stretch'> {/* timeline-list */}
                    <li className='overflow-hidden relative m-0'>
                        <strong>
                            <p className='float-left w-[170px] mt-4 text-slate-600'>
                                Jul2024 - Present
                            </p> {/* timeline-date */}
                        </strong>
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <h3 className='font-serif text-xl font-semibold my-4'>
                                Software Engineer Intern
                            </h3>
                            <p className='my-2'>
                                Aidmics Biotechnology Ltd. | Swift (UIKit, SwiftUI)
                            </p>
                        </div>
                    </li>
                    <li className='overflow-hidden relative m-0'>
                        <strong>
                            <p className='float-left w-[170px] mt-4 text-slate-600'>
                                Feb2024 - Jun2024
                            </p> {/* timeline-date */}
                        </strong>
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <h3 className='font-serif text-xl font-semibold my-4'>
                                NSTC Part-time Contracted Assistant
                            </h3>
                            <p className='my-2'>
                                National Taiwan Ocean University (NTOU) | C++
                            </p>
                        </div>
                    </li>
                    <li className='overflow-hidden relative m-0'>
                        <strong>
                            <p className='float-left w-[170px] mt-4 text-slate-600'>
                                Sep2023 - Jan2024
                            </p> {/* timeline-date */}
                        </strong>
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <h3 className='font-serif text-xl font-semibold my-4'>
                                Lecturer of Basic Programming
                            </h3>
                            <p className='my-2'>
                                National Taiwan Ocean University (NTOU) | C/C++
                            </p>
                        </div>
                    </li>
                    <li className='overflow-hidden relative m-0'>
                        <strong>
                            <p className='float-left w-[170px] mt-4 text-slate-600'>
                                Jan2023 - Jun2023
                            </p> {/* timeline-date */}
                        </strong>
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <h3 className='font-serif text-xl font-semibold my-4'>
                                General Coordinator of College Admission Sharing Event
                            </h3>
                            <p className='my-2'>
                                Ying-Hai High School (YHSH)
                            </p>
                        </div>
                    </li>
                    <li className='overflow-hidden relative m-0'>
                        <strong>
                            <p className='float-left w-[170px] mt-4 text-slate-600'>
                                Oct2021 - Jun2022
                            </p> {/* timeline-date */}
                        </strong>
                        <div 
                            className='w-3/5 float-left border-l-4 border-solid pl-8
                                        before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                                        before:absolute before:left-[166px] before:top-[24px]'
                        > {/* timeline-content */}
                            <h3 className='font-serif text-xl font-semibold my-4'>
                                Lecturer of Basic Programming
                            </h3>
                            <p className='my-2'>
                                Ying-Hai High School (YHSH) | Python
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience