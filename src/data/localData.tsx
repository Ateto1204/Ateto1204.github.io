import { engName, engProfileParagraphsData, engProfileSubtitle, name, profileParagraphsData, profileSubtitle } from "./profile/profileData";


export const localData: Record<string, Record<string, any>> = {
    'zh': {
        'name': name,
        'profile-subtitle': profileSubtitle, 
        'profile-paragraph': profileParagraphsData,
    }, 
    'en': {
        'name': engName, 
        'profile-subtitle': engProfileSubtitle, 
        'profile-paragraph': engProfileParagraphsData,
    }
}