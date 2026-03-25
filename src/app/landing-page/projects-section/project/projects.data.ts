export interface Project {
  id: number;
  title: string;
  tapTitle: string;
  icon: string;
  visibility: boolean;
  about: string;
  description: string;
  keyFeatures: KeyFeatures[];
  technologies: Technology[];
  imagePath: string;
  links: Links;
  organization: Organization;
  ariaLabels: {
    tap: string;
    githubFrontend: string;
    githubBackend: string;
    live: string;
    figma: string;
    organization: string;
    keyFeature: string;
  };
}

export interface KeyFeatures {
  title: string;
  description: string;
}

export interface Technology {
  title: string;
  icon: string;
}

export interface Links {
  githubFrontend: string;
  githubBackend: string;
  live: string;
  figma: string;
}

export interface Organization {
  name: string;
  link: string;
  icon: string;
}

export const projectsDE: Project[] = [
  {
    id: 4,
    title: 'DevNotes',
    tapTitle: 'In Development',
    icon: 'inDevelopment',
    visibility: true,
    about:
      'Ein vielseitiges Notizen-Portal für Entwickler, um Wissen, Code-Snippets und Ressourcen einfach zu organisieren und zu teilen.',
    description:
      'Erleben Sie ein modernes Full-Stack-Portal, das als „Second Brain“ für Entwickler fungiert. Organisieren Sie Code-Snippets und Wissen in einer sicheren Umgebung und tauschen Sie sich über öffentliche Beiträge mit der Community aus.',
    keyFeatures: [
      {
        title: 'Klare Struktur',
        description:
          'Verwalten Sie Ihre Notizen effizient mit privaten und öffentlichen Einträgen. Dank Versionierung behalten Sie jederzeit Zugriff auf frühere Stände.',
      },
      {
        title: 'Sicherheit & Datenschutz',
        description:
          'Sichere Authentifizierung via Laravel Sanctum. Externe Ressourcen werden erst nach Zustimmung geladen (Privacy-by-Design).',
      },
      {
        title: 'Zusammenarbeit & Community',
        description:
          'Interagieren Sie mit der Community durch Kommentare und Likes. Folgen Sie Profilen, um über neue Beiträge informiert zu bleiben.',
      },
      {
        title: 'Effizientes Meldesystem',
        description:
          'Integrierte Meldefunktionen für Posts und Profile ermöglichen es Nutzern, problematische Inhalte direkt an die Moderation zu senden.',
      },
    ],
    technologies: [
      {
        title: 'Angular',
        icon: 'angular',
      },
      {
        title: 'Laravel',
        icon: 'laravel',
      },
      {
        title: 'MySQL',
        icon: 'mysql',
      },
      {
        title: 'Figma',
        icon: 'figma',
      },
    ],
    imagePath: './projects/devnotes.webp',
    links: {
      githubFrontend: 'https://github.com/MirkoRinke/devnotes_frontend',
      githubBackend: 'https://github.com/MirkoRinke/devnotes',
      live: '',
      figma:
        'https://www.figma.com/design/uh5qiWkHHvvj4DlvcY3eZ1/Devnotes?node-id=2-2&t=7faYQgdmTXczPkLM-1',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne DevNotes Tab',
      githubFrontend: 'Öffne DevNotes GitHub Frontend Repository',
      githubBackend: 'Öffne DevNotes GitHub Backend Repository',
      live: 'Öffne DevNotes Live Version',
      figma: 'Öffne DevNotes Figma Design',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
  {
    id: 3,
    title: 'Mein Portfolio',
    tapTitle: 'Mein Portfolio',
    icon: 'myPortfolio',
    visibility: true,
    about: 'Mein Portfolio als interaktive Desktop-Umgebung.',
    description:
      'Erleben Sie mein Portfolio als interaktive Desktop-Umgebung. Das Design simuliert ein modernes Betriebssystem und ermöglicht eine intuitive Erkundung meiner Projekte, Fähigkeiten und Zertifikate durch ein modulares Fenstersystem.',
    keyFeatures: [
      {
        title: 'Design ähnlich einem OS',
        description:
          'Einzigartiges OS-Interface mit Fenstern, Icons und einer Taskleiste, das die Bedienung eines Desktop-Betriebssystems direkt im Browser simuliert.',
      },
      {
        title: 'Meine Skills und Zertifikate',
        description:
          'Darstellung meiner technischen Fähigkeiten sowie Zugriff auf eine separate Ansicht mit meinen erworbenen Zertifikaten.',
      },
      {
        title: 'Darstellung meiner Projekte',
        description:
          'Browser-ähnliches Fenster mit interaktiven Tabs für jeden Projektbereich und detaillierten Beschreibungen.',
      },
      {
        title: 'Interaktive Benutzeroberfläche',
        description:
          'Managen Sie Fenster dynamisch: Minimieren, maximieren oder schließen Sie diese für eine flüssige Navigation.',
      },
    ],
    technologies: [
      {
        title: 'Angular',
        icon: 'angular',
      },
      {
        title: 'Figma',
        icon: 'figma',
      },
    ],
    imagePath: './projects/portfolio.webp',
    links: {
      githubFrontend: 'https://github.com/MirkoRinke/portfolio',
      githubBackend: '',
      live: 'https://mirkorinke.dev',
      figma:
        'https://www.figma.com/design/MatiE7E1hTyhPByuGylS4K/Portfolio?node-id=0-1&t=iEW3AqQkgwJV8B4C-1',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne Mein Portfolio Tab',
      githubFrontend: 'Öffne Mein Portfolio GitHub Frontend Repository',
      githubBackend: 'Öffne Mein Portfolio GitHub Backend Repository',
      live: 'Öffne Mein Portfolio Live Version',
      figma: 'Öffne Mein Portfolio Figma Design',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
  {
    id: 2,
    title: 'Join',
    tapTitle: 'Join',
    icon: 'join',
    visibility: true,
    about:
      'Ein praktischer Task-Manager nach dem Kanban-Prinzip für die Organisation von Projekten.',
    description:
      'Dieses in enger Teamarbeit entwickelte Projekt bietet eine intuitive Oberfläche, um Aufgaben effizient zu organisieren. Nutzen Sie das Kanban-Prinzip, um Workflows im Team zu strukturieren und Fortschritte in Echtzeit zu verfolgen.',
    keyFeatures: [
      {
        title: 'Klare Struktur',
        description:
          'Arbeiten Sie mit vordefinierten Boards und Spalten, die einen klaren Überblick über Ihre Aufgaben und Workflows bieten.',
      },
      {
        title: 'Teamzusammenarbeit',
        description:
          'Koordinieren Sie Aufgaben im Team, definieren Sie klare Verantwortlichkeiten und halten Sie durch die zentrale Plattform alle Beteiligten stets auf dem gleichen Stand.',
      },
      {
        title: 'Einfaches Management',
        description:
          'Verschieben Sie Aufgaben nahtlos zwischen Spalten wie "To-Do", "In Progress" und "Done" mit nur einem Klick.',
      },
      {
        title: 'Übersichtliche Workflows',
        description:
          'Behalten Sie Fristen im Blick und optimieren Sie die Team-Kommunikation durch ein zentrales und übersichtliches Task-Board.',
      },
    ],
    technologies: [
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'SCSS',
        icon: 'SCSS',
      },
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
      {
        title: 'Firebase',
        icon: 'firebase',
      },
      {
        title: 'Teamwork',
        icon: 'teamwork',
      },
    ],
    imagePath: './projects/join.webp',
    links: {
      githubFrontend: 'https://github.com/MirkoRinke/Developer-Akademie-Join',
      githubBackend: '',
      live: 'https://join.mirkorinke.dev',
      figma: '',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne Join Tab',
      githubFrontend: 'Öffne Join GitHub Frontend Repository',
      githubBackend: 'Öffne Join GitHub Backend Repository',
      live: 'Öffne Join Live Version',
      figma: 'Öffne Join Figma Design',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
  {
    id: 1,
    title: 'El Pollo Loco',
    tapTitle: 'El Pollo Loco',
    icon: 'elPolloLoco',
    visibility: true,
    about: 'Pepes Abenteuer gegen das verrückte Huhn.',
    description:
      'El Pollo Loco ist ein einfaches Jump&Run-Spiel mit mexikanischem Thema. Das Projekt diente als Übung für objektorientierte Programmierung in JavaScript und enthält grundlegende Spielelemente wie Bewegung, Kollisionserkennung und einfache Gegner.',
    keyFeatures: [
      {
        title: 'Gameplay',
        description:
          'Das Spiel bietet grundlegende Spring-, Lauf- und Wurfmechaniken in einem klassischen Sidescroller-Format.',
      },
      {
        title: 'Feinde',
        description:
          'Einfache Gegnertypen mit grundlegenden Bewegungen, die dem Spieler Schaden zufügen können.',
      },
      {
        title: 'Ressourcenmanagement',
        description:
          'Sammle Münzen in der Spielwelt, um sie gegen Tabasco-Salsa einzutauschen.',
      },
      {
        title: 'Kampfsystem',
        description:
          'Bekämpfe Feinde mit Tabasco-Salsa als Wurfwaffe, wobei gutes Timing hilfreich ist.',
      },
    ],
    technologies: [
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'SCSS',
        icon: 'SCSS',
      },
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
    ],
    imagePath: './projects/el-pollo-loco.webp',
    links: {
      githubFrontend:
        'https://github.com/MirkoRinke/Developer-Akademie-el-pollo-loco',
      githubBackend: '',
      live: 'https://el-pollo-loco.mirkorinke.dev',
      figma: '',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne El Pollo Loco Tab',
      githubFrontend: 'Öffne El Pollo Loco GitHub Frontend Repository',
      githubBackend: 'Öffne El Pollo Loco GitHub Backend Repository',
      live: 'Öffne El Pollo Loco Live Version',
      figma: 'Öffne El Pollo Loco Figma Design',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
  {
    id: 0,
    title: 'Pokédex',
    tapTitle: 'Pokédex',
    icon: 'pokedex',
    visibility: true,
    about: 'Dein digitales Nachschlagewerk für alle Pokémon.',
    description:
      'Mit Daten aus einer externen API kannst du nach Pokémon suchen und Informationen wie Statistiken, Fähigkeiten und Typen abrufen. Eine virtuelle Version des aus der Serie bekannten Pokédex.',
    keyFeatures: [
      {
        title: 'Suchfunktion',
        description:
          'Verwenden Sie die Suchfunktion, um ein Pokémon anhand seines Namens aus einer Liste von 1.025 Pokémon zu finden.',
      },
      {
        title: 'Detaillierte Informationen',
        description:
          'Rufen Sie detaillierte Informationen über jedes Pokémon ab, einschließlich Statistiken, Fähigkeiten und Typen.',
      },
      {
        title: 'Namenszuweisung',
        description:
          'Ein spielerisches Feature, das basierend auf Ihrem Namen ein passendes Pokémon ermittelt und Ihnen als persönlichen Begleiter zuweist.',
      },
      {
        title: 'Tastaturnavigation',
        description:
          'Navigieren Sie die gesamte Website mit der Tastatur, was die Barrierefreiheit erhöht und die Anwendung für alle Nutzer zugänglicher macht.',
      },
    ],
    technologies: [
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'SCSS',
        icon: 'SCSS',
      },
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
      {
        title: 'Rest-API',
        icon: 'API',
      },
    ],
    imagePath: './projects/pokedex.webp',
    links: {
      githubFrontend:
        'https://github.com/MirkoRinke/Developer-Akademie-pokedex',
      githubBackend: '',
      live: 'https://pokedex.mirkorinke.dev',
      figma: '',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne Pokédex Tab',
      githubFrontend: 'Öffne Pokédex GitHub Frontend Repository',
      githubBackend: 'Öffne Pokédex GitHub Backend Repository',
      live: 'Öffne Pokédex Live Version',
      figma: 'Öffne Pokédex Figma Design',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
];

export const projectsEN: Project[] = [
  {
    id: 4,
    title: 'DevNotes',
    tapTitle: 'In Development',
    icon: 'inDevelopment',
    visibility: true,
    about:
      'A versatile notes portal for developers to easily organize and share knowledge, code snippets, and resources.',
    description:
      'Experience a modern full-stack portal designed as a "Second Brain" for developers. Organize code snippets and knowledge in a secure environment and engage with the community through public posts.',
    keyFeatures: [
      {
        title: 'Clear Structure',
        description:
          'Manage your notes efficiently with private and public entries. Integrated versioning ensures access to previous states at any time.',
      },
      {
        title: 'Security & Privacy',
        description:
          'Secure authentication via Laravel Sanctum. External resources are only loaded upon consent (Privacy-by-Design).',
      },
      {
        title: 'Collaboration & Community',
        description:
          'Interact with the community through comments and likes. Follow profiles to stay updated on new posts.',
      },
      {
        title: 'Efficient Reporting',
        description:
          'Integrated reporting functions for posts and profiles allow users to flag problematic content directly for moderation.',
      },
    ],
    technologies: [
      {
        title: 'Angular',
        icon: 'angular',
      },
      {
        title: 'Laravel',
        icon: 'laravel',
      },
      {
        title: 'MySQL',
        icon: 'mysql',
      },
      {
        title: 'Figma',
        icon: 'figma',
      },
    ],
    imagePath: './projects/devnotes.webp',
    links: {
      githubFrontend: 'https://github.com/MirkoRinke/devnotes_frontend',
      githubBackend: 'https://github.com/MirkoRinke/devnotes',
      live: '',
      figma:
        'https://www.figma.com/design/uh5qiWkHHvvj4DlvcY3eZ1/Devnotes?node-id=2-2&t=7faYQgdmTXczPkLM-1',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open DevNotes Tab',
      githubFrontend: 'Open DevNotes GitHub Frontend Repository',
      githubBackend: 'Open DevNotes GitHub Backend Repository',
      live: 'Open DevNotes Live Version',
      figma: 'Open DevNotes Figma Design',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
  {
    id: 3,
    title: 'My Portfolio',
    tapTitle: 'My Portfolio',
    icon: 'myPortfolio',
    visibility: true,
    about: 'My portfolio presented as an interactive desktop environment.',
    description:
      'Experience my portfolio as an interactive desktop environment. The design simulates a modern operating system and allows for intuitive exploration of my projects, skills, and certificates through a modular window system.',
    keyFeatures: [
      {
        title: 'OS-inspired Design',
        description:
          'A unique OS interface featuring windows, icons, and a taskbar that simulates a desktop operating system directly within your browser.',
      },
      {
        title: 'My Skills and Certificates',
        description:
          'Representation of my technical skills as well as access to a separate view with my acquired certificates.',
      },
      {
        title: 'Presentation of My Projects',
        description:
          'Browser-like window with interactive tabs for each project area and detailed descriptions.',
      },
      {
        title: 'Interactive User Interface',
        description:
          'Manage windows dynamically: minimize, maximize, or close them for smooth navigation.',
      },
    ],
    technologies: [
      {
        title: 'Angular',
        icon: 'angular',
      },
      {
        title: 'Figma',
        icon: 'figma',
      },
    ],
    imagePath: './projects/portfolio.webp',
    links: {
      githubFrontend: 'https://github.com/MirkoRinke/portfolio',
      githubBackend: '',
      live: 'https://mirkorinke.dev',
      figma:
        'https://www.figma.com/design/MatiE7E1hTyhPByuGylS4K/Portfolio?node-id=0-1&t=iEW3AqQkgwJV8B4C-1',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open My Portfolio Tab',
      githubFrontend: 'Open My Portfolio GitHub Frontend Repository',
      githubBackend: 'Open My Portfolio GitHub Backend Repository',
      live: 'Open My Portfolio Live Version',
      figma: 'Open My Portfolio Figma Design',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
  {
    id: 2,
    title: 'Join',
    tapTitle: 'Join',
    icon: 'join',
    visibility: true,
    about:
      'A practical task manager based on the Kanban principle for organizing projects.',
    description:
      'Developed through close teamwork, this project offers an intuitive interface for efficient task organization. Use the Kanban principle to structure team workflows and track progress in real-time.',
    keyFeatures: [
      {
        title: 'Clear Structure',
        description:
          'Work with predefined boards and columns that provide a clear overview of your tasks and workflows.',
      },
      {
        title: 'Team Collaboration',
        description:
          'Assign tasks to team members to clarify responsibilities and keep everyone on the same page.',
      },
      {
        title: 'Simple Management',
        description:
          'Seamlessly move tasks between columns like "To-Do," "In Progress," and "Done" with just one click.',
      },
      {
        title: 'Transparent Workflows',
        description:
          'Optimize workflows, keep track of deadlines, and simplify communication through the shared task board.',
      },
    ],
    technologies: [
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'SCSS',
        icon: 'SCSS',
      },
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
      {
        title: 'Firebase',
        icon: 'firebase',
      },
      {
        title: 'Teamwork',
        icon: 'teamwork',
      },
    ],
    imagePath: './projects/join.webp',
    links: {
      githubFrontend: 'https://github.com/MirkoRinke/Developer-Akademie-Join',
      githubBackend: '',
      live: 'https://join.mirkorinke.dev',
      figma: '',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open Join Tab',
      githubFrontend: 'Open Join GitHub Frontend Repository',
      githubBackend: 'Open Join GitHub Backend Repository',
      live: 'Open Join Live Version',
      figma: 'Open Join Figma Design',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
  {
    id: 1,
    title: 'El Pollo Loco',
    tapTitle: 'El Pollo Loco',
    icon: 'elPolloLoco',
    visibility: true,
    about: "Pepe's adventure against the crazy hen.",
    description:
      'El Pollo Loco is a simple Mexican-themed jump-and-run game. The project served as an exercise for object-oriented programming in JavaScript and includes basic game elements like movement, collision detection, and simple enemies.',
    keyFeatures: [
      {
        title: 'Gameplay',
        description:
          'The game offers basic jump, run, and throw mechanics in a classic sidescroller format.',
      },
      {
        title: 'Enemies',
        description:
          'Simple enemy types with basic movements that can damage the player.',
      },
      {
        title: 'Resource Management',
        description:
          'Collect coins in the game world to exchange them for Tabasco salsa.',
      },
      {
        title: 'Combat System',
        description:
          'Fight enemies with Tabasco salsa as a throwing weapon, with good timing being helpful.',
      },
    ],
    technologies: [
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'SCSS',
        icon: 'SCSS',
      },
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
    ],
    imagePath: './projects/el-pollo-loco.webp',
    links: {
      githubFrontend:
        'https://github.com/MirkoRinke/Developer-Akademie-el-pollo-loco',
      githubBackend: '',
      live: 'https://el-pollo-loco.mirkorinke.dev',
      figma: '',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open El Pollo Loco Tab',
      githubFrontend: 'Open El Pollo Loco GitHub Frontend Repository',
      githubBackend: 'Open El Pollo Loco GitHub Backend Repository',
      live: 'Open El Pollo Loco Live Version',
      figma: 'Open El Pollo Loco Figma Design',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
  {
    id: 0,
    title: 'Pokédex',
    tapTitle: 'Pokédex',
    icon: 'pokedex',
    visibility: true,
    about: 'Your digital reference for all Pokémon.',
    description:
      'With data from an external API, you can search for Pokémon and retrieve information such as statistics, abilities, and types. A virtual version of the Pokédex known from the series.',
    keyFeatures: [
      {
        title: 'Search Function',
        description:
          'Use the search function to find a Pokémon by its name from a list of 1,025 Pokémon.',
      },
      {
        title: 'Detailed Information',
        description:
          'Retrieve detailed information about each Pokémon, including stats, abilities, and types.',
      },
      {
        title: 'Name Assignment',
        description:
          'A playful feature that determines a suitable Pokémon based on your name and assigns it to you as a personal companion.',
      },
      {
        title: 'Keyboard Navigation',
        description:
          'Navigate the entire website using only your keyboard, making the application usable for people with different needs.',
      },
    ],
    technologies: [
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'SCSS',
        icon: 'SCSS',
      },
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
      {
        title: 'Rest-API',
        icon: 'API',
      },
    ],
    imagePath: './projects/pokedex.webp',
    links: {
      githubFrontend:
        'https://github.com/MirkoRinke/Developer-Akademie-pokedex',
      githubBackend: '',
      live: 'https://pokedex.mirkorinke.dev',
      figma: '',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open Pokédex Tab',
      githubFrontend: 'Open Pokédex GitHub Frontend Repository',
      githubBackend: 'Open Pokédex GitHub Backend Repository',
      live: 'Open Pokédex Live Version',
      figma: 'Open Pokédex Figma Design',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
];
