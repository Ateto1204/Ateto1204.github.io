import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import Subtitle from "@/component/subtitle/Subtitle";
import { useAOS } from "@/controller/useAOS";
import SpecialtySet from "./SpecialtySet";

function Specialty() {
    useAOS();

    return (
        <article
            className="flex flex-wrap justify-center flex-col items-center px-8 py-8"
            data-aos="fade-up"
        >
            <Subtitle content="Specialties" icon={faCodeCompare} />
            <SpecialtySet />
        </article>
    );
}

export default Specialty;
