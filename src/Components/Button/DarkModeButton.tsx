import { useState, useEffect } from 'react'
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

import ToggleBackground from '../../Api/ToggleBackground'
import styles from './DarkModeButton.module.css'

function DarkModeButton() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        ToggleBackground(theme);
    }

    useEffect(() => {
        document.body.style.color = theme === "light" ? `#333` : `#F5F5F5`;
        document.querySelectorAll('a').forEach(a => {
            if (a.href === 'https://www.aidmics.com/') {
                a.style.color = theme === "light" ?  `#E0EEE0` : `#00E5EE`;
                a.style.opacity = theme === "light" ? `1` : `0.78`;
            } else {
                a.style.color = theme === "light" ?  `#333` : `#D0D0D0`;
            }
        });
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.color = theme === "light" ? `#333` : `#F5F5F5`;
        });
    }, [theme]);

    return (
        <div className={styles['mode-btn']}>
            <button onClick={toggleTheme}>
                {/* <img src={theme} /> */}
                { theme === "light" ? 
                <MdSunny className={styles['icon']} /> : 
                <FaMoon className={styles['icon']} /> }
            </button>
        </div>
    );
}
export default DarkModeButton;