
import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ResultsTemplate from "@/components/assessments/ResultsTemplate";

const VendorRiskAssessmentResults = () => {
  const [assessmentData, setAssessmentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('vendorAssessmentData');
    if (data) {
      setAssessmentData(JSON.parse(data));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!assessmentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md bg-card p-8 rounded-lg shadow-lg text-center">
          <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Assessment Data Found</h3>
          <p className="text-muted-foreground mb-6">
            Please complete the vendor risk assessment first.
          </p>
          <Link to="/vendor-risk-assessment-start">
            <Button>Start Assessment</Button>
          </Link>
        </div>
      </div>
    );
  }

  const { responses, score } = assessmentData;
  const vendorName = responses.vendor_name || 'Unknown Vendor';
  const vendorType = responses.vendor_type || 'Unspecified';
  const criticalityLevel = responses.criticality_level || 'Unknown';
  
  const getRiskLevel = (score: number) => {
    if (score >= 81) return { level: 'Low Risk', color: '#10b981', bgColor: '#d1fae5' };
    if (score >= 61) return { level: 'Medium Risk', color: '#f59e0b', bgColor: '#fef3c7' };
    if (score >= 41) return { level: 'High Risk', color: '#f97316', bgColor: '#fed7aa' };
    return { level: 'Critical Risk', color: '#ef4444', bgColor: '#fecaca' };
  };

  const riskLevel = getRiskLevel(score);

  const domainScores = [
    {
      domain: 'Financial & Operational',
      icon: '📊',
      score: calculateDomainScore('financial-operational'),
      description: 'Financial stability, business continuity, and operational resilience'
    },
    {
      domain: 'Cybersecurity & Data Protection',
      icon: '🛡️',
      score: calculateDomainScore('cybersecurity-data'),
      description: 'Security certifications, data protection, and incident management'
    },
    {
      domain: 'Compliance & Regulatory',
      icon: '📋',
      score: calculateDomainScore('compliance-regulatory'),
      description: 'Regulatory alignment, audit results, and privacy programs'
    },
    {
      domain: 'Operational Dependencies',
      icon: '🏢',
      score: calculateDomainScore('operational-dependencies'),
      description: 'SLA performance, support capabilities, and exit strategies'
    },
    {
      domain: 'Due Diligence Documentation',
      icon: '👁️',
      score: calculateDomainScore('due-diligence'),
      description: 'Contract completeness, insurance verification, and documentation'
    },
    {
      domain: 'Vendor Information & Criticality',
      icon: '👥',
      score: calculateDomainScore('vendor-information'),
      description: 'Vendor classification, service criticality, and data access levels'
    }
  ];

  function calculateDomainScore(domainId: string): number {
    const domainQuestions = getDomainQuestions(domainId);
    if (domainQuestions.length === 0) return 0;
    
    let totalScore = 0;
    domainQuestions.forEach(questionId => {
      const response = responses[questionId];
      if (response) {
        if (Array.isArray(response)) {
          totalScore += Math.min(response.length * 25, 100);
        } else {
          totalScore += getRiskScore(response);
        }
      }
    });
    
    return Math.min(Math.round(totalScore / domainQuestions.length), 100);
  }

  function getDomainQuestions(domainId: string): string[] {
    const domainQuestionMap = {
      'vendor-information': ['vendor_name', 'vendor_type', 'services_provided', 'criticality_level', 'data_access_level', 'contract_duration'],
      'financial-operational': ['financial_stability', 'business_continuity', 'geographic_risk', 'operational_resilience', 'dependency_level'],
      'cybersecurity-data': ['security_certifications', 'data_protection_practices', 'incident_history', 'access_controls', 'vulnerability_management'],
      'compliance-regulatory': ['regulatory_compliance', 'audit_results', 'privacy_program', 'subcontractor_management'],
      'operational-dependencies': ['sla_performance', 'escalation_procedures', 'exit_strategy', 'change_management', 'integration_complexity'],
      'due-diligence': ['contract_completeness', 'insurance_coverage', 'reference_checks', 'onsite_assessment', 'documentation_completeness']
    };
    
    return domainQuestionMap[domainId] || [];
  }

  function getRiskScore(response: string): number {
    const lowerResponse = response.toLowerCase();
    
    if (lowerResponse.includes('excellent') || lowerResponse.includes('comprehensive') || lowerResponse.includes('strong')) return 100;
    if (lowerResponse.includes('good') || lowerResponse.includes('established')) return 80;
    if (lowerResponse.includes('basic') || lowerResponse.includes('some')) return 60;
    if (lowerResponse.includes('poor') || lowerResponse.includes('minimal')) return 40;
    if (lowerResponse.includes('no') || lowerResponse.includes('unknown')) return 20;
    return 60;
  }

  const recommendations = generateRecommendations(score, domainScores);

  function generateRecommendations(overallScore: number, domains: any[]) {
    const recs = [];
    
    if (overallScore < 41) {
      recs.push('Immediate risk mitigation required - consider service limitations');
    } else if (overallScore < 61) {
      recs.push('Enhanced monitoring and controls needed');
    }
    
    domains.forEach(domain => {
      if (domain.score < 60) {
        recs.push(`Address ${domain.domain} deficiencies`);
      }
    });
    
    return recs.slice(0, 5);
  }

  return (
    <ResultsTemplate
      title="Vendor Risk Assessment Results"
      subtitle="Comprehensive third-party risk evaluation and recommendations"
      backLink="/vendor-risk-assessment-start"
      backLabel="Back to Assessment"
      vendorName={vendorName}
      vendorType={vendorType}
      overallScore={score}
      riskLevel={riskLevel}
      criticalityLevel={criticalityLevel}
      domainScores={domainScores}
      recommendations={recommendations}
      assessmentType="vendor"
    />
  );
};

export default VendorRiskAssessmentResults;
