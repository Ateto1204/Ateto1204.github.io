import { LanguageManager } from "@/controller/LanguageManager";

export const ProfileTitle = () => {
    return (
        <h1
            className="font-serif font-semibold leading lg:mb-5
                        text-3xl md:text-4xl lg:text-5xl"
        >
            {LanguageManager.localString("name")}
        </h1>
    );
};
