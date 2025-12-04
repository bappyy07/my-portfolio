import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "Lucide-react";

import kaiserImage from "../assets/images/kaiserportfolio.png";
import myImage from "../assets/images/myimage.jpeg";
import pantoImage from "../assets/images/pantoFurnituresite.png";
import webCodeImage from "../assets/images/webcodeAgencysite.png"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend Development",
    icon: Code2,
    descreption: "Crafting beautiful, responsive user interfaces.",
    skills: [
      { name: "React", level: 95, color: "bg-blue-600" },
      { name: "TypeScript", level: 90, color: "bg-blue-400" },
      { name: "Next.js", level: 88, color: "bg-gray-500" },
      { name: "Tailwind CSS", level: 95, color: "bg-cyan-400" },
      { name: "Framer Motion", level: 92, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solution",
    skills: [
      {name: "MongoDB", level: 88, color: "bg-green-500"},
      {name: "Expres.js", level: 90, color: "bg-gray-500"},
      {name: "Python", level: 85, color: "bg-green-500"},
      {name: "GraphQL", level: 80, color: "bg-pink-500"},
      {name: "Rest-APIs", level: 92, color: "bg-yellow-500"},
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data strong",
    skills: [
      {name: "MongoDB", level: 88, color: "bg-green-500"},
      {name: "MongoDB", level: 90, color: "bg-blue-500"},
      {name: "Radis", level: 85, color: "bg-red-500"},
      {name: "Prisma", level: 80, color: "bg-indigo-500"},
      {name: "Firebase", level: 92, color: "bg-yellow-500"},
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      {name: "Docker", level: 88, color: "bg-purple-500"},
      {name: "AWS", level: 90, color: "bg-orange-500"},
      {name: "Vercel", level: 85, color: "bg-green-500"},
      {name: "Git", level: 80, color: "bg-gray-800"},
      {name: "CI/CD", level: 92, color: "bg-yellow-500"},
    ],
  },
];

export const TECH_STACK = [
  "Javascript",
  "HTMLS",
  "CSS3",
  "Sass",
  "Webpack",
  "Figma",
  "Vite",
  "React",
  "Firebase",
  "Redux",
  "Node.js",
  "Express.js",
  "Next.js",
  "MongoDB",
];

export const STATS = [
  {number: "50+", label: "Projects Completed"},
  {number: "1+", label: "Years Experience"},
  {number: "20+", label: "Technologies"},
  {number: "100%", label: "Client Staisfaction"},
];

export const PROJECTS = [
  {
    id: 1,
    title: "Porfolio of Kaiser Ahmed",
    description: "A responsive portfolio for Kaiser Ahmed with amazing animations.",
    image: kaiserImage,
    tags: ["Reacts", "Tailwind", "Framer motion"],
    LiveUrl: "https://kaiser-ahmed-portfolio.vercel.app/",
    githubUrl: "https://github.com/bappyy07/kaiser-ahmed-portfolio",
    featured: false,
    category: "Front End"
  },
  {
    id: 2,
    title: "Panto furniture ",
    description: "A responsive website for panto-furniture company.",
    image: pantoImage,
    tags: ["Reacts", "Tailwind", "Framer motion"],
    LiveUrl: "https://panto-furniture-xi.vercel.app/",
    githubUrl: "https://github.com/bappyy07/panto-furniture",
    featured: false,
    category: "Front End"
  },
  {
    id: 3,
    title: "Webcode Agency",
    description: "A responsive & animated website for webcode agency.",
    image: webCodeImage,
    tags: ["Reacts", "Tailwind", "Framer motion"],
    LiveUrl: "https://web-code-agency-project.vercel.app/",
    githubUrl: "https://github.com/bappyy07/WebCodeAgency-project",
    featured: false,
    category: "Front End"
  },
];

export const JOURNY_STEPS = [
  {
    year: "2024",
    title: "Started Coding Journey",
    company: "Self-taught",
    description: "Began learning web development with HTML, CSS and Javascript. Built my first website and fell in love with coding",
    icon: Code2,
    color: "bg-blue-500"
  },
  {
    year: "2025",
    title: "First Joined Course",
    company: "Hablu Progammer",
    description: "Joined as a learner and learned frontend tachs from them.",
    icon: Briefcase,
    color: "bg-green-500"
  },
  {
    year: "2026",
    title: "Full Stack Developer",
    company: "Independent",
    description: "Became a full stack develpoer by learning modern techs.",
    icon: Rocket,
    color: "bg-purple-500"
  },
  {
    year: "2026",
    title: "freelance & Open Source",
    company: "Independent",
    description: "Started freelancing and contributing to open source projects.",
    icon: Award,
    color: "bg-orange-500"
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting inuituve interfaces that users love",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/bappyy07",
    color: "hover:text-gray-500",
    bgColor: "hover:bg-gray-800"
  },
  {
    name: "Linkedin",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/mohammad-baderul-alam-6a231a369?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10"
  },
  {
    name: "twitter/X",
    icon: FiTwitter,
    url: "https://x.com/bappyy0007?s=11",
    color: "hover:text-sky-500",
    bgColor: "hover:bg-sky-500/10"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:arnysamar@gmail.com",
    color: "hover:text-green-500",
    bgColor: "hover:bg-green-500/10"
  },
  
];

export const CONTACT_INFO = [
  {
    icons: MapPin,
    label: "Location",
    value: "Oman, muscat",
  },
  {
    icons: Mail,
    label: "Email",
    value: "arnysamar@gmail.com",
  },
  {
    icons: Phone,
    label: "Phone",
    value: "+96896658228",
  },
]