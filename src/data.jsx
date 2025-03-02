import { FaReact } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { SiJetpackcompose } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
// import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiCypress } from "react-icons/si";
// import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiApachejmeter } from "react-icons/si";
import { SiJunit5 } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
// import { SiReactquery } from "react-icons/si";
// import { SiShadcnui } from "react-icons/si";
// import { SiMui } from "react-icons/si";
// import { SiReactrouter } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
// import { FaWordpress } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
// import { FaFigma } from "react-icons/fa";
import { SiRedis } from "react-icons/si";

import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

import { SiGithub } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiTestinglibrary } from "react-icons/si";
import { v4 as uuidv4 } from "uuid";
import { SiJest } from "react-icons/si";

// levels :Beginner, Basic, Learning,pre-intermediate, Intermediate, Proficient, Master

export const mobile = [
  { id: uuidv4(), name: "flutter", icon: <FaFlutter />, level: "Beginner" },
  {
    id: uuidv4(),
    name: "React Native",
    icon: <FaReact />,
    level: "intermediate",
  },
  {
    id: uuidv4(),
    name: "Firebase",
    icon: <IoLogoFirebase />,
    level: "Beginner",
  },
  {
    id: uuidv4(),
    name: "Jetpack Compose",
    icon: <SiJetpackcompose />,
    level: "Beginner",
  },
];

export const frontend = [
  { id: uuidv4(), name: "HTML5", icon: <FaHtml5 />, level: "intermediate" },
  { id: uuidv4(), name: "CSS3", icon: <FaCss3 />, level: "intermediate" },
  {
    id: uuidv4(),
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    level: "intermediate",
  },

  {
    id: uuidv4(),
    name: "Javascript",
    icon: <IoLogoJavascript />,
    level: "intermediate",
  },
  {
    id: uuidv4(),
    name: "TypeScript",
    icon: <SiTypescript />,
    level: "intermediate",
  },
  { id: uuidv4(), name: "React", icon: <FaReact />, level: "intermediate" },
  { id: uuidv4(), name: "Redux", icon: <SiRedux />, level: "intermediate" },
  {
    id: uuidv4(),
    name: "Nextjs",
    icon: <RiNextjsFill />,
    level: "intermediate",
  },
  { id: uuidv4(), name: "Angular", icon: <SiAngular />, level: "Basics" },
];

export const backend = [
  {
    id: uuidv4(),
    name: "Java + Springboot",
    icon: <FaJava />,
    framework: <SiSpringboot />,
    level: "Beginner",
  },
  {
    id: uuidv4(),
    name: "Php + Laravel",
    icon: <FaPhp />,
    framework: <FaLaravel />,
    level: "Basics",
  },
  {
    id: uuidv4(),
    name: "Node + Express",
    icon: <FaNodeJs />,
    framework: <SiExpress />,
    level: "intermediate",
  },
  {
    id: uuidv4(),
    name: "C# + ASP.NET",
    icon: "C#",
    framework: "",
    level: "Basics",
  },
  {
    id: uuidv4(),
    name: "Python + Data Science",
    icon: <FaPython />,
    framework: null,
    level: "Learning",
  },
  {
    id: uuidv4(),
    name: "Mongodb",
    icon: <SiMongodb />,
    level: "Basics",
  },
  {
    id: uuidv4(),
    name: "Postgresql",
    icon: <BiLogoPostgresql />,
    level: "Basics",
  },
  { id: uuidv4(), name: "GraphQl", icon: <GrGraphQl />, level: "Basics" },
  { id: uuidv4(), name: "Redis", icon: <SiRedis />, level: "Basics" },
];

export const testing = [
  { id: uuidv4(), name: "Selenium", icon: <SiSelenium />, level: "Beginner" },
  { id: uuidv4(), name: "Junit5", icon: <SiJunit5 />, level: "Beginner" },
  { id: uuidv4(), name: "Selenium", icon: <SiSelenium />, level: "Beginner" },
  { id: uuidv4(), name: "Cypress", icon: <SiCypress />, level: "Beginner" },
  { id: uuidv4(), name: "Jmeter", icon: <SiApachejmeter />, level: "Beginner" },
  { id: uuidv4(), name: "Cucumber", icon: <SiCucumber />, level: "Beginner" },
  // { id: uuidv4(), name: "Cucumber", icon: <SiVite />, level: "Beginner" },
];
export const allSkills = { frontend, backend, testing, mobile };
export const projects = [
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      github: <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      mern: <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      "mern stack": <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      "mern stack": <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      "mern stack": <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: <SiJest />,
      "mern stack": <RiNodejsLine />,
    },
  },
  {
    id: uuidv4(),
    name: "e-commerce app",
    stack: {
      "source code": <SiGithub />,
      rtl: <SiTestinglibrary />,
      jest: "??",
      "mern stack": <RiNodejsLine />,
    },
  },
];

export const navlinks = [
  {
    id: uuidv4(),
    text: "home",
    icon: <FaHome />,
  },
  {
    id: uuidv4(),
    text: "about",
    icon: <IoIosContact />,
  },
  {
    id: uuidv4(),
    text: "skills",
    icon: <FaTools />,
  },
  {
    id: uuidv4(),
    text: "projects",
    icon: <IoRocket />,
  },
  {
    id: uuidv4(),
    text: "contact",
    icon: <MdEmail />,
  },
];

export const navLinksTexts = [
  { id: uuidv4(), text: "home" },
  { id: uuidv4(), text: "about" },
  { id: uuidv4(), text: "skills" },
  { id: uuidv4(), text: "projects" },
  { id: uuidv4(), text: "contact" },
];
