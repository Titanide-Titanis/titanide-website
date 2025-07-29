
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Lock, ArrowRight, Download, CheckCircle, Users, Star, Phone, Mail, FileText, Globe, Award, TrendingUp, Zap, Monitor, Building2, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* Header/Navigation */}
      <header 
        className="py-4 px-4 sm:px-8 sticky top-0 z-50"
        style={{ 
          backgroundColor: '#002B45',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="py-12 sm:py-20 px-4 sm:px-8"
        style={{ 
          background: 'linear-gradient(135deg, #e2ded9 0%, #f4f4f4 100%)',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left" style={{ animation: 'slideInLeft 1.2s ease-out' }}>
              <h1 
                className="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl"
                style={{ 
                  color: '#002B45',
                  lineHeight: '1.1'
                }}
              >
                Global Healthcare Compliance & Digital Solutions Leader
              </h1>
              <div className="space-y-4">
                <p className="text-lg sm:text-xl" style={{ color: '#005870' }}>
                  From fractional compliance leadership to AI-powered GRC platforms, we deliver comprehensive solutions across the US and UK.
                </p>
                <p className="font-semibold text-base sm:text-lg" style={{ color: '#002B45' }}>
                  "Get fractional compliance support without the extensive search or long-term commitment."
                </p>
                <p className="text-sm sm:text-base font-medium" style={{ color: '#005870' }}>
                  - Kelly Menefee Okpala, Fractional CCO & Founder
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="https://titanide.zohobookings.com/#/3973691000005149002" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="text-white hover:opacity-90 w-full sm:w-auto text-base sm:text-lg px-6 py-3"
                    style={{ backgroundColor: '#f25022' }}
                  >
                    Schedule Your Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="text-center order-first lg:order-last lg:text-right" style={{ animation: 'slideInRight 1.2s ease-out' }}>
              <img 
                src="https://previewengine-accl.zoho.com/image/WD/9rk2kec3040c46c2e476f8905ede61724aef5?version=1.0&width=2046&height=1536"
                alt="Kelly Menefee Okpala – Titanide Founder"
                className="mx-auto lg:mx-0 rounded-full shadow-2xl w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '4px solid #00A3AD'
                }}
              />
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
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Executive-Level Expertise</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                C-suite compliance leadership with proven results across Fortune 500 companies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Global Presence</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Serving clients across the US and UK with localized expertise and 24/7 support.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">AI-Powered Solutions</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Cutting-edge TITANIS GRC platform and KJ Advisor for intelligent compliance management.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">90-Day ROI Guarantee</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Guaranteed return on investment within 90 days or receive additional consulting at no charge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Certifications & Recognition */}
      <div 
        className="py-8 sm:py-12 px-4 sm:px-8"
        style={{ 
          backgroundColor: '#f8f9fa'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#002B45' }}>
              Industry Recognition & Certifications
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            <div className="text-center p-4">
              <Award className="h-8 w-8 mx-auto mb-2" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>SOC 2 Type II</p>
            </div>
            <div className="text-center p-4">
              <Shield className="h-8 w-8 mx-auto mb-2" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>HIPAA Compliant</p>
            </div>
            <div className="text-center p-4">
              <Lock className="h-8 w-8 mx-auto mb-2" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>ISO 27001</p>
            </div>
            <div className="text-center p-4">
              <Building2 className="h-8 w-8 mx-auto mb-2" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>GDPR Ready</p>
            </div>
            <div className="text-center p-4">
              <CheckCircle className="h-8 w-8 mx-auto mb-2" style={{ color: '#00A3AD' }} />
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#002B45' }}>FDA 21 CFR Part 11</p>
            </div>
            <div className="text-center p-4">
              <Briefcase className="h-8 w-8 mx-auto mb-2" style={{ color: '#00A3AD' }} />
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

          {/* Digital Solutions Section */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8" style={{ color: '#002B45' }}>
              Digital Solutions & Platforms
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 overflow-hidden">
                <div className="p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, #002B45 0%, #005870 100%)' }}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#00A3AD' }}>
                      <Monitor className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">TITANIS GRC Platform</h4>
                  </div>
                  <p className="text-gray-200 mb-4">
                    AI-powered Governance, Risk & Compliance platform with 90-day ROI guarantee. Real-time monitoring, automated workflows, and comprehensive reporting.
                  </p>
                  <a 
                    href="/solutions/digital-products/titanis"
                    className="inline-flex items-center text-white hover:opacity-80 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 overflow-hidden">
                <div className="p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, #00A3AD 0%, #002B45 100%)' }}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#005870' }}>
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">KJ Advisor</h4>
                  </div>
                  <p className="text-gray-200 mb-4">
                    AI-powered executive partner providing instant access to compliance expertise, regulatory guidance, and strategic insights 24/7.
                  </p>
                  <a 
                    href="/solutions/digital-products/kj-advisor"
                    className="inline-flex items-center text-white hover:opacity-80 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>
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
            <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto">
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

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-current" style={{ color: '#f25022' }} />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                  ))}
                </div>
                <p className="italic mb-4 text-gray-700 text-sm sm:text-base">
                  "Kelly demonstrated an extraordinary ability to dissect complex regulatory frameworks and translate them into actionable strategies."
                </p>
                <div className="font-semibold text-sm sm:text-base" style={{ color: '#00A3AD' }}>
                  Chief Legal Officer, Nova Medical Centers
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                  ))}
                </div>
                <p className="italic mb-4 text-gray-700 text-sm sm:text-base">
                  "The TITANIS platform transformed our compliance operations. ROI was evident within 60 days."
                </p>
                <div className="font-semibold text-sm sm:text-base" style={{ color: '#00A3AD' }}>
                  Compliance Director, Regional Health System
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                  ))}
                </div>
                <p className="italic mb-4 text-gray-700 text-sm sm:text-base">
                  "Kelly's leadership in mission-critical projects enhanced IT system stability, risk management, and security compliance."
                </p>
                <div className="font-semibold text-sm sm:text-base" style={{ color: '#00A3AD' }}>
                  Business Systems Administrator, Novant Health
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#f25022' }} />
                  ))}
                </div>
                <p className="italic mb-4 text-gray-700 text-sm sm:text-base">
                  "Michadrian Healthcare Services provided exceptional staffing solutions for our UK operations."
                </p>
                <div className="font-semibold text-sm sm:text-base" style={{ color: '#00A3AD' }}>
                  Operations Manager, NHS Trust
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4 sm:p-6">
                <p className="italic mb-4 text-gray-700 text-sm sm:text-base">
                  "She brought a level of professionalism and technical expertise that transformed our telecom operations."
                </p>
                <div className="font-semibold text-sm sm:text-base" style={{ color: '#00A3AD' }}>
                  Director of Operations, TAS United
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4 sm:p-6">
                <p className="italic mb-4 text-gray-700 text-sm sm:text-base">
                  "Her guidance was instrumental in aligning our compliance program with federal guidelines."
                </p>
                <div className="font-semibold text-sm sm:text-base" style={{ color: '#00A3AD' }}>
                  Compliance Director, National Healthcare Network
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4 sm:p-6">
                <p className="italic mb-4 text-gray-700 text-sm sm:text-base">
                  "Working with Titanide transformed our approach to compliance—from reactive to proactive and strategic."
                </p>
                <div className="font-semibold text-sm sm:text-base" style={{ color: '#00A3AD' }}>
                  CEO, Regional Healthcare System
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact/CTA Section */}
      <div 
        id="contact"
        className="py-12 sm:py-16 px-4 sm:px-8 text-white text-center"
        style={{ 
          backgroundColor: '#002837',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">Let's Elevate Your Compliance Strategy</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto text-white">
            Partner with Titanide Consulting Group and gain access to expert-level guidance that moves your organization forward with confidence.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5" style={{ color: '#00A3AD' }} />
                <span className="text-base sm:text-lg text-white">832-735-8880</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5" style={{ color: '#00A3AD' }} />
                <span className="text-base sm:text-lg text-white">info@titanideconsulting.com</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-base sm:text-lg font-medium text-white">Ready to get started?</p>
              <p className="text-gray-300 text-sm sm:text-base">Schedule a discovery call or download our capability statement</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a 
              href="https://titanide.zohobookings.com/#/3973691000005149002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="text-white hover:opacity-90 w-full sm:w-auto"
                style={{ backgroundColor: '#00A3AD' }}
              >
                Schedule Your Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
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
                className="text-white hover:opacity-90 w-full sm:w-auto"
                style={{ backgroundColor: '#00A3AD' }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Capability Statement
              </Button>
            </a>
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
            Launch KJ Advisor
          </Button>
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div 
              className="text-white text-xs sm:text-sm p-2 sm:p-3 rounded-lg shadow-lg max-w-48 sm:max-w-60"
              style={{ backgroundColor: '#002B45' }}
            >
              KJ Advisor is your AI-powered executive partner—offering strategic compliance guidance and real-time solutions.
            </div>
          </div>
        </a>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        html {
          scroll-behavior: smooth;
        }
        `}
      </style>
    </div>
  );
};

export default Index;
