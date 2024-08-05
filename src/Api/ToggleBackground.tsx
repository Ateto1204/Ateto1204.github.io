import bg1 from '../assets/background/background.JPG'
import bg2 from '../assets/background/background2.JPG'
import bg3 from '../assets/background/background3.JPG'
import bg4 from '../assets/background/background4.JPG'

const lightBackground = [bg1, bg2];
const darkBackground = [bg3, bg4];

async function ToggleBackground(theme: String) {
    const randomImage = theme === "light" ? 
                        lightBackground[Math.floor(Math.random() * lightBackground.length)] : 
                        darkBackground[Math.floor(Math.random() * darkBackground.length)];
    const root = document.documentElement;
    root.style.backgroundImage = `url(${randomImage})`;
    root.style.backgroundPosition = 'center';
    root.style.backgroundRepeat = 'no-repeat';
    root.style.backgroundSize = 'cover';
    root.style.backgroundAttachment = 'fixed';
}
export default ToggleBackground;