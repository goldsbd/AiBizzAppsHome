
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EnterpriseRisk from "./pages/EnterpriseRisk";
import ContractsChecker from "./pages/ContractsChecker";
import MobileApp from "./pages/MobileApp";
import Consulting from "./pages/Consulting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enterprise-risk" element={<EnterpriseRisk />} />
          <Route path="/contracts-checker" element={<ContractsChecker />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/consulting" element={<Consulting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
