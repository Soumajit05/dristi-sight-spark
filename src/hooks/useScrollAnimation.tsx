import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    ...options 
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: isInView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: isInView ? { opacity: 1, x: 0 } : {},
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: isInView ? { opacity: 1, scale: 1 } : {},
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggeredFadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: "easeOut" }
  });

  return {
    ref,
    isInView,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggeredFadeInUp
  };
};