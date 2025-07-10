import { GrSwift } from "react-icons/gr";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import {
    SiSpringboot,
    SiMongodb,
    SiGithubactions,
    SiPlaywright,
    SiJest,
    SiXcode,
    SiKong,
    SiJunit5,
    SiNginx,
    SiSupabase,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaGolang, FaGitAlt } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";

const frontendSkills = [
    { title: "Swift (SwiftUI, UIKit)", icon: GrSwift, color: "#FF4500" },
    { title: "React", icon: FaReact, color: "#00FFFF" },
    { title: "Next", icon: RiNextjsLine, color: "black" },
    { title: "Typescript", icon: BiLogoTypescript, color: "#36648B" },
    { title: "Tailwind CSS", icon: RiTailwindCssFill, color: "#00E5EE" },
];

const backendSkills = [
    { title: "Java (Spring Boot)", icon: SiSpringboot, color: "#66CD00" },
    { title: "Go (Gin)", icon: FaGolang, color: "#00BFFF" },
    { title: "Node (Express)", icon: FaNodeJs, color: "#249937" },
    { title: "Kong Gateway", icon: SiKong, color: "#21A66F" },
    { title: "Nginx", icon: SiNginx, color: "#248c37" },
    { title: "Supabase", icon: SiSupabase, color: "#248c37" },
];

const dbSkills = [
    { title: "Firebase", icon: IoLogoFirebase, color: "#EEAD0E" },
    { title: "PostgreSQL", icon: BiLogoPostgresql, color: "#36648B" },
    { title: "MySQL", icon: GrMysql, color: "#00758F" },
    { title: "MongoDB", icon: SiMongodb, color: "#44883e" },
    { title: "Redis", icon: DiRedis, color: "#c93131" },
];

const devopsSkills = [
    { title: "Git", icon: FaGitAlt, color: "#FF4500" },
    { title: "GitHub Actions", icon: SiGithubactions, color: "blue" },
    { title: "Docker", icon: FaDocker, color: "#36648B" },
];

const testSkills = [
    { title: "Playwright", icon: SiPlaywright, color: "#44883e" },
    { title: "Jest", icon: SiJest, color: "orange" },
    { title: "XCTest", icon: SiXcode, color: "#44883e" },
    { title: "Unit", icon: SiJunit5, color: "#ae3837" },
];

export const skillData = [
    { title: "Frontend", data: frontendSkills },
    { title: "Backend", data: backendSkills },
    { title: "Database", data: dbSkills },
    { title: "DevOps", data: devopsSkills },
    { title: "Test", data: testSkills },
];
