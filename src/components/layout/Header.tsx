
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">TITANIDE</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary">
                Services
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/services/compliance" className="block px-4 py-2 text-sm hover:bg-muted">
                  Compliance Services
                </Link>
                <Link to="/services/risk" className="block px-4 py-2 text-sm hover:bg-muted">
                  Risk Management
                </Link>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary">
                Solutions
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/solutions/medical-staffing" className="block px-4 py-2 text-sm hover:bg-muted">
                  Medical Staffing
                </Link>
                <Link to="/solutions/digital-products/kj-advisor" className="block px-4 py-2 text-sm hover:bg-muted">
                  KJ Advisor
                </Link>
                <Link to="/solutions/digital-products/titanis" className="block px-4 py-2 text-sm hover:bg-muted">
                  TITANIS GRC
                </Link>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-foreground hover:text-primary">
                Resources
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/resources/blog" className="block px-4 py-2 text-sm hover:bg-muted">
                  Blog
                </Link>
                <Link to="/resources/case-studies" className="block px-4 py-2 text-sm hover:bg-muted">
                  Case Studies
                </Link>
                <Link to="/resources/free-tools" className="block px-4 py-2 text-sm hover:bg-muted">
                  Free Tools
                </Link>
              </div>
            </div>

            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://titanide.zohobookings.com/#/3973691000005149002" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="sm">
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
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
                Home
              </Link>
              
              {/* Services Mobile */}
              <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                >
                  Services
                  <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-6 space-y-1">
                    <Link to="/services/compliance" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                      Compliance Services
                    </Link>
                    <Link to="/services/risk" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                      Risk Management
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Mobile */}
              <div>
                <button 
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                >
                  Solutions
                  <ChevronDown className={`h-3 w-3 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div className="pl-6 space-y-1">
                    <Link to="/solutions/medical-staffing" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                      Medical Staffing
                    </Link>
                    <Link to="/solutions/digital-products/kj-advisor" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                      KJ Advisor
                    </Link>
                    <Link to="/solutions/digital-products/titanis" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                      TITANIS GRC
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Mobile */}
              <div>
                <button 
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                >
                  Resources
                  <ChevronDown className={`h-3 w-3 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-6 space-y-1">
                    <Link to="/resources/blog" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                      Blog
                    </Link>
                    <Link to="/resources/case-studies" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                      Case Studies
                    </Link>
                    <Link to="/resources/free-tools" className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary">
                      Free Tools
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary">
                Contact
              </Link>

              <div className="pt-4">
                <a 
                  href="https://titanide.zohobookings.com/#/3973691000005149002" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="cta" className="w-full">
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
