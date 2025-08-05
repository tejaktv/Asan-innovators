import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight, Award, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Applications', href: '#services' },
    { name: 'Cloud Infrastructure', href: '#services' },
    { name: 'AI & Machine Learning', href: '#services' },
    { name: 'Cybersecurity', href: '#services' },
    { name: 'Digital Transformation', href: '#services' }
  ];

  const company = [
    { name: 'Our Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Partners', href: '#partners' }
  ];

  const resources = [
    { name: 'Documentation', href: '#docs' },
    { name: 'API Reference', href: '#api' },
    { name: 'Support Center', href: '#support' },
    { name: 'Community', href: '#community' },
    { name: 'Webinars', href: '#webinars' },
    { name: 'White Papers', href: '#whitepapers' }
  ];

  const industries = [
    { name: 'Healthcare', href: '#healthcare' },
    { name: 'Finance & Banking', href: '#finance' },
    { name: 'E-commerce', href: '#ecommerce' },
    { name: 'Education', href: '#education' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Real Estate', href: '#realestate' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/asaninnovators', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://linkedin.com/company/asaninnovators', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com/asaninnovators', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com/asaninnovators', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Facebook, href: 'https://facebook.com/asaninnovators', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Youtube, href: 'https://youtube.com/asaninnovators', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  const certifications = [
    'ISO 27001 Certified',
    'AWS Partner',
    'Google Cloud Partner',
    'Microsoft Partner',
    'CMMI Level 3'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="relative">
                  <img
                    src="/asan_logo_highres-removebg-preview.png"
                    alt="ASAN Innovators"
                    className="h-12 w-auto sm:h-16 object-contain"
                  />
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base max-w-md">
                Transforming businesses through innovative technology solutions. 
                We're your trusted partner in digital transformation and growth.
              </p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-300 font-medium text-xs sm:text-sm">Ground Floor NO. 33, NMIT College Road</p>
                    <p className="text-slate-400 text-xs">Yelahanka, Jayamuni Nagar, Bengaluru, Karnataka 560064</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                  <a href="tel:+918121253906" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm">
                    +91 8121253906
                  </a>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                  <a href="mailto:projects@asaninnovators.com" className="text-slate-300 hover:text-white transition-colors text-xs sm:text-sm break-all">
                    projects@asaninnovators.com
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group ${social.color}`}
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>

              {/* Certifications */}
              <div className="bg-slate-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-bold mb-2 sm:mb-3 text-blue-400">Certifications & Partnerships</h4>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {certifications.map((cert, index) => (
                    <span key={index} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Stay Updated</h4>
              <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                Get the latest insights on technology trends, industry best practices, 
                and exclusive content delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
                />
                <button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-1.5 text-xs sm:text-sm">
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-4 sm:mb-6">
                <Award className="w-3 h-3" />
                <span>Join 10,000+ tech leaders who trust our insights</span>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-500/20">
                <h5 className="text-sm sm:text-base font-bold text-white mb-2 sm:mb-3">Need Immediate Assistance?</h5>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="tel:+918121253906"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-center transition-colors text-xs sm:text-sm"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/918121253906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-center transition-colors text-xs sm:text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <img
                  src="/17052955243640.png"
                  alt="Government of India Startup India Logo"
                  className="h-20 object-contain"
                />
                <img
                  src="https://w7.pngwing.com/pngs/663/496/png-transparent-government-of-india-ministry-of-micro-small-and-medium-enterprises-small-business-industry-india-text-logo-monochrome-thumbnail.png"
                  alt="MSME Logo"
                  className="h-20 object-contain"
                />
                <img
                  src="https://grmcp.com/wp-content/uploads/2023/03/GRM-Custom-Products-LP-is-ISO-9001-2015-Certified-Quality-Management-Company.png"
                  alt="GRM Custom Products ISO 9001 Logo"
                  className="h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-slate-800">
            {/* Services */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-blue-400">Services</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group text-xs sm:text-sm"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-blue-400">Company</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group text-xs sm:text-sm"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-blue-400">Resources</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group text-xs sm:text-sm"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-blue-400">Industries</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {industries.map((industry) => (
                  <li key={industry.name}>
                    <a
                      href={industry.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group text-xs sm:text-sm"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 lg:space-x-4">
              <p className="text-slate-400 text-xs text-center sm:text-left">
                © 2024 ASAN Innovators. All rights reserved.
              </p>
              <div className="flex items-center space-x-1.5">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-slate-400 text-xs">Trusted by 500+ companies worldwide</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4">
              <a href="#privacy" className="text-slate-400 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-white text-xs transition-colors">
                Cookie Policy
              </a>
              <a href="#security" className="text-slate-400 hover:text-white text-xs transition-colors">
                Security
              </a>
              <a href="#sitemap" className="text-slate-400 hover:text-white text-xs transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;