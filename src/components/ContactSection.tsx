import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Heart, Mail, Users } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    type: "partnership"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch within 24 hours to discuss how Dristi can help your organization.",
    });
    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
      type: "partnership"
    });
  };

  const partnershipTypes = [
    {
      icon: Heart,
      title: "Healthcare Partners",
      description: "Clinics and hospitals ready to revolutionize eye care delivery",
      color: "bg-primary",
    },
    {
      icon: Mail,
      title: "Investors",
      description: "Funding partners who share our vision for accessible healthcare",
      color: "bg-secondary",
    },
    {
      icon: Users,
      title: "Research Collaborators",
      description: "Academic and research institutions advancing eye care innovation",
      color: "bg-primary",
    },
  ];

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">Join Us in Revolutionizing</h2>
          <h2 className="section-title bg-gradient-primary bg-clip-text text-transparent">
            Eye Care.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Together, we can create a world where preventable blindness is eliminated 
            and quality eye care is accessible to everyone, everywhere.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
            >
              <div className={`w-16 h-16 ${type.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {type.title}
              </h3>
              <p className="text-muted-foreground">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto bg-card border border-border rounded-3xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Partner for a Clearer Future
            </h3>
            <p className="text-muted-foreground">
              Let's discuss how Dristi can transform eye care in your community or organization.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2 border-border focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2 border-border focus:border-primary transition-colors"
                  placeholder="your.email@organization.com"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="organization" className="text-foreground font-medium">
                Organization
              </Label>
              <Input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="mt-2 border-border focus:border-primary transition-colors"
                placeholder="Your clinic, hospital, or organization"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-foreground font-medium">
                Message *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="mt-2 border-border focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your interest in Dristi and how we can work together..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3 text-lg rounded-xl transition-all duration-300 hover:shadow-primary hover:-translate-y-1"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>

          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Prefer email? Reach us directly at{" "}
              <a 
                href="mailto:hello@dristi.ai" 
                className="text-primary hover:text-primary-dark font-medium transition-colors"
              >
                hello@dristi.ai
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;