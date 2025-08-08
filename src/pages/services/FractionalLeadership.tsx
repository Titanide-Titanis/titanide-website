
import React from 'react';
import Hero from '@/components/brand/Hero';
import Section from '@/components/brand/Section';
import FeatureCard from '@/components/brand/FeatureCard';
import CTA from '@/components/brand/CTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Shield, TrendingUp, Clock, Award, CheckCircle } from 'lucide-react';

const FractionalLeadership = () => {
  const services = [
    {
      icon: Users,
      title: 'Interim Chief Compliance Officer',
      description: 'Executive-level compliance leadership to guide your organization through complex regulatory challenges.',
      features: [
        'Strategic compliance program development',
        'Board-level reporting and governance',
        'Regulatory relationship management',
        'Compliance team leadership and mentoring'
      ]
    },
    {
      icon: Shield,
      title: 'Risk Management Leadership',
      description: 'Senior-level expertise in enterprise risk management and mitigation strategies.',
      features: [
        'Enterprise risk assessment programs',
        'Risk committee facilitation',
        'Crisis management planning',
        'Regulatory risk mitigation'
      ]
    },
    {
      icon: Target,
      title: 'Strategic Compliance Planning',
      description: 'Long-term compliance strategy development aligned with organizational goals.',
      features: [
        'Multi-year compliance roadmaps',
        'Resource allocation planning',
        'Technology solution selection',
        'Performance metrics development'
      ]
    }
  ];

  const benefits = [
    'Access to C-suite level expertise without full-time executive costs',
    'Immediate deployment with rapid impact on compliance posture',
    'Flexible engagement models tailored to organizational needs',
    'Deep healthcare industry knowledge and regulatory expertise',
    'Proven track record with 500+ healthcare organizations',
    'Board-ready reporting and governance frameworks'
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Fractional Compliance & Risk Leadership"
        subtitle="Executive-level compliance and risk management expertise delivered through our proven fractional leadership model. Get C-suite guidance at a fraction of the cost."
        badge="Trusted by Healthcare Leaders"
        actions={[
          {
            label: 'Schedule Leadership Consultation',
            href: 'https://calendly.com/titanideconsulting/fractional-leadership',
            variant: 'cta'
          },
          {
            label: 'Download Leadership Guide',
            href: '/resources/fractional-leadership-guide',
            variant: 'outline'
          }
        ]}
      />

      <Section 
        title="Executive-Level Compliance Leadership"
        subtitle="Our fractional leadership model delivers seasoned healthcare compliance executives to guide your organization"
        variant="plain"
        hasHeadingAccent
      >
        <div className="grid md:grid-cols-3 gap-8">
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

      <Section variant="light" title="Why Choose Fractional Leadership?" centered>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 mr-4 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Leadership Impact</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Average Time to Impact</span>
                <span className="font-semibold">30 Days</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Cost vs Full-Time Executive</span>
                <span className="font-semibold text-accent">60% Savings</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-muted-foreground">Compliance Improvement</span>
                <span className="font-semibold text-accent">40% Average Increase</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Client Satisfaction</span>
                <span className="font-semibold text-accent">99%</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Engagement Models" variant="plain" hasHeadingAccent>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Interim Leadership</CardTitle>
              <Badge variant="secondary" className="mx-auto">3-12 Months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Full-time interim executive leadership during transitions or critical periods.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li>• Complete executive authority</li>
                <li>• Team leadership and development</li>
                <li>• Board-level representation</li>
                <li>• Crisis management support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-accent">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-xl">Strategic Advisory</CardTitle>
              <Badge variant="default" className="mx-auto bg-accent">Most Popular</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ongoing strategic guidance and oversight with regular on-site presence.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li>• 2-3 days per month on-site</li>
                <li>• Strategic planning leadership</li>
                <li>• Executive team coaching</li>
                <li>• Compliance program oversight</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-xl">Project-Based</CardTitle>
              <Badge variant="outline" className="mx-auto">3-6 Months</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Focused leadership for specific compliance initiatives or regulatory challenges.
              </p>
              <ul className="text-sm text-left space-y-2">
                <li>• Regulatory response leadership</li>
                <li>• Compliance program implementation</li>
                <li>• Audit preparation and response</li>
                <li>• Risk assessment projects</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <CTA
        title="Ready for Executive-Level Compliance Leadership?"
        subtitle="Our fractional leadership model has helped 500+ healthcare organizations achieve compliance excellence. Schedule a consultation to discuss how our executives can drive your compliance success."
        primary={{
          label: 'Schedule Leadership Consultation',
          href: 'https://calendly.com/titanideconsulting/fractional-leadership',
          variant: 'cta'
        }}
        secondary={{
          label: 'View Leadership Profiles',
          href: '/about/leadership',
          variant: 'outline'
        }}
        variant="accent"
      />
    </div>
  );
};

export default FractionalLeadership;
