import { engTimelineItems, timelineItems } from "../data/expData";
import { engName, engProfileParagraphsData, engProfileSubtitle, name, profileParagraphsData, profileSubtitle } from "../data/profile/profileData";
import { engSpecialties, specialties } from "../data/specialtyData";

export class LocalDataModel{
    private localData: Record<string, Record<string, any>> = {
        'zh': {
            'name': name,
            'profile-subtitle': profileSubtitle, 
            'profile-paragraph': profileParagraphsData,
            'timeline-items': timelineItems,
            'specialties': specialties,
        }, 
        'en': {
            'name': engName, 
            'profile-subtitle': engProfileSubtitle, 
            'profile-paragraph': engProfileParagraphsData,
            'timeline-items': engTimelineItems, 
            'specialties': engSpecialties,
        }
    }

    public getLocalData(lan: string, key: string) {
        return this.localData[lan][key]
    }
}