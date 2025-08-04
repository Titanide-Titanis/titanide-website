
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Share2, Building, AlertTriangle, CheckCircle, TrendingUp, Shield, FileCheck, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div style={{ maxWidth: '400px', background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
          <AlertTriangle style={{ height: '48px', width: '48px', color: '#f59e0b', margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>No Assessment Data Found</h3>
          <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
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

  const containerStyle = {
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: '#fdfdfd',
    color: '#1a1a1a',
    lineHeight: '1.6',
    minHeight: '100vh'
  };

  const contentStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem'
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '2rem'
  };

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#002B45',
    marginBottom: '1rem'
  };

  const cardStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  };

  const btnStyle = {
    backgroundColor: '#00A3AD',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '0.5rem 0.5rem 0.5rem 0'
  };

  const btnSecondaryStyle = {
    ...btnStyle,
    backgroundColor: '#6c757d'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={logoStyle}>TITANIDE</div>
          <h1>Vendor Risk Assessment Results</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
            <Link to="/vendor-risk-assessment-start" style={{ color: '#6c757d', textDecoration: 'none', fontSize: '14px' }}>
              ← Back to Assessment
            </Link>
          </div>
        </div>
        
        {/* Results Summary */}
        <div style={cardStyle}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Building style={{ marginRight: '0.5rem', color: '#002B45' }} />
              <h2 style={{ margin: 0, fontSize: '2rem', color: '#002B45' }}>{vendorName}</h2>
            </div>
            <p style={{ color: '#6c757d', fontSize: '1.1rem' }}>{vendorType}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#002B45' }}>{score}</div>
              <div style={{ color: '#6c757d' }}>Overall Score</div>
            </div>
            <div>
              <div style={{ 
                backgroundColor: riskLevel.bgColor, 
                color: riskLevel.color, 
                padding: '8px 16px', 
                borderRadius: '20px', 
                fontSize: '1.1rem', 
                fontWeight: '600',
                display: 'inline-block'
              }}>
                {riskLevel.level}
              </div>
              <div style={{ color: '#6c757d', marginTop: '0.5rem' }}>Risk Classification</div>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#002B45' }}>
                {criticalityLevel.split(' - ')[0]}
              </div>
              <div style={{ color: '#6c757d' }}>Business Criticality</div>
            </div>
          </div>
        </div>

        {/* Domain Scores */}
        <div style={cardStyle}>
          <h2 style={{ marginBottom: '2rem', color: '#002B45' }}>Risk Assessment Breakdown</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {domainScores.map((domain, index) => (
              <div key={index} style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: '8px', 
                padding: '1.5rem',
                backgroundColor: '#f9fafb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{domain.icon}</span>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#002B45' }}>{domain.domain}</h3>
                  <span style={{ marginLeft: 'auto', fontSize: '1.5rem', fontWeight: 'bold', color: '#00A3AD' }}>
                    {domain.score}
                  </span>
                </div>
                <div style={{ 
                  backgroundColor: '#e5e7eb', 
                  height: '8px', 
                  borderRadius: '4px', 
                  marginBottom: '0.5rem',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    backgroundColor: '#00A3AD', 
                    height: '100%', 
                    width: `${domain.score}%`,
                    borderRadius: '4px'
                  }}></div>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div style={cardStyle}>
          <h2 style={{ marginBottom: '1.5rem', color: '#002B45' }}>📋 Recommended Actions</h2>
          {recommendations.length > 0 ? (
            <ul style={{ paddingLeft: '1.5rem' }}>
              {recommendations.map((rec, index) => (
                <li key={index} style={{ marginBottom: '0.5rem', color: '#374151' }}>{rec}</li>
              ))}
            </ul>
          ) : (
            <p style={{ color: '#10b981', fontWeight: '600' }}>
              ✓ No critical issues identified. Continue monitoring vendor performance.
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div style={cardStyle}>
          <h2 style={{ marginBottom: '1.5rem', color: '#002B45' }}>Next Steps</h2>
          <p style={{ color: '#6c757d', marginBottom: '2rem' }}>
            Based on your vendor risk assessment results, consider implementing the recommended 
            risk mitigation measures and establishing ongoing monitoring procedures.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button style={btnStyle}>
              <Share2 style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Share Results
            </button>
            <button style={btnStyle}>
              <Download style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Download Report
            </button>
            <Link to="/vendor-risk-assessment-start" style={btnSecondaryStyle}>
              Assess Another Vendor
            </Link>
            <a href="https://titanide.zohobookings.com/#/3973691000005149002" 
               target="_blank" 
               rel="noopener noreferrer" 
               style={btnStyle}>
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRiskAssessmentResults;
