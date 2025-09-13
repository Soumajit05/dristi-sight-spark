import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Scan, Lock, BarChart3 } from "lucide-react";

const AdvantageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Clock,
      title: "Rapid Diagnostics",
      description: "Results in under 2 seconds with 95%+ accuracy, eliminating waiting times and enabling immediate clinical decisions.",
      features: ["Instant AI analysis", "Real-time results", "Immediate referrals"],
      color: "bg-primary",
    },
    {
      icon: Scan,
      title: "Broad Screening",
      description: "Comprehensive eye health assessment beyond diabetic retinopathy, including color blindness and general eye health.",
      features: ["Multi-condition screening", "Comprehensive reports", "Risk stratification"],
      color: "bg-secondary",
    },
    {
      icon: Lock,
      title: "Secure & Personalized",
      description: "HIPAA-compliant platform with individual patient portals and secure data handling throughout the entire workflow.",
      features: ["HIPAA compliance", "Encrypted data", "Personal dashboards"],
      color: "bg-primary",
    },
    {
      icon: BarChart3,
      title: "Unique Data Insights",
      description: "Population-level health analytics that inform public health decisions and improve community health outcomes.",
      features: ["Population analytics", "Trend analysis", "Health insights"],
      color: "bg-secondary",
    },
  ];

  return (
    <section id="advantage" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">What Sets Us Apart.</h2>
          <h2 className="section-title bg-gradient-primary bg-clip-text text-transparent">
            The Dristi Difference.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Our unique combination of speed, accuracy, and accessibility creates 
            competitive advantages that transform how eye care is delivered globally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15, 
                ease: "easeOut" 
              }}
            >
              {/* Background gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className={`w-20 h-20 ${advantage.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {advantage.description}
                </p>
                
                <div className="space-y-3">
                  {advantage.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: (index * 0.15) + (featureIndex * 0.1), 
                        ease: "easeOut" 
                      }}
                    >
                      <div className="w-3 h-3 bg-gradient-primary rounded-full flex-shrink-0" />
                      <p className="text-foreground font-medium">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%+</div>
            <p className="text-muted-foreground">Diagnostic Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">&lt;2s</div>
            <p className="text-muted-foreground">Analysis Time</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Availability</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantageSection;