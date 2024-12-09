/**
 * @fileoverview This file contains the interface definition for text fields used in a contact form and contact information sections.
 * It also includes the German and English translations for these text fields.
 */

/**
 * Represents a collection of textual elements used in the contact form section of a website.
 */
export interface Texts {
  /**
   * The label text for the name field in the contact form.
   */
  contactFormName: string;

  /**
   * The label text for the email field in the contact form.
   */
  contactFormEmail: string;

  /**
   * The label text for the message field in the contact form.
   */
  contactFormMessage: string;

  /**
   * The first part of the privacy policy text for the contact form, explaining data handling.
   */
  contactFormPrivacyPolicyText1: string;

  /**
   * The second part of the privacy policy text for the contact form, explaining data handling.
   */
  contactFormPrivacyPolicyText2: string;

  /**
   * The third part of the privacy policy text for the contact form, explaining data handling.
   */
  contactFormPrivacyPolicyText3: string;

  /**
   * The text for the submit button in the contact form.
   */
  contactFormSubmit: string;

  /**
   * The text displayed after the form is successfully submitted.
   */
  contactFormSubmitted: string;

  /**
   * The placeholder text for the name field in the contact form.
   */
  placeholderName: string;

  /**
   * The placeholder text for the email field in the contact form.
   */
  placeholderEmail: string;

  /**
   * The placeholder text for the message field in the contact form.
   */
  placeholderMessage: string;

  /**
   * The validation message for the name field if it is required but not filled out.
   */
  requiredName: string;

  /**
   * The validation message for the email field if it is required but not filled out.
   */
  requiredEmail: string;

  /**
   * The validation message for the message field if it is required but not filled out.
   */
  requiredMessage: string;
}

/**
 * German translations for the contact form text fields.
 *
 * @property {string} contactFormName - The label for the contact form name field.
 * @property {string} contactFormEmail - The label for the contact form email field.
 * @property {string} contactFormMessage - The label for the contact form message field.
 * @property {string} contactFormPrivacyPolicyText1 - The first part of the privacy policy text.
 * @property {string} contactFormPrivacyPolicyText2 - The second part of the privacy policy text.
 * @property {string} contactFormPrivacyPolicyText3 - The third part of the privacy policy text.
 * @property {string} contactFormSubmit - The label for the contact form submit button.
 * @property {string} contactFormSubmitted - The message displayed after the form is successfully submitted.
 * @property {string} placeholderName - The placeholder text for the name field.
 * @property {string} placeholderEmail - The placeholder text for the email field.
 * @property {string} placeholderMessage - The placeholder text for the message field.
 * @property {string} requiredName - The error message for the required name field.
 * @property {string} requiredEmail - The error message for the required email field.
 * @property {string} requiredMessage - The error message for the required message field.
 */
export const textsDE: Texts = {
  contactFormName: 'Wie heißt du?',
  contactFormEmail: 'Wie lautet deine E-Mail?',
  contactFormMessage: 'Wie kann ich dir helfen?',
  contactFormPrivacyPolicyText1: 'Ich habe die',
  contactFormPrivacyPolicyText2: 'Datenschutzerklärung',
  contactFormPrivacyPolicyText3:
    'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
  contactFormSubmit: 'Absenden',
  contactFormSubmitted: 'Nachricht erfolgreich gesendet',

  placeholderName: 'Dein Name kommt hier hin',
  placeholderEmail: 'deinemail@email.com',
  placeholderMessage: 'Hallo Mirko, ich bin interessiert an...',

  requiredName: 'Mind. 2 Buchst. (A-Z, a-z)',
  requiredEmail: 'Gültige E-Mail ist erforderlich',
  requiredMessage: 'Nachricht ist erforderlich',
};

/**
 * English translations for the contact form text fields.
 *
 * @property {string} contactFormName - The label for the contact form name field.
 * @property {string} contactFormEmail - The label for the contact form email field.
 * @property {string} contactFormMessage - The label for the contact form message field.
 * @property {string} contactFormPrivacyPolicyText1 - The first part of the privacy policy text.
 * @property {string} contactFormPrivacyPolicyText2 - The second part of the privacy policy text.
 * @property {string} contactFormPrivacyPolicyText3 - The third part of the privacy policy text.
 * @property {string} contactFormSubmit - The label for the contact form submit button.
 * @property {string} contactFormSubmitted - The message displayed after the form is successfully submitted.
 * @property {string} placeholderName - The placeholder text for the name field.
 * @property {string} placeholderEmail - The placeholder text for the email field.
 * @property {string} placeholderMessage - The placeholder text for the message field.
 * @property {string} requiredName - The error message for the required name field.
 * @property {string} requiredEmail - The error message for the required email field.
 * @property {string} requiredMessage - The error message for the required message field.
 */
export const textsEN: Texts = {
  contactFormName: "What's your name?",
  contactFormEmail: "What's your email?",
  contactFormMessage: 'How can I help you?',
  contactFormPrivacyPolicyText1: 'I have read the',
  contactFormPrivacyPolicyText2: 'privacy policy',
  contactFormPrivacyPolicyText3:
    'and agree to the processing of my data as described.',
  contactFormSubmit: 'Submit',
  contactFormSubmitted: 'Message sent successfully',

  placeholderName: 'Your name goes here',
  placeholderEmail: 'youremail@email.com',
  placeholderMessage: 'Hello Mirko, I am interested in...',

  requiredName: 'At least 2 characters (A-Z, a-z)',
  requiredEmail: 'Valid email is required',
  requiredMessage: 'Message is required',
};
