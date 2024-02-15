export interface Project {
  key: string;
  description: string;
  title: string;
  date: Date;
  github?: string;
  link?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    key: 'react-notes',
    description: `A note-taking app with automatic audio to text conversion built with React.js and TypeScript.`,
    title: 'React Notes',
    date: new Date('2024-02-01'),
    github: 'https://github.com/felipefa/react-notes',
    link: 'https://react-audio-notes.vercel.app/',
    tech: ['React.js', 'TypeScript', 'Web Speech API', 'TailwindCSS', 'Vercel'],
  },
  {
    key: 'hans',
    description: `A React Native chatbot app I built (including its architecture and design) integrating with ChatGPT and Google Cloud Vision.`,
    title: 'Hausaufgaben Hans',
    date: new Date('2023-05-01'),
    tech: ['React Native', 'TypeScript', 'Expo', 'ChatGPT', 'Firebase', 'Google Cloud Vision', 'Google AdMob'],
  },
  {
    key: 'toilet-games',
    description: `A React Native app that bundles HTML5 games.`,
    title: 'Toilet Games',
    date: new Date('2022-08-01'),
    tech: ['React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'React.js', 'Firebase', 'Node.js', 'Rive', 'Husky', 'Google AdMob'],
  },
  {
    key: 'newresolve',
    description: `I contributed to the front-end development of NewResolve, a platform where NewDay agents can use to facilitate customer debt negotiation.`,
    title: 'NewResolve',
    date: new Date('2022-02-01'),
    tech: ['Next.js', 'TypeScript', 'React Testing Library', 'Cypress', 'Storybook', 'MaterialUI', 'Redux Toolkit', 'Husky'],
  },
  {
    key: 'trainline',
    description: `I worked as a front-end developer for Trainline, a company that provides a platform for train and bus tickets.`,
    title: 'Trainline',
    date: new Date('2021-08-01'),
    link: 'https://www.trainline.com',
    tech: ['React.js', 'TypeScript', 'Redux', 'Next.js', 'Jest', 'Cypress', 'Storybook', 'Husky'],
  },
  {
    key: 'tic-tac-joy',
    description: `A React Native game app built around a completely new idea based on Tic Tac Toe. The app also includes online and offline multiplayer modes, as well as google ads and user customisation.`,
    title: 'Tic Tac Joy',
    date: new Date('2021-03-01'),
    tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Google AdMob'],
  },
  {
    key: 'vapa',
    description: `I was the main front-end developer of VAPA, a tool for AI-driven Amazon Ads from Vorwärts GmbH.`,
    title: 'VAPA',
    date: new Date('2020-08-01'),
    tech: ['React.js', 'Redux', 'MaterialUI'],
  },
  {
    key: 'vapa-landing-page',
    description: `I led the reconstruction of VAPA's landing page.`,
    title: 'VAPA Landing Page',
    date: new Date('2020-11-01'),
    link: 'https://www.vapa.ai',
    tech: ['React.js', 'TailwindCSS', 'GSAP'],
  },
  {
    key: 'skipt',
    description: `I built a full stack chat app for real time WhatsApp integration.`,
    title: 'Skipt',
    date: new Date('2020-07-01'),
    tech: ['React.js', 'Node.js', 'TypeScript', 'WebSockets', 'Styled Components', 'Express.js', 'Jest', 'MongoDB'],
  },
  {
    key: 'fox-dc',
    description: `An Android and iOS native app, made for the FOX Digital Commodities company. This app was built from scratch, including it's API, admin panel and design (UI/UX).`,
    title: 'FOX Digital Commodities',
    date: new Date('2019-11-01'),
    link: 'https://play.google.com/store/apps/details?id=com.foxdc.app',
    tech: ['React Native', 'React.js', 'Node.js', 'Redux Saga', 'AppCenter', 'Express.js', 'MongoDB'],
  },
  {
    key: 'inquilio',
    description: `An app for Android, iOS and Web that was my very first experience with UI/UX. This app was built with the partnership of a friend that was responsible for the back-end, while I was responsible for the whole front-end.`,
    title: 'Inquilio',
    date: new Date('2018-03-01'),
    github: 'https://github.com/frederikocmr/InquilioApp',
    tech: ['Ionic 3', 'TypeScript', 'Firebase'],
  },
  {
    key: 'sgbd',
    description: `A simplified grades control system built in 2018 as the final project for a subject focused on database management systems.`,
    title: 'Grades Control System',
    date: new Date('2018-11-01'),
    github: 'https://github.com/felipefa/controle-notas-sgbd',
    tech: ['Node.js', 'MySQL', 'EJS'],
  },
  {
    key: 'expense-among-friends',
    description: `My first native Android app, built as the final project for a class in university.`,
    title: 'Expense Among Friends',
    date: new Date('2017-09-01'),
    github: 'https://github.com/felipefa/DespesaEntreAmigos',
    tech: ['Java', 'SQLite', 'Android Studio'],
  },
];