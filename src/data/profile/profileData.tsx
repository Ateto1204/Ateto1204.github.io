import { HoverLink } from "../../component/profile/HoverLink";

export const name = '蘇東毅';
export const profileSubtitle = '軟體工程師 | 開發者';

export const engName = 'Dong-Yi Su';
export const engProfileSubtitle = 'Software Engineer | Developer';

const company = 'Aidmics Biotechnology Ltd.';
const companyHref = 'https://www.aidmics.com/';

export const profileParagraphsData = [
    <>
        這裡是蘇東毅 aka Ateto，雖然很想休學但姑且就讀國立臺灣海洋大學資訊工程學系二年級，同時於
        <HoverLink 
            href={companyHref}
            content={company}
        />
        擔任 Software Engineer Intern。
    </>,
    '我的專長領域包含譁眾取寵、軟體工程、系統設計、程式教學，目前主要投入於 iOS APP 開發與測試，同時學習前後端開發。'
];

export const engProfileParagraphsData = [
    <>
        This is Dong-Yi Su aka Ateto, currently studying computer science and engineering at National Taiwan Ocean University, and working as a Software Engineer Intern at 
        <HoverLink 
            href={companyHref}
            content={company}
        />
    </>,
    'My domains of expertise include software engineering, system design, and programming teaching. Currently, I am mainly engaged in iOS APP development and testing, while learning front-end and back-end development.'
];

export const mbtiUrls = [
    'https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_steve_jobs.svg?v=6',
    'https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_dr_strange.svg?v=6',
    'https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_gordon_ramsay.svg?v=6',
    'https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_franklin_d_roosevelt.svg?v=6'
];

export const avatarURL = 'https://media.licdn.com/dms/image/v2/D4E03AQGv6c9UkOGZLA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731845835336?e=1737590400&v=beta&t=jxdhcjxm-iHP1DleZJQicCnkOtJN8Pb3d_cRuak19QY';