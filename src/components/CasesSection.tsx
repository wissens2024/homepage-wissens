import { Card, CardContent } from "./ui/card";
import { Building2, GraduationCap, Hospital, Factory } from "lucide-react";

interface CasesSectionProps {
  theme: "dark" | "light";
}

export function CasesSection({ theme }: CasesSectionProps) {
  const cases = [
    {
      icon: Building2,
      company: "A 금융그룹",
      industry: "금융",
      solution: "Enterprise LLM + 보안 솔루션",
      result: "고객 응대 시간 60% 단축, 보안 위협 탐지율 95% 향상",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: GraduationCap,
      company: "B 교육재단",
      industry: "교육",
      solution: "AI 교육/평가 플랫폼",
      result: "학습 효율 45% 증가, 평가 시간 70% 절감",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Hospital,
      company: "C 의료센터",
      industry: "의료",
      solution: "챗봇 + RAG 시스템",
      result: "환자 문의 처리 80% 자동화, 만족도 90% 달성",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Factory,
      company: "D 제조그룹",
      industry: "제조",
      solution: "통합 AI 플랫폼",
      result: "생산성 35% 향상, 불량률 50% 감소",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="cases" className={`py-24 px-4 ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 ${
            theme === "dark" 
              ? "bg-green-500/10 border-green-500/20" 
              : "bg-green-100"
          } rounded-full mb-4 border`}>
            <span className={theme === "dark" ? "text-green-400" : "text-green-600"}>
              Success Cases
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            고객 성공 사례
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            다양한 산업 분야에서 검증된 AI 솔루션의 성과를 확인하세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className={`group border-0 overflow-hidden hover:-translate-y-2 ${
                  theme === "dark" 
                    ? "bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/70" 
                    : "hover:shadow-2xl"
                } transition-all duration-300`}
              >
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        {item.company}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.industry}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm mb-1 text-gray-500">
                        도입 솔루션
                      </div>
                      <div className={theme === "dark" ? "text-gray-300" : "text-gray-900"}>
                        {item.solution}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm mb-1 text-gray-500">
                        주요 성과
                      </div>
                      <div className={theme === "dark" ? "text-gray-300" : "text-gray-900"}>
                        {item.result}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
