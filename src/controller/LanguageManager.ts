import { useContext } from "react";
import { LocalDataModel } from "@/model/LocalDataModel";
import { language } from "@/model/LanCxtProvider";

export class LanguageManager {
    private static getLocalData(): string {
        const { lan } = useContext(language) || { lan: "en" };
        return lan;
    }

    public static localString(key: string): string {
        const model = new LocalDataModel();
        const lan: string = this.getLocalData();
        const localString = model.getLocalData(lan, key);
        return localString;
    }
}
