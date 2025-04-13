"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ScrollTriggered = (props: any) => {
  const { children, ref } = props;
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};
