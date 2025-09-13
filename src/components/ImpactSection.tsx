import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Stethoscope, Building2 } from "lucide-react";

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stakeholders = [
    {
      icon: User,
      title: "Patients",
      benefits: [
        "Early detection and peace of mind",
        "Accessible screening in their community",
        "Reduced travel and healthcare costs",
        "Personalized health tracking",
        "Timely treatment referrals",
      ],
      color: "bg-primary",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: Stethoscope,
      title: "Practitioners",
      benefits: [
        "Enhanced diagnostic capabilities",
        "Streamlined patient management",
        "Evidence-based screening protocols",
        "Reduced manual screening time",
        "Improved patient outcomes",
      ],
      color: "bg-secondary",
      gradient: "from-secondary to-secondary-light",
    },
    {
      icon: Building2,
      title: "Healthcare Systems",
      benefits: [
        "Reduced long-term treatment costs",
        "Improved population health metrics",
        "Scalable screening programs",
        "Data-driven health insights",
        "Enhanced community outreach",
      ],
      color: "bg-primary",
      gradient: "from-primary-dark to-primary",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">A Clearer Future for</h2>
          <h2 className="section-title bg-gradient-primary bg-clip-text text-transparent">
            Patients, Practitioners, and Healthcare Systems.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Dristi creates value across the entire healthcare ecosystem, delivering 
            measurable benefits for everyone involved in eye care delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2, 
                ease: "easeOut" 
              }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stakeholder.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stakeholder.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">
                {stakeholder.title}
              </h3>
              
              <div className="space-y-4">
                {stakeholder.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index * 0.2) + (benefitIndex * 0.1), 
                      ease: "easeOut" 
                    }}
                  >
                    <div className={`w-2 h-2 ${stakeholder.color} rounded-full mt-2.5 flex-shrink-0`} />
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="bg-gradient-primary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Transforming Lives Through Early Detection
            </h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              When we detect eye conditions early, we don't just save sight – we preserve 
              independence, maintain quality of life, and keep families together. Every 
              screening is an opportunity to change a life forever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;