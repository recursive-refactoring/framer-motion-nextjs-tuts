"use client";
import { motion } from "framer-motion";

export const SlideDown = (props: any) => {
  const {
    children,
    initialOpacity = 0,
    initialY = -50,
    duration = 0.3,
  } = props;

  return (
    <motion.div
      initial={{ opacity: initialOpacity, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};
