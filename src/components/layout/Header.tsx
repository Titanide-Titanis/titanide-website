
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-2" />
                <span>(832) 735-8880</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 mr-2" />
                <span>info@titanideconsulting.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Trusted by 500+ Healthcare Organizations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary font-display">
              TITANIDE
            </div>
            <div className="ml-2 text-sm text-muted-foreground hidden lg:block">
              Consulting Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary font-semibold' : 'text-foreground'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link 
                    to="/services/compliance" 
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="font-medium">Compliance Management</div>
                    <div className="text-xs text-muted-foreground">HIPAA, Joint Commission, Medicare</div>
                  </Link>
                  <Link 
                    to="/services/risk-management" 
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="font-medium">Risk Management</div>
                    <div className="text-xs text-muted-foreground">Enterprise risk assessment & mitigation</div>
                  </Link>
                  <Link 
                    to="/services/fractional-leadership" 
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="font-medium">Fractional Leadership</div>
                    <div className="text-xs text-muted-foreground">Interim CCO & risk leadership</div>
                  </Link>
                  <Link 
                    to="/services/analytics" 
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="font-medium">Healthcare Analytics</div>
                    <div className="text-xs text-muted-foreground">Compliance dashboards & insights</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                Solutions
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link 
                    to="/solutions/kj-advisor" 
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="font-medium">KJ Advisor</div>
                    <div className="text-xs text-muted-foreground">AI-powered compliance guidance</div>
                  </Link>
                  <Link 
                    to="/solutions/titanis-grc" 
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="font-medium">TITANIS GRC</div>
                    <div className="text-xs text-muted-foreground">Healthcare GRC platform</div>
                  </Link>
                  <Link 
                    to="/solutions/medical-staffing" 
                    className="block px-4 py-3 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="font-medium">Medical Staffing</div>
                    <div className="text-xs text-muted-foreground">UK healthcare recruitment</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                Resources
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  <Link to="/resources/blog" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Compliance Corner Blog
                  </Link>
                  <Link to="/resources/case-studies" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Case Studies
                  </Link>
                  <Link to="/resources/free-tools" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Free Assessment Tools
                  </Link>
                  <Link to="/resources/guides" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Compliance Guides
                  </Link>
                  <Link to="/resources/webinars" className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
                    Webinars & Training
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary font-semibold' : 'text-foreground'
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:832-735-8880"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              (832) 735-8880
            </a>
            <a 
              href="https://calendly.com/titanideconsulting/discovery-call" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm" className="font-semibold">
                Schedule Consultation
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-white py-4">
            <div className="space-y-2">
              <Link to="/" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md">
                Home
              </Link>
              
              {/* Services Mobile */}
              <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                >
                  Services
                  <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-6 space-y-1 mt-2">
                    <Link to="/services/compliance" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Compliance Management
                    </Link>
                    <Link to="/services/risk-management" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Risk Management
                    </Link>
                    <Link to="/services/fractional-leadership" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Fractional Leadership
                    </Link>
                    <Link to="/services/analytics" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Healthcare Analytics
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Mobile */}
              <div>
                <button 
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                >
                  Solutions
                  <ChevronDown className={`h-3 w-3 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div className="pl-6 space-y-1 mt-2">
                    <Link to="/solutions/kj-advisor" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      KJ Advisor
                    </Link>
                    <Link to="/solutions/titanis-grc" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      TITANIS GRC
                    </Link>
                    <Link to="/solutions/medical-staffing" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Medical Staffing
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Mobile */}
              <div>
                <button 
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                >
                  Resources
                  <ChevronDown className={`h-3 w-3 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-6 space-y-1 mt-2">
                    <Link to="/resources/blog" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Blog
                    </Link>
                    <Link to="/resources/case-studies" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Case Studies
                    </Link>
                    <Link to="/resources/free-tools" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Free Tools
                    </Link>
                    <Link to="/resources/guides" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Guides
                    </Link>
                    <Link to="/resources/webinars" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md">
                      Webinars
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md">
                Contact
              </Link>

              <div className="pt-4 space-y-3">
                <a 
                  href="tel:832-735-8880"
                  className="block text-center"
                >
                  <Button variant="outline" className="w-full">
                    Call (832) 735-8880
                  </Button>
                </a>
                <a 
                  href="https://calendly.com/titanideconsulting/discovery-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="default" className="w-full font-semibold">
                    Schedule Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
