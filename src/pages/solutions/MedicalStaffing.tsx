
import React from 'react';

const MedicalStaffing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Coming 2026 Banner */}
      <div className="py-3 px-4 text-center text-white overflow-hidden" style={{ 
        background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B, #4ECDC4, #45B7D1)',
        backgroundSize: '400% 400%',
        animation: 'gradient 4s ease infinite'
      }}>
        <div className="relative">
          <p className="text-sm sm:text-base font-bold tracking-wide" style={{ animation: 'bounce 2s infinite' }}>
            🎉 COMING 2026 • Revolutionizing UK Healthcare • COMING 2026 🎉
          </p>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-60" style={{ animation: 'sparkle 1.5s ease-in-out infinite' }}></div>
            <div className="absolute top-1 right-4 w-1 h-1 bg-white rounded-full opacity-80" style={{ animation: 'sparkle 2s ease-in-out infinite 0.5s' }}></div>
            <div className="absolute bottom-0 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-70" style={{ animation: 'sparkle 1.8s ease-in-out infinite 1s' }}></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="py-12 sm:py-20 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)', animation: 'fadeIn 1.5s ease-out' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'white', animation: 'slideInDown 1s ease-out' }}>
            Michadrian Healthcare Services
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white" style={{ animation: 'slideInUp 1.2s ease-out' }}>
            A division of Titanide Consulting Group
          </p>
          <button 
            onClick={scrollToContact}
            className="mt-8 text-white hover:opacity-90 px-8 py-3 rounded-md text-lg font-semibold transition-opacity"
            style={{ backgroundColor: '#00A3AD', animation: 'fadeIn 2s ease-out' }}
          >
            Contact Us
            <span className="ml-2">→</span>
          </button>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <p className="text-base sm:text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Titanide Consulting Group proudly introduces our UK division — <strong>Michadrian Healthcare Services</strong> — 
            delivering healthcare personnel matchmaking, home care services, and regulatory compliance solutions 
            tailored for the UK healthcare sector.
          </p>
        </div>
      </section>

      {/* KJ Advisor Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-6 sm:p-8 text-center rounded-lg shadow-lg" style={{ border: '2px dashed #00A3AD', animation: 'fadeInUp 1.5s ease-out' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#002B45', animation: 'bounce 2s infinite' }}>
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#002B45' }}>
              KJ Advisor: AI-Powered Compliance Assistant
            </h3>
            <p className="text-sm sm:text-base mb-6 max-w-2xl mx-auto" style={{ color: '#1a1a1a' }}>
              AI-powered compliance advisor providing instant guidance on UK healthcare regulations and best practices, available 24/7 for your team.
            </p>
            <a href="https://chatgpt.com/g/g-6877d0b9d1c88191a7b6a85d0b706f53-kj-advisor-uk-eu-edition" target="_blank" rel="noopener noreferrer">
              <button className="text-white hover:opacity-90 px-6 py-3 rounded-md font-semibold transition-opacity text-base sm:text-lg" style={{ backgroundColor: '#002B45' }}>
                Launch KJ Advisor
                <span className="ml-2">→</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 inline-block" style={{ color: '#003f5c', borderLeft: '5px solid #00A3AD', paddingLeft: '1rem' }}>
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#002B45' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: '#002B45' }}>Healthcare Personnel Matchmaking</h3>
              <p className="text-sm sm:text-base text-center">
                Connecting qualified, vetted healthcare professionals with clients for home-based nursing and personal care.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#002B45' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: '#002B45' }}>Home Care Services</h3>
              <p className="text-sm sm:text-base text-center">
                Compassionate, personalized care delivered in the comfort of clients' homes by experienced healthcare providers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#002B45' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: '#002B45' }}>Regulatory Compliance & Risk Management</h3>
              <p className="text-sm sm:text-base text-center">
                Helping UK healthcare organizations meet statutory obligations, strengthen governance, and improve operational outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Michadrian Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-8" style={{ backgroundColor: '#eaf6f8' }}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 inline-block" style={{ color: '#003f5c', borderLeft: '5px solid #00A3AD', paddingLeft: '1rem' }}>
            Why Choose Michadrian?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#00A3AD' }}>
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-base sm:text-lg">International expertise with local insight</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#00A3AD' }}>
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-base sm:text-lg">Proven track record in healthcare compliance</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#00A3AD' }}>
                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-base sm:text-lg">Fully staffed UK presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ backgroundColor: '#002837' }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Transform Your UK Healthcare Operations?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto text-white">
            Ready to explore how Michadrian Healthcare Services can support your UK healthcare needs?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:michadrian.uk@titanideconsulting.com" className="w-full sm:w-auto">
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

      {/* Floating KJ Advisor Button */}
      <div className="fixed bottom-6 right-6 z-50" style={{ animation: 'pulse 2s infinite' }}>
        <a href="https://chatgpt.com/g/g-6877d0b9d1c88191a7b6a85d0b706f53-kj-advisor-uk-eu-edition" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 rounded-full shadow-lg hover:shadow-xl transition-shadow px-4 py-3 text-white font-semibold" style={{ backgroundColor: '#002B45' }}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            KJ Advisor
          </button>
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInDown {
          from {
            transform: translateY(-30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -10px, 0);
          }
          70% {
            transform: translate3d(0, -5px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 43, 69, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 43, 69, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 43, 69, 0);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default MedicalStaffing;
