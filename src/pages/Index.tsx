
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            TITANICE CONSULTING GROUP
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Delivering regulatory compliance solutions for your competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in regulatory compliance management, risk assessment, and strategic advisory services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Compliance Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Comprehensive regulatory compliance frameworks tailored to your industry and organizational needs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Training & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Build compliance capability within your organization through customized training programs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Strategic Advisory</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Expert guidance on complex regulatory matters and strategic compliance planning
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Compliance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your organization achieve regulatory excellence
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
