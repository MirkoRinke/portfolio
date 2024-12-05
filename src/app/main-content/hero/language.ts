/**
 * @fileoverview This file defines the structure and translations for text content in the hero section of the main content, in both German and English.
 */

/**
 * Represents a collection of textual elements used for headings and call-to-action sections.
 */
export interface Texts {
  /**
   * A subheading text typically used to introduce a section or topic.
   */
  subHeading: string;

  /**
   * The main heading text, often used as the primary title or attention-grabber.
   */
  mainHeading: string;

  /**
   * Text for a call-to-action prompting the user to view work or projects.
   */
  checkMyWork: string;

  /**
   * Text for a call-to-action encouraging the user to get in touch or contact.
   */
  contactMe: string;
}

/**
 * An object containing German text translations for the hero section of the main content.
 *
 * @constant
 * @type {Texts}
 * @property {string} subHeading - The subheading text.
 * @property {string} mainHeading - The main heading text.
 * @property {string} checkMyWork - The text for the "Check my work" button.
 * @property {string} contactMe - The text for the "Contact me" button.
 */
export const textsDE: Texts = {
  subHeading: 'Frontend-Entwickler',
  mainHeading: 'Mirko Rinke',
  checkMyWork: 'Meine Projekte',
  contactMe: 'Kontaktiere mich',
};

/**
 * An object containing English text translations for the hero section of the main content.
 *
 * @constant
 * @type {Texts}
 * @property {string} subHeading - The subheading text.
 * @property {string} mainHeading - The main heading text.
 * @property {string} checkMyWork - The text for the "Check my work" button.
 * @property {string} contactMe - The text for the "Contact me" button.
 */
export const textsEN: Texts = {
  subHeading: 'Frontend Developer',
  mainHeading: 'Mirko Rinke',
  checkMyWork: 'Check my work',
  contactMe: 'Contact me',
};
