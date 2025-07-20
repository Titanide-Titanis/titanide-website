
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
      content: {
        statement: 'Titanide Consulting Group maintains a comprehensive corporate governance and compliance program designed to prevent, detect, and respond to conduct that does not conform to federal and state law requirements and the Company\'s ethical and business policies.',
        procedures: [
          'Establish and maintain a Compliance Committee with direct reporting to the Board of Directors',
          'Conduct annual compliance risk assessments across all business units and jurisdictions',
          'Implement written policies and procedures addressing all areas of compliance risk',
          'Provide mandatory compliance training for all employees, contractors, and business partners',
          'Maintain confidential reporting mechanisms including anonymous hotline services',
          'Conduct prompt and thorough investigations of all compliance concerns',
          'Implement appropriate disciplinary measures for compliance violations',
          'Monitor and audit compliance program effectiveness through regular reviews'
        ],
        requirements: [
          'US HHS-OIG Compliance Program Guidance implementation',
          'ISO 37301 Compliance Management Systems certification',
          'DOJ Criminal Division Compliance Guidance alignment',
          'Annual compliance certification by all personnel',
          'Quarterly compliance reporting to executive leadership'
        ]
      }
    },
    {
      id: 'data-privacy',
      title: 'Information Security & Data Privacy',
      icon: Shield,
      description: 'Multi-jurisdictional privacy compliance including HIPAA, GDPR, CCPA, and ISO/IEC 27001',
      content: {
        statement: 'Titanide Consulting Group is committed to protecting the privacy and security of all personal information, protected health information, and confidential business data through comprehensive security controls and privacy protection measures.',
        procedures: [
          'Implement multi-layered security controls including encryption, access controls, and monitoring',
          'Conduct privacy impact assessments for all new projects and data processing activities',
          'Maintain data inventories and processing records for GDPR Article 30 compliance',
          'Establish data retention and deletion schedules aligned with legal requirements',
          'Implement breach notification procedures within required timeframes (72 hours GDPR, 60 days HIPAA)',
          'Conduct regular security awareness training and phishing simulation exercises',
          'Perform quarterly vulnerability assessments and annual penetration testing',
          'Maintain incident response procedures and forensic capabilities'
        ],
        requirements: [
          'HIPAA Privacy and Security Rules full compliance',
          'GDPR compliance for EU/UK operations including data subject rights',
          'CCPA compliance for California residents including opt-out rights',
          'NIST Cybersecurity Framework implementation',
          'ISO/IEC 27001 information security management alignment',
          'Cross-border data transfer safeguards (Standard Contractual Clauses)'
        ]
      }
    },
    {
      id: 'international-operations',
      title: 'International Operations & Cross-Border Compliance',
      icon: Globe,
      description: 'Transnational operations framework including UK/EU GDPR and global workforce management',
      content: {
        statement: 'Titanide Consulting Group operates internationally through strategic partnerships and our UK division, ensuring full compliance with local regulations while maintaining consistent service quality across all jurisdictions.',
        procedures: [
          'Maintain local entity compliance through Michadrian Healthcare Services (UK)',
          'Implement Standard Contractual Clauses for all EU/UK data transfers',
          'Conduct country-specific regulatory assessments before market entry',
          'Establish local data protection officer appointments where required',
          'Maintain Brexit regulatory impact monitoring and adaptation procedures',
          'Implement currency controls and international financial reporting procedures',
          'Establish cross-border vendor due diligence and management protocols',
          'Maintain cultural competency and local law training for international staff'
        ],
        requirements: [
          'UK/EU GDPR compliance including data localization requirements',
          'Brexit regulatory framework adaptation and monitoring',
          'Multi-jurisdictional employment law compliance',
          'International anti-money laundering (AML) requirements',
          'Cross-border tax compliance and transfer pricing documentation'
        ]
      }
    },
    {
      id: 'proprietary-technology',
      title: 'Proprietary Technology & AI Governance',
      icon: Zap,
      description: 'Governance of AI-powered tools, interactive platforms, and proprietary technology solutions',
      content: {
        statement: 'Titanide Consulting Group\'s proprietary technology platforms, including AI-powered tools, operate under strict governance frameworks ensuring ethical AI usage, data protection, regulatory compliance, and quality assurance.',
        procedures: [
          'Implement AI ethics review board for all machine learning deployments',
          'Conduct algorithmic bias testing and fairness assessments quarterly',
          'Maintain data quality and model performance monitoring dashboards',
          'Establish AI model versioning, documentation, and audit trail procedures',
          'Implement client consent mechanisms for AI-powered advisory services',
          'Conduct regular security assessments of all proprietary platforms',
          'Maintain disaster recovery and business continuity for critical systems',
          'Establish intellectual property protection and trade secret procedures'
        ],
        requirements: [
          'KJ Advisor™ platform compliance with healthcare regulatory requirements',
          'Texas Tax Bot™ accuracy validation and audit trail maintenance',
          'GPT-powered advisor deployment security and privacy controls',
          'Interactive dashboard data encryption and access control implementation',
          'AI model explainability and transparency documentation'
        ]
      }
    },
    {
      id: 'professional-services',
      title: 'Professional Services Delivery & Client Management',
      icon: FileText,
      description: 'Comprehensive client engagement, project delivery, and professional service standards',
      content: {
        statement: 'Titanide Consulting Group delivers professional services through standardized engagement processes, quality assurance frameworks, and client protection protocols that ensure consistent, high-quality service delivery.',
        procedures: [
          'Conduct comprehensive client onboarding including KYC and risk assessment',
          'Execute detailed engagement letters defining scope, deliverables, and timelines',
          'Implement project management methodologies with regular milestone reviews',
          'Maintain client communication protocols including regular status updates',
          'Conduct quality assurance reviews at each project phase',
          'Implement client feedback collection and service improvement processes',
          'Maintain confidentiality and data protection throughout engagements',
          'Establish clear escalation procedures for project issues and disputes'
        ],
        requirements: [
          'Professional liability insurance coverage for all service lines',
          'Client confidentiality and non-disclosure agreement execution',
          'Service level agreement definition and performance monitoring',
          'EHR remediation and UDS recovery methodology compliance',
          'Continuing professional education and certification maintenance'
        ]
      }
    },
    {
      id: 'risk-management',
      title: 'Enterprise Risk Management & Vendor Oversight',
      icon: AlertTriangle,
      description: 'Comprehensive risk assessment, vendor management, and business continuity framework',
      content: {
        statement: 'Tianide Consulting Group maintains a comprehensive enterprise risk management program that identifies, assesses, monitors, and mitigates risks across all business operations, including third-party vendor relationships.',
        procedures: [
          'Conduct annual enterprise risk assessments covering operational, financial, and strategic risks',
          'Implement risk register maintenance with quarterly reviews and updates',
          'Establish risk appetite statements and tolerance levels by risk category',
          'Conduct vendor due diligence including security, financial, and operational assessments',
          'Implement ongoing vendor performance monitoring and periodic re-assessments',
          'Maintain business continuity plans with annual testing and updates',
          'Establish crisis management and incident response procedures',
          'Implement insurance coverage reviews and risk transfer strategies'
        ],
        requirements: [
          'Annual risk assessment documentation and board presentation',
          'Vendor risk assessment completion before contract execution',
          'Business continuity plan testing and documentation',
          'Insurance coverage adequacy reviews and updates',
          'Operational risk monitoring and key risk indicator tracking'
        ]
      }
    },
    {
      id: 'employment-hr',
      title: 'Employment & Human Resources Management',
      icon: Users,
      description: 'Global workforce policies including DEI, anti-harassment, and professional development',
      content: {
        statement: 'Titanide Consulting Group is committed to maintaining a diverse, inclusive, and respectful workplace that supports professional growth while ensuring compliance with employment laws across all jurisdictions.',
        procedures: [
          'Implement comprehensive recruitment and hiring procedures ensuring equal opportunity',
          'Conduct mandatory diversity, equity, and inclusion training for all personnel',
          'Establish clear anti-harassment and discrimination reporting mechanisms',
          'Implement performance management systems with regular feedback and development planning',
          'Maintain professional development and continuing education programs',
          'Establish remote work policies and global team collaboration procedures',
          'Implement employee privacy protection and monitoring disclosure procedures',
          'Conduct regular compensation equity reviews and market benchmarking'
        ],
        requirements: [
          'Multi-jurisdictional employment law compliance (US, UK, EU)',
          'Equal employment opportunity and affirmative action compliance',
          'Anti-harassment and discrimination policy enforcement',
          'Professional development and training completion tracking',
          'Employee privacy and data protection compliance'
        ]
      }
    },
    {
      id: 'financial-controls',
      title: 'Financial Controls & Anti-Money Laundering',
      icon: Gavel,
      description: 'Financial oversight, accounting controls, and AML compliance for global operations',
      content: {
        statement: 'Titanide Consulting Group maintains comprehensive financial controls and anti-money laundering procedures to ensure financial integrity, regulatory compliance, and fraud prevention across all global operations.',
        procedures: [
          'Implement comprehensive anti-money laundering customer identification procedures',
          'Conduct enhanced due diligence for high-risk clients and transactions',
          'Maintain suspicious activity monitoring and reporting procedures',
          'Implement segregation of duties and dual approval requirements for financial transactions',
          'Conduct monthly financial reconciliations and variance analysis',
          'Maintain detailed audit trails for all financial transactions and approvals',
          'Implement expense management and approval workflows with supporting documentation',
          'Conduct annual financial audits and quarterly compliance reviews'
        ],
        requirements: [
          'Anti-money laundering (AML) program implementation and monitoring',
          'Customer identification and beneficial ownership verification',
          'Suspicious activity reporting within required timeframes',
          'International financial reporting standards compliance',
          'Multi-jurisdictional tax compliance and documentation'
        ]
      }
    },
    {
      id: 'technology-communications',
      title: 'Technology Usage & Communications',
      icon: Lock,
      description: 'Approved technology, secure communications, and digital platform governance',
      content: {
        statement: 'Titanide Consulting Group maintains approved technology standards and secure communication protocols to protect confidential information while enabling efficient business operations and client service delivery.',
        procedures: [
          'Maintain approved software and technology inventory with security assessments',
          'Implement secure communication protocols including encrypted email and messaging',
          'Establish Zoho workflow governance with data retention and access controls',
          'Implement email security controls including anti-phishing and encryption',
          'Establish social media and public communications approval procedures',
          'Maintain digital asset protection including automated backup procedures',
          'Implement remote access controls and VPN usage requirements',
          'Establish mobile device and BYOD security policies and enforcement'
        ],
        requirements: [
          'Approved technology list maintenance and security validation',
          'Secure communication protocol implementation and training',
          'Data loss prevention and backup procedure compliance',
          'Remote access security and monitoring implementation',
          'Mobile device management and security policy enforcement'
        ]
      }
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy',
      icon: Lock,
      description: 'Comprehensive privacy protection and personal data handling procedures',
      content: {
        statement: 'Titanide Consulting Group is committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our services.',
        procedures: [
          'Collection of personal information only for legitimate business purposes',
          'Implementation of purpose limitation ensuring data is used only for stated purposes',
          'Data minimization practices collecting only necessary information',
          'Transparent data processing with clear consent mechanisms',
          'Secure data storage with encryption and access controls',
          'Regular data retention review and secure disposal procedures',
          'Individual rights implementation including access, rectification, and erasure',
          'Cross-border data transfer protection through appropriate safeguards'
        ],
        requirements: [
          'GDPR Article 6 lawful basis documentation for all processing activities',
          'CCPA compliance including opt-out rights and consumer request processing',
          'HIPAA privacy compliance for protected health information',
          'Breach notification within 72 hours to supervisory authorities',
          'Data Protection Impact Assessment completion for high-risk processing',
          'Privacy by design implementation in all new systems and processes'
        ]
      }
    },
    {
      id: 'cookie-policy',
      title: 'Cookie & Tracking Policy',
      icon: Shield,
      description: 'Website cookies, tracking technologies, and digital analytics governance',
      content: {
        statement: 'This Cookie Policy explains how Titanide Consulting Group uses cookies and similar tracking technologies on our websites and digital platforms to enhance user experience while respecting your privacy preferences.',
        procedures: [
          'Cookie consent banner implementation with granular opt-in options',
          'Essential cookies deployment for website functionality only',
          'Analytics cookies usage with anonymization and data minimization',
          'Marketing cookies implementation only with explicit consent',
          'Regular cookie audit and inventory maintenance',
          'Cookie retention period enforcement and automatic deletion',
          'User preference center for cookie management and withdrawal',
          'Third-party cookie processor due diligence and data processing agreements'
        ],
        requirements: [
          'ePrivacy Directive compliance for EU/UK website visitors',
          'GDPR consent requirements for non-essential cookies',
          'CCPA opt-out mechanisms for tracking and targeted advertising',
          'Cookie declaration accuracy and regular updates',
          'User consent record maintenance with audit trail',
          'Cookie policy accessibility and plain language requirements'
        ]
      }
    },
    {
      id: 'data-protection',
      title: 'Data Protection & Security Policy',
      icon: Shield,
      description: 'Comprehensive data protection measures and cybersecurity framework',
      content: {
        statement: 'Titanide Consulting Group implements comprehensive data protection and cybersecurity measures to safeguard all personal, confidential, and proprietary information against unauthorized access, disclosure, alteration, or destruction.',
        procedures: [
          'Multi-factor authentication implementation for all system access',
          'Data encryption in transit and at rest using industry-standard protocols',
          'Regular security awareness training and phishing simulation exercises',
          'Vulnerability assessment and penetration testing on quarterly basis',
          'Incident response procedures with 24/7 monitoring and rapid response',
          'Secure software development lifecycle with security testing integration',
          'Vendor security assessment and ongoing monitoring procedures',
          'Business continuity and disaster recovery planning with regular testing'
        ],
        requirements: [
          'ISO/IEC 27001 information security management system implementation',
          'NIST Cybersecurity Framework alignment across all security controls',
          'SOC 2 Type II compliance for service organization controls',
          'HIPAA Security Rule technical, administrative, and physical safeguards',
          'PCI DSS compliance for payment card data processing (where applicable)',
          'Industry-specific security standards compliance and certification maintenance'
        ]
      }
    },
    {
      id: 'terms-of-service',
      title: 'Terms of Service & Use',
      icon: FileText,
      description: 'Service terms, user agreements, and platform usage conditions',
      content: {
        statement: 'These Terms of Service govern your use of Titanide Consulting Group services, platforms, and digital resources. By accessing or using our services, you agree to be bound by these terms and conditions.',
        procedures: [
          'Clear service scope definition and deliverable specifications',
          'User account creation and authentication procedures',
          'Acceptable use policy enforcement and violation response',
          'Intellectual property protection and usage rights clarification',
          'Service availability and maintenance scheduling with advance notice',
          'Billing, payment, and refund procedures with transparent pricing',
          'Dispute resolution mechanisms including mediation and arbitration',
          'Terms modification procedures with appropriate user notification'
        ],
        requirements: [
          'Contract formation validity under applicable jurisdiction laws',
          'Consumer protection law compliance for individual service users',
          'Accessibility standards compliance for digital service delivery',
          'Professional liability and limitation of liability clauses',
          'Governing law and jurisdiction specification for legal disputes',
          'Termination procedures and data retention post-contract expiration'
        ]
      }
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
                      <div className="border-t pt-6 space-y-6">
                        {/* Policy Statement */}
                        <div>
                          <h4 className="font-semibold mb-3 text-lg" style={{ color: '#005870' }}>Policy Statement</h4>
                          <p className="text-gray-700 leading-relaxed">{area.content.statement}</p>
                        </div>

                        {/* Procedures */}
                        <div>
                          <h4 className="font-semibold mb-3 text-lg" style={{ color: '#005870' }}>Implementation Procedures</h4>
                          <ul className="space-y-2">
                            {area.content.procedures.map((procedure, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00A3AD' }}></span>
                                <span className="text-gray-700">{procedure}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Compliance Requirements */}
                        <div>
                          <h4 className="font-semibold mb-3 text-lg" style={{ color: '#005870' }}>Compliance Requirements</h4>
                          <ul className="space-y-2">
                            {area.content.requirements.map((requirement, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{requirement}</span>
                              </li>
                            ))}
                          </ul>
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
              <p className="text-sm text-gray-300">compliance@titanideholdings.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-white mb-2">International Operations</h3>
              <p className="text-sm text-gray-300">michadrian@titanideconsulting.com</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="text-gray-800 bg-white hover:bg-gray-100 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              Request Policy Documentation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-colors">
              Schedule Compliance Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
