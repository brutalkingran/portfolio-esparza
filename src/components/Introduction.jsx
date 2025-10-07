import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Introduction = () => {
  return (
    <section className="h-screen bg-black relative font-extralight overflow-x-hidden">
      <video width="1920" height="1080" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="space.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="relative flex flex-col h-screen items-start justify-center ml-8 z-10">
        <div className="flex flex-col mb-10 my-28">
          <h1 className="mb-4 text-white dark:text-whitetext-left text-9xl">
            <span className="bg-rose-600/75 p-0.5 text-shadow-lg/30">Patricio Esparza</span>
          </h1>
          <p className="text-white mt-5 text-center text-2xl">
            Desarrollador Web Freelancer
          </p>
          <pre className="absolute right-100 top-35 text-white text-xs font-mono whitespace-pre leading-none z-10 opacity-70">
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

        {/* <hr className="relative h-1 my-8 pt-1 w-9/10 bg-white border-0 opacity-80" /> */}

        <div className="flex flex-row mt-10 items-center w-full">
          <ul className="dark:text-gray-300 max-w-2xl bg-gray-800/75 text-white p-5 ml-10 font-mono w-2/7 mr-8">
            <li className="mt-4 mb-5 flex flex-row items-center"><span className="rounded-full bg-white text-black px-1 text-2xl mr-5">一</span>Desarrollo Web</li>
            <li className="mb-5"><span className="rounded-full bg-white text-black px-1 text-2xl mr-5">二</span>Consultas técnicas</li>
            <li className="mb-5"><span className="rounded-full bg-white text-black px-1 text-2xl mr-5">三</span>Administración de redes sociales</li>
            <li className="mb-5"><span className="rounded-full bg-white text-black px-1 text-2xl mr-5">四</span>Modernización de negocios</li>
            <li className="mb-5"><span className="rounded-full bg-white text-black px-1 text-2xl mr-5">五</span>Digitalización de documentos</li>
          </ul>

          <ul className="text-white text-2xl w-screen">
            <li className="italic">Lleva tu negocio al siguiente nivel</li>
            <li className="bg-rose-600 rounded-full p-2 w-full flex flex-row items-center mt-5 ml-10"><AiOutlineWhatsApp size={50} className="mr-2" /> <span>WhatsApp: (+54) 383 409 1942</span></li>
            <li className="bg-rose-600 rounded-full p-2 w-full flex flex-row items-center mt-2 ml-15"><AiOutlineLinkedin size={50} className="mr-2" /> <span>LinkedIn: @patrisesp</span></li>
            <li className="bg-rose-600 rounded-full p-2 w-full flex flex-row items-center mt-2 ml-20"><AiOutlineGithub size={50} className="mr-2" /> <span>GitHub: @brutalkingran</span></li>
            <li className="bg-rose-600 rounded-full p-2 w-full flex flex-row items-center mt-2 ml-25"><AiOutlineMail size={50} className="mr-2" /> <span>E-Mail: esparzapatricio95@gmail.com</span></li>
          </ul>
        </div>

        <div className="absolute bottom-0 center-0 w-screen text-black text-center flex flex-col items-center">
          <span className="text-2xl">Mis proyectos</span>
          <MdKeyboardArrowDown size={24}/>
        </div>
      </div>
    </section>
  );
}

export default Introduction;