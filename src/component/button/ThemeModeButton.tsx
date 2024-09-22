import { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

import ToggleBackground from '../../controller/ToggleBackground';

function ThemeModeButton() {
    const initTheme: string = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(initTheme);

    const toggleTheme = () => {
        ToggleBackground(theme);
        const changeTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(changeTheme);
        localStorage.setItem('theme', changeTheme);
    }

    useEffect(() => {
        ToggleBackground(theme)
        document.body.style.color = theme === 'light' ? `#333` : `#F5F5F5`;
        document.querySelectorAll('a').forEach(a => {
            if (a.href === 'https://www.aidmics.com/') {
                a.style.color = theme === 'light' ?  `#E0EEE0` : `#00E5EE`;
            } else {
                a.style.color = theme === 'light' ?  `#333` : `#D0D0D0`;
            }
        });
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.color = theme === 'light' ? `#333` : `#F5F5F5`;
        });
    }, [theme]);

    const iconStyle = 'w-9 md:w-12 h-auto opacity-80 hover:opacity-45 hover:transition-opacity'; // icon
    return (
        <button 
            className='fixed left-1/2 right-1/2 bottom-3 md:bottom-14 p-0' 
            onClick={toggleTheme}
        > {/* mode-btn */}
            { 
                theme === 'light' ? 
                <MdSunny className={iconStyle} /> : 
                <FaMoon className={iconStyle} /> 
            }
        </button>
    );
}
export default ThemeModeButton;