
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Hero Section */}
      <header className="py-12 sm:py-20 px-4 sm:px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #002B45, #005870)' }}>
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto text-white">
            Ready to transform your healthcare compliance? Let's start the conversation.
          </p>
        </div>
      </header>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#002B45' }}>
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:info@titanideconsulting.com" className="hover:underline" style={{ color: '#00A3AD' }}>info@titanideconsulting.com</a>
                    </p>
                    <p className="text-gray-600">
                      UK Services: <a href="mailto:michadrian.uk@titanideconsulting.com" className="hover:underline" style={{ color: '#00A3AD' }}>michadrian.uk@titanideconsulting.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Saturday - Sunday: By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00A3AD' }}>
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#002B45' }}>Service Areas</h3>
                    <p className="text-gray-600">United States (Primary)</p>
                    <p className="text-gray-600">United Kingdom (Michadrian Healthcare Services)</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#002B45' }}>Schedule a Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Ready to discuss your specific needs? Book a complimentary consultation with our experts.
                </p>
                <a href="https://titanide.zohobookings.com/#/3973691000005149002" target="_blank" rel="noopener noreferrer">
                  <button className="text-white hover:opacity-90 px-8 py-3 rounded-md text-lg font-semibold transition-opacity" style={{ backgroundColor: '#00A3AD' }}>
                    Book Consultation
                    <span className="ml-2">→</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#002B45' }}>
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#002B45' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#E5E7EB' }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#002B45' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#E5E7EB' }}
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium mb-2" style={{ color: '#002B45' }}>
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#E5E7EB' }}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#002B45' }}>
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#E5E7EB' }}
                  >
                    <option value="">Select a topic</option>
                    <option value="compliance">Compliance Services</option>
                    <option value="risk">Risk Management</option>
                    <option value="staffing">Medical Staffing (UK)</option>
                    <option value="assessment">Compliance Assessment</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#002B45' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#E5E7EB' }}
                    placeholder="Tell us about your specific needs and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white hover:opacity-90 px-8 py-3 rounded-md text-lg font-semibold transition-opacity"
                  style={{ backgroundColor: '#00A3AD' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
