import {
  FaDatabase,
  FaFigma,
  FaHtml5,
  FaLaravel,
  FaPhp,
  FaReact,
} from "react-icons/fa";

import { SiTypescript } from "react-icons/si";

import { project1, project2, project3, project4 } from "../data/assets";

export const featuredProjects = [
  {
    title: "Accessibility Design Challenge 2025",
    img: project1,
    role: "UI/UX Design",
    link: "https://www.figma.com/design/IA0r0Yq8RyQ8qwtkENXgV4/-Rashifa_Kesehatan--Accessibility-Design-Challenge-2025?node-id=506-37617&t=MTBAG82ukWO8L6Aw-4",
    tech: [
      { label: "Figma", icon: FaFigma },
      { label: "HTML", icon: FaHtml5 },
    ],
  },
  {
    title: "Core Pilates",
    img: project2,
    role: "Fullstack",
    link: "https://core-pilates-rashifa.vercel.app/",
    tech: [
      { label: "React", icon: FaReact },
      { label: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "DetakKita",
    img: project3,
    role: "UI/UX Design",
    link: "https://rashifa.webflow.io/work/detakkita",
    tech: [{ label: "Figma", icon: FaFigma }],
  },
  {
    title: "Visaku",
    img: project4,
    role: "UI/UX Design",
    link: "https://rashifa.webflow.io/work/visaku-app",
    tech: [{ label: "Figma", icon: FaFigma }],
  },
];
