import styles from './Specialty.module.css'

function Specialty() {
    return (
        <section className={styles['specialty']}>
            <h1>Specialty</h1>
            <div className={styles['specialty-grid']}>
                <div className={styles['specialty-item']}>
                    <h3>軟體工程</h3>
                    <p>於大一下開始擔任軟體工程實習生，專注於 iOS APP 開發</p>
                </div>
                <div className={styles['specialty-item']}>
                    <h3>物件導向</h3>
                    <p>包含 SOLID 原則以及設計模式。</p>
                </div>
                <div className={styles['specialty-item']}>
                    <h3>程式教學</h3>
                    <p>自高中至今多次以講師身份教授程式設計相關課程。</p>
                </div>
            </div>
        </section>
    );
}

export default Specialty