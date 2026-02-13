import { Card, CardContent } from "./ui/card";
import { Award, Shield, CheckCircle, BookOpen, Building2, TrendingUp } from "lucide-react";

interface PartnersSectionProps {
  theme: "dark" | "light";
}

export function PartnersSection({ theme }: PartnersSectionProps) {
  const certifications = [
    {
      icon: Shield,
      title: "CC인증",
      description: "Common Criteria 정보보호제품 평가인증",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "GS인증",
      description: "Good Software 품질인증",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "특허",
      description: "기술 특허 등록",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "저작권",
      description: "소프트웨어 저작권 등록",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Building2,
      title: "기업부설연구소",
      description: "기업부설연구소 인정",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "벤처기업",
      description: "벤처기업 확인",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="certifications" className={`py-24 px-4 ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}>
      <div className="container mx-auto max-w-7xl">
        {/* Certifications Section */}
        <div>
          <div className="text-center mb-16">
            <div className={`inline-block px-4 py-2 ${
              theme === "dark" 
                ? "bg-blue-500/10 border-blue-500/20" 
                : "bg-blue-100"
            } rounded-full mb-4 border`}>
              <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
                Certifications & Patents
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              인증 및 특허
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              검증된 기술력과 품질을 인정받은 공식 인증 및 특허 보유 현황입니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card 
                  key={index} 
                  className={`group border-0 overflow-hidden hover:-translate-y-2 ${
                    theme === "dark" 
                      ? "bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70" 
                      : "hover:shadow-2xl"
                  } transition-all duration-300`}
                >
                  <div className={`h-2 bg-gradient-to-r ${cert.gradient}`} />
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className={`text-xl mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                      {cert.title}
                    </h4>
                    <p className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}