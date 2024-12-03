/**
 * @fileoverview This file contains English text strings for various sections and descriptions used in the skills component of the application.
 */

/**
 * Interface defining the structure of text content for the skills section.
 * Used to enforce consistent text properties across language versions.
 *
 * @interface Texts
 * @property {string} titleTechnologies - Title for technologies section
 * @property {string} titleSkillSet - Title for skill set section
 * @property {string} descriptionSkillSet - Description of skill set and experience
 * @property {string} titleAnotherSkill - Title for additional skills section
 * @property {string} anotherSkill - Text for skill inquiry
 * @property {string} descriptionAnotherSkill - Description for additional skills
 * @property {string} buttonLetsTalk - Text for call-to-action button
 * @property {string} titleGrowthMindsetFirstPart - First part of growth mindset title
 * @property {string} titleGrowthMindsetSecondPart - Second part of growth mindset title
 */
export interface Texts {
  titleTechnologies: string;
  titleSkillSet: string;
  descriptionSkillSet: string;
  titleAnotherSkill: string;
  anotherSkill: string;
  descriptionAnotherSkill: string;
  buttonLetsTalk: string;
  titleGrowthMindsetFirstPart: string;
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
  titleAnotherSkill: 'Benötigen Sie',
  anotherSkill: 'eine zusätzliche Fähigkeit?',
  descriptionAnotherSkill:
    'Zögern Sie nicht, mich zu kontaktieren. Ich freue mich darauf, mein Wissen zu erweitern.',
  buttonLetsTalk: 'Lassen Sie uns sprechen',
  titleGrowthMindsetFirstPart: 'Ich habe ein ausgeprägtes',
  titleGrowthMindsetSecondPart: 'Interesse am Lernen und Wachsen',
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
  titleGrowthMindsetFirstPart: 'I have a strong',
  titleGrowthMindsetSecondPart: 'interest in learning and growth',
};
