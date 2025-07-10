import { useContext } from "react";

import { glassBgStyle } from "@/data/glassStyle";
import { language } from "@/model/LanCxtProvider";

export const LanSetButton = () => {
    const context = useContext(language);

    if (!context) {
        throw new Error("LanSetButton must be used within a LanProvider");
    }

    const { lan, setLan } = context;

    return (
        <div className="fixed left-7 top-7">
            <button
                className={`text-xl p-3 font-semibold
                            hover:opacity-50 transition-opacity 
                            ${glassBgStyle}`}
                onClick={() => setLan(lan === "zh" ? "en" : "zh")}
            >
                {lan === "zh" ? "En" : "中"}
            </button>
        </div>
    );
};
