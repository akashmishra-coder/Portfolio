import Cinemagpt from "../assets/cinemagpt.png"; // Add your image path here
import Swiggy from "../assets/Swiggy.png"; // Add your image path here


export const projectsData = [
  {
    id: 1,
    title: "Sumit PG Website",
    description: "Developed a comprehensive brand identity and a responsive website. Features include custom pre-defined color combination variables, dynamic layouts, and a contact section with map integration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", 
    tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 2,
    title: "Finance Dashboard UI",
    description: "A highly interactive data visualization dashboard. Built custom React components for 'Balance Trends' line charts and responsive data tables to track metrics in real-time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Chart.js", "CSS Modules"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "A cross-platform mobile application for a retail client, focusing on a seamless checkout experience, product filtering, and API integrations for real-time inventory.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Redux", "Tailwind CSS", "Mui"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 4,
    title: "Cinema-GPT Website",
    description: "A modern web application for movie enthusiasts, featuring a responsive design, real-time updates, and seamless integration with movie databases.",
    image: Cinemagpt,
    tags: ["React", "Redux", "Tailwind CSS"],
    githubLink: "https://github.com/akashmishra-coder/Cinema-GPT",
    liveLink: "https://cinema-gpt-rose.vercel.app/"
  },
  {
    id: 5,
    title: "Swiggy Clone",
    description: "A cross-platform Web application for a retail client, focusing on a seamless checkout experience, product filtering, and API integrations for real-time inventory.",
    image: Swiggy,
    tags: ["React", "Redux", "Tailwind CSS"],
    githubLink: "https://github.com/akashmishra-coder/Food-Delivery-App-",
    liveLink: "https://food-delivery-app-orcin-six.vercel.app/"
  },
  
];