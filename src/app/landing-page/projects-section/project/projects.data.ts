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
    id: 4,
    title: 'DevNotes',
    tapTitle: 'In Development',
    icon: 'inDevelopment',
    visibility: true,
    about:
      'Ein vielseitiges Notizen-Portal für Entwickler, um Wissen, Code-Snippets und Ressourcen einfach zu organisieren und zu teilen.',
    description:
      'Das Tool bietet eine übersichtliche, benutzerfreundliche Oberfläche zum Anlegen privater und öffentlicher Notizen. Öffentliche Notizen können kommentiert und mit anderen Entwicklern diskutiert werden.',
    keyFeatures: [
      {
        title: 'Klare Struktur',
        description:
          'Organisiere deine Entwicklernotizen mit öffentlichen und privaten Einträgen. Dank Versionierung behältst du jederzeit den Überblick.',
      },
      {
        title: 'Effizientes Meldesystem',
        description:
          'Meldefunktionen für Posts, Kommentare und Profile erlauben Nutzern, problematische Inhalte direkt zu melden.',
      },
      {
        title: 'Zusammenarbeit & Community',
        description:
          'Kommentiere und like öffentliche Notizen anderer Entwickler, folge spannenden Nutzern und diskutiere spezifische Themen.',
      },
      {
        title: 'Sicherheit & Datenschutz',
        description:
          'Die Authentifizierung erfolgt über Sanctum mit E-Mail-Verifizierung. Öffentliche Inhalte sind ohne Login zugänglich, während private Notizen nur für den Ersteller sichtbar sind.',
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
      github: 'https://github.com/MirkoRinke/',
      live: '',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Öffne DevNotes Tab',
      github: 'Öffne DevNotes GitHub Repository',
      live: 'Öffne DevNotes Live Version',
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
      'Das Design orientiert sich an einem Betriebssystem und ermöglicht eine intuitive Erkundung meiner Projekte, Fähigkeiten und Zertifikate.',
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
      tap: 'Öffne Mein Portfolio Tab',
      github: 'Öffne Mein Portfolio GitHub Repository',
      live: 'Öffne Mein Portfolio Live Version',
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
      'Das Tool bietet eine einfach zu bedienende Oberfläche, mit der Sie Aufgaben erstellen, organisieren und zwischen Spalten mit einfacher Drag-and-Drop-Funktionalität verschieben können.',
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
        title: 'Übersichtliche Workflows',
        description:
          'Behalten Sie den Überblick über Fortschritte und Fristen und verbessern Sie die Zusammenarbeit im Team.',
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
      'The tool offers a clear, user-friendly interface for creating private and public notes. Public notes can be commented on and discussed with other developers.',
    keyFeatures: [
      {
        title: 'Clear Structure',
        description:
          'Organize your developer notes with public and private entries. Versioning ensures you always have an overview.',
      },
      {
        title: 'Efficient Reporting System',
        description:
          'Reporting functions for posts, comments, and profiles allow users to report problematic content directly.',
      },
      {
        title: 'Collaboration & Community',
        description:
          'Comment and like public notes from other developers, follow interesting users, and discuss specific topics.',
      },
      {
        title: 'Security & Privacy',
        description:
          'Authentication is securely handled via Sanctum with email verification. Public content is accessible without login, while private notes are only visible to the creator.',
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
      github: 'https://github.com/MirkoRinke/',
      live: '',
    },
    organization: {
      name: '',
      link: '',
      icon: '',
    },
    ariaLabels: {
      tap: 'Open DevNotes Tab',
      github: 'Open DevNotes GitHub Repository',
      live: 'Open DevNotes Live Version',
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
      'The design is inspired by an operating system and allows for intuitive exploration of my projects, skills, and certificates.',
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
      tap: 'Open My Portfolio Tab',
      github: 'Open My Portfolio GitHub Repository',
      live: 'Open My Portfolio Live Version',
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
        title: 'Clear Workflows',
        description:
          'Keep track of progress and deadlines and improve collaboration within the team.',
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
    tapTitle: 'El Pollo Loco',
    icon: 'elPolloLoco',
    visibility: false,
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
];
