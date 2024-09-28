import { HoverLink } from "../../component/profile/HoverLink";

export const myEngName = 'Dong-Yi Su';
export const profileSubtitle = 'Software Engineer / Developer';
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
    '我的專長領域包含譁眾取寵、軟體工程、物件導向、程式教學，目前主要投入於 iOS APP 開發與測試，同時學習前後端開發。'
];