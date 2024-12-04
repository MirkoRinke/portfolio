export interface Texts {
  contactFormName: string;
  contactFormEmail: string;
  contactFormMessage: string;
  contactFormPrivacyPolicyText1: string;
  contactFormPrivacyPolicyText2: string;
  contactFormPrivacyPolicyText3: string;
  contactFormSubmit: string;
  contactFormSubmitted: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  requiredName: string;
  requiredEmail: string;
  requiredMessage: string;
}

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
  placeholderMessage: 'Hallo Lukas, ich bin interessiert an...',

  requiredName: 'Name ist erforderlich',
  requiredEmail: 'Gültige E-Mail ist erforderlich',
  requiredMessage: 'Nachricht ist erforderlich',
};

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
  placeholderMessage: 'Hello Lukas, I am interested in...',

  requiredName: 'Name is required',
  requiredEmail: 'Valid email is required',
  requiredMessage: 'Message is required',
};
