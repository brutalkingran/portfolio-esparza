import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import BlinkingText from "./ui/BlinkingText";
import { ConsoleButton, ContactLink } from "./ui/Buttons";

export const Introduction = () => { 
  return (
    <section className="h-screen bg-black relative font-extralight overflow-x-hidden">
      <video width="1920" height="1080" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="space.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex flex-col h-screen items-start justify-center md:ml-8 z-10">
        <div className="flex flex-col md:mb-10 md:my-28">
          <h1 className="mb-4 text-white dark:text-whitetext-left md:text-9xl text-5xl">
            <span className="bg-rose-600/75 p-0.5 text-shadow-lg/30">Patricio Esparza</span>
          </h1>
          <p className="text-white md:mt-5 md:ml-0 ml-5 text-center text-2xl">
            Desarrollador Web Freelancer<BlinkingText />
          </p>
          <pre className="absolute right-1/6 top-35 text-white text-xs font-mono whitespace-pre leading-none z-10 opacity-70 hidden md:block">
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

        <div className="flex flex-row mt-10 items-center w-full">
          <ul className="dark:text-gray-300 max-w-2xl md:bg-gray-800/75 text-white md:ml-10 font-mono w-2/7 mr-8">
            <ConsoleButton number={"一"} text={"Desarrollo Web"} />
            <ConsoleButton number={"二"} text={"Consultas técnicas"} />
            <ConsoleButton number={"三"} text={"Administración de redes sociales"} />
            <ConsoleButton number={"四"} text={"Modernización de negocios"} />
            <ConsoleButton number={"五"} text={"Digitalización de documentos"} />
            <ConsoleButton number={"六"} text={"Edición de videos"} />
          </ul>

          <ul className="text-white text-2xl w-screen">
            <li className="italic ml-8 md:ml-0">Lleva tu negocio al siguiente nivel</li>

            <ContactLink
              extraStyle="md:ml-10 ml-30 mt-5"
              text="WhatsApp: (+54) 383 409 1942"
              logo={<AiOutlineWhatsApp size={50} className="mr-2"/>}
              action="https://wa.me/543834091942"
            />

            <ContactLink
              extraStyle="md:ml-15 ml-35 mt-2"
              text="LinkedIn: @patrisesp"
              logo={<AiOutlineLinkedin size={50} className="mr-2" /> }
              action="https://www.linkedin.com/in/patrisesp/"
            />

            <ContactLink
              extraStyle="md:ml-20 ml-40 mt-2"
              text="GitHub: @brutalkingran"
              logo={<AiOutlineGithub size={50} className="mr-2" /> }
              action="https://github.com/brutalkingran/"
            />

            <ContactLink
              extraStyle="md:ml-25 ml-45 mt-2"
              text="E-Mail: esparzapatricio95@gmail.com"
              logo={<AiOutlineMail size={50} className="mr-2" /> }
              action="mailto:esparzapatricio95@gmail.com/"
            />
          </ul>
        </div>

        <div className="absolute bottom-12 md:bottom-0 center-0 w-screen text-black text-center flex flex-col items-center">
          <span className="text-2xl">Mis proyectos</span>
          <MdKeyboardArrowDown size={24}/>
        </div>
      </div>
    </section>
  );
}

export default Introduction;