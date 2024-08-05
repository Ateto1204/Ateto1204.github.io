import { useState, useEffect } from 'react'
import ToggleBackground from '../../Api/ToggleBackground'
import styles from './DarkModeButton.module.css'

import moon from '../../assets/icon/moon.png'
import sun from '../../assets/icon/sun.png'

function DarkModeButton() {
    const [theme, setTheme] = useState(sun);

    const toggleTheme = () => {
        setTheme(theme === sun ? moon : sun);
        ToggleBackground(theme, moon);
    }

    useEffect(() => {
        document.body.style.color = theme === sun ? `#333` : `#F5F5F5`;
        let flag = true
        document.querySelectorAll('a').forEach(a => {
            if (a.href === 'https://www.aidmics.com/') {
                a.style.color = theme === sun ?  `#E0EEE0` : `#00E5EE`;
                a.style.opacity = theme === sun ? `1` : `0.78`;
            } else {
                a.style.color = theme === sun ?  `#333` : `#D0D0D0`;
            }
        });
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.color = theme === sun ? `#333` : `#F5F5F5`;
        });
    }, [theme]);

    return (
        <div className={styles['mode-btn']}>
            <button onClick={toggleTheme}>
                <img src={theme} />
            </button>
        </div>
    );
}
export default DarkModeButton;