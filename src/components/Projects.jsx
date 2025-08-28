const projects = [
  {
    name: "Gestor de Empleados",
    desc: "Aplicación para gestionar empleados.",
    link: "https://github.com/brutalkingran/gestor-empleados-app"
  },
  {
    name: "Pokémon App",
    desc: "Aplicación de búsqueda de Pokémon usando PokéAPI en ReactJS.",
    link: "https://github.com/brutalkingran/pokemon-app"
  },
  {
    name: "Shop React",
    desc: "Tienda con carrito funcional, hooks y context.",
    link: "https://github.com/brutalkingran/shop-react"
  },
  {
    name: "Kinetic Movie Page",
    desc: "Sitio de streaming con watchlist en React.",
    link: "https://github.com/brutalkingran/kinetic-movie-page"
  },
  {
    name: "Gun-Cat",
    desc: "Landing Page temática Gunpla, responsive y animada.",
    link: "https://github.com/brutalkingran/gun-cat"
  },
  {
    name: "Plantilla Vite React Tailwind",
    desc: "Template base con Vite + React + Tailwind.",
    link: "https://github.com/brutalkingran/plantilla-vite-react-tailwind"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Proyectos</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noreferrer" className="p-6 border rounded-lg shadow hover:shadow-xl transition bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-teal-500">{p.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;