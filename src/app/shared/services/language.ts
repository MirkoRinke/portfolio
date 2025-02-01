export interface Texts {
  index: IndexTexts;
  navigation: navigationTexts;
  colorToggle: ColorToggleTexts;
  languageToggle: languageToggleTexts;
  hero: HeroTexts;
  menu: MenuTexts;
  aboutMe: aboutMeTexts;
  dailySchedule: DailyScheduleTexts;
  projects: projectsTexts;
  expertise: Expertise;
  contact: ContactTexts;
  taskbar: TaskbarTexts;
  footer: FooterTexts;
  snake: SnakeTexts;
  general: GeneralTexts;
}

interface IndexTexts {
  title: string;
  description: string;
}

interface navigationTexts {
  home: string;
  aboutMe: string;
  dailySchedule: string;
  expertise: string;
  projects: string;
  contact: string;
  ariaLabels: {
    menu: string;
    links: {
      home: string;
      aboutMe: string;
      dailySchedule: string;
      expertise: string;
      projects: string;
      contact: string;
    };
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

interface DailyScheduleTexts {
  title: string;
  heading: string;
  contribution: string;
  contributions: string;
  githubGraphTitle: string;
  details: {
    title: string;
    description: string;
  }[];
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

interface SnakeTexts {
  title: string;
  button: {
    start: string;
    gameOver: string;
    restart: string;
  };
  touchscreen: string;
  ariaLabels: {
    controls: {
      moveUP: string;
      moveDown: string;
      moveLeft: string;
      moveRight: string;
    };
    showControls: string;
    hideControls: string;
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
    dailySchedule: 'Tagesablauf',
    expertise: 'Expertise',
    projects: 'Projekte',
    contact: 'Kontakt',
    ariaLabels: {
      menu: 'Menü öffnen',
      links: {
        home: 'Link zur Startseite',
        aboutMe: 'Link zu Über mich',
        dailySchedule: 'Link zu Tagesablauf',
        expertise: 'Link zu Fähigkeiten',
        projects: 'Link zu Projekte',
        contact: 'Link zu Kontakt',
      },
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
        title: 'moderne-loesungen.txt',
        textarea:
          'Ich liebe es, Ideen in die digitale Welt zu bringen. Mit modernen Webtechnologien gestalte ich benutzerfreundliche, ästhetische Oberflächen, die es ermöglichen, Ideen in einfache und funktionale Weblösungen umzusetzen.',
      },
      infoBox1: {
        title: 'modernes_arbeiten.txt',
        textarea:
          'Aktuell liegt mein Fokus auf Remote-Arbeit. Ich schätze die Flexibilität, meine Zeit selbst zu managen, sowie die ausgewogene Work-Life-Balance, die diese Arbeitsweise ermöglicht.',
      },
      infoBox2: {
        title: 'teamwork_und_eigenständigkeit.txt',
        textarea:
          'Ich arbeite gerne im Team, um gemeinsam innovative Lösungen zu entwickeln, schätze aber auch die Möglichkeit, eigenständig an Projekten zu arbeiten und meine eigenen Ideen umzusetzen.',
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
  dailySchedule: {
    title: 'tagesablauf.repeat',
    heading: 'Tägliche Coding-Abenteuer',
    contribution: 'Beitrag',
    contributions: 'Beiträge',
    githubGraphTitle: '365 Tage Codeflow',
    details: [
      {
        title: 'Innovative Lösungen',
        description:
          'Programmieren ist für mich wie Gaming jede Zeile Code und jede Aufgabe fühlt sich an wie ein neues Level, das darauf wartet, gemeistert zu werden.',
      },
      {
        title: 'Völlig im Code Versunken',
        description:
          'Ich liebe es, mich stundenlang in Projekte zu vertiefen, Probleme zu lösen und kreative Wege zu finden und komplexe Herausforderungen zu bewältigen.',
      },
      {
        title: 'Herausforderungen bewältigen',
        description:
          'Jede Herausforderung ist eine Gelegenheit, kreativ zu werden und neue Lösungswege zu entdecken.',
      },
      {
        title: 'Kontinuierliches Lernen',
        description:
          'Jeden Tag setze ich mir das Ziel, Neues zu lernen, meine Grenzen zu erweitern und mich durch neue Herausforderungen weiterzuentwickeln.',
      },
    ],
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
  snake: {
    title: 'snake.exe',
    button: {
      start: 'Spiel starten',
      gameOver: 'Spiel vorbei, nochmal spielen',
      restart: 'Du hast gewonnen, nochmal spielen',
    },
    touchscreen: 'Touchscreen Steuerung',
    ariaLabels: {
      controls: {
        moveUP: 'Nach oben bewegen',
        moveDown: 'Nach unten bewegen',
        moveLeft: 'Nach links bewegen',
        moveRight: 'Nach rechts bewegen',
      },
      showControls: 'Touchscreen Steuerung anzeigen',
      hideControls: 'Touchscreen Steuerung verbergen',
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
    dailySchedule: 'Daily Schedule',
    expertise: 'Expertise',
    projects: 'Projects',
    contact: 'Contact',
    ariaLabels: {
      menu: 'Open Menu',
      links: {
        home: 'Link to Home',
        aboutMe: 'Link to About me',
        dailySchedule: 'Link to Daily Schedule',
        expertise: 'Link to Skills',
        projects: 'Link to Projects',
        contact: 'Link to Contact',
      },
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
        title: 'modern-solutions.txt',
        textarea:
          'I love bringing ideas to life in the digital world. Using modern web technologies, I create user-friendly, aesthetic interfaces that turn concepts into simple and functional web solutions.',
      },
      infoBox1: {
        title: 'remote-work.txt',
        textarea:
          'Currently, I focus on remote work. I value the flexibility to manage my own time and the healthy work-life balance that this way of working offers.',
      },
      infoBox2: {
        title: 'teamwork_and_independence.txt',
        textarea:
          'I enjoy collaborating in a team to develop innovative solutions, but I also appreciate the opportunity to work independently on projects and bring my own ideas to life.',
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
  dailySchedule: {
    title: 'daily_schedule.repeat',
    heading: 'Daily Coding Adventures',
    contribution: 'Contribution',
    contributions: 'Contributions',
    githubGraphTitle: '365 Days of Codeflow',
    details: [
      {
        title: 'Innovative Solutions',
        description:
          'Coding feels like gaming to me—every line of code and every task is like a new level waiting to be conquered.',
      },
      {
        title: 'Deep Focus on Code',
        description:
          'I love immersing myself in projects for hours, solving problems, and finding creative ways to tackle complex challenges.',
      },
      {
        title: 'Overcoming Challenges',
        description:
          'Every challenge is an opportunity to think outside the box and discover new approaches.',
      },
      {
        title: 'Continuous Learning',
        description:
          'Each day, I aim to learn something new, push my boundaries, and grow by embracing new challenges.',
      },
    ],
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
  snake: {
    title: 'snake.exe',
    button: {
      start: 'Start Game',
      gameOver: 'Game Over, Play Again',
      restart: 'You won, play again',
    },
    touchscreen: 'Touchscreen controls',
    ariaLabels: {
      controls: {
        moveUP: 'Move up',
        moveDown: 'Move down',
        moveLeft: 'Move left',
        moveRight: 'Move right',
      },
      showControls: 'Show touchscreen controls',
      hideControls: 'Hide touchscreen controls',
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
