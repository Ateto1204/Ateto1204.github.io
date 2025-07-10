import { useAOS } from "@/controller/useAOS";
import { faCodeMerge } from "@fortawesome/free-solid-svg-icons";

import Subtitle from "@/component/subtitle/Subtitle";
import SkillCardSet from "./SkillCardSet";

function Skill() {
    useAOS();

    return (
        <article className="pt-44" data-aos="fade-up">
            <Subtitle content="Skills" icon={faCodeMerge} />
            <SkillCardSet />
        </article>
    );
}

export default Skill;
