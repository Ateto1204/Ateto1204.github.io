const lightColor = ['#7C93C3', '#6A9AB0', '#A5B68D', '#7FA1C3'];
const darkColor = ['#55679C', '#3A6D8C', '#384B70', '#697565', '#6A9C89', '#295F98'];

async function ToggleBackground(theme: string) {
    const root = document.documentElement;

    const randomColor = theme === 'light' ? 
                        lightColor[Math.floor(Math.random() * lightColor.length)] : 
                        darkColor[Math.floor(Math.random() * darkColor.length)];

    root.style.backgroundColor = randomColor;
    root.style.backgroundImage = '';
    root.style.backgroundPosition = 'center';
    root.style.backgroundRepeat = 'no-repeat';
    root.style.backgroundSize = 'cover';
    root.style.backgroundAttachment = 'fixed';
}

export default ToggleBackground;