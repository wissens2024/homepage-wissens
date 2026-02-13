import { Card, CardContent } from "./ui/card";
import { Target, Lightbulb, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "혁신",
      description: "최첨단 AI 기술로 고객의 비즈니스 혁신을 이끕니다"
    },
    {
      icon: Lightbulb,
      title: "전문성",
      description: "축적된 경험과 전문 지식으로 최적의 솔루션을 제공합니다"
    },
    {
      icon: Users,
      title: "고객 중심",
      description: "고객의 성공이 곧 우리의 성공입니다"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">회사소개</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ㈜비센스바움은 인공지능 기술을 기반으로 교육, 보안, 그리고 맞춤형 언어모델 구축까지<br />
            다양한 영역에서 혁신적인 솔루션을 제공하는 AI 전문 기업입니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
