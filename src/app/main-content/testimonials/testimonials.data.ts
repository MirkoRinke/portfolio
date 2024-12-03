/**
 * @fileoverview This file contains the definition of the Testimonial interface and an array of testimonials in German.
 */

/**
 * Interface defining the structure of a testimonial.
 * Represents a single testimonial/review entry with basic metadata.
 *
 * @interface Testimonial
 * @property {number} id - Unique identifier for the testimonial
 * @property {string} author - Name of the person giving the testimonial
 * @property {string} position - Job title/role of the testimonial author
 * @property {string} text - The actual testimonial content/quote
 */
export interface Testimonial {
  id: number;
  author: string;
  position: string;
  text: string;
}

/**
 * An array of testimonials in German.
 * Each testimonial includes an id, author, position, and text.
 *
 * @type {Testimonial[]}
 * @property {number} id - The unique identifier for the testimonial.
 * @property {string} author - The name of the author of the testimonial.
 * @property {string} position - The position or title of the author.
 * @property {string} text - The content of the testimonial.
 */
export const testimonialsDE: Testimonial[] = [
  {
    id: 1,
    author: 'H. Janisch',
    position: 'Team-Partner',
    text: 'Lukas hat sich als zuverlässiger Gruppenpartner erwiesen. Seine technischen Fähigkeiten und sein proaktiver Ansatz waren entscheidend für den Erfolg unseres Projekts.',
  },
  {
    id: 2,
    author: 'T. Schulz',
    position: 'Frontend-Entwickler',
    text: 'Ich hatte das Glück, mit Lukas an einem Projekt bei der Developer Akademie zu arbeiten. Er blieb immer ruhig und sorgte dafür, dass unser Team auf Erfolgskurs war.',
  },
  {
    id: 3,
    author: 'A. Müller',
    position: 'Backend-Entwickler',
    text: 'Ich habe enorm von Lukas’ effizienter Arbeitsweise gelernt. Eine großartige Bereicherung für jedes Team!',
  },
  {
    id: 4,
    author: 'M. Becker',
    position: 'Projektmanager',
    text: 'Lukas lieferte stets qualitativ hochwertige Arbeit und war immer bereit, einen zusätzlichen Schritt zu gehen, um den Projekterfolg sicherzustellen.',
  },
  {
    id: 5,
    author: 'S. Wagner',
    position: 'UX-Designer',
    text: 'Die Zusammenarbeit mit Lukas war eine Freude. Sein Augenmerk auf Details und sein nutzerzentrieren Ansatz haben unsere Projektergebnisse erheblich verbessert.',
  },
];

/**
 * An array of testimonials in English.
 * Each testimonial includes an id, author, position, and text.
 *
 * @type {Testimonial[]}
 * @property {number} id - The unique identifier for the testimonial.
 * @property {string} author - The name of the author of the testimonial.
 * @property {string} position - The position or title of the author.
 * @property {string} text - The content of the testimonial.
 */
export const testimonialsEN: Testimonial[] = [
  {
    id: 1,
    author: 'H. Janisch',
    position: 'Team Partner',
    text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
  },
  {
    id: 2,
    author: 'T. Schulz',
    position: 'Frontend Developer',
    text: 'I had the good fortune of working with Lukas on a project at the Developer Akademie. He always stayed calm and made sure our team was set up for success.',
  },
  {
    id: 3,
    author: 'A. Müller',
    position: 'Backend Developer',
    text: "I learned enormously from Lukas' efficient way of working. A great addition to any team!",
  },
  {
    id: 4,
    author: 'M. Becker',
    position: 'Project Manager',
    text: 'Lukas consistently delivered high-quality work and was always willing to go the extra mile to ensure project success.',
  },
  {
    id: 5,
    author: 'S. Wagner',
    position: 'UX Designer',
    text: 'Working with Lukas was a pleasure. His attention to detail and user-centric approach greatly improved our project outcomes.',
  },
];
