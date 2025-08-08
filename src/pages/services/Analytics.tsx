
import React from 'react';
import Hero from '@/components/brand/Hero';
import Section from '@/components/brand/Section';
import FeatureCard from '@/components/brand/FeatureCard';
import CTA from '@/components/brand/CTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, PieChart, TrendingUp, Target, Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const Analytics = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Compliance Dashboards',
      description: 'Real-time visibility into your organization\'s compliance posture with executive-ready dashboards.',
      features: [
        'Real-time compliance metrics tracking',
        'Executive dashboard development',
        'Automated compliance reporting',
        'Risk trend analysis and alerts'
      ]
    },
    {
      icon: Target,
      title: 'Risk Analytics & KPIs',
      description: 'Comprehensive risk measurement and key performance indicators for proactive risk management.',
      features: [
        'Enterprise risk scoring models',
        'Predictive risk analytics',
        'Compliance performance benchmarking',
        'ROI measurement and tracking'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Predictive Risk Modeling',
      description: 'Advanced analytics to predict and prevent compliance issues before they become critical.',
      features: [
        'Machine learning risk prediction',
        'Compliance trend forecasting',
        'Early warning systems',
        'Resource optimization modeling'
      ]
    },
    {
      icon: PieChart,
      title: 'Performance Benchmarking',
      description: 'Industry benchmarking and competitive analysis to optimize your compliance investments.',
      features: [
        'Industry peer comparisons',
        'Best practice identification',
        'Performance gap analysis',
        'Strategic improvement roadmaps'
      ]
    }
  ];

  const analyticsTypes = [
    {
      title: 'Compliance Performance Analytics',
      description: 'Track and measure compliance program effectiveness',
      metrics: ['Audit Pass Rates', 'Policy Adherence', 'Training Completion', 'Incident Response Times'],
      icon: Shield
    },
    {
      title: 'Risk Assessment Analytics',
      description: 'Comprehensive risk measurement and monitoring',
      metrics: ['Risk Exposure Levels', 'Mitigation Effectiveness', 'Risk Trend Analysis', 'Control Performance'],
      icon: AlertTriangle
    },
    {
      title: 'Operational Excellence Analytics',
      description: 'Measure impact of compliance on operational efficiency',
      metrics: ['Process Efficiency', 'Resource Utilization', 'Cost Per Compliance Hour', 'Staff Productivity'],
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Healthcare Compliance Analytics & Intelligence"
        subtitle="Transform your compliance data into actionable insights with our advanced analytics platform. Make data-driven decisions that improve compliance posture and operational efficiency."
        badge="Powered by AI & Machine Learning"
        actions={[
          {
            label: 'Request Analytics Demo',
            href: 'https://calendly.com/titanideconsulting/analytics-demo',
            variant: 'cta'
          },
          {
            label: 'View Sample Dashboard',
            href: '/resources/sample-dashboard',
            variant: 'outline'
          }
        ]}
      />

      <Section 
        title="Comprehensive Healthcare Analytics Solutions"
        subtitle="Turn your compliance and risk data into strategic advantages with our advanced analytics platform"
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

      <Section variant="light" title="Analytics Capabilities" centered>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {analyticsTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-6">{type.description}</p>
                <div className="space-y-2">
                  {type.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Analytics Platform Features" variant="plain" hasHeadingAccent>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">Continuous monitoring of compliance metrics with instant alerts for critical issues.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
                <p className="text-muted-foreground">AI-powered predictions to identify potential compliance risks before they occur.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4 flex-shrink-0">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Custom Reporting</h3>
                <p className="text-muted-foreground">Tailored reports and dashboards designed for your specific organizational needs.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-cta/10 flex items-center justify-center mr-4 flex-shrink-0">
                <Clock className="h-6 w-6 text-cta" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automated Insights</h3>
                <p className="text-muted-foreground">Automated analysis and recommendations to optimize compliance performance.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-muted/30 to-accent/5 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Platform Benefits</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Reduction in Compliance Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-muted-foreground">Faster Issue Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Decrease in Compliance Costs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Data Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTA
        title="Transform Your Compliance with Data-Driven Insights"
        subtitle="Join leading healthcare organizations using our analytics platform to achieve superior compliance outcomes. Schedule a demo to see how our analytics can transform your compliance program."
        primary={{
          label: 'Schedule Analytics Demo',
          href: 'https://calendly.com/titanideconsulting/analytics-demo',
          variant: 'cta'
        }}
        secondary={{
          label: 'Download Analytics Guide',
          href: '/resources/analytics-guide',
          variant: 'outline'
        }}
        variant="accent"
      />
    </div>
  );
};

export default Analytics;
