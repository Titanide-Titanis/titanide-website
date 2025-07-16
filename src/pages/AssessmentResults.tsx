import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Share2, Shield, AlertTriangle, CheckCircle, TrendingUp, FileText, Mail, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import emailjs from 'emailjs-com';

const AssessmentResults = () => {
  const navigate = useNavigate();
  const [assessmentData, setAssessmentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('assessmentData');
    if (data) {
      setAssessmentData(JSON.parse(data));
    } else {
      navigate('/assessment');
    }
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!assessmentData) {
    return null;
  }

  const score = assessmentData.score || 0;
  
  const getScoreLevel = (score: number) => {
    if (score >= 85) return { 
      level: "Excellent", 
      color: "bg-green-500", 
      textColor: "text-green-700",
      description: "Mature compliance program with strong controls across all domains"
    };
    if (score >= 70) return { 
      level: "Good", 
      color: "bg-blue-500", 
      textColor: "text-blue-700",
      description: "Solid compliance foundation with opportunities for enhancement"
    };
    if (score >= 55) return { 
      level: "Developing", 
      color: "bg-yellow-500", 
      textColor: "text-yellow-700",
      description: "Basic compliance structure with significant gaps requiring attention"
    };
    return { 
      level: "Critical", 
      color: "bg-red-500", 
      textColor: "text-red-700",
      description: "Immediate action required to address critical compliance deficiencies"
    };
  };

  const scoreLevel = getScoreLevel(score);

  // Enhanced risk analysis based on responses
  const analyzeRiskAreas = () => {
    const responses = assessmentData.responses;
    const riskAreas = [];

    // Regulatory Landscape Analysis
    const applicableRegs = responses.applicable_regulations || [];
    const regComplexity = responses.regulatory_complexity || '';
    const complianceMaturity = responses.compliance_maturity || '';
    
    let regScore = 100;
    if (applicableRegs.length > 5) regScore -= 20;
    if (regComplexity.includes('complex')) regScore -= 15;
    if (complianceMaturity.includes('Ad-hoc') || complianceMaturity.includes('Initial')) regScore -= 30;

    riskAreas.push({
      domain: "Regulatory Compliance",
      score: Math.max(regScore, 0),
      priority: regScore < 60 ? "Critical" : regScore < 80 ? "High" : "Medium",
      frameworks: applicableRegs.slice(0, 3).join(", "),
      findings: [
        `${applicableRegs.length} applicable regulations identified`,
        `Compliance maturity: ${complianceMaturity}`,
        `Regulatory complexity: ${regComplexity}`
      ],
      recommendations: [
        "Establish comprehensive compliance monitoring program",
        "Implement regulatory change management process",
        "Develop compliance risk assessment methodology"
      ]
    });

    // Data Governance Analysis
    const dataClassification = responses.data_classification || '';
    const dataInventory = responses.data_inventory || '';
    const privacyProgram = responses.privacy_program || '';
    
    let dataScore = 100;
    if (dataClassification.includes('No formal')) dataScore -= 25;
    if (dataInventory.includes('No data inventory')) dataScore -= 25;
    if (privacyProgram.includes('No formal')) dataScore -= 20;

    riskAreas.push({
      domain: "Data Governance & Privacy",
      score: Math.max(dataScore, 0),
      priority: dataScore < 60 ? "Critical" : dataScore < 80 ? "High" : "Medium",
      frameworks: "GDPR, CCPA, PIPEDA",
      findings: [
        `Data classification: ${dataClassification}`,
        `Data inventory: ${dataInventory}`,
        `Privacy program: ${privacyProgram}`
      ],
      recommendations: [
        "Implement comprehensive data classification system",
        "Establish data inventory and mapping procedures",
        "Develop privacy impact assessment process"
      ]
    });

    // Cybersecurity Analysis
    const securityFrameworks = responses.security_framework || [];
    const securityMaturity = responses.security_maturity || '';
    const incidentResponse = responses.incident_response || '';
    
    let secScore = 100;
    if (securityFrameworks.includes('No formal framework')) secScore -= 30;
    if (securityMaturity.includes('Initial') || securityMaturity.includes('Ad-hoc')) secScore -= 25;
    if (incidentResponse.includes('No incident response')) secScore -= 20;

    riskAreas.push({
      domain: "Cybersecurity Controls",
      score: Math.max(secScore, 0),
      priority: secScore < 60 ? "Critical" : secScore < 80 ? "High" : "Medium",
      frameworks: Array.isArray(securityFrameworks) ? securityFrameworks.slice(0, 2).join(", ") : "NIST CSF, ISO 27001",
      findings: [
        `Security frameworks: ${Array.isArray(securityFrameworks) ? securityFrameworks.join(", ") : securityFrameworks}`,
        `Security maturity: ${securityMaturity}`,
        `Incident response: ${incidentResponse}`
      ],
      recommendations: [
        "Adopt comprehensive cybersecurity framework",
        "Enhance incident response capabilities",
        "Implement continuous security monitoring"
      ]
    });

    return riskAreas;
  };

  const riskAreas = analyzeRiskAreas();

  const generateEnhancedPDF = async () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 20;
      
      // Cover Page
      pdf.setFillColor(0, 163, 173); // Primary color
      pdf.rect(0, 0, pageWidth, 80, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(28);
      pdf.setFont('helvetica', 'bold');
      pdf.text('ENTERPRISE COMPLIANCE', pageWidth/2, 30, { align: 'center' });
      pdf.text('ASSESSMENT REPORT', pageWidth/2, 45, { align: 'center' });
      
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Confidential Executive Summary', pageWidth/2, 60, { align: 'center' });
      
      // Cover page info
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('PREPARED FOR:', margin, 110);
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      let yPos = 125;
      pdf.text(`Name: ${assessmentData.responses.full_name || 'N/A'}`, margin, yPos);
      yPos += 8;
      pdf.text(`Title: ${assessmentData.responses.job_title || 'N/A'}`, margin, yPos);
      yPos += 8;
      pdf.text(`Organization: ${assessmentData.responses.company_name || 'N/A'}`, margin, yPos);
      yPos += 8;
      pdf.text(`Department: ${assessmentData.responses.department || 'N/A'}`, margin, yPos);
      yPos += 8;
      pdf.text(`Email: ${assessmentData.responses.email || 'N/A'}`, margin, yPos);
      yPos += 20;
      
      pdf.setFont('helvetica', 'bold');
      pdf.text('ASSESSMENT DETAILS:', margin, yPos);
      yPos += 15;
      
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Report Date: ${new Date(assessmentData.timestamp).toLocaleDateString()}`, margin, yPos);
      yPos += 8;
      pdf.text(`Assessment Type: Enterprise Compliance Framework`, margin, yPos);
      yPos += 8;
      pdf.text(`Overall Score: ${score}/100 (${scoreLevel.level})`, margin, yPos);
      yPos += 8;
      pdf.text(`Industry: ${assessmentData.responses.industry_sector || 'N/A'}`, margin, yPos);
      yPos += 8;
      pdf.text(`Organization Size: ${assessmentData.responses.organization_size || 'N/A'}`, margin, yPos);
      
      // Footer
      pdf.setFontSize(10);
      pdf.setTextColor(128, 128, 128);
      pdf.text('This report contains confidential and proprietary information.', pageWidth/2, 280, { align: 'center' });
      pdf.text('© 2024 Titanide Consulting. All rights reserved.', pageWidth/2, 290, { align: 'center' });
      
      // Page 2 - Executive Summary
      pdf.addPage();
      yPos = margin;
      
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text('EXECUTIVE SUMMARY', margin, yPos);
      yPos += 20;
      
      pdf.setFontSize(14);
      pdf.text('Overall Compliance Assessment', margin, yPos);
      yPos += 15;
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const execSummary = [
        `This comprehensive assessment evaluated ${assessmentData.responses.company_name || 'your organization'}'s compliance`,
        `posture across multiple regulatory frameworks and industry standards. The assessment`,
        `covered ${riskAreas.length} key compliance domains with emphasis on regulatory landscape,`,
        `governance structure, data protection, cybersecurity, and risk management.`,
        '',
        `Key Findings:`,
        `• Overall Compliance Score: ${score}/100 (${scoreLevel.level})`,
        `• ${riskAreas.filter(r => r.priority === 'Critical').length} Critical Risk Areas Identified`,
        `• ${riskAreas.filter(r => r.priority === 'High').length} High Priority Improvement Opportunities`,
        `• Applicable Regulations: ${(assessmentData.responses.applicable_regulations || []).length} frameworks`,
        '',
        scoreLevel.description
      ];
      
      execSummary.forEach(line => {
        if (yPos > 250) {
          pdf.addPage();
          yPos = margin;
        }
        pdf.text(line, margin, yPos);
        yPos += 6;
      });
      
      // Page 3+ - Detailed Risk Analysis
      pdf.addPage();
      yPos = margin;
      
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text('DETAILED RISK ANALYSIS', margin, yPos);
      yPos += 20;
      
      riskAreas.forEach((area, index) => {
        if (yPos > 220) {
          pdf.addPage();
          yPos = margin;
        }
        
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${index + 1}. ${area.domain}`, margin, yPos);
        yPos += 10;
        
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`Score: ${area.score}/100 | Priority: ${area.priority} | Frameworks: ${area.frameworks}`, margin, yPos);
        yPos += 12;
        
        pdf.setFont('helvetica', 'bold');
        pdf.text('Key Findings:', margin, yPos);
        yPos += 6;
        
        pdf.setFont('helvetica', 'normal');
        area.findings.forEach(finding => {
          pdf.text(`• ${finding}`, margin + 5, yPos);
          yPos += 6;
        });
        yPos += 3;
        
        pdf.setFont('helvetica', 'bold');
        pdf.text('Recommendations:', margin, yPos);
        yPos += 6;
        
        pdf.setFont('helvetica', 'normal');
        area.recommendations.forEach(rec => {
          pdf.text(`• ${rec}`, margin + 5, yPos);
          yPos += 6;
        });
        yPos += 10;
      });
      
      // Save PDF
      const fileName = `Enterprise_Compliance_Assessment_${assessmentData.responses.company_name?.replace(/[^a-zA-Z0-9]/g, '_') || 'Report'}_${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF report. Please try again.');
    }
  };

  const handleEmailReport = async () => {
    alert(`Email functionality ready for implementation.
    
Report Details:
• Recipient: ${assessmentData.responses.email}
• Executive: ${assessmentData.responses.full_name}
• Organization: ${assessmentData.responses.company_name}
• Score: ${score}/100 (${scoreLevel.level})
• Risk Areas: ${riskAreas.length} domains analyzed

To enable email delivery, configure EmailJS service with your email provider.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/assessment" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Assessment
          </Link>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={handleEmailReport}>
              <Mail className="h-4 w-4 mr-2" />
              Email Report
            </Button>
            <Button onClick={generateEnhancedPDF}>
              <Download className="h-4 w-4 mr-2" />
              Download Executive Report
            </Button>
          </div>
        </div>

        <div id="assessment-report">
          {/* Executive Header */}
          <Card className="mb-8 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">Enterprise Compliance Assessment</h1>
                    <p className="text-lg text-muted-foreground">Executive Summary Report</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{score}</div>
                  <div className="text-sm text-muted-foreground">Overall Score</div>
                  <Badge className={`${scoreLevel.color} text-white mt-2`}>
                    {scoreLevel.level}
                  </Badge>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 bg-muted/30 p-6 rounded-lg">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-2" />
                    Executive Information
                  </div>
                  <div><strong>{assessmentData.responses.full_name}</strong></div>
                  <div>{assessmentData.responses.job_title}</div>
                  <div>{assessmentData.responses.department}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-2" />
                    Organization
                  </div>
                  <div><strong>{assessmentData.responses.company_name}</strong></div>
                  <div>{assessmentData.responses.industry_sector}</div>
                  <div>{assessmentData.responses.organization_size}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="h-4 w-4 mr-2" />
                    Assessment Details
                  </div>
                  <div><strong>Date:</strong> {new Date(assessmentData.timestamp).toLocaleDateString()}</div>
                  <div><strong>Type:</strong> Enterprise Framework</div>
                  <div><strong>Domains:</strong> {riskAreas.length} analyzed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Analysis */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold">Compliance Risk Analysis</h2>
            {riskAreas.map((area, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-bold text-lg">{area.domain}</h3>
                        <Badge variant={
                          area.priority === "Critical" ? "destructive" : 
                          area.priority === "High" ? "default" : 
                          "secondary"
                        }>
                          {area.priority} Priority
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Applicable Frameworks:</strong> {area.frameworks}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{area.score}</div>
                      <div className="text-sm text-muted-foreground">Risk Score</div>
                    </div>
                  </div>
                  
                  <Progress value={area.score} className="mb-4" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Findings:</h4>
                      <ul className="space-y-1 text-sm">
                        {area.findings.map((finding, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Recommended Actions:</h4>
                      <ul className="space-y-1 text-sm">
                        {area.recommendations.map((rec, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-600 mr-2 mt-1 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Executive Action Plan */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Executive Action Plan</h3>
                <p className="text-muted-foreground">
                  Strategic recommendations based on your compliance assessment results
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background/50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-red-700">Immediate (0-30 days)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Address critical compliance gaps</li>
                    <li>• Establish incident response procedures</li>
                    <li>• Document current compliance status</li>
                    <li>• Schedule board compliance briefing</li>
                  </ul>
                </div>
                <div className="bg-background/50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-amber-700">Short-term (1-6 months)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Implement compliance monitoring tools</li>
                    <li>• Conduct staff training programs</li>
                    <li>• Establish vendor risk assessments</li>
                    <li>• Deploy automated compliance controls</li>
                  </ul>
                </div>
                <div className="bg-background/50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-green-700">Long-term (6-18 months)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Achieve target compliance certifications</li>
                    <li>• Implement enterprise risk management</li>
                    <li>• Establish compliance center of excellence</li>
                    <li>• Develop predictive compliance analytics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;