import React, { useState } from 'react';
import { Code, Smartphone, Cloud, Brain, Shield, Zap, Database, Cpu, Globe, Settings, ArrowRight, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: 'Enterprise Web Development',
      subtitle: 'Scalable Digital Platforms',
      description: 'Custom enterprise web applications built with cutting-edge technologies, designed for scale, performance, and security. We create robust, maintainable solutions that grow with your business.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'React, Next.js & Vue.js Expertise',
        'Microservices Architecture',
        'Progressive Web Applications (PWA)',
        'API-First Development Approach',
        'Real-time Data Processing',
        'Advanced Security Implementation',
        'Performance Optimization',
        'SEO & Accessibility Compliance'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'MongoDB'],
      color: 'from-blue-600 to-blue-700',
      pricing: 'Starting from ₹2,50,000',
      timeline: '3-6 months',
      benefits: [
        '99.9% Uptime Guarantee',
        'Mobile-First Responsive Design',
        'Cloud-Native Architecture',
        'Automated Testing & CI/CD'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'Native & Cross-Platform',
      description: 'High-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms. From concept to app store deployment.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Native iOS & Android Development',
        'React Native & Flutter Expertise',
        'Cross-Platform Solutions',
        'App Store Optimization (ASO)',
        'Push Notifications & Analytics',
        'Offline-First Architecture',
        'Biometric Authentication',
        'In-App Purchase Integration'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'Redux', 'SQLite', 'REST APIs'],
      color: 'from-orange-600 to-orange-700',
      pricing: 'Starting from ₹3,00,000',
      timeline: '4-8 months',
      benefits: [
        'App Store Approval Guarantee',
        'Cross-Platform Compatibility',
        'Real-time Synchronization',
        '24/7 Monitoring & Support'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable & Secure',
      description: 'Enterprise-grade cloud solutions that ensure scalability, reliability, and cost-effectiveness for your business operations. Complete cloud transformation services.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'AWS, Azure & GCP Expertise',
        'DevOps & CI/CD Pipelines',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Disaster Recovery Planning',
        'Cost Optimization Strategies',
        'Multi-Cloud Architecture',
        'Infrastructure as Code (IaC)'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Ansible', 'Prometheus'],
      color: 'from-red-600 to-red-700',
      pricing: 'Starting from ₹1,50,000',
      timeline: '2-4 months',
      benefits: [
        '99.99% Availability SLA',
        'Auto-scaling & Load Balancing',
        'Cost Optimization (30-50% savings)',
        'Compliance & Security Standards'
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent Automation',
      description: 'Advanced AI solutions that transform data into actionable insights and automate complex business processes. Custom ML models tailored to your industry.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Computer Vision & NLP',
        'Predictive Analytics',
        'Custom ML Models',
        'Deep Learning Solutions',
        'AI-Powered Automation',
        'Real-time Decision Making',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Pandas', 'CUDA', 'MLflow'],
      color: 'from-blue-600 to-orange-600',
      pricing: 'Starting from ₹4,00,000',
      timeline: '6-12 months',
      benefits: [
        'ROI Improvement (25-40%)',
        'Process Automation',
        'Data-Driven Insights',
        'Competitive Advantage'
      ]
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      subtitle: 'Enterprise Protection',
      description: 'Comprehensive security frameworks that protect your digital assets and ensure compliance with industry standards. Proactive threat detection and response.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Compliance Management',
        'Identity & Access Management',
        'Threat Detection & Response',
        'Security Training Programs',
        'Incident Response Planning',
        'Zero Trust Architecture'
      ],
      technologies: ['OWASP', 'OAuth', 'JWT', 'SSL/TLS', 'Firewall', 'SIEM', 'Splunk', 'Nessus'],
      color: 'from-red-600 to-orange-600',
      pricing: 'Starting from ₹2,00,000',
      timeline: '3-6 months',
      benefits: [
        '99.9% Threat Detection Rate',
        'Compliance Certification',
        'Risk Mitigation',
        '24/7 Security Monitoring'
      ]
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      subtitle: 'Business Evolution',
      description: 'End-to-end digital transformation strategies that modernize operations and accelerate business growth. Complete business process re-engineering.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Digital Strategy Consulting',
        'Legacy System Modernization',
        'Process Automation',
        'Change Management',
        'Technology Roadmapping',
        'ROI Optimization',
        'Employee Training Programs',
        'Performance Analytics'
      ],
      technologies: ['Agile', 'Scrum', 'Lean', 'Design Thinking', 'Analytics', 'CRM', 'ERP', 'BPM'],
      color: 'from-orange-600 to-blue-600',
      pricing: 'Starting from ₹5,00,000',
      timeline: '6-18 months',
      benefits: [
        'Operational Efficiency (40-60%)',
        'Cost Reduction (20-35%)',
        'Revenue Growth (15-25%)',
        'Market Competitiveness'
      ]
    }
  ];

  const additionalServices = [
    { 
      icon: Database, 
      title: 'Data Engineering', 
      description: 'Big data processing, ETL pipelines, and analytics infrastructure',
      pricing: '₹1,50,000+',
      timeline: '2-4 months'
    },
    { 
      icon: Cpu, 
      title: 'IoT Solutions', 
      description: 'Connected device ecosystems, edge computing, and sensor networks',
      pricing: '₹3,00,000+',
      timeline: '4-8 months'
    },
    { 
      icon: Globe, 
      title: 'Blockchain Development', 
      description: 'DApps, smart contracts, and cryptocurrency solutions',
      pricing: '₹4,00,000+',
      timeline: '6-10 months'
    },
    { 
      icon: Settings, 
      title: 'API Development', 
      description: 'RESTful APIs, GraphQL, and microservices architecture',
      pricing: '₹1,00,000+',
      timeline: '1-3 months'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery & Planning', description: 'Requirements analysis and project roadmap' },
    { step: '02', title: 'Design & Architecture', description: 'UI/UX design and system architecture' },
    { step: '03', title: 'Development & Testing', description: 'Agile development with continuous testing' },
    { step: '04', title: 'Deployment & Support', description: 'Go-live support and maintenance' }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-800 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-semibold text-xs sm:text-sm">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            Comprehensive Technology
            <span className="block bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light">
              From concept to deployment, we provide end-to-end technology services 
              that drive innovation and deliver measurable business results.
            </p>
          </div>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Service List */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32 space-y-2 sm:space-y-3">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 ${
                      activeService === index
                        ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-900'
                    }`}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                        activeService === index
                          ? 'bg-white/20'
                          : `bg-gradient-to-br ${service.color}`
                      }`}>
                        <ServiceIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          activeService === index ? 'text-white' : 'text-white'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base truncate">{service.title}</h3>
                        <p className={`text-xs ${
                          activeService === index ? 'text-slate-300' : 'text-slate-500'
                        }`}>
                          {service.subtitle}
                        </p>
                        {activeService === index && (
                          <div className="mt-1 space-y-0.5">
                            <p className="text-blue-400 font-semibold text-xs">{service.pricing}</p>
                            <p className="text-slate-400 text-xs">{service.timeline}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                <div>
                  {(() => {
                    const ActiveServiceIcon = services[activeService].icon;
                    return (
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${services[activeService].color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                        <ActiveServiceIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    );
                  })()}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                    {services[activeService].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                    {services[activeService].description}
                  </p>

                  {/* Pricing & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="bg-blue-50 p-2 sm:p-3 rounded-lg">
                      <p className="text-blue-600 font-semibold text-xs mb-0.5">Starting Price</p>
                      <p className="text-slate-900 font-bold text-sm sm:text-base">{services[activeService].pricing}</p>
                    </div>
                    <div className="bg-orange-50 p-2 sm:p-3 rounded-lg">
                      <p className="text-orange-600 font-semibold text-xs mb-0.5">Timeline</p>
                      <p className="text-slate-900 font-bold text-sm sm:text-base">{services[activeService].timeline}</p>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 sm:mb-3">Key Benefits</h4>
                    <div className="space-y-1.5 sm:space-y-2">
                      {services[activeService].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                          <span className="text-slate-700 text-xs sm:text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 sm:mb-3">Features Included</h4>
                    {services[activeService].features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r ${services[activeService].color} rounded-full flex-shrink-0`}></div>
                        <span className="text-slate-700 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                    {services[activeService].technologies.slice(0, 6).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${services[activeService].color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>

                <div className="relative order-first lg:order-last">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-48 sm:h-60 object-cover rounded-lg sm:rounded-xl shadow-2xl"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${services[activeService].color} opacity-20 rounded-lg sm:rounded-xl`}></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl border border-slate-100">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div>
                        <p className="text-slate-900 font-bold text-xs sm:text-sm">4.9/5</p>
                        <p className="text-slate-500 text-xs">Client Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Our Development Process</h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-white font-bold text-sm sm:text-base">{process.step}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{process.title}</h4>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">Additional Expertise</h3>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
              Specialized services to complement your core technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => {
              const AdditionalServiceIcon = service.icon;
              return (
                <div key={index} className="text-center group bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <AdditionalServiceIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-slate-300 leading-relaxed mb-2 sm:mb-3 text-xs sm:text-sm">{service.description}</p>
                  <div className="space-y-1">
                    <p className="text-blue-400 font-semibold text-xs">{service.pricing}</p>
                    <p className="text-slate-400 text-xs">{service.timeline}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-100">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Ready to Get Started?</h3>
            <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-slate-900/25 transition-all duration-300 transform hover:scale-105"
              >
                Discuss Your Project
              </a>
              <a
                href="tel:+918121253906"
                className="bg-white text-slate-900 border-2 border-slate-200 px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Call: +91 8121253906
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;