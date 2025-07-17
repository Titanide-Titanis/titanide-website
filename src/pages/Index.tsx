
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Lock, ArrowRight, Download, CheckCircle, Users, Star, Phone, Mail } from "lucide-react";

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
                Full-Service Healthcare Compliance at a Fraction of the Cost
              </h1>
              <div className="space-y-4">
                <p className="text-lg sm:text-xl" style={{ color: '#005870' }}>
                  "Get fractional compliance support without the extensive search or long-term commitment."
                </p>
                <p className="font-semibold text-base sm:text-lg" style={{ color: '#002B45' }}>
                  - Kelly Menefee Okpala, Fractional CCO
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
            Why Choose Fractional Compliance Leadership?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Executive-Level Expertise</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Access C-suite compliance leadership without the full-time commitment or executive salary.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Immediate Impact</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Hit the ground running with proven strategies and immediate implementation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">Scalable Solutions</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Flexible engagement models that grow with your organization's needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
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

          <div className="text-center mt-8 sm:mt-12">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-4 sm:p-6">
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
                <p className="italic mb-4 text-gray-700 text-sm sm:text-base">
                  "Kelly is a wealth of knowledge. She consistently identifies what others overlook."
                </p>
                <div className="font-semibold text-sm sm:text-base" style={{ color: '#00A3AD' }}>
                  Director, TAN Healthcare
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
