import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Share2, Shield, AlertTriangle, CheckCircle, TrendingUp, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AssessmentResults = () => {
  const navigate = useNavigate();
  const [assessmentData, setAssessmentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('assessmentData');
    if (data) {
      setAssessmentData(JSON.parse(data));
    } else {
      // If no data found, redirect to start
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
    if (score >= 80) return { level: "Excellent", color: "bg-green-500", textColor: "text-green-700" };
    if (score >= 60) return { level: "Good", color: "bg-blue-500", textColor: "text-blue-700" };
    if (score >= 40) return { level: "Fair", color: "bg-yellow-500", textColor: "text-yellow-700" };
    return { level: "Needs Improvement", color: "bg-red-500", textColor: "text-red-700" };
  };

  const scoreLevel = getScoreLevel(score);

  const riskAreas = [
    {
      area: "Data Privacy & Protection",
      score: Math.max(score - 10, 0),
      priority: score < 60 ? "High" : score < 80 ? "Medium" : "Low",
      recommendations: [
        "Implement comprehensive data mapping",
        "Establish data retention policies",
        "Conduct privacy impact assessments"
      ]
    },
    {
      area: "Cybersecurity Controls",
      score: Math.min(score + 5, 100),
      priority: score < 50 ? "High" : score < 75 ? "Medium" : "Low",
      recommendations: [
        "Deploy endpoint detection and response",
        "Implement security awareness training",
        "Conduct regular vulnerability assessments"
      ]
    },
    {
      area: "Regulatory Compliance",
      score: score,
      priority: score < 70 ? "High" : score < 85 ? "Medium" : "Low",
      recommendations: [
        "Establish compliance monitoring procedures",
        "Document compliance policies",
        "Schedule regular compliance audits"
      ]
    },
    {
      area: "Risk Management",
      score: Math.max(score - 15, 0),
      priority: score < 55 ? "High" : score < 80 ? "Medium" : "Low",
      recommendations: [
        "Develop risk assessment framework",
        "Implement business continuity planning",
        "Establish incident response procedures"
      ]
    }
  ];

  const actionItems = [
    {
      priority: "Immediate (0-30 days)",
      items: [
        "Conduct comprehensive risk assessment",
        "Implement multi-factor authentication",
        "Establish data backup procedures",
        "Create incident response plan"
      ]
    },
    {
      priority: "Short-term (1-3 months)",
      items: [
        "Deploy security monitoring tools",
        "Conduct staff security training",
        "Document compliance policies",
        "Perform vulnerability scanning"
      ]
    },
    {
      priority: "Long-term (3-12 months)",
      items: [
        "Achieve compliance certification",
        "Implement automated compliance monitoring",
        "Establish third-party risk management",
        "Develop mature security operations"
      ]
    }
  ];

  const handleDownloadReport = () => {
    // In a real implementation, this would generate and download a PDF
    alert("PDF report generation would be implemented here. This would include detailed findings, recommendations, and action plans.");
  };

  const handleEmailReport = () => {
    // In a real implementation, this would send the report via email
    alert("Email functionality would be implemented here to send the report to stakeholders.");
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
            <Button onClick={handleDownloadReport}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Results Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Your Compliance Assessment Results</h1>
          <p className="text-xl text-muted-foreground">
            Completed on {new Date(assessmentData.timestamp).toLocaleDateString()}
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-8 border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Overall Compliance Score</CardTitle>
            <CardDescription>Based on your responses across all compliance areas</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{score}</div>
                    <div className="text-sm text-muted-foreground">out of 100</div>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <Badge className={`${scoreLevel.color} text-white text-lg px-4 py-2 mb-2`}>
                  {scoreLevel.level}
                </Badge>
                <div className="space-y-2">
                  <Progress value={score} className="w-48 h-3" />
                  <p className={`text-sm font-medium ${scoreLevel.textColor}`}>
                    {score >= 80 && "Excellent compliance posture with minor areas for improvement."}
                    {score >= 60 && score < 80 && "Good foundation with some areas requiring attention."}
                    {score >= 40 && score < 60 && "Fair compliance with significant gaps to address."}
                    {score < 40 && "Critical compliance gaps requiring immediate attention."}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Results Tabs */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="risks">Risk Areas</TabsTrigger>
            <TabsTrigger value="actions">Action Plan</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    Strengths Identified
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Strong awareness of compliance requirements
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Basic security controls in place
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Management commitment to compliance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                    Priority Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Data privacy program gaps
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Incomplete security controls
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Missing compliance documentation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risks" className="mt-6">
            <div className="space-y-4">
              {riskAreas.map((area, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{area.area}</h3>
                        <Badge variant={area.priority === "High" ? "destructive" : area.priority === "Medium" ? "default" : "secondary"}>
                          {area.priority} Priority
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{area.score}</div>
                        <div className="text-sm text-muted-foreground">Score</div>
                      </div>
                    </div>
                    <Progress value={area.score} className="mb-4" />
                    <div>
                      <h4 className="font-medium mb-2">Key Recommendations:</h4>
                      <ul className="space-y-1">
                        {area.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="actions" className="mt-6">
            <div className="space-y-6">
              {actionItems.map((timeframe, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-primary mr-2" />
                      {timeframe.priority}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {timeframe.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Next Steps */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Take Action?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our compliance experts can help you implement these recommendations and strengthen your compliance program. 
              Schedule a consultation to discuss your specific needs and create a customized action plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Take Assessment Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentResults;