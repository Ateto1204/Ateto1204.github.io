import styles from './Experience.module.css'

function Experience() {
    return (
        <div className={styles['experience']}>
            <h1>Experience</h1>
            <h2>Software Engineer / Teacher / Leader</h2>
            <ul className={styles['timeline']}>
                <li>
                    <strong>
                        <p className={styles['timeline-date']}>Jul2024 - Present</p>
                    </strong>
                    <div className={styles['timeline-content']}>
                        <h3>Software Engineer Intern</h3>
                        <p>Aidmics Biotechnology Ltd. | Swift (UIKit, SwiftUI)</p>
                    </div>
                </li>
                <li>
                    <strong>
                        <p className={styles['timeline-date']}>Feb2024 - Jun2024</p>
                    </strong>
                    <div className={styles['timeline-content']}>
                        <h3>NSTC Part-time Contracted Assistant</h3>
                        <p>National Taiwan Ocean University (NTOU) | C++</p>
                    </div>
                </li>
                <li>
                    <strong>
                        <p className={styles['timeline-date']}>Sep2023 - Jan2024</p>
                    </strong>
                    <div className={styles['timeline-content']}>
                        <h3>Lecturer of Basic Programming</h3>
                        <p>National Taiwan Ocean University (NTOU) | C/C++</p>
                    </div>
                </li>
                <li>
                    <strong>
                        <p className={styles['timeline-date']}>Jan2023 - Jun2023</p>
                    </strong>
                    <div className={styles['timeline-content']}>
                        <h3>General Coordinator of College Admission Sharing Event</h3>
                        <p>Ying-Hai High School (YHSH)</p>
                    </div>
                </li>
                <li>
                    <strong>
                        <p className={styles['timeline-date']}>Oct2021 - Jun2022</p>
                    </strong>
                    <div className={styles['timeline-content']}>
                        <h3>Lecturer of Basic Programming</h3>
                        <p>Ying-Hai High School (YHSH) | Python</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Experience