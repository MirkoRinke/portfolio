/**
 * @fileoverview This file defines the Project interface and related types used to represent project data in the application.
 */

/**
 * Interface representing a project entity.
 * @interface Project
 *
 * @property {number} id - Unique identifier for the project
 * @property {string} name - Name of the project
 * @property {boolean} visibility - Flag indicating if project is visible/public
 * @property {string} about - Brief description about the project
 * @property {string} description - Detailed description of the project
 * @property {Technology[]} technologies - Array of technologies used in the project
 * @property {string} imagePath - Path to the project's image asset
 * @property {Links} links - Object containing project-related links
 */
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

/**
 * Represents a programming technology or tool.
 * @interface Technology
 * @property {string} name - The name of the technology
 * @property {string} icon - The path or identifier for the technology's icon
 */
interface Technology {
  name: string;
  icon: string;
}

/**
 * Interface representing project links
 * @property {string} github - GitHub repository URL
 * @property {string} liveTest - Live demo URL
 */
interface Links {
  github: string;
  liveTest: string;
}

/**
 * Array of project data in English language
 * @type {Project[]}
 *
 * Each project object contains:
 * @property {number} id - Unique identifier for the project
 * @property {string} name - Name of the project
 * @property {boolean} visibility - Whether the project should be visible
 * @property {string} about - Brief description about what the project is
 * @property {string} description - Detailed description of the project
 * @property {Array<{name: string, icon: string}>} technologies - Technologies used in the project
 * @property {string} imagePath - Path to the project's image
 * @property {{github: string, liveTest: string}} links - Object containing project links
 * @property {string} links.github - GitHub repository URL
 * @property {string} links.liveTest - Live demo URL
 */
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

/**
 * Array of project data in German language
 * @type {Project[]}
 *
 * Each project object contains:
 * @property {number} id - Unique identifier for the project
 * @property {string} name - Name of the project
 * @property {boolean} visibility - Whether the project should be visible
 * @property {string} about - Short description about the project purpose
 * @property {string} description - Detailed description of the project
 * @property {Array<{name: string, icon: string}>} technologies - Array of technologies used in the project
 * @property {string} imagePath - Path to the project's image
 * @property {{github: string, liveTest: string}} links - Object containing project URLs
 * @property {string} links.github - GitHub repository URL
 * @property {string} links.liveTest - Live demo URL
 */
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
