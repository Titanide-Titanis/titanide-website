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
      const contentWidth = pageWidth - (2 * margin);
      let pageCount = 0;
      
      // Set default font
      pdf.setFont('arial', 'normal');
      
      // Helper function to add watermark
      const addWatermark = () => {
        pdf.saveGraphicsState();
        pdf.setTextColor(128, 128, 128); // Medium gray
        pdf.setFont('arial', 'bold');
        pdf.setFontSize(20);
        pdf.setGState(pdf.GState({ opacity: 0.5 }));
        pdf.text('TITANIDE CONSULTING GROUP', pageWidth/2, pageHeight/2, { 
          align: 'center',
          angle: 0
        });
        pdf.restoreGraphicsState();
      };
      
      // Helper function to add page with border and footer
      const addPageWithBorder = () => {
        if (pageCount > 0) {
          pdf.addPage();
        }
        pageCount++;
        
        // Add watermark to page
        addWatermark();
        
        // Add 2pt teal border around page
        pdf.setDrawColor(0, 128, 128); // Teal color
        pdf.setLineWidth(2);
        pdf.rect(2, 2, pageWidth - 4, pageHeight - 4);
        
        // Add footer - version info left
        const currentDate = new Date();
        const versionDate = `1.0/${currentDate.getFullYear().toString().slice(-2)}/${String(currentDate.getDate()).padStart(2, '0')}/${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
        pdf.setFontSize(8);
        pdf.setTextColor(0, 0, 0);
        pdf.text(versionDate, margin, pageHeight - 10);
        
        // Add footer - confidential text center
        pdf.text('This report contains confidential and proprietary information. © 2024 Titanide Consulting Group. All rights reserved.', 
                pageWidth/2, pageHeight - 10, { align: 'center' });
      };
      
      // Helper function to add page numbers
      const addPageNumber = (current: number, total: number) => {
        pdf.setFontSize(8);
        pdf.setTextColor(0, 0, 0);
        pdf.text(`${current} of ${total}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
      };
      
      // Cover Page
      addPageWithBorder();
      
      // Header container - dark blue background
      pdf.setFillColor(25, 43, 81); // Dark blue
      pdf.rect(margin, margin, contentWidth, 60, 'F');
      
      // Title
      pdf.setTextColor(255, 255, 255); // White text
      pdf.setFontSize(16);
      pdf.setFont('arial', 'normal');
      pdf.text('TITANIDE Enterprise Compliance Assessment', pageWidth/2, margin + 25, { align: 'center' });
      
      // Subtitle
      pdf.setFontSize(12);
      pdf.text('Confidential Risk Assessment', pageWidth/2, margin + 40, { align: 'center' });
      
      // Cover page info
      pdf.setTextColor(25, 43, 81); // Dark blue text
      pdf.setFontSize(13);
      pdf.setFont('arial', 'normal');
      pdf.text('PREPARED FOR:', margin, margin + 90);
      
      let yPos = margin + 105;
      pdf.setFontSize(11);
      pdf.setFont('arial', 'normal');
      const lineSpacing = 11; // Single line spacing
      
      pdf.text(`Name: ${assessmentData.responses.full_name || 'N/A'}`, margin, yPos);
      yPos += lineSpacing;
      pdf.text(`Title: ${assessmentData.responses.job_title || 'N/A'}`, margin, yPos);
      yPos += lineSpacing;
      pdf.text(`Organization: ${assessmentData.responses.company_name || 'N/A'}`, margin, yPos);
      yPos += lineSpacing;
      pdf.text(`Department: ${assessmentData.responses.department || 'N/A'}`, margin, yPos);
      yPos += lineSpacing;
      pdf.text(`Email: ${assessmentData.responses.email || 'N/A'}`, margin, yPos);
      yPos += lineSpacing; // No extra space after paragraph
      
      pdf.setFontSize(13);
      pdf.setTextColor(25, 43, 81); // Dark blue for heading
      pdf.text('ASSESSMENT DETAILS:', margin, yPos);
      yPos += lineSpacing;
      
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0); // Black for body text
      pdf.text(`Report Date: ${new Date(assessmentData.timestamp).toLocaleDateString()}`, margin, yPos);
      yPos += lineSpacing;
      pdf.text(`Assessment Type: Enterprise Compliance Framework`, margin, yPos);
      yPos += lineSpacing;
      // Bold the score
      const scoreText = `Overall Score: `;
      const boldScoreText = `${score}/100 (${scoreLevel.level})`;
      pdf.text(scoreText, margin, yPos);
      pdf.setFont('arial', 'bold');
      pdf.text(boldScoreText, margin + pdf.getTextWidth(scoreText), yPos);
      pdf.setFont('arial', 'normal');
      yPos += lineSpacing;
      pdf.text(`Industry: ${assessmentData.responses.industry_sector || 'N/A'}`, margin, yPos);
      yPos += lineSpacing;
      pdf.text(`Organization Size: ${assessmentData.responses.organization_size || 'N/A'}`, margin, yPos);
      
      // Executive Summary Page
      addPageWithBorder();
      yPos = margin + 20;
      
      pdf.setFontSize(13);
      pdf.setFont('arial', 'normal');
      pdf.setTextColor(25, 43, 81); // Dark blue for heading
      pdf.text('EXECUTIVE SUMMARY', margin, yPos);
      yPos += lineSpacing; // No extra space after heading
      
      pdf.setFontSize(13);
      pdf.text('Overall Compliance Assessment', margin, yPos);
      yPos += lineSpacing;
      
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0); // Black for body text
      const execSummary = [
        `This comprehensive assessment evaluated ${assessmentData.responses.company_name || 'your organization'}'s compliance posture across multiple regulatory frameworks and industry standards. The assessment covered ${riskAreas.length} key compliance domains with emphasis on regulatory landscape, governance structure, data protection, cybersecurity, and risk management.`,
        '',
        'Key Findings:',
        `• Overall Compliance Score: ${score}/100 (${scoreLevel.level})`,
        `• ${riskAreas.filter(r => r.priority === 'Critical').length} Critical Risk Areas Identified`,
        `• ${riskAreas.filter(r => r.priority === 'High').length} High Priority Improvement Opportunities`,
        `• Applicable Regulations: ${(assessmentData.responses.applicable_regulations || []).length} frameworks`,
        '',
        scoreLevel.description
      ];
      
      execSummary.forEach(line => {
        if (yPos > 250) {
          addPageWithBorder();
          yPos = margin + 20;
        }
        if (line === '') {
          yPos += lineSpacing; // Single spacing
        } else {
          const lines = pdf.splitTextToSize(line, contentWidth);
          lines.forEach((textLine: string) => {
            pdf.text(textLine, margin, yPos);
            yPos += lineSpacing;
          });
        }
      });
      
      // Detailed Risk Analysis
      addPageWithBorder();
      yPos = margin + 20;
      
      pdf.setFontSize(13);
      pdf.setTextColor(25, 43, 81); // Dark blue for heading
      pdf.text('DETAILED RISK ANALYSIS', margin, yPos);
      yPos += lineSpacing;
      
      riskAreas.forEach((area, index) => {
        if (yPos > 200) {
          addPageWithBorder();
          yPos = margin + 20;
        }
        
        pdf.setFontSize(13);
        pdf.setTextColor(25, 43, 81); // Dark blue for section heading
        pdf.text(`${index + 1}. ${area.domain}`, margin, yPos);
        yPos += lineSpacing;
        
        pdf.setFontSize(11);
        pdf.setTextColor(0, 0, 0); // Black for body text
        const scoreText = `Score: `;
        const boldScore = `${area.score}/100`;
        const restText = ` | Priority: ${area.priority} | Frameworks: ${area.frameworks}`;
        
        pdf.text(scoreText, margin, yPos);
        pdf.setFont('arial', 'bold');
        pdf.text(boldScore, margin + pdf.getTextWidth(scoreText), yPos);
        pdf.setFont('arial', 'normal');
        pdf.text(restText, margin + pdf.getTextWidth(scoreText + boldScore), yPos);
        yPos += lineSpacing;
        
        pdf.setFontSize(13);
        pdf.setTextColor(25, 43, 81); // Dark blue for sub-heading
        pdf.text('Key Findings:', margin, yPos);
        yPos += lineSpacing;
        
        pdf.setFontSize(11);
        pdf.setTextColor(0, 0, 0); // Black for body text
        area.findings.forEach(finding => {
          const lines = pdf.splitTextToSize(`• ${finding}`, contentWidth - 10);
          lines.forEach((line: string) => {
            pdf.text(line, margin + 5, yPos);
            yPos += lineSpacing;
          });
        });
        yPos += lineSpacing; // Single spacing
        
        pdf.setFontSize(13);
        pdf.setTextColor(25, 43, 81); // Dark blue for sub-heading
        pdf.text('Recommendations:', margin, yPos);
        yPos += lineSpacing;
        
        pdf.setFontSize(11);
        pdf.setTextColor(0, 0, 0); // Black for body text
        area.recommendations.forEach(rec => {
          const lines = pdf.splitTextToSize(`• ${rec}`, contentWidth - 10);
          lines.forEach((line: string) => {
            pdf.text(line, margin + 5, yPos);
            yPos += lineSpacing;
          });
        });
        yPos += lineSpacing; // Single spacing
      });
      
      // High Level Review Page with Charts
      addPageWithBorder();
      yPos = margin + 20;
      
      pdf.setFontSize(13);
      pdf.setTextColor(25, 43, 81); // Dark blue for heading
      pdf.text('HIGH LEVEL COMPLIANCE POSTURE REVIEW', margin, yPos);
      yPos += lineSpacing;
      
      // Compliance Score Chart (text-based representation)
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Compliance Score Distribution:', margin, yPos);
      yPos += lineSpacing;
      
      // Create a simple text-based chart
      const maxBarWidth = 100;
      const scoreBar = (score / 100) * maxBarWidth;
      pdf.setFillColor(25, 43, 81); // Dark blue bar
      pdf.rect(margin, yPos, scoreBar, 5, 'F');
      pdf.setDrawColor(0, 0, 0);
      pdf.rect(margin, yPos, maxBarWidth, 5);
      yPos += 15;
      
      pdf.text(`Overall Score: ${score}/100 (${scoreLevel.level})`, margin, yPos);
      yPos += lineSpacing;
      
      // Risk Areas Summary
      pdf.text('Risk Areas Summary:', margin, yPos);
      yPos += lineSpacing;
      
      riskAreas.forEach(area => {
        const areaBar = (area.score / 100) * maxBarWidth;
        pdf.setFillColor(area.priority === 'Critical' ? 220 : area.priority === 'High' ? 255 : 100, 
                        area.priority === 'Critical' ? 53 : area.priority === 'High' ? 193 : 149, 
                        area.priority === 'Critical' ? 69 : area.priority === 'High' ? 7 : 237);
        pdf.rect(margin, yPos, areaBar, 4, 'F');
        pdf.setDrawColor(0, 0, 0);
        pdf.rect(margin, yPos, maxBarWidth, 4);
        yPos += 8;
        pdf.text(`${area.domain}: ${area.score}/100`, margin, yPos);
        yPos += lineSpacing;
      });
      
      yPos += lineSpacing;
      
      // Contact Information
      pdf.setFontSize(13);
      pdf.setTextColor(25, 43, 81); // Dark blue for heading
      pdf.text('NEXT STEPS - SCHEDULE YOUR DISCOVERY CALL', margin, yPos);
      yPos += lineSpacing;
      
      pdf.setFontSize(11);
      pdf.setTextColor(0, 0, 0);
      const contactText = [
        'Based on your assessment results, our compliance experts can help you develop a comprehensive strategy to address identified gaps and strengthen your compliance posture.',
        '',
        'To schedule a confidential discovery call to discuss your findings and potential solutions:',
        '• Email: consulting@titanidegroup.com',
        '• Phone: 1-800-TITANIDE',
        '• Website: www.titanidegroup.com/discovery',
        '',
        'During your discovery call, we will:',
        '• Review your detailed assessment results',
        '• Identify immediate action items and quick wins',
        '• Discuss comprehensive compliance program development',
        '• Explore regulatory technology solutions',
        '• Provide recommendations for ongoing compliance management'
      ];
      
      contactText.forEach(line => {
        if (yPos > 250) {
          addPageWithBorder();
          yPos = margin + 20;
        }
        if (line === '') {
          yPos += lineSpacing;
        } else {
          const lines = pdf.splitTextToSize(line, contentWidth);
          lines.forEach((textLine: string) => {
            pdf.text(textLine, margin, yPos);
            yPos += lineSpacing;
          });
        }
      });
      
      // Add page numbers to all pages
      const totalPages = pageCount;
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        addPageNumber(i, totalPages);
      }
      
      // Save PDF
      const fileName = `TITANIDE_Enterprise_Compliance_Assessment_${assessmentData.responses.company_name?.replace(/[^a-zA-Z0-9]/g, '_') || 'Report'}_${new Date().toISOString().split('T')[0]}.pdf`;
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