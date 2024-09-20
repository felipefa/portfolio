export const allTechnologies = ['Android Studio', 'AppCenter', 'ChatGPT', 'Cypress', 'EJS', 'Expo', 'Express.js', 'Firebase', 'GSAP', 'Google AdMob', 'Google Cloud Vision', 'Husky', 'Ionic 3', 'Java', 'Jest', 'MaterialUI', 'MongoDB', 'MySQL', 'Next.js', 'Node.js', 'React Native', 'React Testing Library', 'React.js', 'Redux', 'Redux Saga', 'Redux Toolkit', 'Rive', 'SQLite', 'Storybook', 'Styled Components', 'Supabase', 'Tailwind CSS', 'TypeScript', 'Vercel', 'Web Speech API', 'WebSocket', 'Zustand'] as const;

type Technology = typeof allTechnologies[number];

export interface Project {
  key: string;
  description: string;
  title: string;
  date: Date;
  github?: string;
  link?: string;
  tech: Technology[];
}

export const projects: Record<string, Project> = {
  'zolar': {
    key: 'zolar',
    description: `A complete energy management system (EMS) solution, enabling users to monitor and optimise their solar power systems, manage electric vehicle charging, and control heat pump operations. With near real-time insights into total household energy consumption, it empowers users to maximise efficiency and reduce energy costs effortlessly.`,
    title: 'Zolar Compass',
    date: new Date('2024-03-15'),
    tech: ['React Native', 'TypeScript', 'Firebase', 'Zustand'],
  },
  'cooking': {
    key: 'cooking',
    description: `A mobile application designed to help users find recipes based on the ingredients they have at home. The app leverages the Supabase database to store and retrieve recipes, and React Native for cross-platform development. The project showcases my ability to create practical applications using modern technologies like Expo, TypeScript, and Supabase. The source code is openly available on GitHub.`,
    title: 'Cooking',
    date: new Date('2024-03-11'),
    github: 'https://github.com/felipefa/cooking',
    tech: ['React Native', 'TypeScript', 'Expo', 'Supabase'],
  },
  'react-notes': {
    key: 'react-notes',
    description: `A versatile note-taking application built with React.js and TypeScript. It leverages the Web Speech API for automatic audio-to-text conversion, allowing users to dictate their notes. The application features a dark mode for comfortable viewing in low-light environments and a responsive design for optimal user experience across devices. Hosted on Vercel, the project demonstrates the application of modern frontend technologies in creating practical solutions. The source code is openly available on GitHub, and the application can be accessed here.`,
    title: 'React Notes',
    date: new Date('2024-02-01'),
    github: 'https://github.com/felipefa/react-notes',
    link: 'https://react-audio-notes.vercel.app/',
    tech: ['React.js', 'TypeScript', 'Web Speech API', 'Tailwind CSS', 'Vercel'],
  },
  'hans': {
    key: 'hans',
    description: `A comprehensive React Native chatbot application designed to assist students with their homework. Built from scratch, the app integrates with ChatGPT and Google Cloud Vision to provide intelligent and interactive assistance. The application also leverages Firebase for backend services and Google AdMob for in-app advertising. While not the lead developer, I played a significant role in the project, providing assistance to other developers and contributing to the app’s architecture, design, and release on app stores. This project showcases my proficiency in React Native, TypeScript, and my ability to collaborate within a team.`,
    title: 'Hausaufgaben Hans',
    date: new Date('2023-05-01'),
    tech: ['React Native', 'TypeScript', 'Expo', 'ChatGPT', 'Firebase', 'Google Cloud Vision', 'Google AdMob'],
  },
  'toilet-games': {
    key: 'toilet-games',
    description: `An engaging React Native application that offers a collection of HTML5 games. The app features user authentication and incorporates Google ads for monetization. As a key contributor to the project, I worked closely with my team lead to handle all aspects of the app, from gathering requirements and designing the architecture to overseeing its release on app stores. The project demonstrates my comprehensive skills in React Native, TypeScript, and various other technologies including Expo, Redux Toolkit, Firebase, and Google AdMob.`,
    title: 'Toilet Games',
    date: new Date('2022-08-01'),
    tech: ['React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'React.js', 'Firebase', 'Node.js', 'Rive', 'Husky', 'Google AdMob'],
  },
  'newresolve': {
    key: 'newresolve',
    description: `A customer debt negotiation platform developed by NewDay. I contributed to the front-end development of the platform using Next.js and TypeScript. My responsibilities included creating storybooks for new components and conducting tests with React Testing Library and Cypress. The project was executed in a multicultural team setting, showcasing my ability to collaborate effectively in diverse environments. This project demonstrates my proficiency in a range of technologies including MaterialUI, Redux Toolkit, and Husky.`,
    title: 'NewResolve',
    date: new Date('2022-02-01'),
    tech: ['Next.js', 'TypeScript', 'React Testing Library', 'Cypress', 'Storybook', 'MaterialUI', 'Redux Toolkit', 'Husky'],
  },
  'trainline': {
    key: 'trainline',
    description: `Trainline is a leading platform for train and bus tickets, for which I worked as a front-end developer. The project allowed me to focus on building new features such as seat maps for Italy and France, and maintaining apps, including a Next.js app for discount cards purchase. I also contributed to white-labeling the main platform, enabling smaller companies to leverage Trainline’s robust infrastructure. During this time, I created storybooks for new components and conducted tests with Jest and Cypress. Working with multicultural teams on various aspects like B2C optimization and white-labeling, this project showcases my versatility and adaptability in diverse team environments.`,
    title: 'Trainline Web Platform',
    date: new Date('2021-08-01'),
    link: 'https://www.trainline.com',
    tech: ['React.js', 'TypeScript', 'Redux', 'Next.js', 'Jest', 'Cypress', 'Storybook', 'Husky'],
  },
  'tic-tac-joy': {
    key: 'tic-tac-joy',
    description: `An innovative game application built with React Native and TypeScript, offering a fresh take on the classic Tic Tac Toe. The app features both online and offline multiplayer modes, providing a versatile gaming experience. It also includes Google ads for monetization and offers user customization options. I played a significant role in the project, including releasing the app on app stores. This project showcases my ability to create engaging gaming applications using modern technologies like Expo, Firebase, and Google AdMob.`,
    title: 'Tic Tac Joy',
    date: new Date('2021-03-01'),
    tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Google AdMob', 'WebSocket'],
  },
  'vapa': {
    key: 'vapa',
    description: `An AI-driven tool for optimising Amazon Ads. As the main front-end developer, I used React.js, Redux, and MaterialUI to build a platform that increases sales and visibility on Amazon with minimal time investment. VAPA leverages reinforcement learning to adapt to various factors such as weather and time of day, shifting the media budget to maximize ad efficiency. This project showcases my ability to develop intelligent solutions that deliver tangible business results.`,
    title: 'VAPA',
    date: new Date('2020-08-01'),
    tech: ['React.js', 'Redux', 'MaterialUI'],
  },
  'vapa-landing-page': {
    key: 'vapa-landing-page',
    description: `The front-facing page of the AI-driven tool, VAPA. As the sole developer on this project, I was responsible for the reconstruction of the landing page using React.js, TailwindCSS, and GSAP. This project showcases my ability to independently create visually appealing and user-friendly web interfaces.`,
    title: 'VAPA Landing Page',
    date: new Date('2020-11-01'),
    link: 'https://www.vapa.ai',
    tech: ['React.js', 'Tailwind CSS', 'GSAP'],
  },
  'skipt': {
    key: 'skipt',
    description: `A robust full-stack chat application designed for seamless integration with WhatsApp in real-time. Developed using React.js, Node.js, and MongoDB, the application leverages WebSocket for instantaneous communication. The styling was accomplished with Styled Components, while Express.js was used for server-side operations. Testing was conducted using Jest, and TypeScript was employed for static typing. In addition to building the application, I also managed a team of two developers, overseeing task creation and assignment, and requirement gathering. This project underscores my proficiency in full-stack development and team management.`,
    title: 'Skipt',
    date: new Date('2020-08-01'),
    tech: ['React.js', 'Node.js', 'TypeScript', 'WebSocket', 'Styled Components', 'Express.js', 'Jest', 'MongoDB'],
  },
  'socket-chat': {
    key: 'socket-chat',
    description: `A simple, real-time chat application developed as a personal project to explore the use of WebSocket in real-time applications. The project, a monorepo, is built with Node.js and React.js, and uses TypeScript for static typing. The front-end leverages Styled Components for styling, while the back-end is built with Express.js. This project served as a proof of concept and a learning experience for working with WebSocket. The source code is openly available on GitHub.`,
    title: 'Socket Chat',
    date: new Date('2020-08-01'),
    github: 'https://github.com/felipefa/socket-chat',
    link: 'https://sochat.vercel.app/',
    tech: ['React.js', 'Node.js', 'TypeScript', 'WebSocket', 'Styled Components', 'Express.js'],
  },
  'fox-dc': {
    key: 'fox-dc',
    description: `A cross-platform application built with React Native for the FOX Digital Commodities company. I was responsible for the entire development process, from gathering requirements to building the app from scratch. This included creating the API with Node.js, designing the admin panel with React.js, and crafting the UI/UX design. I also managed a team of two other developers and handled the app’s release on the stores. The project demonstrates my comprehensive skills in full-stack development and team management.`,
    title: 'FOX Digital Commodities',
    date: new Date('2019-11-01'),
    link: 'https://play.google.com/store/apps/details?id=com.foxdc.app',
    tech: ['React Native', 'React.js', 'Node.js', 'Redux Saga', 'AppCenter', 'Express.js', 'MongoDB'],
  },
  'inquilio': {
    key: 'inquilio',
    description: `A cross-platform application developed for Android, iOS, and Web. This project marked my first experience with UI/UX design. Built in partnership with a friend, the app served as the foundation for each of our university thesis, mine focused on UI/UX. I took on the responsibility for the entire front-end development and UI/UX design. The application was developed using Ionic 3, TypeScript, and Firebase. This project showcases my initial foray into UI/UX design and my ability to develop a full-featured application. The source code is openly available on GitHub.`,
    title: 'Inquilio',
    date: new Date('2018-03-01'),
    github: 'https://github.com/frederikocmr/InquilioApp',
    tech: ['Ionic 3', 'TypeScript', 'Firebase'],
  },
  'sgbd': {
    key: 'sgbd',
    description: `A simplified system for managing grades, developed as the final project for a course focused on database management systems. The system was built using Node.js, MySQL, and EJS, demonstrating my ability to create functional applications with these technologies. The project served as a practical application of the theoretical concepts learned in the course. The source code is openly available on GitHub.`,
    title: 'Grades Control System',
    date: new Date('2018-11-01'),
    github: 'https://github.com/felipefa/controle-notas-sgbd',
    tech: ['Node.js', 'MySQL', 'EJS'],
  },
  'expense-among-friends': {
    key: 'expense-among-friends',
    description: `My first native Android application, developed as the final project for a university course. The app is designed to manage expenses among friends, calculating the exact amount each friend needs to pay based on their consumption or purchases. Built using Java, SQLite, and Android Studio, this project marks my initial venture into native Android development. The source code is openly available on GitHub.`,
    title: 'Expense Among Friends',
    date: new Date('2017-09-01'),
    github: 'https://github.com/felipefa/DespesaEntreAmigos',
    tech: ['Java', 'SQLite', 'Android Studio'],
  }
};