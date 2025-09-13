import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating orbs */}
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 bg-gradient-primary rounded-full opacity-20"
          style={{
            left: `${10 + index * 15}%`,
            top: `${10 + index * 12}%`,
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      ))}

      {/* Mouse-following particles */}
      {Array.from({ length: 3 }).map((_, index) => (
        <motion.div
          key={`mouse-${index}`}
          className="absolute w-2 h-2 bg-secondary rounded-full opacity-30"
          style={{
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: mousePosition.x * (index + 1) * 0.3,
            y: mousePosition.y * (index + 1) * 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 50 - index * 10,
            damping: 20,
          }}
        />
      ))}

      {/* Background gradient blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary/15 to-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 180, 90],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingElements;