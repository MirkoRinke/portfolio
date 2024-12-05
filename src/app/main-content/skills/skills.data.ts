/**
 * @fileoverview This file defines the Skill interface and an array of technical skills used in the application.
 */

/**
 * Represents a skill with metadata, including its identifier, name, icon, and alternative text.
 */
export interface Skill {
  /**
   * The unique identifier for the skill.
   */
  id: number;

  /**
   * The name of the skill.
   */
  name: string;

  /**
   * The file path or URL to the icon representing the skill.
   */
  icon: string;

  /**
   * The alternative text for the skill's icon, used for accessibility purposes.
   */
  alt: string;
}

/**
 * An array of technical skills used in the application.
 * Each skill is represented by an object containing the following properties:
 *
 * @property {number} id - The unique identifier for the skill.
 * @property {string} name - The name of the skill.
 * @property {string} icon - The icon representing the skill.
 * @property {string} alt - The alternative text for the skill icon.
 */
export const TECH_SKILLS: Skill[] = [
  {
    id: 0,
    name: 'HTML',
    icon: 'HTML',
    alt: 'HTML Logo',
  },
  {
    id: 1,
    name: 'CSS',
    icon: 'CSS',
    alt: 'CSS Logo',
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: 'JavaScript',
    alt: 'JavaScript Logo',
  },
  {
    id: 3,
    name: 'Material Design',
    icon: 'MaterialDesign',
    alt: 'Material Design Logo',
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: 'TypeScript',
    alt: 'TypeScript Logo',
  },
  {
    id: 5,
    name: 'Angular',
    icon: 'Angular',
    alt: 'Angular Logo',
  },
  {
    id: 6,
    name: 'Firebase',
    icon: 'Firebase',
    alt: 'Firebase Logo',
  },
  {
    id: 7,
    name: 'GIT',
    icon: 'GIT',
    alt: 'GIT Logo',
  },
  {
    id: 8,
    name: 'REST API',
    icon: 'API',
    alt: 'REST API Logo',
  },
  {
    id: 9,
    name: 'Scrum',
    icon: 'Scrum',
    alt: 'Scrum Logo',
  },
  {
    id: 10,
    name: 'Growth Mindset',
    icon: 'GrowthMindset',
    alt: 'Growth Mindset Logo',
  },
];

/**
 * An array of learning skills.
 * Each skill object contains the following properties:
 * - `id`: A unique identifier for the skill.
 * - `name`: The name of the skill.
 * - `icon`: The icon representing the skill.
 * - `alt`: The alternative text for the skill icon.
 */
export const LEARNING_SKILLS: Skill[] = [
  {
    id: 0,
    name: 'React',
    icon: 'React',
    alt: 'React Logo',
  },
  {
    id: 1,
    name: 'Vue Js',
    icon: 'Vue',
    alt: 'Vue Js Logo',
  },
];
