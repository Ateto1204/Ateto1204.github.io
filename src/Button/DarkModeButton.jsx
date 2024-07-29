import styles from './DarkModeButton.module.css'

function DarkModeButton() {
    return (
        <div className={styles['mode-btn']}>
            <button>MODE</button>
        </div>
    );
}
export default DarkModeButton;