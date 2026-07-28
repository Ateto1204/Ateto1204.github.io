import { glassBgStyle } from "@/data/glassStyle";
import SkillItem from "./SkillItem";

interface SkillCardProps {
    title: string;
    skills: any[];
}

function SkillCard({ title, skills }: SkillCardProps) {
    return (
        <div
            className={`flex flex-col flex-[0_0_auto] grow-0 shrink-0 basis-auto p-6 m-4
                        min-w-72 2xl:min-w-[560px] w-5/12 ${glassBgStyle}`}
        >
            <div className="text-center text-xl md:text-2xl font-semibold">
                {title}
            </div>
            <hr className="m-4 opacity-75" />
            <div className="xl:flex flex-wrap">
                {skills.map((skill, index) => (
                    <SkillItem
                        key={index}
                        title={skill.title}
                        IconComponent={skill.icon}
                        iconColor={skill.color}
                    />
                ))}
            </div>
        </div>
    );
}

export default SkillCard;
