import { MySkill } from "./MySkill";

interface SkillCardProps {
    title: string,
    skills: any[],
}

export const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <div className='flex flex-col flex-[0_0_auto] grow-0 shrink-0 basis-auto 
                        min-w-72 2xl:min-w-[560px]
                        w-5/12 shadow-[1px_1px_10px] border rounded-2xl 
                        border-[rgb(184,190,197)] p-6 m-4'>
            <div className='text-center text-xl md:text-2xl font-semibold'>
                {title}
            </div>
            <hr className='m-4 opacity-75' />
            <div className='xl:flex flex-wrap'>
                { skills.map((skill, index) => (
                    <MySkill
                        key={index}
                        title={skill.title}
                        IconComponent={skill.icon}
                        iconColor={skill.color}
                    />
                )) }
            </div>
        </div>
    );
};