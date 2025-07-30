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
  Lock,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ExternalLink
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

  const faqs = [
    {
      question: "How quickly can TITANIS be implemented?",
      answer: "Most healthcare organizations are operational within 30-45 days, with full deployment completed in 60-90 days depending on system complexity and integration requirements."
    },
    {
      question: "Does TITANIS integrate with our existing EHR systems?",
      answer: "Yes, TITANIS offers pre-built connectors for 200+ healthcare systems including Epic, Cerner, Allscripts, and custom EHR solutions through our robust API framework."
    },
    {
      question: "What compliance frameworks does TITANIS support?",
      answer: "TITANIS supports HIPAA, SOX, HITECH, ISO 27001, GDPR, PCI DSS, and custom frameworks. Our AI continuously adapts to regulatory changes across all supported frameworks."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 90-day ROI guarantee. If you don't see measurable compliance improvements within 90 days, we'll provide a full refund. *Terms and conditions apply."
    },
    {
      question: "What kind of support is included?",
      answer: "24/7 technical support, dedicated customer success manager, quarterly business reviews, regulatory update briefings, and access to our compliance expert network."
    },
    {
      question: "How does pricing work for multi-location organizations?",
      answer: "Enterprise pricing scales with your organization size and includes all locations. Contact us for custom pricing based on your specific requirements and compliance scope."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <header 
        className="py-4 sm:py-6 px-4 sm:px-8 sticky top-0 z-50 bg-primary shadow-md"
      >
        <div className="container mx-auto max-w-6xl flex justify-center items-center">
          <div className="text-center">
              <h1 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-1 sm:mb-2"
                style={{ 
                  animation: 'slideInLeft 1.2s ease-out, fadeIn 1.5s ease-out',
                  letterSpacing: '0.05em'
                }}
              >
                TITANIS™
              </h1>
              <p 
                className="text-xs sm:text-sm lg:text-base text-primary-foreground/90"
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
        className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--background)) 100%)',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1" style={{ animation: 'slideInLeft 1.2s ease-out' }}>
              <div className="mb-4 sm:mb-6">
                <span 
                  className="inline-flex items-center rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-accent text-accent-foreground"
                >
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  TITANIS GRC Platform
                </span>
              </div>
              <h1 
                className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary"
                style={{ 
                  lineHeight: '1.1'
                }}
              >
                The Future of Healthcare
                <span className="block sm:inline text-accent"> Compliance</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-secondary">
                AI-powered GRC platform serving healthcare organizations worldwide. Covers HIPAA, SOX, HITECH, 
                ISO 27001, GDPR, and custom frameworks with intelligent automation for audit management, 
                risk assessment, and continuous compliance monitoring.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-center">
                  {stats.slice(0,2).map((stat, index) => (
                    <div key={index} className="space-y-1">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  variant="cta"
                  className="text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                >
                  <PlayCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Watch Demo
                </Button>
                <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="text-sm sm:text-lg px-6 sm:px-8 w-full"
                  >
                    Access Platform
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-1 mt-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-cta" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground text-center">4.9/5 from 500+ healthcare organizations</span>
              </div>
            </div>
            
            <div className="text-center order-1 lg:order-2 mb-6 lg:mb-0" style={{ animation: 'slideInRight 1.2s ease-out' }}>
              <div 
                className="mx-auto bg-white rounded-2xl shadow-2xl p-4 sm:p-6 max-w-sm sm:max-w-md cursor-pointer hover:shadow-3xl transition-all duration-300 group"
                style={{ border: '3px solid #00A3AD', animation: 'float 3s ease-in-out infinite' }}
              >
                <div className="mb-3 sm:mb-4">
                  <Monitor className="h-12 w-12 sm:h-16 sm:w-16 mx-auto group-hover:scale-110 transition-transform duration-300" style={{ color: '#002B45' }} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#002B45' }}>
                  Live Compliance Dashboard
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Real-time visibility into your compliance posture
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#eaf6f8' }}>
                    <span className="text-xs sm:text-sm">HIPAA Compliance</span>
                    <div className="flex items-center">
                      <div className="w-16 sm:w-20 h-2 bg-gray-200 rounded mr-2">
                        <div className="h-2 rounded transition-all duration-1000" style={{ backgroundColor: '#00A3AD', width: '98.7%', animation: 'progressFill 2s ease-out' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold" style={{ color: '#00A3AD' }}>98.7%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#eaf6f8' }}>
                    <span className="text-xs sm:text-sm">Risk Score</span>
                    <span className="text-xs sm:text-sm font-semibold flex items-center" style={{ color: '#00A3AD' }}>
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#00A3AD', animation: 'pulse 2s infinite' }}></div>
                      Low
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#eaf6f8' }}>
                    <span className="text-xs sm:text-sm">Next Audit</span>
                    <span className="text-xs sm:text-sm font-semibold flex items-center" style={{ color: '#00A3AD' }}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Ready
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded hover:scale-105 transition-transform duration-200" style={{ backgroundColor: '#eaf6f8' }}>
                    <span className="text-xs sm:text-sm">Active Monitoring</span>
                    <span className="text-xs sm:text-sm font-semibold flex items-center" style={{ color: '#00A3AD' }}>
                      <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: '#f25022', animation: 'blink 1s infinite' }}></div>
                      Live
                    </span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 text-xs text-gray-500">
                  Click to interact with demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section 
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-gray-500 mb-4">TRUSTED BY LEADING HEALTHCARE ORGANIZATIONS</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center opacity-60">
              <div className="text-center">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" style={{ color: '#002B45' }} />
                <span className="text-xs sm:text-sm font-medium">Regional Health</span>
              </div>
              <div className="text-center">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" style={{ color: '#002B45' }} />
                <span className="text-xs sm:text-sm font-medium">Medical Centers</span>
              </div>
              <div className="text-center">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" style={{ color: '#002B45' }} />
                <span className="text-xs sm:text-sm font-medium">Healthcare Systems</span>
              </div>
              <div className="text-center">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" style={{ color: '#002B45' }} />
                <span className="text-xs sm:text-sm font-medium">Academic Hospitals</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#005870' }} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#002B45' }}>
                  {stat.number}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section 
        className="py-12 sm:py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#f4f4f4' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
                style={{ color: '#002B45' }}
              >
                Stop Playing Compliance Catch-Up
              </h2>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: '#f25022' }} />
                  <p className="text-sm sm:text-base text-gray-700">Manual compliance tracking leads to missed deadlines and violations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: '#f25022' }} />
                  <p className="text-sm sm:text-base text-gray-700">Reactive risk management exposes your organization to preventable issues</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: '#f25022' }} />
                  <p className="text-sm sm:text-base text-gray-700">Audit preparation consumes weeks of valuable resources</p>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: '#f25022' }} />
                  <p className="text-sm sm:text-base text-gray-700">Siloed compliance data makes oversight impossible</p>
                </div>
              </div>
            </div>
            <div>
              <h3 
                className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
                style={{ color: '#00A3AD' }}
              >
                TITANIS Changes Everything
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                  <p className="text-sm sm:text-base text-gray-700"><strong>Predictive Intelligence:</strong> AI anticipates compliance risks before they occur</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                  <p className="text-sm sm:text-base text-gray-700"><strong>Automated Workflows:</strong> Compliance tasks execute themselves</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                  <p className="text-sm sm:text-base text-gray-700"><strong>Continuous Monitoring:</strong> 24/7 oversight across all frameworks</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                  <p className="text-sm sm:text-base text-gray-700"><strong>Unified Dashboard:</strong> Complete visibility into compliance posture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#002B45' }}
            >
              Platform Capabilities That Transform Compliance
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Every feature engineered specifically for healthcare compliance challenges, 
              powered by AI and designed for operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0" style={{ border: '1px solid #e0e0e0' }}>
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform" style={{ color: '#00A3AD' }} />
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#f25022' }} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl" style={{ color: '#002B45' }}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base text-gray-600 mb-4">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: '#eaf6f8' }}>
                    <p className="text-xs sm:text-sm font-semibold" style={{ color: '#005870' }}>
                      ✓ {feature.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Guarantee Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8"
        style={{ 
          background: 'linear-gradient(135deg, #002B45 0%, #005870 100%)',
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8">
            <Award className="h-16 w-16 sm:h-20 sm:w-20 mx-auto mb-4 sm:mb-6" style={{ color: '#f25022' }} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              90-Day ROI Guarantee
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
              We're so confident in TITANIS that we guarantee measurable compliance improvements 
              within 90 days or your money back.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>75%</div>
              <p className="text-sm sm:text-base text-white/80">Faster Audit Prep</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>85%</div>
              <p className="text-sm sm:text-base text-white/80">Fewer Violations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>60%</div>
              <p className="text-sm sm:text-base text-white/80">Cost Reduction</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">What's Included in Our Guarantee:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                <span className="text-white/90">Measurable compliance score improvements</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                <span className="text-white/90">Documented time savings in audit prep</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                <span className="text-white/90">Reduced compliance overhead costs</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#00A3AD' }} />
                <span className="text-white/90">Enhanced regulatory readiness</span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/60 mb-6 sm:mb-8">
            *Terms and conditions apply. ROI guarantee valid for Enterprise plans with minimum 12-month commitment. 
            Measurements based on baseline compliance assessments conducted during onboarding period. 
            Results may vary based on organization size and implementation scope.
          </p>

          <Button 
            size="lg" 
            className="text-white hover:opacity-90 text-sm sm:text-lg px-6 sm:px-8"
            style={{ backgroundColor: '#f25022' }}
          >
            <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Claim Your Guarantee
          </Button>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#002B45' }}
            >
              Implementation & Onboarding
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Get up and running quickly with our proven implementation methodology 
              and dedicated success team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6" style={{ backgroundColor: '#eaf6f8' }}>
                <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#005870' }}>1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#002B45' }}>Discovery & Planning</h3>
              <p className="text-sm sm:text-base text-gray-600">Comprehensive assessment of your current compliance posture and requirements.</p>
              <div className="mt-4 text-xs sm:text-sm font-semibold" style={{ color: '#00A3AD' }}>Week 1-2</div>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6" style={{ backgroundColor: '#eaf6f8' }}>
                <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#005870' }}>2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#002B45' }}>System Integration</h3>
              <p className="text-sm sm:text-base text-gray-600">Connect TITANIS with your existing EHR, security, and business systems.</p>
              <div className="mt-4 text-xs sm:text-sm font-semibold" style={{ color: '#00A3AD' }}>Week 3-4</div>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6" style={{ backgroundColor: '#eaf6f8' }}>
                <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#005870' }}>3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#002B45' }}>Training & Testing</h3>
              <p className="text-sm sm:text-base text-gray-600">Comprehensive training for your team and thorough testing of all workflows.</p>
              <div className="mt-4 text-xs sm:text-sm font-semibold" style={{ color: '#00A3AD' }}>Week 5-6</div>
            </div>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6" style={{ backgroundColor: '#eaf6f8' }}>
                <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#005870' }}>4</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3" style={{ color: '#002B45' }}>Go-Live & Support</h3>
              <p className="text-sm sm:text-base text-gray-600">Full production launch with ongoing support and optimization.</p>
              <div className="mt-4 text-xs sm:text-sm font-semibold" style={{ color: '#00A3AD' }}>Week 7+</div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#002B45' }}>
                Dedicated Success Team Includes:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span>Implementation Manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span>Technical Integration Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span>Compliance Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#002B45' }}
            >
              Seamless Integration Capabilities
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              TITANIS connects with your existing healthcare technology stack through 
              pre-built connectors and robust APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#00A3AD' }}>
                200+ Pre-Built Connectors
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#eaf6f8' }}>
                    <Database className="h-6 w-6" style={{ color: '#005870' }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: '#002B45' }}>EHR Systems</h4>
                    <p className="text-sm sm:text-base text-gray-600">Epic, Cerner, Allscripts, athenahealth, NextGen, and 50+ more</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#eaf6f8' }}>
                    <Shield className="h-6 w-6" style={{ color: '#005870' }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: '#002B45' }}>Security Platforms</h4>
                    <p className="text-sm sm:text-base text-gray-600">CrowdStrike, Splunk, Microsoft Sentinel, Okta, Azure AD</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#eaf6f8' }}>
                    <BarChart3 className="h-6 w-6" style={{ color: '#005870' }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: '#002B45' }}>Business Systems</h4>
                    <p className="text-sm sm:text-base text-gray-600">ServiceNow, Jira, Slack, Microsoft Teams, Salesforce</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#002B45' }}>
                API-First Architecture
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-sm sm:text-base text-gray-700">RESTful APIs with comprehensive documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-sm sm:text-base text-gray-700">Real-time data synchronization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-sm sm:text-base text-gray-700">Webhook support for instant notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-sm sm:text-base text-gray-700">Custom field mapping and transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-sm sm:text-base text-gray-700">Enterprise-grade security and encryption</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0' }}>
                <p className="text-xs sm:text-sm font-semibold" style={{ color: '#005870' }}>
                  <span style={{ color: '#00A3AD' }}>✓</span> Average integration time: 2-3 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Certifications */}
      <section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#002B45' }}
            >
              Enterprise Security & Certifications
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              TITANIS meets the highest security standards with comprehensive certifications 
              and continuous compliance monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                <Shield className="h-8 w-8" style={{ color: '#005870' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#002B45' }}>SOC 2 Type II</h3>
              <p className="text-sm text-gray-600">Annually audited security, availability, and confidentiality controls</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                <Lock className="h-8 w-8" style={{ color: '#005870' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#002B45' }}>HITRUST CSF</h3>
              <p className="text-sm text-gray-600">Healthcare industry's gold standard for information protection</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                <Award className="h-8 w-8" style={{ color: '#005870' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#002B45' }}>ISO 27001</h3>
              <p className="text-sm text-gray-600">International standard for information security management</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                <Globe className="h-8 w-8" style={{ color: '#005870' }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#002B45' }}>GDPR Ready</h3>
              <p className="text-sm text-gray-600">Full compliance with European data protection regulations</p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{ color: '#002B45' }}>
              Additional Security Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                <span className="text-sm sm:text-base text-gray-700">End-to-end encryption</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                <span className="text-sm sm:text-base text-gray-700">Multi-factor authentication</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                <span className="text-sm sm:text-base text-gray-700">Role-based access controls</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                <span className="text-sm sm:text-base text-gray-700">Audit trail logging</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                <span className="text-sm sm:text-base text-gray-700">Regular penetration testing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5" style={{ color: '#00A3AD' }} />
                <span className="text-sm sm:text-base text-gray-700">24/7 security monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#002B45' }}
            >
              Customer Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Healthcare organizations worldwide trust TITANIS to transform their compliance operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                    ))}
                  </div>
                  <blockquote className="text-sm sm:text-base text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm sm:text-base" style={{ color: '#002B45' }}>
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{ color: '#002B45' }}>
              Measurable Results Across Organizations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>450+</div>
                <p className="text-sm sm:text-base text-gray-600">Healthcare Organizations</p>
                <p className="text-xs text-gray-500 mt-1">*Served globally across 6 continents</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>$2.3M</div>
                <p className="text-sm sm:text-base text-gray-600">Average Annual Savings</p>
                <p className="text-xs text-gray-500 mt-1">*Results vary by organization size</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>98.7%</div>
                <p className="text-sm sm:text-base text-gray-600">Customer Satisfaction</p>
                <p className="text-xs text-gray-500 mt-1">*Based on annual surveys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8"
        style={{ backgroundColor: '#f8f9fa' }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#002B45' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Get answers to common questions about TITANIS implementation and features.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <details className="group">
                  <summary className="cursor-pointer p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <h3 className="text-base sm:text-lg font-semibold pr-4" style={{ color: '#002B45' }}>
                      {faq.question}
                    </h3>
                    <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform flex-shrink-0" style={{ color: '#00A3AD' }} />
                  </summary>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worldwide Coverage */}
      <section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8"
        style={{ 
          background: 'linear-gradient(135deg, #005870 0%, #002B45 100%)',
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <Globe className="h-16 w-16 sm:h-20 sm:w-20 mx-auto mb-6" style={{ color: '#00A3AD' }} />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Worldwide Compliance Coverage
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto">
              TITANIS supports healthcare organizations globally with comprehensive framework coverage 
              and localized compliance expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">North America</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">HIPAA & HITECH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">SOX Compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">State-specific regulations</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">Europe</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">GDPR</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">ISO 27001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">Country-specific frameworks</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">Global Standards</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">ISO 27001/27002</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">NIST Framework</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">Custom frameworks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white/10 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Multi-Timezone Support & Local Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">24/7 global support coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">Regional compliance experts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">Local data residency options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5" style={{ color: '#00A3AD' }} />
                  <span className="text-white/90">Multi-language interface</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              style={{ color: '#002B45' }}
            >
              Transparent Pricing for Every Organization
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your organization's size and compliance requirements. 
              All plans include our core AI-powered features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Starter Plan */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl mb-2" style={{ color: '#002B45' }}>Starter</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>$2,999</div>
                <p className="text-xs sm:text-sm text-gray-500">per month</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Up to 500 employees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Core compliance frameworks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Basic reporting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Email support</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">*Subject to contract terms</p>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl mb-2" style={{ color: '#002B45' }}>Professional</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>$5,999</div>
                <p className="text-xs sm:text-sm text-gray-500">per month</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Up to 2,000 employees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Custom integrations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Phone support</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">*Additional fees may apply</p>
              </CardContent>
            </Card>

            {/* Enterprise Plan - Featured */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300 relative" style={{ borderColor: '#f25022' }}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-3 py-1 text-xs font-semibold text-white rounded-full" style={{ backgroundColor: '#f25022' }}>
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl mb-2" style={{ color: '#002B45' }}>Enterprise</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>$12,999</div>
                <p className="text-xs sm:text-sm text-gray-500">per month</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Up to 10,000 employees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>AI-powered insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Dedicated support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>ROI guarantee included</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">*Implementation timeline varies</p>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl mb-2" style={{ color: '#002B45' }}>Premium</CardTitle>
                <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#00A3AD' }}>$24,999</div>
                <p className="text-xs sm:text-sm text-gray-500">per month</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Up to 50,000 employees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>White-label options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Custom frameworks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Priority support</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">*Results may vary by implementation</p>
              </CardContent>
            </Card>

            {/* Enterprise Plus Plan */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl mb-2" style={{ color: '#002B45' }}>Enterprise+</CardTitle>
                <div className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#00A3AD' }}>Custom</div>
                <p className="text-xs sm:text-sm text-gray-500">pricing</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Unlimited employees</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>Full customization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>On-premise deployment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: '#00A3AD' }} />
                    <span>24/7 concierge support</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">*Terms and conditions apply</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#002B45' }}>
                All Plans Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span>Core AI features</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span>Regular updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span>Security certifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" style={{ color: '#00A3AD' }} />
                  <span>Training resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8"
        style={{ 
          background: 'linear-gradient(135deg, #002B45 0%, #005870 100%)',
          color: 'white'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Transform Your Compliance?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join 500+ healthcare organizations that trust TITANIS for their compliance operations. 
            Start your transformation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="text-white hover:opacity-90 text-sm sm:text-lg px-6 sm:px-8 w-full"
                style={{ backgroundColor: '#f25022' }}
              >
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Access TITANIS Platform
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-sm sm:text-lg px-6 sm:px-8 w-full"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Schedule Demo
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center text-white/80 text-sm sm:text-base">
            <div>
              <CheckCircle className="h-5 w-5 mx-auto mb-2" style={{ color: '#00A3AD' }} />
              <span>30-day free trial</span>
            </div>
            <div>
              <CheckCircle className="h-5 w-5 mx-auto mb-2" style={{ color: '#00A3AD' }} />
              <span>No setup fees</span>
            </div>
            <div>
              <CheckCircle className="h-5 w-5 mx-auto mb-2" style={{ color: '#00A3AD' }} />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-8" style={{ backgroundColor: '#002837', color: 'white' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">TITANIS</h3>
              <p className="text-sm sm:text-base text-white/80 mb-4 max-w-md">
                Titanide's Intelligent Governance, Risk & Compliance Platform. 
                Transforming healthcare compliance through AI-powered automation and intelligence.
              </p>
              <div className="flex space-x-4">
                <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2 text-sm sm:text-base">
                <Link to="/services" className="block text-white/80 hover:text-white transition-colors">Services</Link>
                <Link to="/about" className="block text-white/80 hover:text-white transition-colors">About</Link>
                <Link to="/resources" className="block text-white/80 hover:text-white transition-colors">Resources</Link>
                <Link to="/contact" className="block text-white/80 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-2 text-sm sm:text-base text-white/80">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-TITANIS</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@titanideconsulting.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Global Coverage</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-white/60">
                © 2024 Titanide Consulting. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link to="/legal" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/legal" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/legal" className="text-white/60 hover:text-white transition-colors">Legal</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TitanisGRC;