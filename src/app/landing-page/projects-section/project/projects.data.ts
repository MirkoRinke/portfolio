export interface Project {
  id: number;
  title: string;
  icon: string;
  visibility: boolean;
  about: string;
  description: string;
  keyFeatures: keyFeatures[];
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
      'Tauchen Sie ein in die aufregende Welt von El Pollo Loco, einem fesselnden Jump&Run-Abenteuer mit einer Prise mexikanischen Flairs. In diesem objektorientierten Spiel schlüpfen Sie in die Rolle von Pepe, einem mutigen Helden mit einer besonderen Mission.',
    keyFeatures: [
      {
        title: 'Gameplay',
        description:
          'Erlebe ein spannendes Spielerlebnis mit Spring-, Lauf- und Wurfmechaniken. Das Spiel bietet die Elemente eines Sidescrollers, bei dem Geschick und Timing gefragt sind.',
      },
      {
        title: 'Feinde',
        description:
          'Begegne Feinden mit einzigartigen Verhaltensweisen und Angriffsmustern, die deine Strategie fordern und anpassen lassen.',
      },
      {
        title: 'Münzsammlung',
        description:
          'Sammle Münzen in den Levels, um sie gegen zusätzliche Tabasco-Salsa an Verkaufsautomaten einzutauschen.',
      },
      {
        title: 'Verkaufsautomat',
        description:
          'Nutze gesammelte Münzen an Verkaufsautomaten, um wichtige Gegenstände wie Tabasco-Salsa zu erwerben.',
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
          'Geben Sie Ihren Namen ein und erhalten Sie ein einzigartiges Pokémon aus einer Liste von 1.025 Pokémon zugewiesen.',
      },
      {
        title: 'Tastaturnavigation',
        description:
          'Navigieren Sie die gesamte Website mit der Tastatur für eine verbesserte Benutzererfahrung.',
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
    about:
      'Ein strukturiertes und kontinuierlich wachsendes Repository meiner Projekte.',
    description:
      'Dieses Portfolio zeigt meine laufenden Arbeiten und Projekte. Es umfasst einen Überblick über meine Fähigkeiten und Zertifikate, die meine kontinuierliche Weiterentwicklung im Bereich der Webentwicklung dokumentieren.',
    keyFeatures: [
      {
        title: 'Design ähnlich einem OS',
        description:
          'Fenster-ähnliches Design für verschiedene Sektionen und Elemente.',
      },
      {
        title: 'Meine Skills und Zertifikate',
        description:
          'Übersichtliche Darstellung meiner Skills und Zertifikate.',
      },
      {
        title: 'Darstellung meiner Projekte',
        description:
          'Browser-ähnliches Fenster mit Taps für meine Projekte. Sowie einer Tap für Projekte in Entwicklung.',
      },
      {
        title: 'Interaktive Benutzeroberfläche',
        description:
          'Interaktive Benutzeroberfläche Fenster können minimiert, maximiert und geschlossen werden.',
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
        title: 'Typescript',
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
      keyFeature: 'Kernfunktion',
    },
  },
  {
    id: 1,
    title: 'El Pollo Loco',
    icon: 'elPolloLoco',
    visibility: true,
    about: "Pepe's adventure against the crazy hen.",
    description:
      'Immerse yourself in the exciting world of El Pollo Loco, a captivating jump&run adventure with a touch of Mexican flair. In this object-oriented game, you take on the role of Pepe, a brave hero with a special mission.',
    keyFeatures: [
      {
        title: 'Gameplay',
        description:
          'Experience an exciting gaming adventure with jump, run, and throw mechanics. The game features sidescroller elements where skill and timing are essential.',
      },
      {
        title: 'Enemies',
        description:
          'Encounter enemies with unique behaviors and attack patterns that challenge and adapt your strategy.',
      },
      {
        title: 'Coin Collection',
        description:
          'Collect coins hidden throughout levels to exchange them for additional Tabasco sauce at vending machines.',
      },
      {
        title: 'Vending Machine',
        description:
          'Use collected coins at vending machines to acquire essential items like Tabasco sauce to strengthen your character.',
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
          'Enter your name to receive a unique Pokémon assigned to you from a list of 1,025 Pokémon.',
      },
      {
        title: 'Keyboard Navigation',
        description:
          'Navigate the entire website using the keyboard for an enhanced user experience.',
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
        title: 'Rest API',
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
    about: 'A structured and continuously growing repository of my projects.',
    description:
      'This portfolio showcases my ongoing work and projects. It provides an overview of my skills and certifications, which document my continuous development in the field of web development.',
    keyFeatures: [
      {
        title: 'OS-Like Design',
        description: 'Window-like design for various sections and elements.',
      },
      {
        title: 'My Skills and Certifications',
        description: 'Clear representation of my skills and certifications.',
      },
      {
        title: 'Project Showcase',
        description:
          'Browser-like window with tabs for my projects, including a tab for projects in development.',
      },
      {
        title: 'Interactive User Interface',
        description:
          'Interactive user interface where windows can be minimized, maximized, and closed.',
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
      name: 'CodeNex',
      link: 'https://github.com/CodeNex',
      icon: 'codeNex',
    },
    ariaLabels: {
      tap: 'Open In Development Tab',
      github: 'Open In Development GitHub Repository',
      live: 'Open In Development Live Version',
      organization: 'Open CodeNex GitHub Repository',
      keyFeature: 'Key Feature',
    },
  },
];
