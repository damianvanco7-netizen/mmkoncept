import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import VirtualVillage from "./pages/VirtualVillage";
import Consulting from "./pages/Consulting";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Unsubscribe from "./pages/Unsubscribe";
import LiquidGlassFilter from "./components/LiquidGlassFilter";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const BrowserChromeTheme = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only update the browser chrome theme-color meta tag on route change.
    // Do NOT touch html/body backgroundColor — that causes a visible color flash
    // on iOS Safari before the gradient image renders. The body keeps a single
    // static dark color (set once) that matches the gradient base.
    const isLightSurface = pathname === "/virtual-village";
    const browserSurface = isLightSurface ? "#e5ded3" : "#0b0806";

    let themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    const createdMeta = !themeColorMeta;

    if (!themeColorMeta) {
      themeColorMeta = document.createElement("meta");
      themeColorMeta.name = "theme-color";
      document.head.appendChild(themeColorMeta);
    }

    const previousThemeColor = themeColorMeta.content;
    themeColorMeta.content = browserSurface;

    return () => {
      if (createdMeta) {
        themeColorMeta?.remove();
      } else if (themeColorMeta) {
        themeColorMeta.content = previousThemeColor;
      }
    };
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LiquidGlassFilter />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BrowserChromeTheme />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/virtual-village" element={<VirtualVillage />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/gdpr" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
