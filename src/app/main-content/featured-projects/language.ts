/**
 * Interface defining structure for text content.
 * @property {string} heading - The heading text
 * @property {string} title - The title text
 * @property {string} description - The descriptive text
 */
export interface Texts {
  heading: string;
  title: string;
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
