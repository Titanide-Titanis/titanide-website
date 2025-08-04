
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Share2, Building, AlertTriangle, CheckCircle, TrendingUp, Shield, FileCheck, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

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
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Assessment Data Found</h3>
            <p className="text-muted-foreground mb-4">
              Please complete the vendor risk assessment first.
            </p>
            <Link to="/vendor-risk-assessment-start">
              <Button>Start Assessment</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const { responses, score } = assessmentData;
  const vendorName = responses.vendor_name || 'Unknown Vendor';
  const vendorType = responses.vendor_type || 'Unspecified';
  const criticalityLevel = responses.criticality_level || 'Unknown';
  
  const getRiskLevel = (score: number) => {
    if (score >= 81) return { level: 'Low Risk', color: 'bg-green-500', textColor: 'text-green-700' };
    if (score >= 61) return { level: 'Medium Risk', color: 'bg-yellow-500', textColor: 'text-yellow-700' };
    if (score >= 41) return { level: 'High Risk', color: 'bg-orange-500', textColor: 'text-orange-700' };
    return { level: 'Critical Risk', color: 'bg-red-500', textColor: 'text-red-700' };
  };

  const riskLevel = getRiskLevel(score);

  const domainScores = [
    {
      domain: 'Financial & Operational',
      icon: TrendingUp,
      score: calculateDomainScore('financial-operational'),
      description: 'Financial stability, business continuity, and operational resilience'
    },
    {
      domain: 'Cybersecurity & Data Protection',
      icon: Shield,
      score: calculateDomainScore('cybersecurity-data'),
      description: 'Security certifications, data protection, and incident management'
    },
    {
      domain: 'Compliance & Regulatory',
      icon: FileCheck,
      score: calculateDomainScore('compliance-regulatory'),
      description: 'Regulatory alignment, audit results, and privacy programs'
    },
    {
      domain: 'Operational Dependencies',
      icon: Building,
      score: calculateDomainScore('operational-dependencies'),
      description: 'SLA performance, support capabilities, and exit strategies'
    },
    {
      domain: 'Due Diligence Documentation',
      icon: Eye,
      score: calculateDomainScore('due-diligence'),
      description: 'Contract completeness, insurance verification, and documentation'
    },
    {
      domain: 'Vendor Information & Criticality',
      icon: Users,
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
    
    // Overall risk-based recommendations
    if (overallScore < 41) {
      recs.push({
        priority: 'Critical',
        title: 'Immediate Risk Mitigation Required',
        description: 'This vendor presents critical risks that require immediate attention and potential service limitations.',
        icon: AlertTriangle
      });
    } else if (overallScore < 61) {
      recs.push({
        priority: 'High',
        title: 'Enhanced Monitoring and Controls',
        description: 'Implement additional oversight and control measures for this high-risk vendor relationship.',
        icon: Shield
      });
    }
    
    // Domain-specific recommendations
    domains.forEach(domain => {
      if (domain.score < 60) {
        recs.push({
          priority: domain.score < 40 ? 'Critical' : 'High',
          title: `Address ${domain.domain} Deficiencies`,
          description: `${domain.description} shows significant gaps requiring remediation.`,
          icon: domain.icon
        });
      }
    });
    
    return recs.slice(0, 5); // Limit to top 5 recommendations
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/vendor-risk-assessment-start" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assessment
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Results
            </Button>
            <Button size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>

        {/* Results Header */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Building className="h-8 w-8 text-primary" />
              <div>
                <CardTitle className="text-3xl">{vendorName}</CardTitle>
                <CardDescription className="text-lg">{vendorType}</CardDescription>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{score}</div>
                <div className="text-sm text-muted-foreground">Overall Score</div>
              </div>
              
              <div className="text-center">
                <Badge className={`${riskLevel.color} text-white px-4 py-2 text-base`}>
                  {riskLevel.level}
                </Badge>
                <div className="text-sm text-muted-foreground mt-2">Risk Classification</div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-semibold">{criticalityLevel.split(' - ')[0]}</div>
                <div className="text-sm text-muted-foreground">Business Criticality</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Domain Scores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {domainScores.map((domain, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <domain.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{domain.domain}</CardTitle>
                  </div>
                  <div className="text-2xl font-bold">{domain.score}</div>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={domain.score} className="mb-3" />
                <CardDescription className="text-sm">
                  {domain.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Risk Summary and Recommendations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                Risk Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Overall Risk Level</span>
                  <Badge className={`${riskLevel.color} text-white`}>{riskLevel.level}</Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Key Risk Factors:</div>
                  {domainScores
                    .filter(d => d.score < 70)
                    .map((domain, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                        <span>{domain.domain}: {domain.score}/100</span>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                Recommended Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      rec.priority === 'Critical' ? 'bg-red-100' : 'bg-amber-100'
                    }`}>
                      <rec.icon className={`h-4 w-4 ${
                        rec.priority === 'Critical' ? 'text-red-600' : 'text-amber-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium">{rec.title}</span>
                        <Badge variant="outline" className="text-xs">
                          {rec.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{rec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Based on your vendor risk assessment results, consider implementing the recommended 
              risk mitigation measures and establishing ongoing monitoring procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vendor-risk-assessment-start">
                <Button variant="outline" size="lg">
                  Assess Another Vendor
                </Button>
              </Link>
              <Button size="lg">
                Schedule Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VendorRiskAssessmentResults;
