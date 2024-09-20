import et from '~/locales/et.json';
import en from '~/locales/en.json';
import ru from '~/locales/ru.json';

const translations: Record<string, Record<string, string>> = {
    et,
    en,
    ru,
};

const getBrowserLanguage = (): string => {
    const lang = navigator.language || navigator.userLanguage;
    return lang.split('-')[0];
};

export const getTranslation = (key: string): string => {
    const lang = getBrowserLanguage();
    return translations[lang] ? translations[lang][key] || key : key;
};
