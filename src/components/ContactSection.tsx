import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

interface ContactSectionProps {
  theme: "dark" | "light";
}

export function ContactSection({ theme }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "전화",
      content: "070-4350-1491~3",
      link: "tel:070-4350-1491"
    },
    {
      icon: Mail,
      title: "이메일",
      content: "cs@wissensbaum.com",
      link: "mailto:cs@wissensbaum.com"
    },
    {
      icon: MapPin,
      title: "주소",
      content: "서울특별시 성동구 뚝섬로1길 31, 서울숲M타워 1406호",
      link: null
    },
    {
      icon: Clock,
      title: "업무시간",
      content: "평일 09:00 ~ 18:00",
      link: null
    }
  ];

  return (
    <section id="contact" className={`py-24 px-4 ${
      theme === "dark" 
        ? "bg-gradient-to-br from-gray-950 via-black to-gray-950" 
        : "bg-gradient-to-br from-blue-50 to-indigo-50"
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 ${
            theme === "dark" 
              ? "bg-blue-500/10 border-blue-500/20" 
              : "bg-blue-100"
          } rounded-full mb-4 border`}>
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
              Contact Us
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            문의하기
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            AI 솔루션 도입이 궁금하신가요? 전문가가 친절하게 상담해드립니다
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card className={`border-0 ${
              theme === "dark" 
                ? "bg-gray-900/50 backdrop-blur-sm shadow-2xl" 
                : "shadow-xl"
            }`}>
              <CardContent className="p-8">
                <h3 className={`text-2xl mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  상담 신청
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={theme === "dark" ? "text-gray-300" : ""}>
                        이름 *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="홍길동"
                        className={`h-11 ${
                          theme === "dark" 
                            ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" 
                            : ""
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={theme === "dark" ? "text-gray-300" : ""}>
                        이메일 *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@company.com"
                        className={`h-11 ${
                          theme === "dark" 
                            ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" 
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className={theme === "dark" ? "text-gray-300" : ""}>
                        회사명
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="회사명"
                        className={`h-11 ${
                          theme === "dark" 
                            ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" 
                            : ""
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={theme === "dark" ? "text-gray-300" : ""}>
                        연락처
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="010-0000-0000"
                        className={`h-11 ${
                          theme === "dark" 
                            ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" 
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className={theme === "dark" ? "text-gray-300" : ""}>
                      문의 내용 *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="문의하실 내용을 자세히 입력해주세요"
                      rows={20}
                      className={`resize-none ${
                        theme === "dark" 
                          ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" 
                          : ""
                      }`}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg"
                  >
                    문의 보내기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className={`border-0 ${
              theme === "dark" 
                ? "bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl" 
                : "bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl"
            } text-white`}>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-2">㈜비센스바움</h3>
                <p className="text-blue-100 mb-8">WISSENSBAUM</p>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm text-blue-100 mb-1">{info.title}</div>
                          {info.link ? (
                            <a href={info.link} className="hover:underline">
                              {info.content}
                            </a>
                          ) : (
                            <div>{info.content}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 ${
              theme === "dark" 
                ? "bg-gray-900/50 backdrop-blur-sm shadow-2xl" 
                : "shadow-xl"
            }`}>
              <CardContent className="p-8">
                <h4 className={`text-lg mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  오시는 길
                </h4>
                <div className={`space-y-3 text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}>
                  <div>
                    <span className={theme === "dark" ? "text-gray-300" : "text-gray-900"}>
                      지하철
                    </span>
                    <p>수인분당선 서울숲역 1번 출구 300M</p>
                    <p>2호선 뚝섬역 6번 출구 300M</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
