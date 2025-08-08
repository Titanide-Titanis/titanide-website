
import React from 'react';
import Hero from '@/components/brand/Hero';
import Section from '@/components/brand/Section';
import FeatureCard from '@/components/brand/FeatureCard';
import StatCard from '@/components/brand/StatCard';
import CTA from '@/components/brand/CTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Award,
  FileText,
  Clock,
  Zap,
  BarChart3,
  Building,
  HeartHandshake
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Comprehensive regulatory compliance solutions ensuring your healthcare organization meets all federal and state requirements.',
      features: [
        'HIPAA compliance auditing and remediation',
        'Joint Commission readiness assessments',
        'Medicare/Medicaid compliance reviews',
        'State health department compliance'
      ]
    },
    {
      icon: Target,
      title: 'Risk Management',
      description: 'Strategic risk assessment and mitigation to protect your organization from operational, financial, and regulatory risks.',
      features: [
        'Enterprise risk assessments',
        'Vendor risk management',
        'Clinical risk mitigation',
        'Financial risk analysis'
      ]
    },
    {
      icon: Users,
      title: 'Fractional Leadership',
      description: 'Executive-level compliance and risk leadership without the full-time executive cost.',
      features: [
        'Interim Chief Compliance Officer services',
        'Risk management leadership',
        'Board-level reporting and governance',
        'Strategic planning and implementation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Healthcare Analytics',
      description: 'Data-driven insights to improve compliance posture and operational performance.',
      features: [
        'Compliance dashboard development',
        'Risk metrics and KPIs',
        'Performance benchmarking',
        'Predictive risk modeling'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Healthcare Systems',
      description: 'Comprehensive compliance and risk management for multi-facility healthcare organizations.',
      icon: Building,
      badge: 'Enterprise'
    },
    {
      title: 'FQHCs & Community Health',
      description: 'Specialized compliance solutions for Federally Qualified Health Centers and community health organizations.',
      icon: HeartHandshake,
      badge: 'Specialized'
    },
    {
      title: 'Medical Practices',
      description: 'Right-sized compliance and risk management solutions for independent medical practices.',
      icon: Users,
      badge: 'Tailored'
    }
  ];

  const stats = [
    { number: '500+', label: 'Healthcare Organizations Served' },
    { number: '15+', label: 'Years of Healthcare Expertise' },
    { number: '99%', label: 'Client Satisfaction Rate' },
    { number: '$50M+', label: 'In Compliance Cost Savings' }
  ];

  const testimonials = [
    {
      quote: "Titanide's expertise transformed our compliance program from reactive to proactive. Their fractional leadership model gave us C-suite level guidance at a fraction of the cost.",
      author: "Sarah Johnson",
      title: "CEO, Regional Medical Center",
      organization: "450-bed healthcare system"
    },
    {
      quote: "The risk assessment and mitigation strategies implemented by Titanide have significantly reduced our exposure and improved our operational efficiency.",
      author: "Dr. Michael Chen",
      title: "Chief Medical Officer",
      organization: "Multi-specialty clinic group"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Healthcare Compliance & Risk Management Excellence"
        subtitle="Transform your healthcare organization with expert compliance leadership, comprehensive risk management, and innovative solutions that protect your mission and drive sustainable growth."
        badge="Trusted by 500+ Healthcare Organizations"
        actions={[
          {
            label: 'Schedule Consultation',
            href: 'https://calendly.com/titanideconsulting/discovery-call',
            variant: 'cta'
          },
          {
            label: 'View Our Services',
            href: '/services',
            variant: 'outline'
          }
        ]}
        gradientVariant="deep"
        centered
      />

      {/* Trust Indicators */}
      <Section variant="light" centered>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section 
        title="Comprehensive Healthcare Compliance Solutions"
        subtitle="Expert guidance across all aspects of healthcare compliance and risk management"
        variant="plain"
        hasHeadingAccent
      >
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </Section>

      {/* Solutions by Organization Type */}
      <Section 
        title="Solutions Tailored to Your Organization"
        subtitle="Specialized compliance and risk management approaches for different healthcare settings"
        variant="accent"
        hasHeadingAccent
        centered
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="text-center brand-card hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4">
                  {solution.badge}
                </Badge>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Titanide */}
      <Section 
        title="Why Healthcare Leaders Choose Titanide"
        variant="plain"
        hasHeadingAccent
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
              <Award className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-4">Proven Expertise</h3>
            <p className="text-muted-foreground">15+ years of healthcare compliance experience across all organization types.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
              <Clock className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-4">Rapid Implementation</h3>
            <p className="text-muted-foreground">Quick deployment of compliance solutions with measurable results in 90 days.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
              <Zap className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-4">Cost-Effective</h3>
            <p className="text-muted-foreground">Fractional leadership model delivers C-suite expertise at a fraction of the cost.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
              <BarChart3 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-4">Measurable Results</h3>
            <p className="text-muted-foreground">Track compliance improvements and ROI with our comprehensive reporting tools.</p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="light" title="What Our Clients Say" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="brand-card">
              <CardContent className="p-8">
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.organization}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Solutions */}
      <Section title="Featured Solutions & Tools" variant="plain" hasHeadingAccent>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="brand-card hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">KJ Advisor</h3>
              <p className="text-muted-foreground mb-6">AI-powered compliance guidance and risk assessment tools for healthcare organizations.</p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          <Card className="brand-card hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">TITANIS GRC</h3>
              <p className="text-muted-foreground mb-6">Comprehensive governance, risk, and compliance platform built for healthcare.</p>
              <Button variant="outline" className="w-full">
                View Platform
              </Button>
            </CardContent>
          </Card>
          
          <Card className="brand-card hover-scale">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Medical Staffing</h3>
              <p className="text-muted-foreground mb-6">Specialized healthcare recruitment and staffing services through our UK division.</p>
              <Button variant="outline" className="w-full">
                Explore Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <CTA
        title="Ready to Transform Your Healthcare Compliance?"
        subtitle="Join 500+ healthcare organizations that trust Titanide for their compliance and risk management needs. Schedule a consultation today to discover how we can help your organization achieve compliance excellence."
        primary={{
          label: 'Schedule Free Consultation',
          href: 'https://calendly.com/titanideconsulting/discovery-call',
          variant: 'cta'
        }}
        secondary={{
          label: 'Download Our Guide',
          href: '/resources/compliance-guide',
          variant: 'outline'
        }}
        variant="accent"
      />
    </div>
  );
};

export default Index;
