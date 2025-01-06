export interface Skill {
  name: string;
  icon: string;
  alt: string;
  visibility: boolean;
}

export const TECH_SKILLS: Skill[] = [
  {
    name: 'HTML',
    icon: 'HTML',
    alt: 'HTML Logo',
    visibility: true,
  },
  {
    name: 'CSS',
    icon: 'CSS',
    alt: 'CSS Logo',
    visibility: false,
  },
  {
    name: 'SCSS',
    icon: 'SCSS',
    alt: 'SCSS Logo',
    visibility: true,
  },
  {
    name: 'Material Design',
    icon: 'materialDesign',
    alt: 'Material Design Logo',
    visibility: false,
  },
  {
    name: 'JavaScript',
    icon: 'javaScript',
    alt: 'JavaScript Logo',
    visibility: false,
  },
  {
    name: 'TypeScript',
    icon: 'typeScript',
    alt: 'TypeScript Logo',
    visibility: true,
  },
  {
    name: 'Angular',
    icon: 'angular',
    alt: 'Angular Logo',
    visibility: true,
  },
  {
    name: 'Firebase',
    icon: 'firebase',
    alt: 'Firebase Logo',
    visibility: false,
  },
  {
    name: 'GIT',
    icon: 'GIT',
    alt: 'GIT Logo',
    visibility: true,
  },
  {
    name: 'REST API',
    icon: 'API',
    alt: 'REST API Logo',
    visibility: true,
  },
  {
    name: 'Docker',
    icon: 'docker',
    alt: 'Docker Logo',
    visibility: true,
  },
  {
    name: 'Node js',
    icon: 'node',
    alt: 'node js Logo',
    visibility: false,
  },
  {
    name: 'PHP',
    icon: 'PHP',
    alt: 'PHP Logo',
    visibility: false,
  },
  {
    name: 'Figma',
    icon: 'figma',
    alt: 'Figma Logo',
    visibility: true,
  },
];

export const LEARNING_SKILLS: Skill[] = [
  {
    name: 'React',
    icon: 'react',
    alt: 'React Logo',
    visibility: false,
  },
  {
    name: 'Vue Js',
    icon: 'vue',
    alt: 'Vue Js Logo',
    visibility: false,
  },
];
