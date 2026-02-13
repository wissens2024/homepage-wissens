import { Card, CardContent } from "../ui/card";
import { FileText, Microscope, Presentation, Users } from "lucide-react";
import { Language, getTranslation } from "../../locales/translations";

interface ResearchSectionProps {
  theme: "dark" | "light";
  language?: Language;
}

export function ResearchSection({ theme, language = "ko" }: ResearchSectionProps) {
  const t = getTranslation(language);
  
  const research = [
    {
      icon: Microscope,
      title: language === "ko" ? "R&D 투자" : "R&D Investment",
      description: language === "ko" ? "매출의 20% 이상을 연구개발에 투자합니다" : "Investing over 20% of revenue in R&D",
      stats: language === "ko" ? "20% 투자" : "20% Investment"
    },
    {
      icon: FileText,
      title: language === "ko" ? "학술 활동" : "Academic Activities",
      description: language === "ko" ? "AI 분야 논문 발표 및 특허 출원" : "AI research papers and patent applications",
      stats: language === "ko" ? "2+ 논문" : "2+ Papers"
    },
    {
      icon: Presentation,
      title: language === "ko" ? "기술 세미나" : "Tech Seminars",
      description: language === "ko" ? "정기적인 기술 세미나 및 워크샵 개최" : "Regular tech seminars and workshops",
      stats: language === "ko" ? "연 4회+" : "4+ per year"
    },
    {
      icon: Users,
      title: language === "ko" ? "전문 인력" : "Expert Team",
      description: language === "ko" ? "AI 및 보안 분야 석/박사급 연구 인력" : "Master's & PhD-level researchers in AI & security",
      stats: language === "ko" ? "박사 2명, 석사 3명" : "2 PhDs, 3 Masters"
    }
  ];

  return (
    <section className={`py-16 ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}>
      <div className="mb-12">
        <h3 className={`text-3xl mb-4 ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}>
          {t.research.title}
        </h3>
        <p className={`text-lg ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}>
          {t.research.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {research.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card 
              key={index}
              className={`border-0 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800"
                  : "bg-white border border-gray-200 shadow-md"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-blue-500/10"
                      : "bg-blue-100"
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`text-lg ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        {item.title}
                      </h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        theme === "dark"
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "bg-blue-100 text-blue-600"
                      }`}>
                        {item.stats}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}