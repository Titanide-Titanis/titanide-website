
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileCheck, Users, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';

const Compliance = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-20 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Compliance Services
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white">
            Comprehensive regulatory compliance solutions to ensure your healthcare organization meets all requirements and maintains the highest standards of care.
          </p>
        </div>
      </header>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
              Complete Compliance Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial assessments to ongoing monitoring, we provide end-to-end compliance support for healthcare organizations of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Compliance Assessment */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Compliance Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of your current compliance posture across all regulatory frameworks.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• HIPAA Privacy & Security</li>
                <li>• HRSA Program Requirements</li>
                <li>• Joint Commission Standards</li>
                <li>• State-specific regulations</li>
              </ul>
            </div>

            {/* Policy Development */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Policy Development
              </h3>
              <p className="text-gray-600 mb-4">
                Creation and updating of comprehensive policies and procedures to meet regulatory requirements.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Policy framework design</li>
                <li>• Regulatory mapping</li>
                <li>• Implementation guidance</li>
                <li>• Version control systems</li>
              </ul>
            </div>

            {/* Training & Education */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Training & Education
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive staff training programs to ensure understanding and adherence to compliance requirements.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Role-based training</li>
                <li>• Interactive workshops</li>
                <li>• Competency assessments</li>
                <li>• Ongoing education</li>
              </ul>
            </div>

            {/* Audit Preparation */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Audit Preparation
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic preparation for regulatory audits and surveys to ensure successful outcomes.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Mock audits</li>
                <li>• Documentation review</li>
                <li>• Staff interview preparation</li>
                <li>• Corrective action planning</li>
              </ul>
            </div>

            {/* Incident Response */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Incident Response
              </h3>
              <p className="text-gray-600 mb-4">
                Rapid response services for compliance breaches, violations, and regulatory investigations.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Immediate assessment</li>
                <li>• Remediation planning</li>
                <li>• Regulatory reporting</li>
                <li>• Follow-up monitoring</li>
              </ul>
            </div>

            {/* Ongoing Monitoring */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Ongoing Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Continuous compliance monitoring and reporting to maintain regulatory adherence.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Performance dashboards</li>
                <li>• Regular assessments</li>
                <li>• Trend analysis</li>
                <li>• Proactive updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Frameworks */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002B45' }}>
            Regulatory Frameworks We Cover
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#002B45' }}>HIPAA</h3>
              <p className="text-gray-600 text-sm">Privacy Rule, Security Rule, Breach Notification, and Business Associate Agreements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#002B45' }}>HRSA Requirements</h3>
              <p className="text-gray-600 text-sm">FQHC program requirements, UDS reporting, and compliance monitoring</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#002B45' }}>Joint Commission</h3>
              <p className="text-gray-600 text-sm">Accreditation standards, National Patient Safety Goals, and performance improvement</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#002B45' }}>Stark Law</h3>
              <p className="text-gray-600 text-sm">Physician self-referral regulations and compliance requirements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#002B45' }}>Anti-Kickback Statute</h3>
              <p className="text-gray-600 text-sm">Federal fraud and abuse prevention requirements</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#002B45' }}>State Regulations</h3>
              <p className="text-gray-600 text-sm">State-specific licensing, reporting, and operational requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ backgroundColor: '#002837' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Achieve Complete Compliance?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white">
            Let our compliance experts help you navigate complex regulations and build a sustainable compliance program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/assessment" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Start Assessment
              </button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Contact Us
                <span className="ml-2">→</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
