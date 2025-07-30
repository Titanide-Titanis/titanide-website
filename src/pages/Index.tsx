
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Lock, ArrowRight, Download, CheckCircle, Users, Star, Phone, Mail, FileText, Globe, Award, TrendingUp, Zap, Monitor, Building2, Briefcase, Sparkles, BarChart3, Brain, Clock, Target, Cpu } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen hero-gradient" style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* Header/Navigation */}
      <header 
        className="py-4 px-4 sm:px-8 sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
      >
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <div className="flex items-center space-x-2 animate-slideInLeft">
            <Building2 className="h-8 w-8 text-white" />
            <span className="text-white text-xl font-bold">TITANIDE™ CONSULTING</span>
          </div>
          <nav className="hidden md:flex space-x-8 animate-slideInRight">
            <a href="#services" className="text-white hover:text-cyan-200 transition-colors duration-300">Services</a>
            <a href="#solutions" className="text-white hover:text-cyan-200 transition-colors duration-300">Solutions</a>
            <a href="#about" className="text-white hover:text-cyan-200 transition-colors duration-300">About</a>
            <a href="#contact" className="text-white hover:text-cyan-200 transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden animate-fadeIn"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 animate-float" style={{ backgroundColor: '#00A3AD' }}></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 animate-float" style={{ backgroundColor: '#ffffff', animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left animate-slideInLeft">
              
              <h1 
                className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl animate-fadeIn animate-delay-200"
                style={{ 
                  lineHeight: '1.1'
                }}
              >
                <span className="text-white drop-shadow-lg">
                  Your Partner for Global Healthcare Compliance & Next-Gen Digital Solutions
                </span>
              </h1>
              
              {/* Live metrics counter */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-8 animate-fadeIn animate-delay-300">
                <div className="text-center p-4 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                  <div className="text-xl sm:text-2xl font-bold text-white">100+</div>
                  <div className="text-xs sm:text-xs text-white/80">Organizations Served</div>
                </div>
                <div className="text-center p-4 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                  <div className="text-xl sm:text-2xl font-bold text-white">95%+</div>
                  <div className="text-xs sm:text-xs text-white/80">Improve Regulatory Reporting Accuracy</div>
                </div>
                <div className="text-center p-4 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-pulse-glow">
                  <div className="text-xl sm:text-2xl font-bold text-white">80%+</div>
                  <div className="text-xs sm:text-xs text-white/80">Policy Adoption and Alignment</div>
                </div>
              </div>
              
              <div className="space-y-4 animate-fadeIn animate-delay-400">
                <p className="text-lg sm:text-xl text-white/90">
                  From fractional C-suite compliance support to intelligent GRC platforms <strong className="text-white">we deliver</strong> global, end-to-end risk management solutions.
                </p>
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <p className="font-semibold text-base sm:text-lg text-white">
                    "Designed for Compliance Leaders, by Compliance Leaders.​"
                  </p>
                  <p className="text-sm sm:text-base font-medium mt-2 text-white/80">
                    - Kelly Menefee Okpala, Founder & Fractional CCO
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-8">
                <a 
                  href="https://titanide.zohobookings.com/#/3973691000005149002" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="text-white hover:opacity-90 w-full sm:w-auto text-base sm:text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
                    style={{ backgroundColor: '#f25022' }}
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                  <a 
                    href="https://titanis.titanideconsulting.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 border-2 hover:shadow-lg transition-all duration-300 text-gray-900 hover:text-gray-900 bg-white"
                      style={{ borderColor: '#00A3AD' }}
                    >
                      <Cpu className="mr-2 h-5 w-5" />
                      Join TITANIS™ Beta—Shape the Future of Compliance
                    </Button>
                  </a>
              </div>
            </div>
            
            <div className="text-center order-first lg:order-last lg:text-right animate-slideInRight">
              <div className="relative animate-float">
                <img 
                  src="https://previewengine-accl.zoho.com/image/WD/9rk2kec3040c46c2e476f8905ede61724aef5?version=1.0&width=2046&height=1536"
                  alt="Kelly Menefee Okpala – Titanide Founder"
                  className="mx-auto lg:mx-0 rounded-full shadow-2xl w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 hover:scale-105 transition-transform duration-300"
                  style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    border: '4px solid #ffffff'
                  }}
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle" style={{ backgroundColor: '#f25022' }}>
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div 
        className="py-12 sm:py-16 px-4 sm:px-8 text-white"
        style={{ 
          backgroundColor: '#002B45'
        }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
            Why Choose Titanide Consulting Group?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="space-y-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Executive-Level Expertise</h3>
              <p className="text-white text-sm sm:text-base">
                Proven C-suite compliance leadership serving Fortune 500 companies.
              </p>
            </div>
            <div className="space-y-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Global Footprint</h3>
              <p className="text-white text-sm sm:text-base">
                Delivering localized expertise and 24/7 support to clients throughout the US and UK.
              </p>
            </div>
            <div className="space-y-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Smarter Compliance Starts with AI-Powered Solutions</h3>
              <p className="text-white text-sm sm:text-base">
                Leverage the power of TITANIS™ GRC and KJ Advisor—innovative tools for intelligent compliance management.
              </p>
            </div>
            <div className="space-y-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">90-Day ROI Guarantee*</h3>
              <p className="text-white text-sm sm:text-base">
                Guaranteed ROI within 90 days—or receive additional consulting at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Products Spotlight Section */}
      <div 
        id="digital-showcase"
        className="py-12 sm:py-16 px-4 sm:px-8 relative"
        style={{ 
          background: 'linear-gradient(135deg, #002B45 0%, #005870 50%, #00A3AD 100%)'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2 px-6 py-3 rounded-full border-2 border-white/20 bg-white/10">
                <Brain className="h-6 w-6 text-white" />
                <span className="text-white font-bold text-lg">Your Gateway to Digital Innovation</span>
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Setting the Standard: The Industry's First AI-Powered Platforms
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Reimagine compliance with advanced AI solutions, relied on by healthcare organizations across the globe.
            </p>
            
            {/* Live platform metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 mb-8">
              <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99.95%</div>
                <div className="text-sm text-white/80">Platform Uptime</div>
                <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                  <div className="w-4/5 h-1 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3,200+</div>
                <div className="text-sm text-white/80">Audits Completed:</div>
                <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                  <div className="w-full h-1 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">7,500+</div>
                <div className="text-sm text-white/80">Compliance Issues Resolved:</div>
                <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                  <div className="w-full h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">120+</div>
                <div className="text-sm text-white/80">Active Clients:</div>
                <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                  <div className="w-4/5 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Beta Context */}
            <div className="text-center mt-6 mb-8">
              <p className="text-white/70 text-sm max-w-3xl mx-auto">
                Note: TITANIS™ is currently in beta. The metrics shown are based on early access organizations and may evolve as we expand platform availability.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* TITANIS GRC Platform */}
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden group">
              <div className="relative">
                <div className="p-10 pt-4" style={{ background: 'linear-gradient(135deg, #002B45 0%, #005870 100%)' }}>
                  <div className="mt-4">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#00A3AD' }}>
                        <Cpu className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">TITANIS™</h4>
                        <p className="text-white/90">Beta Release: Next-Gen GRC Platform</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                        <span>90-day ROI guarantee</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                        <span>Real-time compliance monitoring</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                        <span>Automated workflow management</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                        <span>From FQHCs to Fortune 500s, our solutions drive results for organizations of every size.</span>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <a 
                        href="https://titanis.titanideconsulting.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full text-white hover:opacity-90 font-medium py-3 px-6" style={{ backgroundColor: '#f25022' }}>
                          <Target className="mr-2 h-4 w-4" />
                          Join Beta Program
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* KJ Advisor */}
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden group">
              <div className="relative">
                <div className="p-10 pt-4" style={{ background: 'linear-gradient(135deg, #00A3AD 0%, #002B45 100%)' }}>
                  <div className="mt-4">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#005870' }}>
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">KJ Advisor™</h4>
                        <p className="text-white/90">Your Executive Companion</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                        <span>24/7 AI compliance expertise</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                        <span>Instant regulatory guidance</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                        <span>Strategic insights & recommendations</span>
                      </div>
                      <div className="flex items-center text-white/90">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-400" />
                        <span>Executive-level decision support</span>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <a 
                        href="/solutions/digital-products/kj-advisor"
                        className="block"
                      >
                        <Button className="w-full text-white hover:opacity-90 font-medium py-3 px-6" style={{ backgroundColor: '#f25022' }}>
                          <Cpu className="mr-2 h-4 w-4" />
                          Try AI Chat
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Technology Integrations */}
          <div className="text-center">
            <p className="text-white/80 mb-4">TITANIS™ delivers everything compliance leaders need—centralized control, powerful automation, actionable insights, and the flexibility to support any healthcare organization. Rapid Deployment with Minimal Setup, Scalable for Any Organization</p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm">Audit & Incident Management</div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm">Unified Dashboard</div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm">Risk Management & Compliance Automation</div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm">Policy Management</div>
              <div className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm">Advanced Analytics & Reporting and much more!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Certifications & Trust Indicators */}
      <div 
        className="py-8 sm:py-12 px-4 sm:px-8"
        style={{ 
          backgroundColor: '#f8f9fa'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#002B45' }}>
              🏆 Industry Recognition & Security Certifications
            </h3>
            <p className="text-gray-600">Trusted by Fortune 500 companies worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <Award className="h-8 w-8 mx-auto mb-2 animate-pulse" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>SOC 2 Type II</p>
            </div>
            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <Shield className="h-8 w-8 mx-auto mb-2 animate-pulse" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>HIPAA Compliant</p>
            </div>
            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <Lock className="h-8 w-8 mx-auto mb-2 animate-pulse" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>ISO 27001</p>
            </div>
            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <Building2 className="h-8 w-8 mx-auto mb-2 animate-pulse" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>GDPR Ready</p>
            </div>
            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 animate-pulse" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>FDA 21 CFR Part 11</p>
            </div>
            <div className="text-center p-4 hover:scale-105 transition-transform duration-300">
              <Briefcase className="h-8 w-8 mx-auto mb-2 animate-pulse" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>Fortune 500 Trusted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Solutions Preview Section */}
      <div 
        id="services"
        className="py-12 sm:py-16 px-4 sm:px-8"
        style={{ 
          backgroundColor: '#f4f4f4',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 
              className="font-bold mb-4 text-2xl sm:text-3xl lg:text-4xl"
              style={{ 
                color: '#003f5c',
                borderLeft: '5px solid #00A3AD',
                paddingLeft: '1rem',
                display: 'inline-block'
              }}
            >
              How We Help You Succeed
            </h2>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mt-4 px-4">
              We deliver specialized compliance solutions that protect your organization while driving competitive advantage.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8" style={{ color: '#002B45' }}>
              Our Services
            </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-4 sm:p-6">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-base sm:text-lg" style={{ color: '#002B45' }}>Fractional Compliance Leadership</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <CardDescription className="text-sm sm:text-base" style={{ color: '#1a1a1a' }}>
                  Executive-level oversight to lead audits, mitigate risk, and strengthen compliance infrastructure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-4 sm:p-6">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Lock className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-base sm:text-lg" style={{ color: '#002B45' }}>Healthcare & HIPAA Advisory</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <CardDescription className="text-sm sm:text-base" style={{ color: '#1a1a1a' }}>
                  Integrated strategies to ensure data security, system alignment, and regulatory excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-4 sm:p-6">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Database className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-base sm:text-lg" style={{ color: '#002B45' }}>IT Governance & Telecom Strategy</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <CardDescription className="text-sm sm:text-base" style={{ color: '#1a1a1a' }}>
                  Optimize vendor ecosystems and safeguard digital infrastructure through tailored governance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
              <CardHeader className="p-4 sm:p-6">
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-base sm:text-lg" style={{ color: '#002B45' }}>Business Continuity Engineering</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <CardDescription className="text-sm sm:text-base" style={{ color: '#1a1a1a' }}>
                  Build organizational resilience with tested response frameworks and secure operational continuity.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

            <div className="text-center mt-8">
              <a 
                href="/services"
              >
                <Button 
                  size="lg" 
                  className="text-white hover:opacity-90 w-full sm:w-auto"
                  style={{ backgroundColor: '#002B45' }}
                >
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Bragging Rights Section */}
          <div className="mb-12 p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(0, 43, 69, 0.05) 0%, rgba(0, 163, 173, 0.05) 100%)', border: '2px solid rgba(0, 163, 173, 0.1)' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
                🚀 Join our growing community of early adopters and help shape the future of compliance innovation!
              </h3>
              <p className="text-lg" style={{ color: '#005870' }}>
                Experience the latest in AI-powered compliance management—now available in beta
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold mb-2" style={{ color: '#f25022' }}>85%</div>
                <div className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Compliance Time Reduction</div>
                <div className="text-sm" style={{ color: '#005870' }}>AI automation eliminates manual processes</div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                  <div className="w-4/5 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>$2.3M</div>
                <div className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Average Annual Savings</div>
                <div className="text-sm" style={{ color: '#005870' }}>Cost reduction through intelligent automation</div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                  <div className="w-full h-2 bg-teal-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold mb-2" style={{ color: '#002B45' }}>24/7</div>
                <div className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>AI-Powered Support</div>
                <div className="text-sm" style={{ color: '#005870' }}>Instant expert guidance when you need it</div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                  <div className="w-full h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(0, 43, 69, 0.05)' }}>
                <h4 className="text-lg font-bold mb-3" style={{ color: '#002B45' }}>🏆 Industry Awards & Recognition</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#005870' }}>
                  <li>• Healthcare Innovation Award 2024</li>
                  <li>• AI Excellence in Compliance Technology</li>
                  <li>• Best GRC Platform - TechReview 2024</li>
                  <li>• Top 10 Compliance Solutions Provider</li>
                </ul>
              </div>
              
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'rgba(0, 163, 173, 0.05)' }}>
                <h4 className="text-lg font-bold mb-3" style={{ color: '#002B45' }}>⚡ Technology Firsts</h4>
                <ul className="space-y-2 text-sm" style={{ color: '#005870' }}>
                  <li>• First AI-powered fractional CCO platform</li>
                  <li>• Real-time compliance monitoring at scale</li>
                  <li>• Predictive risk assessment algorithms</li>
                  <li>• Automated regulatory change management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Traditional Solutions Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8" style={{ color: '#002B45' }}>
              Traditional Solutions & Services
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
                <CardHeader className="p-4 sm:p-6">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                    <Users className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#005870' }} />
                  </div>
                  <CardTitle className="text-base sm:text-lg" style={{ color: '#002B45' }}>Medical Staffing (UK)</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base" style={{ color: '#1a1a1a' }}>
                    Comprehensive healthcare personnel solutions through our UK division, Michadrian Healthcare Services.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
                <CardHeader className="p-4 sm:p-6">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#005870' }} />
                  </div>
                  <CardTitle className="text-base sm:text-lg" style={{ color: '#002B45' }}>Fractional Compliance</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base" style={{ color: '#1a1a1a' }}>
                    Executive-level compliance leadership and regulatory expertise without full-time executive costs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
                <CardHeader className="p-4 sm:p-6">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                    <FileText className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: '#005870' }} />
                  </div>
                  <CardTitle className="text-base sm:text-lg" style={{ color: '#002B45' }}>Risk Management</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base" style={{ color: '#1a1a1a' }}>
                    Strategic risk assessment and management solutions to protect your organization and ensure operational excellence.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <a 
                href="/solutions"
              >
                <Button 
                  size="lg" 
                  className="text-white hover:opacity-90 w-full sm:w-auto"
                  style={{ backgroundColor: '#002B45' }}
                >
                  View All Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ROI & Success Metrics Section */}
      <div 
        className="py-12 sm:py-16 px-4 sm:px-8 text-white"
        style={{ 
          background: 'linear-gradient(135deg, #002B45 0%, #005870 100%)'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Proven Results & ROI Guarantee
            </h2>
            <p className="text-white text-base sm:text-lg max-w-3xl mx-auto">
              Our clients see measurable improvements within 90 days, backed by our industry-first ROI guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#00A3AD' }}>90%</div>
              <p className="text-white font-medium">Compliance Score Improvement</p>
              <p className="text-gray-300 text-sm">Average within 6 months</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#00A3AD' }}>$2.4M</div>
              <p className="text-white font-medium">Average Cost Savings</p>
              <p className="text-gray-300 text-sm">Per year for mid-size orgs</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#00A3AD' }}>98%</div>
              <p className="text-white font-medium">Client Retention Rate</p>
              <p className="text-gray-300 text-sm">Long-term partnerships</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#00A3AD' }}>24/7</div>
              <p className="text-white font-medium">Global Support</p>
              <p className="text-gray-300 text-sm">US & UK coverage</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 163, 173, 0.1)', border: '1px solid #00A3AD' }}>
              <TrendingUp className="h-6 w-6 text-white mr-3" />
              <span className="text-white font-medium">90-Day ROI Guarantee or Additional Consulting at No Charge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials with Digital Focus */}
      <div 
        id="testimonials"
        className="py-12 sm:py-16 px-4 sm:px-8"
        style={{ 
          backgroundColor: '#ffffff'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 
              className="font-bold mb-4 text-2xl sm:text-3xl lg:text-4xl"
              style={{ 
                color: '#003f5c'
              }}
            >
              💬 Client Success Stories & Digital Transformation
            </h2>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-current animate-pulse" style={{ color: '#f25022' }} />
              ))}
            </div>
            <p className="text-lg" style={{ color: '#005870' }}>
              Real results from organizations transformed by our AI-powered solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Digital Transformation Story */}
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-transparent hover:border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                    ))}
                  </div>
                  <div className="px-2 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#00A3AD' }}>
                    AI Platform
                  </div>
                </div>
                <p className="italic mb-4 text-gray-700 text-sm">
                  "TITANIS AI reduced our compliance workload by 85%. What used to take weeks now happens in hours. The ROI was immediate."
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs" style={{ color: '#005870' }}>
                    <BarChart3 className="h-3 w-3 mr-2" />
                    <span>85% time reduction</span>
                  </div>
                  <div className="flex items-center text-xs" style={{ color: '#005870' }}>
                    <TrendingUp className="h-3 w-3 mr-2" />
                    <span>$1.8M annual savings</span>
                  </div>
                </div>
                <div className="font-semibold text-sm" style={{ color: '#002B45' }}>
                  CCO, Fortune 500 Healthcare System
                </div>
              </CardContent>
            </Card>

            {/* KJ Advisor Success Story */}
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-transparent hover:border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                    ))}
                  </div>
                  <div className="px-2 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#f25022' }}>
                    AI Advisor
                  </div>
                </div>
                <p className="italic mb-4 text-gray-700 text-sm">
                  "KJ Advisor is like having a fractional CCO available 24/7. Instant expert guidance transformed our decision-making process."
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs" style={{ color: '#005870' }}>
                    <Clock className="h-3 w-3 mr-2" />
                    <span>24/7 expert access</span>
                  </div>
                  <div className="flex items-center text-xs" style={{ color: '#005870' }}>
                    <span>90% faster decisions</span>
                  </div>
                </div>
                <div className="font-semibold text-sm" style={{ color: '#002B45' }}>
                  Compliance Director, Regional Medical Network
                </div>
              </CardContent>
            </Card>

            {/* Traditional Excellence */}
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                  ))}
                </div>
                <p className="italic mb-4 text-gray-700 text-sm">
                  "Kelly's strategic approach and regulatory expertise transformed our compliance from reactive to proactive excellence."
                </p>
                <div className="font-semibold text-sm" style={{ color: '#002B45' }}>
                  Chief Legal Officer, Nova Medical Centers
                </div>
              </CardContent>
            </Card>

            {/* ROI Success */}
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-transparent hover:border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                    ))}
                  </div>
                  <div className="px-2 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#f25022' }}>
                    ROI Proven
                  </div>
                </div>
                <p className="italic mb-4 text-gray-700 text-sm">
                  "Digital transformation delivered exactly what was promised - 90-day ROI with sustainable long-term improvements."
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs" style={{ color: '#005870' }}>
                    <Target className="h-3 w-3 mr-2" />
                    <span>90-day ROI achieved</span>
                  </div>
                  <div className="flex items-center text-xs" style={{ color: '#005870' }}>
                    <TrendingUp className="h-3 w-3 mr-2" />
                    <span>Ongoing efficiency gains</span>
                  </div>
                </div>
                <div className="font-semibold text-sm" style={{ color: '#002B45' }}>
                  CFO, Multi-Facility Health System
                </div>
              </CardContent>
            </Card>

            {/* International Success */}
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                    ))}
                  </div>
                  <div className="px-2 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#002B45' }}>
                    UK Success
                  </div>
                </div>
                <p className="italic mb-4 text-gray-700 text-sm">
                  "Michadrian Healthcare Services delivered exceptional staffing solutions that enhanced our operational efficiency."
                </p>
                <div className="font-semibold text-sm" style={{ color: '#002B45' }}>
                  Operations Manager, NHS Trust
                </div>
              </CardContent>
            </Card>

            {/* Technology Excellence */}
            <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                  ))}
                </div>
                <p className="italic mb-4 text-gray-700 text-sm">
                  "Technical expertise and strategic vision transformed our IT operations and security compliance framework."
                </p>
                <div className="font-semibold text-sm" style={{ color: '#002B45' }}>
                  CTO, Healthcare Technology Firm
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call-to-action for testimonials */}
          <div className="text-center mt-12">
            <div className="p-6 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(0, 43, 69, 0.05) 0%, rgba(0, 163, 173, 0.05) 100%)', border: '2px solid rgba(0, 163, 173, 0.1)' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#002B45' }}>
                Ready to Join Our Success Stories?
              </h3>
              <p className="mb-4" style={{ color: '#005870' }}>
                See how our AI-powered solutions can transform your compliance operations
              </p>
              <Button 
                className="text-white hover:opacity-90"
                style={{ backgroundColor: '#f25022' }}
                onClick={() => document.getElementById('digital-showcase')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Brain className="mr-2 h-4 w-4" />
                Explore AI Platforms
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Contact/CTA Section */}
      <div 
        id="contact"
        className="py-12 sm:py-16 px-4 sm:px-8 text-white text-center relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #002837 0%, #002B45 50%, #005870 100%)',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10 animate-float" style={{ backgroundColor: '#00A3AD' }}></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full opacity-10 animate-float" style={{ backgroundColor: '#f25022', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full opacity-10 animate-float" style={{ backgroundColor: '#00A3AD', animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-white mr-3 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Unlock the Future of Compliance—Are You Ready?
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto text-white">
            Join leading organizations worldwide leveraging our AI-powered platforms, expert consulting, and end-to-end compliance solutions for a competitive advantage.
          </p>
          
          {/* Enhanced contact grid with urgency */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" style={{ color: '#00A3AD' }} />
              </div>
              <h3 className="font-bold text-white mb-3">Connect with Us</h3>
              <p className="text-white text-lg">1+ 832-613-0619</p>
              <p className="text-white/80 text-sm">Speak with an Expert Today</p>
            </div>
            
            <a 
              href="mailto:info@titanideconsulting.com"
              className="block p-8 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" style={{ color: '#00A3AD' }} />
              </div>
              <h3 className="font-bold text-white mb-3">Email Us</h3>
              <p className="text-white/80 text-sm">Click to send us an email</p>
            </a>
            
            <a 
              href="https://titanis.titanideconsulting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" style={{ color: '#00A3AD' }} />
              </div>
              <h3 className="font-bold text-white mb-3">Try AI Demo</h3>
              <p className="text-white text-lg">Free Platform Tour</p>
              <p className="text-white/80 text-sm">See results in real-time</p>
            </a>
          </div>

          {/* Urgency indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-center">
            <div className="p-6 rounded-lg bg-white/5">
              <div className="text-xl font-bold text-white">⏱️ Limited Time</div>
              <div className="text-sm text-white/80">Free assessment worth $5,000</div>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <div className="text-xl font-bold text-white">🎯 Guaranteed</div>
              <div className="text-sm text-white/80">90-day ROI*</div>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <div className="text-xl font-bold text-white">Beta Access</div>
              <div className="text-sm text-white/80">Limited beta access available - limited slots</div>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="https://titanide.zohobookings.com/#/3973691000005149002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto group"
            >
              <Button 
                size="lg" 
                className="text-white hover:opacity-90 w-full sm:w-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300 animate-pulse"
                style={{ backgroundColor: '#f25022' }}
              >
                <Clock className="mr-2 h-5 w-5" />
                Schedule Discovery Call (Free)
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
            
            <a 
              href="https://titanis.titanideconsulting.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-white text-gray-900 bg-white hover:bg-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <Target className="mr-2 h-5 w-5" />
                Try AI Platform Demo
              </Button>
            </a>
            
            <a 
              href="https://www.titanideconsulting.com/Titanide%20Consulting%20Capabitlity%20Statement-Final.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-white text-gray-900 bg-white hover:bg-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Capability Statement
              </Button>
            </a>
          </div>
          
          {/* Social proof footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/80 text-sm">
              Discover why compliance leaders trust Titanide for unrivaled expertise and results.
            </p>
          </div>
        </div>
      </div>

      {/* KJ Advisor Floating Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a 
          href="https://chatgpt.com/g/g-67ff5bc7e0a48191bc849e5aa3a917ad-kj-advisor-the-executive-companion"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <Button 
            className="text-white hover:opacity-90 shadow-lg text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-3"
            style={{ backgroundColor: '#002B45' }}
          >
            Launch KJ Advisor™
          </Button>
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div 
              className="text-white text-xs sm:text-sm p-2 sm:p-3 rounded-lg shadow-lg max-w-48 sm:max-w-60"
              style={{ backgroundColor: '#002B45' }}
            >
              KJ Advisor™ serves as your AI-driven executive ally, providing actionable compliance strategies and instant support.
            </div>
          </div>
        </a>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0, -10px, 0); }
          70% { transform: translate3d(0, -5px, 0); }
          90% { transform: translate3d(0, -2px, 0); }
        }
        html {
          scroll-behavior: smooth;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        `}
      </style>
    </div>
  );
};

export default Index;
