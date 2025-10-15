import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

const FigureSweepComponent = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const onChangePage = (n) => {
    setDirection(n);
    setCurrentPage((prev) => {
      let next = prev + n;
      if (next >= children.length) next = 0;
      if (next < 0) next = children.length - 1;
      return next;
    });
  };

  return (
    <motion.div
      className="figure-sweep-container relative flex md:flex-col items-center w-2/5 mt-15 mr-20"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        scale: [0.5, 1],
      }}
      viewport={{ margin: "-400px" }}
    >
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

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute w-full"
        >
          {children[currentPage]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default FigureSweepComponent;
