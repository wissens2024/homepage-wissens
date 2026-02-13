import logoImage from 'figma:asset/c7ba2678653175767dcc6cca0ea6c1f37d4c7ae9.png';

interface ModernFooterProps {
  theme: "dark" | "light";
}

export function ModernFooter({ theme }: ModernFooterProps) {
  return (
    <footer className={theme === "dark" ? "bg-black text-gray-300" : "bg-gray-900 text-gray-300"}>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoImage} 
                alt="비센스바움" 
                className="w-10 h-10 object-contain mix-blend-lighten"
                style={{ filter: 'brightness(1.2)' }}
              />
              <div>
                <div className="text-white text-lg">WISSENSBAUM</div>
                <div className="text-xs text-gray-500">비센스바움</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI 기술로 비즈니스 혁신을 선도하는<br />
              기업 맞춤형 솔루션 전문 기업
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">솔루션</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#solutions" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>AI 교육/평가</a></li>
              <li><a href="#solutions" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>보안 솔루션</a></li>
              <li><a href="#solutions" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>구축형 LLM</a></li>
              <li><a href="#solutions" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>챗봇 & RAG</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">제품</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#products" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>Enterprise LLM</a></li>
              <li><a href="#products" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>SmartBot Suite</a></li>
              <li><a href="#products" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>AINES</a></li>
              <li><a href="#products" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>Smart LMS</a></li>
              <li><a href="#products" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>SecureGate</a></li>
              <li><a href="#products" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>PassGuard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>서울특별시 성동구 뚝섬로1길 31<br />서울숲M타워 1406호</li>
              <li>Tel: 070-4350-1491~3</li>
              <li>
                <a href="mailto:cs@wissensbaum.com" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>
                  cs@wissensbaum.com
                </a>
              </li>
              <li>평일 09:00 ~ 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ㈜비센스바움 (Wissensbaum). All rights reserved.</p>
            {/* Hidden for future use */}
            {/* <div className="flex gap-6">
              <a href="#" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>개인정보처리방침</a>
              <a href="#" className={`${theme === "dark" ? "hover:text-cyan-400" : "hover:text-blue-400"} transition-colors`}>이용약관</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
