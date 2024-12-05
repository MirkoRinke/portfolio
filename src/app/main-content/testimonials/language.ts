/**
 * @fileoverview This file contains the interface and text translations for localization.
 * It includes German and English translations for the testimonials section.
 */

/**
 * Represents a collection of textual elements commonly used in a UI.
 */
export interface Texts {
  /**
   * The heading text, typically used for the main headline of a section or page.
   */
  heading: string;
}

/**
 * German text translations for testimonials section.
 * Implements the Texts interface to ensure type safety.
 *
 * @constant textsDE
 * @type {Texts}
 * @property {string} heading - The testimonials section heading in German
 */
export const textsDE: Texts = {
  heading: 'Referenzen meiner Kollegen',
};

/**
 * English text translations for testimonials section.
 * Implements the Texts interface to ensure type safety.
 *
 * @constant textsEN
 * @type {Texts}
 * @property {string} heading - The testimonials section heading in English
 */
export const textsEN: Texts = {
  heading: 'Testimonials from my colleagues',
};
