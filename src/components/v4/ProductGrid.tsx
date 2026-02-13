import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { Language, getTranslation } from "../../locales/translations";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
  Bot, 
  MessageSquare, 
  Database, 
  Network, 
  Lock, 
  Shield, 
  HardDrive, 
  Key,
  FileCheck,
  ClipboardCheck,
  Monitor,
  GraduationCap,
  Users,
  Download,
  ExternalLink
} from "lucide-react";

interface ProductGridProps {
  theme: "dark" | "light";
  language?: Language;
}

export function ProductGrid({ theme, language = "ko" }: ProductGridProps) {
  const t = getTranslation(language);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "ai" | "security" | "education">("all");

  const handleDownload = () => {
    toast.info(language === "ko" ? "준비중입니다" : "Coming Soon", {
      description: language === "ko" ? "자료가 곧 제공될 예정입니다." : "Materials will be available soon.",
    });
  };

  const handleDemo = () => {
    toast.info(language === "ko" ? "준비중입니다" : "Coming Soon", {
      description: language === "ko" ? "데모가 곧 제공될 예정입니다." : "Demo will be available soon.",
    });
  };

  const productIcons = [
    Bot, MessageSquare, Database, // AI 3개
    Network, Lock, Shield, HardDrive, Database, Key, // 보안 6개
    Bot, FileCheck, ClipboardCheck, Monitor, GraduationCap, Monitor, Users // 교육 7개
  ];

  const products = t.products.items.map((item, index) => {
    let category: "ai" | "security" | "education";
    if (index < 3) category = "ai";
    else if (index < 9) category = "security";
    else category = "education";

    return {
      category,
      icon: productIcons[index],
      name: item.name,
      description: item.description,
      features: item.features,
      badge: item.badge
    };
  });

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const categories = [
    { id: "all", label: language === "ko" ? "전체" : "All", count: products.length },
    { id: "ai", label: t.products.categories.ai, count: products.filter(p => p.category === "ai").length },
    { id: "security", label: t.products.categories.security, count: products.filter(p => p.category === "security").length },
    { id: "education", label: t.products.categories.education, count: products.filter(p => p.category === "education").length }
  ];

  return (
    <section className={`py-24 px-4 ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
            theme === "dark" 
              ? "bg-blue-500/10 border border-blue-500/20" 
              : "bg-blue-100 border border-blue-200"
          }`}>
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
              {t.products.title}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {t.products.title}
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === cat.id
                  ? theme === "dark"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  : theme === "dark"
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label} <span className="ml-1 opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card 
                key={index}
                className={`border-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-cyan-500/50"
                    : "bg-white border border-gray-200 hover:border-blue-500/50 hover:shadow-xl"
                } transition-all duration-300 group`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-blue-500/10"
                        : "bg-blue-100"
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        theme === "dark" ? "text-cyan-400" : "text-blue-600"
                      }`} />
                    </div>
                    <Badge 
                      variant="secondary"
                      className={
                        theme === "dark"
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }
                    >
                      {product.badge}
                    </Badge>
                  </div>

                  <h3 className={`text-xl mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {product.name}
                  </h3>

                  <p className={`text-sm mb-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {product.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          theme === "dark" ? "bg-cyan-400" : "bg-blue-600"
                        }`} />
                        <span className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownload}
                      className={`${
                        theme === "dark"
                          ? "border-gray-700 hover:bg-gray-800"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      {language === "ko" ? "자료" : "Docs"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDemo}
                      className={`${
                        theme === "dark"
                          ? "border-gray-700 hover:bg-gray-800"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {language === "ko" ? "데모" : "Demo"}
                    </Button>
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