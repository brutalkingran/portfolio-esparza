import { useTranslate } from "../hooks/useTranslate";

const FigureComponent = ({ title,
imgSrc,
description,
pageLink,
pageRepository }) => {
  const t = useTranslate();

  return (
    <figure className="flex flex-col items-center md:mt-0">
      <h3
        className="skew-y-7 md:text-3xl text-2xl mb-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <img
        src={`${imgSrc}.jpg`}
        alt={`${imgSrc} page`}
        className="skew-y-7 h-full max-h-100"
      />

      <figcaption className="skew-y-7 text-center md:mt-5 mt-0 font-medium w-2/3">
        <div dangerouslySetInnerHTML={{ __html: description }} />

        {pageLink && (
          <div>
            {t("figuregen.test")}
            <a
              className="text-blue-600 underline ml-1"
              href={`https://${pageLink}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pageLink}
            </a>
          </div>
        )}

        {pageRepository && (
          <div>
            { t("figuregen.code") }
            <a
              className="text-blue-600 underline ml-1"
              href={`https://github.com/brutalkingran/${pageRepository}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        )}
      </figcaption>
    </figure>
  );

}

export default FigureComponent;