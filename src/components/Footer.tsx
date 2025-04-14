
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-12 pb-8 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-display font-bold text-gradient">AiBizzApps</Link>
            <p className="mt-4 text-white/70 max-w-md">
              Next-generation AI applications and expert consulting, providing powerful solutions for modern businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:info@aibizzapps.com" className="text-white/60 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Applications</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/enterprise-risk" className="text-white/70 hover:text-white transition-colors">
                  Enterprise Risk Management
                </Link>
              </li>
              <li>
                <Link to="/contracts-checker" className="text-white/70 hover:text-white transition-colors">
                  Contracts Checker
                </Link>
              </li>
              <li>
                <Link to="/mobile-app" className="text-white/70 hover:text-white transition-colors">
                  iPhone Application
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consulting" className="text-white/70 hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} AiBizzApps.com. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
