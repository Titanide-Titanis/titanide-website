
import React from 'react';
import { ArrowRight, Users, TrendingUp, Shield, CheckCircle, FileText, AlertTriangle } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-20 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Client Success Stories
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white">
            Real-world transformations showcasing how Titanide's proven frameworks help healthcare organizations achieve compliance excellence and protect critical funding.
          </p>
        </div>
      </header>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Case Study 1: Rural FQHC Transformation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                <Users className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#002B45' }}>
                  Rural FQHC Compliance Turnaround
                </h3>
                <p className="text-gray-600 mb-4">
                  A struggling rural Federally Qualified Health Center facing HRSA audit findings transformed their compliance program and secured $2.3M in continued federal funding.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>100% HRSA compliance achievement</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Zero audit findings in follow-up</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>$2.3M funding protection</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Timeline:</strong> 6 months | <strong>Size:</strong> 15,000 patients/year
                </div>
                <button className="text-sm font-medium flex items-center hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  Read Full Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Case Study 2: Multi-State Health System */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#002B45' }}>
                  Multi-State Health System Integration
                </h3>
                <p className="text-gray-600 mb-4">
                  A regional health system with 12 facilities across 3 states achieved unified compliance standards and reduced audit preparation time by 75%.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Unified compliance framework</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>75% reduction in audit prep time</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Streamlined reporting processes</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Timeline:</strong> 12 months | <strong>Size:</strong> 12 facilities, 3 states
                </div>
                <button className="text-sm font-medium flex items-center hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  Read Full Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Case Study 3: HIPAA Security Overhaul */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <Shield className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#002B45' }}>
                  HIPAA Security Framework Overhaul
                </h3>
                <p className="text-gray-600 mb-4">
                  A community hospital eliminated all HIPAA security vulnerabilities and implemented comprehensive privacy protections following a near-breach incident.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Zero security vulnerabilities</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>100% staff training completion</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Automated monitoring system</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Timeline:</strong> 4 months | <strong>Size:</strong> 250-bed hospital
                </div>
                <button className="text-sm font-medium flex items-center hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  Read Full Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Additional Case Studies */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <FileText className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#002B45' }}>
                  Policy Framework Modernization
                </h3>
                <p className="text-gray-600 mb-4">
                  A behavioral health organization updated 200+ policies, achieving full regulatory alignment and reducing compliance gaps by 95%.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>200+ policies updated</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>95% reduction in compliance gaps</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Automated policy management</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Timeline:</strong> 8 months | <strong>Size:</strong> Behavioral health network
                </div>
                <button className="text-sm font-medium flex items-center hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  Read Full Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <AlertTriangle className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#002B45' }}>
                  Crisis Response & Recovery
                </h3>
                <p className="text-gray-600 mb-4">
                  A specialty clinic facing regulatory sanctions achieved full compliance restoration and regained accreditation within 90 days.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Full compliance restoration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Accreditation regained</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>90-day turnaround</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Timeline:</strong> 3 months | <strong>Size:</strong> Specialty clinic
                </div>
                <button className="text-sm font-medium flex items-center hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  Read Full Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <Users className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#002B45' }}>
                  Training Program Excellence
                </h3>
                <p className="text-gray-600 mb-4">
                  A large practice group achieved 100% staff competency across all compliance areas through our comprehensive training program.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>100% staff competency</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Role-based training modules</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2" style={{ color: '#00A3AD' }} />
                    <span>Ongoing competency tracking</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  <strong>Timeline:</strong> 6 months | <strong>Size:</strong> 500+ staff members
                </div>
                <button className="text-sm font-medium flex items-center hover:translate-x-1 transition-transform" style={{ color: '#00A3AD' }}>
                  Read Full Case Study
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#002B45' }}>
            Proven Results Across Healthcare Sectors
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>100%</div>
              <p className="text-gray-600">Client audit success rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>$50M+</div>
              <p className="text-gray-600">In protected funding</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>75%</div>
              <p className="text-gray-600">Average reduction in compliance gaps</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: '#00A3AD' }}>50+</div>
              <p className="text-gray-600">Healthcare organizations served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ backgroundColor: '#002837' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Write Your Success Story?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white">
            Join the growing list of healthcare organizations that have transformed their compliance programs with Titanide's proven frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:info@titanideconsulting.com" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Discuss Your Needs
              </button>
            </a>
            <a href="https://titanide.zohobookings.com/#/3973691000005149002" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Schedule Consultation
                <span className="ml-2">→</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
