import { Button } from "../ui/button";
import { ArrowRight, Play, Zap, Sparkles } from "lucide-react";
import { Language, getTranslation } from "../../locales/translations";
import { use3DTilt } from "../../hooks/use3DTilt";

type Page = "home" | "about" | "technology" | "products" | "contact";

interface HeroProps {
  theme: "dark" | "light";
  onNavigate: (page: Page) => void;
  language?: Language;
}

export function Hero({ theme, onNavigate, language = "ko" }: HeroProps) {
  const t = getTranslation(language);
  const imageTilt = use3DTilt();
  
  return (
    <section className={`relative pt-32 pb-24 overflow-hidden ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${
          theme === "dark" 
            ? "bg-gradient-to-br from-blue-950/20 via-black to-indigo-950/20" 
            : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
        }`} />
        {/* Grid Pattern */}
        <div 
          className={`absolute inset-0 ${
            theme === "dark" ? "opacity-10" : "opacity-5"
          }`}
          style={{
            backgroundImage: `
              linear-gradient(${theme === "dark" ? "#0ea5e9" : "#3b82f6"} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === "dark" ? "#0ea5e9" : "#3b82f6"} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Animated Gradient Orbs */}
        <div className={`absolute top-1/4 -left-20 w-96 h-96 ${
          theme === "dark" ? "bg-blue-500/10" : "bg-blue-500/20"
        } rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 ${
          theme === "dark" ? "bg-indigo-500/10" : "bg-indigo-500/20"
        } rounded-full blur-3xl`} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              theme === "dark" 
                ? "bg-blue-500/10 border border-blue-500/20" 
                : "bg-blue-100 border border-blue-200"
            }`}>
              <Sparkles className={`h-4 w-4 ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`} />
              <span className={`text-sm ${
                theme === "dark" ? "text-cyan-400" : "text-blue-600"
              }`}>
                AI Technology Leader
              </span>
            </div>

            <h1 className={`text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {t.hero.company}
              </span>
            </h1>

            <p className={`text-xl mb-8 leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => onNavigate("products")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 px-8 text-lg group"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => onNavigate("technology")}
                className={`h-12 px-8 text-lg group ${ 
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400"
                    : "bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-500 text-blue-700 hover:bg-blue-100"
                }`}
              >
                <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {t.hero.learnMore}
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div 
            ref={imageTilt.ref}
            className="relative"
            style={{
              transform: imageTilt.transform,
              transition: 'transform 0.3s ease-out',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className={`aspect-square rounded-2xl overflow-hidden ${
              theme === "dark" 
                ? "bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800" 
                : "bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
            } shadow-2xl`}>
              <img 
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE4MzY4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Technology"
                className="w-full h-full object-cover opacity-80"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Elements */}
              <div className={`absolute top-6 left-6 px-4 py-2 rounded-lg backdrop-blur-md ${
                theme === "dark" ? "bg-white/10" : "bg-white/80"
              } border ${theme === "dark" ? "border-white/20" : "border-gray-200"}`}>
                <div className={`text-sm ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  LLM Processing
                </div>
                <div className={`text-xs ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  98.5% Accuracy
                </div>
              </div>

              <div className={`absolute bottom-6 right-6 px-4 py-2 rounded-lg backdrop-blur-md ${
                theme === "dark" ? "bg-white/10" : "bg-white/80"
              } border ${theme === "dark" ? "border-white/20" : "border-gray-200"}`}>
                <div className={`text-sm ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  Real-time Analysis
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div className={`text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    Active
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 ${
              theme === "dark" ? "bg-cyan-500/20" : "bg-cyan-500/30"
            } rounded-full blur-2xl`} />
            <div className={`absolute -bottom-4 -left-4 w-32 h-32 ${
              theme === "dark" ? "bg-indigo-500/20" : "bg-indigo-500/30"
            } rounded-full blur-2xl`} />
          </div>
        </div>
      </div>
    </section>
  );
}