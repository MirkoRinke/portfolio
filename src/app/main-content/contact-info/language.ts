/**
 * @fileoverview This file contains the interface definition for text fields used in a contact form and contact information sections.
 * It also includes the German and English translations for these text fields.
 */

/**
 * Represents a collection of textual elements for displaying contact information sections.
 */
export interface Texts {
  /**
   * The title text for the contact information section.
   */
  contactInfoTitle: string;

  /**
   * The subtitle text for the contact information section, providing additional context.
   */
  contactInfoSubtitle: string;

  /**
   * The question text prompting the user to contact or get in touch.
   */
  contactInfoQuestion: string;

  /**
   * The descriptive text providing further details about how to contact.
   */
  contactInfoDescription: string;

  /**
   * The text indicating the role or position of a frontend developer.
   */
  contactInfoFrontendDeveloper: string;

  /**
   * A highlighted or emphasized text within the contact section, often to draw attention to specific information.
   */
  contactInfoDescriptionHighlight: string;
}

/**
 * German translations for the contact information text fields.
 *
 * @property {string} contactInfoTitle - The title for the contact information section.
 * @property {string} contactInfoSubtitle - The subtitle for the contact information section.
 * @property {string} contactInfoQuestion - The question text in the contact information section.
 * @property {string} contactInfoDescription - The description text in the contact information section.
 * @property {string} contactInfoFrontendDeveloper - The text for the frontend developer role in the contact information section.
 * @property {string} contactInfoDescriptionHighlight - The highlighted description text in the contact information section.
 */
export const textsDE: Texts = {
  contactInfoTitle: 'Kontaktiere mich',
  contactInfoSubtitle: 'Lass uns zusammen\u00ADarbeiten',
  contactInfoQuestion: 'Hast du ein Problem zu lösen?',
  contactInfoDescription:
    'Kontaktiere mich über dieses Formular. Ich bin daran interessiert, von dir zu hören, deine Ideen zu kennen und mit meiner Arbeit zu deinen Projekten beizutragen.',
  contactInfoFrontendDeveloper: 'Brauchst du einen Frontend-Entwickler?',
  contactInfoDescriptionHighlight: 'Lass uns reden!',
};

/**
 * German translations for the contact information text fields.
 *
 * @property {string} contactInfoTitle - The title for the contact information section.
 * @property {string} contactInfoSubtitle - The subtitle for the contact information section.
 * @property {string} contactInfoQuestion - The question text in the contact information section.
 * @property {string} contactInfoDescription - The description text in the contact information section.
 * @property {string} contactInfoFrontendDeveloper - The text for the frontend developer role in the contact information section.
 * @property {string} contactInfoDescriptionHighlight - The highlighted description text in the contact information section.
 */
export const textsEN: Texts = {
  contactInfoTitle: 'Contact Me',
  contactInfoSubtitle: "Let's collaborate",
  contactInfoQuestion: 'Do you have a problem to solve?',
  contactInfoDescription:
    'Reach out to me through this form. I am interested in hearing from you, knowing your ideas, and contributing to your projects with my work.',
  contactInfoFrontendDeveloper: 'Need a Frontend Developer?',
  contactInfoDescriptionHighlight: "Let's talk!",
};
