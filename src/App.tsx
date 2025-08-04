
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import BlogAdmin from "./pages/BlogAdmin";
import CaseStudies from "./pages/CaseStudies";
import FreeTools from "./pages/FreeTools";
import Assessment from "./pages/Assessment";
import AssessmentStart from "./pages/AssessmentStart";
import AssessmentResults from "./pages/AssessmentResults";
import VendorRiskAssessment from "./pages/VendorRiskAssessment";
import VendorRiskAssessmentStart from "./pages/VendorRiskAssessmentStart";
import VendorRiskAssessmentResults from "./pages/VendorRiskAssessmentResults";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Risk from "./pages/services/Risk";
import Compliance from "./pages/services/Compliance";
import MedicalStaffing from "./pages/solutions/MedicalStaffing";
import KJAdvisor from "./pages/solutions/KJAdvisor";
import TitanisGRC from "./pages/solutions/TitanisGRC";
import FutureOfComplianceLeadership from "./pages/articles/FutureOfComplianceLeadership";
import FractionalLeadershipAdvantage from "./pages/articles/FractionalLeadershipAdvantage";
import RiskManagementFrameworks from "./pages/articles/RiskManagementFrameworks";
import HIPAADigitalAge from "./pages/articles/HIPAADigitalAge";
import ComplianceTrainingBestPractices from "./pages/articles/ComplianceTrainingBestPractices";
import PolicyDevelopmentFramework from "./pages/articles/PolicyDevelopmentFramework";
import StrategicCompliancePlanning from "./pages/articles/StrategicCompliancePlanning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/risk" element={<Risk />} />
          <Route path="/services/compliance" element={<Compliance />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/medical-staffing" element={<MedicalStaffing />} />
          <Route path="/solutions/digital-products/kj-advisor" element={<KJAdvisor />} />
          <Route path="/solutions/digital-products/titanis" element={<TitanisGRC />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/admin" element={<BlogAdmin />} />
          <Route path="/resources/blog/future-compliance-leadership" element={<FutureOfComplianceLeadership />} />
          <Route path="/resources/blog/fractional-leadership-advantage" element={<FractionalLeadershipAdvantage />} />
          <Route path="/resources/blog/risk-management-frameworks" element={<RiskManagementFrameworks />} />
          <Route path="/resources/blog/hipaa-digital-age" element={<HIPAADigitalAge />} />
          <Route path="/resources/blog/compliance-training-best-practices" element={<ComplianceTrainingBestPractices />} />
          <Route path="/resources/blog/policy-development-framework" element={<PolicyDevelopmentFramework />} />
          <Route path="/resources/blog/strategic-compliance-planning" element={<StrategicCompliancePlanning />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/free-tools" element={<FreeTools />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment-start" element={<AssessmentStart />} />
          <Route path="/assessment-results" element={<AssessmentResults />} />
          <Route path="/vendor-risk-assessment" element={<VendorRiskAssessment />} />
          <Route path="/vendor-risk-assessment-start" element={<VendorRiskAssessmentStart />} />
          <Route path="/vendor-risk-assessment-results" element={<VendorRiskAssessmentResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
