import { createContext, useState, useEffect, useContext, Children } from 'react';

const languages = [
  "es",
  "en"
]

export const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [ currentLanguage, setCurrentLanguage ] = useState(() => {
    if (typeof window !== 'undefined') {
      // localStorage
      const savedLang = localStorage.getItem('language');
      if ( savedLang && languages.includes(savedLang) ) {
        return savedLang;
      }

      // default language
      return navigator.language || navigator.userLanguage; 

    }

    // por defecto
		return "es";
  });

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage])
  

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      { children }
    </LanguageContext.Provider>
  )

}