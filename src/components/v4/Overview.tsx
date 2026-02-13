import { Card } from "../ui/card";
import { CardContent } from "../ui/card";
import { Language, getTranslation } from "../../locales/translations";
import { BookOpen, Shield, Cpu } from "lucide-react";
import { use3DTilt } from "../../hooks/use3DTilt";
import securityImage from "figma:asset/b1f5b55527b8850b04a8e212e58bb9cf4b4cab3d.png";
import aiImage from "figma:asset/2fdf2f086b7867fa1180c92c3ab0c512137c3c62.png";

interface OverviewProps {
  theme: "dark" | "light";
  language: Language;
}

export function Overview({ theme, language }: OverviewProps) {
  const t = getTranslation(language);
  const educationTilt = use3DTilt();
  const securityTilt = use3DTilt();
  const aiTilt = use3DTilt();
  
  return (
    <section className={`py-24 px-4 ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
            theme === "dark" 
              ? "bg-blue-500/10 border border-blue-500/20" 
              : "bg-blue-100 border border-blue-200"
          }`}>
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
              {t.overview.title}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {t.overview.mission}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            {t.overview.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education Platform Card */}
          <div
            ref={educationTilt.ref}
            style={{
              transform: educationTilt.transform,
              transition: 'transform 0.3s ease-out',
              transformStyle: 'preserve-3d'
            }}
          >
            <Card className={`border-0 overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-900"
                : "bg-gradient-to-br from-white to-gray-50 hover:shadow-xl border border-gray-200"
            } transition-all duration-300 group`}>
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW4lMjBtb25pdG9yJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcwNzE2NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Education Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${
                  theme === "dark" 
                    ? "bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
                    : "bg-gradient-to-t from-white via-white/50 to-transparent"
                }`} />
              </div>
              
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-blue-500/10 group-hover:bg-blue-500/20"
                    : "bg-blue-100 group-hover:bg-blue-200"
                } transition-colors`}>
                  <BookOpen className={`h-6 w-6 ${
                    theme === "dark" ? "text-cyan-400" : "text-blue-600"
                  }`} />
                </div>
                <h3 className={`text-xl mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {t.technology.education.title}
                </h3>
                <p className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {t.technology.education.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Security Solution Card */}
          <div
            ref={securityTilt.ref}
            style={{
              transform: securityTilt.transform,
              transition: 'transform 0.3s ease-out',
              transformStyle: 'preserve-3d'
            }}
          >
            <Card className={`border-0 overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-900"
                : "bg-gradient-to-br from-white to-gray-50 hover:shadow-xl border border-gray-200"
            } transition-all duration-300 group`}>
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={securityImage}
                  alt="Security Solution"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${
                  theme === "dark" 
                    ? "bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
                    : "bg-gradient-to-t from-white via-white/50 to-transparent"
                }`} />
              </div>
              
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-blue-500/10 group-hover:bg-blue-500/20"
                    : "bg-blue-100 group-hover:bg-blue-200"
                } transition-colors`}>
                  <Shield className={`h-6 w-6 ${
                    theme === "dark" ? "text-cyan-400" : "text-blue-600"
                  }`} />
                </div>
                <h3 className={`text-xl mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {t.technology.security.title}
                </h3>
                <p className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {t.technology.security.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* AI/ML Card */}
          <div
            ref={aiTilt.ref}
            style={{
              transform: aiTilt.transform,
              transition: 'transform 0.3s ease-out',
              transformStyle: 'preserve-3d'
            }}
          >
            <Card className={`border-0 overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-900"
                : "bg-gradient-to-br from-white to-gray-50 hover:shadow-xl border border-gray-200"
            } transition-all duration-300 group`}>
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={aiImage}
                  alt="AI/ML Technology"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 ${
                  theme === "dark" 
                    ? "bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
                    : "bg-gradient-to-t from-white via-white/50 to-transparent"
                }`} />
              </div>
              
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-blue-500/10 group-hover:bg-blue-500/20"
                    : "bg-blue-100 group-hover:bg-blue-200"
                } transition-colors`}>
                  <Cpu className={`h-6 w-6 ${
                    theme === "dark" ? "text-cyan-400" : "text-blue-600"
                  }`} />
                </div>
                <h3 className={`text-xl mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {t.technology.ai.title}
                </h3>
                <p className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  {t.technology.ai.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}