import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Zap, Shield, Users, Accessibility, Heart } from "lucide-react";
import eyeAiIcon from "@/assets/eye-ai-icon.png";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Eye,
      title: "AI Fundus Analysis",
      description: "Advanced machine learning algorithms provide instant, accurate diagnosis of diabetic retinopathy and other eye conditions.",
      color: "bg-primary",
    },
    {
      icon: Zap,
      title: "Color Blindness Test",
      description: "Comprehensive color vision assessment using scientifically validated testing protocols.",
      color: "bg-secondary",
    },
    {
      icon: Shield,
      title: "Personalized Dashboards",
      description: "Secure, individual patient portals with detailed reports and tracking capabilities.",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Dual Login System",
      description: "Separate interfaces for healthcare providers and patients, optimized for each user type.",
      color: "bg-secondary",
    },
    {
      icon: Accessibility,
      title: "Accessibility Options",
      description: "Designed for users with varying abilities, including voice navigation and high contrast modes.",
      color: "bg-primary",
    },
    {
      icon: Heart,
      title: "Empathetic Design",
      description: "User-centric interface that reduces anxiety and builds trust throughout the screening process.",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="solution" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-8">
            <motion.img
              src={eyeAiIcon}
              alt="Dristi AI Eye Care"
              className="w-24 h-24"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          <h2 className="section-title">Introducing Dristi</h2>
          <h2 className="section-title bg-gradient-primary bg-clip-text text-transparent">
            Instant, Accurate, and Accessible Diagnostics.
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground mt-4">
            In Under 2 Seconds.
          </h3>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Our AI-powered platform transforms any smartphone or tablet into a 
            professional-grade eye screening device, bringing world-class diagnostics 
            to every community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover-lift hover-glow group magnetic-hover"
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.12, 
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                rotateX: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-glow`}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              
              <h3 className="subsection-title">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16 bg-gradient-hero rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Democratizing Eye Care Through Technology
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Dristi bridges the gap between advanced medical technology and accessibility, 
            ensuring that geographic location or economic status never determines access 
            to life-changing eye care screening.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;