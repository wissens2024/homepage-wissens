export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded" />
              <span className="text-xl text-white">㈜비센스바움</span>
            </div>
            <p className="text-sm">
              AI 기반 솔루션으로<br />
              비즈니스 혁신을 선도합니다
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">제품 및 솔루션</h4>
            <ul className="space-y-2 text-sm">
              <li>AI 기반 교육/평가 솔루션</li>
              <li>보안 솔루션</li>
              <li>구축형 LLM</li>
              <li>Chatbot & RAG System</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>서울특별시 강남구</li>
              <li>Tel: 02-0000-0000</li>
              <li>Email: info@wissensbaum.com</li>
              <li>
                <a 
                  href="http://wissensbaum.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  wissensbaum.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ㈜비센스바움 (Wissensbaum). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
