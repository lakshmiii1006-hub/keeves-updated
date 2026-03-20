import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-slate-900 text-white pt-20 pb-10" 
      style={{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-3 rounded-xl w-fit shadow-lg">
              <img 
                src="https://res.cloudinary.com/dyxijlh28/image/upload/v1772869618/keevesteel_logo_big_ftsbgw.png" 
                alt="Keeves Steel" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Reimagining Steel Detailing with<br/>
              Next Level Innovation and Absolute Accuracy.<br/>
              Precision in every joint, perfection in every project.
            </p>

            
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">Navigation</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li><NavLink to="/" className="hover:text-sky-400 transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-sky-400 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/projects" className="hover:text-sky-400 transition-colors">Projects</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">Services</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Structural Detailing</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Connection Design</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Miscellaneous Steel</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">BOM Generation</a></li>
            </ul>
          </div>

          {/* Column 4: USA Office */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">USA Office</h4>
            <ul className="flex flex-col gap-5 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#005bc4] shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">
                  Keeves Steel<br/>
                  3000 S Hulen St, Ste 124, PMB 2008<br/>
                  Fort Worth, TX 76109
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#005bc4]" size={18} />
                <a href="tel:8884837002" className="hover:text-white transition-colors">Cell: 888 483 7002</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#005bc4]" size={18} />
                <a href="tel:919019260426" className="hover:text-white transition-colors">Office: +91 90192 60426</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#005bc4]" size={18} />
                <a href="mailto:keeves@keevessteel.com" className="hover:text-white transition-colors text-xs">keeves@keevessteel.com</a>
              </li>
            </ul>
          </div>

          {/* Column 5: India Office */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-white">India Office</h4>
            <ul className="flex flex-col gap-5 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#005bc4] shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">
                  Keeves Steel Private Limited<br/>
                  #210 and #211, Citadel Mindspace,<br/>
                  Kadri Hills, Yeyyadi,<br/>
                  Mangaluru, Karnataka 575008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#005bc4]" size={18} />
                <a href="tel:8884837002" className="hover:text-white transition-colors">Cell: 888 483 7002</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#005bc4]" size={18} />
                <a href="tel:919019260426" className="hover:text-white transition-colors">Office: +91 90192 60426</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#005bc4]" size={18} />
                <a href="mailto:keeves@keevessteel.com" className="hover:text-white transition-colors text-xs">keeves@keevessteel.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-[0.25em]">
          <p>© {currentYear} KEEVES STEEL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;