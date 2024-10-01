import { LocalDataModel } from "../model/LocalDataModel";

// Mocking the data
const zhMockName = "中文名稱";
const zhMockProfileSubtitle = "中文副標題";
const zhMockProfileParagraphsData = ["中文段落1", "中文段落2"];
const zhMockTimelineItems = [{ title: "中文經歷1", description: "經歷描述" }];
const zhMockSpecialties = ["專業1", "專業2"];

const engMockName = "English Name";
const engMockProfileSubtitle = "English Subtitle";
const engMockProfileParagraphsData = ["English Paragraph 1", "English Paragraph 2"];
const engMockTimelineItems = [{ title: "English Experience 1", description: "Experience Description" }];
const engMockSpecialties = ["Specialty 1", "Specialty 2"];

// Mock the data into the LocalDataModel
jest.mock('../data/profile/profileData', () => ({
    name: zhMockName,
    profileSubtitle: zhMockProfileSubtitle,
    profileParagraphsData: zhMockProfileParagraphsData,
    engName: engMockName,
    engProfileSubtitle: engMockProfileSubtitle,
    engProfileParagraphsData: engMockProfileParagraphsData,
}));

jest.mock('../data/expData', () => ({
    timelineItems: zhMockTimelineItems,
    engTimelineItems: engMockTimelineItems,
}));

jest.mock('../data/specialtyData', () => ({
    specialties: zhMockSpecialties,
    engSpecialties: engMockSpecialties,
}));

describe('LocalDataModel', () => {
    let localDataModel: LocalDataModel;

    beforeEach(() => {
        localDataModel = new LocalDataModel();
    });

    it('should return Chinese name when language is "zh"', () => {
        expect(localDataModel.getLocalData('zh', 'name')).toBe(zhMockName);
    });

    it('should return English name when language is "en"', () => {
        expect(localDataModel.getLocalData('en', 'name')).toBe(engMockName);
    });

    it('should return Chinese profile subtitle when language is "zh"', () => {
        expect(localDataModel.getLocalData('zh', 'profile-subtitle')).toBe(zhMockProfileSubtitle);
    });

    it('should return English profile subtitle when language is "en"', () => {
        expect(localDataModel.getLocalData('en', 'profile-subtitle')).toBe(engMockProfileSubtitle);
    });

    it('should return Chinese profile paragraphs when language is "zh"', () => {
        expect(localDataModel.getLocalData('zh', 'profile-paragraph')).toEqual(zhMockProfileParagraphsData);
    });

    it('should return English profile paragraphs when language is "en"', () => {
        expect(localDataModel.getLocalData('en', 'profile-paragraph')).toEqual(engMockProfileParagraphsData);
    });

    it('should return Chinese timeline items when language is "zh"', () => {
        expect(localDataModel.getLocalData('zh', 'timeline-items')).toEqual(zhMockTimelineItems);
    });

    it('should return English timeline items when language is "en"', () => {
        expect(localDataModel.getLocalData('en', 'timeline-items')).toEqual(engMockTimelineItems);
    });

    it('should return Chinese specialties when language is "zh"', () => {
        expect(localDataModel.getLocalData('zh', 'specialties')).toEqual(zhMockSpecialties);
    });

    it('should return English specialties when language is "en"', () => {
        expect(localDataModel.getLocalData('en', 'specialties')).toEqual(engMockSpecialties);
    });
});