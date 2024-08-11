import { useState, useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

import ToggleBackground from '../../Api/ToggleBackground';

function ThemeModeButton() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        ToggleBackground(theme);
        setTheme(theme === 'light' ? 'dark' : 'light');
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

    return (
        <button 
            className='fixed left-1/2 right-1/2 bottom-14 p-0' 
            onClick={toggleTheme}
        >
            { 
                theme === 'light' ? 
                <MdSunny className='w-12 h-auto opacity-80 hover:opacity-45 hover:transition-opacity' /> : 
                <FaMoon className='w-12 h-auto opacity-80 hover:opacity-45 hover:transition-opacity' /> 
            }
        </button>
    );
}
export default ThemeModeButton;