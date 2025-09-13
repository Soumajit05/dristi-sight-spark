import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

interface ParallaxOptions {
  speed?: number;
  reverse?: boolean;
  offset?: [number, number];
}

export const useParallaxScroll = (
  elementRef: RefObject<HTMLElement>,
  options: ParallaxOptions = {}
) => {
  const { speed = 0.5, reverse = false, offset = [0, 1] } = options;
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(
    scrollYProgress,
    offset,
    reverse ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  return { y, opacity, scrollYProgress };
};

export const useMouseParallax = (strength: number = 20) => {
  const ref = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      ref.current = {
        x: (clientX / innerWidth - 0.5) * strength,
        y: (clientY / innerHeight - 0.5) * strength,
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [strength]);
  
  return ref;
};