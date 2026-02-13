export type Language = "ko" | "en";

export const translations = {
  ko: {
    nav: {
      home: "홈",
      about: "회사소개",
      technology: "핵심 솔루션",
      products: "제품",
      contact: "문의하기",
    },
    hero: {
      title: "AI로 미래를 혁신하는",
      company: "비센스바움",
      description:
        "교육, 보안, 그리고 맞춤형 AI 솔루션으로 디지털 혁신을 선도합니다",
      cta: "제품 둘러보기",
      learnMore: "자세히 알아보기",
    },
    overview: {
      title: "회사 소개",
      description:
        "비센스바움은 AI기반 교육/평가 솔루션, 보안 시스템, 맞춤형 LLM 구축을 제공하는 전문 AI 기업입니다.",
      mission: "우리의 미션",
      missionText:
        "최첨단 AI로 기업과 교육 기관의 디지털 전환을 실현합니다",
      vision: "비전",
      visionText:
        "AI의 대중화를 통해 모든 조직이 혁신할 수 있는 미래를 만듭니다",
    },
    technology: {
      title: "핵심 솔루션",
      subtitle: "최첨단 AI 스택",
      description:
        "검증된 AI와 지속적인 연구개발로 최고의 성능을 제공합니다",
      ai: {
        title: "AI/ML",
        description:
          "최신 딥러닝 및 자연어 처리를 활용한 맞춤형 AI 솔루션",
      },
      security: {
        title: "보안 솔루션",
        description:
          "차세대 보안 시스템으로 자산을 안전하게 보호",
      },
      education: {
        title: "교육 플랫폼",
        description:
          "AI 기반 평가 및 학습 관리 시스템으로 교육 혁신 실현",
      },
      items: [
        {
          title: "Large Language Models",
          description: "최신 LLM을 활용한 자연어 처리 및 생성",
          features: [
            "GPT 기반 모델",
            "한국어 특화",
            "Fine-tuning",
          ],
        },
        {
          title: "RAG System",
          description:
            "Retrieval-Augmented Generation으로 정확한 답변 생성",
          features: [
            "벡터 DB",
            "시맨틱 검색",
            "실시간 업데이트",
          ],
        },
        {
          title: "AI Security",
          description: "AI 기반 보안 솔루션으로 시스템 보호",
          features: ["이상탐지", "접근제어", "암호화"],
        },
        {
          title: "On-Premise AI",
          description: "기업 내부 구축형 AI 시스템",
          features: ["데이터 주권", "커스터마이징", "고성능"],
        },
        {
          title: "Multi-Agent System",
          description: "협업하는 AI 에이전트 시스템",
          features: ["작업 분산", "자율 실행", "최적화"],
        },
        {
          title: "Real-time Processing",
          description: "실시간 데이터 처리 및 분석",
          features: ["저지연", "고처리량", "확장성"],
        },
      ],
    },
    products: {
      title: "제품 및 솔루션",
      categories: {
        ai: "AI 제품",
        security: "보안 제품",
        education: "교육 제품",
      },
      actions: {
        demo: "데모 보기",
        download: "소개서 다운로드",
        manual: "매뉴얼",
        video: "동영상",
      },
      items: [
        // AI 제품
        {
          name: "Enterprise LLM",
          description: "기업 맞춤형 대규모 언어모델",
          features: [
            "온프레미스 구축",
            "데이터 보안",
            "커스터마이징",
          ],
          badge: "AI",
        },
        {
          name: "SmartBot Suite",
          description: "지능형 챗봇 솔루션",
          features: ["다국어 지원", "학습 기능", "API 연동"],
          badge: "AI",
        },
        {
          name: "RAG System Pro",
          description: "검색 증강 생성 시스템",
          features: [
            "벡터 검색",
            "실시간 업데이트",
            "고정확도",
          ],
          badge: "AI",
        },
        // 보안 제품
        {
          name: "SecureGate",
          description: "망연계 솔루션",
          features: [
            "네트워크 분리",
            "안전한 데이터 전송",
            "접근 제어",
          ],
          badge: "보안",
        },
        {
          name: "PassGuard",
          description: "패스워드 관리 솔루션",
          features: ["중앙화 관리", "정책 적용", "감사 로그"],
          badge: "보안",
        },
        {
          name: "PassGuard AM",
          description: "시스템 접근제어 솔루션",
          features: ["권한 관리", "2차 인증", "세션 제어"],
          badge: "보안",
        },
        {
          name: "HSM",
          description: "하드웨어 보안 모듈",
          features: ["암호화 가속", "키 보호", "물리적 보안"],
          badge: "보안",
        },
        {
          name: "Cipher Trust",
          description: "데이터 암호화 솔루션",
          features: ["데이터 보호", "규정 준수", "통합 관리"],
          badge: "보안",
        },
        {
          name: "Data Security Manager",
          description: "암호 키 관리 솔루션",
          features: [
            "키 생명주기 관리",
            "중앙 집중식",
            "감사 추적",
          ],
          badge: "보안",
        },
        // 교육 제품
        {
          name: "AINES",
          description: "AI 비대면 평가 시스템",
          features: ["AI 감독", "부정행위 탐지", "자동 채점"],
          badge: "교육",
        },
        {
          name: "Smart QuizBank",
          description: "스마트 문제은행 시스템",
          features: ["문제 관리", "난이도 분석", "출제 지원"],
          badge: "교육",
        },
        {
          name: "Smart Qualification",
          description: "스마트 자격검정 시스템",
          features: ["자격 관리", "시험 운영", "증명서 발급"],
          badge: "교육",
        },
        {
          name: "Smart CBT/IBT",
          description: "스마트 CBT/IBT 시스템",
          features: ["온라인 시험", "실시간 채점", "결과 분석"],
          badge: "교육",
        },
        {
          name: "Smart LMS",
          description: "스마트 LMS 시스템",
          features: ["학습 관리", "진도 추적", "성과 평가"],
          badge: "교육",
        },
        {
          name: "Smart Monitoring",
          description: "스마트 모니터링 시스템",
          features: ["실시간 감독", "화면 녹화", "이상 탐지"],
          badge: "교육",
        },
        {
          name: "Smart EduClass",
          description: "스마트 에듀클래스",
          features: [
            "화상 강의",
            "협업 도구",
            "학습 자료 공유",
          ],
          badge: "교육",
        },
      ],
    },
    trust: {
      title: "신뢰할 수 있는 파트너",
      clients: "고객사",
      projects: "프로젝트",
      satisfaction: "만족도",
    },
    research: {
      title: "연구 개발",
      description:
        "지속적인 혁신을 통해 최고의 솔루션을 제공합니다",
      patents: "특허 및 논문",
      partnerships: "연구 파트너십",
    },
    contact: {
      title: "문의하기",
      subtitle: "AI 솔루션에 대해 궁금하신 점이 있으신가요?",
      description: "전문가가 신속하게 답변해 드립니다",
      form: {
        name: "이름",
        namePlaceholder: "홍길동",
        email: "이메일",
        emailPlaceholder: "example@company.com",
        company: "회사명",
        companyPlaceholder: "회사명을 입력하세요",
        phone: "연락처",
        phonePlaceholder: "010-1234-5678",
        message: "문의 내용",
        messagePlaceholder: "문의하실 내용을 자세히 적어주세요",
        submit: "문의 보내기",
        sending: "전송 중...",
      },
      success: "문의가 성공적으로 전송되었습니다!",
      error: "문의 전송에 실패했습니다. 다시 시도해주세요.",
    },
    footer: {
      company: "회사",
      products: "제품",
      support: "고객지원",
      contact: "연락처",
      copyright: "© 2024 비센스바움. All rights reserved.",
      address: "서울특별시 강남구",
      email: "cs@wissensbaum.com",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      technology: "Core Solutions",
      products: "Products",
      contact: "Contact",
    },
    hero: {
      title: "Innovating the Future with",
      company: "AI Technology",
      description:
        "Leading digital transformation with education, security, and customized AI solutions",
      cta: "Explore Products",
      learnMore: "Learn More",
    },
    overview: {
      title: "About Us",
      description:
        "Wissensbaum provides AI-based education/assessment solutions, security systems, and custom LLM development\nas a specialized AI company.",
      mission: "Our Mission",
      missionText:
        "Realize digital transformation for enterprises and educational institutions with cutting-edge AI technology",
      vision: "Vision",
      visionText:
        "Create a future where every organization can innovate through AI technology democratization",
    },
    technology: {
      title: "Core Technology",
      subtitle: "Advanced AI Technology Stack",
      description:
        "Delivering top performance with validated AI technology and continuous R&D",
      ai: {
        title: "AI/ML Technology",
        description:
          "Customized AI solutions using latest deep learning and natural language processing",
      },
      security: {
        title: "Security Technology",
        description:
          "Protect corporate assets safely with next-generation security systems",
      },
      education: {
        title: "Education Platform",
        description:
          "Realize educational innovation with AI-based assessment and learning management systems",
      },
      items: [
        {
          title: "Large Language Models",
          description:
            "Natural language processing and generation using the latest LLM technology",
          features: [
            "GPT-based models",
            "Korean specialization",
            "Fine-tuning",
          ],
        },
        {
          title: "RAG System",
          description:
            "Generate accurate answers with Retrieval-Augmented Generation",
          features: [
            "Vector DB",
            "Semantic search",
            "Real-time updates",
          ],
        },
        {
          title: "AI Security",
          description:
            "Protect systems with AI-based security solutions",
          features: [
            "Anomaly detection",
            "Access control",
            "Encryption",
          ],
        },
        {
          title: "On-Premise AI",
          description:
            "AI systems built on-premise for enterprises",
          features: [
            "Data sovereignty",
            "Customization",
            "High performance",
          ],
        },
        {
          title: "Multi-Agent System",
          description: "AI agent systems that collaborate",
          features: [
            "Task distribution",
            "Autonomous execution",
            "Optimization",
          ],
        },
        {
          title: "Real-time Processing",
          description: "Real-time data processing and analysis",
          features: [
            "Low latency",
            "High throughput",
            "Scalability",
          ],
        },
      ],
    },
    products: {
      title: "Products & Solutions",
      categories: {
        ai: "AI Products",
        security: "Security Products",
        education: "Education Products",
      },
      actions: {
        demo: "View Demo",
        download: "Download Brochure",
        manual: "Manual",
        video: "Video",
      },
      items: [
        // AI 제품
        {
          name: "Enterprise LLM",
          description:
            "Enterprise-customized large language model",
          features: [
            "On-premise deployment",
            "Data security",
            "Customization",
          ],
          badge: "AI",
        },
        {
          name: "SmartBot Suite",
          description: "Intelligent chatbot solution",
          features: [
            "Multilingual support",
            "Learning capabilities",
            "API integration",
          ],
          badge: "AI",
        },
        {
          name: "RAG System Pro",
          description: "Search-enhanced generation system",
          features: [
            "Vector search",
            "Real-time updates",
            "High accuracy",
          ],
          badge: "AI",
        },
        // 보안 제품
        {
          name: "SecureGate",
          description: "Network connection solution",
          features: [
            "Network segmentation",
            "Secure data transmission",
            "Access control",
          ],
          badge: "Security",
        },
        {
          name: "PassGuard",
          description: "Password management solution",
          features: [
            "Centralized management",
            "Policy application",
            "Audit logs",
          ],
          badge: "Security",
        },
        {
          name: "PassGuard AM",
          description: "System access control solution",
          features: [
            "Permission management",
            "Two-factor authentication",
            "Session control",
          ],
          badge: "Security",
        },
        {
          name: "HSM",
          description: "Hardware security module",
          features: [
            "Encryption acceleration",
            "Key protection",
            "Physical security",
          ],
          badge: "Security",
        },
        {
          name: "Cipher Trust",
          description: "Data encryption solution",
          features: [
            "Data protection",
            "Regulation compliance",
            "Integrated management",
          ],
          badge: "Security",
        },
        {
          name: "Data Security Manager",
          description: "Encryption key management solution",
          features: [
            "Key lifecycle management",
            "Centralized",
            "Audit tracking",
          ],
          badge: "Security",
        },
        // 교육 제품
        {
          name: "AINES",
          description: "AI remote assessment system",
          features: [
            "AI supervision",
            "Fraud detection",
            "Automatic grading",
          ],
          badge: "Education",
        },
        {
          name: "Smart QuizBank",
          description: "Smart question bank system",
          features: [
            "Question management",
            "Difficulty analysis",
            "Question creation support",
          ],
          badge: "Education",
        },
        {
          name: "Smart Qualification",
          description: "Smart qualification system",
          features: [
            "Qualification management",
            "Test operation",
            "Certificate issuance",
          ],
          badge: "Education",
        },
        {
          name: "Smart CBT/IBT",
          description: "Smart CBT/IBT system",
          features: [
            "Online test",
            "Real-time grading",
            "Result analysis",
          ],
          badge: "Education",
        },
        {
          name: "Smart LMS",
          description: "Smart LMS system",
          features: [
            "Learning management",
            "Progress tracking",
            "Performance evaluation",
          ],
          badge: "Education",
        },
        {
          name: "Smart Monitoring",
          description: "Smart monitoring system",
          features: [
            "Real-time supervision",
            "Screen recording",
            "Anomaly detection",
          ],
          badge: "Education",
        },
        {
          name: "Smart EduClass",
          description: "Smart EduClass",
          features: [
            "Video lectures",
            "Collaboration tools",
            "Shared learning materials",
          ],
          badge: "Education",
        },
      ],
    },
    trust: {
      title: "Trusted Partner",
      clients: "Clients",
      projects: "Projects",
      satisfaction: "Satisfaction",
    },
    research: {
      title: "Research & Development",
      description:
        "Providing the best solutions through continuous technological innovation",
      patents: "Patents & Papers",
      partnerships: "Research Partnerships",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have questions about our AI solutions?",
      description: "Our experts will respond promptly",
      form: {
        name: "Name",
        namePlaceholder: "John Doe",
        email: "Email",
        emailPlaceholder: "example@company.com",
        company: "Company",
        companyPlaceholder: "Enter your company name",
        phone: "Phone",
        phonePlaceholder: "+82-10-1234-5678",
        message: "Message",
        messagePlaceholder:
          "Please describe your inquiry in detail",
        submit: "Send Inquiry",
        sending: "Sending...",
      },
      success: "Your inquiry has been sent successfully!",
      error: "Failed to send inquiry. Please try again.",
    },
    footer: {
      company: "Company",
      products: "Products",
      support: "Support",
      contact: "Contact",
      copyright: "© 2024 Wissensbaum. All rights reserved.",
      address: "Gangnam-gu, Seoul",
      email: "cs@wissensbaum.com",
    },
  },
};

export function getTranslation(lang: Language) {
  return translations[lang];
}