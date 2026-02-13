import { Mail, Phone, MapPin } from "lucide-react";
import { Language, getTranslation } from "../../locales/translations";
import logoImage from 'figma:asset/621cf4ae2d87cdd94deabfc26c10433db8b2e0af.png';

type Page = "home" | "about" | "technology" | "products" | "contact";

interface FooterProps {
  theme: "dark" | "light";
  onNavigate: (page: Page) => void;
  language?: Language;
}

export function Footer({ theme, onNavigate, language = "ko" }: FooterProps) {
  const t = getTranslation(language);
  
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={theme === "dark" ? "bg-black text-gray-300 border-t border-gray-900" : "bg-gray-900 text-gray-300"}>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div 
              className="cursor-pointer flex items-center gap-3 mb-6" 
              onClick={() => handleNavigate("home")}
            >
              <img 
                src={logoImage} 
                alt={language === "ko" ? "비센스바움" : "WISSENSBAUM"} 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  {language === "ko" ? "비센스바움" : "WISSENSBAUM"}
                </span>
                <span className="text-xs text-gray-400">
                  {language === "ko" ? "AI 솔루션 전문기업" : "AI Solution Expert"}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {language === "ko" 
                ? "AI 기술로 비즈니스 혁신을 선도하는 종합 AI 솔루션 전문 기업" 
                : "Comprehensive AI solution company leading business innovation with AI technology"}
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">{language === "ko" ? "페이지" : "Pages"}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigate("home")}
                  className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate("about")}
                  className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate("technology")}
                  className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}
                >
                  {t.nav.technology}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate("products")}
                  className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}
                >
                  {t.nav.products}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">{language === "ko" ? "솔루션" : "Solutions"}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigate("products")}
                  className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}
                >
                  {t.products.categories.ai}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate("products")}
                  className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}
                >
                  {t.products.categories.security}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate("products")}
                  className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}
                >
                  {t.products.categories.education}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <MapPin className="inline-block mr-2" />
                {language === "ko" ? (
                  <>서울특별시 성동구 뚝섬로1길 31<br />서울숲M타워 1406호</>
                ) : (
                  <>Seoul Forest M Tower #1406<br />Seoul, South Korea</>
                )}
              </li>
              <li>
                <Phone className="inline-block mr-2" />
                Tel: 070-4350-1491~3
              </li>
              <li>
                <Mail className="inline-block mr-2" />
                <a href="mailto:cs@wissensbaum.com" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>
                  cs@wissensbaum.com
                </a>
              </li>
              <li>{language === "ko" ? "평일 09:00 ~ 18:00" : "Mon-Fri 09:00 ~ 18:00"}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ㈜비센스바움 (Wissensbaum). All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}