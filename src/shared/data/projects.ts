export interface Project {
  key: string;
  description: string;
  title: string;
  github?: string;
  link?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    key: 'react-notes',
    description: `A note-taking app with automatic audio to text conversion built with React.js and TypeScript.`,
    title: 'React Notes',
    github: 'https://github.com/felipefa/react-notes',
    link: 'https://react-audio-notes.vercel.app/',
    tech: ['React.js', 'TypeScript', 'Web Speech API', 'TailwindCSS', 'Vercel'],
  },
  {
    key: 'hans',
    description: `A React Native chatbot app I built (including its architecture and design) integrating with ChatGPT and Google Cloud Vision.`,
    title: 'Hausaufgaben Hans',
    tech: ['React Native', 'TypeScript', 'Expo', 'ChatGPT', 'Firebase', 'Google Cloud Vision', 'Google AdMob'],
  },
  {
    key: 'toilet-games',
    description: `A React Native app that bundles HTML5 games.`,
    title: 'Toilet Games',
    tech: ['React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'React.js', 'Firebase', 'Node.js', 'Rive', 'Husky', 'Google AdMob'],
  },
  {
    key: 'newresolve',
    description: `I contributed to the front-end development of NewResolve, a platform where NewDay agents can use to facilitate customer debt negotiation.`,
    title: 'NewResolve',
    tech: ['Next.js', 'TypeScript', 'React Testing Library', 'Cypress', 'Storybook', 'MaterialUI', 'Redux Toolkit', 'Husky'],
  },
  {
    key: 'trainline',
    description: `I worked as a front-end developer for Trainline, a company that provides a platform for train and bus tickets.`,
    link: 'https://www.trainline.com',
    title: 'Trainline',
    tech: ['React.js', 'TypeScript', 'Redux', 'Next.js', 'Jest', 'Cypress', 'Storybook', 'Husky'],
  },
  {
    key: 'tic-tac-joy',
    description: `A React Native game app built around a completely new idea based on Tic Tac Toe. The app also includes online and offline multiplayer modes, as well as google ads and user customisation.`,
    title: 'Tic Tac Joy',
    tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Google AdMob'],
  },
  {
    key: 'vapa',
    description: `I was the main front-end developer of VAPA, a tool for AI-driven Amazon Ads from Vorwärts GmbH.`,
    title: 'VAPA',
    tech: ['React.js', 'Redux', 'MaterialUI'],
  },
  {
    key: 'vapa-landing-page',
    description: `I led the reconstruction of VAPA's landing page.`,
    link: 'https://www.vapa.ai',
    title: 'VAPA Landing Page',
    tech: ['React.js', 'TailwindCSS', 'GSAP'],
  },
  {
    key: 'skipt',
    description: `I built a full stack chat app for real time WhatsApp integration.`,
    title: 'Skipt',
    tech: ['React.js', 'Node.js', 'TypeScript', 'WebSockets', 'Styled Components', 'Express.js', 'Jest', 'MongoDB'],
  },
  {
    key: 'fox-dc',
    description: `An Android and iOS native app, made for the FOX Digital Commodities company. This app was built from scratch, including it's API, admin panel and design (UI/UX).`,
    link: 'https://play.google.com/store/apps/details?id=com.foxdc.app',
    title: 'FOX Digital Commodities',
    tech: ['React Native', 'React.js', 'Node.js', 'Redux Saga', 'AppCenter', 'Express.js', 'MongoDB'],
  },
  {
    key: 'inquilio',
    description: `An app for Android, iOS and Web that was my very first experience with UI/UX. This app was built with the partnership of a friend that was responsible for the back-end, while I was responsible for the whole front-end.`,
    github: 'https://github.com/frederikocmr/InquilioApp',
    title: 'Inquilio',
    tech: ['Ionic 3', 'TypeScript', 'Firebase'],
  },
  {
    key: 'sgbd',
    description: `A simplified grades control system built in 2018 as the final project for a subject focused on database management systems.`,
    github: 'https://github.com/felipefa/controle-notas-sgbd',
    title: 'Grades Control System',
    tech: ['Node.js', 'MySQL', 'EJS'],
  },
  {
    key: 'expense-among-friends',
    description: `My first native Android app, built as the final project for a class in university.`,
    github: 'https://github.com/felipefa/DespesaEntreAmigos',
    title: 'Expense Among Friends',
    tech: ['Java', 'SQLite'],
  },
];