import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SpecialtyItemProps {
    icon: any, 
    title: string, 
    description: string,
}

export const SpecialtyItem = ({ icon, title, description }: SpecialtyItemProps) => {
    return (
        <div className='flex flex-col flex-wrap m-2'> {/* specialty-item */}
            <div className='flex flex-row items-baseline pb-[10px]'> {/* specialty-title */}
                <FontAwesomeIcon icon={icon} />
                <h3 className='font-sans text-xl lg:text-2xl pl-2 font-semibold items-baseline'>
                    {title}
                </h3>
            </div>
            <p className='leading-8 m-0'>
                {description}
            </p>
        </div>
    );
};