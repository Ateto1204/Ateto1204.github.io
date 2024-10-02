import { LanguageManager } from '../controller/LanguageManager';
import { useContext } from 'react';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(),
}));

jest.mock('../model/LocalDataModel', () => ({
    LocalDataModel: jest.fn().mockImplementation(() => ({
        getLocalData: jest.fn((lan: string, key: string) => {
            if (lan === 'zh') {
                return {
                    'name': '中文名稱',
                    'profile-subtitle': '中文副標題'
                }[key];
            } else if (lan === 'en') {
                return {
                    'name': 'English Name',
                    'profile-subtitle': 'English Subtitle'
                }[key];
            }
            return undefined;
        })
    }))
}));

describe('LanguageManager', () => {
    it('should return the correct Chinese string when language is "zh"', () => {
        (useContext as jest.Mock).mockReturnValue({ lan: 'zh' });

        const result = LanguageManager.localString('name');

        expect(result).toBe('中文名稱');
    });

    it('should return the correct English string when language is "en"', () => {
        (useContext as jest.Mock).mockReturnValue({ lan: 'en' });

        const result = LanguageManager.localString('name');

        expect(result).toBe('English Name');
    });

    it('should return the correct Chinese subtitle when language is "zh"', () => {
        (useContext as jest.Mock).mockReturnValue({ lan: 'zh' });

        const result = LanguageManager.localString('profile-subtitle');

        expect(result).toBe('中文副標題');
    });

    it('should return the correct English subtitle when language is "en"', () => {
        (useContext as jest.Mock).mockReturnValue({ lan: 'en' });

        const result = LanguageManager.localString('profile-subtitle');

        expect(result).toBe('English Subtitle');
    });

    it('should return undefined if key is not found', () => {
        (useContext as jest.Mock).mockReturnValue({ lan: 'zh' });

        const result = LanguageManager.localString('non-existent-key');

        expect(result).toBeUndefined();
    });
});