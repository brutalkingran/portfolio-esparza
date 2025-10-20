import es from "../../locals/es.json";
import en from "../../locals/en.json";
import { useLanguageContext } from "../context/LanguageContext";

export const useTranslate = () => {
  const { currentLanguage } = useLanguageContext();
  const translations = currentLanguage === "en" ? en : es;

  return (key) => {
    const keys = key.split(".");
    return keys.reduce((obj, k) => obj?.[k], translations) || key;
  };
};
