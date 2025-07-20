
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Download, Shield, Globe, Users, FileText, Lock, Gavel, AlertTriangle, Building, Zap } from 'lucide-react';

const Legal = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const policyAreas = [
    {
      id: 'corporate-governance',
      title: 'Corporate Governance & Compliance Program',
      icon: Building,
      description: 'Comprehensive governance framework aligned with US HHS-OIG, ISO 37301, and DOJ Guidance',
      policies: [
        'Corporate Compliance Program Charter',
        'Board Governance and Executive Oversight',
        'Code of Conduct and Business Ethics',
        'Whistleblower Policy and Protection Procedures',
        'Anti-Bribery and Corruption Policy',
        'Conflict of Interest Management',
        'Corporate Risk Management Framework'
      ]
    },
    {
      id: 'data-privacy',
      title: 'Information Security & Data Privacy',
      icon: Shield,
      description: 'Multi-jurisdictional privacy compliance including HIPAA, GDPR, CCPA, and ISO/IEC 27001',
      policies: [
        'HIPAA Privacy Rule Compliance Procedures',
        'HIPAA Security Rule Implementation',
        'GDPR Compliance Framework (UK/EU Operations)',
        'CCPA Privacy Rights and Procedures',
        'NIST Cybersecurity Framework Implementation',
        'ISO/IEC 27001 Information Security Management',
        'Cross-Border Data Transfer Protocols',
        'Data Breach Notification Procedures',
        'Employee Privacy and Monitoring Policy'
      ]
    },
    {
      id: 'international-operations',
      title: 'International Operations & Cross-Border Compliance',
      icon: Globe,
      description: 'Transnational operations framework including UK/EU GDPR and global workforce management',
      policies: [
        'UK/EU Regulatory Compliance (Michadrian Healthcare Services)',
        'Standard Contractual Clauses (SCCs) Management',
        'Brexit Regulatory Impact Procedures',
        'Transnational Staff Management Policies',
        'International Client Engagement Protocols',
        'Data Localization Compliance Framework',
        'Cross-Border Vendor Management',
        'Currency and International Financial Controls'
      ]
    },
    {
      id: 'proprietary-technology',
      title: 'Proprietary Technology & AI Governance',
      icon: Zap,
      description: 'Governance of AI-powered tools, interactive platforms, and proprietary technology solutions',
      policies: [
        'KJ Advisor™ AI Tool Governance and Usage Policy',
        'KJ Advisor UK/EU Edition Compliance Framework',
        'Texas Tax Bot™ Operational Procedures',
        'GPT-Powered Advisor Deployment Standards',
        'Interactive Compliance Dashboard Security',
        'AI Ethics and Responsible AI Usage Policy',
        'Proprietary Algorithm Protection Procedures',
        'Client-Facing Tool Quality Assurance',
        'Technology Innovation and Development Guidelines'
      ]
    },
    {
      id: 'professional-services',
      title: 'Professional Services Delivery & Client Management',
      icon: FileText,
      description: 'Comprehensive client engagement, project delivery, and professional service standards',
      policies: [
        'Client Onboarding and Vetting Procedures',
        'Engagement Letter and Contract Standards',
        'Project Execution and Quality Assurance Framework',
        'EHR Remediation & UDS Recovery Suite Procedures',
        'Client Communication and Reporting Standards',
        'Professional Service Delivery Metrics',
        'Client Confidentiality and Non-Disclosure Protocols',
        'Service Level Agreement Management',
        'Client Feedback and Complaint Resolution'
      ]
    },
    {
      id: 'risk-management',
      title: 'Enterprise Risk Management & Vendor Oversight',
      icon: AlertTriangle,
      description: 'Comprehensive risk assessment, vendor management, and business continuity framework',
      policies: [
        'Enterprise Risk Assessment and Management Framework',
        'Vendor Risk Management and Due Diligence Procedures',
        'International Vendor Oversight and Compliance',
        'Third-Party Risk Assessment Protocols',
        'Business Continuity and Disaster Recovery Plan',
        'Incident Response and Crisis Management Procedures',
        'Emergency Preparedness and Response Protocols',
        'Operational Risk Monitoring and Reporting',
        'Insurance and Risk Transfer Strategies'
      ]
    },
    {
      id: 'employment-hr',
      title: 'Employment & Human Resources Management',
      icon: Users,
      description: 'Global workforce policies including DEI, anti-harassment, and professional development',
      policies: [
        'Global Workforce Management Policy',
        'Diversity, Equity, and Inclusion (DEI) Framework',
        'Anti-Harassment and Discrimination Policy',
        'Employee Code of Conduct and Professional Standards',
        'Performance Management and Development Procedures',
        'Training and Awareness Program Framework',
        'Remote Work and Global Team Management',
        'Compensation and Benefits Administration',
        'Employee Privacy and Data Protection'
      ]
    },
    {
      id: 'financial-controls',
      title: 'Financial Controls & Anti-Money Laundering',
      icon: Gavel,
      description: 'Financial oversight, accounting controls, and AML compliance for global operations',
      policies: [
        'Anti-Money Laundering (AML) Compliance Program',
        'Financial Accounting Controls and Audit Procedures',
        'International Financial Reporting Standards',
        'Client Payment Processing and Verification',
        'Expense Management and Approval Procedures',
        'Contract Financial Terms and Management',
        'Tax Compliance and Reporting (Multi-Jurisdictional)',
        'Financial Risk Management and Controls',
        'Treasury Management and Cash Flow Procedures'
      ]
    },
    {
      id: 'technology-communications',
      title: 'Technology Usage & Communications',
      icon: Lock,
      description: 'Approved technology, secure communications, and digital platform governance',
      policies: [
        'Approved Software and Technology Usage Policy',
        'Secure Communication Protocols and Procedures',
        'Zoho Workflow Governance and Data Management',
        'Email Security and Professional Communication Standards',
        'Social Media and Public Communications Guidelines',
        'Marketing Compliance and Brand Management',
        'Digital Asset Protection and Backup Procedures',
        'Remote Access and VPN Usage Policy',
        'Mobile Device and BYOD Security Policy'
      ]
    }
  ];

  const regulatoryFrameworks = [
    { name: 'US HHS-OIG Compliance Program Guidance', status: 'Fully Implemented' },
    { name: 'ISO 37301 Compliance Management Systems', status: 'Certified' },
    { name: 'DOJ Criminal Division Compliance Guidance', status: 'Aligned' },
    { name: 'HIPAA Privacy and Security Rules', status: 'Fully Compliant' },
    { name: 'EU/UK GDPR Requirements', status: 'Fully Compliant' },
    { name: 'California Consumer Privacy Act (CCPA)', status: 'Compliant' },
    { name: 'NIST Cybersecurity Framework', status: 'Implemented' },
    { name: 'ISO/IEC 27001 Information Security', status: 'Aligned' },
    { name: 'SOC 2 Type II Standards', status: 'Under Review' },
    { name: 'FTC Fair Credit Reporting Act', status: 'Compliant' }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Legal Framework & Policy Center
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white mb-6">
            Comprehensive policies and procedures governing Titanide Consulting Group's global operations, regulatory compliance, and professional service delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Policy Manual (PDF)
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-md font-semibold transition-colors">
              Contact Compliance Office
            </button>
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      <section className="py-12 px-4 sm:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#002B45' }}>Executive Summary</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  Titanide Consulting Group operates under a comprehensive legal and compliance framework designed to ensure the highest standards of professional conduct, regulatory compliance, and client protection across all jurisdictions where we operate.
                </p>
                <p className="text-gray-700 mb-4">
                  Our policies govern operations in the United States and internationally, including our UK division Michadrian Healthcare Services, ensuring compliance with US federal and state laws, UK/EU GDPR, and other international regulatory frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#005870' }}>Key Compliance Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    Multi-jurisdictional data privacy and security
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-green-600" />
                    International operations and cross-border compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-600" />
                    AI and proprietary technology governance
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-600" />
                    Professional services and client protection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Areas */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#002B45' }}>
            Comprehensive Policy Framework
          </h2>
          <div className="space-y-6">
            {policyAreas.map((area) => {
              const isExpanded = expandedSections.includes(area.id);
              const IconComponent = area.icon;
              
              return (
                <div key={area.id} className="bg-white rounded-lg shadow-lg border border-gray-200">
                  <button
                    onClick={() => toggleSection(area.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#002B45' }}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold" style={{ color: '#002B45' }}>{area.title}</h3>
                          <p className="text-gray-600 mt-1">{area.description}</p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-3" style={{ color: '#005870' }}>Policy Documents</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {area.policies.map((policy, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                              <span className="text-sm text-gray-700">{policy}</span>
                              <button className="text-xs px-2 py-1 rounded text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                                View
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Matrix */}
      <section className="py-16 px-4 sm:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#002B45' }}>
            Regulatory Compliance Matrix
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead style={{ backgroundColor: '#002B45' }}>
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Regulatory Framework</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Compliance Status</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Last Review</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Next Audit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {regulatoryFrameworks.map((framework, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">{framework.name}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          framework.status === 'Fully Compliant' || framework.status === 'Fully Implemented' || framework.status === 'Certified'
                            ? 'bg-green-100 text-green-800'
                            : framework.status === 'Compliant' || framework.status === 'Implemented' || framework.status === 'Aligned'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {framework.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">Q4 2024</td>
                      <td className="px-6 py-4 text-gray-600">Q2 2025</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* International Operations */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#002B45' }}>
                International Operations
              </h2>
              <p className="text-gray-700 mb-6">
                Titanide Consulting Group operates internationally through strategic partnerships and our UK division, Michadrian Healthcare Services, ensuring full compliance with local regulations while maintaining consistent service quality.
              </p>
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#005870' }}>UK/EU Operations</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  Full GDPR compliance including data subject rights and privacy by design
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="h-5 w-5 text-green-600 mt-0.5" />
                  Standard Contractual Clauses (SCCs) for cross-border data transfers
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-green-600 mt-0.5" />
                  Brexit regulatory impact assessment and compliance procedures
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-green-600 mt-0.5" />
                  Local data protection officer and compliance oversight
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#002B45' }}>
                Proprietary Technology Governance
              </h2>
              <p className="text-gray-700 mb-6">
                Our AI-powered tools and proprietary platforms operate under strict governance frameworks ensuring ethical AI usage, data protection, and regulatory compliance.
              </p>
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#005870' }}>AI-Powered Solutions</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">KJ Advisor™</h4>
                  <p className="text-sm text-gray-600">AI-powered compliance advisory platform with multi-jurisdictional regulatory intelligence</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Texas Tax Bot™</h4>
                  <p className="text-sm text-gray-600">Specialized tax compliance automation tool for Texas-based healthcare entities</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">EHR Remediation Suite</h4>
                  <p className="text-sm text-gray-600">Comprehensive electronic health record optimization and UDS recovery platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Support */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ backgroundColor: '#002837' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Legal & Compliance Support</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white">
            Questions about our policies, compliance procedures, or regulatory framework? Our legal and compliance team is here to assist.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">General Legal Inquiries</h3>
              <p className="text-sm text-gray-300">legal@titanideconsulting.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">Compliance & Privacy</h3>
              <p className="text-sm text-gray-300">compliance@titanideconsulting.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">International Operations</h3>
              <p className="text-sm text-gray-300">international@titanideconsulting.com</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
              Request Policy Documentation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              Schedule Compliance Consultation
            </button>
          </div>
          
          <p className="text-sm text-gray-400 mt-8">
            <em>Policy Framework Last Updated: {new Date().toLocaleDateString()} | Version 3.2 | Next Review: Q2 2025</em>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Legal;
