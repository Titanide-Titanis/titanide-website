
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Building, TrendingUp, Shield, FileCheck, Eye, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle } from "lucide-react";

const VendorRiskAssessmentStart = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});

  const steps = [
    {
      id: "vendor-information",
      title: "Vendor Information & Criticality",
      icon: Users,
      questions: [
        {
          id: "vendor_name",
          type: "text",
          question: "Vendor/Supplier Name",
          required: true
        },
        {
          id: "vendor_type",
          type: "radio",
          question: "Vendor Type",
          required: true,
          options: [
            "Technology/Software Provider",
            "Professional Services",
            "Financial Services",
            "Healthcare/Medical Services",
            "Manufacturing/Supplier",
            "Infrastructure/Utilities",
            "Logistics/Transportation",
            "Marketing/Communications",
            "Legal Services",
            "Other"
          ]
        },
        {
          id: "services_provided",
          type: "textarea",
          question: "Primary Services/Products Provided",
          required: true
        },
        {
          id: "criticality_level",
          type: "radio",
          question: "Business Criticality Level",
          required: true,
          options: [
            "Critical - Essential to core business operations",
            "High - Important for business functions",
            "Medium - Supporting business activities", 
            "Low - Non-essential services"
          ]
        },
        {
          id: "data_access_level",
          type: "radio",
          question: "Level of Data Access",
          required: true,
          options: [
            "Full access to sensitive/confidential data",
            "Limited access to sensitive data",
            "Access to internal business data only",
            "Access to public information only",
            "No data access"
          ]
        },
        {
          id: "contract_duration",
          type: "radio",
          question: "Contract Duration/Relationship Length",
          required: true,
          options: [
            "New vendor (less than 1 year)",
            "1-3 years",
            "3-5 years", 
            "5+ years",
            "No formal contract"
          ]
        }
      ]
    },
    {
      id: "financial-operational",
      title: "Financial & Operational Risk",
      icon: TrendingUp,
      questions: [
        {
          id: "financial_stability",
          type: "radio",
          question: "Financial Stability Assessment",
          required: true,
          options: [
            "Excellent - Strong financials, public company or well-funded",
            "Good - Stable revenue, established business",
            "Fair - Some financial concerns or limited transparency",
            "Poor - Financial instability or distress indicators",
            "Unknown - Insufficient financial information"
          ]
        },
        {
          id: "business_continuity",
          type: "radio",
          question: "Business Continuity Planning",
          required: true,
          options: [
            "Comprehensive BCP with regular testing",
            "Basic BCP documented and communicated",
            "Informal continuity measures",
            "No apparent continuity planning",
            "Unknown continuity capabilities"
          ]
        },
        {
          id: "geographic_risk",
          type: "radio",
          question: "Geographic Risk Profile",
          required: true,
          options: [
            "Low risk - Domestic operations in stable regions",
            "Medium risk - Some international exposure",
            "High risk - Significant offshore operations",
            "Very high risk - Operations in high-risk jurisdictions",
            "Unknown geographic footprint"
          ]
        },
        {
          id: "operational_resilience",
          type: "radio", 
          question: "Operational Resilience & Redundancy",
          required: true,
          options: [
            "Multiple locations with full redundancy",
            "Some backup capabilities and redundancy",
            "Limited backup or redundancy measures",
            "Single point of failure concerns",
            "Unknown operational setup"
          ]
        },
        {
          id: "dependency_level",
          type: "radio",
          question: "Your Organization's Dependency Level",
          required: true,
          options: [
            "High dependency - Difficult to replace quickly",
            "Medium dependency - Replacement possible with effort",
            "Low dependency - Easily replaceable",
            "No significant dependency",
            "Mutual dependency relationship"
          ]
        }
      ]
    },
    {
      id: "cybersecurity-data",
      title: "Cybersecurity & Data Protection",
      icon: Shield,
      questions: [
        {
          id: "security_certifications",
          type: "checkbox",
          question: "Security Certifications & Standards (Select all that apply)",
          required: true,
          options: [
            "ISO 27001 Certified",
            "SOC 2 Type II",
            "FedRAMP Authorized",
            "NIST Cybersecurity Framework",
            "Industry-specific certifications",
            "No formal certifications",
            "Unknown certification status"
          ]
        },
        {
          id: "data_protection_practices",
          type: "radio",
          question: "Data Protection Practices",
          required: true,
          options: [
            "Comprehensive data protection with encryption at rest/transit",
            "Good data protection practices documented",
            "Basic data protection measures",
            "Minimal data protection controls",
            "Unknown data protection practices"
          ]
        },
        {
          id: "incident_history",
          type: "radio", 
          question: "Security Incident History (Past 3 Years)",
          required: true,
          options: [
            "No known security incidents",
            "Minor incidents with good response",
            "Some incidents with adequate response", 
            "Major incidents or poor incident response",
            "Unknown incident history"
          ]
        },
        {
          id: "access_controls",
          type: "radio",
          question: "Access Control & Authentication",
          required: true,
          options: [
            "Multi-factor authentication and strong access controls",
            "Good access control practices",
            "Basic username/password authentication",
            "Weak or unknown access controls",
            "No information about access controls"
          ]
        },
        {
          id: "vulnerability_management",
          type: "radio",
          question: "Vulnerability Management Program",
          required: true,
          options: [
            "Comprehensive vulnerability management with regular assessments",
            "Regular vulnerability scanning and patching",
            "Basic vulnerability management",
            "Ad-hoc or minimal vulnerability management",
            "Unknown vulnerability management practices"
          ]
        }
      ]
    },
    {
      id: "compliance-regulatory",
      title: "Compliance & Regulatory",
      icon: FileCheck,
      questions: [
        {
          id: "regulatory_compliance",
          type: "checkbox",
          question: "Relevant Regulatory Compliance (Select all that apply)",
          required: true,
          options: [
            "GDPR (EU Data Protection)",
            "HIPAA (Healthcare)",
            "PCI DSS (Payment Card Industry)",
            "SOX (Financial Reporting)",
            "CCPA/CPRA (California Privacy)",
            "Industry-specific regulations",
            "No specific regulatory requirements",
            "Unknown compliance status"
          ]
        },
        {
          id: "audit_results",
          type: "radio",
          question: "Recent Audit Results (Past 2 Years)",
          required: true,
          options: [
            "Clean audit results with no significant findings",
            "Minor findings with remediation completed",
            "Some findings with ongoing remediation",
            "Significant audit findings or failed audits",
            "No recent audits or unknown results"
          ]
        },
        {
          id: "privacy_program",
          type: "radio",
          question: "Privacy Program Maturity",
          required: true,
          options: [
            "Mature privacy program with dedicated resources",
            "Established privacy policies and procedures",
            "Basic privacy measures",
            "Minimal or no privacy program",
            "Unknown privacy practices"
          ]
        },
        {
          id: "subcontractor_management",
          type: "radio",
          question: "Subcontractor/Fourth-Party Management",
          required: true,
          options: [
            "Comprehensive subcontractor risk management",
            "Basic oversight of subcontractors",
            "Limited subcontractor management",
            "No subcontractor oversight",
            "Unknown subcontractor arrangements"
          ]
        }
      ]
    },
    {
      id: "operational-dependencies",
      title: "Operational Dependencies",
      icon: Building,
      questions: [
        {
          id: "sla_performance",
          type: "radio",
          question: "SLA Performance & Monitoring",
          required: true,
          options: [
            "Consistently meets or exceeds SLAs with good monitoring",
            "Generally meets SLAs with occasional issues",
            "Mixed SLA performance",
            "Frequent SLA breaches or poor performance",
            "No SLAs in place or unknown performance"
          ]
        },
        {
          id: "escalation_procedures",
          type: "radio",
          question: "Issue Escalation & Support",
          required: true,
          options: [
            "Clear escalation procedures with responsive support",
            "Good support with defined escalation paths",
            "Basic support capabilities",
            "Poor support or unclear escalation",
            "No formal support arrangements"
          ]
        },
        {
          id: "exit_strategy",
          type: "radio",
          question: "Exit Strategy & Data Portability",
          required: true,
          options: [
            "Comprehensive exit strategy with data portability guarantees",
            "Basic exit provisions in contract",
            "Limited exit planning",
            "Difficult or costly exit process",
            "No exit strategy considerations"
          ]
        },
        {
          id: "change_management",
          type: "radio",
          question: "Change Management & Communication",
          required: true,
          options: [
            "Proactive change management with advance notice",
            "Good communication about changes",
            "Basic change notification",
            "Poor change management or communication",
            "No formal change management process"
          ]
        },
        {
          id: "integration_complexity",
          type: "radio",
          question: "System Integration Complexity",
          required: true,
          options: [
            "Simple integration with standard interfaces",
            "Moderate integration complexity",
            "Complex integration with custom development",
            "Highly complex or proprietary integration",
            "No system integration required"
          ]
        }
      ]
    },
    {
      id: "due-diligence",
      title: "Due Diligence Documentation",
      icon: Eye,
      questions: [
        {
          id: "contract_completeness",
          type: "radio",
          question: "Contract Completeness & Risk Allocation",
          required: true,
          options: [
            "Comprehensive contract with appropriate risk allocation",
            "Good contract coverage with minor gaps",
            "Basic contract with some missing provisions",
            "Inadequate contract terms or risk allocation",
            "No formal contract in place"
          ]
        },
        {
          id: "insurance_coverage",
          type: "radio",
          question: "Insurance Coverage Verification",
          required: true,
          options: [
            "Adequate insurance verified with certificates",
            "Insurance coverage appears sufficient",
            "Basic insurance coverage",
            "Insufficient or unverified insurance",
            "No insurance requirements or verification"
          ]
        },
        {
          id: "reference_checks",
          type: "radio",
          question: "Reference & Reputation Verification",
          required: true,
          options: [
            "Positive references from multiple current clients",
            "Good references with minor concerns",
            "Mixed references or limited feedback",
            "Negative references or reputation issues",
            "No reference checks conducted"
          ]
        },
        {
          id: "onsite_assessment",
          type: "radio",
          question: "On-site or Virtual Assessment Conducted",
          required: true,
          options: [
            "Comprehensive on-site assessment completed",
            "Virtual assessment with good documentation review",
            "Basic facility or operational review",
            "Limited assessment or due diligence",
            "No formal assessment conducted"
          ]
        },
        {
          id: "documentation_completeness",
          type: "radio",
          question: "Documentation & Record Completeness",
          required: true,
          options: [
            "Complete documentation package with regular updates",
            "Good documentation with most required items",
            "Basic documentation with some gaps",
            "Incomplete or outdated documentation",
            "Minimal or no vendor documentation"
          ]
        }
      ]
    }
  ];

  const currentStepData = steps[currentStep];
  const totalSteps = steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleInputChange = (questionId: string, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results and navigate
      const assessmentData = {
        responses,
        timestamp: new Date().toISOString(),
        score: calculateScore()
      };
      localStorage.setItem('vendorAssessmentData', JSON.stringify(assessmentData));
      navigate('/vendor-risk-assessment-results');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    let totalPoints = 0;
    let maxPoints = 0;

    const scoringWeights = {
      'vendor-information': 15,
      'financial-operational': 20,
      'cybersecurity-data': 25,
      'compliance-regulatory': 20,
      'operational-dependencies': 15,
      'due-diligence': 5
    };

    Object.entries(responses).forEach(([questionId, response]) => {
      const step = steps.find(s => s.questions.some(q => q.id === questionId));
      if (!step) return;

      const weight = scoringWeights[step.id] || 1;
      maxPoints += weight * 4;

      if (Array.isArray(response)) {
        totalPoints += Math.min(response.length * 2, 4) * weight;
      } else if (typeof response === 'string' && response.length > 0) {
        const riskScore = getRiskScore(response);
        totalPoints += riskScore * weight;
      }
    });

    return Math.min(Math.round((totalPoints / maxPoints) * 100), 100);
  };

  const getRiskScore = (response: string) => {
    const lowerResponse = response.toLowerCase();
    
    // Higher score = lower risk
    const lowRisk = ['excellent', 'comprehensive', 'strong', 'clean', 'positive', 'proactive', 'adequate'];
    const mediumRisk = ['good', 'basic', 'established', 'generally', 'some'];
    const highRisk = ['fair', 'mixed', 'limited', 'poor', 'minimal', 'difficult'];
    const veryHighRisk = ['unknown', 'no', 'none', 'negative', 'major', 'failed'];
    
    if (lowRisk.some(term => lowerResponse.includes(term))) return 4;
    if (mediumRisk.some(term => lowerResponse.includes(term))) return 3;
    if (highRisk.some(term => lowerResponse.includes(term))) return 2;
    if (veryHighRisk.some(term => lowerResponse.includes(term))) return 1;
    return 2; // Default moderate score
  };

  const isStepComplete = () => {
    const requiredQuestions = currentStepData.questions.filter(q => q.required);
    return requiredQuestions.every(q => responses[q.id] && responses[q.id] !== '');
  };

  const renderQuestion = (question: any) => {
    switch (question.type) {
      case 'text':
        return (
          <div className="space-y-3">
            <Label htmlFor={question.id} className="text-base font-medium">
              {question.question}
              {question.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <Input
              id={question.id}
              value={responses[question.id] || ''}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              placeholder="Enter vendor name..."
              className="text-base"
            />
          </div>
        );
      
      case 'textarea':
        return (
          <div className="space-y-3">
            <Label htmlFor={question.id} className="text-base font-medium">
              {question.question}
              {question.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <Textarea
              id={question.id}
              value={responses[question.id] || ''}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              placeholder="Describe the primary services or products..."
              className="text-base min-h-[100px]"
            />
          </div>
        );
      
      case 'radio':
        return (
          <div className="space-y-4">
            <Label className="text-base font-medium">
              {question.question}
              {question.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <RadioGroup
              value={responses[question.id] || ''}
              onValueChange={(value) => handleInputChange(question.id, value)}
              className="space-y-3"
            >
              {question.options.map((option: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <RadioGroupItem value={option} id={`${question.id}_${index}`} />
                  <Label htmlFor={`${question.id}_${index}`} className="text-base cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-4">
            <Label className="text-base font-medium">
              {question.question}
              {question.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <div className="space-y-3">
              {question.options.map((option: string, index: number) => {
                const isChecked = (responses[question.id] || []).includes(option);
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={`${question.id}_${index}`}
                      checked={isChecked}
                      onChange={(e) => {
                        const currentValues = responses[question.id] || [];
                        const newValues = e.target.checked
                          ? [...currentValues, option]
                          : currentValues.filter((v: string) => v !== option);
                        handleInputChange(question.id, newValues);
                      }}
                      className="h-4 w-4 rounded border-input"
                    />
                    <Label htmlFor={`${question.id}_${index}`} className="text-base cursor-pointer">
                      {option}
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/vendor-risk-assessment" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Vendor Assessment
          </Link>
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {totalSteps}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Vendor Assessment Progress</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Current Step */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <currentStepData.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">{currentStepData.title}</CardTitle>
                <CardDescription>
                  Please answer all questions to continue to the next section.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {currentStepData.questions.map((question, index) => (
              <div key={question.id} className="space-y-4">
                {renderQuestion(question)}
                {index < currentStepData.questions.length - 1 && (
                  <hr className="border-muted" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!isStepComplete()}
            className="min-w-[120px]"
          >
            {currentStep === totalSteps - 1 ? (
              <>
                Get Results
                <CheckCircle className="h-4 w-4 ml-2" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Warning for incomplete step */}
        {!isStepComplete() && (
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              Please answer all required questions (marked with *) to continue.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorRiskAssessmentStart;
