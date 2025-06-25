import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <div 
        className="text-white py-16 px-8 text-center"
        style={{ 
          background: 'linear-gradient(135deg, #002B45, #005870)',
          animation: 'fadeIn 1.5s ease-out'
        }}
      >
        <div className="container mx-auto">
          <h1 
            className="font-bold mb-4 text-white"
            style={{ 
              fontSize: '2.8rem',
              animation: 'slideInDown 1s ease-out'
            }}
          >
            TITANIDE CONSULTING GROUP
          </h1>
          <p 
            className="max-w-3xl mx-auto"
            style={{ 
              fontSize: '1.2rem',
              animation: 'slideInUp 1.2s ease-out'
            }}
          >
            Delivering regulatory compliance solutions for your competitive advantage
          </p>
          <div className="flex justify-center mt-8">
            <Link to="/services">
              <Button 
                size="lg" 
                className="text-white hover:opacity-90"
                style={{ backgroundColor: '#00A3AD' }}
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
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
              We specialize in regulatory compliance management, risk assessment, and strategic advisory services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Shield className="h-8 w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Compliance Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                  Comprehensive regulatory compliance frameworks tailored to your industry and organizational needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Users className="h-8 w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Training & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                  Build compliance capability within your organization through customized training programs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#eaf6f8' }}>
                  <Award className="h-8 w-8" style={{ color: '#005870' }} />
                </div>
                <CardTitle className="text-xl" style={{ color: '#002B45' }}>Strategic Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ color: '#1a1a1a', fontSize: '1.05rem' }}>
                  Expert guidance on complex regulatory matters and strategic compliance planning
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
          <Button 
            size="lg" 
            className="text-white hover:opacity-90"
            style={{ backgroundColor: '#00A3AD' }}
          >
            Get Started
          </Button>
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
