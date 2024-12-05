/**
 * @fileoverview This file defines the structure for text content and provides text in German and English for the featured projects section.
 */

/**
 * Represents a collection of textual elements commonly used in a UI.
 */
export interface Texts {
  /**
   * The heading text, typically used for the main headline of a section or page.
   */
  heading: string;

  /**
   * The title text, often used for subtitles or smaller headings.
   */
  title: string;

  /**
   * A descriptive text providing more information or context.
   */
  description: string;
}

/**
 * German texts for the featured projects section.
 * @constant {Texts}
 * @property {string} heading - The heading of the section.
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 */
export const textsDE: Texts = {
  heading: 'Portfolio',
  title: 'Ausgewählte Projekte',
  description:
    'Entdecke hier eine Auswahl meiner Arbeiten - Interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu erleben.',
};

/**
 * English texts for the featured projects section.
 * @constant {Texts}
 * @property {string} heading - The heading of the section.
 * @property {string} title - The title of the section.
 * @property {string} description - The description of the section.
 */
export const textsEN: Texts = {
  heading: 'Portfolio',
  title: 'Featured Projects',
  description:
    'Discover a selection of my work here - Engage with the projects to experience my skills in action.',
};
