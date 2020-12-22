import projectsPdf from '../assets/projects-felipe_araujo.pdf';
import expanseAmongFriendsImage from '../images/expanse-among-friends.png';
import foxDcAppImage from '../images/fox-dc-app.png';
import foxDcWebImage from '../images/fox-dc-web.png';
import gradesControlImage from '../images/grades-control.png';
import inquilioImage from '../images/inquilio.png';
import laptopImage from '../images/laptop-bg.png';
import portfolioImage from '../images/portfolio.png';
import screensPdfImage from '../images/screens-pdf.png';
import vapaAiImage from '../images/vapa.ai.png';
import vapaDashboardImage from '../images/vapa-dashboard.png';

export default [
  {
    description: `I currently work as one of the front-end devs of VAPA, a tool for AI-driven Amazon Ads from Vorwärts GmbH.`,
    image: vapaDashboardImage,
    link: 'https://vapa.vorwaerts.com',
    title: 'VAPA',
    tech: ['React.js'],
  },
  {
    description: `In 2020 I was responsible for the reconstruction of VAPA's landing page.`,
    image: vapaAiImage,
    link: 'https://www.vapa.ai',
    title: 'VAPA Landing Page',
    tech: ['React.js'],
  },
  {
    description: `This very same website, made to showcase my work and who I am.`,
    github: 'https://github.com/felipefa/portfolio',
    image: portfolioImage,
    link: 'https://felipefa.now.sh',
    title: 'Portfolio',
    tech: ['React.js'],
  },
  {
    description: `An Android and iOS native app, made for the FOX Digital Commodities company. This app was built almost entirely by me from scratch, including it's API, admin panel and design (UI/UX).`,
    image: foxDcAppImage,
    link: 'https://play.google.com/store/apps/details?id=com.foxdc.app',
    title: 'FOX DC (Android and iOS)',
    tech: ['React Native'],
  },
  {
    description: 'The admin panel built to manage the FOX DC app.',
    image: foxDcWebImage,
    link: 'https://painel.foxdc.com.br',
    title: 'FOX DC (Web)',
    tech: ['React.js'],
  },
  {
    description: `The API behind the FOX DC app. Built with Node.js (Express) and MongoDB, it has complex calculations and automated tasks.`,
    image: laptopImage,
    title: 'FOX DC (API)',
    tech: ['Node.js', 'MongoDB'],
  },
  {
    description: `An app for Android, iOS and Web that was my very first experience with UI/UX. This app was built with the partnership of a friend that was responsible for the back-end, while I was responsible for the whole front-end.`,
    github: 'https://github.com/frederikocmr/InquilioApp',
    image: inquilioImage,
    title: 'Inquilio',
    tech: ['Ionic 3'],
  },
  {
    description: `A simplified grades control system built in 2018 as the final project for a subject focused on database management systems. Note that the project is hosted using a free heroku plan, so it may take a little while to load the first time.`,
    github: 'https://github.com/felipefa/controle-notas-sgbd',
    image: gradesControlImage,
    link: 'https://controle-notas-sgbd.herokuapp.com',
    title: 'Grades Control System',
    tech: ['Node.js', 'MySQL'],
  },
  {
    description: `My first real Android app, built as the final project for a class in college back in 2017.`,
    github: 'https://github.com/felipefa/DespesaEntreAmigos',
    image: expanseAmongFriendsImage,
    title: 'Expense Among Friends',
    tech: ['Java', 'SQLite'],
  },
  {
    description: `Here you can download a pdf containing a better explanation of the projects and more screenshots.`,
    isPdf: true,
    link: projectsPdf,
    image: screensPdfImage,
    title: 'Others',
  },
];
