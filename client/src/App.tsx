import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ProductCatalogPage from "@/pages/ProductCatalogPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/cutlery">
        <ProductCatalogPage
          category="cutlery"
          title="Premium Cutlery"
          description="Exquisite cutlery sets crafted with precision and elegance for your dining experience."
        />
      </Route>
      <Route path="/knives">
        <ProductCatalogPage
          category="knives"
          title="Damascus Steel Knives"
          description="Handcrafted knives featuring distinctive Damascus steel patterns and exceptional sharpness."
        />
      </Route>
      <Route path="/kitchenware">
        <ProductCatalogPage
          category="kitchenware"
          title="Premium Kitchenware"
          description="Professional-grade cookware and kitchen accessories for culinary excellence."
        />
      </Route>
      <Route path="/sets">
        <ProductCatalogPage
          category="sets"
          title="Complete Sets"
          description="Comprehensive knife and cutlery collections for the discerning chef."
        />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <AnimatePresence mode="wait">
            {isLoading && <LoadingScreen key="loading" />}
          </AnimatePresence>
          
          {!isLoading && (
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
              <BackToTop />
            </div>
          )}
          
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
