import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Clock, DollarSign, CheckCircle, Mail, MessageCircle, Sparkles, Code, Bot, Calendar } from 'lucide-react';

export default function AutomationLanding() {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      name: "Pause & View",
      url: "https://pauseandview.com",
      description: "Streamlined content management and viewing platform",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: "Interview Prep 360",
      url: "http://www.interviewprep360.com",
      description: "Comprehensive interview preparation automation",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "TaskHarbor",
      url: "https://taskharbor.co",
      description: "Intelligent task management and workflow optimization",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: "AI Personal Assistant",
      url: "#",
      description: "Email management, scheduling, and contact automation",
      icon: <Bot className="w-6 h-6" />
    }
  ];

  const benefits = [
    { icon: <Clock className="w-8 h-8" />, title: "Save Time", description: "Automate repetitive tasks and focus on what matters most" },
    { icon: <DollarSign className="w-8 h-8" />, title: "Cut Costs", description: "Reduce operational expenses with intelligent automation" },
    { icon: <Zap className="w-8 h-8" />, title: "Boost Efficiency", description: "Streamline workflows and maximize productivity" }
  ];

  const handleContact = (type) => {
    if (type === 'whatsapp') {
      window.open('https://wa.me/6598346866', '_blank');
    } else {
      window.location.href = 'mailto:Leonard.koo.automateworkflows@gmail.com';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-purple-200 text-sm">
              <Zap className="w-4 h-4" />
              <span>Automation Solutions for Modern Businesses</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Transform Your Business
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                With Smart Automation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We help small to medium businesses discover and implement workflow automation solutions that save time, reduce costs, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => handleContact('whatsapp')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleContact('email')}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="section-benefits" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-all duration-1000 ${isVisible['section-benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold text-white text-center mb-16">Why Automate Your Workflows?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="section-portfolio" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-all duration-1000 ${isVisible['section-portfolio'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Success Stories</h2>
          <p className="text-xl text-gray-300">Real solutions we've built for real businesses</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 transition-opacity duration-500 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="relative z-10">
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div id="section-services" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-all duration-1000 ${isVisible['section-services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl border border-white/20 p-12">
          <h2 className="text-4xl font-bold text-white text-center mb-8">What We Do</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Discovery & Analysis</h3>
                  <p className="text-gray-300">We identify automation opportunities in your workflows</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
                  <p className="text-gray-300">Tailored automation strategies for your specific needs</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
                  <p className="text-gray-300">Seamless integration with your existing systems</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
                  <p className="text-gray-300">Continuous optimization and assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="section-cta" className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 transition-all duration-1000 ${isVisible['section-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's discuss how automation can help you save time, reduce costs, and scale your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => handleContact('whatsapp')}
                className="group px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start WhatsApp Chat
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleContact('email')}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-lg border-2 border-white hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send an Email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Workflow Automation Solutions</h3>
              <p className="text-gray-400">Empowering SMBs through intelligent automation</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/6598346866"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                +65 9834 6866
              </a>
              <a
                href="mailto:Leonard.koo.automateworkflows@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                Leonard.koo.automateworkflows@gmail.com
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2025 Workflow Automation Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}