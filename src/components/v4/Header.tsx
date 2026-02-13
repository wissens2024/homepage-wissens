import { Button } from "../ui/button";
import { Menu, X, Sun, Moon, ChevronDown, Languages } from "lucide-react";
import { useState } from "react";
import logoImage from 'figma:asset/621cf4ae2d87cdd94deabfc26c10433db8b2e0af.png';
import { Language, getTranslation } from "../../locales/translations";

type Page = "home" | "about" | "technology" | "products" | "contact";

interface HeaderProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
}

export function Header({ theme, onToggleTheme, currentPage, onNavigate, language = "ko", onLanguageChange = () => {} }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const t = getTranslation(language || "ko");

  // Safety check
  if (!t || !t.nav) {
    console.error("Translation not found for language:", language);
    return null;
  }

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: t.nav.home, page: "home" as Page },
    { label: t.nav.about, page: "about" as Page },
    { label: t.nav.technology, page: "technology" as Page },
    { label: t.nav.products, page: "products" as Page },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 ${
        theme === "dark" 
          ? "bg-black/95 backdrop-blur-md border-gray-800" 
          : "bg-white/95 backdrop-blur-md border-gray-200"
      } border-b z-50`}>
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <div 
              className="cursor-pointer flex items-center gap-3" 
              onClick={() => handleNavigate("home")}
            >
              <img 
                src={logoImage} 
                alt={language === "ko" ? "비센스바움" : "WISSENSBAUM"} 
                className={`h-12 w-auto object-contain ${
                  theme === "dark" 
                    ? "brightness-0 invert" 
                    : "brightness-0"
                }`}
              />
              <div className="flex flex-col">
                <span className={`text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {language === "ko" ? "비센스바움" : "WISSENSBAUM"}
                </span>
                <span className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {language === "ko" ? "AI 솔루션 전문기업" : "AI Solution Expert"}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigate(item.page)}
                  className={`${
                    currentPage === item.page
                      ? theme === "dark" 
                        ? "text-cyan-400" 
                        : "text-blue-600"
                      : theme === "dark" 
                        ? "text-gray-300 hover:text-cyan-400" 
                        : "text-gray-700 hover:text-blue-600"
                  } transition-colors relative group`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 ${
                    currentPage === item.page ? "w-full" : "w-0"
                  } ${
                    theme === "dark" ? "bg-cyan-400" : "bg-blue-600"
                  } transition-all group-hover:w-full`} />
                </button>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={onToggleTheme}
                className={`p-2 rounded-lg ${
                  theme === "dark" 
                    ? "hover:bg-gray-800" 
                    : "hover:bg-gray-100"
                } transition-colors`}
                aria-label="테마 변경"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-cyan-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg ${
                    theme === "dark" 
                      ? "hover:bg-gray-800 text-gray-300" 
                      : "hover:bg-gray-100 text-gray-700"
                  } transition-colors`}
                >
                  <Languages className="h-4 w-4" />
                  <span className="text-sm uppercase">{language}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isLangMenuOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isLangMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <div className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg z-20 overflow-hidden ${
                      theme === "dark" 
                        ? "bg-gray-900 border border-gray-800" 
                        : "bg-white border border-gray-200"
                    }`}>
                      <button
                        onClick={() => {
                          onLanguageChange("ko");
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm ${
                          language === "ko"
                            ? theme === "dark"
                              ? "bg-blue-600/20 text-cyan-400"
                              : "bg-blue-50 text-blue-600"
                            : theme === "dark"
                              ? "text-gray-300 hover:bg-gray-800"
                              : "text-gray-700 hover:bg-gray-50"
                        } transition-colors`}
                      >
                        한국어 (KO)
                      </button>
                      <button
                        onClick={() => {
                          onLanguageChange("en");
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm ${
                          language === "en"
                            ? theme === "dark"
                              ? "bg-blue-600/20 text-cyan-400"
                              : "bg-blue-50 text-blue-600"
                            : theme === "dark"
                              ? "text-gray-300 hover:bg-gray-800"
                              : "text-gray-700 hover:bg-gray-50"
                        } transition-colors`}
                      >
                        English (EN)
                      </button>
                    </div>
                  </>
                )}
              </div>

              <Button 
                onClick={() => handleNavigate("contact")} 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {t.nav.contact}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Language Selector - Mobile */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className={`p-2 rounded-lg ${
                    theme === "dark" 
                      ? "hover:bg-gray-800" 
                      : "hover:bg-gray-100"
                  } transition-colors`}
                >
                  <Languages className={`h-5 w-5 ${theme === "dark" ? "text-cyan-400" : "text-gray-700"}`} />
                </button>
                
                {isLangMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsLangMenuOpen(false)}
                    />
                    <div className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg z-20 overflow-hidden ${
                      theme === "dark" 
                        ? "bg-gray-900 border border-gray-800" 
                        : "bg-white border border-gray-200"
                    }`}>
                      <button
                        onClick={() => {
                          onLanguageChange("ko");
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm ${
                          language === "ko"
                            ? theme === "dark"
                              ? "bg-blue-600/20 text-cyan-400"
                              : "bg-blue-50 text-blue-600"
                            : theme === "dark"
                              ? "text-gray-300 hover:bg-gray-800"
                              : "text-gray-700 hover:bg-gray-50"
                        } transition-colors`}
                      >
                        한국어
                      </button>
                      <button
                        onClick={() => {
                          onLanguageChange("en");
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm ${
                          language === "en"
                            ? theme === "dark"
                              ? "bg-blue-600/20 text-cyan-400"
                              : "bg-blue-50 text-blue-600"
                            : theme === "dark"
                              ? "text-gray-300 hover:bg-gray-800"
                              : "text-gray-700 hover:bg-gray-50"
                        } transition-colors`}
                      >
                        English
                      </button>
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={onToggleTheme}
                className={`p-2 rounded-lg ${
                  theme === "dark" 
                    ? "hover:bg-gray-800" 
                    : "hover:bg-gray-100"
                } transition-colors`}
                aria-label="테마 변경"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-cyan-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className={`h-6 w-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} />
                ) : (
                  <Menu className={`h-6 w-6 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 top-20 ${
          theme === "dark" ? "bg-black" : "bg-white"
        } z-40 lg:hidden`}>
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-left py-3 text-lg ${
                  currentPage === item.page
                    ? theme === "dark"
                      ? "text-cyan-400 border-cyan-400"
                      : "text-blue-600 border-blue-600"
                    : theme === "dark" 
                      ? "text-gray-300 hover:text-cyan-400 border-gray-800" 
                      : "text-gray-700 hover:text-blue-600 border-gray-100"
                } border-b`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => handleNavigate("contact")} 
              className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              {t.nav.contact}
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}