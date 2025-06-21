import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award, MessageSquare, Calendar, Globe, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', company: '', budget: '', timeline: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 8121253906',
      subtitle: 'Available 24/7 for urgent projects',
      color: 'from-blue-500 to-blue-600',
      action: 'tel:+918121253906'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'projects@asaninnovators.com',
      subtitle: 'Response within 2 hours',
      color: 'from-orange-500 to-orange-600',
      action: 'mailto:projects@asaninnovators.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Ground Floor NO. 33, NMIT College Road',
      subtitle: 'Yelahanka, Jayamuni Nagar, Bengaluru, Karnataka 560064',
      color: 'from-red-500 to-red-600',
      action: 'https://maps.google.com/?q=NMIT+College+Road+Yelahanka+Bengaluru'
    }
  ];

  const whyChooseUs = [
    { icon: Clock, title: 'Rapid Response', description: 'Project kickoff within 48 hours' },
    { icon: Users, title: 'Dedicated Team', description: 'Senior engineers assigned to your project' },
    { icon: Award, title: 'Proven Track Record', description: '500+ successful enterprise projects' },
    { icon: MessageSquare, title: 'Transparent Communication', description: 'Daily updates and progress reports' },
    { icon: Shield, title: 'Quality Assurance', description: '99.9% bug-free delivery guarantee' },
    { icon: Globe, title: 'Global Reach', description: 'Serving clients across 50+ countries' }
  ];

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5 - 10 Lakhs',
    '₹10 - 25 Lakhs',
    '₹25 - 50 Lakhs',
    '₹50 Lakhs+',
    'Let\'s discuss'
  ];

  const timelines = [
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Ongoing partnership'
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Infrastructure',
    'AI & Machine Learning',
    'Cybersecurity',
    'Digital Transformation',
    'E-commerce Solutions',
    'Custom Software Development'
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-semibold text-xs sm:text-sm">Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-light">
              Ready to transform your business with cutting-edge technology? 
              Our team of experts is here to turn your vision into reality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Connect With Us</h3>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  target={item.action.startsWith('http') ? '_blank' : '_self'}
                  rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group block"
                >
                  <div className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-0.5">{item.title}</h4>
                      <p className="text-white font-medium mb-0.5 text-xs sm:text-sm break-words">{item.content}</p>
                      <p className="text-slate-400 text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-500/20 mb-4 sm:mb-6">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 flex items-center">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Office Hours
              </h4>
              <div className="space-y-1.5 sm:space-y-2">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white font-medium text-xs sm:text-sm">{schedule.day}</span>
                    <span className="text-blue-400 font-semibold text-xs sm:text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-orange-500/20">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Why Choose ASAN Innovators?</h4>
              <div className="space-y-2 sm:space-y-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="text-white font-semibold mb-0.5 text-xs sm:text-sm">{item.title}</h5>
                      <p className="text-slate-300 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Start Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                  >
                    <option value="" className="bg-slate-800">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-slate-800">{service}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                    >
                      <option value="" className="bg-slate-800">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-slate-800">{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                    >
                      <option value="" className="bg-slate-800">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline} className="bg-slate-800">{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-white mb-1.5 sm:mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm"
                    placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Project Details</span>
                    </>
                  )}
                </button>

                <p className="text-slate-400 text-xs text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll respond within 2 hours during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-xs sm:text-sm">Prefer to talk directly?</p>
              <p className="text-slate-300 text-xs">Schedule a free 30-minute consultation call</p>
            </div>
            <a
              href="tel:+918121253906"
              className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;