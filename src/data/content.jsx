import {
  SiCypress, SiSelenium, SiPostman, SiAppium, SiPytest, SiCucumber,
  SiHtml5, SiReact, SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiVite, SiTailwindcss,
  SiMongodb, SiMysql, SiPostgresql, SiFigma, SiCoreldraw,
} from "react-icons/si";
import { DiIllustrator, DiPhotoshop, DiCss3 } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import PlaywrightIcon from "./icons.jsx";

import portrait from "../assets/images/profile-07.png";
import aboutPhoto from "../assets/images/Profile-02.jpg";

export const portraitImg = portrait;
export const aboutImg = aboutPhoto;

export const skills = [
  { name: "Cypress", Icon: SiCypress, color: "#6DBE72" },
  { name: "Playwright", Icon: PlaywrightIcon, color: "#D65D6E" },
  { name: "Selenium", Icon: SiSelenium, color: "#43B02A" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Appium", Icon: SiAppium, color: "#9B59B6" },
  { name: "Pytest", Icon: SiPytest, color: "#0A9EDC" },
  { name: "Cucumber", Icon: SiCucumber, color: "#23D96C" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: DiCss3, color: "#1572B6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Azure", Icon: VscAzure, color: "#0089D6" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Illustrator", Icon: DiIllustrator, color: "#FF9A00" },
  { name: "Photoshop", Icon: DiPhotoshop, color: "#31A8FF" },
  { name: "CorelDraw", Icon: SiCoreldraw, color: "#E7B28C" },
];

export const projects = [
  { title: "Cineverse", img: "/images/CineB.png", url: "https://cineverse-mocha.vercel.app/", desc: "Streaming de películas con API de IMDB. React + Tailwind + Vite.", tags: ["React", "Tailwind", "Vite"] },
  { title: "Cypress Core", img: "/images/CoreB.png", url: "https://github.com/JEJS-IA97/Cypress-Core", desc: "Framework E2E de validación de transacciones para plataformas complejas.", tags: ["Cypress", "CI/CD", "Automation"] },
  { title: "Induwork", img: "/images/InduworkB.png", url: "https://induwork-spa-psi.vercel.app", desc: "Frontend en React para induwork.cl: e-commerce y catálogos industriales.", tags: ["React", "Vite", "E-commerce"] },
  { title: "Chat App", img: "/images/ChatB.png", url: "https://chat-app-rust-two-14.vercel.app/", desc: "Mensajería instantánea con perfiles y búsqueda dinámica. React + Socket.io.", tags: ["React", "Socket.io", "Chat"] },
  { title: "Pokedex", img: "/images/PokeB.png", url: "https://pokedex-sable-iota.vercel.app/", desc: "App interactiva para explorar la primera generación de Pokémon. Vite + JavaScript.", tags: ["Vite", "JavaScript", "API"] },
  { title: "Banco Universitario", img: "/images/BancoB.png", url: "https://github.com/JEJS-IA97", desc: "Sistema web de transacciones estudiantiles y gestión de becas. React + Redux.", tags: ["React", "Redux", "Gestión"] },
  { title: "SoundVibe", img: "/images/SoundvibeB.png", url: "https://github.com/JEJS-IA97", desc: "Red social móvil para compartir gustos musicales. React Native + PostgreSQL.", tags: ["React Native", "PostgreSQL", "Social"] },
  { title: "Urban Threads", img: "/images/UrbanB.png", url: "https://github.com/JEJS-IA97", desc: "E-commerce de moda urbana. React + Tailwind + Vite.", tags: ["React", "E-commerce"] },
  { title: "Inflatio", img: "/images/InflatioB.png", url: "https://github.com/JEJS-IA97", desc: "Tracker financiero de inflación y saldos multimoneda. React + Node.js.", tags: ["React", "Node.js", "Finanzas"] },
  { title: "Crypto Bot", img: "/images/CryptoB2.png", url: "https://github.com/JEJS-IA97/crypto-bot", desc: "Trading automático y copy-trading asistido por IA. Opera en simulación; modo real próximamente.", tags: ["Python", "AI", "Trading"] },
  { title: "Yukita Fit", img: "/images/YukitaB.png", url: "https://github.com/JEJS-IA97/yukita-fit", desc: "Gestión de un emprendimiento de comida fit: pedidos, gastos, ventas e ingredientes.", tags: ["Gestión", "App"] },
  { title: "Prototypes & Designs", img: "/images/ProtoB.png", url: "https://github.com/JEJS-IA97", desc: "Colección de prototipos interactivos y diseños UI/UX en Figma e Illustrator.", tags: ["Figma", "UI/UX", "Illustrator"] },
];

export const experience = [
  {
    when: "Abr 2026 — Actualidad",
    role: "IT Support & Web Developer",
    co: "Induwork SpA",
    desc: "Rol integral de soporte IT y desarrollo (utility). Rediseñé y arreglé 3 páginas de la empresa que estaban en Odoo; ajusté el e-commerce principal induwork.cl (errores, diseño de fábricas, productos, fichas técnicas y catálogos); diseñé un ERP para migrar desde Odoo (backend con asistencia de IA); rediseñé coimaspa.cl e inversionesmvi en un build con v2network; desarrollé el frontend en React de induwork.cl (Induwork-SpA); construí compras_chile_bot para automatización de compras.",
    tags: ["Odoo", "ERP", "React", "E-commerce", "Node.js", "Automation"],
  },
  {
    when: "Feb 2025 — Abr 2026",
    role: "QA Automation Engineer",
    co: "Chicks Gold Inc.",
    desc: "Arquitecturas E2E cross-proyecto entre AdminPanel y Frontend. Validación de integridad de transacciones con 100% de consistencia de datos, tests de componente en Cypress y monitoreo de pipelines CI/CD.",
    tags: ["Cypress", "TypeScript", "Playwright", "CI/CD"],
  },
  {
    when: "Jul 2024 — Mar 2025",
    role: "QA Tester",
    co: "Chicks Gold Inc.",
    desc: "Casos de prueba fundacionales y documentación de defectos que habilitaron la transición a automatización E2E. Testing funcional, regresión y smoke en 5 plataformas productivas con Azure DevOps.",
    tags: ["Manual Testing", "API Testing", "Azure"],
  },
  {
    when: "Ene 2021 — Abr 2024",
    role: "Graphic Designer",
    co: "MM Publicidad C.A.",
    desc: "Diseño de interfaces responsivas y materiales de branding, tendiendo el puente entre requisitos técnicos y principios de diseño centrados en el usuario. Consistencia UI/UX en múltiples activos digitales.",
    tags: ["Figma", "Illustrator", "Photoshop", "UI/UX"],
  },
];
