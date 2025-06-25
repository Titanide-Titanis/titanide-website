
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Wrench, ArrowRight } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-20 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Resources & Insights
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white">
            Explore expert insights, practical tools, and real-world compliance solutions to elevate your organization's governance strategy.
          </p>
        </div>
      </header>

      {/* Main Resources Navigation */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* TITANIDE Compliance Corner Section */}
            <Link to="/resources/blog" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#002B45' }}>
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002B45' }}>
                  TITANIDE Compliance Corner™
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Executive-level briefings, bite-sized regulatory trend analyses, and field-tested tactics—curated weekly by Titanide's leadership so you're always one step ahead of auditors.
                </p>
                <div className="flex items-center justify-center text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  <span>Explore Articles</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Client Impact Stories Section */}
            <Link to="/resources/use-cases" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#002B45' }}>
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002B45' }}>
                  Client Impact Stories
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Real-world turnarounds of rural FQHCs and healthcare systems that cut risk, passed HRSA audits, and protected millions in funding through our proven frameworks.
                </p>
                <div className="flex items-center justify-center text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  <span>View Case Studies</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Regulatory Toolkit Section */}
            <Link to="/resources/free-tools" className="group">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#002B45' }}>
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#002B45' }}>
                  Regulatory Toolkit
                </h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  Download ready-to-use checklists, templates, and interactive dashboards that fast-track your governance maturity—free for the Titanide community.
                </p>
                <div className="flex items-center justify-center text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  <span>Access Tools</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Preview */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#003f5c' }}>
            Featured Resources
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Blog Post */}
            <Link to="/resources/blog/future-compliance-leadership" className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <div className="p-6">
                <div className="text-xs font-semibold mb-2" style={{ color: '#00A3AD' }}>BLOG POST</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#002B45' }}>
                  The Future of Compliance Leadership
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Exploring emerging trends in regulatory governance and fractional executive leadership models.
                </p>
              </div>
            </Link>

            {/* Featured Use Case */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-6">
                <div className="text-xs font-semibold mb-2" style={{ color: '#00A3AD' }}>CASE STUDY</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#002B45' }}>
                  Healthcare System Transformation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  How a multi-state healthcare network achieved 100% compliance across all regulatory frameworks.
                </p>
              </div>
            </div>

            {/* Featured Tool */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500"></div>
              <div className="p-6">
                <div className="text-xs font-semibold mb-2" style={{ color: '#00A3AD' }}>FREE TOOL</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#002B45' }}>
                  Compliance Assessment Framework
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A comprehensive template for evaluating your organization's current compliance posture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ backgroundColor: '#002837' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Need Custom Guidance?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white">
            Our resources are just the beginning. Let's discuss how Titanide can provide tailored compliance solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:info@titanideconsulting.com" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Get in Touch
              </button>
            </a>
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

export default Resources;
