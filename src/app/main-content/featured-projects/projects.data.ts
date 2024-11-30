export interface Project {
  id: number;
  name: string;
  visibility: boolean;
  about: string;
  description: string;
  technologies: Technology[];
  imagePath: string;
  links: Links;
}

interface Technology {
  name: string;
  icon: string;
}

interface IconPaths {
  white: string;
  green: string;
}

interface Links {
  github: string;
  liveTest: string;
}

export const projectsEN: Project[] = [
  {
    id: 1,
    name: 'Join',
    visibility: true,
    about: 'What is this project about?',
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    technologies: [
      {
        name: 'JavaScript',
        icon: 'JavaScript',
      },
      {
        name: 'Firebase',
        icon: 'Firebase',
      },
      {
        name: 'HTML',
        icon: 'HTML',
      },
      {
        name: 'CSS',
        icon: 'CSS',
      },
    ],
    imagePath: './images/projects/join.jpg',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-Join',
      liveTest: 'https://example.com',
    },
  },
  {
    id: 2,
    name: 'El Pollo Loco',
    visibility: true,
    about: 'What is this project about?',
    description:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    technologies: [
      {
        name: 'JavaScript',
        icon: 'JavaScript',
      },
      {
        name: 'HTML',
        icon: 'HTML',
      },
      {
        name: 'CSS',
        icon: 'CSS',
      },
    ],
    imagePath: './images/projects/el-pollo-loco.jpg',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-el-pollo-loco',
      liveTest: 'https://example.com',
    },
  },
  {
    id: 3,
    name: 'Pokedex',
    visibility: true,
    about: 'What is this project about?',
    description:
      'Pokedex application to search for Pokemon and get detailed information about them. The data is fetched from an external API.',
    technologies: [
      {
        name: 'JavaScript',
        icon: 'JavaScript',
      },
      {
        name: 'HTML',
        icon: 'HTML',
      },
      {
        name: 'CSS',
        icon: 'CSS',
      },
      {
        name: 'Rest API',
        icon: 'API',
      },
    ],
    imagePath: './images/projects/pokedex.jpg',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-pokedex',
      liveTest: 'https://example.com',
    },
  },
];

export const projectsDE: Project[] = [
  {
    id: 1,
    name: 'Join',
    visibility: true,
    about: 'Worum geht es bei diesem Projekt?',
    description:
      'Task-Manager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
    technologies: [
      {
        name: 'JavaScript',
        icon: 'JavaScript',
      },
      {
        name: 'Firebase',
        icon: 'Firebase',
      },
      {
        name: 'HTML',
        icon: 'HTML',
      },
      {
        name: 'CSS',
        icon: 'CSS',
      },
    ],
    imagePath: './images/projects/join.jpg',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-Join',
      liveTest: 'https://example.com',
    },
  },
  {
    id: 2,
    name: 'El Pollo Loco',
    visibility: true,
    about: 'Worum geht es bei diesem Projekt?',
    description:
      'Jump-, Run- und Wurfspiel basierend auf einem objektorientierten Ansatz. Helfen Sie Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.',
    technologies: [
      {
        name: 'JavaScript',
        icon: 'JavaScript',
      },
      {
        name: 'HTML',
        icon: 'HTML',
      },
      {
        name: 'CSS',
        icon: 'CSS',
      },
    ],
    imagePath: './images/projects/el-pollo-loco.jpg',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-el-pollo-loco',
      liveTest: 'https://example.com',
    },
  },
  {
    id: 3,
    name: 'Pokedex',
    visibility: true,
    about: 'Worum geht es bei diesem Projekt?',
    description:
      'Pokedex-Anwendung zum Suchen nach Pokemon und Abrufen detaillierter Informationen über sie. Die Daten werden von einer externen API abgerufen.',
    technologies: [
      {
        name: 'JavaScript',
        icon: 'JavaScript',
      },
      {
        name: 'HTML',
        icon: 'HTML',
      },
      {
        name: 'CSS',
        icon: 'CSS',
      },
      {
        name: 'Rest API',
        icon: 'API',
      },
    ],
    imagePath: './images/projects/pokedex.jpg',
    links: {
      github: 'https://github.com/MirkoRinke/Developer-Akademie-pokedex',
      liveTest: 'https://example.com',
    },
  },
];
