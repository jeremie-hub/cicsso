import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Resolutions", path: "/resolutions" },
    { name: "Contact", path: "/contact" },
  ];

  const policies = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Transparency", path: "/transparency" },
    { name: "Feedback", path: "/feedback" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">CICSSO</h3>
            <p className="text-background/80 mb-4">
              College of Information and Computing Sciences Student Organization - 
              Empowering students through technology, innovation, and academic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:cicsso@university.edu" className="text-background/60 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <Link
                    to={policy.path}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {policy.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            Copyright © {currentYear} CICSSO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;