import { useState } from "react";
import { Header } from "./components/v4/Header";
import { Hero } from "./components/v4/Hero";
import { Overview } from "./components/v4/Overview";
import { TechnologyShowcase } from "./components/v4/TechnologyShowcase";
import { ProductGrid } from "./components/v4/ProductGrid";
import { TrustIndicators } from "./components/v4/TrustIndicators";
import { ResearchSection } from "./components/v4/ResearchSection";
import { ContactCTA } from "./components/v4/ContactCTA";
import { Footer } from "./components/v4/Footer";
import { Toaster } from "./components/ui/sonner";
import { Language } from "./locales/translations";

type Page = "home" | "about" | "technology" | "products" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [language, setLanguage] = useState<Language>("ko");

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero theme={theme} onNavigate={setCurrentPage} language={language} />
            <Overview theme={theme} language={language} />
            <TechnologyShowcase theme={theme} language={language} />
            <TrustIndicators theme={theme} language={language} />
            <ContactCTA theme={theme} onNavigate={setCurrentPage} language={language} />
          </>
        );
      case "about":
        return (
          <>
            <div className={`min-h-screen pt-32 pb-24 px-4 ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}>
              <div className="container mx-auto max-w-6xl">
                <h1 className={`text-5xl mb-8 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>{language === "ko" ? "회사소개" : "About Us"}</h1>
                <Overview theme={theme} language={language} />
                <div className="mt-16">
                  <ResearchSection theme={theme} language={language} />
                </div>
              </div>
            </div>
          </>
        );
      case "technology":
        return (
          <>
            <div className={`min-h-screen pt-32 pb-24 px-4 ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}>
              <div className="container mx-auto max-w-7xl">
                <h1 className={`text-5xl mb-8 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>{language === "ko" ? "핵심 ��술" : "Core Technology"}</h1>
                <TechnologyShowcase theme={theme} language={language} />
                <div className="mt-16">
                  <TrustIndicators theme={theme} language={language} />
                </div>
              </div>
            </div>
          </>
        );
      case "products":
        return (
          <>
            <div className={`min-h-screen pt-32 pb-24 px-4 ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}>
              <div className="container mx-auto max-w-7xl">
                <h1 className={`text-5xl mb-8 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>{language === "ko" ? "제품 및 솔루션" : "Products & Solutions"}</h1>
                <ProductGrid theme={theme} language={language} />
              </div>
            </div>
          </>
        );
      case "contact":
        return (
          <>
            <div className={`min-h-screen pt-32 pb-24 px-4 ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}>
              <div className="container mx-auto max-w-4xl">
                <h1 className={`text-5xl mb-8 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>{language === "ko" ? "문의하기" : "Contact Us"}</h1>
                <ContactCTA theme={theme} onNavigate={setCurrentPage} fullPage language={language} />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <Header 
        theme={theme} 
        onToggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer theme={theme} onNavigate={setCurrentPage} language={language} />
      <Toaster />
    </div>
  );
}