/**
 * Interface representing text content for different sections of the about-me component.
 * @interface
 * @property {string} whoIAm - Text content describing who the person is
 * @property {string} aboutMe - Text content for the about me section
 * @property {string} introduction - Text content for the introduction section
 * @property {string} workEnvironment - Text content describing the work environment
 * @property {string} personalGrowth - Text content about personal growth
 * @property {string} problemSolving - Text content about problem solving abilities
 */
export interface Texts {
  whoIAm: string;
  aboutMe: string;
  introduction: string;
  workEnvironment: string;
  personalGrowth: string;
  problemSolving: string;
}

/**
 * Contains German text content for the About Me section.
 * @interface Texts
 * @property {string} whoIAm - Section title "Who I am"
 * @property {string} aboutMe - Section heading "About me"
 * @property {string} introduction - Introduction paragraph describing role and location
 * @property {string} workEnvironment - Description of work environment flexibility
 * @property {string} personalGrowth - Statement about personal development
 * @property {string} problemSolving - Description of problem-solving approach
 */
export const textsDE: Texts = {
  whoIAm: 'Wer ich bin',
  aboutMe: 'Über mich',
  introduction:
    'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler mit Sitz in Hildesheim. Motiviert von den grenzenlosen Möglichkeiten in der IT, freue ich mich darauf, visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.',
  workEnvironment:
    'Flexibel in Bezug auf Arbeitsumgebungen, kann ich sowohl vor Ort in Hildesheim als auch remote effektiv arbeiten.',
  personalGrowth:
    'Ich bin aufgeschlossen und suche immer nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.',
  problemSolving:
    'In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben, sondern um eine kreative Form des Problemlösens. Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu destillieren. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.',
};

/**
 * Object containing English language text content for the About Me section
 * @interface Texts
 * @property {string} whoIAm - Section heading for personal introduction
 * @property {string} aboutMe - About me section title
 * @property {string} introduction - Personal introduction paragraph describing role and location
 * @property {string} workEnvironment - Description of work flexibility and location preferences
 * @property {string} personalGrowth - Statement about personal development and learning attitude
 * @property {string} problemSolving - Description of approach to programming and problem solving methodology
 */
export const textsEN: Texts = {
  whoIAm: 'Who I Am',
  aboutMe: 'About me',
  introduction:
    'Hi, I’m a german speaking Frontend Developer based in Hildesheim. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.',
  workEnvironment:
    'Flexible in terms of working environments, I can work effectively both on-site in Hildesheim and remotely.',
  personalGrowth:
    'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills',
  problemSolving:
    'In my profession, programming isn t just about writing code it s a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.',
};
