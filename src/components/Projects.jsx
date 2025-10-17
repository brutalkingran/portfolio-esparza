import FigureComponent from "./FigureComponent";
import FigureSweepComponent from "./FigureSweepComponent";
import SectionComponent from "./SectionComponent";

const Projects = () => {
  return (
  <>
    <SectionComponent id="projects">
      <div className="md:w-1/2">
        <h2 className="md:text-6xl text-3xl">
          Tu presencia en línea importa
        </h2>

        <div className="md:mt-15 mt-5 font-sans md:text-2xl text-1xl">
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
    </SectionComponent>

    <section id="projects" className="py-16 bg-gray-400 dark:bg-gray-900 text-gray-100 relative h-screen clip-diagonal skew-y-6 -mt-25 font-light">
      <div className="-skew-y-6 pt-20 px-10 flex flex-row-reverse justify-between">
        <div className="w-1/2 mr-25">
          <h2 className="text-6xl">
            Tu sitio web, tu hogar.
          </h2>

          <div className="mt-15 font-sans text-2xl space-y-5">
            <p>
              Obtenga <strong>información clave</strong> que le permita decidir con precisión cuál será el <em>próximo paso</em> que su negocio debe dar para seguir <strong>creciendo</strong>.
            </p>

            <p>
              Muchas redes sociales <em>conservan y controlan</em> los datos de sus usuarios (y también de sus clientes).
              Sin embargo, esos mismos datos podrían estar <strong>en sus manos</strong> y servirle para <em>comprender mejor a su público</em> y <strong>potenciar sus ventas</strong>.
            </p>

            <p>
              Un sitio web propio le otorga <strong>control total sobre su marca</strong>: cómo se ve, qué comunica y cómo interactúa con sus visitantes.
              Usted decide qué mostrar, cuándo hacerlo y qué tipo de experiencia ofrecer, sin depender de políticas cambiantes ni de plataformas externas.
            </p>

            <p>
              Además, tener su propio espacio digital <em>refuerza la confianza y la credibilidad</em> de su emprendimiento.
              Es la diferencia entre “alguien que vende en redes” y una marca con presencia profesional, preparada para crecer.
            </p>
          </div>
        </div>

        <FigureSweepComponent>
          <FigureComponent
            title="Su espacio, su identidad"
            imgSrc="websample"
            description="Un sitio web es más que una página: es el punto de encuentro entre su marca y su público.
            Un lugar donde sus ideas, productos y servicios viven bajo sus propias reglas."
          />
        </FigureSweepComponent>
      </div>
    </section>

    <section id="projects" className="py-16 bg-white dark:bg-gray-900 text-gray-900 relative h-screen clip-diagonal skew-y-6 -mt-25 font-light">
      <div className="-skew-y-6 pt-20 px-10 flex flex-row justify-between">
        <div className="w-1/2">
          <h2 className="text-6xl">
            ¿Demasiado complicado? <strong>¡Déjamelo a mí!</strong>
          </h2>

          <p className="mt-15 font-sans text-2xl">
            Soy un programador graduado como <em>Técnico en Informática</em>, especializado en <strong>diseño y desarrollo web</strong>.
            A lo largo de mi formación, dentro como fuera de la universidad, he creado múltiples <em>sitios, sistemas y aplicaciones</em>.
            Las bases de datos no representan un problema para mí, y mucho menos el <strong>diseño de interfaces modernas y funcionales</strong>.
            Las nuevas tecnologías del mercado no son un obstáculo, sino una <em>motivación constante</em>.
          </p>

          <p className="mt-5 font-sans text-2xl">
            Cualquier duda o consulta que tengas, <strong>la resolveré con gusto</strong>.
            Y respecto al precio, no te preocupes: los sitios web <em>pueden ser costosos</em>, pero siempre hay formas de <strong>optimizar recursos</strong>.
            Desde algo tan simple como usar <em>enlaces de Mercado Pago</em> para procesar pagos en línea, hasta aprovechar <em>plataformas gratuitas</em> para alojar tu proyecto sin sacrificar calidad.
          </p>
        </div>

        <figure className="flex flex-col items-center w-2/5 mt-15 mr-20">
          <h3 className="skew-y-7 text-3xl mb-2 text-center"><strong>Un sitio web no es un gasto, es una inversión</strong>.</h3>

          <img src="cartx.jpg" alt="" className="skew-y-7 w-full" />

          <figcaption className="skew-y-7 text-center mt-5 font-medium w-2/3">
              Ya tiene suficientes desafíos que atender en su negocio; <em>no debería preocuparse también por tareas repetitivas</em> como mantener redes sociales, gestionar consultas o actualizar información.
              Ahí es donde entro yo: <strong>mi trabajo consiste en automatizar procesos y simplificar su día a día</strong>, para que pueda enfocarse en lo que realmente importa.
              <em>Cada minuto que ahorre hoy será una preocupación menos mañana.</em>
          </figcaption>
        </figure>
      </div>
    </section>
  </>
  );
}

export default Projects;