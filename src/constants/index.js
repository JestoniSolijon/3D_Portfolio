import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  empire,
  american,
  yelpcamp,
  laudate,
  php,
  mysql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "PHP Developer",
    icon: backend,
  },
  {
    title: "Technical Specialist",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "System Developer",
    company_name: "Empire East Land Holdings, Inc.",
    icon: empire,
    iconBg: "#383E56",
    date: "Sep 2021 - Apr 2023",
    points: [
      "Created and developed software applications using various programminglanguages and technologies.",
      "Debugged, modified, and enhanced existing applications to improve their performance, functionality, and user experience.",
      "Utilized Model-View-Controller (MVC) framework to build scalable and maintainable applications.",
      "Followed Object-Oriented Programming (OOP) principles to design and implement efficient and reusable code.",
      "Conducted technical analyses to identify and implement efficient adjustments in accordance with technical specification sheets",
    ],
  },
  {
    title: "Technical Specialist",
    company_name: "Empire East Land Holdings, Inc.",
    icon: empire,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Sep 2021",
    points: [
      "Functioned as a Technical Specialist, responsible for diagnosing and resolving issues with computers, UPS, printers, and networks.",
      "Maintained and configured Linux servers, including monitoring server temperature and CPU to ensure optimal performance.",
      "Assisted users with installing software/applications and promptly responded to technical concerns via ticketing system to ensure timely resolution of issues.",
      "Monitored Cloud servers and local servers to ensure system availability and reliability.",
    ],
  },
  {
    title: "IT Staff",
    company_name: "American Eye Center, Inc.",
    icon: american,
    iconBg: "#383E56",
    date: "May 2019 - Jan 2021",
    points: [
      "Installed and configured software, applications, networks, and printers to support efficient operations.",
      "Provided technical support to end-users, ensuring seamless and uninterrupted access to necessary tools and resources.",
      "Consistently demonstrated a strong work ethic and attention to detail in all aspects of job responsibilities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "YelpCamp",
    description:
      "Web platform that allows users to post pictures, comments and create a user account.",
    tags: [
      {
        name: "Node JS",
        color: "text-secondary",
      },
      {
        name: "Express JS",
        color: "text-secondary",
      },
      {
        name: "MongoDB",
        color: "text-secondary",
      },
      {
        name: "EJS",
        color: "text-secondary",
      },
      {
        name: "SCSS/CSS",
        color: "text-secondary",
      },
    ],
    image: yelpcamp,
    source_code_link: "https://github.com/JestoniSolijon/yelpcamp/tree/1_step",
  },
  {
    name: "Laudate Dominum",
    description:
      "e-commerce web application with features such as product listings, detailed product descriptions, pricing information, shopping cart functionality, and secure payment processing.",
    tags: [
      {
        name: "Node JS",
        color: "text-secondary",
      },
      {
        name: "Express JS",
        color: "text-secondary",
      },
      {
        name: "MongoDB",
        color: "text-secondary",
      },
      {
        name: "EJS",
        color: "text-secondary",
      },
      {
        name: "SCSS/CSS",
        color: "text-secondary",
      },
      {
        name: "APIs",
        color: "text-secondary",
      },
    ],
    image: laudate,
    source_code_link: "https://laudatedominumph.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };