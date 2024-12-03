/**
 * @fileoverview This file contains text translations for various labels used in the hero banner, in both German and English.
 */

/**
 * Interface defining text content structure for the hero banner.
 * Used to enforce consistent text properties across language versions.
 *
 * @interface Texts
 * @property {string} remoteWork - Text indicating remote work availability
 * @property {string} jobDescription - Job title/description text
 * @property {string} basedIn - Location text
 * @property {string} openToWork - Text indicating job seeking status
 */
export interface Texts {
  remoteWork: string;
  jobDescription: string;
  basedIn: string;
  openToWork: string;
}

/**
 * An object containing German text translations for various labels used in the hero banner.
 *
 * @property {string} remoteWork - Indicates availability for remote work.
 * @property {string} jobDescription - Describes the job title as a Frontend Developer.
 * @property {string} basedIn - Specifies the location as Hildesheim.
 * @property {string} openToWork - Indicates readiness for a new job opportunity.
 */
export const textsDE: Texts = {
  remoteWork: 'Verfügbar für Remote-Arbeit',
  jobDescription: 'Frontend Developer',
  basedIn: 'Wohnhaft in Hildesheim',
  openToWork: 'Offen für neue berufliche Herausforderungen',
};

/**
 * An object containing English text translations for various labels used in the hero banner.
 *
 * @property {string} remoteWork - Indicates availability for remote work.
 * @property {string} jobDescription - Describes the job title as a Frontend Developer.
 * @property {string} basedIn - Specifies the location as Hildesheim.
 * @property {string} openToWork - Indicates readiness for a new job opportunity.
 */
export const textsEN: Texts = {
  remoteWork: 'Available for remote work',
  jobDescription: 'Frontend Developer',
  basedIn: 'Based in Hildesheim',
  openToWork: 'Open to new opportunities',
};
