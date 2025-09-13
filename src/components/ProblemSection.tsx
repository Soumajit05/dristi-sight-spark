import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "422M", label: "People with diabetes worldwide", highlight: true },
    { number: "93M", label: "At risk of diabetic retinopathy", highlight: false },
    { number: "285M", label: "People with visual impairment globally", highlight: false },
    { number: "80%", label: "Of blindness is preventable", highlight: true },
  ];

  return (
    <section id="problem" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">
            The Widening Gap Between a Treatable Condition
          </h2>
          <h2 className="section-title bg-gradient-primary bg-clip-text text-transparent">
            and a Lost Future.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Millions face preventable blindness while early detection remains out of reach 
            in underserved communities worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-8 rounded-2xl transition-all duration-300 hover-lift hover-glow ${
                stat.highlight
                  ? "bg-gradient-primary text-white shadow-primary"
                  : "bg-card border border-border hover:shadow-lg"
              }`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <div className={`text-4xl font-bold font-montserrat mb-4 ${
                stat.highlight ? "text-white" : "text-primary"
              }`}>
                {stat.number}
              </div>
              <p className={`text-lg ${
                stat.highlight ? "text-white/90" : "text-muted-foreground"
              }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-2xl font-semibold text-destructive mb-4">
            The Silent Crisis
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            While technology advances rapidly in urban centers, remote and underserved 
            communities lack access to basic eye care screening. Early detection could 
            prevent 80% of blindness cases, yet millions remain unscreened due to 
            geographic, economic, and resource barriers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;