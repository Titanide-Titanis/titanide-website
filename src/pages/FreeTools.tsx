
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, CheckSquare, BarChart, Shield, Users } from 'lucide-react';

const FreeTools = () => {
  const tools = [
    {
      id: 1,
      title: "Compliance Assessment Framework",
      description: "A comprehensive template for evaluating your organization's current compliance posture across multiple regulatory domains.",
      icon: CheckSquare,
      type: "Template",
      format: "Excel/PDF",
      downloadUrl: "#",
      features: [
        "Multi-domain compliance checklist",
        "Risk scoring methodology",
        "Gap analysis framework",
        "Action plan template"
      ]
    },
    {
      id: 2,
      title: "Risk Management Playbook",
      description: "Strategic guide for building resilient risk management frameworks that adapt to emerging threats and regulatory changes.",
      icon: Shield,
      type: "Guide",
      format: "PDF",
      downloadUrl: "#",
      features: [
        "Risk identification strategies",
        "Mitigation planning templates",
        "Monitoring and reporting frameworks",
        "Stakeholder communication guides"
      ]
    },
    {
      id: 3,
      title: "HIPAA Compliance Toolkit",
      description: "Essential resources for healthcare organizations to maintain HIPAA compliance including policies, training materials, and audit checklists.",
      icon: FileText,
      type: "Toolkit",
      format: "Multi-format",
      downloadUrl: "#",
      features: [
        "Policy templates",
        "Training materials",
        "Audit checklists",
        "Incident response procedures"
      ]
    },
    {
      id: 4,
      title: "Vendor Risk Assessment Matrix",
      description: "Streamlined framework for evaluating and managing third-party vendor risks across your organization's supply chain.",
      icon: BarChart,
      type: "Assessment",
      format: "Excel",
      downloadUrl: "#",
      features: [
        "Vendor evaluation criteria",
        "Risk scoring algorithms",
        "Contract requirement templates",
        "Monitoring dashboards"
      ]
    },
    {
      id: 5,
      title: "Executive Compliance Dashboard",
      description: "Leadership-focused reporting template for tracking compliance metrics, KPIs, and organizational risk posture.",
      icon: BarChart,
      type: "Dashboard",
      format: "Excel/PowerBI",
      downloadUrl: "#",
      features: [
        "Executive KPI tracking",
        "Visual compliance metrics",
        "Trend analysis tools",
        "Board reporting templates"
      ]
    },
    {
      id: 6,
      title: "Staff Training Program Guide",
      description: "Complete framework for developing and implementing effective compliance training programs for your team.",
      icon: Users,
      type: "Program",
      format: "PDF/PPT",
      downloadUrl: "#",
      features: [
        "Training curriculum design",
        "Assessment methodologies",
        "Tracking and reporting tools",
        "Certification frameworks"
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Header */}
      <header className="py-12 sm:py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl">
          <Link to="/resources" className="inline-flex items-center text-sm font-medium mb-6 hover:opacity-70 transition-opacity" style={{ color: '#00A3AD' }}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002B45' }}>
            Free Compliance Tools
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl" style={{ color: '#005870' }}>
            Access our collection of practical compliance tools, templates, and resources designed to enhance your organization's governance capabilities.
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#002B45' }}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#eaf6f8', color: '#00A3AD' }}>
                    {tool.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{ color: '#002B45' }}>
                  {tool.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {tool.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#005870' }}>
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <span className="w-1 h-1 rounded-full mr-2" style={{ backgroundColor: '#00A3AD' }}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    Format: {tool.format}
                  </span>
                  <a 
                    href={tool.downloadUrl}
                    className="inline-flex items-center px-4 py-2 rounded-md text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#00A3AD' }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#002B45' }}>
            Usage Guidelines
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#005870' }}>
                Terms of Use
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Free for internal organizational use</li>
                <li>• Attribution to Titanide Consulting required</li>
                <li>• No redistribution without permission</li>
                <li>• Commercial licensing available upon request</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-4" style={{ color: '#005870' }}>
                Support & Customization
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Basic support via email</li>
                <li>• Customization services available</li>
                <li>• Training and implementation support</li>
                <li>• Enterprise solutions for larger needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Custom Tools */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#eaf6f8' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
            Need Custom Solutions?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#005870' }}>
            Our free tools are just the beginning. Let's discuss how we can create customized compliance solutions for your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@titanideconsulting.com">
              <button className="px-8 py-3 rounded-md text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#002B45' }}>
                Request Custom Tools
              </button>
            </a>
            <a href="https://titanide.zohobookings.com/#/3973691000005149002" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#00A3AD', color: 'white' }}>
                Schedule Consultation →
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeTools;
