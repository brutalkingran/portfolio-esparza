import FigureComponent from "./FigureComponent";
import FigureSweepComponent from "./FigureSweepComponent";

const Projects = () => {
  return (
  <>
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-gray-900 relative h-screen clip-diagonal skew-y-6 -mt-25 font-light">
      <div className="-skew-y-6 pt-20 px-10 flex flex-row justify-between">
        <div className="w-1/2">
          <h2 className="text-6xl">
            Tu presencia en línea importa
          </h2>

          <div className="mt-15 font-sans text-2xl">
            <p>
              Contar con tu propio sitio web para tu emprendimiento es una decisión que podría ahorrarte problemas a largo plazo.
              Después de todo, es tu propio espacio, nada de lidiar con algoritmos traicioneros o diseños que no se ajustan a tus gustos.
            </p>
            <p>
              Con tu propio sitio web las posiblidades son infinitas: los resultados de las búsquedas de Google mostrarán a tu emprendimiento antes que otros,
              podrás generar ingresos pasivos con anuncios e incluso podrías ahorrarte mil y un dolores de cabeza.
            </p>
            <p>
              Pensá en ese ChatBot que soluciona las dudas de tus clientes por vos, ese programa que automatiza las tareas más tediosas o en aquel espacio donde
              centras todos tus contactos para que no te pregunten siempre si contás con X red social.
            </p>
            <p>
              A tu derecha podrás ver proyectos de ejemplo que se podrían ajustar a tus necesidades.
            </p>
          </div>
        </div>

        <FigureSweepComponent>
          <FigureComponent
            title="Proyecto: Página de Turismo"
            imgSrc="spatium"
            description="Plataforma de streaming similar a Netflix. Brinda una interfaz cómoda para el usuario, con vista disponible para móviles y escritorio. Cuenta con modo claro y oscuro."
            pageLink="kinematic-movies.netlify.app"
            pageRepository="kinetic-movie-page"
          />
          <FigureComponent
            title="Proyecto: Landing Page de Ventas"
            imgSrc="guncat"
            description="Plataforma de streaming similar a Netflix. Brinda una interfaz cómoda para el usuario, con vista disponible para móviles y escritorio. Cuenta con modo claro y oscuro."
            pageLink="kinematic-movies.netlify.app"
            pageRepository="kinetic-movie-page"
          />
          <FigureComponent
            title="Proyecto: Aplicación de Streaming"
            imgSrc="kinematic"  
            description="Plataforma de streaming similar a Netflix. Brinda una interfaz cómoda para el usuario, con vista disponible para móviles y escritorio. Cuenta con modo claro y oscuro."
            pageLink="kinematic-movies.netlify.app"
            pageRepository="kinetic-movie-page"
          />
          <FigureComponent
            title="Proyecto: Tienda Virtual"
            imgSrc="cartx"
            description="Plataforma de streaming similar a Netflix. Brinda una interfaz cómoda para el usuario, con vista disponible para móviles y escritorio. Cuenta con modo claro y oscuro."
            pageLink="kinematic-movies.netlify.app"
            pageRepository="kinetic-movie-page"
          />
        </FigureSweepComponent>
      </div>
    </section>

    <section id="projects" className="py-16 bg-gray-400 dark:bg-gray-900 text-gray-100 relative h-screen clip-diagonal skew-y-6 -mt-25 font-light">
      <div className="-skew-y-6 pt-20 px-10 flex flex-row-reverse justify-between">
        <div className="w-1/2 mr-25">
          <h2 className="text-6xl">
            Tu sitio web, tu hogar.
          </h2>

          <p className="mt-15 font-sans text-2xl">
            Obtenga datos de suma importancia que le permitan determinar cuál será el próximo paso que su negocio tomará para seguir progresando.
          </p>

          <p>
            Muchas redes sociales se quedan con la información de sus usuarios (y sus clientes), datos que usted podría usar a su favor.
          </p>
        </div>

        <figure className="flex flex-col items-center w-2/5 mt-15 -skew-y-7">
          <h3 className="text-3xl mb-2">Title</h3>

          <img src="cartx.jpg" alt="" className="w-full" />

          <figcaption className="text-center mt-5 font-medium w-2/3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A expedita provident molestiae nostrum dolorum itaque iure aliquid vero mollitia eligendi? Neque numquam eius vero necessitatibus at, impedit nisi molestias! Tempore!
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-gray-900 relative h-screen clip-diagonal skew-y-6 -mt-25 font-light">
      <div className="-skew-y-6 pt-20 px-10 flex flex-row justify-between">
        <div className="w-1/2">
          <h2 className="text-6xl">
            El motor de búsqueda, tu mejor aliado
          </h2>

          <p className="mt-15 font-sans text-2xl">
            Sea el primero, la web le permite optimizar los resultados de búsqueda de Google para que su emprendimiento aparezca primero.
          </p>

          <p>
            Es sabido que los usuarios no suelen hindagar mucho en los resultados de búsqueda, mucho menos investigar luego del resultado número uno.
            Imagine que su emprendimiento es la primera impresión de un usuario, algo que en plena era de la información no tiene precio, usted está generando
            impresiones.
          </p>
        </div>

        <figure className="flex flex-col items-center w-2/5 mt-15 mr-20">
          <h3 className="skew-y-7 text-3xl mb-2">Title</h3>

          <img src="cartx.jpg" alt="" className="skew-y-7 w-full" />

          <figcaption className="skew-y-7 text-center mt-5 font-medium w-2/3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A expedita provident molestiae nostrum dolorum itaque iure aliquid vero mollitia eligendi? Neque numquam eius vero necessitatibus at, impedit nisi molestias! Tempore!
          </figcaption>
        </figure>
      </div>
    </section>
  </>
  );
}

export default Projects;