import styles from './Footer.module.css'

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <section className={styles['footer']}>
          <p>© Copyright ©{currentYear} All rights reserved</p>
        </section>
    );
}

export default Footer