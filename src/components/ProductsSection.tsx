import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download, Video, BookOpen, ExternalLink, Brain, Shield, GraduationCap } from "lucide-react";
import { useState } from "react";
import { DemoLogin } from "./DemoLogin";
import { use3DTilt } from "../hooks/use3DTilt";
import { ProductCard } from "./ProductCard";

interface ProductsSectionProps {
  theme: "dark" | "light";
}

export function ProductsSection({ theme }: ProductsSectionProps) {
  const [isDemoLoginOpen, setIsDemoLoginOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const productCategories = [
    {
      category: "AI 제품",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      products: [
        {
          title: "Enterprise LLM",
          description: "기업 맞춤형 대규모 언어 모델 구축 및 운영 서비스",
          image: "https://images.unsplash.com/photo-1652127691413-6cb8c0304aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBlZHVjYXRpb258ZW58MXx8fHwxNzYxODgzNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/enterprise-llm.pdf",
          videoUrl: "https://www.youtube.com/watch?v=LLM_VIDEO",
          manualUrl: "/manual/enterprise-llm-manual.pdf"
        },
        {
          title: "SmartBot Suite",
          description: "자연어 처리 기반 지능형 대화 시스템",
          image: "https://images.unsplash.com/photo-1745674684463-62f62cb88d4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzYxNzk0NzIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/smartbot-suite.pdf",
          videoUrl: "https://www.youtube.com/watch?v=SMARTBOT_VIDEO",
          manualUrl: "/manual/smartbot-suite-manual.pdf"
        },
        {
          title: "RAG Engine",
          description: "검색 증강 생성 기술로 정확한 정보 제공",
          image: "https://images.unsplash.com/photo-1658806300183-342fe517d68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYxNzg3MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/rag-engine.pdf",
          videoUrl: "https://www.youtube.com/watch?v=RAG_VIDEO",
          manualUrl: "/manual/rag-engine-manual.pdf"
        }
      ]
    },
    {
      category: "보안 제품",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      products: [
        {
          title: "SecureGate",
          description: "망연계 솔루션",
          image: "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBmaXJld2FsbHxlbnwxfHx8fDE3NjE4ODU5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/securegate.pdf",
          videoUrl: "https://www.youtube.com/watch?v=SECUREGATE_VIDEO",
          manualUrl: "/manual/securegate-manual.pdf"
        },
        {
          title: "PassGuard",
          description: "패스워드관리 솔루션",
          image: "https://images.unsplash.com/photo-1635237393049-55046279ebb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzd29yZCUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MTg4NTkxOXww&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/passguard.pdf",
          videoUrl: "https://www.youtube.com/watch?v=PASSGUARD_VIDEO",
          manualUrl: "/manual/passguard-manual.pdf"
        },
        {
          title: "PassGuard AM",
          description: "시스템 접근제어 솔루션",
          image: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjE4MjkwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/passguard-am.pdf",
          videoUrl: "https://www.youtube.com/watch?v=PASSGUARDAM_VIDEO",
          manualUrl: "/manual/passguard-am-manual.pdf"
        },
        {
          title: "HSM",
          description: "하드웨어 보안 모듈",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NjE4ODU5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/hsm.pdf",
          videoUrl: "https://www.youtube.com/watch?v=HSM_VIDEO",
          manualUrl: "/manual/hsm-manual.pdf"
        },
        {
          title: "Cipher Trust",
          description: "데이터 암호화 솔루션 - Data Security Platform",
          image: "https://images.unsplash.com/photo-1658806300183-342fe517d68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYxNzg3MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/cipher-trust.pdf",
          videoUrl: "https://www.youtube.com/watch?v=CIPHERTRUST_VIDEO",
          manualUrl: "/manual/cipher-trust-manual.pdf"
        },
        {
          title: "Data Security Manager",
          description: "암호 키 관리 솔루션",
          image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NjE4ODU5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/data-security-manager.pdf",
          videoUrl: "https://www.youtube.com/watch?v=DSM_VIDEO",
          manualUrl: "/manual/data-security-manager-manual.pdf"
        }
      ]
    },
    {
      category: "교육 제품",
      icon: GraduationCap,
      gradient: "from-indigo-500 to-purple-500",
      products: [
        {
          title: "AINES",
          description: "AI비대면 평가 시스템",
          image: "https://images.unsplash.com/photo-1659353884792-c2c21739820d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBleGFtJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjE4MDg0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/aines.pdf",
          videoUrl: "https://www.youtube.com/watch?v=AINES_VIDEO",
          manualUrl: "/manual/aines-manual.pdf"
        },
        {
          title: "Smart QuizBank",
          description: "스마트 문제은행 시스템",
          image: "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2MTg4MzcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/smart-quizbank.pdf",
          videoUrl: "https://www.youtube.com/watch?v=QUIZBANK_VIDEO",
          manualUrl: "/manual/smart-quizbank-manual.pdf"
        },
        {
          title: "Smart Qualification",
          description: "스마트 자격검정 시스템",
          image: "https://images.unsplash.com/photo-1652127691413-6cb8c0304aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBlZHVjYXRpb258ZW58MXx8fHwxNzYxODgzNzIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/smart-qualification.pdf",
          videoUrl: "https://www.youtube.com/watch?v=QUALIFICATION_VIDEO",
          manualUrl: "/manual/smart-qualification-manual.pdf"
        },
        {
          title: "Smart CBT/IBT",
          description: "스마트 CBT/IBT 시스템",
          image: "https://images.unsplash.com/photo-1659353884792-c2c21739820d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBleGFtJTIwdGVzdGluZ3xlbnwxfHx8fDE3NjE4MDg0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/smart-cbt-ibt.pdf",
          videoUrl: "https://www.youtube.com/watch?v=CBTIBT_VIDEO",
          manualUrl: "/manual/smart-cbt-ibt-manual.pdf"
        },
        {
          title: "Smart LMS",
          description: "스마트 LMS 시스템",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzYxODg1OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/smart-lms.pdf",
          videoUrl: "https://www.youtube.com/watch?v=LMS_VIDEO",
          manualUrl: "/manual/smart-lms-manual.pdf"
        },
        {
          title: "Smart Monitoring",
          description: "스마트 모니터링 시스템",
          image: "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2MTg4MzcyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/smart-monitoring.pdf",
          videoUrl: "https://www.youtube.com/watch?v=MONITORING_VIDEO",
          manualUrl: "/manual/smart-monitoring-manual.pdf"
        },
        {
          title: "Smart EduClass",
          description: "스마트 에듀클래스",
          image: "https://images.unsplash.com/photo-1758270704663-9d002a4b42a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MTg4NTkyMHww&ixlib=rb-4.1.0&q=80&w=1080",
          brochureUrl: "/brochure/smart-educlass.pdf",
          videoUrl: "https://www.youtube.com/watch?v=EDUCLASS_VIDEO",
          manualUrl: "/manual/smart-educlass-manual.pdf"
        }
      ]
    }
  ];

  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'download.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVideo = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDemo = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsDemoLoginOpen(true);
  };

  return (
    <section id="products" className={`py-24 px-4 ${
      theme === "dark" ? "bg-gradient-to-br from-gray-950 via-black to-gray-950" : "bg-white"
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 ${
            theme === "dark" 
              ? "bg-indigo-500/10 border-indigo-500/20" 
              : "bg-indigo-100"
          } rounded-full mb-4 border`}>
            <span className={theme === "dark" ? "text-indigo-400" : "text-indigo-600"}>
              Products
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            주요 제품 라인업
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            AI, 보안, 교육 분야의 검증된 솔루션으로 비즈니스 혁신을 실현합니다
          </p>
        </div>

        <div className="space-y-20">
          {productCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-3xl ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                      {category.category}
                    </h3>
                    <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.gradient} mt-2`} />
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product, productIndex) => (
                    <ProductCard
                      key={productIndex}
                      product={product}
                      gradient={category.gradient}
                      theme={theme}
                      onDownload={handleDownload}
                      onVideo={handleVideo}
                      onDemo={handleDemo}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <DemoLogin 
        open={isDemoLoginOpen} 
        onOpenChange={setIsDemoLoginOpen}
        productName={selectedProduct}
      />
    </section>
  );
}