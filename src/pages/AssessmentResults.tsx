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

  // Enhanced compliance domains analysis based on the 10 critical areas
  const analyzeComplianceDomains = () => {
    const responses = assessmentData.responses;
    const domains = [];

    // Helper function to calculate risk level
    const getRiskLevel = (score: number) => {
      if (score <= 40) return "Critical";
      if (score <= 60) return "High"; 
      if (score <= 75) return "Medium";
      return "Low";
    };

    // 1. Governance & Leadership
    const governanceScore = Math.max(0, 100 - (
      (responses.compliance_maturity?.includes('Ad-hoc') ? 30 : 0) +
      (responses.governance_structure?.includes('No formal') ? 25 : 0) +
      (responses.board_oversight?.includes('No') ? 20 : 0)
    ));
    
    domains.push({
      domain: "Governance & Leadership",
      score: governanceScore,
      riskLevel: getRiskLevel(governanceScore),
      findings: "Lack of documented roles & responsibilities for compliance oversight.",
      recommendations: "Establish a formal compliance committee with clear accountability."
    });

    // 2. Policies & Procedures
    const policiesScore = Math.max(0, 100 - (
      (responses.policy_framework?.includes('outdated') ? 30 : 0) +
      (responses.policy_review?.includes('No regular') ? 25 : 0) +
      (responses.policy_enforcement?.includes('inconsistent') ? 20 : 0)
    ));
    
    domains.push({
      domain: "Policies & Procedures", 
      score: policiesScore,
      riskLevel: getRiskLevel(policiesScore),
      findings: "Policies outdated and not reviewed annually; some key policies missing.",
      recommendations: "Update and formalize policies; implement annual review cycle."
    });

    // 3. Training & Awareness
    const trainingScore = Math.max(0, 100 - (
      (responses.training_program?.includes('Ad-hoc') ? 35 : 0) +
      (responses.training_tracking?.includes('No tracking') ? 30 : 0) +
      (responses.awareness_program?.includes('No formal') ? 20 : 0)
    ));
    
    domains.push({
      domain: "Training & Awareness",
      score: trainingScore,
      riskLevel: getRiskLevel(trainingScore),
      findings: "Staff training is ad hoc and not documented; no tracking mechanism.",
      recommendations: "Develop a training program with tracking & annual refreshers."
    });

    // 4. Monitoring & Auditing  
    const monitoringScore = Math.max(0, 100 - (
      (responses.audit_program?.includes('No routine') ? 40 : 0) +
      (responses.monitoring_controls?.includes('reactive') ? 30 : 0) +
      (responses.audit_findings?.includes('not tracked') ? 15 : 0)
    ));
    
    domains.push({
      domain: "Monitoring & Auditing",
      score: monitoringScore,
      riskLevel: getRiskLevel(monitoringScore),
      findings: "No routine compliance audits; reactive approach to issues.",
      recommendations: "Implement a formal audit schedule & reporting framework."
    });

    // 5. Reporting & Response
    const reportingScore = Math.max(0, 100 - (
      (responses.incident_reporting?.includes('No formal') ? 35 : 0) +
      (responses.breach_response?.includes('undefined') ? 30 : 0) +
      (responses.regulatory_reporting?.includes('manual') ? 20 : 0)
    ));
    
    domains.push({
      domain: "Reporting & Response",
      score: reportingScore,
      riskLevel: getRiskLevel(reportingScore),
      findings: "Incident reporting processes are undefined; manual regulatory reporting.",
      recommendations: "Establish automated incident reporting and response procedures."
    });

    // 6. Third-Party Risk
    const vendorScore = Math.max(0, 100 - (
      (responses.vendor_assessment?.includes('No documented') ? 40 : 0) +
      (responses.vendor_monitoring?.includes('No ongoing') ? 30 : 0) +
      (responses.contract_management?.includes('basic') ? 15 : 0)
    ));
    
    domains.push({
      domain: "Third-Party Risk",
      score: vendorScore,
      riskLevel: getRiskLevel(vendorScore),
      findings: "No documented vendor vetting or monitoring process in place.",
      recommendations: "Create a vendor risk assessment matrix & onboarding checklist."
    });

    // 7. Privacy & Data Protection
    const privacyScore = Math.max(0, 100 - (
      (responses.data_classification?.includes('No formal') ? 30 : 0) +
      (responses.privacy_program?.includes('basic') ? 25 : 0) +
      (responses.data_inventory?.includes('incomplete') ? 20 : 0)
    ));
    
    domains.push({
      domain: "Privacy & Data Protection",
      score: privacyScore,
      riskLevel: getRiskLevel(privacyScore),
      findings: "Data classification incomplete; basic privacy program implementation.",
      recommendations: "Implement comprehensive data governance and privacy controls."
    });

    // 8. Incident Management
    const incidentScore = Math.max(0, 100 - (
      (responses.incident_response?.includes('No incident') ? 40 : 0) +
      (responses.business_continuity?.includes('basic') ? 25 : 0) +
      (responses.communication_plan?.includes('undefined') ? 20 : 0)
    ));
    
    domains.push({
      domain: "Incident Management",
      score: incidentScore,
      riskLevel: getRiskLevel(incidentScore),
      findings: "Incident response plan needs enhancement; communication protocols unclear.",
      recommendations: "Develop comprehensive incident response and business continuity plans."
    });

    // 9. Regulatory Alignment
    const regulatoryScore = Math.max(0, 100 - (
      ((responses.applicable_regulations || []).length > 5 ? 20 : 0) +
      (responses.regulatory_complexity?.includes('complex') ? 25 : 0) +
      (responses.regulatory_monitoring?.includes('manual') ? 30 : 0)
    ));
    
    domains.push({
      domain: "Regulatory Alignment",
      score: regulatoryScore,
      riskLevel: getRiskLevel(regulatoryScore),
      findings: "Complex regulatory landscape with manual monitoring processes.",
      recommendations: "Implement automated regulatory change management system."
    });

    // 10. Continuous Improvement
    const improvementScore = Math.max(0, 100 - (
      (responses.maturity_assessment?.includes('not conducted') ? 35 : 0) +
      (responses.improvement_program?.includes('reactive') ? 30 : 0) +
      (responses.metrics_tracking?.includes('limited') ? 20 : 0)
    ));
    
    domains.push({
      domain: "Continuous Improvement",
      score: improvementScore,
      riskLevel: getRiskLevel(improvementScore),
      findings: "Limited metrics tracking; reactive improvement approach.",
      recommendations: "Establish KPIs and proactive continuous improvement processes."
    });

    return domains;
  };

  const complianceDomains = analyzeComplianceDomains();

  const generateEnhancedPDF = async () => {
    try {
      // US Letter size: 8.5" x 11" = 215.9mm x 279.4mm
      const pdf = new jsPDF('p', 'pt', [612, 792]); // US Letter in points (72 DPI)
      const pageWidth = 612;
      const pageHeight = 792;
      const margin = 72; // 1 inch margins
      const contentWidth = pageWidth - (2 * margin);
      let pageCount = 0;
      
      // Set default font and line spacing (1.5x)
      pdf.setFont('helvetica', 'normal');
      const lineSpacing = 16.5; // 1.5x line spacing for 11pt text
      
      // Helper function to add centered watermark
      const addWatermark = () => {
        pdf.saveGraphicsState();
        pdf.setTextColor(200, 200, 200); // Light Gray for subtle watermark
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(50);
        pdf.setGState(pdf.GState({ opacity: 0.15 })); // 15% opacity
        
        // Center watermark both horizontally and vertically
        const centerX = pageWidth / 2;
        const centerY = pageHeight / 2;
        
        pdf.text('TITANIDE CONSULTING', centerX, centerY, { 
          align: 'center',
          angle: 45 // Diagonal placement
        });
        pdf.restoreGraphicsState();
      };
      
      // Helper function to add page with header/footer
      const addPageWithBorder = () => {
        if (pageCount > 0) {
          pdf.addPage();
        }
        pageCount++;
        
        // Add watermark to page
        addWatermark();
        
        // Add header
        pdf.setFontSize(8);
        pdf.setTextColor(100, 100, 100);
        pdf.setFont('helvetica', 'normal');
        pdf.text('CONFIDENTIAL - ENTERPRISE COMPLIANCE ASSESSMENT', pageWidth/2, margin - 36, { align: 'center' });
        
        // Add footer
        pdf.setFontSize(8);
        pdf.setTextColor(51, 51, 51);
        pdf.text('Titanide Consulting Group | www.titanideconsulting.com | +1-832-735-8880 | info@titanideconsulting.com', pageWidth/2, pageHeight - margin + 36, { align: 'center' });
      };
      
      // Helper function to add page numbers
      const addPageNumber = (current: number, total: number) => {
        pdf.setFontSize(8);
        pdf.setTextColor(51, 51, 51);
        pdf.text(`Page ${current} of ${total}`, pageWidth - margin, pageHeight - 20, { align: 'right' });
      };
      
      // Table of Contents data
      const tocSections = [
        { title: 'Executive Summary', page: 2 },
        { title: 'Assessment Overview', page: 3 },
        { title: 'Risk Analysis Dashboard', page: 4 },
        { title: 'Compliance Domain Findings', page: 5 },
        { title: 'Recommendations & Action Plan', page: 6 + complianceDomains.length },
        { title: 'Next Steps', page: 7 + complianceDomains.length }
      ];
      
      // Title Page
      addPageWithBorder();
      
      // Title page content
      pdf.setTextColor(0, 51, 102); // Corporate blue
      pdf.setFontSize(28);
      pdf.setFont('helvetica', 'bold');
      const titleY = pageHeight / 2 - 100;
      pdf.text('ENTERPRISE COMPLIANCE', pageWidth/2, titleY, { align: 'center' });
      pdf.text('ASSESSMENT REPORT', pageWidth/2, titleY + 35, { align: 'center' });
      
      // Company info box
      pdf.setFillColor(245, 245, 245);
      pdf.rect(margin + 50, titleY + 70, contentWidth - 100, 80, 'F');
      
      pdf.setTextColor(51, 51, 51);
      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text(assessmentData.responses.company_name || 'ORGANIZATION NAME', pageWidth/2, titleY + 100, { align: 'center' });
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Prepared for: ${assessmentData.responses.full_name || 'Executive Leadership'}`, pageWidth/2, titleY + 120, { align: 'center' });
      pdf.text(`Report Date: ${new Date(assessmentData.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth/2, titleY + 135, { align: 'center' });
      
      // Titanide branding
      pdf.setTextColor(0, 51, 102);
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      pdf.text('TITANIDE CONSULTING GROUP', pageWidth/2, titleY + 180, { align: 'center' });
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('Enterprise Compliance & Risk Management Solutions', pageWidth/2, titleY + 195, { align: 'center' });
      
      // Table of Contents Page
      addPageWithBorder();
      let yPos = margin + 30;
      
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('TABLE OF CONTENTS', margin, yPos);
      yPos += 40;
      
      // TOC entries
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(51, 51, 51);
      
      tocSections.forEach(section => {
        // Draw dotted line
        const dotsWidth = contentWidth - pdf.getTextWidth(section.title) - pdf.getTextWidth(section.page.toString()) - 20;
        const dotCount = Math.floor(dotsWidth / 4);
        const dots = '.'.repeat(dotCount);
        
        pdf.text(section.title, margin, yPos);
        pdf.text(dots, margin + pdf.getTextWidth(section.title) + 10, yPos);
        pdf.text(section.page.toString(), pageWidth - margin, yPos, { align: 'right' });
        yPos += lineSpacing;
      });
      
      // Executive Summary Page
      addPageWithBorder();
      yPos = margin + 30;
      
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('EXECUTIVE SUMMARY', margin, yPos);
      yPos += 30;
      
      // Score highlight box
      pdf.setFillColor(240, 248, 255);
      pdf.setDrawColor(0, 51, 102);
      pdf.rect(margin, yPos, contentWidth, 60, 'FD');
      
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('OVERALL COMPLIANCE SCORE', margin + 20, yPos + 20);
      
      pdf.setFontSize(36);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${score}/100`, pageWidth - margin - 20, yPos + 25, { align: 'right' });
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Risk Level: ${scoreLevel.level}`, pageWidth - margin - 20, yPos + 45, { align: 'right' });
      
      yPos += 80;
      
      // Executive summary text with 1.5 line spacing
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(51, 51, 51);
      
      const execSummaryText = `Titanide Consulting Group conducted a comprehensive Compliance Effectiveness Assessment for ${assessmentData.responses.company_name || 'your organization'} to evaluate current compliance posture against industry best practices and regulatory frameworks. This assessment analyzed ${complianceDomains.length} critical compliance domains including governance, policies, training, monitoring, reporting, third-party risk management, data protection, and incident response capabilities.`;
      
      const execLines = pdf.splitTextToSize(execSummaryText, contentWidth);
      execLines.forEach((line: string) => {
        pdf.text(line, margin, yPos);
        yPos += lineSpacing;
      });
      yPos += 20;
      
      // Key Findings table
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('KEY FINDINGS', margin, yPos);
      yPos += 25;
      
      // Create findings table
      const tableData = [
        ['Metric', 'Result', 'Status'],
        [`Overall Score`, `${score}/100`, scoreLevel.level],
        [`Critical Risk Areas`, `${complianceDomains.filter(d => d.riskLevel === 'Critical').length}`, 'Immediate Action Required'],
        [`High Priority Items`, `${complianceDomains.filter(d => d.riskLevel === 'High').length}`, 'Priority Focus'],
        [`Regulatory Frameworks`, `${(assessmentData.responses.applicable_regulations || []).length}`, 'Multi-Framework Complexity']
      ];
      
      // Table headers
      pdf.setFillColor(0, 51, 102);
      pdf.setTextColor(255, 255, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      
      const colWidths = [contentWidth * 0.4, contentWidth * 0.3, contentWidth * 0.3];
      let tableX = margin;
      
      // Header row
      tableData[0].forEach((header, i) => {
        pdf.rect(tableX, yPos, colWidths[i], 20, 'F');
        pdf.text(header, tableX + 5, yPos + 14);
        tableX += colWidths[i];
      });
      yPos += 20;
      
      // Data rows
      pdf.setTextColor(51, 51, 51);
      pdf.setFont('helvetica', 'normal');
      
      for (let row = 1; row < tableData.length; row++) {
        tableX = margin;
        pdf.setFillColor(row % 2 === 0 ? 250 : 245, row % 2 === 0 ? 250 : 245, row % 2 === 0 ? 250 : 245);
        
        tableData[row].forEach((cell, i) => {
          pdf.rect(tableX, yPos, colWidths[i], 18, 'F');
          pdf.text(cell, tableX + 5, yPos + 12);
          tableX += colWidths[i];
        });
        yPos += 18;
      }
      
      yPos += 30;
      
      // Assessment overview
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('ASSESSMENT OVERVIEW', margin, yPos);
      yPos += 20;
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(51, 51, 51);
      
      const overviewText = scoreLevel.description + " The assessment identified specific areas requiring immediate attention and strategic improvements to enhance your organization's compliance posture and reduce regulatory risk exposure.";
      const overviewLines = pdf.splitTextToSize(overviewText, contentWidth);
      overviewLines.forEach((line: string) => {
        pdf.text(line, margin, yPos);
        yPos += lineSpacing;
      });
      
      // Risk Analysis Dashboard Page
      addPageWithBorder();
      yPos = margin + 30;
      
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('RISK ANALYSIS DASHBOARD', margin, yPos);
      yPos += 40;
      
      // Risk summary chart (simulated)
      pdf.setFillColor(240, 248, 255);
      pdf.rect(margin, yPos, contentWidth, 120, 'F');
      
      // Chart title
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('COMPLIANCE DOMAIN RISK DISTRIBUTION', margin + 20, yPos + 20);
      
      // Risk level bars
      const riskCounts = {
        Critical: complianceDomains.filter(d => d.riskLevel === 'Critical').length,
        High: complianceDomains.filter(d => d.riskLevel === 'High').length,
        Medium: complianceDomains.filter(d => d.riskLevel === 'Medium').length,
        Low: complianceDomains.filter(d => d.riskLevel === 'Low').length
      };
      
      let chartY = yPos + 50;
      const barHeight = 15;
      const maxBarWidth = contentWidth - 200;
      const maxCount = Math.max(...Object.values(riskCounts));
      
      Object.entries(riskCounts).forEach(([level, count], index) => {
        const barWidth = maxCount > 0 ? (count / maxCount) * maxBarWidth : 0;
        const colors = {
          Critical: [220, 38, 38],
          High: [245, 158, 11],
          Medium: [59, 130, 246],
          Low: [34, 197, 94]
        };
        
        const color = colors[level as keyof typeof colors];
        pdf.setFillColor(color[0], color[1], color[2]);
        pdf.rect(margin + 120, chartY, barWidth, barHeight, 'F');
        
        pdf.setFontSize(10);
        pdf.setTextColor(51, 51, 51);
        pdf.text(`${level} Risk:`, margin + 20, chartY + 10);
        pdf.text(`${count}`, margin + 120 + barWidth + 10, chartY + 10);
        
        chartY += 20;
      });
      
      yPos += 140;
      
      // Compliance Domain Findings
      addPageWithBorder();
      yPos = margin + 30;
      
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('COMPLIANCE DOMAIN FINDINGS', margin, yPos);
      yPos += 40;
      
      complianceDomains.forEach((domain, index) => {
        if (yPos > pageHeight - margin - 150) { // Check if we need new page
          addPageWithBorder();
          yPos = margin + 24;
        }
        
        // Subheader: 12pt Bold
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(51, 51, 51);
        pdf.text(`${index + 1}. ${domain.domain}`, margin, yPos);
        yPos += 12; // 12pt space after subheaders
        
        // Score line with accent color
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(51, 51, 51);
        const scoreText = `Risk Score: `;
        pdf.text(scoreText, margin, yPos);
        
        // Bold score with accent color
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(202, 167, 96); // Titanide Gold
        const scoreValue = `${domain.score}/100`;
        pdf.text(scoreValue, margin + pdf.getTextWidth(scoreText), yPos);
        
        // Priority and frameworks
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(51, 51, 51);
        const priorityText = ` | Risk Level: ${domain.riskLevel}`;
        pdf.text(priorityText, margin + pdf.getTextWidth(scoreText + scoreValue), yPos);
        yPos += 12; // 12pt space after paragraph
        
        // Key Findings subheader
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Key Findings:', margin, yPos);
        yPos += 12;
        
        // Bullet points with 0.25" indent
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        const findingsBulletIndent = margin + 18; // 0.25" indent
        
        const findingLines = pdf.splitTextToSize(`• ${domain.findings}`, contentWidth - 18);
        findingLines.forEach((line: string) => {
          pdf.text(line, findingsBulletIndent, yPos);
          yPos += 11; // Single line spacing
        });
        yPos += 12; // 12pt space after paragraph
        
        // Recommendations subheader
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Recommendations:', margin, yPos);
        yPos += 12;
        
        // Recommendation bullet points
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        const recLines = pdf.splitTextToSize(`• ${domain.recommendations}`, contentWidth - 18);
        recLines.forEach((line: string) => {
          pdf.text(line, findingsBulletIndent, yPos);
          yPos += 11; // Single line spacing
        });
        yPos += 12; // 12pt space after paragraph
      });
      
      // Recommendations & Action Plan Page
      addPageWithBorder();
      yPos = margin + 30;
      
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('STRATEGIC ACTION PLAN', margin, yPos);
      yPos += 40;
      
      // Priority action items table
      const actionPhases = [
        {
          phase: 'IMMEDIATE (0-30 days)',
          color: [220, 38, 38],
          actions: [
            'Address critical compliance gaps',
            'Establish incident response team',
            'Document current compliance status',
            'Schedule leadership briefing'
          ]
        },
        {
          phase: 'SHORT-TERM (1-6 months)',
          color: [245, 158, 11],
          actions: [
            'Implement monitoring tools',
            'Conduct staff training programs',
            'Establish vendor assessments',
            'Deploy automated controls'
          ]
        },
        {
          phase: 'LONG-TERM (6-18 months)',
          color: [34, 197, 94],
          actions: [
            'Achieve target certifications',
            'Implement enterprise risk mgmt',
            'Establish compliance center',
            'Develop predictive analytics'
          ]
        }
      ];
      
      actionPhases.forEach(phase => {
        // Phase header
        pdf.setFillColor(phase.color[0], phase.color[1], phase.color[2]);
        pdf.rect(margin, yPos, contentWidth, 20, 'F');
        
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(255, 255, 255);
        pdf.text(phase.phase, margin + 10, yPos + 13);
        
        yPos += 30;
        
        // Action items
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(51, 51, 51);
        
        phase.actions.forEach(action => {
          pdf.text(`• ${action}`, margin + 20, yPos);
          yPos += lineSpacing;
        });
        
        yPos += 15;
      });
      
      // Next Steps Page
      addPageWithBorder();
      yPos = margin + 30;
      
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('NEXT STEPS & CONSULTATION', margin, yPos);
      yPos += 40;
      
      // Consultation overview
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(51, 51, 51);
      
      const consultText = 'Based on your assessment results, Titanide Consulting Group can help you develop a comprehensive strategy to address identified gaps and strengthen your compliance posture. Our experts specialize in enterprise compliance solutions across healthcare, financial services, and regulated industries.';
      const consultLines = pdf.splitTextToSize(consultText, contentWidth);
      consultLines.forEach((line: string) => {
        pdf.text(line, margin, yPos);
        yPos += lineSpacing;
      });
      yPos += 30;
      
      // Contact information box
      pdf.setFillColor(240, 248, 255);
      pdf.setDrawColor(0, 51, 102);
      pdf.rect(margin, yPos, contentWidth, 100, 'FD');
      
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(0, 51, 102);
      pdf.text('SCHEDULE YOUR CONSULTATION', margin + 20, yPos + 25);
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(51, 51, 51);
      
      const contactInfo = [
        'Email: info@titanideconsulting.com',
        'Phone: +1-832-735-8880',
        'Website: www.titanideconsulting.com'
      ];
      
      let contactY = yPos + 45;
      contactInfo.forEach(contact => {
        pdf.text(contact, margin + 20, contactY);
        contactY += lineSpacing;
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
• Risk Areas: ${complianceDomains.length} domains analyzed

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
                  <div><strong>Domains:</strong> {complianceDomains.length} analyzed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Analysis */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold">Compliance Risk Analysis</h2>
            {complianceDomains.map((domain, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-bold text-lg">{domain.domain}</h3>
                        <Badge variant={
                          domain.riskLevel === "Critical" ? "destructive" : 
                          domain.riskLevel === "High" ? "default" : 
                          "secondary"
                        }>
                          {domain.riskLevel} Risk
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{domain.score}</div>
                      <div className="text-sm text-muted-foreground">Risk Score</div>
                    </div>
                  </div>
                  
                  <Progress value={domain.score} className="mb-4" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Findings:</h4>
                      <div className="text-sm">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {domain.findings}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Recommended Actions:</h4>
                      <div className="text-sm">
                        <div className="flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          {domain.recommendations}
                        </div>
                      </div>
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