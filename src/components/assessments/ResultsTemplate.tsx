
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Share2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/brand/Hero';
import Section from '@/components/brand/Section';
import StatCard from '@/components/brand/StatCard';
import CTA from '@/components/brand/CTA';

interface DomainScore {
  domain: string;
  icon: string;
  score: number;
  description: string;
}

interface ResultsTemplateProps {
  title: string;
  subtitle: string;
  backLink: string;
  backLabel: string;
  vendorName?: string;
  vendorType?: string;
  overallScore: number;
  riskLevel: {
    level: string;
    color: string;
    bgColor: string;
  };
  criticalityLevel?: string;
  domainScores: DomainScore[];
  recommendations: string[];
  assessmentType: 'vendor' | 'compliance';
}

const ResultsTemplate = ({
  title,
  subtitle,
  backLink,
  backLabel,
  vendorName,
  vendorType,
  overallScore,
  riskLevel,
  criticalityLevel,
  domainScores,
  recommendations,
  assessmentType
}: ResultsTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Hero 
        title={title}
        subtitle={subtitle}
        gradientVariant="deep"
        centered={true}
      >
        <div className="mt-8">
          <Link 
            to={backLink} 
            className="inline-flex items-center text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {backLabel}
          </Link>
        </div>
      </Hero>

      <Section variant="light" centered>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard 
            number={overallScore.toString()}
            label="Overall Score"
          />
          <div className="brand-stat">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold" 
                 style={{ 
                   backgroundColor: riskLevel.bgColor, 
                   color: riskLevel.color 
                 }}>
              {riskLevel.level}
            </div>
            <div className="brand-stat-label mt-2">Risk Classification</div>
          </div>
          {criticalityLevel && (
            <StatCard 
              number={criticalityLevel.split(' - ')[0]}
              label="Business Criticality"
            />
          )}
        </div>
        
        {vendorName && (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-primary mb-2">{vendorName}</h2>
            {vendorType && <p className="text-muted-foreground">{vendorType}</p>}
          </div>
        )}
      </Section>

      <Section title="Assessment Breakdown" variant="plain" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domainScores.map((domain, index) => (
            <div key={index} className="brand-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{domain.icon}</span>
                <span className="text-2xl font-bold text-accent">{domain.score}</span>
              </div>
              <h3 className="font-semibold mb-2">{domain.domain}</h3>
              <div className="w-full bg-muted rounded-full h-2 mb-3">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-500"
                  style={{ width: `${domain.score}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">{domain.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="📋 Recommended Actions" variant="accent">
        {recommendations.length > 0 ? (
          <ul className="max-w-3xl mx-auto space-y-3">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center max-w-2xl mx-auto">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg font-semibold text-green-600">
              ✓ No critical issues identified. Continue monitoring {assessmentType === 'vendor' ? 'vendor performance' : 'compliance status'}.
            </p>
          </div>
        )}
      </Section>

      <CTA
        title="Next Steps"
        subtitle={`Based on your ${assessmentType} assessment results, consider implementing the recommended measures and establishing ongoing monitoring procedures.`}
        primary={{
          label: "Schedule Consultation",
          href: "https://titanide.zohobookings.com/#/3973691000005149002"
        }}
        secondary={{
          label: `New ${assessmentType === 'vendor' ? 'Vendor' : ''} Assessment`,
          href: assessmentType === 'vendor' ? '/vendor-risk-assessment-start' : '/assessment-start'
        }}
        variant="dark"
      >
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Share2 className="h-4 w-4 mr-2" />
            Share Results
          </Button>
          <Button variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </CTA>
    </div>
  );
};

export default ResultsTemplate;
