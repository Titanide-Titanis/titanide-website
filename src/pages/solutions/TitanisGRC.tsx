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
        className="py-4 px-4 sm:px-8 sticky top-0 z-50"
        style={{ 
          backgroundColor: '#002B45',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Titanide Consulting Group
          </Link>
          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-300">
              Support: <a href="https://support.titanideholdings.com/portal/en/home" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Portal</a> | <a href="mailto:support@titanideconsulting.com" className="text-white hover:underline">Email</a>
            </div>
            <Link to="/contact">
              <Button 
                className="text-white hover:opacity-90"
                style={{ backgroundColor: '#f25022' }}
              >
                Contact Us
              </Button>
            </Link>
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
                AI-powered GRC platform that transforms healthcare compliance from reactive burden 
                to predictive advantage. Automate audits, predict risks, and ensure regulatory readiness 
                with intelligent automation.
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

      {/* Testimonials Section */}
      <section 
        className="py-16 px-4 sm:px-8"
        style={{ backgroundColor: '#f4f4f4' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#002B45' }}
            >
              Proven Results from Healthcare Leaders
            </h2>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current mx-1" style={{ color: '#f25022' }} />
              ))}
              <span className="ml-3 text-lg" style={{ color: '#005870' }}>4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                    ))}
                  </div>
                  <p className="italic mb-4 text-gray-700">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold" style={{ color: '#002B45' }}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm" style={{ color: '#00A3AD' }}>
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Tiers */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#ffffff' }}>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative hover:shadow-xl transition-shadow bg-white" style={{ border: '1px solid #e0e0e0' }}>
              <CardHeader className="p-6">
                <CardTitle className="text-2xl" style={{ color: '#002B45' }}>Essentials</CardTitle>
                <CardDescription className="text-gray-600">Perfect for small practices and clinics</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold" style={{ color: '#002B45' }}>$299</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Core HIPAA compliance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Basic risk assessment tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Standard compliance reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Email support
                  </li>
                </ul>
                <Button 
                  className="w-full text-gray-700 hover:opacity-90"
                  style={{ backgroundColor: '#f4f4f4', border: '1px solid #ddd' }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow bg-white" style={{ border: '3px solid #00A3AD' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span 
                  className="px-4 py-1 rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: '#00A3AD' }}
                >
                  Most Popular
                </span>
              </div>
              <CardHeader className="p-6">
                <CardTitle className="text-2xl" style={{ color: '#002B45' }}>Professional</CardTitle>
                <CardDescription className="text-gray-600">Ideal for healthcare organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold" style={{ color: '#002B45' }}>$899</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    AI-powered workflow automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Predictive risk analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Executive compliance dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    API integrations included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Priority phone support
                  </li>
                </ul>
                <Button 
                  className="w-full text-white hover:opacity-90"
                  style={{ backgroundColor: '#f25022' }}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow bg-white" style={{ border: '1px solid #e0e0e0' }}>
              <CardHeader className="p-6">
                <CardTitle className="text-2xl" style={{ color: '#002B45' }}>Enterprise</CardTitle>
                <CardDescription className="text-gray-600">For large healthcare systems</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold" style={{ color: '#002B45' }}>Custom</span>
                  <span className="text-gray-500"> pricing</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Custom compliance frameworks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Advanced AI analytics & ML
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    Dedicated customer success manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    White-label deployment options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00A3AD' }} />
                    24/7 premium support
                  </li>
                </ul>
                <Button 
                  className="w-full text-white hover:opacity-90"
                  style={{ backgroundColor: '#002B45' }}
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 p-6 rounded-lg" style={{ backgroundColor: '#eaf6f8' }}>
            <p className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>
              🎯 ROI Guarantee: See measurable compliance improvements within 90 days or your money back
            </p>
            <p className="text-gray-600">
              Join 500+ healthcare organizations already transforming their compliance operations
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 px-4 sm:px-8 text-white"
        style={{ backgroundColor: '#002B45' }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transform Your Compliance Operations Today
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join 500+ healthcare organizations who've revolutionized their GRC operations with TITANIS. 
              Stop playing compliance catch-up and start leading with predictive intelligence.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30-Day</div>
                <div className="text-gray-200">Free Trial</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">90-Day</div>
                <div className="text-gray-200">ROI Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-200">Expert Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-white hover:opacity-90 text-lg px-8"
                style={{ backgroundColor: '#f25022' }}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Live Demo
              </Button>
              <a href="https://titanis.titanideconsulting.com/auth" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="text-gray-700 hover:opacity-90 text-lg px-8 bg-white"
                >
                  Access Platform
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            
            <p className="text-sm text-gray-300 mt-6">
              No credit card required • Full platform access • Expert onboarding included
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8" style={{ backgroundColor: '#f4f4f4', borderTop: '1px solid #e0e0e0' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#002B45' }}>
                Titanide Consulting Group
              </h3>
              <p className="text-gray-600 mb-4">
                Leading healthcare compliance and risk management solutions provider.
                Transforming GRC operations through intelligent automation.
              </p>
              <div className="flex items-center text-gray-600">
                <Globe className="w-4 h-4 mr-2" />
                <span>Serving healthcare organizations nationwide</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: '#002B45' }}>Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/solutions" className="hover:text-blue-600">All Solutions</Link></li>
                <li><Link to="/solutions/medical-staffing" className="hover:text-blue-600">Medical Staffing</Link></li>
                <li><Link to="/solutions/digital-products/kj-advisor" className="hover:text-blue-600">KJ Advisor</Link></li>
                <li><Link to="/solutions/digital-products/titanis" className="hover:text-blue-600">TITANIS GRC</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: '#002B45' }}>Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                <li><Link to="/legal" className="hover:text-blue-600">Legal</Link></li>
                <li><Link to="/resources" className="hover:text-blue-600">Resources</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Titanide Consulting Group. All rights reserved. | Healthcare GRC Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TitanisGRC;