import { createContext, useState, useEffect, useContext } from 'react';

const languages = ["es", "en"];

export const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      if (savedLang && languages.includes(savedLang)) {
        return savedLang;
      }

      // detectar idioma del sistema
      const systemLang = navigator.language?.slice(0, 2);
      return languages.includes(systemLang) ? systemLang : "es";
    }

    return "es";
  });

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
