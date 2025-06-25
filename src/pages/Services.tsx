
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, FileText, Search, Award, ArrowRight, Phone, Mail } from "lucide-react";

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
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 
            className="font-bold mb-6 text-white"
            style={{ 
              fontSize: '2.8rem',
              animation: 'slideInDown 1s ease-out'
            }}
          >
            Professional Compliance Services
          </h1>
          <p 
            className="mb-8"
            style={{ 
              fontSize: '1.2rem',
              animation: 'slideInUp 1.2s ease-out'
            }}
          >
            Delivering regulatory compliance solutions for your competitive advantage
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
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
              Specialized Services
            </h2>
            <p className="text-lg max-w-3xl" style={{ fontSize: '1.05rem' }}>
              Advanced compliance solutions tailored to meet specific industry requirements and regulatory challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
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
                  <span style={{ color: '#1a1a1a' }}>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" style={{ color: '#005870' }} />
                  <span style={{ color: '#1a1a1a' }}>info@titanideconsulting.com</span>
                </div>
                <Button 
                  className="w-full text-white mt-4 hover:opacity-90"
                  style={{ 
                    backgroundColor: '#002B45',
                    padding: '0.75rem 1.5rem',
                    fontWeight: '600'
                  }}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideInDown {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Services;
