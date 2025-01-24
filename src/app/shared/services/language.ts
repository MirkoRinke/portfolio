export interface Texts {
  index: IndexTexts;
  navigation: navigationTexts;
  colorToggle: ColorToggleTexts;
  languageToggle: languageToggleTexts;
  hero: HeroTexts;
  menu: MenuTexts;
  aboutMe: aboutMeTexts;
  projects: projectsTexts;
  expertise: Expertise;
  contact: ContactTexts;
  taskbar: TaskbarTexts;
  footer: FooterTexts;
  general: GeneralTexts;
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
  ariaLabels: {
    menu: string;
  };
}

interface ColorToggleTexts {
  ariaLabels: {
    turquoise: string;
    blue: string;
    violett: string;
  };
}

interface languageToggleTexts {
  ariaLabels: {
    de: string;
    en: string;
  };
}

interface HeroTexts {
  subHeading: string;
  mainHeading: string;
  contactMe: string;
  ariaLabels: {
    contactMe: string;
  };
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

interface MenuTexts {
  title: string;
}

interface Expertise {
  title: string;
  certificates: {
    certificateModal: {
      content: string;
    };
  };
  taps: {
    [key: string]: string;
    skills: string;
    certificates: string;
  };
  icons: {
    [key: string]: string;
    skills: string;
    certificates: string;
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
  ariaLabels: {
    taps: {
      firstText: string;
      secondText: string;
    };
  };
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
  ariaLabels: {
    privacyPolicy: string;
    nameInput: string;
    eMailInput: string;
    subjectInput: string;
    messageInput: string;
    privacyPolicyLink: string;
  };
}

interface TaskbarTexts {
  taps: {
    [key: string]: string;
    tap0: string;
  };
  ariaLabels: {
    currentTime: string;
    taps: {
      firstText: string;
      secondText: string;
    };
  };
}

interface FooterTexts {
  imprint: string;
  privacyPolicy: string;
  ariaLabels: {
    links: {
      imprint: string;
      privacyPolicy: string;
    };
    copyright: string;
    navigation: string;
  };
}

interface GeneralTexts {
  links: {
    github: string;
    linkedin: string;
    organization: string;
  };
  ariaLabels: {
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
      github: string;
      linkedin: string;
      organization: string;
    };
    image: string;
    logo: string;
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
    ariaLabels: {
      menu: 'Menü öffnen',
    },
  },
  colorToggle: {
    ariaLabels: {
      turquoise: 'Farbmodus wechseln zu Türkis (Standard)',
      blue: 'Farbmodus wechseln zu Blau',
      violett: 'Farbmodus wechseln zu Violett',
    },
  },
  languageToggle: {
    ariaLabels: {
      de: 'Sprache wechseln zu Deutsch',
      en: 'Sprache wechseln zu Englisch',
    },
  },
  hero: {
    subHeading: 'Frontend-Entwickler',
    mainHeading: 'Mirko Rinke',
    contactMe: 'Kontaktiere mich',
    ariaLabels: {
      contactMe: 'Kontaktiere mich Button',
    },
  },
  menu: {
    title: 'menu.bat',
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
    },
    taps: {
      skills: 'Fähigkeiten',
      certificates: 'Zertifikate',
    },
    icons: {
      skills: 'skills',
      certificates: 'certificates',
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
    ariaLabels: {
      taps: {
        firstText: 'Öffnen',
        secondText: 'Projekt',
      },
    },
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
    placeholderName: 'Ihr Name',
    placeholderEmail: 'Ihre E-Mail',
    placeholderSubject: 'Betreff der Nachricht',
    placeholderMessage: 'Hallo Mirko, ich bin interessiert an...',
    requiredName: 'Min. 2 Buchstaben',
    requiredEmail: 'E-Mail erforderlich',
    requiredSubject: 'Betreff benötigt',
    requiredMessage: 'Nachricht nötig',
    ariaLabels: {
      privacyPolicy: 'Datenschutzerklärung akzeptieren',
      nameInput: 'Name Eingabefeld',
      eMailInput: 'E-Mail Eingabefeld',
      subjectInput: 'Betreff Eingabefeld',
      messageInput: 'Nachricht eingeben Feld',
      privacyPolicyLink: 'Link zur Datenschutzerklärung',
    },
  },
  taskbar: {
    taps: {
      tap0: 'snake.exe',
    },
    ariaLabels: {
      currentTime: 'Aktuelle Uhrzeit und Datum',
      taps: {
        firstText: 'Öffnen',
        secondText: 'Fenster',
      },
    },
  },
  footer: {
    imprint: 'Impressum',
    privacyPolicy: 'Datenschutzerklärung',
    ariaLabels: {
      links: {
        imprint: 'Link zum Impressum',
        privacyPolicy: 'Link zur Datenschutzerklärung',
      },
      copyright: 'Copyright Mirko Rinke',
      navigation: 'Footer Navigation"',
    },
  },
  general: {
    links: {
      github: 'https://github.com/MirkoRinke',
      linkedin: 'https://www.linkedin.com/in/mirkorinke',
      organization: 'https://github.com/CodeNex',
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
        github: 'Link zu meinem Github-Profil',
        linkedin: 'Link zu meinem LinkedIn-Profil',
        organization: 'Link zur Organisation',
      },
      image: 'Bild von',
      logo: 'Portfolio Logo',
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
    ariaLabels: {
      menu: 'Open Menu',
    },
  },
  colorToggle: {
    ariaLabels: {
      turquoise: 'Change color mode to Turquoise (Default)',
      blue: 'Change color mode to Blue',
      violett: 'Change color mode to Violett',
    },
  },
  languageToggle: {
    ariaLabels: {
      de: 'Change language to German',
      en: 'Change language to English',
    },
  },
  hero: {
    subHeading: 'Frontend Developer',
    mainHeading: 'Mirko Rinke',
    contactMe: 'Contact me',
    ariaLabels: {
      contactMe: 'Contact me Button',
    },
  },
  menu: {
    title: 'menu.bat',
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
    },
    taps: {
      skills: 'Skills',
      certificates: 'Certificates',
    },
    icons: {
      skills: 'skills',
      certificates: 'certificates',
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
    ariaLabels: {
      taps: {
        firstText: 'Open',
        secondText: 'project',
      },
    },
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
    placeholderName: 'Your Name',
    placeholderEmail: 'Your E-Mail',
    placeholderSubject: 'Subject of the message',
    placeholderMessage: 'Hello Mirko, I am interested in...',
    requiredName: 'Min. 2 letters',
    requiredEmail: 'E-Mail is required',
    requiredSubject: 'Subject is required',
    requiredMessage: 'Message is required',
    ariaLabels: {
      privacyPolicy: 'Accept Privacy Policy',
      nameInput: 'Name input field',
      eMailInput: 'E-Mail input field',
      subjectInput: 'Subject input field',
      messageInput: 'Enter message field',
      privacyPolicyLink: 'Link to Privacy Policy',
    },
  },
  taskbar: {
    taps: {
      tap0: 'snake.exe',
    },
    ariaLabels: {
      currentTime: 'Current time and date',
      taps: {
        firstText: 'Open',
        secondText: 'Window',
      },
    },
  },
  footer: {
    imprint: 'Imprint',
    privacyPolicy: 'Privacy Policy',
    ariaLabels: {
      links: {
        imprint: 'Link to Imprint',
        privacyPolicy: 'Link to Privacy Policy',
      },
      copyright: 'Copyright Mirko Rinke',
      navigation: 'Footer Navigation',
    },
  },
  general: {
    links: {
      github: 'https://github.com/MirkoRinke',
      linkedin: 'https://www.linkedin.com/in/mirkorinke',
      organization: 'https://github.com/CodeNex',
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
        github: 'Link to my Github profile',
        linkedin: 'Link to my LinkedIn profile',
        organization: 'Link to organization',
      },
      image: 'Image of',
      logo: 'Portfolio Logo',
    },
  },
};
