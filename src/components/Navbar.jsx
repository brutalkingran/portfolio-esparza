import { useLanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { setCurrentLanguage } = useLanguageContext;

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Patricio Esparza</h1>
      <ul className="flex space-x-6">
        <li><a href="#projects" className="hover:text-teal-400">Proyectos</a></li>
        <li><a href="https://github.com/brutalkingran" target="_blank" rel="noreferrer" className="hover:text-teal-400">GitHub</a></li>
        <li><a href="#contact" className="hover:text-teal-400">Contacto</a></li>
      </ul>

      <div>
        <button onClick={() => setCurrentLanguage("es")}>
          Español
        </button>

        <button onClick={() => setCurrentLanguage("en")}>
          Inglés
        </button>
      </div>
    </nav>
  );
}

export default Navbar;