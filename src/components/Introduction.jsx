import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import BlinkingText from "./ui/BlinkingText";
import { ConsoleButton, ContactLink } from "./ui/Buttons";

export const Introduction = () => {
  const onScrollTo = (targetId) => {
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="inicio" className="h-screen bg-black relative font-extralight overflow-x-hidden">
      <video width="1920" height="1080" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex flex-col h-screen items-start justify-center md:ml-8 z-10">
        <div className="flex flex-col md:mb-10 md:my-28 w-full">
          <h1 className="mb-4 text-white dark:text-white text-left md:text-7xl xl:text-9xl text-5xl">
            <span className="bg-rose-600/75 p-0.5 text-shadow-lg/30">Patricio Esparza</span>
          </h1>
          <p className="text-white md:mt-5 md:ml-0 ml-5 text-center text-2xl text-left">
            Desarrollador Web Freelancer<BlinkingText />
          </p>
          <pre className="absolute right-1/8 top-1/10 text-white font-mono whitespace-pre leading-none z-10 opacity-70 hidden xl:block">
{String.raw`
                 @@@@@@%@%%@@@@@                 
             @@#++++++++@++++++++*@@             
          @@++++++++++++@++++++++++++%@          
       @@@@+++++++++++++@++++++++++++++@@@       
      @*#@#@#+++++++++++@++++++++++++++@#*@      
    @@++#@++@@++++++++++@++++++++++++++@#++@@    
   @#+++#@+++*@%++++++++@++++++++++++++@#+++#@   
  @*++++#@+++++@@+++++++@++++++++++++++@#++++*@  
 @%+++++#@++++++*@%+++++@++++++++++++++@#+++++%@ 
 @++++++#@++++++++@@++++@++++++++++++++@#++++++@ 
@*++++++#@+++++++++*@@++@++++++++++++++@#++++++*@
@+++++++#@+++++++++++%@*@++++++++++++++@#+++++++@
@+++++++#@+++++++++++++@@++++++++++++++@#+++++++@
@+++++++#@+++++++++++++@@@*++++++++++++@#+++++++@
@+++++++#@+++++++++++@@*@*@@+++++++++++@#+++++++@
@*++++++#@+++++++++*@%++@++%@*+++++++++@#++++++*@
 @++++++#@++++++++@@++++@++++@@++++++++@#++++++@ 
 @%+++++#@++++++*@%+++++@+++++#@*++++++@#+++++%@ 
  @*++++#@+++++@@+++++++@+++++++@@+++++@#++++*@  
   @#+++#@+++#@#++++++++@++++++++#@#+++@#+++#@   
    @@++#@++@@++++++++++@++++++++++@@++@#++@@    
      @*#@#@#+++++++++++@+++++++++++*@#@#*@      
       @@@@############%@%############@@@@       
          @%++++++++++++@++++++++++++%@          
             @@*++++++++@++++++++*@@             
                 @@@@@%%@%%@@@@@                 
`}
          </pre>
        </div>

        <div className="flex flex-row md:mt-10 items-center w-full">
          <ul className="dark:text-gray-300 max-w-2xl md:bg-gray-800/75 text-white md:ml-10 font-mono w-2/7 mr-8">
            <ConsoleButton number={"一"} text={"Desarrollo Web"} />
            <ConsoleButton number={"二"} text={"Consultas técnicas"} />
            <ConsoleButton number={"三"} text={"Administración de redes sociales"} />
            <ConsoleButton number={"四"} text={"Modernización de negocios"} />
            <ConsoleButton number={"五"} text={"Digitalización de documentos"} />
            <ConsoleButton number={"六"} text={"Edición de videos"} />
          </ul>

          <ul className="text-white text-2xl w-screen">
            <li className="italic md:ml-8 ml-15 md:ml-0 text-xl md:text-2xl">Lleva tu negocio al siguiente nivel</li>

            <ContactLink
              extraStyle="md:ml-10 ml-20 mt-5"
              text="WhatsApp: (+54) 383 409 1942"
              logo={<AiOutlineWhatsApp size={50} className="mr-2"/>}
              action="https://wa.me/543834091942"
            />

            <ContactLink
              extraStyle="md:ml-15 ml-25 mt-2"
              text="LinkedIn: @patrisesp"
              logo={<AiOutlineLinkedin size={50} className="mr-2" /> }
              action="https://www.linkedin.com/in/patrisesp/"
            />

            <ContactLink
              extraStyle="md:ml-20 ml-30 mt-2"
              text="GitHub: @brutalkingran"
              logo={<AiOutlineGithub size={50} className="mr-2" /> }
              action="https://github.com/brutalkingran/"
            />

            <ContactLink
              extraStyle="md:ml-25 ml-35 mt-2"
              text="E-Mail: esparzapatricio95@gmail.com"
              logo={<AiOutlineMail size={50} className="mr-2" /> }
              action="mailto:esparzapatricio95@gmail.com/"
            />
          </ul>
        </div>
      </div>

      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white cursor-pointer z-20"
        onClick={() => onScrollTo("proyectos")}
      >
        <span className="text-2xl hidden md:block">Mis proyectos</span>
        <MdKeyboardArrowDown size={24} color="white" />
      </button>
    </section>
  );
}

export default Introduction;