
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Services from "./pages/Services";
import MedicalCare from "./pages/services/MedicalCare";
import Gynecology from "./pages/services/Gynecology";
import LaboratoryTests from "./pages/services/LaboratoryTests";
import Surgery from "./pages/services/Surgery";
import BloodTests from "./pages/services/BloodTests";
import Vaccines from "./pages/services/Vaccines";
import BookAppointment from "./pages/BookAppointment";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/medical-care" element={<MedicalCare />} />
            <Route path="/services/gynecology" element={<Gynecology />} />
            <Route path="/services/laboratory-tests" element={<LaboratoryTests />} />
            <Route path="/services/surgery" element={<Surgery />} />
            <Route path="/services/blood-tests" element={<BloodTests />} />
            <Route path="/services/vaccines" element={<Vaccines />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
