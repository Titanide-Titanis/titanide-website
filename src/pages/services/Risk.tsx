
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Risk = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-20 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Risk Management Services
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white">
            Comprehensive risk assessment and management solutions to protect your healthcare organization and ensure operational excellence.
          </p>
        </div>
      </header>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
              Strategic Risk Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our risk management services help healthcare organizations identify, assess, and mitigate risks across all operational areas while maintaining regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Risk Assessment */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Risk Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of organizational risks across clinical, operational, financial, and regulatory domains.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Enterprise risk assessment</li>
                <li>• Clinical risk evaluation</li>
                <li>• Operational risk analysis</li>
                <li>• Financial risk review</li>
              </ul>
            </div>

            {/* Risk Mitigation */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Risk Mitigation
              </h3>
              <p className="text-gray-600 mb-4">
                Development and implementation of targeted strategies to reduce identified risks and their potential impact.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Mitigation strategy development</li>
                <li>• Control implementation</li>
                <li>• Policy and procedure updates</li>
                <li>• Staff training programs</li>
              </ul>
            </div>

            {/* Risk Monitoring */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#002B45' }}>
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>
                Risk Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Ongoing surveillance and reporting systems to track risk indicators and ensure continuous improvement.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Key risk indicator development</li>
                <li>• Dashboard creation</li>
                <li>• Regular risk reporting</li>
                <li>• Performance metrics tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Areas */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002B45' }}>
            Key Risk Areas We Address
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 mt-1" style={{ color: '#00A3AD' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Regulatory Compliance Risks</h3>
                  <p className="text-gray-600">HIPAA, HRSA, Joint Commission, state regulations, and emerging requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 mt-1" style={{ color: '#00A3AD' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Clinical Quality Risks</h3>
                  <p className="text-gray-600">Patient safety, care quality, medical errors, and adverse events.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 mt-1" style={{ color: '#00A3AD' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Operational Risks</h3>
                  <p className="text-gray-600">Staffing, technology, supply chain, and process inefficiencies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 mt-1" style={{ color: '#00A3AD' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Financial Risks</h3>
                  <p className="text-gray-600">Revenue cycle, billing compliance, fraud prevention, and cost management.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 mt-1" style={{ color: '#00A3AD' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Cybersecurity Risks</h3>
                  <p className="text-gray-600">Data breaches, system vulnerabilities, and information security threats.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 mt-1" style={{ color: '#00A3AD' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Strategic Risks</h3>
                  <p className="text-gray-600">Market changes, competitive pressures, and strategic planning uncertainties.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 mt-1" style={{ color: '#00A3AD' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Reputational Risks</h3>
                  <p className="text-gray-600">Public relations, community trust, and stakeholder confidence.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 mt-1" style={{ color: '#00A3AD' }} />
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Environmental Risks</h3>
                  <p className="text-gray-600">Emergency preparedness, business continuity, and disaster recovery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ backgroundColor: '#002837' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Strengthen Your Risk Management?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white">
            Let our experts help you identify, assess, and mitigate risks to protect your organization and improve outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Get Started
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

export default Risk;
