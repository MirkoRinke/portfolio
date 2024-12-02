/**
 * Interface defining text content structure for location/position information.
 * Used to enforce consistent text properties across language versions.
 *
 * @interface Texts
 * @property {string} position - The job position/role text
 * @property {string} location - The location/address text
 */
export interface Texts {
  position: string;
  location: string;
}

/**
 * German text translations for location/position information.
 * Implements the Texts interface to ensure type safety.
 *
 * @constant textsDE
 * @type {Texts}
 * @property {string} position - The job position text in German
 * @property {string} location - The location text in German
 */
export const textsDE: Texts = {
  position: 'Web-Entwickler',
  location: 'Hildesheim Deutschland',
};

/**
 * English text translations for location/position information.
 * Implements the Texts interface to ensure type safety.
 *
 * @constant textsEN
 * @type {Texts}
 * @property {string} position - The job position text in English
 * @property {string} location - The location text in English
 */
export const textsEN: Texts = {
  position: 'Web Developer',
  location: 'Hildesheim Germany',
};
