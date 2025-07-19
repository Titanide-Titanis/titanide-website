
import React from 'react';

const Legal = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-16 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Legal & Privacy
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white">
            Your privacy and data security are fundamental to our commitment to excellence.
          </p>
        </div>
      </header>

      {/* Legal Content */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            
            {/* Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#002B45' }}>Privacy Policy</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#005870' }}>Information We Collect</h3>
                  <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Contact information (name, email, phone number)</li>
                    <li>Organization details</li>
                    <li>Assessment responses and compliance data</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#005870' }}>How We Use Your Information</h3>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide and improve our services</li>
                    <li>Generate compliance assessments and recommendations</li>
                    <li>Communicate with you about our services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#005870' }}>Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices include:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Staff training on data protection</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#005870' }}>Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#002B45' }}>Terms of Service</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#005870' }}>Service Description</h3>
                  <p>Titanide Consulting Group provides healthcare compliance consulting, risk management, and related professional services. Our services are designed to assist healthcare organizations in meeting regulatory requirements and improving operational efficiency.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#005870' }}>Professional Relationship</h3>
                  <p>Our services constitute professional consulting advice based on industry best practices and regulatory requirements. Clients remain responsible for:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Implementation of recommendations</li>
                    <li>Ongoing compliance monitoring</li>
                    <li>Decision-making regarding organizational policies</li>
                    <li>Seeking additional professional advice as needed</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#005870' }}>Limitation of Liability</h3>
                  <p>Our services are provided on an advisory basis. While we strive for accuracy and completeness, we cannot guarantee specific outcomes or regulatory compliance results. Clients are responsible for their own compliance obligations.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#005870' }}>Confidentiality</h3>
                  <p>We maintain strict confidentiality regarding all client information and organizational data. We do not share confidential information without explicit consent, except as required by law.</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#002B45' }}>Questions About Our Legal Policies?</h3>
              <p className="text-gray-700 mb-4">
                If you have questions about our privacy policy, terms of service, or data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:info@titanideconsulting.com" className="hover:underline" style={{ color: '#00A3AD' }}>info@titanideconsulting.com</a></p>
                <p><strong>Subject Line:</strong> Legal/Privacy Inquiry</p>
              </div>
              
              <p className="text-sm text-gray-600 mt-6">
                <em>Last updated: {new Date().toLocaleDateString()}</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
