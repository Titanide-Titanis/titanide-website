import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, FileText, Search, Award, ArrowRight, Phone, Mail, Database, Download } from "lucide-react";

const Services = () => {
  const coreServices = [
    {
      title: "Compliance Management",
      description: "Comprehensive regulatory compliance management tailored to your organization's needs",
      icon: Shield,
      features: [
        "Regulatory compliance framework development",
        "Policy and procedure development", 
        "Compliance monitoring and reporting",
        "Regulatory change management"
      ]
    },
    {
      title: "Risk Assessment & Management", 
      description: "Identify, assess and mitigate regulatory and operational risks",
      icon: Search,
      features: [
        "Comprehensive risk assessments",
        "Risk register development and maintenance",
        "Risk mitigation strategy development",
        "Ongoing risk monitoring programs"
      ]
    },
    {
      title: "Training & Development",
      description: "Build compliance capability within your organization",
      icon: Users,
      features: [
        "Customized compliance training programs",
        "Leadership development in compliance",
        "Regulatory awareness sessions",
        "Competency assessment and development"
      ]
    },
    {
      title: "Advisory Services",
      description: "Expert guidance on complex regulatory matters",
      icon: FileText,
      features: [
        "Regulatory interpretation and guidance",
        "Strategic compliance planning",
        "Industry best practice implementation",
        "Regulatory submission support"
      ]
    }
  ];

  const specializedServices = [
    {
      title: "EHR Remediation & UDS Recovery Suite",
      description: "Turnkey solution for FQHCs facing EHR mis-configuration and UDS reporting gaps",
      icon: Database,
      highlights: [
        "Proven track record: Preserved $8M+ in Section 330 grant funding",
        "90-day turnaround for complete EHR reconstruction",
        "End-to-end UDS file restoration and error-free reporting",
        "Specialized focus on FQHC operations"
      ],
      details: [
        "EHR data table rebuilding and re-engineering",
        "UDS file recovery and validation",
        "Grant funding preservation strategies",
        "340B eligibility maintenance",
        "Ongoing data integrity monitoring"
      ]
    },
    {
      title: "Audit & Review Services",
      description: "Independent assessment of your compliance framework",
      details: [
        "Compliance system audits",
        "Gap analysis and remediation planning", 
        "Third-party compliance reviews",
        "Regulatory readiness assessments"
      ]
    },
    {
      title: "Regulatory Intelligence",
      description: "Stay ahead of regulatory changes affecting your business",
      details: [
        "Regulatory horizon scanning",
        "Impact assessment of new regulations",
        "Compliance calendar management",
        "Industry-specific regulatory updates"
      ]
    },
    {
      title: "Digital Compliance Solutions",
      description: "Leverage technology for enhanced compliance management",
      details: [
        "Compliance management system implementation",
        "Digital reporting and dashboards",
        "Automated compliance monitoring",
        "Data analytics for compliance insights"
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* Header Section */}
      <div 
        className="text-white py-16 px-8"
        style={{ 
          background: 'linear-gradient(135deg, #002B45, #005870)',
          animation: 'fadeInHeader 2s ease-out'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="font-bold mb-6 text-white"
            style={{ 
              fontSize: '2.8rem',
              animation: 'slideInDown 1.5s ease-out'
            }}
          >
            Compliance & Risk Leadership Solutions
          </h1>
          <p 
            className="mb-8"
            style={{ 
              fontSize: '1.2rem',
              animation: 'slideInUp 1.8s ease-out'
            }}
          >
            Delivering regulatory compliance solutions for your competitive advantage
          </p>
          <div 
            className="flex flex-wrap justify-center gap-4 text-sm"
            style={{ animation: 'fadeInBadges 2.2s ease-out' }}
          >
            <Badge 
              variant="secondary" 
              className="text-white hover:opacity-90"
              style={{ backgroundColor: '#00A3AD' }}
            >
              Regulatory Expertise
            </Badge>
            <Badge 
              variant="secondary" 
              className="text-white hover:opacity-90"
              style={{ backgroundColor: '#00A3AD' }}
            >
              Risk Management
            </Badge>
            <Badge 
              variant="secondary" 
              className="text-white hover:opacity-90"
              style={{ backgroundColor: '#00A3AD' }}
            >
              Strategic Advisory
            </Badge>
          </div>
        </div>
      </div>

      {/* Core Services Section */}
      <div 
        className="py-16 px-8"
        style={{ 
          backgroundColor: '#f4f4f4',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 
              className="font-bold mb-4"
              style={{ 
                fontSize: '2rem',
                color: '#003f5c',
                borderLeft: '5px solid #00A3AD',
                paddingLeft: '1rem',
                marginBottom: '1.25rem'
              }}
            >
              Our Core Services
            </h2>
            <p className="text-lg max-w-3xl" style={{ fontSize: '1.05rem' }}>
              We provide comprehensive compliance solutions designed to protect your organization 
              and enhance your competitive position in the marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg shadow-sm" style={{ backgroundColor: '#eaf6f8' }}>
                      <service.icon className="h-6 w-6" style={{ color: '#005870' }} />
                    </div>
                    <div>
                      <CardTitle className="text-xl" style={{ color: '#002B45' }}>{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#00A3AD' }} />
                        <span style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Service Section - EHR Remediation */}
      <div 
        className="py-16 px-8"
        style={{ 
          backgroundColor: '#002B45',
          color: '#ffffff'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#00A3AD' }}>
                  <Database className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">EHR Remediation & UDS Recovery Suite</h2>
                  <p className="text-lg" style={{ color: '#B0E0E6' }}>Specialized for FQHCs</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Why It Matters</h3>
                <p className="text-base leading-relaxed" style={{ color: '#E6F3FF' }}>
                  FQHCs live or die by Uniform Data System (UDS) metrics—yet most operate without dedicated IT or data-management staff. 
                  When EHR mis-configuration, data loss, or reporting gaps threaten HRSA grant funding, leadership needs a turnkey fix that 
                  restores data integrity fast and keeps it that way.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Our Proven Track Record</h3>
                <p className="text-base leading-relaxed" style={{ color: '#E6F3FF' }}>
                  We salvaged three years of incomplete UDS files caused by a failed EHR migration. 
                  Within 90 days we rebuilt the data tables, re-engineered the EHR, and submitted error-free reports—preserving 
                  over $8 million in Section 330 grant funding and 340B eligibility.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#002B45' }}>Service Highlights</h3>
                <ul className="space-y-4 mb-6">
                  {specializedServices[0].highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#00A3AD' }} />
                      <span style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://titanide.zohobookings.com/#/3973691000005149002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="w-full text-white hover:opacity-90"
                    style={{ 
                      backgroundColor: '#00A3AD',
                      padding: '0.75rem 1.5rem',
                      fontWeight: '600'
                    }}
                  >
                    Learn More About EHR Recovery
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialized Services Section */}
      <div 
        className="py-16 px-8"
        style={{ 
          backgroundColor: '#eaf6f8',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 
              className="font-bold mb-4"
              style={{ 
                fontSize: '2rem',
                color: '#003f5c',
                borderLeft: '5px solid #00A3AD',
                paddingLeft: '1rem'
              }}
            >
              Additional Specialized Services
            </h2>
            <p className="text-lg max-w-3xl" style={{ fontSize: '1.05rem' }}>
              Advanced compliance solutions tailored to meet specific industry requirements and regulatory challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedServices.slice(1).map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all bg-white" style={{ borderColor: '#00A3AD' }}>
                <CardHeader>
                  <CardTitle className="text-xl mb-2" style={{ color: '#002B45', fontSize: '1.5rem' }}>{service.title}</CardTitle>
                  <CardDescription style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#005870' }} />
                        <span style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="py-16 px-8" style={{ backgroundColor: '#fdfdfd' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 
              className="font-bold mb-4"
              style={{ 
                fontSize: '2rem',
                color: '#003f5c',
                borderLeft: '5px solid #00A3AD',
                paddingLeft: '1rem',
                display: 'inline-block'
              }}
            >
              Why Choose Titanide Consulting Group?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 mt-1" style={{ color: '#005870' }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#002B45', fontWeight: '600' }}>Proven Expertise</h3>
                  <p style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>Deep industry knowledge and regulatory expertise across multiple sectors</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 mt-1" style={{ color: '#005870' }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#002B45', fontWeight: '600' }}>Risk-Based Approach</h3>
                  <p style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>Tailored solutions that prioritize your highest compliance risks</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 mt-1" style={{ color: '#005870' }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#002B45', fontWeight: '600' }}>Collaborative Partnership</h3>
                  <p style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>We work alongside your team to build sustainable compliance capabilities</p>
                </div>
              </div>
            </div>
            
            <div 
              className="p-8 rounded-lg shadow-sm"
              style={{ 
                backgroundColor: 'white',
                border: '2px dashed #00A3AD',
                borderRadius: '10px'
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: '#002B45' }}>Ready to Get Started?</h3>
              <p className="mb-6" style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                Contact us today to discuss how we can help strengthen your organization's compliance framework.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" style={{ color: '#005870' }} />
                  <span style={{ color: '#1a1a1a' }}>832-735-8880</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" style={{ color: '#005870' }} />
                  <span style={{ color: '#1a1a1a' }}>info@titanideconsulting.com</span>
                </div>
                <div className="space-y-3 mt-6">
                  <a 
                    href="https://www.titanideconsulting.com/Titanide%20Consulting%20Capabitlity%20Statement-Final.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Button 
                      className="w-full text-white hover:opacity-90 flex items-center gap-2"
                      style={{ 
                        backgroundColor: '#00A3AD',
                        padding: '0.75rem 1.5rem',
                        fontWeight: '600'
                      }}
                    >
                      <Download className="h-4 w-4" />
                      Download Capability Statement
                    </Button>
                  </a>
                  <a 
                    href="https://titanide.zohobookings.com/#/3973691000005149002"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="w-full text-white hover:opacity-90"
                      style={{ 
                        backgroundColor: '#002B45',
                        padding: '0.75rem 1.5rem',
                        fontWeight: '600'
                      }}
                    >
                      Schedule a Discovery Call
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeInHeader {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInBadges {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInDown {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        `}
      </style>
    </div>
  );
};

export default Services;
