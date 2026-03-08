import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-3 rounded-xl w-fit">
              <img 
                src="https://res.cloudinary.com/dyxijlh28/image/upload/v1772869618/keevesteel_logo_big_ftsbgw.png" 
                alt="Keeves Steel" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the industry in SDS2 certified steel detailing and connection engineering. Precision in every joint, perfection in every project.
            </p>

            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-[#005bc4] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-[#005bc4] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-[#005bc4] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Structural Detailing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Connection Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Miscellaneous Steel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BOM Generation</a></li>
            </ul>
          </div>

          {/* Column 4: USA Office */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">USA Office</h4>

            <ul className="flex flex-col gap-4 text-slate-400 text-sm">

              <li className="flex items-start gap-3">
                <MapPin className="text-[#005bc4] shrink-0 mt-1" size={18} />
                <a
                  href="https://maps.google.com/?q=3000+S+Hulen+St+Ste+124+PMB+2008+Fort+Worth+TX+76109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Keeves Steel<br/>
                  3000 S Hulen St, Ste 124, PMB 2008<br/>
                  Fort Worth, TX 76109
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-[#005bc4]" size={18} />
                <a href="tel:8322198748" className="hover:text-white transition-colors">
                  Cell: 832 219 8748
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-[#005bc4]" size={18} />
                <a href="tel:8322101281" className="hover:text-white transition-colors">
                  Office: 832 210 1281
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-[#005bc4]" size={18} />
                <a href="mailto:keeves@keevessteel.com" className="hover:text-white transition-colors">
                  keeves@keevessteel.com
                </a>
              </li>

            </ul>
          </div>

          {/* Column 5: India Office */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">India Office</h4>

            <ul className="flex flex-col gap-4 text-slate-400 text-sm">

              <li className="flex items-start gap-3">
                <MapPin className="text-[#005bc4] shrink-0 mt-1" size={18} />
                <a
                  href="https://maps.google.com/?q=Citadel+Mindspace+Kadri+Hills+Yeyyadi+Mangaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Keeves Steel Private Limited<br/>
                  #210 and #211, Citadel Mindspace,<br/>
                  Kadri Hills, Yeyyadi,<br/>
                  Mangaluru, Karnataka 575008
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-[#005bc4]" size={18} />
                <a href="tel:8884837002" className="hover:text-white transition-colors">
                  Cell: 888 483 7002
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-[#005bc4]" size={18} />
                <a href="tel:6309359396" className="hover:text-white transition-colors">
                  Office: 630-935-9396
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-[#005bc4]" size={18} />
                <a href="mailto:keeves@keevessteel.com" className="hover:text-white transition-colors">
                  keeves@keevessteel.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">
          <p>© {currentYear} KEEVES STEEL. ALL RIGHTS RESERVED.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;