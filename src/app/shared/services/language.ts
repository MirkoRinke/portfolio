interface HeroTexts {
  subHeading: string;
  mainHeading: string;
  contactMe: string;
}

interface navigationTexts {
  home: string;
  aboutMe: string;
  skills: string;
  projects: string;
  contact: string;
}

interface aboutMeTexts {
  portrait: {
    title: string;
  };
  infoBox1: {
    title: string;
    textarea: string;
  };
  infoBox2: {
    title: string;
    textarea: string;
  };
  infoBox3: {
    title: string;
    textarea: string;
  };
}

export interface Texts {
  navigation: navigationTexts;
  hero: HeroTexts;
  aboutMe: aboutMeTexts;
}

export const textsDE: Texts = {
  navigation: {
    home: 'Startseite',
    aboutMe: 'Über mich',
    skills: 'Fähigkeiten',
    projects: 'Projekte',
    contact: 'Kontakt',
  },
  hero: {
    subHeading: 'Frontend-Entwickler',
    mainHeading: 'Mirko Rinke',
    contactMe: 'Kontaktiere mich',
  },
  aboutMe: {
    portrait: {
      title: 'portrait.bmp',
    },
    infoBox1: {
      title: 'moderne_arbeit.txt',
      textarea:
        'Derzeit konzentriere ich mich auf die Remote-Arbeit, da sie mir die Flexibilität und das Umfeld bietet, die meine Produktivität steigern. Ich schätze eine gesunde Work-Life-Balance und die Möglichkeit, meine eigene Zeit zu managen, die die Remote-Arbeit bietet.',
    },
    infoBox2: {
      title: 'persoenliches_wachstum.txt',
      textarea:
        'Ich bin aufgeschlossen und suche ständig nach neuen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.',
    },
    infoBox3: {
      title: 'programmierphilosophie.txt',
      textarea:
        'In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben; es ist eine kreative Form der Problemlösung.',
    },
  },
};

export const textsEN: Texts = {
  navigation: {
    home: 'Home',
    aboutMe: 'About me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    subHeading: 'Frontend Developer',
    mainHeading: 'Mirko Rinke',
    contactMe: 'Contact me',
  },
  aboutMe: {
    portrait: {
      title: 'portrait.bmp',
    },
    infoBox1: {
      title: 'modern_work.txt',
      textarea:
        'Currently, I am focusing on remote work, as it provides me with the flexibility and environment that boost my productivity. I value a healthy work-life balance and the ability to manage my own time, which remote work allows.',
    },
    infoBox2: {
      title: 'personal_growth.txt',
      textarea:
        'I am open-minded and always looking for new challenges to constantly improve my knowledge and skills.',
    },
    infoBox3: {
      title: 'programming_philosophy.txt',
      textarea:
        'In my profession, programming isn’t just about writing code; it’s a creative form of problem-solving.',
    },
  },
};
