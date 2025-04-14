
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-display font-bold text-gradient">AiBizzApps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/enterprise-risk" className="text-white/80 hover:text-white transition-colors">
              Enterprise Risk
            </Link>
            <Link to="/contracts-checker" className="text-white/80 hover:text-white transition-colors">
              Contracts Checker
            </Link>
            <Link to="/mobile-app" className="text-white/80 hover:text-white transition-colors">
              Mobile App
            </Link>
            <Link to="/consulting" className="text-white/80 hover:text-white transition-colors">
              Consulting
            </Link>
            <Button className="bg-aiba-purple hover:bg-aiba-purple-dark transition-colors btn-glow">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-black/90 rounded-lg mt-2 p-4 border border-white/10">
            <Link to="/" className="block text-white/80 hover:text-white py-2">
              Home
            </Link>
            <Link to="/enterprise-risk" className="block text-white/80 hover:text-white py-2">
              Enterprise Risk
            </Link>
            <Link to="/contracts-checker" className="block text-white/80 hover:text-white py-2">
              Contracts Checker
            </Link>
            <Link to="/mobile-app" className="block text-white/80 hover:text-white py-2">
              Mobile App
            </Link>
            <Link to="/consulting" className="block text-white/80 hover:text-white py-2">
              Consulting
            </Link>
            <Button className="w-full bg-aiba-purple hover:bg-aiba-purple-dark transition-colors">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
