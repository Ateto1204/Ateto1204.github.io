import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

interface TimelineItemProps {
    date: string, 
    title: string,
    company: string,
    description: string,
    alertMessage: string,
}

const TimelineItem = ({
    date,
    title,
    company,
    description,
    alertMessage,
}: TimelineItemProps) => {
    return (
        <li className='overflow-hidden relative m-0'>
            <p className='text-sm md:text-base float-left font-semibold w-[70px] md:w-[170px] mt-4 mr-5 md:mr-0'>
                {date}
            </p>
            <div 
                className='w-3/5 float-left border-l-4 border-solid pl-8 py-4
                            before:w-3 before:h-3 before:rounded-full before:bg-gray-400 
                            before:absolute before:left-[86px] md:before:left-[166px] before:top-[24px]'
            >
                <div 
                    className='cursor-pointer pl-4 py-2 hover:opacity-60 transition-opacity
                                shadow-[1px_1px_10px] border rounded-2xl border-[rgb(184,190,197)]'
                    onClick={() => alert(alertMessage)}
                >
                    <h3 className='font-serif text-lg lg:text-xl font-semibold my-4'>
                        {title}
                    </h3>
                    <p className='my-2'>
                        {company}{description ? ' | ' + description : ''}
                    </p>
                </div>
            </div>
        </li>
    );
}

function Experience() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    const timelineItems = [
        {
            date: 'Jul2024 - Present',
            title: 'Software Engineer Intern',
            company: 'Aidmics Biotechnology Ltd.',
            description: 'Swift (UIKit, SwiftUI)',
            alertMessage: 'Software Engineer Intern',
        },
        {
            date: 'Feb2024 - Jun2024',
            title: 'NSTC Part-time Contracted Assistant',
            company: 'National Taiwan Ocean University (NTOU)',
            description: 'C++',
            alertMessage: 'NSTC Part-time Contracted Assistant',
        },
        {
            date: 'Sep2023 - Jan2024',
            title: 'Lecturer of Basic Programming',
            company: 'National Taiwan Ocean University (NTOU)',
            description: 'C/C++',
            alertMessage: 'Lecturer of Basic Programming',
        },
        {
            date: 'Jan2023 - Jun2023',
            title: 'General Coordinator of College Admission Sharing Event',
            company: 'Ying-Hai High School (YHSH)',
            description: '',
            alertMessage: 'General Coordinator of College Admission Sharing Event',
        },
        {
            date: 'Oct2021 - Jun2022',
            title: 'Lecturer of Basic Programming',
            company: 'Ying-Hai High School (YHSH)',
            description: 'Python',
            alertMessage: 'Lecturer of Basic Programming',
        },
    ];

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
            <div className='flex justify-center mt-20'> {/* timeline */}
                <ul className='flex flex-col justify-start items-stretch'> {/* timeline-list */}
                    { timelineItems.map((item, index) => (
                        <TimelineItem
                            key={index}
                            date={item.date}
                            title={item.title}
                            company={item.company}
                            description={item.description}
                            alertMessage={item.alertMessage}
                        />
                    )) }
                </ul>
            </div>
        </section>
    );
}

export default Experience;