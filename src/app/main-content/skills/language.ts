/**
 * @fileoverview This file contains English text strings for various sections and descriptions used in the skills component of the application.
 */

/**
 * Represents a collection of textual elements used in sections related to technologies, skills, and growth mindset.
 */
export interface Texts {
  /**
   * The title text for the technologies section.
   */
  titleTechnologies: string;

  /**
   * The title text for the skill set section.
   */
  titleSkillSet: string;

  /**
   * The description of the skill set, explaining the abilities and expertise in detail.
   */
  descriptionSkillSet: string;

  /**
   * The title text for another skill section, often used to introduce additional skills.
   */
  titleAnotherSkill: string;

  /**
   * The name or description of another skill.
   */
  anotherSkill: string;

  /**
   * The description of another skill, providing more details about the ability.
   */
  descriptionAnotherSkill: string;

  /**
   * The text for a button encouraging the user to initiate contact (e.g., "Let's Talk").
   */
  buttonLetsTalk: string;

  /**
   * The first part of the title text for the growth mindset section.
   */
  titleGrowthMindsetFirstPart: string;

  /**
   * The second part of the title text for the growth mindset section.
   */
  titleGrowthMindsetSecondPart: string;
}

/**
 * An object containing German text translations for various sections and descriptions
 * used in the skills component of the application.
 *
 * @property {string} titleTechnologies - The title for the technologies section.
 * @property {string} titleSkillSet - The title for the skill set section.
 * @property {string} descriptionSkillSet - A description of the skill set, detailing the journey and openness to new technologies.
 * @property {string} titleAnotherSkill - The title for the additional skill section.
 * @property {string} anotherSkill - A prompt asking if another skill is needed.
 * @property {string} descriptionAnotherSkill - A description encouraging contact for further skills.
 * @property {string} buttonLetsTalk - The text for the button to initiate a conversation.
 * @property {string} titleGrowthMindsetFirstPart - The first part of the title expressing interest in learning.
 * @property {string} titleGrowthMindsetSecondPart - The second part of the title expressing interest in learning.
 */
export const textsDE: Texts = {
  titleTechnologies: 'Technologien',
  titleSkillSet: 'Skills',
  descriptionSkillSet:
    'Meine berufliche Reise umfasst die Arbeit an verschiedenen Projekten, bei denen ich eine Vielzahl von Frontend-Technologien und -Konzepten eingesetzt habe. Ich bin offen für neue Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig verändernden Landschaft der Webentwicklung auf dem neuesten Stand zu bleiben.',
  titleAnotherSkill: 'Zusätzliche Fähigkeiten',
  anotherSkill: 'benötigt?',
  descriptionAnotherSkill:
    'Gerne stehe ich für weitere Fragen zur Verfügung und freue mich darauf, mein Wissen zu erweitern.',
  buttonLetsTalk: 'Lass uns sprechen',
  titleGrowthMindsetFirstPart: 'Ich habe Interesse daran,',
  titleGrowthMindsetSecondPart: 'neue Fähigkeiten zu erlernen',
};

/**
 * An object containing English text strings for various sections and descriptions
 * used in the skills component of the application.
 *
 * @property {string} titleTechnologies - The title for the technologies section.
 * @property {string} titleSkillSet - The title for the skill set section.
 * @property {string} descriptionSkillSet - A description of the skill set and the author's journey in web development.
 * @property {string} titleAnotherSkill - The title prompting the user if they need another skill.
 * @property {string} anotherSkill - A prompt asking if another skill is needed.
 * @property {string} descriptionAnotherSkill - A description encouraging the user to contact for more information.
 * @property {string} buttonLetsTalk - The text for the button to initiate contact.
 * @property {string} titleGrowthMindsetFirstPart - The first part of the title indicating a growth mindset.
 * @property {string} titleGrowthMindsetSecondPart - The second part of the title indicating an interest in learning.
 */
export const textsEN: Texts = {
  titleTechnologies: 'Technologies',
  titleSkillSet: 'Skills',
  descriptionSkillSet:
    'My professional journey has involved working on diverse projects, utilizing a range of frontend technologies and concepts. I am open to adopting new technologies and methodologies to continuously enhance my skills and stay ahead in the ever-evolving landscape of web development.',
  titleAnotherSkill: 'Need',
  anotherSkill: 'an additional skill?',
  descriptionAnotherSkill:
    'Feel free to contact me. I look forward to expanding my knowledge.',
  buttonLetsTalk: "Let's Talk",
  titleGrowthMindsetFirstPart: 'I am interested in',
  titleGrowthMindsetSecondPart: 'learning new skills',
};
