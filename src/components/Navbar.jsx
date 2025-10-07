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
    <nav className="bg-gray-900 text-white flex fixed h-full w-[100px] overflow-auto right-0 z-50 overflow-x-hidden skew-x-2 -mr-4">
      <ul className="flex flex-col items-center justify-around text-3xl w-full h-full">
        <li className="w-full my-5">
          <a href="#projects" className="flex items-center justify-center w-full h-[100px] hover:text-teal-400">
            <AiOutlineHome />
          </a>
        </li>

        <li className="w-full my-5">
          <a href="https://www.linkedin.com/in/patrisesp/" className="flex items-center justify-center w-full h-[100px] hover:text-teal-400">
            <AiOutlineFolderOpen />
          </a>
        </li>

        <li className="w-full my-5">
          <a href="https://github.com/brutalkingran" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-[100px] hover:text-teal-400">
            <AiOutlinePhone />
          </a>
        </li>

        <li className="w-full my-5">
          <a href="https://github.com/brutalkingran" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-[100px] hover:text-teal-400">
            <AiOutlineHeart />
          </a>
        </li>

        <li className="w-full my-5">
          <a href="https://github.com/brutalkingran" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full h-[100px] hover:text-teal-400">
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