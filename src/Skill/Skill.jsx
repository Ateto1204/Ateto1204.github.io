import styles from './Skill.module.css'
import swiftLogo from '../assets/swift-logo.png'
import reactLogo from '../assets/react-logo.png'
import springBootLogo from '../assets/spring-boot-logo.png'
import goLogo from '../assets/go-logo.png'

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
                            <img src={swiftLogo} id={styles['swift-logo']}/>
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>React.js</span>
                            <img src={reactLogo} id={styles['react-logo']} />
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
                            <img src={springBootLogo} id={styles['spring-boot-logo']} />
                        </div>
                        <div className={styles['skill-card-col']}>
                            {skillCircleIcon}
                            <span>Go (Gin, Gorilla)</span>
                            <img src={goLogo} id={styles['go-logo']}/>
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