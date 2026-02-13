import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ModernHeroProps {
  theme: "dark" | "light";
}

export function ModernHero({ theme }: ModernHeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark Theme Background */}
      {theme === "dark" && (
        <>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzYxODE5MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI Neural Network"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
          </div>

          {/* Animated background elements - Dark */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
            <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-700" />
            <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1000" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </>
      )}

      {/* Light Theme Background */}
      {theme === "light" && (
        <>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjE3OTM0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Data visualization"
              className="w-full h-full object-cover opacity-5"
            />
          </div>

          {/* Animated background elements - Light */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-pulse delay-700" />
            <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-normal filter blur-3xl opacity-20 animate-pulse delay-1000" />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 ${
            theme === "dark" 
              ? "bg-blue-500/10 backdrop-blur-md border-blue-500/20" 
              : "bg-blue-100 border-blue-200"
          } rounded-full mb-8 border`}>
            <Sparkles className={`h-4 w-4 ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`} />
            <span className={`text-sm ${theme === "dark" ? "text-cyan-300" : "text-blue-900"}`}>
              AI-Powered Enterprise Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            지능형 AI 기술로
            <br />
            <span className={`bg-gradient-to-r ${
              theme === "dark"
                ? "from-cyan-400 via-blue-400 to-indigo-400"
                : "from-blue-600 via-cyan-600 to-indigo-600"
            } bg-clip-text text-transparent`}>
              비즈니스를 혁신합니다
            </span>
          </h1>

          <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
            교육, 보안, LLM 구축부터 챗봇, RAG 시스템까지
            <br />
            기업 맞춤형 AI 솔루션을 제공합니다
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {theme === "dark" ? (
              <>
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("solutions")}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white gap-2 text-lg px-8 py-6 h-auto shadow-lg shadow-blue-500/50"
                >
                  솔루션 살펴보기
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 backdrop-blur-sm text-lg px-8 py-6 h-auto"
                >
                  상담 신청
                </Button>
              </>
            ) : (
              <>
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("solutions")}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white gap-2 text-lg px-8 py-6 h-auto"
                >
                  솔루션 살펴보기
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto"
                >
                  상담 신청
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className={`w-6 h-10 rounded-full border-2 ${
          theme === "dark" ? "border-cyan-400/30" : "border-gray-400/50"
        } flex items-start justify-center p-2`}>
          <div className={`w-1 h-3 rounded-full ${
            theme === "dark" ? "bg-cyan-400/50" : "bg-gray-500/50"
          }`} />
        </div>
      </div>
    </section>
  );
}