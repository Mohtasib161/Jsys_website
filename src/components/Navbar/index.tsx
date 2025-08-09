import React, { useState, useCallback } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import LanguageDropdown from '../LanguageSwitch'; // Adjust path as needed
import { useTranslation } from "react-i18next";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { t } = useTranslation();
   const navItems = [
  { href: '#home', label: t("navmenu.home") },
  { href: '#services', label: t("navmenu.server") },
  { href: '#aboutus', label: t("navmenu.about") },
  { href: '#products', label: t("navmenu.project") },
  { href: '#teamSpeaksSection',label: t("navmenu.testimonial") },
  { href: '#contact', label: t("navmenu.contact") },
];

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="relative">
      {/* Top Navigation */}
      <nav className="bg-gradient-to-tr from-[#000000] to-[#0f274a] shadow-sm  sticky top-0 z-40  lg:pt-8" >
        <div className="max-w-6xl mx-auto bg-white px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo & Brand */}
             <div className="">
                <img
                  src="/assets/images/jsys final logo.png"
                  alt="JSYS Technologies Logo"
                  width={120}
                  height={120}
                  className="mr-2"
                />
               
              </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-black hover:text-[#1f3059] font-medium text-sm xl:text-sm transition-colors duration-200 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1f3059] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Language & Contact */}
            <div className="hidden  lg:flex items-center space-x-3">
              <LanguageDropdown />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
          
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-[#1f3059] over:bg-gray-50 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-[#0A1128] shadow-2xl transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <img
            src="/assets/images/jsyslogowhite.png"
            alt="Company Logo"
            width={80}
            height={80}
           
          />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-500 hover:text-[black] hover:bg-gray-50 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="space-y-1">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="block px-4 py-3 text-base font-medium text-white  hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="mt-6 px-4">
            <LanguageDropdown onSelect={closeMenu} />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="mailto:info@jsys-tech.com"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-[#ff7858] rounded-lg hover:bg-[#e66a4a] transition-colors duration-200 shadow-sm"
            >
              <Mail className="h-4 w-4" />
              info@jsys-tech.com
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default Navbar;
