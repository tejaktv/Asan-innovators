import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
    { name: 'AI & ML', href: '#services' },
    { name: 'Cybersecurity', href: '#services' },
    { name: 'Digital Transformation', href: '#services' }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '#portfolio' },
    { name: 'Startup Solutions', href: '#portfolio' },
    { name: 'E-commerce Platforms', href: '#portfolio' },
    { name: 'Healthcare Systems', href: '#portfolio' },
    { name: 'FinTech Applications', href: '#portfolio' },
    { name: 'IoT Solutions', href: '#portfolio' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-2xl shadow-slate-900/10 border-b border-slate-200/50' 
        : 'bg-white shadow-lg border-b border-slate-200/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <img
                src="/asan_logo_highres-removebg-preview.png"
                alt="ASAN Innovators"
                className="h-8 w-auto sm:h-10 lg:h-12 xl:h-14 object-contain transition-all duration-300"
              />
            </div>
            {/* Company name - visible on all screen sizes */}
            <div>
              <h1 className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight">
                <span className="text-blue-900">ASAN</span>
                <span className="text-yellow-500 ml-1">Innovators</span>
              </h1>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a
              href="#home"
              className="relative font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 group text-slate-700 hover:text-slate-900"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 text-slate-700 hover:text-slate-900">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-56 sm:w-64 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 py-3 sm:py-4 z-50">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      className="block px-4 sm:px-6 py-2 sm:py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors font-medium text-sm sm:text-base"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 text-slate-700 hover:text-slate-900">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-56 sm:w-64 bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-slate-200 py-3 sm:py-4 z-50">
                  {solutions.map((solution, index) => (
                    <a
                      key={index}
                      href={solution.href}
                      className="block px-4 sm:px-6 py-2 sm:py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors font-medium text-sm sm:text-base"
                    >
                      {solution.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#portfolio"
              className="relative font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 group text-slate-700 hover:text-slate-900"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#contact"
              className="relative font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 group text-slate-700 hover:text-slate-900"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r from-blue-900 to-yellow-500 text-white hover:shadow-xl hover:shadow-blue-900/25"
            >
              Start Project
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-slate-900" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl mt-2 py-3 border border-slate-200/50">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Services', href: '#services' },
              { name: 'Solutions', href: '#portfolio' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors font-semibold text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2 border-t border-slate-200 mt-2">
              <a
                href="#contact"
                className="block w-full px-4 py-2 bg-gradient-to-r from-blue-900 to-yellow-500 text-white rounded-lg font-semibold text-sm text-center hover:shadow-xl hover:shadow-blue-900/25 transition-all duration-300"
              >
                Start Project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;