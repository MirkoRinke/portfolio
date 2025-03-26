export interface Project {
  id: number;
  title: string;
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
    github: string;
    live: string;
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
  github: string;
  live: string;
}

export interface Organization {
  name: string;
  link: string;
  icon: string;
}

export const projectsDE: Project[] = [
  {
    id: 0,
    title: 'Join',
    icon: 'join',
    visibility: true,
    about:
      'Verwalten Sie Ihre Projekte mühelos mit einem benutzerfreundlichen Task-Manager, der vom Kanban-System inspiriert ist.',
    description:
      'Das Tool bietet eine intuitive Benutzeroberfläche, mit der Sie Aufgaben erstellen, organisieren und zwischen Spalten mit einfacher Drag-and-Drop-Funktionalität verschieben können.',
    keyFeatures: [
      {
        title: 'Klare Struktur',
        description:
          'Arbeiten Sie mit vordefinierten Boards und Spalten, die einen klaren Überblick über Ihre Aufgaben und Workflows bieten.',
      },
      {
        title: 'Teamzusammenarbeit',
        description:
          'Weisen Sie Aufgaben Teammitgliedern zu, um Verantwortlichkeiten klar zu definieren und halten Sie alle auf dem gleichen Stand.',
      },
      {
        title: 'Einfaches Management',
        description:
          'Verschieben Sie Aufgaben nahtlos zwischen Spalten wie "To-Do", "In Progress" und "Done" mit nur einem Klick.',
      },
      {
        title: 'Optimierte Workflows',
        description:
          'Verfolgen Sie den Fortschritt in Echtzeit, bleiben Sie auf dem Laufenden über Fristen und steigern Sie die Produktivität des Teams.',
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
      github: 'https://github.com/MirkoRinke/Developer-Akademie-Join',
      live: 'https://join.mirkorinke.dev',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne Join Tab',
      github: 'Öffne Join GitHub Repository',
      live: 'Öffne Join Live Version',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
  {
    id: 1,
    title: 'El Pollo Loco',
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
      github: 'https://github.com/MirkoRinke/Developer-Akademie-el-pollo-loco',
      live: 'https://el-pollo-loco.mirkorinke.dev',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne El Pollo Loco Tab',
      github: 'Öffne El Pollo Loco GitHub Repository',
      live: 'Öffne El Pollo Loco Live Version',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
  {
    id: 2,
    title: 'Pokédex',
    icon: 'pokedex',
    visibility: true,
    about: 'Entdecken Sie die Welt der Pokémon mit einem interaktiven Pokédex!',
    description:
      'Erkunde ein faszinierendes Universum voller einzigartiger Kreaturen mit dieser Pokédex-Anwendung! Sie ermöglicht dir, die vielfältige Welt der Pokémon zu entdecken. Dank aktueller Daten aus einer externen API kannst du schnell nach deinen Lieblings-Pokémon suchen und umfassende Informationen wie Statistiken, Fähigkeiten und Typen abrufen.',
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
      github: 'https://github.com/MirkoRinke/Developer-Akademie-pokedex',
      live: 'https://pokedex.mirkorinke.dev',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne Pokédex Tab',
      github: 'Öffne Pokédex GitHub Repository',
      live: 'Öffne Pokédex Live Version',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
  {
    id: 3,
    title: 'In Development',
    icon: 'inDevelopment',
    visibility: true,
    about: 'Meine digitale Visitenkarte als interaktive Desktop-Erfahrung.',
    description:
      'Mein persönliches Portfolio, entwickelt mit Angular und TypeScript. Es präsentiert meine Projekte in einem einzigartigen, betriebssystem ähnlichen Interface mit interaktiven Fenstern und ermöglicht den Zugriff auf meine Fähigkeiten und Zertifikate in einer übersichtlichen Darstellung.',
    keyFeatures: [
      {
        title: 'Design ähnlich einem OS',
        description:
          'Desktop-inspiriertes Interface mit Fenstern, Icons und Navigationsleiste, das ein Betriebssystem simuliert.',
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
          'Dynamisches Interface mit Fenstern, die minimiert, maximiert und geschlossen werden können, für eine intuitive Navigation.',
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
        title: 'TypeScript',
        icon: 'typeScript',
      },
      {
        title: 'Angular',
        icon: 'angular',
      },
      {
        title: 'Figma',
        icon: 'figma',
      },
    ],
    imagePath: './projects/in-development.webp',
    links: {
      github: 'https://github.com/MirkoRinke/',
      live: 'https://mirkorinke.dev',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne In Development Tab',
      github: 'Öffne In Development GitHub Repository',
      live: 'Öffne In Development Live Version',
      organization: '',
      keyFeature: 'Kernfunktion',
    },
  },
];

export const projectsEN: Project[] = [
  {
    id: 0,
    title: 'Join',
    icon: 'join',
    visibility: true,
    about:
      'Effortlessly manage your projects with a user-friendly task manager inspired by the Kanban system.',
    description:
      'The tool offers an intuitive interface, allowing you to create, organize, and move tasks between columns with simple drag-and-drop functionality.',
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
        title: 'Optimized Workflows',
        description:
          'Track progress in real-time, stay updated on deadlines, and boost team productivity.',
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
      github: 'https://github.com/MirkoRinke/Developer-Akademie-Join',
      live: 'https://join.mirkorinke.dev',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open Join Tab',
      github: 'Open Join GitHub Repository',
      live: 'Open Join Live Version',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
  {
    id: 1,
    title: 'El Pollo Loco',
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
      github: 'https://github.com/MirkoRinke/Developer-Akademie-el-pollo-loco',
      live: 'https://el-pollo-loco.mirkorinke.dev',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open El Pollo Loco Tab',
      github: 'Open El Pollo Loco GitHub Repository',
      live: 'Open El Pollo Loco Live Version',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
  {
    id: 2,
    title: 'Pokédex',
    icon: 'pokedex',
    visibility: true,
    about: 'Discover the world of Pokémon with an interactive Pokédex!',
    description:
      'Explore a fascinating universe filled with unique creatures with this Pokédex application! It allows you to discover the diverse world of Pokémon. Thanks to current data from an external API, you can quickly search for your favorite Pokémon and retrieve comprehensive information such as statistics, abilities, and types.',
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
          'Navigate the entire website with the keyboard, increasing accessibility and making the application more accessible to all users.',
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
      github: 'https://github.com/MirkoRinke/Developer-Akademie-pokedex',
      live: 'https://pokedex.mirkorinke.dev',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open Pokédex Tab',
      github: 'Open Pokédex GitHub Repository',
      live: 'Open Pokédex Live Version',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
  {
    id: 3,
    title: 'In Development',
    icon: 'inDevelopment',
    visibility: true,
    about: 'My digital business card as an interactive desktop experience.',
    description:
      'My personal portfolio, developed with Angular and TypeScript. It showcases my projects in a unique, operating system-like interface with interactive windows and provides access to my skills and certificates in a clear representation.',
    keyFeatures: [
      {
        title: 'OS-like Design',
        description:
          'Desktop-inspired interface with windows, icons, and a navigation bar simulating an operating system.',
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
          'Dynamic interface with windows that can be minimized, maximized, and closed for intuitive navigation.',
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
        title: 'TypeScript',
        icon: 'typeScript',
      },
      {
        title: 'Angular',
        icon: 'angular',
      },
      {
        title: 'Figma',
        icon: 'figma',
      },
    ],
    imagePath: './projects/in-development.webp',
    links: {
      github: 'https://github.com/MirkoRinke/',
      live: 'https://mirkorinke.dev',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open In Development Tab',
      github: 'Open In Development GitHub Repository',
      live: 'Open In Development Live Version',
      organization: '',
      keyFeature: 'Key Feature',
    },
  },
];
