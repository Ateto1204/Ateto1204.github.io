import { useContext } from "react"
import { language } from "../component/button/LanSetButton"
import { localData } from "../data/localData";

export class LanguageManager {
    private getLocalData(): string {
        const { lan } = useContext(language) || {lan: 'en'};
        return lan;
    }

    static localString(key: string): string {
        const manager = new LanguageManager();
        const lan: string = manager.getLocalData();
        return localData[lan][key] || key;
    }
}