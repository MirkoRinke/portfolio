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
  links: {
    [key: string]: string;
    home: string;
    aboutMe: string;
    dailySchedule: string;
    expertise: string;
    projects: string;
    contact: string;
  };
  ariaLabels: {
    menu: string;
    links: {
      [key: string]: string;
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
    [key: string]: string;
    blue: string;
    turquoise: string;
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
    links: {
      home: 'Startseite',
      aboutMe: 'Über mich',
      dailySchedule: 'Tagesablauf',
      expertise: 'Expertise',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
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
      blue: 'Farbmodus wechseln zu Blau',
      turquoise: 'Farbmodus wechseln zu Türkis',
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
    subHeading: 'Code schreiben, Probleme lösen, Kaffee trinken',
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
      title: 'platzhalter.bmp',
    },
    infoBox: {
      infoBox0: {
        title: 'projekte_umsetzen.txt',
        textarea:
          'Durch den Einsatz modernster Technologien bringe ich Ideen digital zum Leben und entwickle benutzerfreundliche sowie ästhetisch ansprechende Weblösungen, die Komplexes einfach wirken lassen.',
      },
      infoBox1: {
        title: 'remote_lifestyle.txt',
        textarea:
          'Ich genieße die Flexibilität ortsunabhängiger Arbeit und die Work-Life-Balance, die sie ermöglicht.',
      },
      infoBox2: {
        title: 'fokus_und_teamarbeit.txt',
        textarea:
          'Ich arbeite gerne eigenständig und fokussiert, bringe aber ebenso gerne meine Ideen in einem kreativen Team ein, um Projekte gemeinsam voranzubringen.',
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
    title: 'code.flow',
    heading: 'Tägliche Coding-Abenteuer',
    contribution: 'Beitrag',
    contributions: 'Beiträge',
    githubGraphTitle: '365 Tage Codeflow',
    details: [
      {
        title: 'Von der Idee zur Umsetzung',
        description:
          'Mir macht es Spaß, aus einer vagen Idee ein funktionierendes Produkt zu entwickeln. Schritt für Schritt arbeite ich an jedem Detail, um die Idee in etwas Greifbares zu verwandeln.',
      },
      {
        title: 'Völlig im Code Versunken',
        description:
          'Es gibt kaum etwas Besseres, als komplett in die Programmierung einzutauchen. Stunden vergehen, ohne dass ich es merke, wenn ich an einer kniffligen Aufgabe arbeite.',
      },
      {
        title: 'Level für Level vorankommen',
        description:
          'Programmieren ist wie Gaming für mich. Jede Zeile Code bringt mich ein Level weiter und neue Aufgaben warten darauf, gemeistert zu werden.',
      },
      {
        title: 'Kontinuierliches Lernen',
        description:
          'In der Programmierung gibt es keinen Stillstand, und genau das gefällt mir. Jeden Tag gibt es etwas Neues zu entdecken, sei es eine andere Herangehensweise, ein neues Framework oder einfach ein smarterer Weg, etwas zu lösen.',
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
    placeholderMessage:
      'Hi Mirko, ich hätte Interesse an einer Zusammenarbeit im Bereich...',
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
    links: {
      home: 'Home',
      aboutMe: 'About me',
      dailySchedule: 'My Coding Day',
      expertise: 'Expertise',
      projects: 'Projects',
      contact: 'Contact',
    },
    ariaLabels: {
      menu: 'Open Menu',
      links: {
        home: 'Link to Home',
        aboutMe: 'Link to About me',
        dailySchedule: 'Link to My Coding Day',
        expertise: 'Link to Skills',
        projects: 'Link to Projects',
        contact: 'Link to Contact',
      },
    },
  },
  colorToggle: {
    ariaLabels: {
      blue: 'Change color mode to Blue',
      turquoise: 'Change color mode to Turquoise',
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
    subHeading: 'Writing code, solving problems, drinking coffee',
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
      title: 'placeholder.bmp',
    },
    infoBox: {
      infoBox0: {
        title: 'developing_projects.txt',
        textarea:
          'I use current web technologies to develop practical and appealing applications that also clearly represent complex functions.',
      },
      infoBox1: {
        title: 'remote_lifestyle.txt',
        textarea:
          'I enjoy the flexibility of remote work and the work-life balance it enables.',
      },
      infoBox2: {
        title: 'focus_and_teamwork.txt',
        textarea:
          'I enjoy working independently and focused, but I also like to contribute my ideas in a creative team to advance projects together.',
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
    title: 'code.flow',
    heading: 'Daily Coding Adventures',
    contribution: 'Contribution',
    contributions: 'Contributions',
    githubGraphTitle: '365 Days of Codeflow',
    details: [
      {
        title: 'From Idea to Implementation',
        description:
          'I enjoy turning a vague idea into a working product. Step by step, I work on every detail to transform the idea into something tangible.',
      },
      {
        title: 'Completely Immersed in Code',
        description:
          'There is hardly anything better than completely immersing yourself in programming. Hours pass without me noticing when I am working on a tricky task.',
      },
      {
        title: 'Leveling Up Step by Step',
        description:
          'Programming is like gaming for me. Every line of code brings me a level up and new tasks are waiting to be mastered.',
      },
      {
        title: 'Continuous Learning',
        description:
          'There is no standstill in programming, and that is exactly what I like. Every day there is something new to discover, be it a different approach, a new framework or simply a smarter way to solve something.',
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
    placeholderMessage:
      'Hi Mirko, I would be interested in a collaboration in the field of...',
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
