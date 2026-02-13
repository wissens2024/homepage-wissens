import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-6">
          <span className="text-blue-600">AI-Powered Solutions</span>
        </div>
        <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          지능형 AI 솔루션으로<br />비즈니스를 혁신하세요
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          교육, 평가, 보안부터 맞춤형 LLM 구축까지<br />
          ㈜비센스바움이 제공하는 통합 AI 플랫폼
        </p>
        <Button size="lg" onClick={scrollToProducts} className="gap-2">
          제품 살펴보기
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
