/**
 * @fileoverview This file defines the structure for navigation text content and provides translations for German and English.
 */

/**
 * Represents a collection of textual elements used in different sections of a website or application.
 */
export interface Texts {
  /**
   * The text for the "Home" section, typically used as a welcome message or introduction.
   */
  home: string;

  /**
   * The text for the "About Me" section, usually describing personal background or biography.
   */
  aboutMe: string;

  /**
   * The text for the "Skills" section, outlining the abilities and expertise.
   */
  skills: string;

  /**
   * The text for the "Projects" section, typically describing past or current projects.
   */
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
  home: 'Startseite',
  aboutMe: 'Über mich',
  skills: 'Skills',
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
  home: 'Home',
  aboutMe: 'About me',
  skills: 'Skills',
  projects: 'Projects',
};
