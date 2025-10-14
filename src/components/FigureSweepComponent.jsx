import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

const FigureSweepComponent = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onChangePage = (n) => {
    let newPage = currentPage + n;

    if (newPage > children.length - 1) {
      newPage = 0;
    } else if (newPage < 0) {
      newPage = children.length - 1;
    }

    setCurrentPage(newPage);
  }

  return (
    <div className="figure-sweep-container relative flex md:flex-col items-center w-2/5 mt-15 mr-20">
      <AiOutlineArrowLeft
        size={45}
        className="absolute -left-15 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-85 transition-all z-20 bg-white border border-black rounded-full"
        onClick={() => onChangePage(-1) } 
      />
      
      <AiOutlineArrowRight
        size={45}
        className="absolute cursor-pointer hover:scale-85 transition-all -right-5 top-1/2 z-20 bg-white border border-black rounded-full"
        onClick={() => onChangePage(1) }
      />

      {children[currentPage]}
    </div>
  );
};

export default FigureSweepComponent;
