import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import eyeAiIcon from "@/assets/eye-ai-icon.png";

const ScrollingEye = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to eye movement
  const eyeX = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const eyeY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const eyeScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  
  // Eye rotation based on scroll
  const eyeRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 pointer-events-none"
      style={{
        x: eyeX,
        y: eyeY,
        scale: eyeScale,
        rotate: eyeRotate,
      }}
    >
      <motion.div
        className="relative"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 w-16 h-16 bg-gradient-primary rounded-full opacity-20 blur-lg animate-pulse" />
        
        {/* Eye icon */}
        <motion.img
          src={eyeAiIcon}
          alt="Dristi Eye"
          className="w-12 h-12 relative z-10 filter drop-shadow-lg"
          whileHover={{ scale: 1.1 }}
          animate={{
            rotateY: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Blink effect */}
        <motion.div
          className="absolute inset-0 w-12 h-12 bg-background/80 rounded-full"
          animate={{
            scaleY: [1, 0.1, 1],
          }}
          transition={{
            duration: 0.2,
            delay: 3,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollingEye;