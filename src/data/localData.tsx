import { engTimelineItems, timelineItems } from "./expData";
import { engName, engProfileParagraphsData, engProfileSubtitle, name, profileParagraphsData, profileSubtitle } from "./profile/profileData";
import { engSpecialties, specialties } from "./specialtyData";


export const localData: Record<string, Record<string, any>> = {
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