export const translations = {
  en: {
    // Navigation
    nav: {
      projects: "Projects",
      process: "Process",
      results: "Results",
      testimonials: "Testimonials",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    // Hero Section
    hero: {
      available: "Available for new opportunities",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      scroll: "Scroll",
      title: "Product Designer",
      tagline: "Crafting User-Centered Digital Experiences Through Research-Driven Design",
    },
    // Projects Section
    projects: {
      sectionTitle: "Featured Work",
      heading: "Selected",
      headingHighlight: "Projects",
      description: "A showcase of impactful design work spanning fintech, healthcare, AI products, and luxury e-commerce",
      viewAll: "View All Projects",
      tabs: {
        overview: "Overview",
        research: "Research",
        solution: "Solution",
        metrics: "Metrics",
      },
      overview: "Overview",
      challenge: "Challenge",
      team: "Team",
      coreUserSegments: "Core User Segments",
      whoPays: "Who Pays?",
      whoUses: "Who Uses?",
      whoSuffers: "Who Suffers?",
      frictionPoints: "Friction Points",
      onboarding: "Onboarding",
      activation: "Activation",
      dropOff: "Drop-off Moments",
      trustIssues: "Trust Issues",
      researchMethods: "Research Methods",
      keyFindings: "Key Findings",
      colorSystem: "Color System",
      userPersonas: "User Personas",
      goals: "Goals",
      painPoints: "Pain Points",
      approach: "Approach",
      keyFeatures: "Key Features",
      designSystem: "Design System",
      components: "Components",
      tokens: "Tokens",
      docs: "Docs",
      resultsImpact: "Results & Impact",
      before: "Before",
      after: "After",
    },
    // Contact Section
    contact: {
      sectionTitle: "Get In Touch",
      heading: "Let's",
      headingHighlight: "Connect",
      description: "Interested in working together? I'm always open to discussing new projects and opportunities.",
      emailMe: "Email Me",
      linkedin: "LinkedIn",
      availableForProjects: "Available for new projects",
    },
    // Footer
    footer: {
      designedBy: "Designed & Built by",
    },
    // Project Content
    projectContent: {
      "collabix-app": {
        title: "Collabix Mobile App",
        overview: "Designing the full end-to-end mobile app experience for Collabix, from initial concept to final UI/UX delivery, establishing design systems and scalable UI components.",
        challenge: "Create a cohesive mobile app experience from scratch while ensuring consistency across the entire application and balancing technical feasibility with business requirements.",
        userSegments: {
          whoPays: "Sellers (brands, small businesses) looking to promote products through authentic content",
          whoUses: "UGC creators producing content, Sellers managing campaigns and collaborations",
          whoSuffers: "New creators struggling to find brand deals, Small sellers with limited marketing budgets",
        },
        frictionPoints: {
          onboarding: "Complex verification process for creators, unclear campaign setup for sellers",
          activation: "First successful collaboration takes too long, payment terms unclear",
          dropOff: "Creators abandon after no response from brands, sellers leave due to content quality concerns",
          trustIssues: "Creators worry about payment security, sellers concerned about content authenticity",
        },
        methods: [
          {
            name: "Requirements Gathering",
            description: "Collaborated with stakeholders to understand business goals and user needs",
            findings: ["Identified core user workflows", "Defined key feature priorities", "Established design constraints"],
          },
          {
            name: "Design System Development",
            description: "Created comprehensive design system for consistency",
            findings: ["Scalable UI components", "Visual style guide", "Reusable design patterns"],
          },
        ],
        personas: [
          {
            name: "UGC Creator",
            occupation: "Content Creator",
            goals: ["Find brand collaborations", "Build portfolio", "Earn consistent income"],
            painPoints: ["Hard to find opportunities", "Unclear payment terms", "No response from brands"],
          },
          {
            name: "Seller/Brand",
            occupation: "Small Business Owner",
            goals: ["Get authentic product content", "Increase sales through UGC", "Find reliable creators"],
            painPoints: ["Quality control concerns", "Managing multiple creators", "ROI tracking"],
          },
        ],
        approach: "User-centered design with focus on consistency and scalability through comprehensive design system.",
        keyFeatures: [
          { name: "Design System", description: "Established visual style guide and scalable UI components", impact: "Ensured consistency across the entire app" },
          { name: "End-to-End Design", description: "Complete user journey from onboarding to core features", impact: "Seamless user experience throughout the app" },
          { name: "Developer Collaboration", description: "Close collaboration with development team for production-ready designs", impact: "Smooth design-to-development handoff" },
        ],
      },
      "legaltech-platform": {
        title: "LegalTech Platform Redesign",
        overview: "Conducted comprehensive user research and redesigned the platform experience, identifying friction points and creating interactive prototypes aligned with legal and technical requirements.",
        challenge: "Users were experiencing friction across multiple touchpoints, leading to poor conversion rates. The platform needed to balance legal compliance with user-friendly design.",
        userSegments: {
          whoPays: "Businesses (startups, SMEs) seeking quick and affordable legal registration services",
          whoUses: "Entrepreneurs, founders, business owners filling out registration forms",
          whoSuffers: "First-time founders confused by legal requirements, businesses facing delays due to paperwork errors",
        },
        frictionPoints: {
          onboarding: "Overwhelming legal terminology, unclear document requirements",
          activation: "Users unsure which business type to select, form abandonment at complex sections",
          dropOff: "Users leave when asked for documents they don't have, payment hesitation without clear value",
          trustIssues: "Concerns about data security, uncertainty if registration will be legally valid",
        },
        methods: [
          { name: "User Interviews", description: "Conducted in-depth interviews to understand user pain points", findings: ["Identified key friction points", "Mapped user mental models", "Discovered unmet needs"] },
          { name: "Google Analytics Analysis", description: "Analyzed user behavior data to identify drop-off points", findings: ["Identified conversion path issues", "Found feature adoption gaps", "Discovered navigation problems"] },
          { name: "Wireframing & Prototyping", description: "Created low-to-high fidelity wireframes and interactive prototypes", findings: ["Validated design concepts", "Tested user flows", "Refined interactions"] },
        ],
        personas: [
          { name: "First-Time Founder", occupation: "Startup Entrepreneur", goals: ["Register business quickly", "Understand legal requirements", "Minimize costs"], painPoints: ["Legal jargon confusion", "Unsure about correct business type", "Fear of making mistakes"] },
          { name: "SME Owner", occupation: "Business Owner", goals: ["Expand business legally", "Handle compliance efficiently", "Save time on paperwork"], painPoints: ["Lengthy manual processes", "Multiple document requirements", "Unclear status tracking"] },
        ],
        approach: "Data-driven redesign focusing on reducing friction while maintaining legal compliance.",
        keyFeatures: [
          { name: "Streamlined User Flows", description: "Redesigned core user journeys based on analytics insights", impact: "Reduced friction across touchpoints" },
          { name: "Interactive Prototypes", description: "High-fidelity Figma prototypes for user testing", impact: "Validated designs before development" },
          { name: "Cross-functional Alignment", description: "Collaborated with legal and technical teams", impact: "Ensured compliance and feasibility" },
        ],
      },
      "adata-platform": {
        title: "Adata Platform Redesign",
        overview: "Redesigned landing and filter pages for Adata, a counteragent verification platform in the financial sector, improving user trust and client acquisition.",
        challenge: "The existing platform lacked visual credibility for a financial verification service. Users needed to quickly assess counteragent reliability, but the interface was not intuitive or trustworthy.",
        userSegments: {
          whoPays: "Businesses (finance departments, procurement teams) needing counteragent verification",
          whoUses: "Financial analysts, accountants, procurement managers checking partner reliability",
          whoSuffers: "Companies that faced fraud or unreliable partners, teams wasting time on manual checks",
        },
        frictionPoints: {
          onboarding: "Unclear what data sources are used, complex subscription tiers",
          activation: "First search yields too much or too little data, unclear report interpretation",
          dropOff: "Users abandon when verification takes too long, leave if data seems outdated",
          trustIssues: "Uncertainty about data accuracy, concerns about legal validity of reports",
        },
        methods: [
          { name: "User Flow Analysis", description: "Analyzed how users navigate through counteragent checks", findings: ["Complex filter interactions", "Need for clear data visualization", "Trust signals required"] },
          { name: "Competitive Analysis", description: "Reviewed similar financial verification platforms", findings: ["Identified trust-building patterns", "Found UX best practices", "Discovered differentiation opportunities"] },
        ],
        personas: [
          { name: "Financial Analyst", occupation: "Risk Assessment Specialist", goals: ["Quickly verify counteragents", "Access reliable data", "Make informed decisions"], painPoints: ["Unclear data presentation", "Slow verification process", "Lack of trust indicators"] },
          { name: "Procurement Manager", occupation: "Supply Chain Manager", goals: ["Vet new suppliers efficiently", "Avoid fraudulent partners", "Document due diligence"], painPoints: ["Time-consuming manual checks", "Incomplete partner information", "Audit trail requirements"] },
        ],
        approach: "Clean, professional redesign focusing on trust, clarity, and efficient data filtering.",
        keyFeatures: [
          { name: "Landing Page Redesign", description: "Created professional, trust-inspiring landing page", impact: "Increased client trust and conversions" },
          { name: "Advanced Filter System", description: "Intuitive filter pages for counteragent verification", impact: "Faster and more efficient user workflows" },
          { name: "Trust-Building Design", description: "Visual elements conveying reliability and professionalism", impact: "Attracted more clients to the platform" },
        ],
      },
      "maqam-marketplace": {
        title: "Maqam Marketplace",
        overview: "Designed web pages for Maqam, a marketplace connecting sellers and users in the beauty and healthy food industry, creating an intuitive e-commerce experience.",
        challenge: "Create a marketplace platform that serves both sellers and buyers in the beauty and healthy food niche, balancing seller management tools with a seamless shopping experience for users.",
        userSegments: {
          whoPays: "Sellers (beauty brands, healthy food producers) paying platform fees, Buyers purchasing products",
          whoUses: "Sellers listing and managing products, Buyers browsing and purchasing, Admins moderating content",
          whoSuffers: "Small sellers struggling with visibility, Buyers unsure about product authenticity, New users overwhelmed by choices",
        },
        frictionPoints: {
          onboarding: "Complex seller registration, buyers need account to purchase, unclear platform benefits",
          activation: "Sellers unsure how to optimize listings, buyers can't find niche products easily",
          dropOff: "Cart abandonment due to shipping costs, sellers leave due to low sales",
          trustIssues: "Product authenticity concerns for health items, seller credibility questions, payment security worries",
        },
        methods: [
          { name: "Market Research", description: "Analyzed beauty and healthy food marketplace trends", findings: ["User preferences for product discovery", "Seller onboarding needs", "Trust factors in health products"] },
          { name: "User Journey Mapping", description: "Mapped both seller and buyer journeys", findings: ["Key touchpoints identified", "Pain points in existing flows", "Opportunities for improvement"] },
        ],
        personas: [
          { name: "Health-Conscious Buyer", occupation: "Professional", goals: ["Find quality health products", "Discover new beauty brands", "Easy checkout process"], painPoints: ["Product authenticity concerns", "Overwhelming choices", "Unclear product information"] },
          { name: "Small Business Seller", occupation: "Entrepreneur", goals: ["Reach target audience", "Manage inventory easily", "Grow online presence"], painPoints: ["Complex seller tools", "Limited visibility", "High competition"] },
        ],
        approach: "User-friendly marketplace design balancing seller tools with buyer experience in the beauty and health niche.",
        keyFeatures: [
          { name: "Marketplace Web Pages", description: "Clean, intuitive pages for product browsing and discovery", impact: "Improved user engagement" },
          { name: "Seller Dashboard", description: "Easy-to-use tools for sellers to manage products", impact: "Streamlined seller onboarding" },
          { name: "Product Showcase", description: "Visual-first design highlighting beauty and health products", impact: "Enhanced product appeal" },
        ],
      },
    },
  },
  ru: {
    // Navigation
    nav: {
      projects: "Проекты",
      process: "Процесс",
      results: "Результаты",
      testimonials: "Отзывы",
      contact: "Контакты",
      getInTouch: "Связаться",
    },
    // Hero Section
    hero: {
      available: "Открыта к новым возможностям",
      viewProjects: "Смотреть проекты",
      contactMe: "Связаться",
      scroll: "Листать",
      title: "Продуктовый дизайнер",
      tagline: "Создание пользовательского опыта через исследовательский дизайн",
    },
    // Projects Section
    projects: {
      sectionTitle: "Избранные работы",
      heading: "Избранные",
      headingHighlight: "Проекты",
      description: "Коллекция дизайн-проектов в сферах финтех, здравоохранения, AI и электронной коммерции",
      viewAll: "Все проекты",
      tabs: {
        overview: "Обзор",
        research: "Исследование",
        solution: "Решение",
        metrics: "Метрики",
      },
      overview: "Обзор",
      challenge: "Задача",
      team: "Команда",
      coreUserSegments: "Сегменты пользователей",
      whoPays: "Кто платит?",
      whoUses: "Кто использует?",
      whoSuffers: "Кто страдает?",
      frictionPoints: "Точки трения",
      onboarding: "Онбординг",
      activation: "Активация",
      dropOff: "Моменты оттока",
      trustIssues: "Проблемы доверия",
      researchMethods: "Методы исследования",
      keyFindings: "Ключевые выводы",
      colorSystem: "Цветовая система",
      userPersonas: "Персоны пользователей",
      goals: "Цели",
      painPoints: "Боли",
      approach: "Подход",
      keyFeatures: "Ключевые функции",
      designSystem: "Дизайн-система",
      components: "Компоненты",
      tokens: "Токены",
      docs: "Документация",
      resultsImpact: "Результаты и влияние",
      before: "До",
      after: "После",
    },
    // Contact Section
    contact: {
      sectionTitle: "Контакты",
      heading: "Давайте",
      headingHighlight: "Общаться",
      description: "Заинтересованы в сотрудничестве? Я всегда открыта к обсуждению новых проектов.",
      emailMe: "Написать",
      linkedin: "LinkedIn",
      availableForProjects: "Открыта к новым проектам",
    },
    // Footer
    footer: {
      designedBy: "Разработано",
    },
    // Project Content
    projectContent: {
      "collabix-app": {
        title: "Мобильное приложение Collabix",
        overview: "Разработка полного UX/UI дизайна мобильного приложения Collabix — от концепции до финальной реализации, включая создание дизайн-системы и масштабируемых UI-компонентов.",
        challenge: "Создать целостный пользовательский опыт мобильного приложения с нуля, обеспечивая консистентность во всём приложении и баланс между техническими возможностями и бизнес-требованиями.",
        userSegments: {
          whoPays: "Продавцы (бренды, малый бизнес), продвигающие товары через аутентичный контент",
          whoUses: "UGC-креаторы, создающие контент; продавцы, управляющие кампаниями и коллаборациями",
          whoSuffers: "Начинающие креаторы, ищущие сделки с брендами; малые продавцы с ограниченным маркетинговым бюджетом",
        },
        frictionPoints: {
          onboarding: "Сложный процесс верификации для креаторов, непонятная настройка кампаний для продавцов",
          activation: "Первая успешная коллаборация занимает слишком много времени, условия оплаты неясны",
          dropOff: "Креаторы уходят без ответа от брендов, продавцы уходят из-за проблем с качеством контента",
          trustIssues: "Креаторы беспокоятся о безопасности оплаты, продавцы — об аутентичности контента",
        },
        methods: [
          {
            name: "Сбор требований",
            description: "Работа с заинтересованными сторонами для понимания бизнес-целей и потребностей пользователей",
            findings: ["Определены основные пользовательские сценарии", "Расставлены приоритеты функций", "Установлены дизайн-ограничения"],
          },
          {
            name: "Разработка дизайн-системы",
            description: "Создание комплексной дизайн-системы для обеспечения консистентности",
            findings: ["Масштабируемые UI-компоненты", "Визуальный стайлгайд", "Переиспользуемые паттерны дизайна"],
          },
        ],
        personas: [
          {
            name: "UGC-креатор",
            occupation: "Контент-креатор",
            goals: ["Найти коллаборации с брендами", "Создать портфолио", "Получать стабильный доход"],
            painPoints: ["Сложно найти возможности", "Неясные условия оплаты", "Нет ответа от брендов"],
          },
          {
            name: "Продавец/Бренд",
            occupation: "Владелец малого бизнеса",
            goals: ["Получить аутентичный контент о продукте", "Увеличить продажи через UGC", "Найти надёжных креаторов"],
            painPoints: ["Проблемы с контролем качества", "Управление несколькими креаторами", "Отслеживание ROI"],
          },
        ],
        approach: "Пользовательско-ориентированный дизайн с фокусом на консистентность и масштабируемость через комплексную дизайн-систему.",
        keyFeatures: [
          { name: "Дизайн-система", description: "Создание визуального стайлгайда и масштабируемых UI-компонентов", impact: "Обеспечена консистентность во всём приложении" },
          { name: "Сквозной дизайн", description: "Полный пользовательский путь от онбординга до основных функций", impact: "Бесшовный пользовательский опыт" },
          { name: "Работа с разработчиками", description: "Тесное сотрудничество с командой разработки для продакшн-готовых дизайнов", impact: "Плавная передача дизайна в разработку" },
        ],
      },
      "legaltech-platform": {
        title: "Редизайн LegalTech платформы",
        overview: "Проведение комплексного исследования пользователей и редизайн платформы с выявлением точек трения и созданием интерактивных прототипов в соответствии с юридическими и техническими требованиями.",
        challenge: "Пользователи испытывали трудности на множестве точек взаимодействия, что приводило к низкой конверсии. Платформе требовался баланс между юридическим соответствием и удобством использования.",
        userSegments: {
          whoPays: "Бизнес (стартапы, МСБ), ищущий быструю и доступную регистрацию юридических лиц",
          whoUses: "Предприниматели, основатели, владельцы бизнеса, заполняющие регистрационные формы",
          whoSuffers: "Начинающие предприниматели, запутавшиеся в юридических требованиях; компании с задержками из-за ошибок в документах",
        },
        frictionPoints: {
          onboarding: "Перегруженность юридической терминологией, непонятные требования к документам",
          activation: "Пользователи не уверены, какой тип бизнеса выбрать; уход с формы на сложных разделах",
          dropOff: "Уход при запросе отсутствующих документов, колебания при оплате без понимания ценности",
          trustIssues: "Беспокойство о безопасности данных, неуверенность в юридической действительности регистрации",
        },
        methods: [
          { name: "Интервью с пользователями", description: "Проведение глубинных интервью для понимания болей пользователей", findings: ["Выявлены ключевые точки трения", "Составлены ментальные модели пользователей", "Обнаружены неудовлетворённые потребности"] },
          { name: "Анализ Google Analytics", description: "Анализ поведенческих данных для выявления точек оттока", findings: ["Найдены проблемы в воронке конверсии", "Обнаружены пробелы в адаптации функций", "Выявлены проблемы навигации"] },
          { name: "Вайрфрейминг и прототипирование", description: "Создание вайрфреймов от низкой до высокой детализации и интерактивных прототипов", findings: ["Валидация дизайн-концепций", "Тестирование пользовательских сценариев", "Доработка взаимодействий"] },
        ],
        personas: [
          { name: "Начинающий предприниматель", occupation: "Стартап-предприниматель", goals: ["Быстро зарегистрировать бизнес", "Понять юридические требования", "Минимизировать расходы"], painPoints: ["Путаница в юридическом жаргоне", "Неуверенность в типе бизнеса", "Страх ошибок"] },
          { name: "Владелец МСБ", occupation: "Владелец бизнеса", goals: ["Законно расширить бизнес", "Эффективно соблюдать требования", "Сэкономить время на документах"], painPoints: ["Длительные ручные процессы", "Множество требований к документам", "Непонятный статус"] },
        ],
        approach: "Редизайн на основе данных с фокусом на снижение трения при соблюдении юридических требований.",
        keyFeatures: [
          { name: "Оптимизированные сценарии", description: "Редизайн ключевых пользовательских путей на основе аналитики", impact: "Снижение трения на всех точках контакта" },
          { name: "Интерактивные прототипы", description: "Высокодетализированные прототипы в Figma для тестирования", impact: "Валидация дизайнов до разработки" },
          { name: "Кросс-функциональное согласование", description: "Работа с юридической и технической командами", impact: "Обеспечено соответствие и реализуемость" },
        ],
      },
      "adata-platform": {
        title: "Редизайн платформы Adata",
        overview: "Редизайн лендинга и страниц фильтрации для Adata — платформы проверки контрагентов в финансовом секторе, улучшение доверия пользователей и привлечение клиентов.",
        challenge: "Существующая платформа не вызывала визуального доверия для финансового сервиса проверки. Пользователям требовалось быстро оценить надёжность контрагентов, но интерфейс был неинтуитивным.",
        userSegments: {
          whoPays: "Бизнес (финансовые отделы, закупочные команды), нуждающийся в проверке контрагентов",
          whoUses: "Финансовые аналитики, бухгалтеры, менеджеры по закупкам, проверяющие надёжность партнёров",
          whoSuffers: "Компании, столкнувшиеся с мошенничеством или ненадёжными партнёрами; команды, тратящие время на ручные проверки",
        },
        frictionPoints: {
          onboarding: "Неясно, какие источники данных используются; сложные тарифы подписки",
          activation: "Первый поиск даёт слишком много или мало данных; непонятная интерпретация отчётов",
          dropOff: "Уход при долгой проверке; уход если данные кажутся устаревшими",
          trustIssues: "Неуверенность в точности данных; беспокойство о юридической силе отчётов",
        },
        methods: [
          { name: "Анализ пользовательского пути", description: "Анализ навигации пользователей при проверке контрагентов", findings: ["Сложные взаимодействия с фильтрами", "Потребность в ясной визуализации данных", "Необходимы сигналы доверия"] },
          { name: "Конкурентный анализ", description: "Обзор аналогичных платформ финансовой проверки", findings: ["Выявлены паттерны построения доверия", "Найдены лучшие UX-практики", "Обнаружены возможности дифференциации"] },
        ],
        personas: [
          { name: "Финансовый аналитик", occupation: "Специалист по оценке рисков", goals: ["Быстро проверить контрагентов", "Получить надёжные данные", "Принимать обоснованные решения"], painPoints: ["Неясная подача данных", "Медленный процесс проверки", "Нет индикаторов доверия"] },
          { name: "Менеджер по закупкам", occupation: "Менеджер по цепочке поставок", goals: ["Эффективно проверять поставщиков", "Избегать мошенников", "Документировать due diligence"], painPoints: ["Трудоёмкие ручные проверки", "Неполная информация о партнёрах", "Требования к аудиторскому следу"] },
        ],
        approach: "Чистый, профессиональный редизайн с фокусом на доверие, ясность и эффективную фильтрацию данных.",
        keyFeatures: [
          { name: "Редизайн лендинга", description: "Создание профессионального, вызывающего доверие лендинга", impact: "Повышение доверия клиентов и конверсии" },
          { name: "Продвинутая система фильтров", description: "Интуитивные страницы фильтрации для проверки контрагентов", impact: "Более быстрые и эффективные рабочие процессы" },
          { name: "Дизайн, вызывающий доверие", description: "Визуальные элементы, передающие надёжность и профессионализм", impact: "Привлечено больше клиентов" },
        ],
      },
      "maqam-marketplace": {
        title: "Маркетплейс Maqam",
        overview: "Дизайн веб-страниц для Maqam — маркетплейса, соединяющего продавцов и покупателей в индустрии красоты и здорового питания, создание интуитивного e-commerce опыта.",
        challenge: "Создать платформу маркетплейса для продавцов и покупателей в нише красоты и здорового питания, балансируя инструменты управления для продавцов с бесшовным покупательским опытом.",
        userSegments: {
          whoPays: "Продавцы (бренды красоты, производители здорового питания), платящие комиссию; покупатели, приобретающие товары",
          whoUses: "Продавцы, размещающие и управляющие товарами; покупатели, просматривающие и покупающие; администраторы, модерирующие контент",
          whoSuffers: "Малые продавцы с низкой видимостью; покупатели, неуверенные в подлинности товаров; новые пользователи, перегруженные выбором",
        },
        frictionPoints: {
          onboarding: "Сложная регистрация продавцов; покупателям нужен аккаунт для покупки; неясные преимущества платформы",
          activation: "Продавцы не знают, как оптимизировать листинги; покупатели не могут легко найти нишевые товары",
          dropOff: "Брошенные корзины из-за стоимости доставки; продавцы уходят из-за низких продаж",
          trustIssues: "Беспокойство о подлинности товаров для здоровья; вопросы к надёжности продавцов; беспокойство о безопасности платежей",
        },
        methods: [
          { name: "Исследование рынка", description: "Анализ трендов маркетплейсов красоты и здорового питания", findings: ["Предпочтения пользователей в поиске товаров", "Потребности онбординга продавцов", "Факторы доверия к товарам для здоровья"] },
          { name: "Картирование пользовательского пути", description: "Составление путей продавцов и покупателей", findings: ["Определены ключевые точки контакта", "Выявлены боли в существующих сценариях", "Найдены возможности улучшения"] },
        ],
        personas: [
          { name: "ЗОЖ-покупатель", occupation: "Специалист", goals: ["Найти качественные товары для здоровья", "Открыть новые бренды красоты", "Простой процесс оформления"], painPoints: ["Беспокойство о подлинности товаров", "Слишком много выбора", "Непонятная информация о товарах"] },
          { name: "Малый продавец", occupation: "Предприниматель", goals: ["Достичь целевой аудитории", "Легко управлять инвентарём", "Развивать онлайн-присутствие"], painPoints: ["Сложные инструменты продавца", "Низкая видимость", "Высокая конкуренция"] },
        ],
        approach: "Удобный дизайн маркетплейса, балансирующий инструменты продавца с покупательским опытом в нише красоты и здоровья.",
        keyFeatures: [
          { name: "Веб-страницы маркетплейса", description: "Чистые, интуитивные страницы для просмотра и поиска товаров", impact: "Улучшена вовлечённость пользователей" },
          { name: "Панель продавца", description: "Простые инструменты для управления товарами", impact: "Упрощён онбординг продавцов" },
          { name: "Витрина товаров", description: "Визуально-ориентированный дизайн для товаров красоты и здоровья", impact: "Повышена привлекательность товаров" },
        ],
      },
    },
  },
};

export type Language = "en" | "ru";
export type Translations = typeof translations.en;
