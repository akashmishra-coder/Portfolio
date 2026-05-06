import React from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut, FaLightbulb, FaRocket, FaCode } from "react-icons/fa6";
import Linkdine from "../assets/linkdin.png"; // Add your image path here

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger entrance of elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
};

// --- Data ---
const stats = [
  { label: "Years Experience", value: "0.6" },
  { label: "Projects Completed", value: "5+" },
  { label: "Technologies Mastered", value: "8+" },
  { label: "Commitment", value: "100%" },
];

const philosophy = [
  {
    icon: <FaCode className="w-8 h-8 text-blue-400" />,
    title: "Clean & Scalable Code",
    desc: "I believe code is read more than it is written. I strive for readability, maintainability, and architectural integrity in everything I build.",
  },
  {
    icon: <FaLightbulb className="w-8 h-8 text-yellow-400" />,
    title: "Problem Solver Mindset",
    desc: "I don't just pixel-push; I engineer solutions. I love diving deep into complex logic and optimizing user experiences.",
  },
  {
    icon: <FaRocket className="w-8 h-8 text-purple-400" />,
    title: "Lifelong Learner",
    desc: "The tech landscape evolves daily. I remain curious, constantly exploring new libraries, frameworks, and modern frontend best practices.",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="relative bg-[#0a0a0a] text-gray-100 min-h-screen py-24 px-4 md:px-12 lg:px-20 font-sans overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <motion.div
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Animations trigger when scrolled into view
        viewport={{ once: true, margin: "-100px" }} // Triggers slightly before fully in view
      >
        {/* --- Section 1: Image & Intro Story --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Side: Modern Image Display */}
          <motion.div className="lg:col-span-5 flex justify-center" variants={imageVariants}>
            <div className="relative group">
              {/* Decorative Gradient Background Square */}
              <div className="absolute -inset-4 bg-linear-to-r from-blue-700 to-purple-800 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative aspect-4/5 w-full max-w-md bg-[#131313] border-2 border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={Linkdine} // REPLACE WITH YOUR IMAGE
                  alt="Akash Mishra working"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Icon Decor */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 right-6 p-4 bg-gray-950 rounded-full border border-zinc-700 shadow-xl"
                >
                    <FaUserAstronaut className="w-8 h-8 text-blue-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Story */}
          <motion.div className="lg:col-span-7 flex flex-col gap-6" variants={itemVariants}>
            <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-blue-500 rounded-full"></div>
                <span className="text-xl text-blue-400 font-medium tracking-wide uppercase">Who I Am</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Driven by Curiosity, Defined by <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Code</span>
            </h2>
            
            <div className="flex flex-col gap-5 text-lg text-gray-300 leading-relaxed max-w-3xl">
              <p>
                Hello! I'm <span className="text-white font-semibold">Akash Mishra</span>, a passionate Frontend Developer based in India. My journey into web development began with a fascination for how design and logic intersect to create meaningful digital experiences.
              </p>
              <p>
              specialize in crafting robust, pixel-perfect user interfaces using the <span className="text-blue-400 font-medium">React ecosystem</span>. I thrive in collaborative environments, bringing concepts to life from the initial wireframe to the final deployment.
              </p>
              <p>
                When I'm not coding, you can find me exploring New Technologies. I believe in continuous growth and am always looking for the next challenge to expand my horizons.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Section 2: Key Stats Cards --- */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24" variants={itemVariants}>
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-[#131313] border border-zinc-800 p-8 rounded-2xl text-center group hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              <p className="text-5xl md:text-6xl font-extrabold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* --- Section 3: Core Philosophy Cards --- */}
        <div className="flex flex-col gap-10">
            <motion.div variants={itemVariants} className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    My Development <span className="text-blue-500">Philosophy</span>
                </h3>
                <p className="text-gray-400 text-lg max-w-xl">
                    I believe in engineering products, not just building features. Here are the core principles I live by.
                </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={itemVariants}>
            {philosophy.map((item, idx) => (
                <div 
                key={idx} 
                className="group relative bg-[#131313] hover:bg-[#1a1a1a] border border-zinc-800 rounded-3xl p-10 flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-lg"
                >
                {/* Icon Wrapper with Glow */}
                <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-zinc-700 flex items-center justify-center relative z-10">
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item.icon}
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                    <h4 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-base">
                    {item.desc}
                    </p>
                </div>

                {/* Animated Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-700/0 via-blue-500 to-blue-700/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </div>
            ))}
            </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutMe;