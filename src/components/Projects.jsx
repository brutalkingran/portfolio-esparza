import FigureComponent from "./FigureComponent";
import FigureSweepComponent from "./FigureSweepComponent";

const Projects = () => {
  return (
  <>
    <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-gray-900 relative h-screen clip-diagonal skew-y-6 -mt-25 font-light">
      <div className="-skew-y-6 pt-20 px-10 flex md:flex-row justify-between">
        <div className="w-1/2">
          <h2 className="md:text-6xl text-5xl">
            Tu presencia en línea importa
          </h2>

          <div className="mt-15 font-sans text-2xl">
            <p>
              Contar con <strong className="underline">tu propio sitio web</strong> para tu emprendimiento es una decisión que podría ahorrarte problemas a largo plazo.
              Después de todo, <strong className="font-black">es tu propio espacio</strong>, sin tener que lidiar con algoritmos traicioneros o diseños que no se ajusten a tus gustos.
            </p>

            <p className="mt-5">
              Con tu propio sitio web, las posibilidades son <strong className="underline">infinitas</strong>: los resultados de búsqueda en <strong className="font-black">Google</strong> mostrarán a tu emprendimiento antes que otros,
              podrás generar ingresos pasivos con anuncios, e incluso podrías ahorrarte <strong className="underline">mil y un dolores de cabeza</strong>.
            </p>

            <p className="mt-5">
              Pensá en ese <strong className="font-black">ChatBot</strong> que responde automáticamente las dudas de tus clientes, en una aplicación que facilita o automatiza tareas tediosas,
              o en un espacio donde <strong className="underline">centralizás todos tus contactos</strong> para que no tengan que preguntarte si contás con X red social.
            </p>
          </div>
        </div>

        <FigureSweepComponent>
          <FigureComponent
            title="Proyecto: página de turismo"
            imgSrc="spatium"
            description="Sitio web que funciona a modo de plantilla completa (inicio, acerca de, contacto, etc.) para una plataforma de viajes. Funciona para móviles y dispositivos de escritorio. Cuenta con un diseño y estilo moderno que resultan cómodo y fácil de navegar."
            pageLink="spatiumviajes.netlify.app"
            pageRepository="spatium-travel-website"
          />
          <FigureComponent
            title="Proyecto: landing page"
            imgSrc="guncat"
            description="Página principal de un sitio de ventas/e-commerce. Cuenta con una interfaz vistosa y animaciones que dotan al sitio web de profesionalidad."
            pageLink="guncat.netlify.app"
            pageRepository="gun-cat"
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
            description="Selección de productos para una tienda. Cuenta con modos claros y oscuros, así como una sencilla pero eficiente interfaz."
            pageLink="cartx-store.netlify.app"
            pageRepository="shop-react"
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

          <div className="mt-15 font-sans text-2xl">
            <p>
              Obtenga datos de suma importancia que le permitan determinar cuál será el próximo paso que su negocio tomará para seguir progresando.
            </p>

            <p>
              Muchas redes sociales se quedan con la información de sus usuarios (y sus clientes), datos que usted podría usar a su favor.
            </p>
          </div>
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

          <p className="mt-15 font-sans text-2xl">
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