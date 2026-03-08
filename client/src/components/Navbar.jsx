import React, { useState } from 'react';
import { Menu, X, Mail, ShieldCheck, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ];

  const mailtoHref = "mailto:keeves@keevessteel.com?subject=Project%20Inquiry%20-%20Keeves%20Steel";

  return (
    <header className="fixed top-0 w-full z-[999]">

      {/* TOP UTILITY BAR */}
      <div className="hidden lg:block bg-slate-900 text-white/70 py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.15em]">

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-sky-400" />
              Est. Aug 2021
            </span>

            <span className="flex items-center gap-2">
              <Clock size={12} className="text-sky-400" />
              Mon-Fri: 8AM - 5PM
            </span>
          </div>

          <a
            href={mailtoHref}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail size={12} className="text-sky-400" />
            keeves@keevessteel.com
          </a>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-white border-b border-slate-100 shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center">
            <NavLink to="/" className="block">
              <img
                src="https://res.cloudinary.com/dyxijlh28/image/upload/v1772869618/keevesteel_logo_big_ftsbgw.png"
                alt="Keeves Steel"
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </NavLink>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">

            <div className="flex items-center gap-8 text-[13px] font-bold uppercase tracking-[0.2em]">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative pb-2 transition-colors duration-300 ${
                      isActive
                        ? "text-[#005bc4]"
                        : "text-slate-700 hover:text-[#005bc4]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#005bc4]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}

            </div>

            {/* CONTACT BUTTON */}
            <a
              href={mailtoHref}
              className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 bg-[#005bc4] text-white hover:bg-slate-900 shadow-lg shadow-blue-900/10"
            >
              Contact Us
            </a>

          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
            >

              <div className="flex flex-col p-8 gap-6 items-center text-center">

                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-2">
                  Keeves Steel • Established 2021
                </div>

                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-bold uppercase tracking-widest ${
                        isActive
                          ? "text-[#005bc4]"
                          : "text-slate-800 hover:text-[#005bc4]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <a
                  href={mailtoHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full max-w-xs bg-[#005bc4] text-white py-4 rounded-full font-bold uppercase tracking-widest shadow-md"
                >
                  Contact Us
                </a>

              </div>

            </motion.div>

          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;