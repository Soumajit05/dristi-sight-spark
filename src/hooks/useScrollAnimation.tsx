import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px",
    amount: 0.3,
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

  const magneticHover = {
    whileHover: { 
      scale: 1.05,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    },
    whileTap: { 
      scale: 0.95,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  const parallaxY = (strength = 50) => {
    const { scrollY } = useScroll();
    return useTransform(scrollY, [0, 1000], [0, strength]);
  };

  return {
    ref,
    isInView,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggeredFadeInUp,
    magneticHover,
    parallaxY
  };
};