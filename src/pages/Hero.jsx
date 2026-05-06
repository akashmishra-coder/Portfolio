import React from "react";
import { motion } from "framer-motion";
import { RiCheckboxCircleFill, RiReactjsFill } from "react-icons/ri";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareJs,
  FaWhatsapp,
} from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import linkdin from "../assets/linkdin.png"; // Placeholder image import
import { IoShareSocial } from "react-icons/io5";
import Particles from "../component/Particals";
import Resume from "../assets/Akash_Resume.pdf";
// --- SVG Icons ---
const CVIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const TalkIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

// --- Continuous Floating Animations ---
const floatAnimation = {
  animate: { y: [0, -15, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

const oppositeFloatAnimation = {
  animate: { y: [0, 15, 0] },
  transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
};

const shakeAnimation = {
  animate: { rotate: [0, 14, -8, 14, -4, 10, 0] },
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatDelay: 1,
    ease: "easeInOut",
  },
};

// --- Initial Page Load Entrance Animations ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each text element appearing
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "linear-gradient(to bottom, rgb(0 0 0), #1e293b)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Particles */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <section className="relative z-10 text-gray-100 flex items-center justify-center p-6 md:p-12 lg:p-20 font-sans min-h-screen">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* --- Left Side Content (Text & Buttons) --- */}
            {/* OPTIMIZATION: order-2 on mobile (below image), lg:order-1 on desktop (left of image) */}
            <motion.div
              className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-6 lg:pb-2 pb-20"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={textVariant}
                className="text-xl flex items-center gap-2 text-gray-400"
              >
                <motion.span
                  {...shakeAnimation}
                  style={{
                    display: "inline-block",
                    transformOrigin: "70% 70%",
                    fontSize: "2.5rem",
                  }}
                >
                  👋
                </motion.span>
                Hello, I'm
              </motion.p>

              <motion.h1
                variants={textVariant}
                className="text-5xl md:text-6xl font-extrabold text-[#f3f4f6]"
              >
                Akash{" "}
                <span className="bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent">
                  Mishra
                </span>
              </motion.h1>

              <motion.p
                variants={textVariant}
                className="text-base text-gray-300 leading-relaxed max-w-3xl"
              >
                A motivated{" "}
                <span className="text-[#08afdd] font-medium">
                  Frontend/React Developer
                </span>{" "}
                 with hands-on experience in building
                responsive web applications using React.js. Adept at creating
                scalable, user-friendly applications and optimizing Frontend
                UI/UX design, with an impressive ability to leverage Generative AI and
                quickly adapt to new technologies. I am passionate about writing
                clean code, learning modern frontend practices, and contributing
                to high-quality digital products.
              </motion.p>

              {/* Skill Tags */}
              <motion.div
                variants={textVariant}
                className="flex flex-wrap gap-3 mt-2"
              >
                {["Modern Design", "Responsive", "User-Focused"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 flex items-center rounded-full border border-[#342aba] bg-blue-800/30 text-[#f3f4f6] text-sm font-medium hover:bg-blue-800/40 hover:-translate-y-0.5 transition transform cursor-pointer"
                  >
                    <RiCheckboxCircleFill
                      color="blue"
                      className="w-4 h-4 mr-2"
                    />
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={textVariant}
                className="flex flex-wrap gap-4 mt-4 text-md"
              >
                <button>
                  <a
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-linear-to-r from-blue-700 to-purple-800 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2.5 px-7 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <CVIcon />
                    View CV
                  </a>
                </button>
                <a
                  href={`tel:9899843347`}
                  className="border border-blue-500 hover:bg-blue-500/10 text-blue-300 font-semibold py-2.5 px-7 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <TalkIcon />
                  Let's Talk
                </a>
              </motion.div>

              {/* Connect With Me */}
              <motion.div
                variants={textVariant}
                className="flex items-center gap-4 mt-6"
              >
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-700 to-purple-800 rounded-md"></div>
                <a
                  href="#connect"
                  className="bg-gradient-to-r from-blue-700/60 to-purple-700/40 border-blue-500 border-2 w-fit text-white font-semibold py-1.5 px-5 rounded-full flex items-center gap-2 text-lg transition-colors hover:bg-blue-600/30"
                >
                  <IoShareSocial />
                  Connect with me
                </a>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-700 to-purple-800 rounded-md"></div>
              </motion.div>

              {/* Social Icons */}
              <motion.div variants={textVariant} className="flex gap-5 mt-6">
                {[
                  {
                    icon: "FaLinkedin",
                    color: "#0A66C2",
                    bgGradient: "from-blue-600 to-blue-400",
                    label: "LinkedIn",
                    link: "https://www.linkedin.com/in/akash-mishra-b4440b331",
                  },
                  {
                    icon: "FaWhatsapp",
                    color: "#25D366",
                    bgGradient: "from-green-600 to-green-400",
                    label: "Whatsapp",
                    link: "https://api.whatsapp.com/send?phone=9899843347&forceIntent=true&load=loadInIOSExternalSafari",
                  },
                  {
                    icon: "FaInstagram",
                    color: "#E4405F",
                    bgGradient: "from-pink-500 to-rose-400",
                    label: "Instagram",
                    link: "https://www.instagram.com/akash_mishra_",
                  },
                  {
                    icon: "FaGithub",
                    color: "#FFFFFF",
                    bgGradient: "from-gray-700 to-gray-500",
                    label: "GitHub",
                    link: "https://github.com/akashmishra-coder",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.icon}
                    href={social.link}
                    whileHover={{ scale: 1.2, rotateY: 360 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br ${social.bgGradient} border-2 border-gray-600 cursor-pointer shadow-lg hover:shadow-2xl relative group transition-all duration-100`}
                    title={social.label}
                  >
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}, transparent)`,
                        filter: "blur(8px)",
                      }}
                    ></div>
                    <div className="relative z-10">
                      {social.icon === "FaLinkedin" && (
                        <FaLinkedin size={22} color="white" />
                      )}
                      {social.icon === "FaWhatsapp" && (
                        <FaWhatsapp size={22} color="white" />
                      )}
                      {social.icon === "FaInstagram" && (
                        <FaInstagram size={22} color="white" />
                      )}
                      {social.icon === "FaGithub" && (
                        <FaGithub size={22} color="white" />
                      )}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* --- Right Side (Profile Circle with Animated Icons) --- */}
            {/* OPTIMIZATION: order-1 on mobile (above text), lg:order-2 on desktop (right of text) */}
            <motion.div
              className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center p-4"
              variants={imageVariant}
              initial="hidden"
              animate="show"
            >
              <div className="relative aspect-square w-full max-w-[380px] group">
                {/* Floating Icons */}
                <motion.div
                  className="absolute -top-4 -left-4 z-10 p-2.5 bg-gray-900 rounded-2xl shadow-xl"
                  {...floatAnimation}
                >
                  <RiReactjsFill size={30} color="blue" />
                </motion.div>

                <motion.div
                  className="absolute -top-4 -right-4 z-10 p-2.5 bg-gray-900 rounded-2xl shadow-xl"
                  {...oppositeFloatAnimation}
                  transition={{
                    ...oppositeFloatAnimation.transition,
                    delay: 0.5,
                  }}
                >
                  <IoLogoHtml5 size={30} color="red" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 z-10 p-2.5 bg-gray-900 rounded-2xl shadow-xl"
                  {...oppositeFloatAnimation}
                  transition={{
                    ...oppositeFloatAnimation.transition,
                    delay: 1,
                  }}
                >
                  <FaSquareJs size={30} color="yellow" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 z-10 p-2.5 bg-gray-900 rounded-2xl shadow-xl"
                  {...floatAnimation}
                  transition={{ ...floatAnimation.transition, delay: 1.5 }}
                >
                  <BiLogoTailwindCss size={30} color="blue" />
                </motion.div>

                {/* Profile Image Circle */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500 relative group-hover:scale-105 transition-transform duration-300 shadow-2xl shadow-blue-500/60 ">
                  <img
                    src={linkdin}
                    alt="Akash Mishra profile"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                  <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(236,72,153,0.3)] pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
