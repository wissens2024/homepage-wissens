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

type Page = "home" | "about" | "technology" | "products" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero theme={theme} onNavigate={setCurrentPage} />
            <Overview theme={theme} />
            <TechnologyShowcase theme={theme} />
            <TrustIndicators theme={theme} />
            <ContactCTA theme={theme} onNavigate={setCurrentPage} />
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
                }`}>회사소개</h1>
                <Overview theme={theme} />
                <div className="mt-16">
                  <ResearchSection theme={theme} />
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
                }`}>핵심 기술</h1>
                <TechnologyShowcase theme={theme} />
                <div className="mt-16">
                  <TrustIndicators theme={theme} />
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
                }`}>제품 및 솔루션</h1>
                <ProductGrid theme={theme} />
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
                }`}>문의하기</h1>
                <ContactCTA theme={theme} onNavigate={setCurrentPage} fullPage />
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
      />
      <main>
        {renderPage()}
      </main>
      <Footer theme={theme} onNavigate={setCurrentPage} />
    </div>
  );
}
