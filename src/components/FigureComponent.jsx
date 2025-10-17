import { motion } from "framer-motion";

const FigureComponent = ({ title,
imgSrc,
description,
pageLink,
pageRepository }) => {
  return(
    <figure
      className="flex flex-col items-center"
    >
      <h3 className="skew-y-7 text-3xl mb-2">{title}</h3>

      <img src={`${imgSrc}.jpg`} alt={`${imgSrc} page`} className="skew-y-7 h-full max-h-100"/>
      
      <figcaption className="skew-y-7 text-center mt-5 font-medium w-2/3">
        <div>
          {description}
        </div>
        
        {
          pageLink &&
          <div>
            ¿Querés probar el sitio?
            <a className="text-blue-600 underline ml-1" href={`https://${pageLink}/`}>
              {pageLink}
            </a>
          </div>
        }

        {
          pageRepository &&
          <div>
            ¿Querés revisar el código? 
            <a className="text-blue-600 underline ml-1" href={`https://github.com/brutalkingran/${pageRepository}`}>
              Repositorio
            </a>
          </div>
        }
      </figcaption>
    </figure>
  );
}

export default FigureComponent;