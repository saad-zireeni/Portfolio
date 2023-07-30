import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  flutter,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  postgres,
  zu,
  orange,
  ccq,
  mm,
  resort,
  threejs,
  givelife,
  bookshelf,
  omjc,
  itsaf,
  hackathon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Download Resume",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Apps Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI / UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postgres",
    icon: postgres,
  },
];

const experiences = [
  {
    title: "Computer Science Bachelor's",
    company_name: "Zarqa University",
    icon: zu,
    iconBg: "#383E56",
    date: "February 2019 - September 2022",
    points: [
      "Gained a solid understanding of core concepts in computer science, including data structures, algorithms, operating systems, databases, and programming languages",
      "GPA: 3.22",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Jordan Computers Society",
    icon: flutter,
    iconBg: "#E6DEDD",
    date: "September 2021 - December 2021",
    points: [
      "Completed an intensive internship focused on Flutter app development,gaining practical experience in creating cross-platform mobile applications.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Coding Academy By Orange",
    icon: orange,
    iconBg: "#ffffff",
    date: "February 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const competitions = [
  {
    competition: "One million jordanian coders",
    description:
      "The 'Coding Communities' competition aimed to enhance coding skills and promote innovative solutions to social challenges.",
    tags: [
      {
        name: "1st Place",
        color: "blue-text-gradient",
      },
    ],
    image: omjc,
  },
  {
    competition: "Orange Coding Hackathon",
    description:
      "Orange Coding Academy hosted an exhilarating challenge where participants had just 6 hours to create a website using only HTML and CSS.",
    tags: [
      {
        name: "1st Place",
        color: "blue-text-gradient",
      },
    ],
    image: hackathon,
  },
  {
    competition: "ITSAF 2022",
    description:
      "ITSAF, is an annual event that brings together talented and innovative Information Technology (IT) students from various educational institutions",
    tags: [
      {
        name: "3rd Place",
        color: "blue-text-gradient",
      },
    ],
    image: itsaf,
  },
];

const projects = [
  {
    name: "Career Climb Quiz",
    description:
      "Career Climb Quiz is a quiz website that will evaluate candidates' knowledge and skills in 3 main topics (HTML, CSS, Javascript)",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: ccq,
    source_code_link: "https://github.com/saad-zireeni/CareerClimbQuiz",
  },
  {
    name: "Market Mate",
    description:
      "Market Mate is an online platform that offers a wide selection of fresh groceries and food items to customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "JSON API",
        color: "pink-text-gradient",
      },
    ],
    image: mm,
    source_code_link:
      "https://github.com/saad-zireeni/MarketMate/tree/main/market-mate",
  },
  {
    name: "Resort Finder",
    description:
      "ResortFinder is a comprehensive platform that facilitates resort reservations for users seeking a relaxing getaway.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: resort,
    source_code_link: "https://github.com/saad-zireeni/Resort",
  },
  {
    name: "Give Life",
    description:
      "GivLife is a compassionate online platform empowering users to support and donate to animals in need, making a positive impact",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: givelife,
    source_code_link: "https://github.com/saad-zireeni/Resort",
  },
  {
    name: "The Book Shelf",
    description:
      "The Book Shelf provides the user the ability to read books anytime and everywhere using any preferred device",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: bookshelf,
    source_code_link: "https://github.com/saad-zireeni/TheBookShelf",
  },
];

export { services, technologies, experiences, competitions, projects };
