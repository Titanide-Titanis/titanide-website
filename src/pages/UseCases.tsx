
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, Shield, Users } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      id: 1,
      title: "Multi-State Healthcare Network Compliance",
      industry: "Healthcare",
      challenge: "A 15-hospital healthcare network faced regulatory compliance gaps across multiple states, with inconsistent policies and audit findings threatening operational licenses.",
      solution: "Implemented comprehensive compliance framework with standardized policies, staff training programs, and centralized monitoring systems.",
      results: [
        "100% compliance across all regulatory frameworks",
        "Reduced audit findings by 95%",
        "Streamlined operations saving $2.3M annually",
        "Enhanced patient data security protocols"
      ],
      icon: Shield,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Telecom Infrastructure Risk Management",
      industry: "Telecommunications",
      challenge: "A regional telecom provider struggled with vendor management, security protocols, and business continuity planning across their expanding network infrastructure.",
      solution: "Developed integrated risk management strategy with vendor assessment protocols, security frameworks, and comprehensive business continuity plans.",
      results: [
        "Enhanced operational efficiency by 40%",
        "Reduced security incidents by 85%",
        "Improved vendor performance standards",
        "Established robust disaster recovery protocols"
      ],
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Government Health Initiative Oversight",
      industry: "Public Sector",
      challenge: "A state-level public health program needed comprehensive compliance oversight for federal funding requirements and multi-agency coordination.",
      solution: "Created governance framework with policy development, stakeholder alignment, and performance monitoring systems for federal compliance.",
      results: [
        "Achieved full federal compliance certification",
        "Secured continued funding for 5-year period",
        "Improved inter-agency collaboration",
        "Established replicable framework for other programs"
      ],
      icon: Users,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
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
            Success Stories
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl" style={{ color: '#005870' }}>
            Discover how organizations have transformed their compliance operations with our strategic frameworks and expert guidance.
          </p>
        </div>
      </header>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div key={useCase.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-1/2">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#002B45' }}>
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full" style={{ backgroundColor: '#eaf6f8', color: '#00A3AD' }}>
                      {useCase.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold" style={{ color: '#002B45' }}>
                    {useCase.title}
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#005870' }}>
                        The Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {useCase.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#005870' }}>
                        Our Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3" style={{ color: '#005870' }}>
                        Key Results
                      </h3>
                      <ul className="space-y-2">
                        {useCase.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#00A3AD' }} />
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#eaf6f8' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#005870' }}>
            Let's discuss how Titanide can help you achieve similar results with a customized compliance strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@titanideconsulting.com">
              <button className="px-8 py-3 rounded-md text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#002B45' }}>
                Start Your Transformation
              </button>
            </a>
            <a href="https://titanide.zohobookings.com/#/3973691000005149002" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#00A3AD', color: 'white' }}>
                Schedule Discovery Call →
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
