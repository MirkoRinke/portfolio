export interface Project {
  id: number;
  title: string;
  visibility: boolean;
  about: string;
  description: string;
  keyFeatures: keyFeatures[];
  technologies: Technology[];
  imagePath: string;
  links: Links;
  ariaLabels: {
    tap: string;
  };
}

export interface keyFeatures {
  title: string;
  description: string;
}

export interface Technology {
  title: string;
  icon: string;
}

export interface Links {
  github: string;
  liveTest: string;
}

export const projectsEN: Project[] = [
  {
    id: 0,
    title: 'Join',
    visibility: true,
    about:
      'Effortlessly manage your projects with a user-friendly task manager inspired by the Kanban system.',
    description:
      'The tool offers an intuitive interface, allowing you to create, organize, and move tasks between columns with simple drag-and-drop functionality.',
    keyFeatures: [
      {
        title: 'Clear Structure',
        description:
          'Work with predefined boards and columns that provide a straightforward overview of your tasks and workflows.',
      },
      {
        title: 'Team Collaboration',
        description:
          'Assign tasks to team members to define responsibilities clearly.',
      },
      {
        title: 'Categorization and Prioritization',
        description:
          'Use categories and visual markers to sort tasks and set priorities.',
      },
      {
        title: 'Simple Management',
        description:
          'Move tasks seamlessly between phases like "To-Do," "In Progress," and "Done" with just one click.',
      },
      {
        title: 'Optimized Workflows',
        description:
          'Track progress in real-time, stay on top of deadlines, and boost team productivity.',
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
    ],
    imagePath: './projects/join.webp',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-Join',
      liveTest: 'https://join.mirkorinke.dev',
    },
    ariaLabels: {
      tap: 'Open Join Tab',
    },
  },
  {
    id: 1,
    title: 'El Pollo Loco',
    visibility: false,
    about: 'What is this project about?',
    description:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    keyFeatures: [
      {
        title: 'Gameplay',
        description: 'Jump, run and throw mechanics',
      },
      {
        title: 'Enemies',
        description: 'Various types of enemies with unique behaviors',
      },
      {
        title: 'Coin Collection',
        description: 'Collect coins throughout the levels',
      },
      {
        title: 'Vending Machine',
        description:
          'Use collected coins to buy additional tabasco salsa from vending machines',
      },
      {
        title: 'Boss Fight',
        description: 'Defeat the crazy hen in the end of the game',
      },
    ],
    technologies: [
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'CSS',
        icon: 'CSS',
      },
    ],
    imagePath: './projects/el-pollo-loco.webp',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-el-pollo-loco',
      liveTest: 'https://el-pollo-loco.mirkorinke.dev',
    },
    ariaLabels: {
      tap: 'Open El Pollo Loco Tab',
    },
  },
  {
    id: 2,
    title: 'Pokedex',
    visibility: false,
    about: 'What is this project about?',
    description:
      'Pokedex application to search for Pokemon and get detailed information about them. The data is fetched from an external API.',
    keyFeatures: [
      {
        title: 'Search Functionality',
        description: 'Search for Pokemon by name',
      },
      {
        title: 'Detailed Information',
        description:
          'Get detailed information about each Pokemon, including stats, abilities, and types',
      },
      {
        title: 'Name Assignment',
        description: 'Enter your name and get assigned a Pokemon',
      },
      {
        title: 'Keyboard Navigation',
        description: 'Control the entire site using the keyboard',
      },
      {
        title: 'Multilingual Support',
        description: 'The application supports multiple languages',
      },
    ],
    technologies: [
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'CSS',
        icon: 'CSS',
      },
      {
        title: 'Rest API',
        icon: 'API',
      },
    ],
    imagePath: './projects/pokedex.webp',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-pokedex',
      liveTest: 'https://pokedex.mirkorinke.dev',
    },
    ariaLabels: {
      tap: 'Open Pokedex Tab',
    },
  },
];

export const projectsDE: Project[] = [
  {
    id: 0,
    title: 'Join',
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
          'Weisen Sie Aufgaben Teammitgliedern zu, um Verantwortlichkeiten klar zu definieren.',
      },
      {
        title: 'Kategorisierung und Priorisierung',
        description:
          'Verwenden Sie Kategorien und visuelle Marker, um Aufgaben zu sortieren und Prioritäten festzulegen.',
      },
      {
        title: 'Einfaches Management',
        description:
          'Verschieben Sie Aufgaben nahtlos zwischen Phasen wie "To-Do", "In Progress" und "Done" mit nur einem Klick.',
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
    ],
    imagePath: './projects/join.webp',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-Join',
      liveTest: 'https://join.mirkorinke.dev',
    },
    ariaLabels: {
      tap: 'Öffne Join Tab',
    },
  },
  {
    id: 1,
    title: 'El Pollo Loco',
    visibility: false,
    about: 'Worum geht es in diesem Projekt?',
    description:
      'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
    keyFeatures: [
      {
        title: 'Gameplay',
        description: 'Spring-, Lauf- und Wurfmechaniken',
      },
      {
        title: 'Feinde',
        description:
          'Verschiedene Arten von Feinden mit einzigartigen Verhaltensweisen',
      },
      {
        title: 'Münzsammlung',
        description: 'Sammle Münzen in den Levels',
      },
      {
        title: 'Verkaufsautomat',
        description:
          'Verwende gesammelte Münzen, um zusätzliche Tabasco-Salsa aus Verkaufsautomaten zu kaufen',
      },
      {
        title: 'Bosskampf',
        description: 'Besiege das verrückte Huhn am Ende des Spiels',
      },
    ],
    technologies: [
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'CSS',
        icon: 'CSS',
      },
    ],
    imagePath: './projects/el-pollo-loco.webp',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-el-pollo-loco',
      liveTest: 'https://el-pollo-loco.mirkorinke.dev',
    },
    ariaLabels: {
      tap: 'Öffne El Pollo Loco Tab',
    },
  },
  {
    id: 2,
    title: 'Pokedex',
    visibility: false,
    about: 'Worum geht es in diesem Projekt?',
    description:
      'Pokedex-Anwendung zum Suchen nach Pokemon und Abrufen detaillierter Informationen über sie. Die Daten werden von einer externen API abgerufen.',
    keyFeatures: [
      {
        title: 'Suchfunktion',
        description: 'Suche nach Pokemon nach Namen',
      },
      {
        title: 'Detaillierte Informationen',
        description:
          'Abrufen detaillierter Informationen über jedes Pokemon, einschließlich Statistiken, Fähigkeiten und Typen',
      },
      {
        title: 'Namenszuweisung',
        description:
          'Geben Sie Ihren Namen ein und erhalten Sie ein zugewiesenes Pokemon',
      },
      {
        title: 'Tastaturnavigation',
        description: 'Steuern Sie die gesamte Website mit der Tastatur',
      },
      {
        title: 'Mehrsprachige Unterstützung',
        description: 'Die Anwendung unterstützt mehrere Sprachen',
      },
    ],
    technologies: [
      {
        title: 'JavaScript',
        icon: 'javaScript',
      },
      {
        title: 'HTML',
        icon: 'HTML',
      },
      {
        title: 'CSS',
        icon: 'CSS',
      },
      {
        title: 'Rest-API',
        icon: 'API',
      },
    ],
    imagePath: './projects/pokedex.webp',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-pokedex',
      liveTest: 'https://pokedex.mirkorinke.dev',
    },
    ariaLabels: {
      tap: 'Öffne Pokedex Tab',
    },
  },
];
