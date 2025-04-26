"use client";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
};

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} // Initial state (invisible and below)
      whileInView={{ opacity: 1, y: 0 }} // Final state (visible and at original position)
      transition={{ duration: 1 }} // Animation speed
      viewport={{ amount: 0.2, once: false }}
      className="h-screen"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
