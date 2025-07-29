import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  TrendingUp, 
  FileText, 
  BarChart3, 
  Settings, 
  Database,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Zap,
  Star,
  PlayCircle,
  Monitor,
  Award,
  Target,
  AlertTriangle,
  Building2,
  Eye,
  Lock
} from "lucide-react";

const TitanisGRC = () => {
  // Add CSS animations for the dashboard
  const dashboardAnimations = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes progressFill {
      0% { width: 0%; }
      100% { width: 98.7%; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    @keyframes slideInLeft {
      0% { transform: translateX(-50px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInRight {
      0% { transform: translateX(50px); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;

  // Add the animations to the document head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = dashboardAnimations;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "AI-Powered Regulatory Intelligence",
      description: "Machine learning algorithms continuously monitor 50+ regulatory sources, automatically flagging changes that impact your organization.",
      impact: "90% faster compliance updates"
    },
    {
      icon: TrendingUp,
      title: "Predictive Risk Analytics",
      description: "Advanced analytics predict compliance risks before they occur, with automated risk scoring and mitigation recommendations.",
      impact: "85% reduction in compliance violations"
    },
    {
      icon: FileText,
      title: "Automated Audit Orchestration",
      description: "End-to-end audit management with automated evidence collection, gap analysis, and remediation tracking.",
      impact: "75% less audit preparation time"
    },
    {
      icon: BarChart3,
      title: "Executive Command Center",
      description: "Real-time compliance dashboards with predictive insights and board-ready reports delivered automatically.",
      impact: "Complete visibility across all frameworks"
    },
    {
      icon: Lock,
      title: "Multi-Framework Orchestration",
      description: "Unified management of HIPAA, SOX, HITECH, ISO 27001, and custom frameworks through a single platform.",
      impact: "60% reduction in compliance overhead"
    },
    {
      icon: Database,
      title: "Enterprise-Grade Integration",
      description: "Native APIs and pre-built connectors for 200+ healthcare systems, EHRs, and enterprise applications.",
      impact: "Seamless data flow across all systems"
    }
  ];

  const stats = [
    { number: "99.7%", label: "Compliance Accuracy", icon: Target },
    { number: "75%", label: "Time Reduction", icon: Clock },
    { number: "500+", label: "Healthcare Organizations", icon: Building2 },
    { number: "24/7", label: "Monitoring & Alerts", icon: Eye }
  ];

  const testimonials = [
    {
      quote: "TITANIS transformed our compliance program from reactive to predictive. We now identify and address risks before they become violations.",
      author: "Chief Compliance Officer",
      company: "Regional Healthcare System",
      rating: 5
    },
    {
      quote: "The AI-powered regulatory intelligence saved us months of manual research. We're always ahead of regulatory changes now.",
      author: "VP of Risk Management", 
      company: "Multi-State Hospital Group",
      rating: 5
    },
    {
      quote: "Audit preparation used to take our team 6 weeks. With TITANIS automation, we're audit-ready in 3 days.",
      author: "Compliance Director",
      company: "Academic Medical Center",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#fdfdfd', color: '#1a1a1a' }}>
      {/* Navigation */}
      <header 
        className="py-6 px-4 sm:px-8 sticky top-0 z-50"
        style={{ 
          backgroundColor: '#002B45',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div className="container mx-auto max-w-6xl flex justify-center items-center">
          <div className="text-center">
            <h1 
              className="text-3xl sm:text-4xl font-bold text-white mb-2"
              style={{ 
                animation: 'slideInLeft 1.2s ease-out, fadeIn 1.5s ease-out',
                letterSpacing: '0.05em'
              }}
            >
              TITANIS™
            </h1>
            <p 
              className="text-sm sm:text-base text-white/90"
              style={{ 
                animation: 'slideInRight 1.2s ease-out 0.3s both',
                fontWeight: '300',
                letterSpacing: '0.02em'
              }}
            >
              Titanide's Intelligent Governance, Risk & Compliance Platform
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #e2ded9 0%, #f4f4f4 100%)',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left" style={{ animation: 'slideInLeft 1.2s ease-out' }}>
              <div className="mb-6">
                <span 
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
                  style={{ backgroundColor: '#00A3AD', color: 'white' }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  TITANIS GRC Platform
                </span>
              </div>
              <h1 
                className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl"
                style={{ 
                  color: '#002B45',
                  lineHeight: '1.1'
                }}
              >
                The Future of Healthcare
                <span style={{ color: '#00A3AD' }}> Compliance</span>
              </h1>
              <p className="text-lg sm:text-xl" style={{ color: '#005870' }}>
                AI-powered GRC platform serving healthcare organizations worldwide. Covers HIPAA, SOX, HITECH, 
                ISO 27001, GDPR, and custom frameworks with intelligent automation for audit management, 
                risk assessment, and continuous compliance monitoring.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {stats.slice(0,2).map((stat, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#002B45' }}>
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="text-white hover:opacity-90 text-lg px-8"
                  style={{ backgroundColor: '#f25022' }}
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
                <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="text-white hover:opacity-90 text-lg px-8"
                    style={{ backgroundColor: '#002B45' }}
                  >
                    Access Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                ))}
                <span className="ml-2 text-sm text-gray-600">4.9/5 from 500+ healthcare organizations</span>
              </div>
            </div>
            
            <div className="text-center order-first lg:order-last" style={{ animation: 'slideInRight 1.2s ease-out' }}>
              <div 
                className="mx-auto bg-white rounded-2xl shadow-2xl p-6 max-w-md cursor-pointer hover:shadow-3xl transition-all duration-300 group"
                style={{ border: '3px solid #00A3AD', animation: 'float 3s ease-in-out infinite' }}
              >
                <div className="mb-4">
                  <Monitor className="h-16 w-16 mx-auto group-hover:scale-110 transition-transform duration-300" style={{ color: '#002B45' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#002B45' }}>
                  Live Compliance Dashboard
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Real-time visibility into your compliance posture
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#eaf6f8' }}>
                    <span className="text-sm">HIPAA Compliance</span>
                    <div className="flex items-center">
                      <div className="w-20 h-2 bg-gray-200 rounded mr-2">
                        <div className="h-2 rounded transition-all duration-1000" style={{ backgroundColor: '#00A3AD', width: '98.7%', animation: 'progressFill 2s ease-out' }}></div>
                      </div>
                      <span className="text-sm font-semibold" style={{ color: '#00A3AD' }}>98.7%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#eaf6f8' }}>
                    <span className="text-sm">Risk Score</span>
                    <span className="text-sm font-semibold flex items-center" style={{ color: '#00A3AD' }}>
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#00A3AD', animation: 'pulse 2s infinite' }}></div>
                      Low
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#eaf6f8' }}>
                    <span className="text-sm">Next Audit</span>
                    <span className="text-sm font-semibold flex items-center" style={{ color: '#00A3AD' }}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Ready
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#eaf6f8' }}>
                    <span className="text-sm">Active Monitoring</span>
                    <span className="text-sm font-semibold flex items-center" style={{ color: '#00A3AD' }}>
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#f25022', animation: 'blink 1s infinite' }}></div>
                      Live
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Click to interact with demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section 
        className="py-12 sm:py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-4">TRUSTED BY LEADING HEALTHCARE ORGANIZATIONS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="text-center">
                <Building2 className="h-8 w-8 mx-auto mb-2" style={{ color: '#002B45' }} />
                <span className="text-sm font-medium">Regional Health</span>
              </div>
              <div className="text-center">
                <Building2 className="h-8 w-8 mx-auto mb-2" style={{ color: '#002B45' }} />
                <span className="text-sm font-medium">Medical Centers</span>
              </div>
              <div className="text-center">
                <Building2 className="h-8 w-8 mx-auto mb-2" style={{ color: '#002B45' }} />
                <span className="text-sm font-medium">Healthcare Systems</span>
              </div>
              <div className="text-center">
                <Building2 className="h-8 w-8 mx-auto mb-2" style={{ color: '#002B45' }} />
                <span className="text-sm font-medium">Academic Hospitals</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <stat.icon className="h-8 w-8" style={{ color: '#005870' }} />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: '#002B45' }}>
                  {stat.number}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#f4f4f4' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: '#002B45' }}
              >
                Stop Playing Compliance Catch-Up
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#f25022' }} />
                  <p className="text-gray-700">Manual compliance tracking leads to missed deadlines and violations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#f25022' }} />
                  <p className="text-gray-700">Reactive risk management exposes your organization to preventable issues</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#f25022' }} />
                  <p className="text-gray-700">Audit preparation consumes weeks of valuable resources</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#f25022' }} />
                  <p className="text-gray-700">Siloed compliance data makes oversight impossible</p>
                </div>
              </div>
            </div>
            <div>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: '#00A3AD' }}
              >
                TITANIS Changes Everything
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                  <p className="text-gray-700"><strong>Predictive Intelligence:</strong> AI anticipates compliance risks before they occur</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                  <p className="text-gray-700"><strong>Automated Workflows:</strong> Compliance tasks execute themselves</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                  <p className="text-gray-700"><strong>Continuous Monitoring:</strong> 24/7 oversight across all frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                  <p className="text-gray-700"><strong>Unified Dashboard:</strong> Complete visibility from one platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#002B45' }}
            >
              Platform Capabilities That Transform Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every feature engineered specifically for healthcare compliance challenges, 
              powered by AI and designed for operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0" style={{ border: '1px solid #e0e0e0' }}>
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <feature.icon className="w-12 h-12 group-hover:scale-110 transition-transform" style={{ color: '#00A3AD' }} />
                    <Award className="w-6 h-6" style={{ color: '#f25022' }} />
                  </div>
                  <CardTitle className="text-xl" style={{ color: '#002B45' }}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-base text-gray-600 mb-4">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: '#eaf6f8' }}>
                    <p className="text-sm font-semibold" style={{ color: '#005870' }}>
                      ✓ {feature.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-gray-700 hover:text-gray-900 border border-gray-300 hover:bg-gray-50 text-lg px-8"
              style={{ backgroundColor: 'white' }}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              See All Features in Action
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Guarantee Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ 
          background: 'linear-gradient(135deg, #00A3AD 0%, #005870 100%)',
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              90-Day ROI Guarantee
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We're so confident in TITANIS that we guarantee measurable ROI within 90 days, 
              or we'll refund your investment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">75%</div>
                <div className="text-sm">Reduction in audit prep time</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">90%</div>
                <div className="text-sm">Faster compliance updates</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="text-sm">Reduction in violations</div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Our Guarantee Includes:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Measurable time savings within 30 days</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Improved compliance scores by day 60</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Full audit readiness by day 90</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Complete staff training and adoption</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-white/70 mt-6">
              *Terms and conditions apply. ROI measurement based on time savings, reduced violations, and operational efficiency improvements. 
              Guarantee requires completion of onboarding program and minimum 90-day usage period. Results may vary based on organization size and implementation scope.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation & Onboarding Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#002B45' }}
            >
              Seamless Implementation
            </h2>
            <p className="text-xl text-gray-600">
              From setup to success in 30 days with our proven implementation methodology
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00A3AD' }}>
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>Discovery</h3>
              <p className="text-gray-600">
                Comprehensive assessment of current compliance state and integration requirements
              </p>
              <div className="text-sm text-gray-500 mt-2">Days 1-5</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00A3AD' }}>
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>Configuration</h3>
              <p className="text-gray-600">
                Platform setup, data migration, and integration with existing systems
              </p>
              <div className="text-sm text-gray-500 mt-2">Days 6-15</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00A3AD' }}>
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>Training</h3>
              <p className="text-gray-600">
                Comprehensive user training and change management support
              </p>
              <div className="text-sm text-gray-500 mt-2">Days 16-25</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00A3AD' }}>
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#002B45' }}>Go-Live</h3>
              <p className="text-gray-600">
                Full platform activation with ongoing support and optimization
              </p>
              <div className="text-sm text-gray-500 mt-2">Days 26-30</div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#002B45' }}>Implementation Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>95%</div>
                <div className="text-gray-600">On-time delivery rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>98%</div>
                <div className="text-gray-600">User adoption within 60 days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>100%</div>
                <div className="text-gray-600">Data migration accuracy</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-6">
              *Implementation timeline varies by organization size and complexity. Additional fees may apply for custom integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Capabilities Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#002B45' }}
            >
              Enterprise-Grade Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Native APIs and pre-built connectors for seamless data flow across your entire healthcare ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300" style={{ borderColor: '#00A3AD' }}>
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#002B45' }}>
                  <Database className="h-6 w-6 mr-2" style={{ color: '#00A3AD' }} />
                  EHR Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Epic</li>
                  <li>• Cerner (Oracle Health)</li>
                  <li>• Allscripts</li>
                  <li>• athenahealth</li>
                  <li>• NextGen</li>
                  <li>• + 50 more systems</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300" style={{ borderColor: '#00A3AD' }}>
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#002B45' }}>
                  <Shield className="h-6 w-6 mr-2" style={{ color: '#00A3AD' }} />
                  Security Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Microsoft Sentinel</li>
                  <li>• Splunk</li>
                  <li>• CrowdStrike</li>
                  <li>• Okta</li>
                  <li>• Active Directory</li>
                  <li>• Custom SIEM solutions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-shadow duration-300" style={{ borderColor: '#00A3AD' }}>
              <CardHeader>
                <CardTitle className="flex items-center" style={{ color: '#002B45' }}>
                  <Settings className="h-6 w-6 mr-2" style={{ color: '#00A3AD' }} />
                  Business Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• SAP</li>
                  <li>• Oracle</li>
                  <li>• Workday</li>
                  <li>• Salesforce</li>
                  <li>• ServiceNow</li>
                  <li>• Microsoft 365</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#002B45' }}>API-First Architecture</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#00A3AD' }}>RESTful APIs</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Complete API documentation</li>
                  <li>• Webhook support</li>
                  <li>• Real-time data sync</li>
                  <li>• Rate limiting and security</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#00A3AD' }}>Custom Integrations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dedicated integration team</li>
                  <li>• Custom connector development</li>
                  <li>• Legacy system support</li>
                  <li>• White-glove implementation</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-6">
              *Custom integration services available. Additional fees may apply for complex legacy system integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Compliance Certifications Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#002B45' }}
            >
              Security & Compliance Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Built with the highest security standards to protect your most sensitive healthcare data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <Award className="h-12 w-12 mx-auto mb-4" style={{ color: '#00A3AD' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>SOC 2 Type II</h3>
              <p className="text-sm text-gray-600">Security, availability, and confidentiality controls</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: '#00A3AD' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>HITRUST CSF</h3>
              <p className="text-sm text-gray-600">Healthcare industry security framework certification</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <Lock className="h-12 w-12 mx-auto mb-4" style={{ color: '#00A3AD' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>ISO 27001</h3>
              <p className="text-sm text-gray-600">International information security management</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <Globe className="h-12 w-12 mx-auto mb-4" style={{ color: '#00A3AD' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>GDPR Ready</h3>
              <p className="text-sm text-gray-600">European data protection regulation compliance</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#002B45' }}>Data Security Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#00A3AD' }}>Encryption</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• AES 256-bit encryption at rest</li>
                  <li>• TLS 1.3 in transit</li>
                  <li>• End-to-end encryption</li>
                  <li>• Key management system</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#00A3AD' }}>Access Control</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-factor authentication</li>
                  <li>• Role-based permissions</li>
                  <li>• Single sign-on (SSO)</li>
                  <li>• Audit trail logging</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#00A3AD' }}>Infrastructure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• AWS/Azure hosting</li>
                  <li>• 99.99% uptime SLA</li>
                  <li>• Disaster recovery</li>
                  <li>• Regular penetration testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Case Studies Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#002B45' }}
            >
              Success Stories & Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real results from healthcare organizations worldwide
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Case Study 1 */}
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300" style={{ borderColor: '#00A3AD' }}>
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>Regional Health System</CardTitle>
                <CardDescription>15 hospitals, 50,000 employees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#00A3AD' }}>Challenge</h4>
                    <p className="text-sm text-gray-600">
                      Manual compliance tracking across multiple facilities leading to 
                      inconsistent audit results and regulatory findings.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#00A3AD' }}>Solution</h4>
                    <p className="text-sm text-gray-600">
                      Deployed TITANIS across all facilities with unified compliance 
                      monitoring and automated audit preparation.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Audit Prep Time</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>-80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Compliance Violations</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>-95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Annual Savings</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>$2.1M</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300" style={{ borderColor: '#00A3AD' }}>
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>Academic Medical Center</CardTitle>
                <CardDescription>Teaching hospital with research facilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#00A3AD' }}>Challenge</h4>
                    <p className="text-sm text-gray-600">
                      Complex compliance requirements for clinical research and 
                      patient care across multiple regulatory frameworks.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#00A3AD' }}>Solution</h4>
                    <p className="text-sm text-gray-600">
                      Implemented multi-framework monitoring covering HIPAA, 
                      FDA, and institutional research protocols.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Regulatory Updates</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>Real-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Risk Detection</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>+300%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Compliance Score</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>99.2%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300" style={{ borderColor: '#00A3AD' }}>
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>Multi-State Hospital Group</CardTitle>
                <CardDescription>30+ facilities across 8 states</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#00A3AD' }}>Challenge</h4>
                    <p className="text-sm text-gray-600">
                      Inconsistent compliance practices across states with 
                      varying regulatory requirements and audit schedules.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2" style={{ color: '#00A3AD' }}>Solution</h4>
                    <p className="text-sm text-gray-600">
                      Centralized compliance management with state-specific 
                      customizations and automated reporting.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Standardization</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Audit Success Rate</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Cost Reduction</span>
                      <span className="font-semibold" style={{ color: '#00A3AD' }}>$3.5M</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-white hover:opacity-90"
              style={{ backgroundColor: '#00A3AD' }}
            >
              View Complete Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              *Results may vary based on implementation scope and organizational factors. Subject to contract terms.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#002B45' }}
            >
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Healthcare leaders worldwide trust TITANIS to transform their compliance programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <cite className="font-semibold" style={{ color: '#002B45' }}>
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#002B45' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about TITANIS implementation and features
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>How long does implementation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Standard implementation takes 30 days for most organizations. This includes discovery, 
                  configuration, data migration, training, and go-live support. Complex environments with 
                  extensive customizations may require additional time.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  *Implementation timeline varies by organization size and complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>What compliance frameworks does TITANIS support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  TITANIS supports all major healthcare compliance frameworks including HIPAA, HITECH, 
                  SOX, ISO 27001, GDPR, and custom organizational frameworks. Our AI continuously monitors 
                  regulatory changes across 50+ sources to ensure current compliance requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>How does the 90-day ROI guarantee work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We guarantee measurable ROI within 90 days of full implementation. This includes time 
                  savings in audit preparation, improved compliance scores, and operational efficiency gains. 
                  If you don't see documented improvements, we'll refund your investment.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  *Terms and conditions apply. Requires completion of onboarding program and minimum 90-day usage period.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>Can TITANIS integrate with our existing EHR system?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, TITANIS has native integrations with 200+ healthcare systems including Epic, 
                  Cerner, Allscripts, and athenahealth. We also provide custom API connections for 
                  legacy systems and specialized applications.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  *Additional fees may apply for custom integrations with legacy systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>What kind of ongoing support is provided?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All TITANIS customers receive 24/7 technical support, regular system updates, 
                  quarterly business reviews, and access to our compliance experts. We also provide 
                  ongoing training and change management support.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>Is TITANIS suitable for smaller healthcare organizations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  TITANIS scales from single practices to large health systems. Our tiered pricing 
                  model ensures cost-effective solutions for organizations of all sizes, with core 
                  compliance features available in every tier.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  *Pricing varies based on organization size and feature requirements. Subject to contract terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Tiers */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#002B45' }}
            >
              Choose Your TITANIS Edition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scalable GRC solutions designed to grow with your organization. 
              Start small, scale seamlessly, transform completely.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              *Subject to contract terms. Additional fees may apply for premium features and custom integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Free Plan */}
            <Card className="relative hover:shadow-xl transition-shadow bg-white" style={{ border: '1px solid #e0e0e0' }}>
              <CardHeader className="p-6">
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Free</CardTitle>
                <CardDescription className="text-gray-600 text-sm">Current Plan</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold" style={{ color: '#002B45' }}>Free</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Basic compliance assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Risk calculator
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Up to 1 user
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    1 framework
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    1GB storage
                  </li>
                </ul>
                <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full text-gray-700 hover:opacity-90"
                    style={{ backgroundColor: '#f4f4f4', border: '1px solid #ddd' }}
                  >
                    Current Plan
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Starter Plan */}
            <Card className="relative hover:shadow-xl transition-shadow bg-white" style={{ border: '1px solid #e0e0e0' }}>
              <CardHeader className="p-6">
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Starter</CardTitle>
                <CardDescription className="text-gray-600 text-sm">Small business compliance management</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold" style={{ color: '#002B45' }}>$2,500</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Full compliance assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Advanced risk management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Policy template library
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Up to 5 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    1 framework
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    10GB storage
                  </li>
                </ul>
                <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full text-white hover:opacity-90"
                    style={{ backgroundColor: '#00A3AD' }}
                  >
                    Get Started
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Professional Plan - Most Popular */}
            <Card className="relative hover:shadow-xl transition-shadow bg-white" style={{ border: '3px solid #00A3AD' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: '#00A3AD' }}
                >
                  Most Popular
                </span>
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Professional</CardTitle>
                <CardDescription className="text-gray-600 text-sm">Mid-market enterprise features</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold" style={{ color: '#002B45' }}>$7,500</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Multiple frameworks support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Advanced analytics & reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Custom report builder
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Workflow automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Up to 25 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    3 frameworks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    100GB storage
                  </li>
                </ul>
                <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full text-white hover:opacity-90"
                    style={{ backgroundColor: '#f25022' }}
                  >
                    Start Trial
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative hover:shadow-xl transition-shadow bg-white" style={{ border: '1px solid #e0e0e0' }}>
              <CardHeader className="p-6">
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Enterprise</CardTitle>
                <CardDescription className="text-gray-600 text-sm">Large enterprise with full features</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl font-bold" style={{ color: '#002B45' }}>$15,000</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Unlimited frameworks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    AI-powered analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    White-label reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Dedicated customer success
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Up to 100 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    1000GB storage
                  </li>
                </ul>
                <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full text-white hover:opacity-90"
                    style={{ backgroundColor: '#002B45' }}
                  >
                    Get Started
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Enterprise Plus Plan */}
            <Card className="relative hover:shadow-xl transition-shadow bg-white" style={{ border: '1px solid #e0e0e0' }}>
              <CardHeader className="p-6">
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Enterprise Plus</CardTitle>
                <CardDescription className="text-gray-600 text-sm">Custom enterprise solutions</CardDescription>
                <div className="mt-4">
                  <span className="text-xl font-bold" style={{ color: '#002B45' }}>Contact</span>
                  <span className="text-gray-500 text-sm"> Sales</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Everything included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Custom deployment options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Unlimited frameworks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    Unlimited storage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00A3AD' }} />
                    24/7 dedicated support
                  </li>
                </ul>
                <Button 
                  className="w-full text-white hover:opacity-90"
                  style={{ backgroundColor: '#005870' }}
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Worldwide Coverage Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#002B45' }}
          >
            Global Healthcare Compliance Coverage
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            TITANIS serves healthcare organizations worldwide with localized compliance expertise and 24/7 support
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Globe className="h-12 w-12 mx-auto mb-4" style={{ color: '#00A3AD' }} />
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#002B45' }}>Global Regulatory Framework Support</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• HIPAA & HITECH (United States)</li>
                <li>• GDPR (European Union)</li>
                <li>• PIPEDA (Canada)</li>
                <li>• Privacy Act (Australia)</li>
                <li>• Custom national frameworks</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Clock className="h-12 w-12 mx-auto mb-4" style={{ color: '#00A3AD' }} />
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#002B45' }}>24/7 Multi-Timezone Support</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Follow-the-sun support model</li>
                <li>• Local language assistance</li>
                <li>• Regional compliance experts</li>
                <li>• Emergency response teams</li>
                <li>• Business hours coverage globally</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: '#00A3AD' }} />
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#002B45' }}>Data Residency Options</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Regional data centers</li>
                <li>• Compliance with local data laws</li>
                <li>• Cross-border data transfer controls</li>
                <li>• Sovereign cloud options</li>
                <li>• Government security clearance</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#002B45' }}>Worldwide Implementation Success</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>50+</div>
                <div className="text-gray-600">Countries served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>25+</div>
                <div className="text-gray-600">Languages supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>99.9%</div>
                <div className="text-gray-600">Global uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>500+</div>
                <div className="text-gray-600">Healthcare organizations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ 
          background: 'linear-gradient(135deg, #002B45 0%, #005870 100%)',
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Compliance Program?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join 500+ healthcare organizations using TITANIS to stay ahead of regulatory changes 
            and maintain continuous compliance across all frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="text-white hover:opacity-90 text-lg px-8"
              style={{ backgroundColor: '#f25022' }}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
            <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="text-lg px-8 w-full sm:w-auto"
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white'
                }}
              >
                Access Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
            ))}
            <span className="ml-2 text-sm text-white/80">
              Trusted by 500+ healthcare organizations worldwide
            </span>
          </div>
          
          <p className="text-white/60 text-sm mt-6">
            *90-day ROI guarantee applies. Terms and conditions apply. Results may vary based on implementation scope.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-12 px-4 sm:px-8"
        style={{ backgroundColor: '#002B45', color: 'white' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">TITANIS™</h3>
              <p className="text-white/80 mb-4">
                The world's most advanced AI-powered GRC platform for healthcare organizations. 
                Serving clients worldwide with comprehensive compliance framework coverage.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="sm" 
                  className="text-white hover:opacity-90"
                  style={{ backgroundColor: '#00A3AD' }}
                >
                  Support Portal
                </Button>
                <Button 
                  size="sm" 
                  className="text-white hover:opacity-90"
                  style={{ backgroundColor: '#005870' }}
                >
                  API Documentation
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Integrations</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Access Platform</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Training</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Status</Link></li>
                <li><Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © 2024 Titanide Consulting. All rights reserved. TITANIS is a trademark of Titanide Consulting.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <Globe className="h-4 w-4 text-white/60" />
                <span className="text-white/60 text-sm">Available worldwide</span>
              </div>
            </div>
            <p className="text-white/40 text-xs mt-4 text-center">
              *Terms and conditions apply to all offers and guarantees. Results may vary based on implementation and organizational factors. 
              Additional fees may apply for premium features and custom integrations. Subject to contract terms.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TitanisGRC;