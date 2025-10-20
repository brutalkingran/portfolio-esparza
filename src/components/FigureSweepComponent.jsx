import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect, useState } from "react";
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

const FigureSweepComponent = ({ children, extraStyle }) => {
  const items = Array.isArray(children) ? children : [children]; // normalizar array
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [onScreen, setOnScreen] = useState(false)
  const [count, setCount] = useState(0)
  const [canceled, setCanceled] = useState(false)

  const onChangePage = (n, stopAuto = false) => {
    if (stopAuto) setCanceled(true);
    setDirection(n);
    setCurrentPage((prev) => {
      let next = prev + n;
      if (next >= items.length) next = 0;
      if (next < 0) next = items.length - 1;
      return next;
    });
  };

  useEffect(() => {
    let interval;

    if (onScreen && !canceled) {
      interval = setInterval(() => {
        onChangePage(1);
      }, 5000);
    } else {
      setCurrentPage(0);
    }

    return () => clearInterval(interval);
  }, [onScreen, canceled]);


  return (
    <motion.div
      className={`figure-sweep-container relative flex flex-col items-center justify-center w-full md:w-[45%] md:mt-8 mx-auto ${extraStyle}`}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        scale: [0.5, 1],
      }}
      viewport={{ margin: "0px" }}
      onViewportEnter={() => {
        setOnScreen(true);
      }}
      onViewportLeave={() => {
        setOnScreen(false);
      }}
    >
      {items.length > 1 && (
        <>
          <AiOutlineArrowLeft
            size={45}
            className="absolute md:-left-10 -left-1 top-1/2 skew-y-5 transform -translate-y-1/2 cursor-pointer hover:scale-85 transition-all z-20 bg-white border border-black rounded-full"
            onClick={() => onChangePage(-1, true)}
            color="black"
          />

          <AiOutlineArrowRight
            size={45}
            className="absolute cursor-pointer hover:scale-85 transition-all md:-right-1 -right-1 skew-y-5 top-1/2 z-20 bg-white border border-black rounded-full"
            onClick={() => onChangePage(1, true)}
            color="black"
          />
        </>
      )}

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
          {items[currentPage]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default FigureSweepComponent;
