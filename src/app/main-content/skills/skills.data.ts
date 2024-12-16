/**
 * @fileoverview This file defines the Skill interface and an array of technical skills used in the application.
 */

/**
 * Represents a skill with metadata, including its name, icon, alternative text and visibility.
 */
export interface Skill {
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

  /**
   * The visibility of the skill
   *
   */
  visibility: boolean;
}

/**
 * An array of technical skills used in the application.
 * Each skill is represented by an object containing the following properties:
 *
 * @property {string} name - The name of the skill.
 * @property {string} icon - The icon representing the skill.
 * @property {string} alt - The alternative text for the skill icon.
 * @property {boolean} visibility - The visibility of the skill.
 */
export const TECH_SKILLS: Skill[] = [
  {
    name: 'HTML',
    icon: 'HTML',
    alt: 'HTML Logo',
    visibility: true,
  },
  {
    name: 'CSS',
    icon: 'CSS',
    alt: 'CSS Logo',
    visibility: false,
  },
  {
    name: 'SCSS',
    icon: 'SCSS',
    alt: 'SCSS Logo',
    visibility: true,
  },
  {
    name: 'Material Design',
    icon: 'materialDesign',
    alt: 'Material Design Logo',
    visibility: false,
  },
  {
    name: 'JavaScript',
    icon: 'javaScript',
    alt: 'JavaScript Logo',
    visibility: false,
  },
  {
    name: 'TypeScript',
    icon: 'typeScript',
    alt: 'TypeScript Logo',
    visibility: true,
  },
  {
    name: 'Angular',
    icon: 'angular',
    alt: 'Angular Logo',
    visibility: true,
  },
  {
    name: 'Firebase',
    icon: 'firebase',
    alt: 'Firebase Logo',
    visibility: false,
  },
  {
    name: 'GIT',
    icon: 'GIT',
    alt: 'GIT Logo',
    visibility: true,
  },
  {
    name: 'REST API',
    icon: 'API',
    alt: 'REST API Logo',
    visibility: true,
  },
  {
    name: 'Docker',
    icon: 'docker',
    alt: 'Docker Logo',
    visibility: true,
  },
  {
    name: 'Node js',
    icon: 'node',
    alt: 'node js Logo',
    visibility: true,
  },
  {
    name: 'PHP',
    icon: 'PHP',
    alt: 'PHP Logo',
    visibility: false,
  },
  {
    name: 'Figma',
    icon: 'figma',
    alt: 'Figma Logo',
    visibility: true,
  },
  {
    name: 'Growth Mindset',
    icon: 'growthMindset',
    alt: 'Growth Mindset Logo',
    visibility: true,
  },
];

/**
 * An array of learning skills used in the application.
 * Each skill is represented by an object containing the following properties:
 *
 * @property {string} name - The name of the skill.
 * @property {string} icon - The icon representing the skill.
 * @property {string} alt - The alternative text for the skill icon.
 * @property {boolean} visibility - The visibility of the skill.
 */
export const LEARNING_SKILLS: Skill[] = [
  {
    name: 'React',
    icon: 'react',
    alt: 'React Logo',
    visibility: true,
  },
  {
    name: 'Vue Js',
    icon: 'vue',
    alt: 'Vue Js Logo',
    visibility: true,
  },
];
