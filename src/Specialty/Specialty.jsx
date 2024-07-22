import styles from './Specialty.module.css'

function Specialty() {
    return (
        <section className={styles['specialty']}>
            <h1>Specialty</h1>
            <div className={styles['specialty-grid']}>
                <div className={styles['specialty-item']}>
                    <h3>軟體工程</h3>
                    <p>於大一下開始擔任軟體工程實習生，目前主要使用 Swift 進行 iOS APP 開發，並專注於相機軟體的開發。</p>
                </div>
                <div className={styles['specialty-item']}>
                    <h3>物件導向</h3>
                    <p>包含 SOLID 原則以及設計模式，並基於 OOP 開發出具備低耦合高模組化的架構模式以達成槓桿未來。</p>
                </div>
                <div className={styles['specialty-item']}>
                    <h3>程式教學</h3>
                    <p>自高中至今多次以講師身份教授程式設計相關課程，我擅長換位思考找出學生的學習痛點，由此可知我是一個有同理心的人。</p>
                </div>
            </div>
        </section>
    );
}

export default Specialty