export interface Texts {
  index: IndexTexts;
  navigation: navigationTexts;
  hero: HeroTexts;
  aboutMe: aboutMeTexts;
  projects: projectsTexts;
  expertise: Expertise;
  contact: ContactTexts;
  ariaLabels: AriaLabels;
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

interface InfoBox {
  title: string;
  textarea: string;
}

interface aboutMeTexts {
  portrait: {
    title: string;
  };
  infoBox: {
    [key: string]: InfoBox;
    infoBox0: {
      title: string;
      textarea: string;
    };
    infoBox1: {
      title: string;
      textarea: string;
    };
    infoBox2: {
      title: string;
      textarea: string;
    };
  };
  ariaLabels: {
    portrait: {
      content: string;
    };
    infoBox: {
      description: string;
    };
  };
}

interface Expertise {
  title: string;
  certificates: {
    certificateModal: {
      content: string;
    };
    taps: {
      [key: string]: string;
      skills: string;
      certificates: string;
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
      [key: string]: string;
      skills: string;
      certificates: string;
    };
  };
}

interface projectsTexts {
  title: string;
}

export interface ContactTexts {
  title: string;
  sendTo: string;
  eMail: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormSubject: string;
  contactFormPrivacyPolicyText1: string;
  contactFormPrivacyPolicyText2: string;
  contactFormPrivacyPolicyText3: string;
  contactFormSubmit: string;
  contactFormSubmitted: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderSubject: string;
  placeholderMessage: string;
  requiredName: string;
  requiredEmail: string;
  requiredSubject: string;
  requiredMessage: string;
}

interface AriaLabels {
  controls: {
    minimize: string;
    maximize: string;
    close: string;
  };
  desktopIcon: {
    firstText: string;
    secondText: string;
  };
  links: {
    liveLink: string;
    github: string;
    organization: string;
  };
  image: string;
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
    infoBox: {
      infoBox0: {
        title: 'moderne_arbeit.txt',
        textarea:
          'Derzeit konzentriere ich mich auf die Remote-Arbeit, da sie mir die Flexibilität und das Umfeld bietet, die meine Produktivität steigern. Ich schätze eine gesunde Work-Life-Balance und die Möglichkeit, meine eigene Zeit zu managen, die die Remote-Arbeit bietet.',
      },
      infoBox1: {
        title: 'persoenliches_wachstum.txt',
        textarea:
          'Ich bin aufgeschlossen und suche ständig nach neuen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.',
      },
      infoBox2: {
        title: 'programmierphilosophie.txt',
        textarea:
          'In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben; es ist eine kreative Form der Problemlösung.',
      },
    },
    ariaLabels: {
      portrait: {
        content: 'Portrait von Mirko Rinke',
      },
      infoBox: {
        description: 'Information Box über',
      },
    },
  },
  expertise: {
    title: 'Expertise',
    certificates: {
      certificateModal: {
        content: 'Zertifikat Bild',
      },
      taps: {
        skills: 'Fähigkeiten',
        certificates: 'Zertifikate',
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
        skills: 'Öffne Fähigkeiten Tab',
        certificates: 'Öffne Zertifikate Tab',
      },
    },
  },
  projects: {
    title: 'Projekte',
  },
  contact: {
    title: 'windows_live_mail.exe',
    sendTo: 'An:',
    eMail: 'contact@mirkorinke.dev',
    contactFormName: 'Name:',
    contactFormEmail: 'Von:',
    contactFormSubject: 'Betreff:',
    contactFormPrivacyPolicyText1: 'Ich habe die',
    contactFormPrivacyPolicyText2: 'Datenschutzerklärung',
    contactFormPrivacyPolicyText3:
      'gelesen und Stimme der Verarbeitung meiner Daten wie beschrieben zu.',
    contactFormSubmit: 'Absenden',
    contactFormSubmitted: 'Gesendet',
    placeholderName: 'Dein Name kommt hier hin',
    placeholderEmail: 'Deine E-Mail kommt hier hin',
    placeholderSubject: 'Betreff der Nachricht',
    placeholderMessage: 'Hallo Mirko, ich bin interessiert an...',
    requiredName: 'Mind. 2 Buchst. (A-Z, a-z)',
    requiredEmail: 'Gültige E-Mail ist erforderlich',
    requiredSubject: 'Betreff ist erforderlich',
    requiredMessage: 'Nachricht ist erforderlich',
  },
  ariaLabels: {
    controls: {
      minimize: 'Minimieren',
      maximize: 'Maximieren',
      close: 'Schließen',
    },
    desktopIcon: {
      firstText: 'Öffnen',
      secondText: 'Fenster',
    },
    links: {
      liveLink: 'Link zu',
      github: 'Github Link für',
      organization: 'Link zu Organisation',
    },
    image: 'Bild von',
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
    infoBox: {
      infoBox0: {
        title: 'modern_work.txt',
        textarea:
          'Currently, I am focusing on remote work, as it provides me with the flexibility and environment that boost my productivity. I value a healthy work-life balance and the ability to manage my own time, which remote work allows.',
      },
      infoBox1: {
        title: 'personal_growth.txt',
        textarea:
          'I am open-minded and always looking for new challenges to constantly improve my knowledge and skills.',
      },
      infoBox2: {
        title: 'programming_philosophy.txt',
        textarea:
          'In my profession, programming isn’t just about writing code; it’s a creative form of problem-solving.',
      },
    },
    ariaLabels: {
      portrait: {
        content: 'Portrait of Mirko Rinke',
      },
      infoBox: {
        description: 'Information Box about',
      },
    },
  },
  expertise: {
    title: 'Expertise',
    certificates: {
      certificateModal: {
        content: 'Certificate Image',
      },
      taps: {
        skills: 'Skills',
        certificates: 'Certificates',
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
        skills: 'Open Skills Tab',
        certificates: 'Open Certificates Tab',
      },
    },
  },
  projects: {
    title: 'Projects',
  },
  contact: {
    title: 'windows_live_mail.exe',
    sendTo: 'To:',
    eMail: 'contact@mirkorinke.dev',
    contactFormName: 'Name:',
    contactFormEmail: 'From:',
    contactFormSubject: 'Subject:',
    contactFormPrivacyPolicyText1: 'I have read the',
    contactFormPrivacyPolicyText2: 'privacy policy',
    contactFormPrivacyPolicyText3:
      'and agree to the processing of my data as described.',
    contactFormSubmit: 'Submit',
    contactFormSubmitted: 'Submitted',
    placeholderName: 'Your name goes here',
    placeholderEmail: 'Your E-Mail goes here',
    placeholderSubject: 'Subject of the message',
    placeholderMessage: 'Hello Mirko, I am interested in...',
    requiredName: 'At least 2 characters (A-Z, a-z)',
    requiredEmail: 'Valid E-Mail is required',
    requiredSubject: 'Subject is required',
    requiredMessage: 'Message is required',
  },

  ariaLabels: {
    controls: {
      minimize: 'Minimize',
      maximize: 'Maximize',
      close: 'Close',
    },
    desktopIcon: {
      firstText: 'Open',
      secondText: 'Window',
    },
    links: {
      liveLink: 'Link to',
      github: 'Github Link for',
      organization: 'Link to Organization',
    },
    image: 'Image of',
  },
};
