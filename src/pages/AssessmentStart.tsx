import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Building, Users, Database, Zap, FileText, AlertTriangle } from "lucide-react";
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
      id: "company",
      title: "Company Information",
      icon: Building,
      questions: [
        {
          id: "company_name",
          type: "text",
          question: "Company Name",
          required: true
        },
        {
          id: "industry",
          type: "radio",
          question: "What industry does your organization operate in?",
          required: true,
          options: [
            "Healthcare & Life Sciences",
            "Financial Services",
            "Technology",
            "Manufacturing",
            "Education",
            "Government/Public Sector",
            "Other"
          ]
        },
        {
          id: "company_size",
          type: "radio",
          question: "How many employees does your organization have?",
          required: true,
          options: [
            "1-50",
            "51-200",
            "201-1000",
            "1001-5000",
            "5000+"
          ]
        }
      ]
    },
    {
      id: "data-privacy",
      title: "Data Privacy & Protection",
      icon: Shield,
      questions: [
        {
          id: "data_types",
          type: "checkbox",
          question: "What types of sensitive data does your organization handle?",
          required: true,
          options: [
            "Personal Health Information (PHI)",
            "Payment Card Information (PCI)",
            "Personal Identifiable Information (PII)",
            "Financial Records",
            "Intellectual Property",
            "None of the above"
          ]
        },
        {
          id: "privacy_program",
          type: "radio",
          question: "Does your organization have a formal data privacy program?",
          required: true,
          options: [
            "Yes, comprehensive program with dedicated staff",
            "Yes, basic program with part-time oversight",
            "In development",
            "No formal program"
          ]
        },
        {
          id: "data_incidents",
          type: "radio",
          question: "Has your organization experienced a data breach in the past 2 years?",
          required: true,
          options: [
            "No",
            "Yes, minor incident",
            "Yes, major incident",
            "Yes, multiple incidents"
          ]
        }
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Controls",
      icon: Zap,
      questions: [
        {
          id: "security_framework",
          type: "radio",
          question: "Which cybersecurity framework does your organization follow?",
          required: true,
          options: [
            "NIST Cybersecurity Framework",
            "ISO 27001",
            "SOC 2",
            "CIS Controls",
            "Multiple frameworks",
            "No formal framework"
          ]
        },
        {
          id: "security_controls",
          type: "checkbox",
          question: "Which security controls are currently implemented?",
          required: true,
          options: [
            "Multi-factor authentication",
            "Endpoint detection and response",
            "Security awareness training",
            "Vulnerability scanning",
            "Incident response plan",
            "Business continuity plan"
          ]
        },
        {
          id: "security_assessments",
          type: "radio",
          question: "How often do you conduct security risk assessments?",
          required: true,
          options: [
            "Annually",
            "Bi-annually", 
            "Quarterly",
            "As needed",
            "Never"
          ]
        }
      ]
    },
    {
      id: "regulatory",
      title: "Regulatory Compliance",
      icon: FileText,
      questions: [
        {
          id: "regulations",
          type: "checkbox",
          question: "Which regulations apply to your organization?",
          required: true,
          options: [
            "HIPAA",
            "GDPR",
            "CCPA",
            "SOX",
            "PCI DSS",
            "FERPA",
            "SOC 2",
            "FedRAMP",
            "Other/Unsure"
          ]
        },
        {
          id: "compliance_monitoring",
          type: "radio",
          question: "How do you monitor ongoing compliance?",
          required: true,
          options: [
            "Automated compliance monitoring tools",
            "Regular manual audits",
            "Annual third-party assessments",
            "Ad-hoc reviews",
            "No formal monitoring"
          ]
        },
        {
          id: "audit_frequency",
          type: "radio",
          question: "How often do you undergo compliance audits?",
          required: true,
          options: [
            "Annually",
            "Bi-annually",
            "Every 2-3 years",
            "As required by regulation",
            "Never"
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
    // Simple scoring logic - in a real app this would be more sophisticated
    let score = 0;
    const totalQuestions = steps.reduce((acc, step) => acc + step.questions.length, 0);
    
    Object.values(responses).forEach((response) => {
      if (Array.isArray(response)) {
        score += response.length * 2; // Checkbox responses
      } else if (typeof response === 'string' && response.length > 0) {
        score += 3; // Text and radio responses
      }
    });
    
    return Math.min(Math.round((score / (totalQuestions * 3)) * 100), 100);
  };

  const isStepComplete = () => {
    const requiredQuestions = currentStepData.questions.filter(q => q.required);
    return requiredQuestions.every(q => responses[q.id] && responses[q.id] !== '');
  };

  const renderQuestion = (question: any) => {
    const StepIcon = currentStepData.icon;
    
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