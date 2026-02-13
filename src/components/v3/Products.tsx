import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Download, Video, BookOpen, GraduationCap, Shield, Brain, MessageSquare, Database, ExternalLink } from "lucide-react";
import { useState } from "react";
import { DemoLogin } from "../DemoLogin";

export function Products() {
  const [isDemoLoginOpen, setIsDemoLoginOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const products = [
    {
      icon: GraduationCap,
      title: "AI 기반 교육/평가 솔루션",
      description: "인공지능을 활용한 맞춤형 학습 및 자동 평가 시스템으로 효과적인 교육 환경을 제공합니다",
      color: "from-blue-500 to-blue-600",
      brochureUrl: "/brochure/education-solution.pdf",
      videoUrl: "https://www.youtube.com/watch?v=EDUCATION_VIDEO_ID",
      manualUrl: "/manual/education-manual.pdf",
      productId: "education"
    },
    {
      icon: Shield,
      title: "보안 솔루션",
      description: "AI 기반 지능형 보안 시스템으로 기업의 중요한 데이터와 인프라를 안전하게 보호합니다",
      color: "from-purple-500 to-purple-600",
      brochureUrl: "/brochure/security-solution.pdf",
      videoUrl: "https://www.youtube.com/watch?v=SECURITY_VIDEO_ID",
      manualUrl: "/manual/security-manual.pdf",
      productId: "security"
    },
    {
      icon: Brain,
      title: "구축형 LLM",
      description: "기업 맞춤형 대규모 언어 모델 구축 및 운영으로 비즈니스에 특화된 AI를 제공합니다",
      color: "from-indigo-500 to-indigo-600",
      brochureUrl: "/brochure/llm-solution.pdf",
      videoUrl: "https://www.youtube.com/watch?v=LLM_VIDEO_ID",
      manualUrl: "/manual/llm-manual.pdf",
      productId: "llm"
    },
    {
      icon: MessageSquare,
      title: "Chatbot",
      description: "자연어 처리 기반 지능형 대화 시스템으로 24/7 고객 응대를 자동화합니다",
      color: "from-cyan-500 to-cyan-600",
      brochureUrl: "/brochure/chatbot-solution.pdf",
      videoUrl: "https://www.youtube.com/watch?v=CHATBOT_VIDEO_ID",
      manualUrl: "/manual/chatbot-manual.pdf",
      productId: "chatbot"
    },
    {
      icon: Database,
      title: "RAG System",
      description: "검색 증강 생성 기술로 정확하고 신뢰할 수 있는 정보를 실시간으로 제공합니다",
      color: "from-teal-500 to-teal-600",
      brochureUrl: "/brochure/rag-solution.pdf",
      videoUrl: "https://www.youtube.com/watch?v=RAG_VIDEO_ID",
      manualUrl: "/manual/rag-manual.pdf",
      productId: "rag"
    }
  ];

  const handleDownloadBrochure = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVideoGuide = (url: string) => {
    window.open(url, '_blank');
  };

  const handleDownloadManual = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'manual.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDemoAccess = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsDemoLoginOpen(true);
  };

  return (
    <section id="products" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">제품 및 솔루션</h2>
          <p className="text-xl text-gray-600">
            혁신적인 AI 기술로 비즈니스 가치를 창출합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription className="mt-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-auto py-3 flex flex-col gap-1"
                      onClick={() => handleDownloadBrochure(product.brochureUrl)}
                    >
                      <Download className="h-4 w-4" />
                      <span className="text-xs">제품소개서</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-auto py-3 flex flex-col gap-1"
                      onClick={() => handleDemoAccess(product.title)}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-xs">데모 페이지</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-auto py-3 flex flex-col gap-1"
                      onClick={() => handleVideoGuide(product.videoUrl)}
                    >
                      <Video className="h-4 w-4" />
                      <span className="text-xs">동영상 소개</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-auto py-3 flex flex-col gap-1"
                      onClick={() => handleDownloadManual(product.manualUrl)}
                    >
                      <BookOpen className="h-4 w-4" />
                      <span className="text-xs">매뉴얼</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
