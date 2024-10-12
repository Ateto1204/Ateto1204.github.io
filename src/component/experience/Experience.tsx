import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { useAOS } from '../../controller/useAOS';
import Subtitle from '../subtitle/Subtitle';
import { TimelineItem } from './TimelineItem';
import { LanguageManager } from '../../controller/LanguageManager';

function Experience() {
    const timelineItems = LanguageManager.localString('timeline-items');
    useAOS();

    return (
        <section className='px-8 py-44 transition-[10s]' data-aos='fade-up'> {/* experience */}
            <Subtitle content='Experience' icon={faCodeBranch} />
            <div className='flex justify-center mt-20'> {/* timeline */}
                <ul className='flex flex-col justify-start items-stretch xl:w-3/5'> {/* timeline-list */}
                    { Array.isArray(timelineItems) &&
                        timelineItems.map((item, index) => (
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