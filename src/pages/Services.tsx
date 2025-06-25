
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
      ],
      color: "bg-blue-50 border-blue-200"
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
      ],
      color: "bg-green-50 border-green-200"
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
      ],
      color: "bg-purple-50 border-purple-200"
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
      ],
      color: "bg-orange-50 border-orange-200"
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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Compliance Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Delivering regulatory compliance solutions for your competitive advantage
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-blue-700 text-white hover:bg-blue-600">
                Regulatory Expertise
              </Badge>
              <Badge variant="secondary" className="bg-blue-700 text-white hover:bg-blue-600">
                Risk Management
              </Badge>
              <Badge variant="secondary" className="bg-blue-700 text-white hover:bg-blue-600">
                Strategic Advisory
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive compliance solutions designed to protect your organization 
              and enhance your competitive position in the marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreServices.map((service, index) => (
              <Card key={index} className={`${service.color} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
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
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced compliance solutions tailored to meet specific industry requirements and regulatory challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specializedServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-300 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
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
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Titanice Consulting Group?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proven Expertise</h3>
                    <p className="text-gray-600">Deep industry knowledge and regulatory expertise across multiple sectors</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Risk-Based Approach</h3>
                    <p className="text-gray-600">Tailored solutions that prioritize your highest compliance risks</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Collaborative Partnership</h3>
                    <p className="text-gray-600">We work alongside your team to build sustainable compliance capabilities</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss how we can help strengthen your organization's compliance framework.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">info@titaniceconsulting.com</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
