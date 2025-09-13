import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Database, TrendingUp, Globe } from "lucide-react";

const BusinessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const revenueStreams = [
    {
      icon: CreditCard,
      title: "B2B Subscription Model",
      description: "Scalable SaaS pricing for clinics, hospitals, and healthcare systems with tiered plans based on screening volume and features.",
      details: [
        "Starter: $299/month (up to 500 screenings)",
        "Professional: $699/month (up to 2,000 screenings)",
        "Enterprise: Custom pricing for large systems",
      ],
      color: "bg-primary",
    },
    {
      icon: Database,
      title: "Data-as-a-Service (DaaS)",
      description: "Anonymized population health insights and screening analytics for pharmaceutical companies, research institutions, and public health organizations.",
      details: [
        "Population health analytics",
        "Clinical research partnerships",
        "Epidemiological studies support",
      ],
      color: "bg-secondary",
    },
  ];

  const marketMetrics = [
    { label: "Global Diabetic Retinopathy Market", value: "$7.8B", growth: "by 2028" },
    { label: "Telehealth Market Growth", value: "25.2%", growth: "CAGR" },
    { label: "AI in Healthcare Market", value: "$102B", growth: "by 2028" },
  ];

  return (
    <section id="business" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">Driving Social Good with a</h2>
          <h2 className="section-title bg-gradient-primary bg-clip-text text-transparent">
            Scalable Business Model.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Our sustainable revenue model ensures long-term impact while maintaining 
            accessibility for underserved communities worldwide.
          </p>
        </motion.div>

        {/* Revenue Streams */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2, 
                ease: "easeOut" 
              }}
            >
              <div className={`w-20 h-20 ${stream.color} rounded-3xl flex items-center justify-center mb-8 shadow-lg`}>
                <stream.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
                {stream.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                {stream.description}
              </p>
              
              <div className="space-y-3">
                {stream.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: (index * 0.2) + (detailIndex * 0.1), 
                      ease: "easeOut" 
                    }}
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2.5 flex-shrink-0" />
                    <p className="text-foreground font-medium">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Opportunity */}
        <motion.div
          className="bg-gradient-primary rounded-3xl p-12 text-white mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Massive Market Opportunity</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Positioned at the intersection of three rapidly growing markets: AI healthcare, 
              telehealth, and diabetic care management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1), 
                  ease: "easeOut" 
                }}
              >
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-sm opacity-80">{metric.growth}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sustainability & Impact */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="bg-card border border-border rounded-3xl p-8">
            <TrendingUp className="w-16 h-16 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
              Sustainable Growth
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our subscription model creates predictable revenue while our data insights 
              generate additional value streams. This dual approach ensures financial 
              sustainability while maximizing social impact.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-3xl p-8">
            <Globe className="w-16 h-16 text-secondary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">
              Global Impact
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every screening generates revenue that funds expansion into underserved 
              markets. Our business model directly ties financial success to reaching 
              more people who need eye care the most.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;