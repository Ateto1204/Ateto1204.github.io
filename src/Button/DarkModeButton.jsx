import React, { useState, useEffect } from 'react'
import styles from './DarkModeButton.module.css'

import bg1 from '../assets/background.JPG'
import bg2 from '../assets/background2.JPG'
import bg3 from '../assets/background3.JPG'
import bg4 from '../assets/background4.JPG'

import moon from '../assets/moon.png'
import sun from '../assets/sun.png'

const images = [bg1, bg2, bg3, bg4];

function DarkModeButton() {
    const [theme, setTheme] = useState(sun);

    const toggleTheme = () => {
        setTheme(theme === sun ? moon : sun)
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const root = document.documentElement;
        root.style.backgroundImage = `url(${randomImage})`;
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