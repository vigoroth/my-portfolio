// src/components/ScrollAnimationWrapper.js
"use client";

import { motion } from 'framer-motion';

const ScrollAnimationWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and 50px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true }} // Only animate once when it enters the screen
      transition={{ duration: 0.8, ease: "easeOut" }} // Control the animation's feel
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;