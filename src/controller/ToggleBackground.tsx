import { lightColor, darkColor } from "@/data/bgColorsData";

async function ToggleBackground(theme: string) {
    const root = document.documentElement;

    const randomColor =
        theme === "light"
            ? lightColor[Math.floor(Math.random() * lightColor.length)]
            : darkColor[Math.floor(Math.random() * darkColor.length)];

    root.style.backgroundColor = randomColor;
    root.style.backgroundImage = "";
    root.style.backgroundPosition = "center";
    root.style.backgroundRepeat = "no-repeat";
    root.style.backgroundSize = "cover";
    root.style.backgroundAttachment = "fixed";
}

export default ToggleBackground;
