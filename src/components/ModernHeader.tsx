import { Button } from "./ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import logoImage from 'figma:asset/c7ba2678653175767dcc6cca0ea6c1f37d4c7ae9.png';
import { use3DTilt } from "../hooks/use3DTilt";

interface ModernHeaderProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export function ModernHeader({ theme, onToggleTheme }: ModernHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoTilt = use3DTilt();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "회사소개", id: "about" },
    { label: "솔루션", id: "solutions" },
    { label: "제품", id: "products" },
    { label: "인증 및 특허", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 ${
        theme === "dark" 
          ? "bg-black/80 backdrop-blur-md border-gray-800" 
          : "bg-white/80 backdrop-blur-md border-gray-200"
      } border-b z-50`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* Logo with 3D Tilt */}
            <div 
              ref={logoTilt.ref}
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                transform: logoTilt.transform,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <img 
                src={logoImage} 
                alt="비센스바움" 
                className={`w-10 h-10 object-contain ${theme === "dark" ? "mix-blend-lighten" : ""}`}
                style={theme === "dark" ? { filter: 'brightness(1.2)' } : {}}
              />
              <div>
                <div className={`text-xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  WISSENSBAUM
                </div>
                <div className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  비센스바움
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    theme === "dark" 
                      ? "text-gray-300 hover:text-cyan-400" 
                      : "text-gray-700 hover:text-blue-600"
                  } transition-colors relative group`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
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

              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                문의하기
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
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
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-3 text-lg ${
                  theme === "dark" 
                    ? "text-gray-300 hover:text-cyan-400 border-gray-800" 
                    : "text-gray-700 hover:text-blue-600 border-gray-100"
                } border-b`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              문의하기
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}