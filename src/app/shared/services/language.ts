export interface Texts {
  index: IndexTexts;
  navigation: navigationTexts;
  hero: HeroTexts;
  aboutMe: aboutMeTexts;
  ariaLabels: AriaLabels;
  expertise: Expertise;
}

interface IndexTexts {
  title: string;
  description: string;
}

interface navigationTexts {
  home: string;
  aboutMe: string;
  skills: string;
  projects: string;
  contact: string;
}

interface HeroTexts {
  subHeading: string;
  mainHeading: string;
  contactMe: string;
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
  ariaLabels: {
    portrait: {
      desktopIcon: string;
      content: string;
    };
    infoBox: {
      desktopIcon: string;
      description: string;
    };
  };
}

interface Expertise {
  certificates: {
    certificateModal: {
      content: string;
    };
    taps: {
      skillsTap: string;
      certificatesTap: string;
    };
  };
  ariaLabels: {
    certificates: {
      openCertificate: string;
    };
    certificateModal: {
      previous: string;
      next: string;
    };
    taps: {
      skillsTap: string;
      certificatesTap: string;
    };
    desktopIcon: string;
  };
}
export interface AriaLabels {
  controls: {
    minimize: string;
    maximize: string;
    close: string;
  };
}

export const textsDE: Texts = {
  index: {
    title: 'Portfolio Mirko Rinke',
    description:
      'Willkommen auf meinem Portfolio. Hier finden Sie Informationen über meine Projekte, Fähigkeiten und Erfahrungen im Bereich Softwareentwicklung.',
  },
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
    ariaLabels: {
      portrait: {
        desktopIcon: 'Porträt öffnen',
        content: 'Portrait von Mirko Rinke',
      },
      infoBox: {
        desktopIcon: 'Fenster öffnen',
        description: 'Information Box über',
      },
    },
  },
  expertise: {
    certificates: {
      certificateModal: {
        content: 'Zertifikat Bild',
      },
      taps: {
        skillsTap: 'Fähigkeiten',
        certificatesTap: 'Zertifikate',
      },
    },
    ariaLabels: {
      certificates: {
        openCertificate: 'Öffnen der Zertifikatsdetails für',
      },
      certificateModal: {
        previous: 'Vorheriges Zertifikat',
        next: 'Nächstes Zertifikat',
      },
      taps: {
        skillsTap: 'Öffne Fähigkeiten Tab',
        certificatesTap: 'Öffne Zertifikate Tab',
      },
      desktopIcon: 'Öffne Expertise Fenster',
    },
  },
  ariaLabels: {
    controls: {
      minimize: 'Minimieren',
      maximize: 'Maximieren',
      close: 'Schließen',
    },
  },
};

export const textsEN: Texts = {
  index: {
    title: 'Portfolio Mirko Rinke',
    description:
      'Welcome to my portfolio. Here you will find information about my projects, skills and experiences in software development.',
  },
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
    ariaLabels: {
      portrait: {
        desktopIcon: 'Open Portrait',
        content: 'Portrait of Mirko Rinke',
      },
      infoBox: {
        desktopIcon: 'Open Window',
        description: 'Information Box about',
      },
    },
  },
  expertise: {
    certificates: {
      certificateModal: {
        content: 'Certificate Image',
      },
      taps: {
        skillsTap: 'Skills',
        certificatesTap: 'Certificates',
      },
    },
    ariaLabels: {
      certificates: {
        openCertificate: 'Open certificate details for',
      },
      certificateModal: {
        previous: 'Previous Certificate',
        next: 'Next Certificate',
      },
      taps: {
        skillsTap: 'Open Skills Tab',
        certificatesTap: 'Open Certificates Tab',
      },
      desktopIcon: 'Open Expertise  Windows',
    },
  },
  ariaLabels: {
    controls: {
      minimize: 'Minimize',
      maximize: 'Maximize',
      close: 'Close',
    },
  },
};
