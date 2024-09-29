import { engTimelineItems, timelineItems } from "./expData";
import { engName, engProfileParagraphsData, engProfileSubtitle, name, profileParagraphsData, profileSubtitle } from "./profile/profileData";


export const localData: Record<string, Record<string, any>> = {
    'zh': {
        'name': name,
        'profile-subtitle': profileSubtitle, 
        'profile-paragraph': profileParagraphsData,
        'timeline-items': timelineItems,
    }, 
    'en': {
        'name': engName, 
        'profile-subtitle': engProfileSubtitle, 
        'profile-paragraph': engProfileParagraphsData,
        'timeline-items': engTimelineItems, 
    }
}