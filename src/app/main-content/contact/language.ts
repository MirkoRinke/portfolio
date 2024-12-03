/**
 * @fileoverview English and German text content for contact component
 */

/**
 * Interface defining the structure of text content for the contact form and info section.
 * Used to enforce consistent text properties across languages.
 *
 * Properties:
 * - contactInfoTitle: Main contact section title
 * - contactInfoSubtitle: Secondary contact heading
 * - contactInfoQuestion: Question prompt text
 * - contactInfoDescription: Main description text
 * - contactInfoFrontendDeveloper: Developer role text
 * - contactInfoDescriptionHighlight: Highlighted description text
 * - contactFormName: Name field label
 * - contactFormEmail: Email field label
 * - contactFormMessage: Message field label
 * - contactFormPrivacyPolicyText1-3: Privacy policy text sections
 * - contactFormSubmit: Submit button text
 * - placeholderName/Email/Message: Input field placeholder texts
 * - requiredName/Email/Message: Validation error messages
 */
export interface Texts {
  contactInfoTitle: string;
  contactInfoSubtitle: string;
  contactInfoQuestion: string;
  contactInfoDescription: string;
  contactInfoFrontendDeveloper: string;
  contactInfoDescriptionHighlight: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormMessage: string;
  contactFormPrivacyPolicyText1: string;
  contactFormPrivacyPolicyText2: string;
  contactFormPrivacyPolicyText3: string;
  contactFormSubmit: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  requiredName: string;
  requiredEmail: string;
  requiredMessage: string;
}

/**
 * German text content for contact component
 * @typedef {Object} Texts
 * @property {string} contactInfoTitle - Title for contact section
 * @property {string} contactInfoSubtitle - Subtitle text
 * @property {string} contactInfoQuestion - Question text
 * @property {string} contactInfoDescription - Main description text
 * @property {string} contactInfoFrontendDeveloper - Developer availability text
 * @property {string} contactInfoDescriptionHighlight - Call-to-action text
 * @property {string} contactFormName - Name field label
 * @property {string} contactFormEmail - Email field label
 * @property {string} contactFormMessage - Message field label
 * @property {string} contactFormPrivacyPolicyText1 - First part of privacy policy text
 * @property {string} contactFormPrivacyPolicyText2 - Privacy policy link text
 * @property {string} contactFormPrivacyPolicyText3 - Last part of privacy policy text
 * @property {string} contactFormSubmit - Submit button text
 * @property {string} placeholderName - Name input placeholder
 * @property {string} placeholderEmail - Email input placeholder
 * @property {string} placeholderMessage - Message input placeholder
 * @property {string} requiredName - Name validation message
 * @property {string} requiredEmail - Email validation message
 * @property {string} requiredMessage - Message validation message
 */
export const textsDE: Texts = {
  contactInfoTitle: 'Kontaktiere mich',
  contactInfoSubtitle: 'Lass uns zusammen\u00ADarbeiten',
  contactInfoQuestion: 'Hast du ein Problem zu lösen?',
  contactInfoDescription:
    'Kontaktiere mich über dieses Formular. Ich bin daran interessiert, von dir zu hören, deine Ideen zu kennen und mit meiner Arbeit zu deinen Projekten beizutragen.',
  contactInfoFrontendDeveloper: 'Brauchst du einen Frontend-Entwickler?',
  contactInfoDescriptionHighlight: 'Lass uns reden!',

  contactFormName: 'Wie heißt du?',
  contactFormEmail: 'Wie lautet deine E-Mail?',
  contactFormMessage: 'Wie kann ich dir helfen?',
  contactFormPrivacyPolicyText1: 'Ich habe die',
  contactFormPrivacyPolicyText2: 'Datenschutzerklärung',
  contactFormPrivacyPolicyText3:
    'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
  contactFormSubmit: 'Absenden',

  placeholderName: 'Dein Name kommt hier hin',
  placeholderEmail: 'deinemail@email.com',
  placeholderMessage: 'Hallo Lukas, ich bin interessiert an...',

  requiredName: 'Name ist erforderlich',
  requiredEmail: 'Gültige E-Mail ist erforderlich',
  requiredMessage: 'Nachricht ist erforderlich',
};

/**
 * English text content for contact component
 * @typedef {Object} Texts
 * @property {string} contactInfoTitle - Title for contact section
 * @property {string} contactInfoSubtitle - Subtitle text
 * @property {string} contactInfoQuestion - Question text
 * @property {string} contactInfoDescription - Main description text
 * @property {string} contactInfoFrontendDeveloper - Developer availability text
 * @property {string} contactInfoDescriptionHighlight - Call-to-action text
 * @property {string} contactFormName - Name field label
 * @property {string} contactFormEmail - Email field label
 * @property {string} contactFormMessage - Message field label
 * @property {string} contactFormPrivacyPolicyText1 - First part of privacy policy text
 * @property {string} contactFormPrivacyPolicyText2 - Privacy policy link text
 * @property {string} contactFormPrivacyPolicyText3 - Last part of privacy policy text
 * @property {string} contactFormSubmit - Submit button text
 * @property {string} placeholderName - Name input placeholder
 * @property {string} placeholderEmail - Email input placeholder
 * @property {string} placeholderMessage - Message input placeholder
 * @property {string} requiredName - Name validation message
 * @property {string} requiredEmail - Email validation message
 * @property {string} requiredMessage - Message validation message
 */
export const textsEN: Texts = {
  contactInfoTitle: 'Contact Me',
  contactInfoSubtitle: "Let's collaborate",
  contactInfoQuestion: 'Do you have a problem to solve?',
  contactInfoDescription:
    'Reach out to me through this form. I am interested in hearing from you, knowing your ideas, and contributing to your projects with my work.',
  contactInfoFrontendDeveloper: 'Need a Frontend Developer?',
  contactInfoDescriptionHighlight: "Let's talk!",

  contactFormName: "What's your name?",
  contactFormEmail: "What's your email?",
  contactFormMessage: 'How can I help you?',
  contactFormPrivacyPolicyText1: 'I have read the',
  contactFormPrivacyPolicyText2: 'privacy policy',
  contactFormPrivacyPolicyText3:
    'and agree to the processing of my data as described.',
  contactFormSubmit: 'Submit',

  placeholderName: 'Your name goes here',
  placeholderEmail: 'youremail@email.com',
  placeholderMessage: 'Hello Lukas, I am interested in...',

  requiredName: 'Name is required',
  requiredEmail: 'Valid email is required',
  requiredMessage: 'Message is required',
};
