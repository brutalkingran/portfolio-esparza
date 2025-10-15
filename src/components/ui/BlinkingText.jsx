import { motion } from "framer-motion";

export default function BlinkingText() {
  return (
    <motion.span
      animate={{ opacity: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1] }}
      transition={{
        duration: 0.5,        // 1 segundo por ciclo
        repeat: Infinity,   // infinito
        ease: "linear",     // sin easing
      }}
    >
      _
    </motion.span>
  );
}