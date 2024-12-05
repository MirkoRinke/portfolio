/**
 * @fileoverview This file contains the definition of the Testimonial interface and an array of testimonials in German.
 */

/**
 * Represents a testimonial with details about the author, their position, and the testimonial text.
 */
export interface Testimonial {
  /**
   * The unique identifier for the testimonial.
   */
  id: number;

  /**
   * The name of the person giving the testimonial.
   */
  author: string;

  /**
   * The position or role of the author (e.g., "CEO", "Senior Developer").
   */
  position: string;

  /**
   * The text of the testimonial or review provided by the author.
   */
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
    author: 'Philipp Anstett',
    position: 'Frontend-Entwickler',
    text: 'Die Zusammenarbeit mit Mirko als Teamleiter war äußerst angenehm und produktiv. Er hat das Team stets motiviert, klare Ziele gesetzt und durch sein vorbildliches Führungsverhalten eine inspirierende Arbeitsatmosphäre geschaffen. Seine Unterstützung und sein Engagement haben maßgeblich zum Erfolg unserer Projekte beigetragen.',
  },
  {
    id: 2,
    author: 'Tobias Rothe',
    position: 'Frontend-Entwickler',
    text: 'Die Zusammenarbeit mit Mirko war außerordentlich angenehm und produktiv. Seine professionelle Herangehensweise und sein tiefes Fachwissen haben unser Projekt maßgeblich vorangebracht. Besonders beeindruckend war seine Fähigkeit, im Team zu arbeiten und kreative Lösungen für komplexe Herausforderungen zu finden.',
  },
  {
    id: 3,
    author: 'Richard Streu',
    position: 'Frontend-Entwickler',
    text: 'Ich habe die Zusammenarbeit mit Mirko als sehr angenehm und bereichernd empfunden. Er ist äußerst zuverlässig und bringt ein beeindruckendes Fachwissen mit, das uns oft geholfen hat, technische Hürden zu überwinden. Seine strukturierte Arbeitsweise und seine Bereitschaft, anderen im Team unter die Arme zu greifen, machen ihn zu einem sehr geschätzten Projektpartner.',
  },
  {
    id: 4,
    author: 'David Werner',
    position: 'Frontend-Entwickler',
    text: 'Die Zusammenarbeit war ein Traum, fachlich sowie menschlich optimale Zusammenarbeit. Weiß wie man ein Team anspornen muss und greift einem in schwierigeren Stellen des Projekts gerne unter die Arme.',
  },
  {
    id: 5,
    author: 'Marco Lapiello',
    position: 'Frontend-Entwickler',
    text: 'Mirko hat das Projekt durch sein umfassendes Fachwissen in JavaScript, CSS und HTML sowie seine Fähigkeit zur effizienten Strukturierung maßgeblich vorangebracht. Seine klare Organisation half dem Team, fokussiert und zielgerichtet zu arbeiten. Zudem zeigte er stets große Hilfsbereitschaft und stand seinen Kollegen jederzeit bei Herausforderungen zur Seite.',
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
    author: 'Philipp Anstett',
    position: 'Frontend Developer',
    text: 'Working with Mirko as a team leader was extremely pleasant and productive. He always motivated the team, set clear goals, and created an inspiring work atmosphere through his exemplary leadership. His support and commitment significantly contributed to the success of our projects.',
  },
  {
    id: 2,
    author: 'Tobias Rothe',
    position: 'Frontend Developer',
    text: 'Working with Mirko was extraordinarily pleasant and productive. His professional approach and deep expertise significantly advanced our project. Particularly impressive was his ability to work in a team and find creative solutions to complex challenges.',
  },
  {
    id: 3,
    author: 'Richard Streu',
    position: 'Frontend Developer',
    text: 'I found working with Mirko to be very pleasant and enriching. He is extremely reliable and brings impressive expertise that often helped us overcome technical hurdles. His structured way of working and his willingness to support others in the team make him a highly valued project partner.',
  },
  {
    id: 4,
    author: 'David Werner',
    position: 'Frontend Developer',
    text: 'The collaboration was a dream, both professionally and personally optimal. He knows how to motivate a team and is happy to lend a hand in more challenging parts of the project.',
  },
  {
    id: 5,
    author: 'Marco Lapiello',
    position: 'Frontend Developer',
    text: 'Mirko significantly advanced the project with his extensive knowledge in JavaScript, CSS, and HTML, as well as his ability to structure efficiently. His clear organization helped the team work focused and purposefully. Additionally, he always showed great willingness to help and supported his colleagues at any time with challenges.',
  },
];
