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
  Zap
} from "lucide-react";

const TitanisGRC = () => {
  const features = [
    {
      icon: Shield,
      title: "Regulatory Intelligence Engine",
      description: "Automated tracking and interpretation of healthcare regulations with real-time updates and impact analysis."
    },
    {
      icon: TrendingUp,
      title: "Risk Assessment & Monitoring",
      description: "Continuous risk evaluation with predictive analytics and real-time dashboards for proactive risk management."
    },
    {
      icon: FileText,
      title: "Compliance Workflow Automation",
      description: "Streamlined audit preparation, documentation management, and automated compliance reporting workflows."
    },
    {
      icon: BarChart3,
      title: "Executive Reporting & Analytics",
      description: "Board-ready compliance insights with customizable dashboards and executive-level reporting capabilities."
    },
    {
      icon: Settings,
      title: "Multi-Framework Support",
      description: "Comprehensive support for HIPAA, SOX, HITECH, state regulations, and custom compliance frameworks."
    },
    {
      icon: Database,
      title: "Enterprise Integration",
      description: "Seamless connectivity with EHR systems, HRIS platforms, and other critical business applications."
    }
  ];

  const industries = [
    {
      title: "Healthcare Organizations",
      description: "Complete GRC solution for hospitals, clinics, and healthcare systems"
    },
    {
      title: "Medical Device Companies",
      description: "Regulatory compliance management for device manufacturers"
    },
    {
      title: "Healthcare Technology Firms",
      description: "Privacy and security compliance for health tech companies"
    },
    {
      title: "Multi-location Systems",
      description: "Centralized compliance management across multiple facilities"
    }
  ];

  const benefits = [
    { icon: Clock, text: "75% reduction in audit preparation time" },
    { icon: Shield, text: "99.9% compliance accuracy rate" },
    { icon: TrendingUp, text: "65% faster regulatory response" },
    { icon: Users, text: "Unified team collaboration" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                Titanide Consulting Group
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/solutions" className="text-muted-foreground hover:text-primary">
                Solutions
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link to="/contact">
                <Button>Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Zap className="w-4 h-4 mr-2" />
                TITANIS GRC Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Unified Governance, Risk & 
              <span className="text-primary"> Compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The comprehensive GRC platform designed specifically for healthcare organizations. 
              Automate compliance, streamline risk management, and ensure regulatory readiness 
              with intelligent automation and real-time insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why TITANIS GRC Platform?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built from the ground up for healthcare compliance, TITANIS combines deep regulatory 
              expertise with cutting-edge technology to deliver unparalleled GRC management capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="font-semibold text-foreground">{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive GRC Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Every feature designed to simplify compliance, enhance visibility, and drive operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Tailored GRC solutions for every healthcare organization type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Tiers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Platform Edition
            </h2>
            <p className="text-lg text-muted-foreground">
              Scalable solutions to meet your organization's specific needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for small practices and clinics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Core compliance tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Basic risk assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Standard reporting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>Ideal for healthcare organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Advanced workflow automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Predictive risk analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Executive dashboards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    API integrations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large healthcare systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Custom compliance frameworks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Advanced AI analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    White-label options
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your GRC Operations?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join leading healthcare organizations who trust TITANIS to streamline their 
              governance, risk, and compliance management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Titanide Consulting Group
              </h3>
              <p className="text-muted-foreground mb-4">
                Leading healthcare compliance and risk management solutions provider.
              </p>
              <div className="flex items-center text-muted-foreground">
                <Globe className="w-4 h-4 mr-2" />
                <span>Serving healthcare organizations nationwide</span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/solutions" className="hover:text-primary">All Solutions</Link></li>
                <li><Link to="/solutions/medical-staffing" className="hover:text-primary">Medical Staffing</Link></li>
                <li><Link to="/solutions/digital-products/kj-advisor" className="hover:text-primary">KJ Advisor</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary">About</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link to="/legal" className="hover:text-primary">Legal</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TitanisGRC;