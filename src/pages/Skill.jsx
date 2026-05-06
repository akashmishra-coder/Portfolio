import React from "react";
import { motion } from "framer-motion"; // <-- Added Framer Motion
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { BsTypescript } from "react-icons/bs";

// --- Reusable SVG Icons ---
const CodeIcon = () => (
  <svg className="w-7 h-7 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LayersIcon = () => (
  <svg className="w-7 h-7 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const ToolsIcon = () => (
  <svg className="w-7 h-7 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// --- Skill Data Structure ---
const skillsData = [
  {
    title: "Frontend Technologies",
    icon: <CodeIcon />,
    items: [
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css3", color: "#1572B6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "React JS", icon: "react", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
    ],
  },
  {
    title: "Tools & Version Control",
    icon: <ToolsIcon />,
    items: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#FFFFFF" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
      { name: "API Integration", icon: "api", color: "#9C27B0" },
    ],
  },
];

// --- Helper component to render the correct SVG icon based on name ---
const renderIcon = (name) => {
  switch (name) {
    case "html5": return <IoLogoHtml5 size={50} />;
    case "css3": return <IoLogoCss3 size={50} />;
    case "javascript": return <IoLogoJavascript size={50} />;
    case "react": return <RiReactjsFill size={50} />;
    case "typescript": return <BsTypescript size={50} />;
    case "bootstrap":
      return (
        <svg viewBox="0 0 128 128" fill="currentColor" className="w-[50px] h-[50px]">
          <path d="M87.4 56.4c2.8-2.5 4.5-6.3 4.5-10.7 0-9.8-7.5-15.5-20.1-15.5H35.7v67.8h38.2c13.7 0 21.8-6.5 21.8-17.4 0-5.8-2.6-10.5-8.3-13.6v-.6zM50.6 42h18c5.4 0 8.7 2.4 8.7 6.8 0 4.6-3.5 7.1-9 7.1h-17.7V42zm0 43.8V66.2h19c6 0 10.1 2.8 10.1 7.7 0 5-4.2 8-10.2 8H50.6z" />
        </svg>
      );
    case "tailwind": return <BiLogoTailwindCss size={50} />;
    case "git":
      return (
        <svg viewBox="0 0 128 128" fill="currentColor" className="w-[50px] h-[50px]">
          <path d="M125.6 60.1L67.9 2.4c-3.1-3.1-8.2-3.1-11.3 0L38.4 20.6l16.1 16.1c3.1-.9 6.6.1 8.8 2.3 2.5 2.5 3.3 6.2 2.1 9.4l15.1 15.1c3.2-1.2 6.9-.4 9.4 2.1 3.5 3.5 3.5 9.2 0 12.7-3.5 3.5-9.2 3.5-12.7 0-2.6-2.6-3.4-6.4-2-9.6L60 53.6v33.2c1.2 1.4 2 3.3 2 5.4 0 4.3-3.5 7.8-7.8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-3.3 2.1-6.2 5-7.3V46.6c-2.9-1.1-5-4-5-7.3 0-1.6.5-3.1 1.3-4.3L30 18.9 2.4 46.5c-3.1 3.1-3.1 8.2 0 11.3l57.7 57.7c3.1 3.1 8.2 3.1 11.3 0l54.2-54.2c3.1-3.1 3.1-8.1 0-11.2z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 128 128" fill="currentColor" className="w-[50px] h-[50px]">
          <path d="M64 2.5C29.6 2.5 1.8 30.3 1.8 64.6c0 27.4 17.8 50.7 42.5 58.9 3.1.6 4.3-1.4 4.3-3 0-1.5-.1-6.5-.1-11.9-17.3 3.8-21-8.3-21-8.3-2.8-7.2-6.9-9.1-6.9-9.1-5.7-3.9.4-3.8.4-3.8 6.3.4 9.6 6.5 9.6 6.5 5.6 9.6 14.7 6.8 18.3 5.2.6-4.1 2.2-6.8 4-8.4-13.8-1.6-28.3-6.9-28.3-30.8 0-6.8 2.4-12.4 6.4-16.7-.6-1.6-2.8-7.9.6-16.5 0 0 5.2-1.7 17.1 6.3 5-1.4 10.3-2.1 15.6-2.1 5.3 0 10.6.7 15.6 2.1 11.8-8 17-6.3 17-6.3 3.4 8.6 1.3 14.9.6 16.5 4 4.3 6.4 9.9 6.4 16.7 0 24-14.5 29.2-28.4 30.7 2.3 2 4.3 5.9 4.3 11.9 0 8.6-.1 15.5-.1 17.6 0 1.6 1.1 3.6 4.3 3 24.7-8.2 42.5-31.5 42.5-58.9C126.2 30.3 98.4 2.5 64 2.5z" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 128 128" fill="currentColor" className="w-[50px] h-[50px]">
          <path fill="#F24E1E" d="M35 64h29V35H35a14.5 14.5 0 100 29z" />
          <path fill="#A259FF" d="M35 35h29V6H35a14.5 14.5 0 100 29z" />
          <path fill="#1ABCFE" d="M64 6h29a14.5 14.5 0 100-29H64v29z" />
          <path fill="#0ACF83" d="M64 64v29a14.5 14.5 0 100 29 14.5 14.5 0 000-29z" />
          <path fill="#FF7262" d="M64 64h29a14.5 14.5 0 100-29H64v29z" />
        </svg>
      );
    case "api":
      return (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-[50px] h-[50px]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    default: return null;
  }
};

// --- Animation Variants ---
const headerVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card popping up
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section className="bg-[#0a0a0a] min-h-screen py-16 px-4 md:px-12 lg:px-16 font-sans overflow-hidden">
      <style>{`
        @keyframes slideLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-line {
          animation: slideLine 3s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Animated Main Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center text-white"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        {skillsData.map((category, index) => (
          <div key={index} className="flex flex-col gap-6">
            
            {/* Animated Category Header */}
            <motion.div 
              variants={headerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-center text-white"
            >
              {category.icon}
              <h2 className="text-2xl md:text-3xl border-b-4 rounded-md border-blue-500 pb-5 font-bold tracking-wide">
                {category.title}
              </h2>
            </motion.div>

            {/* Grid Container (Staggers the cards) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
            >
              {category.items.map((skill, skillIdx) => (
                <motion.div
                  variants={cardVariants} // Connects the card to the container's stagger
                  key={skillIdx}
                  style={{ "--skill-color": skill.color }}
                  className="group relative bg-[#131313] hover:bg-[#1a1a1a] border border-zinc-800 rounded-2xl py-10 px-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden hover:scale-105 hover:border-(--skill-color) hover:shadow-[0_0_20px_var(--skill-color)] text-white"
                >
                  {/* Skill Icon */}
                  <div
                    className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-[var(--skill-color)]"
                    style={{ filter: `drop-shadow(0 0 8px ${skill.color}66)` }}
                  >
                    {renderIcon(skill.icon)}
                  </div>

                  {/* Skill Name */}
                  <span className="text-gray-300 font-semibold text-sm md:text-base text-center">
                    {skill.name}
                  </span>

                  {/* The Animated Glowing Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800/30 overflow-hidden">
                    <div
                      className="absolute top-0 bottom-0 left-0 w-full animate-slide-line opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;