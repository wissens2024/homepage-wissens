import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Shield, Brain, MessageSquare, Database, Zap } from "lucide-react";
import { SolutionCard } from "./SolutionCard";

interface SolutionsSectionProps {
  theme: "dark" | "light";
}

export function SolutionsSection({ theme }: SolutionsSectionProps) {
  const solutions = [
    {
      icon: GraduationCap,
      title: "AI 교육/평가",
      description: "맞춤형 학습과 자동 평가로 교육 효율을 극대화합니다",
      features: ["개인화 학습 경로", "자동 채점 시스템", "학습 분석 대시보드"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "보안 솔루션",
      description: "AI 기반 지능형 보안으로 기업 자산을 보호합니다",
      features: ["실시간 위협 탐지", "이상 행위 분석", "자동 대응 시스템"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "구축형 LLM",
      description: "기업 데이터로 학습된 맞춤형 언어 모델을 제공합니다",
      features: ["온프레미스 구축", "도메인 특화 학습", "API 통합"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: MessageSquare,
      title: "지능형 챗봇",
      description: "자연어 이해 기반의 고도화된 대화형 AI입니다",
      features: ["다국어 지원", "문맥 이해", "실시간 학습"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Database,
      title: "RAG 시스템",
      description: "검색 증강 생성으로 정확한 정보를 제공합니다",
      features: ["문서 검색", "정보 통합", "응답 생성"],
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: Zap,
      title: "통합 플랫폼",
      description: "모든 AI 솔루션을 하나의 플랫폼에서 관리합니다",
      features: ["통합 대시보드", "API 관리", "모니터링"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="solutions" className={`py-24 px-4 ${
      theme === "dark" ? "bg-black" : "bg-gray-50"
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 ${
            theme === "dark" 
              ? "bg-blue-500/10 border-blue-500/20" 
              : "bg-blue-100"
          } rounded-full mb-4 border`}>
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
              Solutions
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            기업 맞춤형 AI 솔루션
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            다양한 산업 분야에 최적화된 AI 기술로 비즈니스 가치를 창출합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index} 
              solution={solution}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}