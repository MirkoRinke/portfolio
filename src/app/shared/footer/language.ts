/**
 * @fileoverview This file contains the interface definition for text content structure
 * for footer elements and provides German and English translations for these texts.
 */

/**
 * Represents a collection of textual elements for displaying important legal or informational sections.
 */
export interface Texts {
  /**
   * The position or job title, typically used to describe the role or occupation.
   */
  position: string;

  /**
   * The location, such as city or region, where the entity or person is based.
   */
  location: string;

  /**
   * The text for the imprint or legal notice, often required by law on websites.
   */
  imprint: string;

  /**
   * The text related to the privacy policy, outlining how personal data is handled.
   */
  privacy: string;
}

/**
 * German text translations for footer content.
 * Implements the Texts interface to ensure type safety.
 *
 * @constant textsDE
 * @type {Texts}
 * @property {string} position - The job position in German
 * @property {string} location - The location text in German
 * @property {string} imprint - The imprint link text in German
 * @property {string} privacy - The privacy policy link text in German
 */
export const textsDE: Texts = {
  position: 'Web Developer',
  location: 'Hildesheim, Deutschland',
  imprint: 'Impressum',
  privacy: 'Datenschutz',
};

/**
 * English text translations for footer content.
 * Implements the Texts interface to ensure type safety.
 *
 * @constant textsEN
 * @type {Texts}
 * @property {string} position - The job position text in English
 * @property {string} location - The location text in English
 * @property {string} imprint - The imprint link text in English
 * @property {string} privacy - The privacy policy link text in English
 */
export const textsEN: Texts = {
  position: 'Web Developer',
  location: 'Hildesheim, Germany',
  imprint: 'Imprint',
  privacy: 'Privacy Policy',
};
