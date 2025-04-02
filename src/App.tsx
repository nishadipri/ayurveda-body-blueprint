
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Questionnaire from "./pages/Questionnaire";
import Results from "./pages/Results";
import EmbedInstructions from "./pages/EmbedInstructions";
import NotFound from "./pages/NotFound";
import EmbeddedQuestionnaire from "./pages/EmbeddedQuestionnaire";
import EmbeddedResults from "./pages/EmbeddedResults";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/results" element={<Results />} />
          <Route path="/embed" element={<EmbedInstructions />} />
          <Route path="/embedded-questionnaire" element={<EmbeddedQuestionnaire />} />
          <Route path="/embedded-results" element={<EmbeddedResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
