import { useLanguageContext } from "../context/LanguageContext";
import { NavButton } from "./ui/Buttons";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  const { setCurrentLanguage } = useLanguageContext;

  return (
    <nav className="bg-gray-900 text-white flex fixed md:h-full w-full md:w-[100px] overflow-auto md:right-0 bottom-0 z-50 overflow-x-hidden md:skew-x-2 md:-mr-4">
      <ul className="flex md:flex-col items-center justify-around md:text-3xl text-2xl w-full h-full md:my-5">
        <li className="w-full">
          <a href="#projects" className="flex items-center justify-center w-full hover:text-teal-400 md:h-[100px] h-[50px]">
            <AiOutlineHome />
          </a>
        </li >

        <li className="w-full">
          <a href="https://www.linkedin.com/in/patrisesp/" className="flex items-center justify-center w-full hover:text-teal-400 md:h-[100px] h-[50px]">
            <AiOutlineFolderOpen />
          </a>
        </li >

        <li className="w-full">
          <a href="https://github.com/brutalkingran" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full hover:text-teal-400 md:h-[100px] h-[50px]">
            <AiOutlinePhone />
          </a>
        </li >

        <li className="w-full">
          <a href="https://github.com/brutalkingran" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full hover:text-teal-400 md:h-[100px] h-[50px]">
            <AiOutlineHeart />
          </a>
        </li >

        <li className="w-full">
          <a href="https://github.com/brutalkingran" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full hover:text-teal-400 md:h-[100px] h-[50px]">
            <AiOutlineTeam />
          </a>
        </li>
      </ul>

      <div className="hidden">
        <li><a href="#contact" className="hover:text-teal-400"><AiOutlineSetting/></a></li>
        <li><AiOutlineSun/></li>
        <NavButton text={"Español"} onClick={() => setCurrentLanguage("es")} />
        <NavButton text={"English"} onClick={() => setCurrentLanguage("en")} />
      </div>
    </nav>
  );
}

export default Navbar;