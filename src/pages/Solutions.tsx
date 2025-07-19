
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, FileText } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-20 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Healthcare Solutions
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white">
            Comprehensive solutions designed to address your specific healthcare challenges and regulatory requirements.
          </p>
        </div>
      </header>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Medical Staffing Solution */}
            <Link to="/solutions/medical-staffing" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#002B45' }}>
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002B45' }}>
                  Medical Staffing
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Comprehensive healthcare personnel solutions through our UK division, Michadrian Healthcare Services.
                </p>
                <div className="flex items-center justify-center text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Compliance Solutions */}
            <Link to="/services/compliance" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#002B45' }}>
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002B45' }}>
                  Compliance Services
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Comprehensive regulatory compliance solutions to ensure your organization meets all healthcare requirements.
                </p>
                <div className="flex items-center justify-center text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  <span>Explore Services</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Risk Management Solutions */}
            <Link to="/services/risk" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#002B45' }}>
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002B45' }}>
                  Risk Management
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Strategic risk assessment and management solutions to protect your organization and ensure operational excellence.
                </p>
                <div className="flex items-center justify-center text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  <span>View Solutions</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ backgroundColor: '#002837' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white">
            Let's discuss how our solutions can address your specific challenges and drive meaningful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Get in Touch
              </button>
            </Link>
            <a href="https://titanide.zohobookings.com/#/3973691000005149002" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Schedule Consultation
                <span className="ml-2">→</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
