import { useEffect } from 'react'

import bg1 from '../assets/background.JPG'
import bg2 from '../assets/background2.JPG'
import bg3 from '../assets/background3.JPG'
import bg4 from '../assets/background4.JPG'

function ToggleBackground() {
    const images = [bg1, bg2, bg3, bg4];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const root = document.documentElement;
    root.style.backgroundImage = `url(${randomImage})`;
    root.style.backgroundPosition = 'center';
    root.style.backgroundRepeat = 'no-repeat';
    root.style.backgroundSize = 'cover';
    root.style.backgroundAttachment = 'fixed';
}
export default ToggleBackground;