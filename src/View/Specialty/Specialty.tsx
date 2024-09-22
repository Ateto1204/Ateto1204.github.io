import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';

import { SpecialtyItem } from './SpecialtyItem';
import { specialties } from './specialtyData';

function Specialty() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

    return (
        <section 
            className='flex flex-wrap justify-center flex-col items-center px-8 py-8' 
            data-aos="fade-up"
        > {/* specialty */}
            <div className='flex justify-center items-center pb-[70px]'> {/* specialty-title */}
                <FontAwesomeIcon icon={faCodeCompare} size='xl' />
                <h1 className='font-serif font-semibold leading pl-6
                               text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem]'>
                    Specialties
                </h1>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 lg:gap-20 
                            border rounded-3xl border-solid border-[gray]
                            shadow-[5px_5px_20px] p-8 w-fit'> {/* specialty-grid */}
                {specialties.map((specialty, index) => (
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