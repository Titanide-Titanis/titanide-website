
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">TITANIDE</div>
            <p className="text-primary-foreground/80 mb-4">
              Healthcare compliance and risk management solutions designed to protect and empower your organization.
            </p>
            <div className="flex items-center text-sm text-primary-foreground/80 mb-2">
              <Mail className="h-4 w-4 mr-2" />
              info@titanideconsulting.com
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/compliance" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Compliance Services
                </Link>
              </li>
              <li>
                <Link to="/services/risk" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Risk Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/medical-staffing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Medical Staffing
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-products/kj-advisor" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  KJ Advisor
                </Link>
              </li>
              <li>
                <Link to="/solutions/digital-products/titanis" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  TITANIS GRC
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/resources/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/case-studies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/free-tools" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div>
              © 2024 Titanide Consulting, LLC. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/legal" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
