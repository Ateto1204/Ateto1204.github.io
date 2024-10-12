import SkillCard from './SkillCard';
import { skillData } from '../../data/skillData';

function SkillCardSet() {
    return (
        <div className='flex justify-evenly flex-wrap'> {/* card-set */}
            { skillData.map((item, index) => (
                <SkillCard 
                    key={index}
                    title={item.title} 
                    skills={item.data} 
                />
            ))}
        </div>
    )
}

export default SkillCardSet;