/**
 * @fileoverview This file contains text translations for various labels used in the hero banner, in both German and English.
 */

/**
 * Represents a collection of textual elements commonly used to describe job-related information.
 */
export interface Texts {
  /**
   * Indicates whether the person is available for remote work.
   */
  remoteWork: string;

  /**
   * Provides a description of the job or position.
   */
  jobDescription: string;

  /**
   * Specifies the location or region where the person is based.
   */
  basedIn: string;

  /**
   * Indicates whether the person is currently open to work opportunities.
   */
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
  openToWork: 'Offen für neue Herausforderungen',
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
