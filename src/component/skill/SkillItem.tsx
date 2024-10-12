import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface SkillProps {
    title: string, 
    IconComponent: any, 
    iconColor: string,
}

function SkillItem({ title, IconComponent, iconColor }: SkillProps) {
    return (
        <div className='flex-[0_0_auto] relative xl:w-1/2 text-lg py-4'>
            <span className='pr-3 inline-flex text-base 2xl:text-lg'>
                <FontAwesomeIcon icon={faCode} className='pr-2 pt-1' />
                {title}
                <IconComponent className='w-8 h-auto pl-2' color={iconColor} />
            </span>
        </div>
    );
};

export default SkillItem;