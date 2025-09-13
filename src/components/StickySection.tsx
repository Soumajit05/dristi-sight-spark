import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StickySectionProps {
  children: ReactNode;
  className?: string;
  stickyClassName?: string;
  threshold?: string;
}

const StickySection = ({ 
  children, 
  className = "", 
  stickyClassName = "sticky top-0",
  threshold = "50vh"
}: StickySectionProps) => {
  return (
    <div className={`relative ${className}`} style={{ height: threshold }}>
      <motion.div 
        className={stickyClassName}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StickySection;