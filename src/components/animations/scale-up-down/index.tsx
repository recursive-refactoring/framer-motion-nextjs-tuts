"use client";
import { motion } from "framer-motion";

export const ScaleUpDown = (props: any) => {
  const { children } = props;
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      {children}
    </motion.div>
  );
};
