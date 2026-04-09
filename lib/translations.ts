export type Locale = 'es' | 'en'

export const translations = {
  en: {
    // Header
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
      resume: 'Resume',
    },

    // Hero
    hero: {
      roles: ['Full Stack Developer', 'Systems Engineer', 'Python & AI Enthusiast', 'Business Solutions Builder'],
      available: 'Available for new opportunities',
      heading: ['I build ', 'digital', 'experiences', ' that', 'matter.'],
      description: 'Building real-world business solutions — from POS systems to ML prediction models.',
      specializing: 'Specializing in',
      and: ', and',
      location: 'Based in Colombia',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      scroll: 'Scroll',
    },

    // About
    about: {
      sectionLabel: 'About',
      title: 'A bit about me',
      bio: [
        "I'm a Systems Engineer passionate about building software solutions that solve real problems. From POS systems for businesses to financial prediction models with artificial intelligence.",
        'My approach combines Full Stack development with TypeScript/React and Python, along with experience in Machine Learning to create complete end-to-end applications.',
        "I'm driven by automating processes, building modern interfaces, and exploring the potential of AI applied to financial data.",
      ],
      downloadResume: 'Download Resume',
      skills: {
        frontend: 'Frontend',
        backend: 'Backend',
        dataAi: 'Data & AI',
        dbTools: 'Databases & Tools',
      },
    },

    // Experience
    experience: {
      sectionLabel: 'Experience',
      title: "Where I've worked",
      items: [
        {
          role: 'Full Stack Developer',
          company: 'Freelance / Own Projects',
          period: '2024 — Present',
          description: 'Development of professional POS systems with React/Next.js/TypeScript, billing management systems with Firebase, and financial prediction models with Python and PyTorch.',
        },
        {
          role: 'Systems Engineer',
          company: 'Wilson Cars & Wash',
          period: '2024 — 2025',
          description: 'Designed and developed a complete POS system for parking lots and car washes: automated entry/exit, cash register closings, thermal tickets, dashboard with real-time reports and Electron desktop app.',
        },
        {
          role: 'Python Developer & Data Scientist',
          company: 'Research Projects',
          period: '2023 — 2024',
          description: 'Creation of hybrid prediction models for USD/COP dollar exchange rate and financial rates using PyTorch, with Docker containerization for training and deployment.',
        },
      ],
    },

    // Projects
    projects: {
      sectionLabel: 'Projects',
      title: "Things I've built",
      subtitle: "A selection of projects I've worked on. Each one taught me something new.",
      featured: 'Featured Project',
      sourceCode: 'Source Code',
      liveDemo: 'Live Demo',
      otherTitle: 'Other Noteworthy Projects',
      featuredItems: [
        {
          title: 'Wilson POS System',
          description: 'Professional management system for parking lots and car washes. React/Next.js/TypeScript frontend, Node.js/Express backend with SQLite, thermal tickets, cash closings, real-time dashboard and Electron desktop app.',
        },
        {
          title: 'Consolidado Bomba Web',
          description: 'Modern web system for billing management with dark theme, advanced reports with Excel/PDF export, Firebase Firestore for cloud storage and offline mode with localStorage.',
        },
        {
          title: 'Dollar USD/COP Prediction',
          description: 'Hybrid Machine Learning model with PyTorch to predict USD/COP exchange rate. Automatic data extraction, model training and result analysis with high accuracy.',
        },
      ],
      otherItems: [
        {
          title: 'Financial Rate Prediction',
          description: 'ML model for financial rate prediction with Docker for training and deployment, integrated simulator.',
        },
        {
          title: 'AI Agent',
          description: 'Intelligent agent developed in Python for task automation with artificial intelligence.',
        },
        {
          title: 'Payroll with Django',
          description: 'Payroll and employee management system built with Django, SQLite database and admin panel.',
        },
        {
          title: 'Station Payroll',
          description: 'Web application for rotating shift and gas station schedule management with automatic rotation logic.',
        },
        {
          title: 'My Schedule v2',
          description: 'Interactive calendar for work schedule visualization and management with JSON storage.',
        },
        {
          title: 'Rick & Morty App',
          description: 'Web application consuming the Rick and Morty API with filters, search and responsive design.',
        },
        {
          title: 'Wilson POS (Original)',
          description: 'First version of the Wilson POS system. Point of sale with inventory management, sales tracking and receipt generation.',
        },
        {
          title: 'Responsive Design',
          description: 'Responsive web design practice project with mobile-first approach and media queries.',
        },
        {
          title: 'Web Development',
          description: 'Web development exercises and practices covering HTML, CSS and JavaScript fundamentals.',
        },
        {
          title: 'Accounting System',
          description: 'Accounting management system for tracking financial records and generating reports.',
        },
        {
          title: 'My Schedule',
          description: 'Original schedule management application for organizing and tracking work shifts.',
        },
        {
          title: 'Drop Page',
          description: 'E-commerce landing page for a dropshipping business with product showcase and modern UI.',
        },
        {
          title: 'Rick & Morty Explorer',
          description: 'Character explorer app using the Rick and Morty public API with search and filtering.',
        },
        {
          title: 'K&S Project',
          description: 'Initial project setup and configuration for K&S web application.',
        },
        {
          title: 'CEO Project',
          description: 'Web project created as part of early development learning and experimentation.',
        },
      ],
    },

    // Blog
    blog: {
      sectionLabel: 'Blog',
      title: 'Writing & thoughts',
      subtitle: 'I write about software engineering, web development, and things I learn along the way.',
      viewAll: 'View all articles',
      posts: [
        {
          title: 'Building Scalable React Applications: Patterns I Use Daily',
          excerpt: 'A deep dive into component patterns, state management strategies, and architectural decisions that keep large React codebases maintainable.',
          readTime: '8 min read',
        },
        {
          title: 'Understanding Big O Notation: A Practical Guide',
          excerpt: "Forget the academic jargon. Here's how I actually think about algorithm complexity when writing production code.",
          readTime: '6 min read',
        },
        {
          title: 'From Zero to Deploy: My Next.js + Vercel Workflow',
          excerpt: 'The complete workflow I use to go from idea to production — including project setup, CI/CD, environment management, and monitoring.',
          readTime: '10 min read',
        },
      ],
    },

    // Contact
    contact: {
      sectionLabel: 'Contact',
      title: "Let's work together",
      subtitle: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
      sayHello: 'Say Hello',
    },

    // Footer
    footer: {
      builtWith: 'Built with',
      using: 'using Next.js & Tailwind',
      rights: 'All rights reserved.',
    },
  },

  es: {
    // Header
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      blog: 'Blog',
      contact: 'Contacto',
      resume: 'CV',
    },

    // Hero
    hero: {
      roles: ['Desarrollador Full Stack', 'Ingeniero de Sistemas', 'Python & IA Entusiasta', 'Constructor de Soluciones'],
      available: 'Disponible para nuevas oportunidades',
      heading: ['Construyo ', 'experiencias', 'digitales', ' que', 'importan.'],
      description: 'Construyendo soluciones reales de negocio — desde sistemas POS hasta modelos de predicción con ML.',
      specializing: 'Especializado en',
      and: ', y',
      location: 'Basado en Colombia',
      viewProjects: 'Ver Proyectos',
      getInTouch: 'Contáctame',
      scroll: 'Scroll',
    },

    // About
    about: {
      sectionLabel: 'Sobre mí',
      title: 'Un poco sobre mí',
      bio: [
        'Soy Ingeniero de Sistemas apasionado por construir soluciones de software que resuelven problemas reales. Desde sistemas POS para negocios hasta modelos de predicción financiera con inteligencia artificial.',
        'Mi enfoque combina desarrollo Full Stack con TypeScript/React y Python, junto con experiencia en Machine Learning para crear aplicaciones completas end-to-end.',
        'Me motiva automatizar procesos, construir interfaces modernas y explorar el potencial de la IA aplicada a datos financieros.',
      ],
      downloadResume: 'Descargar CV',
      skills: {
        frontend: 'Frontend',
        backend: 'Backend',
        dataAi: 'Datos & IA',
        dbTools: 'Bases de Datos & Herramientas',
      },
    },

    // Experience
    experience: {
      sectionLabel: 'Experiencia',
      title: 'Dónde he trabajado',
      items: [
        {
          role: 'Desarrollador Full Stack',
          company: 'Freelance / Proyectos Propios',
          period: '2024 — Presente',
          description: 'Desarrollo de sistemas POS profesionales con React/Next.js/TypeScript, sistemas de gestión de cobros con Firebase, y modelos de predicción financiera con Python y PyTorch.',
        },
        {
          role: 'Ingeniero de Sistemas',
          company: 'Wilson Cars & Wash',
          period: '2024 — 2025',
          description: 'Diseñé y desarrollé un sistema POS completo para parqueaderos y lavaderos: ingreso/egreso automatizado, cierres de caja, tickets térmicos, dashboard con reportes en tiempo real y app de escritorio con Electron.',
        },
        {
          role: 'Desarrollador Python & Data Scientist',
          company: 'Proyectos de Investigación',
          period: '2023 — 2024',
          description: 'Creación de modelos híbridos de predicción para el dólar USD/COP y tasas financieras usando PyTorch, con containerización Docker para entrenamiento y despliegue.',
        },
      ],
    },

    // Projects
    projects: {
      sectionLabel: 'Proyectos',
      title: 'Lo que he construido',
      subtitle: 'Una selección de proyectos en los que he trabajado. Cada uno me enseñó algo nuevo.',
      featured: 'Proyecto Destacado',
      sourceCode: 'Código Fuente',
      liveDemo: 'Demo en Vivo',
      otherTitle: 'Otros Proyectos Notables',
      featuredItems: [
        {
          title: 'Wilson POS System',
          description: 'Sistema profesional de gestión para parqueaderos y lavaderos. Frontend React/Next.js con TypeScript, backend Node.js/Express con SQLite, tickets térmicos, cierres de caja, dashboard con reportes en tiempo real y app Electron.',
        },
        {
          title: 'Consolidado Bomba Web',
          description: 'Sistema web moderno para gestión de cobros con tema oscuro, reportes avanzados con exportación a Excel/PDF, Firebase Firestore para almacenamiento en la nube y modo offline con localStorage.',
        },
        {
          title: 'Predicción Dólar USD/COP',
          description: 'Modelo híbrido de Machine Learning con PyTorch para predecir la tasa de cambio del dólar USD/COP. Extracción automática de datos, entrenamiento de modelos y análisis de resultados con alta precisión.',
        },
      ],
      otherItems: [
        {
          title: 'Predicción Tasas Financieras',
          description: 'Modelo ML para predicción de tasas financieras con Docker para entrenamiento y despliegue, simulador integrado.',
        },
        {
          title: 'Agente IA',
          description: 'Agente inteligente desarrollado en Python para automatización de tareas con inteligencia artificial.',
        },
        {
          title: 'Nómina con Django',
          description: 'Sistema de gestión de nómina y empleados construido con Django, base de datos SQLite y panel de administración.',
        },
        {
          title: 'Nómina Estación',
          description: 'Aplicación web para gestión de turnos rotativos y horarios de estación de servicio con lógica de rotación automática.',
        },
        {
          title: 'Mi Horario v2',
          description: 'Calendario interactivo para visualización y gestión de horarios laborales con almacenamiento en JSON.',
        },
        {
          title: 'Rick & Morty App',
          description: 'Aplicación web consumiendo la API de Rick and Morty con filtros, búsqueda y diseño responsivo.',
        },
        {
          title: 'Wilson POS (Original)',
          description: 'Primera versión del sistema Wilson POS. Punto de venta con gestión de inventario, seguimiento de ventas y generación de recibos.',
        },
        {
          title: 'Diseño Responsivo',
          description: 'Proyecto de práctica de diseño web responsivo con enfoque mobile-first y media queries.',
        },
        {
          title: 'Desarrollo Web',
          description: 'Ejercicios y prácticas de desarrollo web cubriendo fundamentos de HTML, CSS y JavaScript.',
        },
        {
          title: 'Sistema Contable',
          description: 'Sistema de gestión contable para seguimiento de registros financieros y generación de reportes.',
        },
        {
          title: 'Mi Horario',
          description: 'Aplicación original de gestión de horarios para organizar y hacer seguimiento de turnos laborales.',
        },
        {
          title: 'Página Drop',
          description: 'Landing page de e-commerce para negocio de dropshipping con exhibición de productos y UI moderna.',
        },
        {
          title: 'Rick & Morty Explorer',
          description: 'App exploradora de personajes usando la API pública de Rick and Morty con búsqueda y filtrado.',
        },
        {
          title: 'Proyecto K&S',
          description: 'Configuración inicial del proyecto para aplicación web K&S.',
        },
        {
          title: 'Proyecto CEO',
          description: 'Proyecto web creado como parte del aprendizaje temprano de desarrollo y experimentación.',
        },
      ],
    },

    // Blog
    blog: {
      sectionLabel: 'Blog',
      title: 'Escritos & pensamientos',
      subtitle: 'Escribo sobre ingeniería de software, desarrollo web y cosas que aprendo en el camino.',
      viewAll: 'Ver todos los artículos',
      posts: [
        {
          title: 'Construyendo Aplicaciones React Escalables: Patrones del Día a Día',
          excerpt: 'Un análisis profundo de patrones de componentes, estrategias de estado y decisiones arquitectónicas que mantienen grandes bases de código mantenibles.',
          readTime: '8 min lectura',
        },
        {
          title: 'Entendiendo Big O: Una Guía Práctica',
          excerpt: 'Olvida la jerga académica. Así es como realmente pienso sobre la complejidad algorítmica al escribir código en producción.',
          readTime: '6 min lectura',
        },
        {
          title: 'De Cero a Deploy: Mi Workflow con Next.js + Vercel',
          excerpt: 'El flujo completo que uso para ir de idea a producción — incluyendo setup, CI/CD, variables de entorno y monitoreo.',
          readTime: '10 min lectura',
        },
      ],
    },

    // Contact
    contact: {
      sectionLabel: 'Contacto',
      title: 'Trabajemos juntos',
      subtitle: 'Siempre estoy interesado en conocer nuevos proyectos y oportunidades. Si tienes una pregunta o solo quieres saludar, mi bandeja siempre está abierta.',
      sayHello: 'Saluda',
    },

    // Footer
    footer: {
      builtWith: 'Hecho con',
      using: 'usando Next.js & Tailwind',
      rights: 'Todos los derechos reservados.',
    },
  },
} as const

export type Translations = typeof translations['en']
