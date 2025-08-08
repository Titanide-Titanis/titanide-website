
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-6 font-display">TITANIDE</div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Healthcare compliance and risk management solutions designed to protect and empower your organization's mission while ensuring sustainable growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <a href="tel:832-735-8880" className="hover:text-primary-foreground transition-colors">
                  (832) 735-8880
                </a>
              </div>
              <div className="flex items-center text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <a href="mailto:info@titanideconsulting.com" className="hover:text-primary-foreground transition-colors">
                  info@titanideconsulting.com
                </a>
              </div>
              <div className="flex items-start text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Houston, Texas</div>
                  <div className="mt-1">London, United Kingdom</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/compliance" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Compliance Management
                </Link>
              </li>
              <li>
                <Link to="/services/risk-management" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Risk Management
                </Link>
              </li>
              <li>
                <Link to="/services/fractional-leadership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Fractional Leadership
                </Link>
              </li>
              <li>
                <Link to="/services/analytics" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Healthcare Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Strategic Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Resources */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Solutions & Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/solutions/kj-advisor" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  KJ Advisor
                </Link>
              </li>
              <li>
                <Link to="/solutions/titanis-grc" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  TITANIS GRC
                </Link>
              </li>
              <li>
                <Link to="/solutions/medical-staffing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Medical Staffing
                </Link>
              </li>
              <li>
                <Link to="/resources/free-tools" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Free Assessment Tools
                </Link>
              </li>
              <li>
                <Link to="/resources/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Compliance Corner Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/case-studies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Titanide
                </Link>
              </li>
              <li>
                <Link to="/about/leadership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link to="/about/careers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://calendly.com/titanideconsulting/discovery-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center"
                >
                  Schedule Consultation
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/titanide-consulting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/titanideconsult" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div className="mb-4 md:mb-0">
              © 2024 Titanide Consulting Group, LLC. All rights reserved.
            </div>
            <div className="flex flex-wrap space-x-6 text-center">
              <Link to="/legal/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/legal/accessibility" className="hover:text-primary-foreground transition-colors">
                Accessibility
              </Link>
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
          
          {/* Additional Legal Notice */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/60 text-center leading-relaxed">
              Titanide Consulting Group specializes in healthcare compliance and risk management solutions. 
              We are not a law firm and do not provide legal advice. All compliance guidance should be 
              reviewed with qualified legal counsel appropriate to your organization's specific circumstances.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
