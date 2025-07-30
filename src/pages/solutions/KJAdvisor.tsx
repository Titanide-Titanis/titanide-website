import { ArrowRight, Brain, Clock, Shield, Users, AlertTriangle, FileCheck, TrendingUp, ExternalLink, Download, CheckCircle, Zap, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const KJAdvisor = () => {
  const scenarios = [
    {
      title: "Crisis Management",
      description: "Major data breach reported at 2 AM - get immediate executive guidance on response protocols, stakeholder communications, and regulatory notifications.",
      icon: AlertTriangle,
      urgency: "Critical"
    },
    {
      title: "Board Meeting Prep",
      description: "Quarterly board meeting tomorrow - generate executive briefings on compliance status, emerging risks, and strategic recommendations.",
      icon: Users,
      urgency: "Urgent"
    },
    {
      title: "Regulatory Change Impact",
      description: "New EU AI Act requirements announced - assess impact on your organization and develop implementation roadmap.",
      icon: FileCheck,
      urgency: "Strategic"
    },
    {
      title: "Due Diligence Support",
      description: "M&A target assessment - evaluate compliance posture, identify risks, and develop integration compliance strategy.",
      icon: TrendingUp,
      urgency: "Time-Sensitive"
    }
  ];

  const features = [
    {
      title: "24/7 Executive Guidance",
      description: "Round-the-clock access to executive-level compliance and risk insights",
      icon: Clock
    },
    {
      title: "Strategic Planning Support",
      description: "Long-term compliance strategy development and implementation planning",
      icon: Target
    },
    {
      title: "Real-time Regulatory Intelligence",
      description: "Up-to-date information on regulatory changes and their business impact",
      icon: Zap
    },
    {
      title: "Risk Assessment Automation",
      description: "Rapid evaluation of compliance risks and mitigation strategies",
      icon: Shield
    },
    {
      title: "Executive Briefing Creation",
      description: "Generate board-ready reports and executive summaries",
      icon: FileCheck
    },
    {
      title: "Multi-jurisdictional Expertise",
      description: "Coverage across US, UK, and EU regulatory frameworks",
      icon: Globe
    }
  ];

  const freeTools = [
    {
      title: "Compliance Assessment Framework",
      description: "Interactive assessment tool for compliance posture evaluation",
      url: "/tools/compliance-assessment-framework.html"
    },
    {
      title: "Risk Management Playbook",
      description: "Comprehensive guide to strategic risk management",
      url: "/tools/risk-management-playbook.pdf"
    },
    {
      title: "HIPAA Compliance Toolkit",
      description: "Essential templates and checklists for HIPAA compliance",
      url: "/resources/free-tools"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif", lineHeight: '1.6' }}>
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-primary-foreground mr-4" />
            <h1 className="text-5xl font-bold text-primary-foreground">
              KJ Advisor™
            </h1>
          </div>
          <h2 className="text-2xl text-primary-foreground/90 mb-6">Executive Companion</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Your AI-powered executive partner providing 24/7 strategic compliance guidance, 
            risk intelligence, and executive decision support across global regulatory frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => window.open('https://chatgpt.com/g/g-676e4c9d83f08191b067b13fc53b3e64-kj-advisor-executive-companion', '_blank')}
            >
              Launch KJ Advisor™ <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Executive-Level AI Guidance When You Need It Most
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-foreground">
              KJ Advisor™ combines deep regulatory expertise with AI capabilities to provide 
              instant executive guidance for critical compliance and risk decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card">
                <CardHeader>
                  <feature.icon className="w-8 h-8 mb-2 text-accent" />
                  <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market-Specific Variants */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Choose Your Regulatory Framework Coverage
            </h2>
            <p className="text-xl text-foreground">
              One Executive Companion - Different Regulatory Framework Scope
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* US Edition */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow bg-card">
              <div className="absolute top-0 right-0 w-20 h-20 transform rotate-45 translate-x-8 -translate-y-8 bg-gradient-to-br from-primary to-secondary"></div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">US Edition</Badge>
                <CardTitle className="text-xl text-primary">KJ Advisor™ Executive Companion</CardTitle>
                <CardDescription className="text-foreground">
                  US Regulatory Framework Coverage: HIPAA, SOX, CCPA, and federal compliance requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-foreground"><CheckCircle className="w-4 h-4 mr-2 text-accent" />HIPAA Privacy & Security Rules</li>
                  <li className="flex items-center text-foreground"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Sarbanes-Oxley Act</li>
                  <li className="flex items-center text-foreground"><CheckCircle className="w-4 h-4 mr-2 text-accent" />CCPA & State Privacy Laws</li>
                  <li className="flex items-center text-foreground"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Federal Healthcare Regulations</li>
                </ul>
                <Button 
                  className="w-full" 
                  onClick={() => window.open('https://chatgpt.com/g/g-6760c3ed76c88191b4d2c4c8f8ef85e1-kj-advisor-us', '_blank')}
                >
                  Launch US Edition <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* UK/EU Edition */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow bg-card">
              <div className="absolute top-0 right-0 w-20 h-20 transform rotate-45 translate-x-8 -translate-y-8 bg-gradient-to-br from-accent to-secondary"></div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent text-accent-foreground">UK/EU Edition</Badge>
                <CardTitle className="text-xl text-primary">KJ Advisor™ Executive Companion</CardTitle>
                <CardDescription className="text-foreground">
                  UK/EU Regulatory Framework Coverage: GDPR, EU AI Act, UK Data Protection Act, and European compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-foreground"><CheckCircle className="w-4 h-4 mr-2 text-accent" />EU/UK GDPR Compliance</li>
                  <li className="flex items-center text-foreground"><CheckCircle className="w-4 h-4 mr-2 text-accent" />Data Protection Act 2018</li>
                  <li className="flex items-center text-foreground"><CheckCircle className="w-4 h-4 mr-2 text-accent" />EU AI Act Requirements</li>
                  <li className="flex items-center text-foreground"><CheckCircle className="w-4 h-4 mr-2 text-accent" />ePrivacy Directive</li>
                </ul>
                <Button 
                  className="w-full"
                  variant="accent"
                  onClick={() => window.open('https://chatgpt.com/g/g-6760c46576c88191b4d2c4c8f8ef85e2-kj-advisor-uk-eu', '_blank')}
                >
                  Launch UK/EU Edition <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compelling Scenarios */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
              When Every Decision Counts
            </h2>
            <p className="text-xl" style={{ color: '#1a1a1a' }}>
              Real scenarios where KJ Advisor™ provides immediate executive-level guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <scenario.icon className="w-8 h-8 mt-1" style={{ color: '#f25022' }} />
                    <Badge variant={scenario.urgency === 'Critical' ? 'destructive' : 'secondary'}>
                      {scenario.urgency}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl" style={{ color: '#002B45' }}>{scenario.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed" style={{ color: '#1a1a1a' }}>
                    {scenario.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="text-white hover:opacity-90"
              style={{ backgroundColor: '#f25022' }}
              onClick={() => window.open('https://chatgpt.com/g/g-676e4c9d83f08191b067b13fc53b3e64-kj-advisor-executive-companion', '_blank')}
            >
              Get Immediate Guidance <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Integration with Free Tools */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
              Powered by Complementary Resources
            </h2>
            <p className="text-xl" style={{ color: '#1a1a1a' }}>
              KJ Advisor™ integrates with our comprehensive suite of free compliance tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {freeTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <Download className="w-8 h-8 mb-2" style={{ color: '#00A3AD' }} />
                  <CardTitle className="text-lg" style={{ color: '#002B45' }}>{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4" style={{ color: '#1a1a1a' }}>{tool.description}</CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-2 hover:bg-gray-50"
                    style={{ borderColor: '#002B45', color: '#002B45' }}
                    asChild
                  >
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      Access Tool <ExternalLink className="ml-2 w-3 h-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="mb-4" style={{ color: '#1a1a1a' }}>
              Use these tools to gather information, then get expert AI guidance with KJ Advisor™
            </p>
            <Button 
              variant="outline" 
              className="border-2 hover:bg-gray-50"
              style={{ borderColor: '#002B45', color: '#002B45' }}
              asChild
            >
              <a href="/resources/free-tools">
                View All Free Tools <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
              Technical Specifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>AI Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2" style={{ color: '#1a1a1a' }}>
                  <li>• Advanced language model with regulatory training</li>
                  <li>• Real-time regulatory database access</li>
                  <li>• Multi-document analysis and synthesis</li>
                  <li>• Executive summary generation</li>
                  <li>• Risk assessment automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle style={{ color: '#002B45' }}>Security & Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2" style={{ color: '#1a1a1a' }}>
                  <li>• Enterprise-grade security protocols</li>
                  <li>• No data retention beyond session</li>
                  <li>• GDPR and HIPAA compliant interactions</li>
                  <li>• Encrypted communications</li>
                  <li>• Audit trail capabilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #00A3AD 0%, #005870 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Executive Decision-Making?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join executives who rely on KJ Advisor™ for strategic compliance guidance and risk intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90"
              style={{ color: '#002B45' }}
              onClick={() => window.open('https://chatgpt.com/g/g-676e4c9d83f08191b067b13fc53b3e64-kj-advisor-executive-companion', '_blank')}
            >
              Start Using KJ Advisor™ <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              style={{ 
                border: '2px solid white', 
                color: 'white',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#002B45';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
              asChild
            >
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
          <p className="text-white/80 mt-6">
            Available 24/7 • No installation required • Immediate access
          </p>
        </div>
      </section>
    </div>
  );
};

export default KJAdvisor;