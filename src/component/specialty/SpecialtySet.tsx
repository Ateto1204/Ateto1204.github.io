import { SpecialtyItem } from './SpecialtyItem';
import { glassBgStyle } from '../../data/glassStyle';
import { LanguageManager } from '../../controller/LanguageManager';

function SpecialtySet() {
    const specialties = LanguageManager.localString('specialties');
    return (
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
    )
}

export default SpecialtySet;