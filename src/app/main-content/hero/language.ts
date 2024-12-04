/**
 * @fileoverview This file defines the structure and translations for text content in the hero section of the main content, in both German and English.
 */

/**
 * Interface defining the structure of text content for the hero section.
 * Used to enforce consistent text properties across language versions.
 *
 * @interface Texts
 * @property {string} subHeading - The subheading text (e.g. "Frontend Developer")
 * @property {string} mainHeading - The main heading text (e.g. name)
 * @property {string} checkMyWork - Text for the portfolio link button
 * @property {string} contactMe - Text for the contact button
 */
export interface Texts {
  subHeading: string;
  mainHeading: string;
  checkMyWork: string;
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
