/**
 * Interface defining navigation text content structure.
 * Used to enforce consistent navigation labels across language versions.
 *
 * @interface Texts
 * @property {string} aboutMe - Text for About Me navigation link
 * @property {string} skills - Text for Skills navigation link
 * @property {string} projects - Text for Projects navigation link
 */
export interface Texts {
  aboutMe: string;
  skills: string;
  projects: string;
}

/**
 * German text translations for navigation labels.
 * Implements the Texts interface to ensure type safety.
 *
 * @constant textsDE
 * @type {Texts}
 */
export const textsDE: Texts = {
  aboutMe: 'Über mich',
  skills: 'Fähigkeiten',
  projects: 'Projekte',
};

/**
 * English text translations for navigation labels.
 * Implements the Texts interface to ensure type safety.
 *
 * @constant textsEN
 * @type {Texts}
 */
export const textsEN: Texts = {
  aboutMe: 'About me',
  skills: 'Skills',
  projects: 'Projects',
};
