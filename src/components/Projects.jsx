import FigureComponent from "./FigureComponent";
import FigureSweepComponent from "./FigureSweepComponent";
import SectionComponent from "./SectionComponent";

const Projects = () => {
  return (
    <>
      {/* --- SECCIÓN: PROYECTOS --- */}
      <SectionComponent id="proyectos" extraStyleDiv="dark:bg-gray-900 dark:text-gray-100 bg-white pb-50" > 
        <div className="md:w-1/2 flex flex-col p-4">
          <h2 className="md:text-6xl text-3xl font-bold leading-tight text-balance dark:text-white">
            Tu presencia en línea importa
          </h2>

          <div
            className="mt-6 md:mt-4 font-sans md:text-2xl text-base overflow-y-auto pr-2 leading-relaxed space-y-5 dark:text-gray-200"
            style={{ maxHeight: "calc(66vh - 100px)" }}
          >
            <p>
              Contar con <strong className="underline dark:decoration-rose-400">tu propio sitio web</strong> para tu emprendimiento es una decisión que podría ahorrarte problemas a largo plazo.
              Después de todo, <strong className="font-black dark:text-rose-400">es tu propio espacio</strong>, sin tener que lidiar con algoritmos traicioneros o diseños que no se ajusten a tus gustos.
            </p>

            <p>
              Con tu propio sitio web, las posibilidades son <strong className="underline dark:decoration-rose-400">infinitas</strong>: los resultados de búsqueda en <strong className="font-black dark:text-rose-400">Google</strong> mostrarán a tu emprendimiento antes que otros,
              podrás generar ingresos pasivos con anuncios, e incluso podrías ahorrarte <strong className="underline dark:decoration-rose-400">mil y un dolores de cabeza</strong>.
            </p>

            <p>
              Pensá en ese <strong className="font-black dark:text-rose-400">ChatBot</strong> que responde automáticamente las dudas de tus clientes, en una aplicación que facilita o automatiza tareas tediosas,
              o en un espacio donde <strong className="underline dark:decoration-rose-400">centralizás todos tus contactos</strong> para que no tengan que preguntarte si contás con X red social.
            </p>
          </div>
        </div>

        <FigureSweepComponent extraStyle="mt-80">
          <FigureComponent
            title="Proyecto: página de turismo"
            imgSrc="spatium"
            description="Sitio web que funciona a modo de plantilla completa (inicio, acerca de, contacto, etc.) para una plataforma de viajes. Funciona para móviles y dispositivos de escritorio. Cuenta con un diseño y estilo moderno que resultan cómodo y fácil de navegar."
            pageLink="https://spatiumviajes.netlify.app"
            pageRepository="spatium-travel-website"
          />
          <FigureComponent
            title="Proyecto: landing page"
            imgSrc="guncat"
            description="Página principal de un sitio de ventas/e-commerce. Cuenta con una interfaz vistosa y animaciones que dotan al sitio web de profesionalidad."
            pageLink="https://guncat.netlify.app"
            pageRepository="gun-cat"
          />
          <FigureComponent
            title="Proyecto: Aplicación de Streaming"
            imgSrc="kinematic"
            description="Plataforma de streaming similar a Netflix. Brinda una interfaz cómoda para el usuario, con vista disponible para móviles y escritorio. Cuenta con modo claro y oscuro."
            pageLink="https://kinematic-movies.netlify.app"
            pageRepository="kinetic-movie-page"
          />
          <FigureComponent
            title="Proyecto: Tienda Virtual"
            imgSrc="cartx"
            description="Selección de productos para una tienda. Cuenta con modos claros y oscuros, así como una sencilla pero eficiente interfaz."
            pageLink="https://cartx-store.netlify.app"
            pageRepository="shop-react"
          />
        </FigureSweepComponent>
      </SectionComponent>

      {/* --- SECCIÓN: IDEAS --- */}
      <SectionComponent
        id="ideas"
        extraStyleDiv="md:flex-row-reverse bg-gray-400 text-gray-100 dark:bg-gray-800 dark:text-gray-100 pb-25"
      >
        <div className="md:w-1/2 flex flex-col p-4">
          <h2 className="md:text-6xl text-3xl font-bold leading-tight text-balance dark:text-white">
            Tu sitio web, tu hogar.
          </h2>

          <div
            className="mt-6 md:mt-4 font-sans md:text-2xl text-base overflow-y-auto pr-2 leading-relaxed space-y-5 dark:text-gray-200"
            style={{ maxHeight: "calc(66vh - 100px)" }}
          >
            <p>
              Obtenga <strong className="dark:text-rose-400">información clave</strong> que le permita decidir con precisión cuál será el <em>próximo paso</em> que su negocio debe dar para seguir <strong className="dark:text-rose-400">creciendo</strong>.
            </p>

            <p>
              Muchas redes sociales <em>conservan y controlan</em> los datos de sus usuarios (y también de sus clientes).
              Sin embargo, esos mismos datos podrían estar <strong className="dark:text-rose-400">en sus manos</strong> y servirle para <em>comprender mejor a su público</em> y <strong className="dark:text-rose-400">potenciar sus ventas</strong>.
            </p>

            <p>
              Un sitio web propio le otorga <strong className="dark:text-rose-400">control total sobre su marca</strong>: cómo se ve, qué comunica y cómo interactúa con sus visitantes.
              Usted decide qué mostrar, cuándo hacerlo y qué tipo de experiencia ofrecer.
            </p>

            <p>
              Además, tener su propio espacio digital <em>refuerza la confianza y la credibilidad</em> de su emprendimiento.
              Es la diferencia entre “alguien que vende en redes” y una marca con presencia profesional.
            </p>
          </div>
        </div>

        <FigureSweepComponent extraStyle="mt-50">
          <FigureComponent
            title="Su espacio, su identidad"
            imgSrc="websample"
            description="Un sitio web es más que una página: es el punto de encuentro entre su marca y su público.
            Un lugar donde sus ideas, productos y servicios viven bajo sus propias reglas."
          />
          <FigureComponent
            title="... en cualquier lugar"
            imgSrc="websamplephone"
            description="Tu sitio web se puede adaptar a cualquier plataforma."
          />
        </FigureSweepComponent>
      </SectionComponent>

      {/* --- SECCIÓN: INVERSIÓN --- */}
      <SectionComponent id="inversión" extraStyleDiv="dark:bg-gray-900 dark:text-gray-100 bg-white pb-45">
        <div className="md:w-1/2 flex flex-col p-4">
          <h2 className="md:text-6xl text-3xl font-bold leading-tight text-balance dark:text-white">
            ¿Demasiado complicado? <strong className="dark:text-rose-400">¡Dejamelo a mí!</strong>
          </h2>

          <div
            className="mt-6 md:mt-4 font-sans md:text-2xl text-base overflow-y-auto pr-2 leading-relaxed space-y-5 dark:text-gray-200"
            style={{ maxHeight: "calc(66vh - 100px)" }}
          >
            <p>
              Soy un programador graduado como <em>Técnico en Informática</em>, especializado en <strong className="dark:text-rose-400">diseño y desarrollo web</strong>.
              A lo largo de mi formación he creado múltiples <em>sitios, sistemas y aplicaciones</em>.
              Las bases de datos no representan un problema para mí, y mucho menos el <strong className="dark:text-rose-400">diseño de interfaces modernas y funcionales</strong>.
            </p>

            <p>
              Cualquier duda o consulta que tengas, <strong className="dark:text-rose-400">la resolveré con gusto</strong>.
              Y respecto al precio, no te preocupes: los sitios web <em>pueden ser costosos</em>, pero siempre hay formas de <strong className="dark:text-rose-400">optimizar recursos</strong>.
              Desde algo tan simple como usar <em>enlaces de Mercado Pago</em> para procesar pagos en línea, hasta aprovechar <em>plataformas gratuitas</em> para alojar tu proyecto sin sacrificar calidad.
            </p>
          </div>
        </div>

        <FigureSweepComponent extraStyle="mt-80">
          <FigureComponent
            title="<strong>Un sitio web no es un gasto, es una inversión</strong>"
            imgSrc="work_scrsht"
            description="Ya tiene suficientes desafíos que atender en su negocio; <em>no debería preocuparse también por tareas repetitivas</em> como mantener redes sociales, gestionar consultas o actualizar información.
            Ahí es donde entro yo: <strong className='dark:text-rose-400'>mi trabajo consiste en automatizar procesos y simplificar su día a día</strong>, para que pueda enfocarse en lo que realmente importa.
            <em>Cada minuto que ahorre hoy será una preocupación menos mañana.</em>"
          />
        </FigureSweepComponent>
      </SectionComponent>
    </>
  );
};

export default Projects;
