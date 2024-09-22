import { GrSwift } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export const frontendSkills = [
    { title: 'Swift (SwiftUI, UIKit)', icon: GrSwift, color: '#FF4500' },
    { title: 'React', icon: FaReact, color: '#00FFFF' },
    { title: 'Next', icon: RiNextjsLine, color: 'black' }, 
    { title: 'Typescript', icon: BiLogoTypescript, color: '#36648B' },
    { title: 'Tailwind CSS', icon: RiTailwindCssFill, color: '#00E5EE' },
];

export const backendSkills = [
    { title: 'Java (Spring Boot)', icon: SiSpringboot, color: '#66CD00' },
    { title: 'Go (Gin)', icon: FaGolang, color: '#00BFFF' },
    { title: 'Node (Express)', icon: FaNodeJs, color: '#66CD00'}, 
];

export const dbSkills = [
    { title: 'Firebase', icon: IoLogoFirebase, color: '#EEAD0E' },
    { title: 'PostgreSQL', icon: BiLogoPostgresql, color: '#36648B' },
    { title: 'MySQL', icon: GrMysql, color: '#00758F' },
    { title: 'MongoDB', icon: SiMongodb, color: '#44883e'}, 
    { title: 'Redis', icon: DiRedis, color: '#c93131'}, 
]