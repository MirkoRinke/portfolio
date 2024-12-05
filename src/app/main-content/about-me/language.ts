/**
 * @fileoverview English and German text content for About Me section
 */

/**
 * Represents a collection of textual elements used to describe different aspects of a personal or professional profile.
 */
export interface Texts {
  /**
   * The text for describing who the person is, typically an introduction or personal statement.
   */
  whoIAm: string;

  /**
   * The text for the "About Me" section, usually describing background, experience, or personal history.
   */
  aboutMe: string;

  /**
   * The text for the introduction section, providing a brief overview or summary.
   */
  introduction: string;

  /**
   * The text describing the work environment, including the type of work or team dynamic.
   */
  workEnvironment: string;

  /**
   * The text for personal growth, describing the person's commitment to learning and development.
   */
  personalGrowth: string;

  /**
   * The text for problem-solving, explaining the person's approach to tackling challenges and finding solutions.
   */
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
  whoIAm: 'Wer bin ich',
  aboutMe: 'Über mich',
  introduction:
    'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler aus Hildesheim. Motiviert von den grenzenlosen Möglichkeiten der IT freue ich mich darauf, visuell ansprechende und intuitive Websites und Anwendungen zu gestalten.',
  workEnvironment:
    'Ich bin flexibel in Bezug auf Arbeitsumgebungen und kann sowohl vor Ort in Hildesheim als auch remote effektiv arbeiten.',
  personalGrowth:
    'Ich bin aufgeschlossen und suche stets nach neuen Herausforderungen, um mein Wissen und meine Fähigkeiten kontinuierlich zu verbessern.',
  problemSolving:
    'In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben, sondern auch um eine kreative Form des Problemlösens. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln. So werden Ziele erreicht und Visionen zum Leben erweckt.',
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
    'Hi, I’m a German-speaking Frontend Developer based in Hildesheim. Motivated by the limitless opportunities in IT, I am excited about crafting visually captivating and intuitive websites and applications.',
  workEnvironment:
    'I am flexible in terms of working environments and can work effectively both on-site in Hildesheim and remotely.',
  personalGrowth:
    'I am open-minded and always looking for new challenges to constantly improve my knowledge and skills.',
  problemSolving:
    'In my profession, programming isn’t just about writing code; it’s a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.',
};
