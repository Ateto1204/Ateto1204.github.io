import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';

import { Subtitle } from '../subtitle/Subtitle';
import { SpecialtyItem } from './SpecialtyItem';
import { useAOS } from '../../controller/useAOS';
import { glassBgStyle } from '../../data/glassStyle';
import { LanguageManager } from '../../controller/LanguageManager';

function Specialty() {
    const specialties = LanguageManager.localString('specialties');
    useAOS();

    return (
        <section 
            className='flex flex-wrap justify-center flex-col items-center px-8 py-8' 
            data-aos="fade-up"
        >
            <div className='flex justify-center items-center pb-[70px]'>
                <FontAwesomeIcon icon={faCodeCompare} size='xl' />
                <Subtitle content='Specialties' />
            </div>
            <div className={`grid lg:grid-cols-3 gap-5 lg:gap-20 p-8 w-fit
                            ${glassBgStyle}`}>
                { Array.isArray(specialties) &&
                specialties.map((specialty, index) => (
                    <SpecialtyItem 
                        key={index}
                        icon={specialty.icon} 
                        title={specialty.title} 
                        description={specialty.description} 
                    />
                ))}
            </div>
        </section>
    );
}

export default Specialty;