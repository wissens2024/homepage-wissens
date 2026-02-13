import { Card, CardContent } from "../ui/card";
import { Shield, CheckCircle, TrendingUp } from "lucide-react";
import { Language, getTranslation } from "../../locales/translations";

interface TrustIndicatorsProps {
  theme: "dark" | "light";
  language?: Language;
}

export function TrustIndicators({ theme, language = "ko" }: TrustIndicatorsProps) {
  const t = getTranslation(language);
  
  const certifications = [
    {
      icon: Shield,
      title: language === "ko" ? "특허 등록" : "Patents",
      description: language === "ko" ? "AI 관련 기술 특허 3+" : "AI Technology Patents 3+",
      year: "2024"
    },
    {
      icon: CheckCircle,
      title: language === "ko" ? "GS 인증" : "GS Certification",
      description: language === "ko" ? "소프트웨어 품질 인증" : "Software Quality Certification",
      year: "2023"
    },
    {
      icon: TrendingUp,
      title: language === "ko" ? "기술혁신 기업" : "Tech Innovation",
      description: language === "ko" ? "중소벤처기업부 인증" : "MSS Certified",
      year: "2024"
    }
  ];

  return (
    <section className={`py-24 px-4 ${
      theme === "dark" 
        ? "bg-gradient-to-b from-gray-950 via-black to-gray-950" 
        : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
            theme === "dark" 
              ? "bg-blue-500/10 border border-blue-500/20" 
              : "bg-blue-100 border border-blue-200"
          }`}>
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
              {t.trust.title}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {language === "ko" ? "검증된 기술력과 신뢰성" : "Verified Technology & Reliability"}
          </h2>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card 
                key={index}
                className={`border-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800"
                    : "bg-white border border-gray-200 shadow-md"
                } group hover:scale-105 transition-transform duration-300`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full mb-4 flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
                      : "bg-gradient-to-br from-blue-100 to-indigo-100"
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    }`} />
                  </div>
                  <h3 className={`text-xl mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {cert.title}
                  </h3>
                  <p className={`text-sm mb-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {cert.description}
                  </p>
                  <span className={`text-xs ${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}>
                    {cert.year}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}