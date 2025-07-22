
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="mb-6 md:mb-0 col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <div className="text-white font-bold text-xl md:text-2xl">TIFL</div>
              <div className="bg-white/20 text-white px-2 py-1 rounded-md text-xs md:text-sm font-medium mt-1">Tools for Innovative Family Learning</div>
            </Link>
            <p className="mt-3 md:mt-4 text-white/80 max-w-xs text-sm md:text-base">
              Supporting early childhood development across Pakistan through innovative tools, resources, training, and community engagement.
            </p>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                  Educational Materials
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link to="/milestones" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                  Milestone Tracker
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/80 flex items-center gap-2 text-sm md:text-base">
                <Mail size={14} className="md:w-4 md:h-4" />
                <span className="break-all">tifl5617@gmail.com</span>
              </li>
              <li className="text-white/80 flex items-center gap-2 text-sm md:text-base">
                <Phone size={14} className="md:w-4 md:h-4" />
                03325890475
              </li>
              <li className="text-white/80 flex items-center gap-2 text-sm md:text-base">
                <MapPin size={14} className="md:w-4 md:h-4" />
                Islamabad, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-xs md:text-sm text-center md:text-left">&copy; {new Date().getFullYear()} TIFL - Tools for Innovative Family Learning. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 md:space-x-6">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-xs md:text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors text-xs md:text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
