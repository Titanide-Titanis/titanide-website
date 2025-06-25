
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
import UseCases from "./pages/UseCases";
import FreeTools from "./pages/FreeTools";
import NotFound from "./pages/NotFound";
import FutureOfComplianceLeadership from "./pages/articles/FutureOfComplianceLeadership";
import FractionalLeadershipAdvantage from "./pages/articles/FractionalLeadershipAdvantage";
import RiskManagementFrameworks from "./pages/articles/RiskManagementFrameworks";
import HIPAADigitalAge from "./pages/articles/HIPAADigitalAge";

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
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/future-compliance-leadership" element={<FutureOfComplianceLeadership />} />
          <Route path="/resources/blog/fractional-leadership-advantage" element={<FractionalLeadershipAdvantage />} />
          <Route path="/resources/blog/risk-management-frameworks" element={<RiskManagementFrameworks />} />
          <Route path="/resources/blog/hipaa-digital-age" element={<HIPAADigitalAge />} />
          <Route path="/resources/use-cases" element={<UseCases />} />
          <Route path="/resources/free-tools" element={<FreeTools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
