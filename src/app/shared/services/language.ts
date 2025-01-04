interface HeroTexts {
  subHeading: string;
  mainHeading: string;
  contactMe: string;
}

export interface Texts {
  hero: HeroTexts;
}

export const textsDE: Texts = {
  hero: {
    subHeading: 'Frontend-Entwickler',
    mainHeading: 'Mirko Rinke',
    contactMe: 'Kontaktiere mich',
  },
};

export const textsEN: Texts = {
  hero: {
    subHeading: 'Frontend Developer',
    mainHeading: 'Mirko Rinke',
    contactMe: 'Contact me',
  },
};
