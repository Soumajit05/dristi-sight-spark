import { motion } from "framer-motion";
import { Heart, Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="text-3xl font-bold font-montserrat mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Dristi
              </span>
            </motion.div>
            <p className="text-background/80 text-lg leading-relaxed max-w-md">
              Preventing blindness with AI. Empowering communities with instant, 
              accurate eye screenings for a clearer future.
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-background/80">
                Made with care for global eye health
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-montserrat">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Our Solution", href: "#solution" },
                { name: "Impact", href: "#impact" },
                { name: "Advantages", href: "#advantage" },
                { name: "Business Model", href: "#business" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-montserrat">
              Connect
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@dristi.ai"
                className="flex items-center space-x-3 text-background/80 hover:text-background transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>hello@dristi.ai</span>
              </a>
              
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Github, href: "#", label: "GitHub" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-background/10 rounded-lg text-background/80 hover:text-background hover:bg-background/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} Dristi by{" "}
              <span className="font-semibold text-background/80">
                Boolean Before Babes
              </span>
              . All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-background/60 hover:text-background/80 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background/80 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-background/80 transition-colors duration-300"
              >
                HIPAA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;