import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { TimelineItem } from './TimelineItem';
import { timelineItems } from './expData';

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