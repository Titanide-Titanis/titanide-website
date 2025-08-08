import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Lock, ArrowRight, Download, CheckCircle, Users, Star, Phone, Mail, FileText, Globe, Award, TrendingUp, Zap, Monitor, Building2, Briefcase, Sparkles, BarChart3, Brain, Clock, Target, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/brand/Hero";
import Section from "@/components/brand/Section";
import StatCard from "@/components/brand/StatCard";
import FeatureCard from "@/components/brand/FeatureCard";
import CTA from "@/components/brand/CTA";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const complianceStats = [
  { label: 'Active Clients', value: '250+' },
  { label: 'Years of Experience', value: '15+' },
  { label: 'Audits Completed', value: '1000+' },
];

const riskManagementStats = [
  { label: 'Risk Assessments', value: '500+' },
  { label: 'Compliance Programs', value: '100+' },
  { label: 'Training Sessions', value: '200+' },
];

const grcTechnologyStats = [
  { label: 'System Integrations', value: '50+' },
  { label: 'Custom Solutions', value: '30+' },
  { label: 'Clients Trained', value: '150+' },
];

const complianceFeatures = [
  {
    title: 'HIPAA Compliance',
    description: 'Ensure the privacy and security of protected health information with our comprehensive HIPAA compliance solutions.',
    icon: Shield,
  },
  {
    title: 'Data Security',
    description: 'Protect sensitive data with robust security measures and protocols tailored to the healthcare industry.',
    icon: Lock,
  },
  {
    title: 'Audit Readiness',
    description: 'Prepare for audits with confidence through our audit readiness assessments and remediation plans.',
    icon: FileText,
  },
  {
    title: 'Policy Management',
    description: 'Streamline policy management with centralized policy creation, distribution, and tracking.',
    icon: FileText,
  },
  {
    title: 'Training Programs',
    description: 'Empower your workforce with engaging and informative compliance training programs.',
    icon: Brain,
  },
  {
    title: 'Incident Response',
    description: 'Respond swiftly and effectively to security incidents with our incident response planning and support.',
    icon: Zap,
  },
];

const riskManagementFeatures = [
  {
    title: 'Risk Assessments',
    description: 'Identify and assess potential risks to your organization with our comprehensive risk assessment services.',
    icon: Target,
  },
  {
    title: 'Vulnerability Management',
    description: 'Proactively identify and remediate vulnerabilities in your systems and applications.',
    icon: Shield,
  },
  {
    title: 'Business Continuity',
    description: 'Ensure business continuity with robust disaster recovery and business continuity planning.',
    icon: Clock,
  },
  {
    title: 'Third-Party Risk',
    description: 'Manage risks associated with third-party vendors and partners with our third-party risk management solutions.',
    icon: Users,
  },
  {
    title: 'Compliance Monitoring',
    description: 'Monitor compliance with regulatory requirements and internal policies with our compliance monitoring tools.',
    icon: Monitor,
  },
  {
    title: 'Data Loss Prevention',
    description: 'Prevent data loss with advanced data loss prevention technologies and strategies.',
    icon: Database,
  },
];

const grcTechnologyFeatures = [
  {
    title: 'GRC Platform',
    description: 'Centralize governance, risk management, and compliance activities with our integrated GRC platform.',
    icon: Cpu,
  },
  {
    title: 'Automated Workflows',
    description: 'Automate key GRC processes with customizable workflows and notifications.',
    icon: Zap,
  },
  {
    title: 'Real-Time Reporting',
    description: 'Gain real-time visibility into GRC performance with interactive dashboards and reports.',
    icon: BarChart3,
  },
  {
    title: 'Integration',
    description: 'Integrate GRC technology with existing systems and applications for seamless data exchange.',
    icon: Building2,
  },
  {
    title: 'Customization',
    description: 'Customize GRC solutions to meet the unique needs and requirements of your organization.',
    icon: Sparkles,
  },
  {
    title: 'Mobile Access',
    description: 'Access GRC data and functionality from anywhere with our mobile-friendly GRC platform.',
    icon: Phone,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Healthcare Compliance & Risk Management Excellence"
        subtitle="Transform your healthcare organization with expert compliance leadership, comprehensive risk management, and cutting-edge GRC technology solutions."
        variant="teal"
      />

      {/* About Section */}
      <Section
        title="Meet Your Compliance Partner"
        variant="light"
        className="relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <AspectRatio ratio={4/3} className="w-full max-w-md mx-auto lg:mx-0">
              <iframe 
                src="https://workdrive.titanideholdings.com/embed/9rk2kec3040c46c2e476f8905ede61724aef5?toolbar=false&appearance=light&themecolor=green" 
                className="w-full h-full feather-mask shadow-2xl hover:scale-105 transition-transform duration-300"
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen
                loading="lazy"
                title="Kelly Menefee Okpala – Titanide Founder"
              />
            </AspectRatio>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ backgroundColor: '#f25022' }}>
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Kelly Menefee Okpala</h3>
              <h4 className="text-lg font-semibold text-accent mb-4">Founder & Chief Compliance Officer</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of healthcare compliance expertise, Kelly leads Titanide Holdings with a proven track record of transforming compliance challenges into competitive advantages for healthcare organizations nationwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Organizations Served</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg" className="w-full sm:w-auto">
                  Learn More About Kelly <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Compliance Section */}
      <Section
        title="Healthcare Compliance Solutions"
        subtitle="Navigate the complex landscape of healthcare regulations with our expert compliance solutions."
        variant="accent"
        hasHeadingAccent
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {complianceFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/compliance">
            <Button size="lg">
              Explore Compliance Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Risk Management Section */}
      <Section
        title="Risk Management Services"
        subtitle="Protect your organization from potential threats with our comprehensive risk management services."
        variant="light"
        hasHeadingAccent
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {riskManagementFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/risk-management">
            <Button size="lg">
              Learn About Risk Management <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* GRC Technology Section */}
      <Section
        title="GRC Technology Solutions"
        subtitle="Streamline governance, risk management, and compliance with our cutting-edge GRC technology solutions."
        variant="dark"
        hasHeadingAccent
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grcTechnologyFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/grc-technology">
            <Button size="lg" variant="secondary">
              Discover GRC Technology <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Healthcare Organization?"
        subtitle="Contact us today to schedule a consultation and learn how Titanide Holdings can help you achieve compliance and risk management excellence."
      />
    </div>
  );
}
