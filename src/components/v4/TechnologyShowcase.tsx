import { Card, CardContent } from "../ui/card";
import { Brain, Database, Shield, Cpu, Network, Zap, FileText, Search, Bot, CheckCircle } from "lucide-react";
import { Language, getTranslation } from "../../locales/translations";
import { use3DTilt } from "../../hooks/use3DTilt";
import { motion } from "motion/react";
import { useState } from "react";
import aiSecurityImg from "figma:asset/4c565c3152bb006d59abf71be8afa19b41fa4c1b.png";
import onPremiseAIImg from "figma:asset/d9861b39eaa67ee1374f6a4d1001541e5d47caf9.png";
import multiAgentSystemImg from "figma:asset/f493af29218690639895aea129fd67e984f12193.png";

interface TechnologyShowcaseProps {
  theme: "dark" | "light";
  language?: Language;
}

export function TechnologyShowcase({ theme, language = "ko" }: TechnologyShowcaseProps) {
  const t = getTranslation(language);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // 6개의 독립적인 3D Tilt 인스턴스 생성
  const tilt1 = use3DTilt();
  const tilt2 = use3DTilt();
  const tilt3 = use3DTilt();
  const tilt4 = use3DTilt();
  const tilt5 = use3DTilt();
  const tilt6 = use3DTilt();
  
  const technologyIcons = [Brain, Database, Shield, Cpu, Network, Zap];
  
  // 각 기술에 대한 이미지 URL
  const technologyImages = [
    "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwdHlwaW5nJTIwbGFwdG9wJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzA3MTg0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1516382799247-87df95d790b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHZlY3RvciUyMHNlYXJjaCUyMGluZm9ybWF0aW9uJTIwcmV0cmlldmFsfGVufDF8fHx8MTc3MDcxODI4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    aiSecurityImg,
    onPremiseAIImg,
    multiAgentSystemImg,
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsLXRpbWUlMjBkYXRhJTIwcHJvY2Vzc2luZyUyMHN0cmVhbWluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzA3MTc0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];
  
  const tilts = [tilt1, tilt2, tilt3, tilt4, tilt5, tilt6];
  
  const technologies = t.technology.items.map((item, index) => ({
    ...item,
    icon: technologyIcons[index],
    image: technologyImages[index],
    tilt: tilts[index]
  }));

  return (
    <section className={`py-24 ${
      theme === "dark" 
        ? "bg-gradient-to-b from-black via-gray-950 to-black" 
        : "bg-gradient-to-b from-white via-gray-50 to-white"
    }`}>
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16">
          <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
            theme === "dark" 
              ? "bg-blue-500/10 border border-blue-500/20" 
              : "bg-blue-100 border border-blue-200"
          }`}>
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
              {t.technology.title}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {t.technology.subtitle}
          </h2>
          <p className={`text-xl max-w-3xl ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            {t.technology.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isLLM = index === 0; // Large Language Models
            const isRAG = index === 1; // RAG System
            
            return (
              <div
                key={index}
                ref={tech.tilt.ref}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: tech.tilt.transform,
                  transition: 'transform 0.3s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Card className={`border-0 overflow-hidden ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-900"
                    : "bg-gradient-to-br from-white to-gray-50 hover:shadow-xl border border-gray-200"
                } transition-all duration-300 group`}>
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 ${
                      theme === "dark" 
                        ? "bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
                        : "bg-gradient-to-t from-white via-white/50 to-transparent"
                    }`} />
                    
                    {/* LLM Typing Animation Overlay */}
                    {isLLM && hoveredIndex === 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <div className="space-y-2">
                          {/* Typing indicators */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className={`px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm ${
                              theme === "dark" 
                                ? "bg-black/60 text-cyan-400 border border-cyan-500/30"
                                : "bg-white/80 text-blue-600 border border-blue-300"
                            }`}
                          >
                            <span className="inline-block">LLM Processing</span>
                            <motion.span
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="inline-block ml-1"
                            >
                              _
                            </motion.span>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className={`px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm ${
                              theme === "dark" 
                                ? "bg-black/60 text-green-400 border border-green-500/30"
                                : "bg-white/80 text-green-600 border border-green-300"
                            }`}
                          >
                            <span className="inline-block">AI Generating</span>
                            <motion.span
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                              className="inline-block ml-1"
                            >
                              ...
                            </motion.span>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className={`px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm ${
                              theme === "dark" 
                                ? "bg-black/60 text-purple-400 border border-purple-500/30"
                                : "bg-white/80 text-purple-600 border border-purple-300"
                            }`}
                          >
                            <span className="inline-block">Response Ready</span>
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity }}
                              className="inline-block ml-1"
                            >
                              ✓
                            </motion.span>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* RAG System Flow Diagram Overlay */}
                    {isRAG && hoveredIndex === 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
                          theme === "dark" ? "bg-black/80" : "bg-white/90"
                        }`}
                      >
                        <div className="flex items-center gap-2 px-4">
                          {/* Step 1: Document */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center"
                          >
                            <div className={`p-2 rounded-lg ${
                              theme === "dark" 
                                ? "bg-blue-500/20 border border-blue-400/30"
                                : "bg-blue-100 border border-blue-300"
                            }`}>
                              <FileText className={`h-4 w-4 ${
                                theme === "dark" ? "text-blue-400" : "text-blue-600"
                              }`} />
                            </div>
                            <span className={`text-[8px] mt-1 ${
                              theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}>Doc</span>
                          </motion.div>
                          
                          {/* Arrow 1 */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                            className="origin-left"
                          >
                            <svg width="20" height="12" viewBox="0 0 20 12" className={theme === "dark" ? "text-cyan-400" : "text-blue-500"}>
                              <path d="M0 6h18M18 6l-4-4M18 6l-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                            </svg>
                          </motion.div>
                          
                          {/* Step 2: Search */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center"
                          >
                            <div className={`p-2 rounded-lg ${
                              theme === "dark" 
                                ? "bg-green-500/20 border border-green-400/30"
                                : "bg-green-100 border border-green-300"
                            }`}>
                              <Search className={`h-4 w-4 ${
                                theme === "dark" ? "text-green-400" : "text-green-600"
                              }`} />
                            </div>
                            <span className={`text-[8px] mt-1 ${
                              theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}>Search</span>
                          </motion.div>
                          
                          {/* Arrow 2 */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.7, duration: 0.3 }}
                            className="origin-left"
                          >
                            <svg width="20" height="12" viewBox="0 0 20 12" className={theme === "dark" ? "text-cyan-400" : "text-blue-500"}>
                              <path d="M0 6h18M18 6l-4-4M18 6l-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                            </svg>
                          </motion.div>
                          
                          {/* Step 3: AI */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col items-center"
                          >
                            <div className={`p-2 rounded-lg ${
                              theme === "dark" 
                                ? "bg-purple-500/20 border border-purple-400/30"
                                : "bg-purple-100 border border-purple-300"
                            }`}>
                              <Bot className={`h-4 w-4 ${
                                theme === "dark" ? "text-purple-400" : "text-purple-600"
                              }`} />
                            </div>
                            <span className={`text-[8px] mt-1 ${
                              theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}>AI</span>
                          </motion.div>
                          
                          {/* Arrow 3 */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 1.1, duration: 0.3 }}
                            className="origin-left"
                          >
                            <svg width="20" height="12" viewBox="0 0 20 12" className={theme === "dark" ? "text-cyan-400" : "text-blue-500"}>
                              <path d="M0 6h18M18 6l-4-4M18 6l-4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                            </svg>
                          </motion.div>
                          
                          {/* Step 4: Result */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3 }}
                            className="flex flex-col items-center"
                          >
                            <div className={`p-2 rounded-lg ${
                              theme === "dark" 
                                ? "bg-cyan-500/20 border border-cyan-400/30"
                                : "bg-cyan-100 border border-cyan-300"
                            }`}>
                              <CheckCircle className={`h-4 w-4 ${
                                theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                              }`} />
                            </div>
                            <span className={`text-[8px] mt-1 ${
                              theme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}>Result</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-blue-500/20 to-indigo-500/20 group-hover:from-blue-500/30 group-hover:to-indigo-500/30"
                        : "bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200"
                    } transition-all`}>
                      <Icon className={`h-7 w-7 ${
                        theme === "dark" ? "text-cyan-400" : "text-blue-600"
                      }`} />
                    </div>
                    
                    <h3 className={`text-xl mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                      {tech.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {tech.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className={`text-xs px-3 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-gray-800 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}