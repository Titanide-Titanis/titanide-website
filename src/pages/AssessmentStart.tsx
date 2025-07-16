import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Building, Users, Database, Zap, FileText, AlertTriangle, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AssessmentStart = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});

  const steps = [
    {
      id: "user-info",
      title: "User Information",
      icon: Users,
      questions: [
        {
          id: "full_name",
          type: "text",
          question: "Full Name",
          required: true
        },
        {
          id: "email",
          type: "email",
          question: "Email Address",
          required: true
        },
        {
          id: "job_title",
          type: "text",
          question: "Job Title",
          required: true
        },
        {
          id: "department",
          type: "text",
          question: "Department/Division",
          required: true
        },
        {
          id: "phone",
          type: "text",
          question: "Phone Number",
          required: false
        },
        {
          id: "reporting_structure",
          type: "radio",
          question: "Who do you report to regarding compliance matters?",
          required: true,
          options: [
            "Chief Executive Officer (CEO)",
            "Chief Risk Officer (CRO)",
            "General Counsel",
            "Chief Financial Officer (CFO)",
            "Board of Directors",
            "Audit Committee",
            "Other C-Level Executive"
          ]
        }
      ]
    },
    {
      id: "organization",
      title: "Organizational Profile",
      icon: Building,
      questions: [
        {
          id: "company_name",
          type: "text",
          question: "Organization Name",
          required: true
        },
        {
          id: "industry_sector",
          type: "radio",
          question: "Primary Industry Sector",
          required: true,
          options: [
            "Healthcare & Life Sciences",
            "Financial Services & Banking",
            "Technology & Software",
            "Manufacturing & Industrial",
            "Energy & Utilities",
            "Education & Research",
            "Government & Public Sector",
            "Retail & Consumer Goods",
            "Professional Services",
            "Real Estate & Construction",
            "Transportation & Logistics",
            "Media & Entertainment"
          ]
        },
        {
          id: "organization_size",
          type: "radio",
          question: "Organization Size (Full-time Employees)",
          required: true,
          options: [
            "Startup (1-50 employees)",
            "Small Enterprise (51-250 employees)",
            "Mid-Market (251-1,000 employees)",
            "Large Enterprise (1,001-10,000 employees)",
            "Fortune 1000 (10,001+ employees)"
          ]
        },
        {
          id: "revenue_range",
          type: "radio",
          question: "Annual Revenue Range",
          required: true,
          options: [
            "Under $10M",
            "$10M - $50M",
            "$50M - $250M",
            "$250M - $1B",
            "$1B - $10B",
            "Over $10B"
          ]
        },
        {
          id: "geographic_footprint",
          type: "checkbox",
          question: "Geographic Operations (Select all that apply)",
          required: true,
          options: [
            "United States",
            "European Union",
            "United Kingdom",
            "Canada",
            "Asia-Pacific",
            "Latin America",
            "Middle East & Africa",
            "Other International Markets"
          ]
        },
        {
          id: "public_company",
          type: "radio",
          question: "Is your organization publicly traded?",
          required: true,
          options: [
            "Yes, US public company (SEC reporting)",
            "Yes, international public company",
            "No, privately held",
            "Non-profit organization",
            "Government entity"
          ]
        }
      ]
    },
    {
      id: "regulatory-landscape",
      title: "Regulatory Compliance Landscape",
      icon: FileText,
      questions: [
        {
          id: "applicable_regulations",
          type: "checkbox",
          question: "Which regulations currently apply to your organization? (Select all applicable)",
          required: true,
          options: [
            "Sarbanes-Oxley Act (SOX)",
            "Health Insurance Portability and Accountability Act (HIPAA)",
            "General Data Protection Regulation (GDPR)",
            "California Consumer Privacy Act (CCPA/CPRA)",
            "Payment Card Industry Data Security Standard (PCI DSS)",
            "Federal Information Security Management Act (FISMA)",
            "Gramm-Leach-Bliley Act (GLBA)",
            "Family Educational Rights and Privacy Act (FERPA)",
            "Personal Information Protection and Electronic Documents Act (PIPEDA)",
            "ISO 27001/27002",
            "NIST Cybersecurity Framework",
            "SOC 2 Type II",
            "FedRAMP",
            "Basel III (Banking)",
            "MiFID II (Financial Services)",
            "FDA 21 CFR Part 11 (Life Sciences)",
            "NERC CIP (Energy)",
            "Other Industry-Specific Regulations"
          ]
        },
        {
          id: "regulatory_complexity",
          type: "radio",
          question: "How would you characterize your regulatory compliance complexity?",
          required: true,
          options: [
            "Single jurisdiction, minimal regulations",
            "Multiple regulations, single jurisdiction",
            "Multi-jurisdictional, moderate complexity",
            "Highly complex, multiple jurisdictions and sectors",
            "Maximum complexity with frequent regulatory changes"
          ]
        },
        {
          id: "compliance_maturity",
          type: "radio",
          question: "What is your organization's compliance program maturity level?",
          required: true,
          options: [
            "Ad-hoc: No formal compliance program",
            "Initial: Basic policies and procedures",
            "Developing: Structured program with defined processes",
            "Managed: Integrated compliance management system",
            "Optimized: Continuous improvement and automation"
          ]
        },
        {
          id: "board_oversight",
          type: "radio",
          question: "How frequently does the Board of Directors review compliance matters?",
          required: true,
          options: [
            "Monthly",
            "Quarterly",
            "Semi-annually",
            "Annually",
            "As needed/Ad-hoc",
            "No formal board oversight"
          ]
        }
      ]
    },
    {
      id: "governance-structure",
      title: "Governance & Risk Management Structure",
      icon: Shield,
      questions: [
        {
          id: "compliance_organization",
          type: "radio",
          question: "How is your compliance function organized?",
          required: true,
          options: [
            "Dedicated Chief Compliance Officer with team",
            "Compliance function within Legal department",
            "Compliance function within Risk Management",
            "Compliance function within Finance/Audit",
            "Distributed across multiple departments",
            "No formal compliance organization"
          ]
        },
        {
          id: "three_lines_defense",
          type: "radio",
          question: "Has your organization implemented the Three Lines of Defense model?",
          required: true,
          options: [
            "Yes, fully implemented with clear segregation",
            "Partially implemented",
            "In development/planning stage",
            "No, but considering implementation",
            "No, not applicable to our organization"
          ]
        },
        {
          id: "risk_appetite",
          type: "radio",
          question: "Has the Board established a formal risk appetite statement?",
          required: true,
          options: [
            "Yes, comprehensive and regularly updated",
            "Yes, basic statement exists",
            "In development",
            "No formal risk appetite statement",
            "Not applicable"
          ]
        },
        {
          id: "compliance_training",
          type: "radio",
          question: "How frequently is compliance training conducted organization-wide?",
          required: true,
          options: [
            "Continuously/On-demand",
            "Quarterly",
            "Semi-annually",
            "Annually",
            "As needed",
            "No formal training program"
          ]
        },
        {
          id: "incident_management",
          type: "radio",
          question: "Do you have a formal compliance incident management process?",
          required: true,
          options: [
            "Yes, comprehensive with clear escalation procedures",
            "Yes, basic process exists",
            "In development",
            "No formal process",
            "Handled case-by-case"
          ]
        }
      ]
    },
    {
      id: "data-governance",
      title: "Data Governance & Privacy",
      icon: Database,
      questions: [
        {
          id: "data_classification",
          type: "radio",
          question: "Has your organization implemented a data classification system?",
          required: true,
          options: [
            "Yes, comprehensive classification with automated tagging",
            "Yes, manual classification system",
            "Basic classification for sensitive data only",
            "In development",
            "No formal data classification"
          ]
        },
        {
          id: "data_inventory",
          type: "radio",
          question: "Do you maintain a comprehensive data inventory/data map?",
          required: true,
          options: [
            "Yes, automated and continuously updated",
            "Yes, manually maintained and current",
            "Yes, but outdated or incomplete",
            "In progress",
            "No data inventory exists"
          ]
        },
        {
          id: "privacy_program",
          type: "radio",
          question: "What is the maturity level of your privacy program?",
          required: true,
          options: [
            "Mature program with dedicated privacy officer",
            "Established program with documented procedures",
            "Basic program with minimal documentation",
            "Ad-hoc privacy measures",
            "No formal privacy program"
          ]
        },
        {
          id: "data_retention",
          type: "radio",
          question: "Do you have documented data retention and disposal policies?",
          required: true,
          options: [
            "Yes, comprehensive with automated enforcement",
            "Yes, documented but manual enforcement",
            "Basic policies exist",
            "In development",
            "No formal retention policies"
          ]
        },
        {
          id: "cross_border_transfers",
          type: "radio",
          question: "How do you manage international data transfers?",
          required: true,
          options: [
            "Comprehensive transfer impact assessments",
            "Standard contractual clauses and adequacy decisions",
            "Basic cross-border agreements",
            "Ad-hoc arrangements",
            "No international data transfers"
          ]
        }
      ]
    },
    {
      id: "cybersecurity-controls",
      title: "Cybersecurity & Information Security",
      icon: Zap,
      questions: [
        {
          id: "security_framework",
          type: "checkbox",
          question: "Which cybersecurity frameworks has your organization adopted?",
          required: true,
          options: [
            "NIST Cybersecurity Framework",
            "ISO 27001/27002",
            "CIS Critical Security Controls",
            "COBIT",
            "FAIR (Factor Analysis of Information Risk)",
            "OCTAVE (Operationally Critical Threat)",
            "Industry-specific frameworks",
            "Custom framework",
            "No formal framework"
          ]
        },
        {
          id: "security_maturity",
          type: "radio",
          question: "What is your cybersecurity program maturity level?",
          required: true,
          options: [
            "Optimized: Continuous improvement and innovation",
            "Managed: Integrated security management",
            "Defined: Standardized processes and procedures",
            "Developing: Basic security measures implemented",
            "Initial: Ad-hoc security measures"
          ]
        },
        {
          id: "threat_intelligence",
          type: "radio",
          question: "Does your organization utilize threat intelligence?",
          required: true,
          options: [
            "Yes, comprehensive threat intelligence program",
            "Yes, basic threat feeds and monitoring",
            "Limited threat intelligence capabilities",
            "Considering implementation",
            "No threat intelligence program"
          ]
        },
        {
          id: "security_assessments",
          type: "radio",
          question: "How frequently do you conduct comprehensive security risk assessments?",
          required: true,
          options: [
            "Continuously/Real-time monitoring",
            "Quarterly",
            "Semi-annually",
            "Annually",
            "As needed",
            "Never conducted"
          ]
        },
        {
          id: "incident_response",
          type: "radio",
          question: "What is the maturity of your cybersecurity incident response capability?",
          required: true,
          options: [
            "Mature program with 24/7 SOC and tested procedures",
            "Established program with documented procedures",
            "Basic incident response plan exists",
            "Informal incident handling",
            "No incident response capability"
          ]
        }
      ]
    },
    {
      id: "third-party-risk",
      title: "Third-Party Risk Management",
      icon: AlertTriangle,
      questions: [
        {
          id: "vendor_management",
          type: "radio",
          question: "How mature is your third-party risk management program?",
          required: true,
          options: [
            "Comprehensive program with continuous monitoring",
            "Established program with periodic reviews",
            "Basic vendor assessment process",
            "Informal vendor management",
            "No formal third-party risk program"
          ]
        },
        {
          id: "due_diligence",
          type: "radio",
          question: "What level of due diligence do you perform on critical vendors?",
          required: true,
          options: [
            "Comprehensive due diligence with on-site assessments",
            "Detailed questionnaires and documentation review",
            "Basic compliance verification",
            "Minimal due diligence",
            "No formal due diligence process"
          ]
        },
        {
          id: "vendor_monitoring",
          type: "radio",
          question: "How do you monitor ongoing vendor compliance?",
          required: true,
          options: [
            "Continuous monitoring with automated alerts",
            "Regular periodic assessments",
            "Annual vendor reviews",
            "Ad-hoc monitoring",
            "No ongoing monitoring"
          ]
        },
        {
          id: "contract_management",
          type: "radio",
          question: "Do your vendor contracts include appropriate compliance clauses?",
          required: true,
          options: [
            "Yes, comprehensive compliance and audit rights",
            "Yes, standard compliance clauses",
            "Basic compliance requirements",
            "Minimal compliance language",
            "No specific compliance clauses"
          ]
        }
      ]
    },
    {
      id: "monitoring-reporting",
      title: "Compliance Monitoring & Reporting",
      icon: BarChart3,
      questions: [
        {
          id: "compliance_monitoring",
          type: "radio",
          question: "How do you monitor ongoing compliance with regulations?",
          required: true,
          options: [
            "Automated compliance monitoring with real-time dashboards",
            "Regular systematic monitoring and testing",
            "Periodic compliance reviews",
            "Annual compliance assessments",
            "Ad-hoc monitoring only"
          ]
        },
        {
          id: "kpi_metrics",
          type: "radio",
          question: "Do you track compliance KPIs and metrics?",
          required: true,
          options: [
            "Yes, comprehensive dashboard with leading indicators",
            "Yes, basic metrics tracked regularly",
            "Limited metrics tracking",
            "Considering implementation",
            "No compliance metrics tracked"
          ]
        },
        {
          id: "regulatory_reporting",
          type: "radio",
          question: "How do you manage regulatory reporting requirements?",
          required: true,
          options: [
            "Automated reporting systems with workflow management",
            "Systematic manual reporting processes",
            "Basic reporting procedures",
            "Ad-hoc reporting as required",
            "Struggling with reporting requirements"
          ]
        },
        {
          id: "audit_readiness",
          type: "radio",
          question: "How would you rate your organization's audit readiness?",
          required: true,
          options: [
            "Always audit-ready with continuous documentation",
            "Well-prepared with organized documentation",
            "Moderately prepared, some gaps exist",
            "Basic preparation, significant effort required",
            "Minimal preparation, extensive work needed"
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
      localStorage.setItem('assessmentData', JSON.stringify(assessmentData));
      navigate('/assessment-results');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    // Enterprise-level scoring algorithm
    let totalPoints = 0;
    let maxPoints = 0;

    const scoringWeights = {
      'regulatory-landscape': 25,
      'governance-structure': 20,
      'data-governance': 20,
      'cybersecurity-controls': 15,
      'third-party-risk': 10,
      'monitoring-reporting': 10
    };

    Object.entries(responses).forEach(([questionId, response]) => {
      const step = steps.find(s => s.questions.some(q => q.id === questionId));
      if (!step || step.id === 'user-info' || step.id === 'organization') return;

      const weight = scoringWeights[step.id] || 1;
      maxPoints += weight * 4; // Max 4 points per question

      // Score based on response quality
      if (Array.isArray(response)) {
        totalPoints += Math.min(response.length * 2, 4) * weight;
      } else if (typeof response === 'string' && response.length > 0) {
        // Score based on maturity level in response
        const maturityScore = getMaturityScore(response);
        totalPoints += maturityScore * weight;
      }
    });

    return Math.min(Math.round((totalPoints / maxPoints) * 100), 100);
  };

  const getMaturityScore = (response: string) => {
    // Score responses based on compliance maturity indicators
    const highMaturity = ['comprehensive', 'mature', 'optimized', 'automated', 'continuous'];
    const mediumMaturity = ['established', 'managed', 'documented', 'systematic', 'regular'];
    const lowMaturity = ['basic', 'minimal', 'ad-hoc', 'informal', 'considering'];
    const noMaturity = ['no', 'never', 'none', 'not applicable'];

    const lowerResponse = response.toLowerCase();
    
    if (highMaturity.some(term => lowerResponse.includes(term))) return 4;
    if (mediumMaturity.some(term => lowerResponse.includes(term))) return 3;
    if (lowMaturity.some(term => lowerResponse.includes(term))) return 2;
    if (noMaturity.some(term => lowerResponse.includes(term))) return 1;
    return 2; // Default moderate score
  };

  const isStepComplete = () => {
    const requiredQuestions = currentStepData.questions.filter(q => q.required);
    return requiredQuestions.every(q => responses[q.id] && responses[q.id] !== '');
  };

  const renderQuestion = (question: any) => {
    const StepIcon = currentStepData.icon;
    
    switch (question.type) {
      case 'text':
      case 'email':
        return (
          <div className="space-y-3">
            <Label htmlFor={question.id} className="text-base font-medium">
              {question.question}
              {question.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <Input
              id={question.id}
              type={question.type === 'email' ? 'email' : 'text'}
              value={responses[question.id] || ''}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              placeholder="Enter your answer..."
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
              placeholder="Enter your answer..."
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
          <Link to="/assessment" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assessment
          </Link>
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {totalSteps}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Assessment Progress</span>
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

export default AssessmentStart;