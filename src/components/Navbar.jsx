import { useLanguageContext } from "../context/LanguageContext";
import { NavButton } from "./ui/Buttons";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io5";
import { VscColorMode } from "react-icons/vsc";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from 'react';

const Navbar = () => {
  const { setCurrentLanguage, currentLanguage } = useLanguageContext;
  const { setDarkMode, darkMode } = useContext(ThemeContext);

  const onScrollTo = (targetId) => {
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const onGoToSite = (site) => {
    window.open(site, "_blank")
  }

  return (
    <nav className="bg-gray-900 text-white flex fixed md:h-full w-full md:w-[100px] md:right-0 bottom-0 z-50 md:skew-x-2 md:-mr-4">
      <ul className="flex md:flex-col items-center justify-around md:text-3xl text-2xl w-full h-full md:my-5">
        <NavButton
          tooltip={"Volver al Inicio"}
          action={() => onScrollTo("inicio")}
        >
          <AiOutlineHome />
        </NavButton>

        <NavButton
          tooltip={"Modo Claro/Oscuro"}
          action={() => setDarkMode(!darkMode)}
        >
          <VscColorMode />
        </NavButton>

        <NavButton
          tooltip={"Apoya mi Emprendimiento"}
          action={() => onGoToSite("https://link.mercadopago.com.ar/patriciansoftware")}
        >
          <AiOutlineHeart />
        </NavButton>

        <NavButton
          tooltip={"Change Language"}
          action={() => setCurrentLanguage(!currentLanguage)}
        >
          <IoLanguageOutline />
        </NavButton>
      </ul>
    </nav>
  );
}

export default Navbar;