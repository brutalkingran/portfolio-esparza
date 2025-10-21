import { useEffect } from "react";
import { useLanguageContext } from "../context/LanguageContext";

const LanguageSetter = () => {
  const { currentLanguage } = useLanguageContext();

  useEffect(() => {
    document.documentElement.lang = currentLanguage; // Cambia el lang de <html>
  }, [currentLanguage]);

  return null; // No renderiza nada
};

export default LanguageSetter;
