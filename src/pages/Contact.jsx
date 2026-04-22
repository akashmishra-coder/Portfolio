import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  // Simple state for the form (for demonstration)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formcarry.com/s/NjfoFpW8XYm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 4000);

    return () => clearTimeout(timer);
  }
}, [success]);

  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0a] min-h-screen py-24 px-4 md:px-12 lg:px-20 font-sans overflow-hidden flex items-center"
    >
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let's{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* --- Left Column: Contact Info Cards --- */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col gap-6 bg-[#0a0a0a]  rounded-3xl p-8 shadow-2xl border border-zinc-800 relative overflow-hidden"
          >
            {/* Decorative top border line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>

            <div className="text-2xl font-semibold text-white mb-2">
              Contact Information
            </div>

            {/* Email Card */}
            <div className="group flex items-center p-6 bg-[#131313] border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-colors duration-300 hover:translate-x-1">
              <div className="w-14 h-14 bg-gray-900 border border-zinc-700 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-colors duration-300">
                <FaEnvelope className="text-xl text-blue-400" />
              </div>
              <div className="ml-6">
                <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
                <a
                  href="mailto:akashmishra247500@gmail.com"
                  className="text-lg text-white hover:text-blue-400 transition-colors duration-300 "
                >
                  akashmishra247500@gmail.com {/* Replace with your email */}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group flex items-center p-6 bg-[#131313] border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-colors duration-300 hover:translate-x-1">
              <div className="w-14 h-14 bg-gray-900 border border-zinc-700 rounded-full flex items-center justify-center group-hover:bg-purple-500/10 transition-colors duration-300">
                <FaPhone className="text-xl text-purple-400" />
              </div>
              <div className="ml-6">
                <p className="text-sm text-gray-400 font-medium mb-1">Phone</p>
                <a
                  href="tel:+919899843347"
                  className="text-lg text-white hover:text-purple-400 transition-colors duration-300"
                >
                  +91 98998 43347
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="group flex items-center p-6 bg-[#131313] border border-zinc-800 rounded-2xl hover:border-pink-500/50 transition-colors duration-300 hover:translate-x-1">
              <div className="w-14 h-14 bg-gray-900 border border-zinc-700 rounded-full flex items-center justify-center group-hover:bg-pink-500/10 transition-colors duration-300">
                <FaLocationDot className="text-xl text-pink-400" />
              </div>
              <div className="ml-6">
                <p className="text-sm text-gray-400 font-medium mb-1">
                  Location
                </p>
                <p className="text-lg text-white">Delhi, India</p>
              </div>
            </div>
          </motion.div>

          {/* --- Right Column: The Form --- */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            {/* <form action="https://formsubmit.co/akashmishra247500@gmail.com" method="POST"  className="bg-[#131313] border border-zinc-800 p-8 md:p-10 rounded-3xl flex flex-col gap-6 shadow-2xl relative overflow-hidden"> */}
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#131313] border border-zinc-800 p-10 rounded-3xl text-center shadow-2xl"
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thanks for reaching out. I’ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#131313] border border-zinc-800 p-8 md:p-10 rounded-3xl flex flex-col gap-6 shadow-2xl relative overflow-hidden"
              >
                {/* Decorative top border line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-600 to-purple-600"></div>

                {/* spam prevention field */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-400"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#0a0a0a] border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-400"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a] border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="number"
                      className="text-sm font-medium text-gray-400"
                    >
                      Your Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      placeholder="+91 898978787"
                      className="w-full bg-[#0a0a0a] border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-400"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="w-full bg-[#0a0a0a] border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-400"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="How can I help you?"
                    className="w-full bg-[#0a0a0a] border border-zinc-700 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 placeholder:text-zinc-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <FaPaperPlane className="text-sm" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
