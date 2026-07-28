import { HoverLink } from "@/component/profile/HoverLink";

export const name = "蘇東毅";
export const profileSubtitle = "開發者";

export const engName = "Dong-Yi Su";
export const engProfileSubtitle = "Developer";

const company = "Aidmics Biotechnology Ltd.";
const companyHref = "https://www.aidmics.com/";

const casdocHref = "https://casdoc.io";

export const profileParagraphsData = [
    <>
        這裡是蘇東毅 aka
        Ateto，雖然很想休學但姑且就讀國立臺灣海洋大學資訊工程學系二年級，並於
        <HoverLink href={companyHref} content={company} />
        擔任 Software Engineer Intern。
    </>,
    <>
        我的專長領域包含譁眾取寵、軟體工程、系統設計、程式教學，目前正在開發
        <HoverLink href={casdocHref} content="CasDoc" />
        ，一款透過結構視覺化解決文件追溯性問題的工具，提高文件維護、管理及追蹤的效率。
    </>,
];

export const engProfileParagraphsData = [
    <>
        This is Dong-Yi Su aka Ateto, currently studying computer science and
        engineering at National Taiwan Ocean University, and working as a
        Software Engineer Intern at
        <HoverLink href={companyHref} content={company} />
    </>,
    <>
        My domains of expertise include software engineering, system design, and
        programming teaching. I’m currently developing{" "}
        <HoverLink href={casdocHref} content="CasDoc" />, a tool that addresses
        document traceability issues through structural visualization, enhancing
        the efficiency of document maintenance, management, and tracking.
    </>,
];

export const mbtiUrls = [
    "https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_steve_jobs.svg?v=6",
    "https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_dr_strange.svg?v=6",
    "https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_gordon_ramsay.svg?v=6",
    "https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_franklin_d_roosevelt.svg?v=6",
];

export const avatarURL =
    "https://media.licdn.com/dms/image/v2/D4E03AQG2fF8PJUR0Iw/profile-displayphoto-shrink_800_800/B4EZdtviMrG4Ag-/0/1749892868477?e=1755734400&v=beta&t=Cfx_QWq3x-doGGT437hYjzKqb7uuLu0eddHfdS5vdQQ";
