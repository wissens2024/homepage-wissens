import { useState, FormEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Mail, Phone, MapPin, Clock, Send, Loader2, Navigation } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner@2.0.3";
import { Language, getTranslation } from "../../locales/translations";

type Page = "home" | "about" | "technology" | "products" | "contact";

interface ContactCTAProps {
  theme: "dark" | "light";
  onNavigate: (page: Page) => void;
  fullPage?: boolean;
  language?: Language;
}

export function ContactCTA({ theme, onNavigate, fullPage = false, language = "ko" }: ContactCTAProps) {
  const t = getTranslation(language);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS 설정
  const EMAILJS_SERVICE_ID = "service_kckdndf";
  const EMAILJS_TEMPLATE_ID = "template_s7wldqk";
  const EMAILJS_PUBLIC_KEY = "VmuLBHm7_BYq9AwkM";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS로 이메일 전송
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "미입력",
        phone: formData.phone || "미입력",
        message: formData.message,
        reply_to: formData.email
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("문의가 성공적으로 전송되었습니다!", {
          description: "빠른 시일 내에 연락드리겠습니다.",
        });
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      
      let errorMessage = "잠시 후 다시 시도해주세요.";
      
      if (error?.status === 412) {
        errorMessage = "이메일 서비스 설정을 확인해주세요. 직접 cs@wissensbaum.com으로 연락주시기 바랍니다.";
      } else if (error?.text) {
        errorMessage = `오류: ${error.text}`;
      }
      
      toast.error("문의 전송에 실패했습니다.", {
        description: errorMessage,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === "ko" ? "전화" : "Phone",
      content: "070-4350-1491~3"
    },
    {
      icon: Mail,
      title: language === "ko" ? "이메일" : "Email",
      content: "cs@wissensbaum.com"
    },
    {
      icon: MapPin,
      title: language === "ko" ? "주소" : "Address",
      content: language === "ko" ? "서울특별시 성동구 뚝섬로1길 31, 서울숲M타워 1406호" : "Seoul Forest M Tower #1406, Seoul"
    },
    {
      icon: Clock,
      title: language === "ko" ? "업무시간" : "Business Hours",
      content: language === "ko" ? "평일 09:00 ~ 18:00" : "Mon-Fri 09:00 ~ 18:00"
    }
  ];

  if (!fullPage) {
    return (
      <section className={`py-24 px-4 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-gray-950 via-black to-blue-950" 
          : "bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      }`}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className={`inline-block px-4 py-2 rounded-full mb-4 ${
            theme === "dark" 
              ? "bg-blue-500/10 border border-blue-500/20" 
              : "bg-blue-100 border border-blue-200"
          }`}>
            <span className={theme === "dark" ? "text-cyan-400" : "text-blue-600"}>
              {t.contact.title}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-6 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {t.contact.subtitle}
          </h2>
          <p className={`text-xl mb-8 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            {t.contact.description}
          </p>
          <Button 
            onClick={() => onNavigate("contact")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12 px-8 text-lg"
          >
            <Send className="mr-2 h-5 w-5" />
            {t.contact.title}
          </Button>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-lg mb-3 flex items-center justify-center ${
                    theme === "dark"
                      ? "bg-blue-500/10"
                      : "bg-blue-100"
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      theme === "dark" ? "text-cyan-400" : "text-blue-600"
                    }`} />
                  </div>
                  <div className={`text-sm mb-1 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}>
                    {info.title}
                  </div>
                  <div className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {info.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 px-4 ${
      theme === "dark" ? "bg-black" : "bg-white"
    }`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className={`border-0 ${
            theme === "dark" 
              ? "bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800" 
              : "bg-white shadow-xl border border-gray-200"
          }`}>
            <CardContent className="p-8">
              <h3 className={`text-2xl mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {language === "ko" ? "상담 신청" : "Request Consultation"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={theme === "dark" ? "text-gray-300" : ""}>
                      {t.contact.form.name} *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className={`h-11 ${
                        theme === "dark" 
                          ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" 
                          : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className={theme === "dark" ? "text-gray-300" : ""}>
                      {t.contact.form.email} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
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
                      {t.contact.form.company}
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.contact.form.companyPlaceholder}
                      className={`h-11 ${
                        theme === "dark" 
                          ? "bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" 
                          : ""
                      }`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className={theme === "dark" ? "text-gray-300" : ""}>
                      {t.contact.form.phone}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.form.phonePlaceholder}
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
                    {t.contact.form.message} *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={8}
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                  {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className={`border-0 ${
            theme === "dark" 
              ? "bg-gradient-to-br from-blue-600 to-indigo-700" 
              : "bg-gradient-to-br from-blue-600 to-indigo-700"
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
                        <div className="text-sm">{info.content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Full Width Map */}
        <Card className={`border-0 ${
          theme === "dark" 
            ? "bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800" 
            : "bg-white shadow-md border border-gray-200"
        }`}>
          <CardContent className="p-8">
            <h4 className={`text-2xl mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {language === "ko" ? "오시는 길" : "Directions"}
            </h4>
            
            {/* Large Map */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8374947235743!2d127.04392207647484!3d37.54447102557939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5a3b8d9e9dd%3A0x9e7f7c7c7c7c7c7c!2z7ISc7Jq47Iud7KCB64-EMQ0z7YOA7JuMIDE0MDY!5e0!3m2!1sko!2skr!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className={`space-y-3 text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                <div className="flex items-start gap-2">
                  <MapPin className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                    theme === "dark" ? "text-cyan-400" : "text-blue-600"
                  }`} />
                  <div>
                    <p className={`mb-1 text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
                      서울특별시 성동구 뚝섬로1길 31
                    </p>
                    <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>서울숲M타워 1406호</p>
                  </div>
                </div>
              </div>
              
              <div className={`space-y-3 text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}>
                <div className="flex items-start gap-2">
                  <Navigation className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                    theme === "dark" ? "text-cyan-400" : "text-blue-600"
                  }`} />
                  <div>
                    <p className={`mb-2 text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
                      지하철
                    </p>
                    <p>• 수인분당선 서울숲역 1번 출구 도보 3분</p>
                    <p>• 2호선 뚝섬역 6번 출구 도보 3분</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className={`w-full mt-6 ${
                theme === "dark"
                  ? "border-gray-700 hover:bg-gray-800 text-gray-300"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => window.open('https://maps.google.com/?q=서울특별시+성동구+뚝섬로1길+31', '_blank')}
            >
              <MapPin className="h-5 w-5 mr-2" />
              구글 지도에서 크게 보기
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}