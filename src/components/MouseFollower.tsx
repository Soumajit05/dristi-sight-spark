import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const trailPoints = useRef<Array<{ x: number; y: number; timestamp: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };
      
      setMousePosition(newPoint);
      setIsVisible(true);
      
      // Add to trail
      trailPoints.current.push(newPoint);
      
      // Keep only recent points (last 500ms)
      const now = Date.now();
      trailPoints.current = trailPoints.current.filter(
        point => now - point.timestamp < 500
      );
      
      // Update SVG path
      updatePath();
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updatePath = () => {
      if (!pathRef.current || trailPoints.current.length < 2) return;
      
      let pathData = `M ${trailPoints.current[0].x} ${trailPoints.current[0].y}`;
      
      for (let i = 1; i < trailPoints.current.length; i++) {
        const point = trailPoints.current[i];
        pathData += ` L ${point.x} ${point.y}`;
      }
      
      pathRef.current.setAttribute('d', pathData);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Mouse Trail SVG */}
      <svg
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        style={{ mixBlendMode: 'screen' }}
      >
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          stroke="url(#trailGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Mouse Follower */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-0 w-5 h-5 bg-gradient-primary rounded-full opacity-30 animate-ping" />
          
          {/* Inner dot */}
          <div className="w-2 h-2 bg-gradient-primary rounded-full relative z-10 mx-1.5 my-1.5" />
          
          {/* Pulsing ring */}
          <div className="absolute inset-0 w-5 h-5 border border-primary/50 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </>
  );
};

export default MouseFollower;
