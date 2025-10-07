import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Gestor de Empleados",
    desc: "Aplicación para gestionar empleados.",
    url: "https://github.com/brutalkingran/gestor-empleados-app"
  },
  {
    name: "Pokémon App",
    desc: "Aplicación de búsqueda de Pokémon usando PokéAPI en ReactJS.",
    url: "https://github.com/brutalkingran/pokemon-app"
  },
  {
    name: "Shop React",
    desc: "Tienda con carrito funcional, hooks y context.",
    url: "https://github.com/brutalkingran/shop-react"
  },
  {
    name: "Kinetic Movie Page",
    desc: "Sitio de streaming con watchlist en React.",
    url: "https://github.com/brutalkingran/kinetic-movie-page"
  },
  {
    name: "Gun-Cat",
    desc: "Landing Page temática Gunpla, responsive y animada.",
    url: "https://github.com/brutalkingran/gun-cat"
  },
  {
    name: "Plantilla Vite React Tailwind",
    desc: "Template base con Vite + React + Tailwind.",
    url: "https://github.com/brutalkingran/plantilla-vite-react-tailwind"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 relative text-white h-screen clip-diagonal skew-y-6 -mt-25">
      <div className="-skew-y-6 pt-25">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Mis Aplicaciones Web</h2>

        <div className="grid md:grid-cols-3 gap-8 px-6">
          {
            projects.map((project, key) => (
              <ProjectCard key={ key } projectData={ project }/>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Projects;