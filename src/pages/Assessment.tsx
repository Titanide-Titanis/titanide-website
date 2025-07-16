import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Shield, AlertTriangle, BarChart3, FileCheck, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Assessment = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Evaluate all major compliance areas including data privacy, cybersecurity, and regulatory requirements"
    },
    {
      icon: BarChart3,
      title: "Risk Scoring",
      description: "Get detailed risk scores and priority recommendations based on your responses"
    },
    {
      icon: FileCheck,
      title: "Actionable Report",
      description: "Receive a professional PDF report with specific action items and implementation timelines"
    },
    {
      icon: Clock,
      title: "Quick Assessment",
      description: "Complete the comprehensive evaluation in just 15-20 minutes"
    }
  ];

  const benefits = [
    "Identify compliance gaps before they become issues",
    "Prioritize your compliance investments",
    "Benchmark against industry standards",
    "Create a roadmap for compliance improvement",
    "Demonstrate due diligence to stakeholders"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link to="/resources/free-tools" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Free Tools
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Compliance Effectiveness Assessment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Evaluate your organization's compliance effectiveness across 10 critical domains. Our comprehensive assessment 
            identifies gaps, prioritizes risks, and provides actionable recommendations aligned with HIPAA, GDPR, HITECH, NIST, and ISO standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/assessment-start">
              <Button size="lg" className="px-8 py-6 text-lg">
                Start Assessment
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              View Sample Report
            </Button>
          </div>
        </div>

        {/* Assessment Domains */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">10 Critical Compliance Domains</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our assessment evaluates your organization across these essential compliance areas to provide comprehensive insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Governance & Leadership",
              "Policies & Procedures", 
              "Training & Awareness",
              "Monitoring & Auditing",
              "Reporting & Response",
              "Third-Party Risk",
              "Privacy & Data Protection",
              "Incident Management",
              "Regulatory Alignment",
              "Continuous Improvement"
            ].map((domain, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-2">
                  <div className="text-sm font-medium text-muted-foreground">{domain}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Take Our Assessment?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-primary mr-2" />
              <span className="font-semibold">Trusted by 500+ Organizations</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Join leading companies who have used our assessment to strengthen their compliance programs and reduce risk exposure.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Found Critical Gaps</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">87%</div>
                <div className="text-sm text-muted-foreground">Improved Compliance Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="text-center bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-12">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Don't Wait for a Compliance Crisis</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Regulatory penalties can cost millions and damage your reputation. Take our assessment today to identify and address 
              compliance gaps before they become critical issues.
            </p>
            <Link to="/assessment-start">
              <Button size="lg" className="px-12 py-6 text-lg">
                Begin Your Assessment Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Assessment;