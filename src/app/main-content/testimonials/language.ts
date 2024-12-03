/**
 * Interface defining the structure of text content for localization.
 * Used to enforce consistent text properties across language versions.
 *
 * @interface Texts
 * @property {string} heading - The main heading/title text
 */
export interface Texts {
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
