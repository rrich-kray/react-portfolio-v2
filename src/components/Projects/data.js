// eslint-disable-next-line import/no-anonymous-default-export
import ticTacToe from "../../assets/images/tic-tac-toe.png";
import ticTacToeVid from "./videos/tictactoe.webm";
import kanbanVid from "./videos/kanban.webm";
import codingQuizVid from "./videos/coding-quiz.webm";
import commentsSectionVid from "./videos/comments-section.webm";
import dropdownVid from "./videos/dropdown.webm";
import ghUserSearchVid from "./videos/gh-user-search.webm";
import reactLandingPageVid from "./videos/react-landing-page.webm";
import passGenVid from "./videos/pass-gen.webm";
import adviceGenVid from "./videos/advice-gen.webm";

export default [
  {
    id: 1,
    name: "Employee Tracker",
    ghRepository: "https://github.com/rrich-kray/employee-tracker",
    deploymentLink: "",
    summary: "Node.js application that stores employee data.",
    description:
      "Employee Tracker provides users a means to store, view, update and delete employee, department and role data. While challenging, this project provided a great opportunity to practice working with SQL queries. In the future, I intend to integrate this application with a front end.",
    video: "",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/employee-tracker/main/assets/images/screen2.png",
  },
  {
    id: 2,
    name: "Team Profile Generator",
    ghRepository: "https://github.com/rrich-kray/team-profile-generator",
    deploymentLink: "",
    summary:
      "Node.js application that programmatically generates HTML containing a team profile",
    description: "",
    video: "",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/team-profile-generator/main/assets/images/screen1.png",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    ghRepository: "https://github.com/rrich-kray/weather-dashboard",
    deploymentLink: "https://rrich-kray.github.io/weather-dashboard/",
    summary:
      "Dashboard that displays current and forecasted weather data from the OpenWeatherMap API",
    description: "",
    video: "",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/weather-dashboard/main/assets/images/screen1.png",
  },
  {
    id: 4,
    name: "Professional README Generator",
    ghRepository: "https://github.com/rrich-kray/professional-readme-generator",
    deploymentLink: "",
    summary:
      "Programmatically generates professional README files using Node.js.",
    description: "",
    video: "",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/professional-readme-generator/main/assets/images/screen1.png",
  },
  // {
  //   id: 5,
  //   name: "Taskinator",
  //   ghRepository: "https://github.com/rrich-kray/taskinator",
  //   deploymentLink: "https://rrich-kray.github.io/taskinator/",
  //   summary: "To-Do list application.",
  // description: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/taskinator/main/assets/images/screen1.png",
  // },
  // {
  //   id: 6,
  //   name: "Horiseon Landing Page",
  //   ghRepository: "https://github.com/rrich-kray/Your-Landing-Spot-for-Success",
  //   deploymentLink:
  //     "https://rrich-kray.github.io/Your-Landing-Spot-for-Success/",
  //   summary: "Landing page for fictional company.",
  //   description: "",
  //   video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/Your-Landing-Spot-for-Success/main/Develop/assets/images/landing-page.png",
  // },
  {
    id: 7,
    name: "Random Password Generator",
    ghRepository: "https://github.com/rrich-kray/password-generator",
    deploymentLink: "https://rrich-kray.github.io/password-generator/",
    summary: "Generates a random password of specified length and content.",
    description: "",
    video: passGenVid,
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/password-generator/main/Develop/assets/images/RPG.png",
  },
  // {
  //   id: 8,
  //   name: "Express Note Taker",
  //   ghRepository: "https://github.com/rrich-kray/express-note-taker",
  //   deploymentLink: "https://note-taker-rrich-kray.herokuapp.com/",
  //   summary:
  //     "Application that stores user notes within an express.js server.",
  // description: "",
  // video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/express-note-taker/main/assets/images/screen1.png",
  // },
  // {
  //   id: 9,
  //   name: "Taskmaster Pro",
  //   ghRepository: "https://github.com/rrich-kray/Taskmaster-Pro",
  //   deploymentLink: "https://rrich-kray.github.io/Taskmaster-Pro/",
  //   summary: "New and improved task tracking app.",
  // description: "",
  // video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/Taskmaster-Pro/main/assets/images/screen2.png",
  // },
  {
    id: 10,
    name: "Ecommerce Backend",
    ghRepository: "https://github.com/rrich-kray/ecommerce-product-database",
    deploymentLink: "",
    summary: "Database for a hypothetical ecommerce website.",
    description: "",
    video: "",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/ecommerce-product-database/master/assets/images/screen1.png",
  },
  // {
  //   id: 11,
  //   name: "Coders Cave",
  //   ghRepository: "https://github.com/perfect-perfect/coders-cave",
  //   deploymentLink: "",
  //   summary: "Message board for coders.",
  // description: "",
  // video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/perfect-perfect/coders-cave/main/public/cc.JPG",
  // },
  // {
  //   id: 12,
  //   name: "Shopify Clone",
  //   ghRepository: "https://github.com/rrich-kray/shopify-2.0",
  //   deploymentLink: "https://shopify-clone-rrich-kray.herokuapp.com/",
  //   summary: "Website for aspiring merchants.",
  // description: "",
  // video: "",
  //   backgroundImage:
  //     "https://raw.githubusercontent.com/rrich-kray/shopify-2.0/main/assets/images/screen3.png",
  // },
  {
    id: 13,
    name: "Advice Generator",
    ghRepository: "https://github.com/rrich-kray/advice-generator",
    deploymentLink: "https://advice-generator-rrich-kray.herokuapp.com/",
    summary: "Simple random quote generator that utilizes the Advice Slip API",
    description: "",
    video: adviceGenVid,
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/advice-generator/main/src/images/advice-gen.png",
  },
  {
    id: 14,
    name: "Expenses Chart",
    ghRepository: "https://github.com/rrich-kray/expenses-chart",
    deploymentLink: "https://expenses-chart-rrich-kray.herokuapp.com/",
    summary: "Simple expenses chart",
    description: "",
    video: "",
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/expenses-chart/main/src/images/screen1.png",
  },
  {
    id: 15,
    name: "Dropdown Challenge",
    ghRepository: "https://github.com/rrich-kray/dropdown-landing",
    deploymentLink: "https://dropdown-challenge-rrich-kray.herokuapp.com/",
    summary: "Simple landing page with dropdown navigation menus",
    description: "",
    video: dropdownVid,
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/dropdown-challenge/main/src/images/screen1.png",
  },
  {
    id: 16,
    name: "GitHub User Search",
    ghRepository: "https://github.com/rrich-kray/github-user-search",
    deploymentLink: "https://github-search-rrich-kray.herokuapp.com/",
    summary: "Simple application that queries GitHub's User API",
    description: "",
    video: ghUserSearchVid,
    backgroundImage:
      "https://raw.githubusercontent.com/rrich-kray/github-user-search/main/src/assets/screen1.png",
  },
  {
    id: 17,
    name: "React Landing Page",
    ghRepository:
      "https://github.com/rrich-kray/react-landing-page-optimized.git",
    deploymentLink: "https://react-landing-page-nine.vercel.app/",
    summary: "Landing page built with React",
    description: "",
    video: reactLandingPageVid,
    backgroundImage:
      "https://github.com/rrich-kray/simple-react-site/blob/main/src/assets/images/screen.png?raw=true",
  },
  // {
  //   id: 18,
  //   name: "MERN Blog",
  //   ghRepository: "https://github.com/rrich-kray/mern-blog",
  //   deploymentLink: "https://simple-react-site-rrich-kray.herokuapp.com/",
  //   summary: "MERN stack blog website",
  // description: "",
  // video: "",
  //   backgroundImage:
  //     "https://github.com/rrich-kray/simple-react-site/blob/main/src/assets/images/screen.png?raw=true",
  // },
  {
    id: 19,
    name: "Kanban Board PWA",
    ghRepository: "https://github.com/rrich-kray/kanban-pwa",
    deploymentLink: "https://kanban-board-rrich-kray.herokuapp.com/",
    summary: "Kanban board PWA built with React",
    description: "",
    video: "",
    backgroundImage:
      "https://github.com/rrich-kray/kanban-board-pwa/blob/main/src/assets/images/screen1.png?raw=true",
  },
  {
    id: 20,
    name: "Full-Stack Expenses Chart",
    ghRepository: "https://github.com/rrich-kray/full-stack-expenses-chart",
    deploymentLink: "",
    summary: "Full-stack implementation of my Expenses Chart project",
    description: "",
    video: "",
    backgroundImage:
      "https://github.com/rrich-kray/full-stack-expenses-chart/blob/main/client/src/images/screen1.png?raw=true",
  },
  {
    id: 21,
    name: "Interactive Comments Section",
    ghRepository: "https://github.com/rrich-kray/interactive-comments-section",
    deploymentLink:
      "https://comments-section-client-aqwq695xr-rrich-kray.vercel.app/",
    summary:
      "Single comment section that allows users to login, register, add comments and upvote/downvote comments. Most prominent technologies include React, Express, SQL, Sequelize and a REST API",
    description: "",
    video: commentsSectionVid,
    backgroundImage:
      "https://github.com/rrich-kray/interactive-comments-section/blob/main/screen1.png?raw=true",
  },
  {
    id: 22,
    name: "Coding Quiz Pro",
    ghRepository: "https://github.com/rrich-kray/coding-quiz-optimized",
    deploymentLink: "https://codinq-quiz-6gl6ze7ah-rrich-kray.vercel.app/",
    summary:
      "Improved version of my original coding quiz app. Utilizes React, HTML/CSS/JS",
    description: "",
    video: codingQuizVid,
    backgroundImage:
      "https://github.com/rrich-kray/coding-quiz-pro/blob/main/src/screen1.png?raw=true",
  },
  {
    id: 23,
    name: "Full Stack Kanban Board",
    ghRepository: "https://github.com/rrich-kray/kanban-board-client",
    deploymentLink: "https://kanban-board-lyart.vercel.app/dashboard",
    summary:
      "Improved version of my original Kanban Board PWA app. Utilizes React, HTML/CSS/JS, SQL, MySQL, Sequelize, Express.",
    description: "",
    video: kanbanVid,
    backgroundImage:
      "https://github.com/rrich-kray/kanban-board-full-stack/blob/main/screen1.png?raw=true",
  },
  {
    id: 24,
    name: "Tic Tac Toe",
    ghRepository: "https://github.com/rrich-kray/tic-tac-toe",
    deploymentLink: "https://tic-tac-toe-eight-weld.vercel.app/",
    summary:
      "Improved version of my original Kanban Board PWA app. Utilizes React, HTML/CSS/JS, SQL, MySQL, Sequelize, Express.",
    description: "",
    video: ticTacToeVid,
    backgroundImage: ticTacToe,
  },
  // {
  //   id: 24,
  //   name: "Photo Gallery",
  //   ghRepository: "https://github.com/rrich-kray/react-portfolio-v2",
  //   deploymentLink: "https://photo-gallery-client-rrich.herokuapp.com/",
  //   summary:
  //     "Full stack application that allows users to log in and upload images to their personal gallery. Utilizes React, HTML/CSS/JS, SQL, Sequelize, Express",
  // description: "",
  // video: "",
  //   backgroundImage:
  //     "https://previews.dropbox.com/p/thumb/ABnDTUimPYDOBJX265mEi62bAnhkxSBcKwAK_gqoqx-R30LOPlYSCc8qas-LsrzPwOlCUG-WVOZgVO89OWJnwh--WydpS4AE2lFxwBSZTAbZpdnWW7Y6p1xAPAbOx9v5SCmshKSmxj_r44qZyCRrgZtdnBPvtE3X7KHP9h-SeWrwkriT_3m_aXWWTMbIBXFedPC-B-HoBSd12sH5K0DPpgsVEL1ClrfhUyGpe9Snzq9K8tYaUZPGhb1xxyUx6ywFf1kIUBJ9ZAIEkCGMdh_F_lbh-XKEyyqgoPOlS2RcbQ1mupJz0buurzF-yrxVJEk7zvezctKz49Or4R4_f-s9tQwI8A_gQ1Uc8K_py51ADDxXIt2OV-IBs6OBIGP5XYKojFg/p.png",
  // },
];
