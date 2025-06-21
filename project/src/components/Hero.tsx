import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "ASAN Innovators transformed our entire digital infrastructure. Their expertise is unmatched.",
      author: "Rajesh Kumar",
      position: "CTO, TechCorp India"
    },
    {
      text: "Outstanding results! They delivered our project ahead of schedule with exceptional quality.",
      author: "Priya Sharma",
      position: "CEO, StartupHub"
    },
    {
      text: "The most professional and skilled development team we've ever worked with.",
      author: "Michael Chen",
      position: "Director, Global Solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-slate-800 to-orange-900 pt-16 sm:pt-20 lg:pt-24">
      {/* Premium background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fill-opacity%3D%220.02%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-orange-400 to-red-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              Expert IT Solutions
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
              We architect enterprise-grade solutions that drive innovation, accelerate growth, 
              and deliver measurable business outcomes through cutting-edge technology.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              { icon: CheckCircle, text: '24/7 Support' },
              { icon: CheckCircle, text: 'On-Time Delivery' },
              { icon: CheckCircle, text: 'Scalable Solutions' },
              { icon: CheckCircle, text: 'Expert Team' }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-1.5 sm:space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <span className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 max-w-lg sm:max-w-none mx-auto">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 border border-white/20 max-w-4xl mx-auto">
            <div className="text-center">
              <blockquote className="text-sm sm:text-lg text-white mb-3 sm:mb-4 italic leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-white/90">
                <div className="font-semibold text-sm sm:text-base">{testimonials[currentTestimonial].author}</div>
                <div className="text-xs sm:text-sm text-white/70">{testimonials[currentTestimonial].position}</div>
              </div>
              <div className="flex justify-center space-x-2 mt-3 sm:mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { icon: TrendingUp, number: '500+', label: 'Projects', sublabel: 'Delivered', color: 'from-blue-500 to-blue-600' },
              { icon: Users, number: '150+', label: 'Engineers', sublabel: 'Expert Team', color: 'from-orange-500 to-orange-600' },
              { icon: Award, number: '98%', label: 'Satisfaction', sublabel: 'Client Rating', color: 'from-red-500 to-red-600' },
              { icon: CheckCircle, number: '24/7', label: 'Support', sublabel: 'Global Service', color: 'from-blue-600 to-orange-500' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-slate-300 font-semibold text-xs sm:text-sm lg:text-base">{stat.label}</div>
                <div className="text-slate-400 text-xs hidden sm:block">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/60 text-xs font-medium hidden sm:block">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;