import { motion } from "framer-motion";

export default function BlinkingText() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }} // aparece, desaparece, aparece
      transition={{
        duration: 1, // cada ciclo dura 1 segundo
        repeat: Infinity, // repite para siempre
        ease: "linear",
      }}
    >
      _
    </motion.span>
  );
}