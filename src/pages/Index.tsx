import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Lock, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <div 
        className="py-16 px-8"
        style={{ 
          background: 'linear-gradient(135deg, #002B45, #005870)',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
      </div>

      {/* Services Preview Section */}
      <div 
        className="py-16 px-8"
        style={{ 
          backgroundColor: '#f4f4f4',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto max-w-6xl">
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
              Our Expertise
            </h2>
            <p className="text-lg max-w-3xl mx-auto mt-4" style={{ fontSize: '1.05rem' }}>
              We deliver fractional compliance leadership, executive-level advisory, and tailored risk-management solutions that keep your organization audit-ready and future-proof.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Shield className="h-8 w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Fractional Compliance Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                  Board-caliber CCO oversight—on demand. We embed seasoned compliance executives who govern policy, run audits, and brief leadership, giving you full-scale assurance without full-time payroll.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Database className="h-8 w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>EHR Remediation & UDS Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                  From data forensics to system re-engineering, we rescue corrupted EHRs, rebuild UDS datasets, and file error-free reports—protecting HRSA funding and 340B status in record time.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Lock className="h-8 w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Integrated Risk & Security Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                  ISO 27001, NIST, and HIPAA-aligned risk assessments translated into clear executive actions. We pinpoint vulnerabilities, prioritize fixes, and automate monitoring so you stay audit-ready and breach-proof year-round.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button 
                size="lg" 
                className="text-white hover:opacity-90"
                style={{ backgroundColor: '#002B45' }}
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div 
        className="py-12 px-8 text-white text-center"
        style={{ 
          backgroundColor: '#002837',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Compliance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ fontSize: '1.1rem' }}>
            Contact us today to discuss how we can help your organization achieve regulatory excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://titanide.zohobookings.com/#/3973691000005149002" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="text-white hover:opacity-90"
                style={{ backgroundColor: '#00A3AD' }}
              >
                Get Started
              </Button>
            </a>
            <a 
              href="https://www.titanideconsulting.com/Titanide%20Consulting%20Capabitlity%20Statement-Final.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download
            >
              <Button 
                size="lg" 
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Capability Statement
              </Button>
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
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
        `}
      </style>
    </div>
  );
};

export default Index;
