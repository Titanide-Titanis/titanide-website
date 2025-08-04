
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Shield, AlertTriangle, BarChart3, FileCheck, Clock, Users, Building, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VendorRiskAssessment = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Vendor Evaluation",
      description: "Assess financial, operational, cybersecurity, and compliance risks across your entire vendor ecosystem"
    },
    {
      icon: BarChart3,
      title: "Smart Risk Scoring",
      description: "Get AI-powered risk scores that consider vendor criticality, service type, and regulatory requirements"
    },
    {
      icon: FileCheck,
      title: "Professional Reports",
      description: "Generate detailed vendor risk profiles with actionable recommendations and compliance mapping"
    },
    {
      icon: Clock,
      title: "Rapid Assessment",
      description: "Complete comprehensive vendor evaluations in 10-15 minutes per vendor"
    }
  ];

  const domains = [
    {
      title: "Financial & Operational Risk",
      description: "Evaluate vendor financial stability, business continuity, and operational resilience",
      icon: TrendingUp
    },
    {
      title: "Cybersecurity & Data Protection", 
      description: "Assess security certifications, data handling practices, and incident history",
      icon: Shield
    },
    {
      title: "Compliance & Regulatory",
      description: "Review regulatory alignment, audit results, and compliance frameworks",
      icon: FileCheck
    },
    {
      title: "Operational Dependencies",
      description: "Analyze SLAs, performance metrics, and business continuity planning",
      icon: Building
    },
    {
      title: "Due Diligence Documentation",
      description: "Verify contracts, insurance, references, and legal compliance",
      icon: Eye
    },
    {
      title: "Vendor Information & Criticality",
      description: "Classify vendor types, services provided, and business criticality levels",
      icon: Users
    }
  ];

  const benefits = [
    "Identify high-risk vendors before they impact operations",
    "Streamline vendor onboarding and periodic reviews", 
    "Demonstrate third-party risk management to auditors",
    "Prioritize remediation efforts based on risk scores",
    "Create defensible vendor risk documentation",
    "Align vendor management with regulatory requirements"
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
            <Building className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Interactive Vendor Risk Assessment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Evaluate and manage third-party risks with our comprehensive vendor assessment tool. 
            Assess financial stability, cybersecurity posture, compliance alignment, and operational dependencies 
            to make informed vendor management decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vendor-risk-assessment-start">
              <Button size="lg" className="px-8 py-6 text-lg">
                Start Vendor Assessment
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
            <h2 className="text-3xl font-bold mb-4">6 Critical Vendor Risk Domains</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our assessment evaluates vendors across these essential risk areas to provide comprehensive third-party risk insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <domain.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{domain.description}</CardDescription>
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
            <h2 className="text-3xl font-bold mb-6">Why Use Our Vendor Risk Assessment?</h2>
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
              <Building className="h-6 w-6 text-primary mr-2" />
              <span className="font-semibold">Vendor Risk Management Stats</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Third-party breaches account for 29% of all data incidents. Effective vendor risk management 
              is critical for organizational security and compliance.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">68%</div>
                <div className="text-sm text-muted-foreground">Organizations Impacted by Vendor Risk</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">$4.2M</div>
                <div className="text-sm text-muted-foreground">Average Cost of Third-Party Breach</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="text-center bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-12">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Don't Let Vendor Risks Become Your Crisis</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Third-party incidents can devastate operations and compliance programs. Use our assessment to identify 
              and mitigate vendor risks before they impact your organization.
            </p>
            <Link to="/vendor-risk-assessment-start">
              <Button size="lg" className="px-12 py-6 text-lg">
                Assess Your Vendors Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorRiskAssessment;
