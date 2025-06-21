import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Award, Users, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'FinTech Trading Platform',
      category: 'Financial Technology',
      client: 'Global Investment Firm',
      description: 'Real-time trading platform processing $2B+ daily transactions with advanced analytics and risk management.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'WebSocket', 'Redis', 'PostgreSQL', 'AWS'],
      metrics: [
        { label: 'Daily Volume', value: '$2.1B+' },
        { label: 'Response Time', value: '<50ms' },
        { label: 'Uptime', value: '99.99%' }
      ],
      featured: true,
      year: '2024'
    },
    {
      title: 'Healthcare AI Diagnostics',
      category: 'Healthcare Technology',
      client: 'Medical Research Institute',
      description: 'AI-powered diagnostic platform that analyzes medical imaging with 95% accuracy, reducing diagnosis time by 60%.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Docker', 'GCP'],
      metrics: [
        { label: 'Accuracy Rate', value: '95.2%' },
        { label: 'Time Saved', value: '60%' },
        { label: 'Patients Served', value: '50K+' }
      ],
      featured: true,
      year: '2024'
    },
    {
      title: 'Smart City IoT Network',
      category: 'IoT & Smart Systems',
      client: 'Metropolitan Government',
      description: 'Comprehensive IoT infrastructure managing traffic, utilities, and public services for a city of 2M+ residents.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['IoT', 'Azure', 'React', 'Node.js', 'MongoDB', 'Edge Computing'],
      metrics: [
        { label: 'Devices Connected', value: '100K+' },
        { label: 'Energy Saved', value: '30%' },
        { label: 'Citizens Served', value: '2M+' }
      ],
      featured: false,
      year: '2023'
    },
    {
      title: 'E-Commerce Marketplace',
      category: 'E-Commerce',
      client: 'Retail Conglomerate',
      description: 'Multi-vendor marketplace platform handling 1M+ daily transactions with AI-powered recommendations.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Microservices', 'Kubernetes', 'Stripe', 'Elasticsearch', 'AWS'],
      metrics: [
        { label: 'Daily Orders', value: '1M+' },
        { label: 'Conversion Rate', value: '+45%' },
        { label: 'Vendors', value: '10K+' }
      ],
      featured: false,
      year: '2023'
    },
    {
      title: 'Blockchain Supply Chain',
      category: 'Blockchain',
      client: 'Manufacturing Giant',
      description: 'Transparent supply chain tracking system using blockchain technology for end-to-end product traceability.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'IPFS', 'Node.js'],
      metrics: [
        { label: 'Products Tracked', value: '5M+' },
        { label: 'Transparency', value: '100%' },
        { label: 'Cost Reduction', value: '25%' }
      ],
      featured: false,
      year: '2023'
    },
    {
      title: 'EdTech Learning Platform',
      category: 'Education Technology',
      client: 'University Consortium',
      description: 'Adaptive learning platform serving 500K+ students with personalized curriculum and real-time progress tracking.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'WebRTC', 'AWS'],
      metrics: [
        { label: 'Active Students', value: '500K+' },
        { label: 'Course Completion', value: '+80%' },
        { label: 'Universities', value: '150+' }
      ],
      featured: false,
      year: '2022'
    }
  ];

  const categories = ['All', 'Financial Technology', 'Healthcare Technology', 'IoT & Smart Systems', 'E-Commerce', 'Blockchain', 'Education Technology'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const stats = [
    { icon: Award, number: '500+', label: 'Projects Delivered' },
    { icon: Users, number: '150+', label: 'Enterprise Clients' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate' }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <Award className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-semibold text-xs sm:text-sm">Our Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            Success Stories &
            <span className="block bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
              Discover how we've helped industry leaders transform their businesses 
              through innovative technology solutions that deliver measurable results.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600 font-semibold text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:shadow-lg border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                project.featured ? 'border-2 border-blue-200' : ''
              }`}
            >
              <div className={`grid grid-cols-1 ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-0`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                      {project.year}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex space-x-1.5 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`p-4 sm:p-6 lg:p-8 ${project.featured ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3 gap-1">
                    <span className="text-blue-600 font-semibold text-xs uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-slate-500 text-xs">
                      {project.client}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-0.5">{metric.value}</div>
                        <div className="text-slate-500 text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center space-x-1.5 text-blue-600 font-semibold hover:text-blue-700 transition-colors group text-xs sm:text-sm">
                    <span>View Case Study</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;