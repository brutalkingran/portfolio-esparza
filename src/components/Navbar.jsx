import { NavButton } from "./ui/Buttons";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoLanguageOutline } from "react-icons/io5";
import { VscColorMode } from "react-icons/vsc";
import { useThemeContext } from "../context/ThemeContext";
import { useLanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { currentLanguage, toggleLanguage } = useLanguageContext();

  const { setDarkMode, darkMode } = useThemeContext();

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
    <nav className="bg-gray-900 text-white flex fixed xl:h-full w-full xl:w-[100px] xl:right-0 bottom-0 z-50 xl:-mr-4">
      <ul className="flex xl:flex-col items-center justify-around xl:text-3xl text-2xl w-full h-full xl:my-5">
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
          tooltip={
            (currentLanguage == "es")
            ? "Change Language"
            : "Cambiar Idioma" 
          }
          action={toggleLanguage}
        >
          <IoLanguageOutline />
        </NavButton>
      </ul>
    </nav>
  );
}

export default Navbar;