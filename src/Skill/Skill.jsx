import styles from './Skill.module.css'

function Skill() {
    const skillCircleIcon = <i className={styles['skill-circle-icon']}></i>
    return (
        <section className={styles['skill']}>
            <h1>Skill</h1>
            <h2>My Developing Skill</h2>
            <div className={styles['card-set']}>
                {/* front-end skill */}
                <div className={styles['card']}>
                    <div className={styles['cardTitle']}>Frontend</div>
                    <hr />
                    <div className={styles['skill-card-col-set']}>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>Swift (SwiftUI, UIKit)</span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>React.js</span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>HTML/CSS/Javascript</span>
                        </div>
                    </div>
                </div>
                {/* back-end skill */}
                <div className={styles['card']}>
                    <div className={styles['cardTitle']}>Backend</div>
                    <hr />
                    <div className={styles['skill-card-col-set']}>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>Java (Spring Boot)</span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>Go (Gin, Gorilla)</span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>GCP (Firebase)</span>
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill