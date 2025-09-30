import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Index from "./pages/Index";
import Insights from "./pages/Insights";
import Servicos from "./pages/Servicos";
import Diferenciais from "./pages/Diferenciais";
import QuemSomos from "./pages/QuemSomos";
import TrabalheConosco from "./pages/TrabalheConosco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout transparentNav><Index /></Layout>} />
          <Route path="/insights" element={<Layout><Insights /></Layout>} />
          <Route path="/servicos" element={<Layout><Servicos /></Layout>} />
          <Route path="/diferenciais" element={<Layout><Diferenciais /></Layout>} />
          <Route path="/quem-somos" element={<Layout><QuemSomos /></Layout>} />
          <Route path="/trabalhe-conosco" element={<Layout><TrabalheConosco /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
