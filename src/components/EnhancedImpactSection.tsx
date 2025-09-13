import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart, Users, TrendingUp } from "lucide-react";
import StickySection from "./StickySection";

const EnhancedImpactSection = () => {
  const { ref, isInView, staggeredFadeInUp, magneticHover } = useScrollAnimation();

  const impacts = [
    {
      icon: Heart,
      title: "For Patients",
      benefits: [
        "Early detection prevents 80% of blindness",
        "Immediate results in under 2 seconds",
        "Accessible care regardless of location",
        "Personalized treatment recommendations"
      ],
      color: "bg-gradient-to-br from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "For Practitioners",
      benefits: [
        "AI-assisted diagnostic accuracy",
        "Streamlined patient workflow",
        "Comprehensive patient insights",
        "Reduced manual screening time"
      ],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "For Healthcare Systems",
      benefits: [
        "Reduced long-term treatment costs",
        "Population health analytics",
        "Resource optimization insights",
        "Preventive care focus"
      ],
      color: "bg-gradient-to-br from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-muted/20 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">
            A Clearer Future for 
          </h2>
          <h2 className="section-title bg-gradient-primary bg-clip-text text-transparent">
            Patients, Practitioners, and Healthcare Systems.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Dristi creates value across the entire healthcare ecosystem, 
            transforming how eye care is delivered and received.
          </p>
        </motion.div>

        <StickySection className="min-h-screen" threshold="100vh">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full flex flex-col hover-lift hover-glow"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <div className={`w-20 h-20 ${impact.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  <impact.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="subsection-title mb-6">{impact.title}</h3>
                
                <div className="space-y-4 flex-grow">
                  {impact.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: index * 0.2 + benefitIndex * 0.1 + 0.5,
                        duration: 0.6
                      }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </StickySection>
      </div>
    </section>
  );
};

export default EnhancedImpactSection;