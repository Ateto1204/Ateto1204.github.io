import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { Subtitle } from '../subtitle/Subtitle';
import { TimelineItem } from './TimelineItem';
import { timelineItems } from '../../data/expData';

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
                <Subtitle content='Experience' />
            </div>
            <div className='flex justify-center mt-20'> {/* timeline */}
                <ul className='flex flex-col justify-start items-stretch'> {/* timeline-list */}
                    { timelineItems.map((item, index) => (
                        <TimelineItem
                            key={index}
                            date={item.date}
                            title={item.title}
                            company={item.company}
                            skill={item.skill}
                            description={item.description}
                        />
                    )) }
                </ul>
            </div>
        </section>
    );
}

export default Experience;