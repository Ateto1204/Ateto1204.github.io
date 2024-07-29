import React, { useState, useEffect } from 'react'
import styles from './DarkModeButton.module.css'

import moon from '../assets/moon.png'
import sun from '../assets/sun.png'

function DarkModeButton() {
    const [theme, setTheme] = useState(sun);

    const toggleTheme = () => {
        setTheme(theme === sun ? moon : sun)
    }

    useEffect(() => {
        document.body.style.color = theme === sun ? `#333` : `white`
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