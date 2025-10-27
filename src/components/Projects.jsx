import { useTranslate } from "../hooks/useTranslate";
import FigureComponent from "./FigureComponent";
import FigureSweepComponent from "./FigureSweepComponent";
import SectionComponent from "./SectionComponent";

const Projects = () => {
  const t = useTranslate();

  return (
    <main>
      {/* --- SECCIÓN 1: PROYECTOS --- */}
      <SectionComponent id="proyectos" extraStyleDiv="dark:bg-gray-900 dark:text-gray-100 bg-white pb-50" > 
        <div className="md:w-1/2 flex flex-col p-4">
          <h2 className="md:text-6xl text-3xl font-bold leading-tight text-balance dark:text-white">
            {t("body.section1.title")}
          </h2>

          <div
            className="mt-6 md:mt-4 font-sans md:text-2xl text-base overflow-y-auto pr-2 leading-relaxed space-y-5 dark:text-gray-200"
            style={{ maxHeight: "calc(66vh - 100px)" }}
          >
            <p dangerouslySetInnerHTML={{ __html: t("body.section1.desc.part1") }} />

            <p dangerouslySetInnerHTML={{ __html: t("body.section1.desc.part2") }} />

            <p dangerouslySetInnerHTML={{ __html: t("body.section1.desc.part3") }} />
          </div>
        </div>

        <FigureSweepComponent extraStyle="mt-80">
          <FigureComponent
            title={t("body.section1.figure1.title")}
            imgSrc="spatium"
            description={t("body.section1.figure1.desc")}
            pageLink="https://spatiumviajes.netlify.app"
            pageRepository="spatium-travel-website"
          />
          <FigureComponent
            title={t("body.section1.figure2.title")}
            imgSrc="guncat"
            description={t("body.section1.figure2.desc")}
            pageLink="https://guncat.netlify.app"
            pageRepository="gun-cat"
          />
          <FigureComponent
            title={t("body.section1.figure3.title")}
            imgSrc="kinematic"
            description={t("body.section1.figure3.desc")}
            pageLink="https://kinematic-movies.netlify.app"
            pageRepository="kinetic-movie-page"
          />
          <FigureComponent
            title={t("body.section1.figure4.title")}
            imgSrc="cartx"
            description={t("body.section1.figure4.desc")}
            pageLink="https://cartx-store.netlify.app"
            pageRepository="shop-react"
          />
        </FigureSweepComponent>
      </SectionComponent>

      {/* --- SECCIÓN 2: IDEAS --- */}
      <SectionComponent
        id="ideas"
        extraStyleDiv="md:flex-row-reverse bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-100 pb-25"
      >
        <div className="md:w-1/2 flex flex-col p-4">
          <h2 className="md:text-6xl text-3xl font-bold leading-tight text-balance dark:text-white">
            {t("body.section2.title")}
          </h2>

          <div
            className="mt-6 md:mt-4 font-sans md:text-2xl text-base overflow-y-auto pr-2 leading-relaxed space-y-5 dark:text-gray-200"
            style={{ maxHeight: "calc(66vh - 100px)" }}
          >
            <p dangerouslySetInnerHTML={{ __html: t("body.section2.desc.part1") }} />

            <p dangerouslySetInnerHTML={{ __html: t("body.section2.desc.part2") }} />

            <p dangerouslySetInnerHTML={{ __html: t("body.section2.desc.part3") }} />

            <p dangerouslySetInnerHTML={{ __html: t("body.section2.desc.part4") }} />
          </div>
        </div>

        <FigureSweepComponent extraStyle="mt-50">
          <FigureComponent
            title={t("body.section2.figure1.title")}
            imgSrc="websample"
            description={t("body.section2.figure1.desc")}
          />
          <FigureComponent
            title={t("body.section2.figure2.title")}
            imgSrc="websamplephone"
            description={t("body.section2.figure2.desc")}
          />
        </FigureSweepComponent>
      </SectionComponent>

      {/* --- SECCIÓN 3: INVERSIÓN --- */}
      <SectionComponent id="inversión" extraStyleDiv="dark:bg-gray-900 dark:text-gray-100 bg-white pb-45">
        <div className="md:w-1/2 flex flex-col p-4">
          <h2 className="md:text-6xl text-3xl font-bold leading-tight text-balance dark:text-white"
            dangerouslySetInnerHTML={{ __html: t("body.section3.title") }}
        />

          <div
            className="mt-6 md:mt-4 font-sans md:text-2xl text-base overflow-y-auto pr-2 leading-relaxed space-y-5 dark:text-gray-200"
            style={{ maxHeight: "calc(66vh - 100px)" }}
          >
            <p dangerouslySetInnerHTML={{ __html: t("body.section3.desc.part1") }}/>

            <p dangerouslySetInnerHTML={{ __html: t("body.section3.desc.part2") }} />
          </div>
        </div>

        <FigureSweepComponent extraStyle="mt-80">
          <FigureComponent
            title={t("body.section3.figure1.title")}
            imgSrc="work_scrsht"
            description={t("body.section3.figure1.desc")}
          />
          <FigureComponent
            title={t("body.section3.figure2.title")}
            imgSrc="IDEargentina-index"
            description={t("body.section3.figure2.desc")}
            pageLink="http://swk.lyricaltokarev.com"
            pageRepository="viajes-php"
          />
          <FigureComponent
            title={t("body.section3.figure3.title")}
            imgSrc="IDEargentina-administration"
            description={t("body.section3.figure3.desc")}
            pageLink="http://swk.lyricaltokarev.com"
            pageRepository="viajes-php"
          />
          <FigureComponent
            title={t("body.section3.figure4.title")}
            imgSrc="IDEargentina-user-panel"
            description={t("body.section3.figure4.desc")}
            pageLink="http://swk.lyricaltokarev.com"
            pageRepository="viajes-php"
          />
        </FigureSweepComponent>
      </SectionComponent>
    </main >
  );
};

export default Projects;
