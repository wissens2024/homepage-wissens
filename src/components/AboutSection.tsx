import { Card, CardContent } from "./ui/card";
import { Rocket, Shield, Users } from "lucide-react";

interface AboutSectionProps {
  theme: "dark" | "light";
}

export function AboutSection({ theme }: AboutSectionProps) {
  const values = [
    {
      icon: Rocket,
      title: "혁신",
      description: "최신 AI 기술을 활용한 혁신적인 솔루션으로 고객의 비즈니스를 한 단계 발전시킵니다"
    },
    {
      icon: Shield,
      title: "신뢰",
      description: "검증된 기술력과 철저한 보안으로 고객의 신뢰를 최우선으로 생각합니다"
    },
    {
      icon: Users,
      title: "협력",
      description: "고객과의 긴밀한 협력을 통해 최적화된 맞춤형 솔루션을 제공합니다"
    }
  ];

  return (
    <section id="about" className={`py-24 px-4 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-950 via-black to-gray-950" 
        : "bg-gradient-to-br from-gray-50 to-blue-50"
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Company Info */}
          <div>
            <div className={`inline-block px-4 py-2 ${
              theme === "dark" 
                ? "bg-blue-500/10 border-blue-500/20" 
                : "bg-blue-100"
            } rounded-full mb-6 border`}>
              <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
                About Us
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              AI 기술로<br />
              미래를 만듭니다
            </h2>
            <p className={`text-lg mb-6 leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              ㈜비센스바움(Wissensbaum)은 독일어로 '지식의 나무'를 의미합니다. 
              우리는 AI 기술이라는 깊은 뿌리에서 시작해 교육, 보안, 언어모델 등 
              다양한 가지로 뻗어나가며 고객에게 풍성한 열매를 제공합니다.
            </p>
            <p className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              교육 평가, 보안, 구축형 LLM, 챗봇, RAG 시스템 등 다양한 AI 솔루션을 
              통해 기업의 디지털 전환을 선도하고 있습니다.
            </p>
          </div>

          {/* Right: Core Values */}
          <div className="grid gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className={`border-0 ${
                  theme === "dark" 
                    ? "bg-gray-900/50 backdrop-blur-sm border-gray-800" 
                    : "shadow-lg"
                } hover:shadow-xl transition-all hover:-translate-y-1 duration-300`}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        {value.title}
                      </h4>
                      <p className={`leading-relaxed ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {value.description}
                      </p>
                    </div>
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