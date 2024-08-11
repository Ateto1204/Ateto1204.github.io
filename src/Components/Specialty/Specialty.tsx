import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCodeCompare, faCodePullRequest, faCubes } from '@fortawesome/free-solid-svg-icons';

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
                <h1 className='font-serif font-semibold text-6xl pl-5 m-0'>Specialties</h1>
            </div>
            <div className='grid grid-cols-3 gap-20 
                            border rounded-3xl border-solid border-[gray]
                            shadow-[5px_5px_20px] p-8 w-fit'> {/* specialty-grid */}
                <div className='flex flex-col flex-wrap m-2'> {/* specialty-item */}
                    <div className='flex flex-row items-baseline pb-[10px]'> {/* specialty-title */}
                        <FontAwesomeIcon icon={faCodePullRequest} />
                        <h3 className='font-sans text-2xl pl-2 font-semibold items-baseline'>軟體工程</h3>
                    </div>
                    <p className='leading-8 m-0'>
                        熟悉軟體開發流程如 Scrum，於大一開始擔任軟體工程實習生，目前主要使用 Swift 進行 iOS APP 開發，並專注於相機軟體的開發。
                    </p>
                </div>
                <div className='flex flex-col flex-wrap m-2'> {/* specialty-item */}
                    <div className='flex flex-row items-baseline pb-[10px]'> {/* specialty-title */}
                        <FontAwesomeIcon icon={faCubes} />
                        <h3 className='font-sans text-2xl pl-2 font-semibold items-baseline'>物件導向</h3>
                    </div>
                    <p className='leading-8 m-0'>
                        熟悉 SOLID 原則以及設計模式，習慣且擅長基於 OOP 開發出具有低耦合且高模組化特性的架構模式以達成槓桿未來。
                    </p>
                </div>
                <div className='flex flex-col flex-wrap m-2'> {/* specialty-item */}
                    <div className='flex flex-row items-baseline pb-[10px]'> {/* specialty-title */}
                        <FontAwesomeIcon icon={faBook} />
                        <h3 className='font-sans text-2xl pl-2 font-semibold items-baseline'>程式教學</h3>
                    </div>
                    <p className='leading-8 m-0'>
                        自高中至今多次以講師身份教授程式設計相關課程，我擅長換位思考找出學生的學習痛點，由此可知我是一個有同理心的人。
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Specialty;