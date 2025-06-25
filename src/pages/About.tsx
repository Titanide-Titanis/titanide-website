
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-20 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)', animation: 'fadeIn 1.5s ease-out' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ animation: 'slideInDown 1s ease-out' }}>
            Discover Titanide Consulting
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto" style={{ animation: 'slideInUp 1.2s ease-out' }}>
            Empowering enterprises through strategic compliance, dynamic leadership, and future-focused risk governance.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 inline-block" style={{ color: '#003f5c', borderLeft: '5px solid #00A3AD', paddingLeft: '1rem' }}>
            Our Mission
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Titanide Consulting Group empowers organizations to thrive through precision risk management, regulatory alignment, and scalable compliance frameworks. We serve clients who refuse to compromise on excellence, delivering fractional compliance leadership that transforms regulatory challenges into competitive advantages.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 inline-block" style={{ color: '#003f5c', borderLeft: '5px solid #00A3AD', paddingLeft: '1rem' }}>
            Our Values
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#002B45' }}>Integrity</h3>
              <p className="text-sm sm:text-base">We lead with honesty and build trust through transparency in every engagement.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#002B45' }}>Excellence</h3>
              <p className="text-sm sm:text-base">Every engagement reflects our standard of quality, precision, and attention to detail.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#002B45' }}>Equity</h3>
              <p className="text-sm sm:text-base">We embed fairness into every policy and partnership we influence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 inline-block" style={{ color: '#003f5c', borderLeft: '5px solid #00A3AD', paddingLeft: '1rem' }}>
            Meet Our Founder & Principal Consultant
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="text-center lg:text-left">
              <img 
                src="https://previewengine-accl.zoho.com/image/WD/9rk2kec3040c46c2e476f8905ede61724aef5?version=1.0&width=2046&height=1536" 
                alt="Kelly Menefee Okpala – Titanide Founder" 
                className="mx-auto lg:mx-0 rounded-full shadow-xl w-48 h-48 sm:w-64 sm:h-64 mb-6"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '4px solid #00A3AD'
                }}
              />
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#002B45' }}>
                Kelly Menefee Okpala
              </h3>
              <p className="text-base sm:text-lg font-medium mb-4" style={{ color: '#005870' }}>
                Fractional Chief Compliance Officer
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: '#002B45' }}>Professional Overview</h4>
                <p className="text-sm sm:text-base leading-relaxed mb-4">
                  Kelly Menefee Okpala brings over 10 years of enterprise-level experience in regulatory compliance, risk management, and healthcare operations. As a seasoned executive and fractional Chief Compliance Officer, she has successfully guided organizations through complex regulatory landscapes while building robust compliance infrastructures that drive operational excellence.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Known for her precision and transformational leadership across healthcare, IT, and telecommunications, Kelly delivers comprehensive frameworks that ensure organizations not only meet but exceed governance expectations.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: '#002B45' }}>Core Expertise</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li>• Healthcare Compliance & HIPAA</li>
                    <li>• Risk Management & Governance</li>
                    <li>• IT Security & Data Protection</li>
                    <li>• Business Continuity Planning</li>
                  </ul>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li>• Telecom Strategy & Operations</li>
                    <li>• Vendor Management</li>
                    <li>• Policy Development</li>
                    <li>• Audit Management</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: '#002B45' }}>Professional Experience Highlights</h4>
                <div className="space-y-4 text-sm sm:text-base">
                  <div>
                    <p className="font-medium" style={{ color: '#005870' }}>Healthcare Systems Leadership</p>
                    <p>Led compliance initiatives for large integrated healthcare systems, managing multi-million dollar risk portfolios and ensuring regulatory adherence across multiple states and service lines.</p>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: '#005870' }}>Government & Public Sector</p>
                    <p>Directed government compliance strategy and risk management for public health initiatives, developing frameworks that became models for statewide implementation.</p>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: '#005870' }}>Technology & Telecommunications</p>
                    <p>Transformed telecom operations and IT governance structures, implementing security protocols and vendor management systems that enhanced operational efficiency and compliance posture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" style={{ backgroundColor: '#eaf6f8' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: '#003f5c' }}>
            What Sets Titanide Apart
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#002B45' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: '#002B45' }}>Proven Track Record</h3>
              <p className="text-sm sm:text-base text-center">10+ years of executive-level compliance leadership across multiple industries and regulatory environments.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#002B45' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: '#002B45' }}>Immediate Impact</h3>
              <p className="text-sm sm:text-base text-center">Hit the ground running with strategies that deliver measurable results from day one of engagement.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#002B45' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: '#002B45' }}>Fractional Advantage</h3>
              <p className="text-sm sm:text-base text-center">Executive-level expertise at a fraction of the cost, with flexible engagement models that scale with your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KJ Advisor Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-6 sm:p-8 text-center rounded-lg shadow-lg" style={{ border: '2px dashed #00A3AD' }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#002B45' }}>
              Meet KJ Advisor: Your AI-Powered Executive Partner
            </h3>
            <p className="text-sm sm:text-base mb-6 max-w-2xl mx-auto" style={{ color: '#1a1a1a' }}>
              Experience Kelly's expertise 24/7 through KJ Advisor, an AI-powered executive companion that provides strategic compliance guidance, real-time solutions, and expert insights whenever you need them.
            </p>
            <a href="https://chatgpt.com/g/g-67ff5bc7e0a48191bc849e5aa3a917ad-kj-advisor-the-executive-companion" target="_blank" rel="noopener noreferrer">
              <button className="text-white hover:opacity-90 px-6 py-3 rounded-md font-semibold transition-opacity text-base sm:text-lg" style={{ backgroundColor: '#002B45' }}>
                Launch KJ Advisor
                <span className="ml-2">→</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ backgroundColor: '#002837' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Compliance Strategy?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Want to learn more about our leadership or engage Titanide for your next project? Let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:info@titanideconsulting.com" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Email Our Team
              </button>
            </a>
            <a href="https://titanide.zohobookings.com/#/3973691000005149002" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="text-white hover:opacity-90 w-full sm:w-auto px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                Schedule Discovery Call
                <span className="ml-2">→</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
