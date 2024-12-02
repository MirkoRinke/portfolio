/**
 * Interface defining text content structure for footer elements.
 * Used to enforce consistent text properties across language versions.
 *
 * @interface Texts
 * @property {string} position - Professional position/role text
 * @property {string} location - Geographic location text
 * @property {string} imprint - Imprint/legal notice text
 * @property {string} privacy - Privacy policy text
 */
export interface Texts {
  position: string;
  location: string;
  imprint: string;
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
  position: 'Web-Entwickler',
  location: 'Hildesheim Deutschland',
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
  location: 'Hildesheim Germany',
  imprint: 'Imprint',
  privacy: 'Privacy Policy',
};
