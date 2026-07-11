import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations, defaultLanguage } from './translations';

const STORAGE_KEY = 'portfolio-lang';
const FADE_DURATION = 180;

const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return defaultLanguage;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;
  return defaultLanguage;
};

const resolve = (dict, path) => {
  const segments = path.split('.');
  let value = dict;
  for (const seg of segments) {
    if (value == null) return undefined;
    value = value[seg];
  }
  return value;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
    }
  }, [language]);

  const t = useCallback(
    (path) => {
      const value = resolve(translations[language], path);
      if (value === undefined) {
        const fallback = resolve(translations[defaultLanguage], path);
        return fallback ?? path;
      }
      return value;
    },
    [language]
  );

  const toggleLanguage = useCallback(() => {
    setSwitching(true);
    setTimeout(() => {
      setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
      setTimeout(() => setSwitching(false), 30);
    }, FADE_DURATION);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, switching }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
