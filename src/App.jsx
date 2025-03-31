import React from "react";
import { useState, useContext } from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt,
  FaCode, FaReact, FaServer, FaPlug,
  FaDatabase, FaCloud, FaGitAlt,
  FaBars, FaTimes, FaMoon, FaSun
} from "react-icons/fa";
import { Link } from "react-scroll";
import { ThemeContext } from "./ThemeContext";

import profilePic from "./assets/profile.jpg";
import homeEase from "./assets/homeease.jpg";
import mdEditor from "./assets/mdeditor.jpg";
import anonChat from "./assets/anonchat.jpg";
import aiChatbot from "./assets/aichatbot.jpg";
import portfolioPic from "./assets/portfolio.jpg";
import chitkaraLogo from "./assets/chitkara.jpg";
import schoolLogo from "./assets/school.jpg";

const themes = {
  dark: {
    background: "#282a36",
    card: "#44475a",
    text: "#f8f8f2",
    primary: "#50fa7b",
    secondary: "#bd93f9",
    highlight: "#ff79c6",
    accent: "#ffb86c",
    nav: "#1e1f29",
    border: "#6272a4",
    skillTag: "#6272a4",
    skillTagText: "#f8f8f2",
    cardHover: "rgba(80, 250, 123, 0.1)"
  },
  light: {
    background: "#f5f5f5",
    card: "#ffffff",
    text: "#333333",
    primary: "#4CAF50",
    secondary: "#6200ea",
    highlight: "#E91E63",
    accent: "#ff9800",
    nav: "#ffffff",
    border: "#e0e0e0",
    skillTag: "#e0f2f1",
    skillTagText: "#00796b",
    cardHover: "rgba(76, 175, 80, 0.1)"
  }
};

const projects = [
  {
    title: "🏠 HomeEase",
    description: "MERN stack home service booking platform.",
    img: homeEase,
    github: "https://github.com/SharadJ19/homeease",
    live: "https://homeease-oa77.onrender.com/",
  },
  {
    title: "📝 MDeditor",
    description: "Minimal Markdown editor with live rendering.",
    img: mdEditor,
    github: "https://github.com/SharadJ19/mdeditor",
    live: "https://mdeditor.onrender.com/",
  },
  {
    title: "💬 AnonChat",
    description: "Anonymous chat app with live polling.",
    img: anonChat,
    github: "https://github.com/SharadJ19/anonchat",
    live: "https://anonchat-w4dw.onrender.com/",
  },
  {
    title: "🤖 AI Chatbot",
    description: "AI chatbot using Google's Gemini API.",
    img: aiChatbot,
    github: "https://github.com/SharadJ19/aichatbot",
    live: "https://aichatbot-93ke.onrender.com/",
  },
  {
    title: "🌐 Portfolio Website",
    description: "Personal portfolio built with React & Tailwind.",
    img: portfolioPic,
    github: "https://github.com/SharadJ19/portfolio",
    live: "https://sharadchandel2005.onrender.com/",
  },
];

const skillGroups = {
  "Programming Languages": ["Java (DSA)", "JavaScript", "TypeScript"],
  "Frontend Development": ["React.js", "Next.js", "Tailwind CSS"],
  "Backend Development": ["Node.js", "Express.js"],
  "APIs & Services": ["REST APIs"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
  "DevOps & Cloud": ["Docker", "AWS EC2", "CI/CD Pipelines"],
  "Version Control & Tools": ["Git", "GitHub"],
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const colors = isDarkMode ? themes.dark : themes.light;

  const getCategoryIcon = (category) => {
    const icons = {
      "Programming Languages": <FaCode size={24} style={{ color: colors.primary }} />,
      "Frontend Development": <FaReact size={24} style={{ color: colors.primary }} />,
      "Backend Development": <FaServer size={24} style={{ color: colors.primary }} />,
      "APIs & Services": <FaPlug size={24} style={{ color: colors.primary }} />,
      "Databases": <FaDatabase size={24} style={{ color: colors.primary }} />,
      "DevOps & Cloud": <FaCloud size={24} style={{ color: colors.primary }} />,
      "Version Control & Tools": <FaGitAlt size={24} style={{ color: colors.primary }} />,
    };
    return icons[category] || <FaCode size={24} style={{ color: colors.primary }} />;
  };

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        transition: "background-color 0.3s, color 0.3s"
      }}
      className="min-h-screen font-sans"
    >
      {/* Navbar Section */}
      <nav
        style={{
          backgroundColor: colors.nav,
          borderColor: colors.border,
          transition: "background-color 0.3s, border-color 0.3s"
        }}
        className="fixed top-0 left-0 w-full flex justify-between items-center z-50 shadow-lg border-b md:px-10 md:py-5 px-4 py-3"
      >
        <Link
          to="hero"
          smooth={true}
          duration={600}
          offset={-50}
          style={{ color: colors.primary }}
          className="text-xl md:text-2xl font-bold hover:text-secondary transition cursor-pointer"
        >
          Sharad Chandel
        </Link>

        <div className="hidden md:flex gap-6" style={{ color: isDarkMode ? "#c8c8c8" : "#666666" }}>
          <Link to="skills" smooth={true} duration={600} offset={-50} className="cursor-pointer hover:text-primary transition">
            Skills
          </Link>
          <Link to="education" smooth={true} duration={600} offset={-50} className="cursor-pointer hover:text-primary transition">
            Education
          </Link>
          <Link to="projects" smooth={true} duration={600} offset={-50} className="cursor-pointer hover:text-primary transition">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={600} offset={-50} className="cursor-pointer hover:text-primary transition">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button - Always visible in both mobile and desktop */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-opacity-20 hover:bg-gray-300 transition"
            aria-label="Toggle theme"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ?
              <FaSun size={18} style={{ color: "#FFC107" }} /> :
              <FaMoon size={18} style={{ color: "#6200ea" }} />
            }
          </button>

          {/* Social icons - Only visible on desktop */}
          <div className="hidden md:flex gap-4">
            <a href="https://github.com/SharadJ19" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="hover:text-secondary transition" />
            </a>
            <a href="https://www.linkedin.com/in/sharadchandel2005/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="hover:text-secondary transition" />
            </a>
            <a href="mailto:sharadchandel2005@gmail.com">
              <FaEnvelope size={24} className="hover:text-secondary transition" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl ml-1"
            style={{ color: isDarkMode ? "#c8c8c8" : "#666666" }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu with smooth animation */}
      <div
        style={{
          backgroundColor: colors.nav,
          borderColor: colors.border,
          color: isDarkMode ? "#c8c8c8" : "#666666",
          maxHeight: menuOpen ? "300px" : "0px",
          opacity: menuOpen ? "1" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out, opacity 0.3s ease-in-out",
          position: "fixed",
          top: "50px",
          left: "0",
          width: "100%",
          zIndex: "40",
          boxShadow: menuOpen ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
          borderBottomWidth: menuOpen ? "1px" : "0",
          borderBottomStyle: "solid"
        }}
        className="md:hidden"
      >
        <div className="py-3 flex flex-col text-center">
          <Link to="skills"
            smooth={true}
            duration={600}
            offset={-50}
            className="py-3 hover:text-primary transition"
            onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link to="education"
            smooth={true}
            duration={600}
            offset={-50}
            className="py-3 hover:text-primary transition"
            onClick={() => setMenuOpen(false)}>
            Education
          </Link>
          <Link to="projects"
            smooth={true}
            duration={600}
            offset={-50}
            className="py-3 hover:text-primary transition"
            onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="contact"
            smooth={true}
            duration={600}
            offset={-50}
            className="py-3 hover:text-primary transition"
            onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-24 p-12 text-center flex flex-col items-center max-w-4xl mx-auto">
        <img
          src={profilePic}
          alt="Profile"
          style={{ borderColor: colors.primary }}
          className="w-40 h-40 rounded-full border-4 shadow-lg transition-transform hover:scale-[1.01]"
        />
        <h1 style={{ color: colors.primary }} className="text-5xl font-bold mt-6">Sharad Chandel</h1>
        <h2 style={{ color: colors.secondary }} className="text-xl mt-3 font-semibold">
          Full-Stack Developer | Software Engineer
        </h2>
        <p style={{ color: isDarkMode ? "#c8c8c8" : "#666666" }} className="text-lg mt-4 max-w-xl px-6 leading-relaxed">
          Hey there! 👋 I'm Sharad, a <span style={{ color: colors.highlight }}>problem solver</span> and
          <span style={{ color: colors.secondary }}> tech enthusiast</span> passionate about crafting scalable applications.
          Skilled in <span style={{ color: colors.primary }} className="whitespace-nowrap">Java, C++, and Web Technologies</span>, I thrive on writing
          <span style={{ color: colors.accent }}> clean, efficient code</span> and constantly exploring new innovations. 🚀
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-12 text-center max-w-5xl mx-auto">
        <h2 style={{ color: colors.primary }} className="text-4xl font-bold mb-8">🛠 Skills & Technologies</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(skillGroups).map((category, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.card,
                borderColor: colors.border,
                transition: "background-color 0.3s, transform 0.3s",
                transform: "scale(1)",
              }}
              className="p-6 rounded-lg shadow-lg border hover:scale-[1.02]"
            >
              {/* Category Icon and Name */}
              <div className="flex items-center justify-center gap-2 mb-4">
                {getCategoryIcon(category)}
                <h3 style={{ color: colors.secondary }} className="text-lg font-semibold">{category}</h3>
              </div>

              {/* Skills List */}
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {skillGroups[category].map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      backgroundColor: colors.skillTag,
                      color: colors.skillTagText
                    }}
                    className="px-4 py-2 rounded-md text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="p-12 text-center">
        <h2 style={{ color: colors.primary }} className="text-4xl font-bold">🎓 Education</h2>
        <div className="max-w-4xl mx-auto mt-6 space-y-6">
          <div
            style={{
              backgroundColor: colors.card,
              transition: "background-color 0.3s, transform 0.3s",
            }}
            className="p-6 rounded-lg shadow-lg hover:scale-[1.01]"
          >
            <img
              src={chitkaraLogo}
              alt="Chitkara University"
              style={{ borderColor: colors.secondary }}
              className="w-20 h-20 mx-auto mb-3 rounded-md border"
            />
            <h3 style={{ color: colors.secondary }} className="text-2xl font-semibold">Bachelor of Engineering in Computer Science</h3>
            <p style={{ color: isDarkMode ? "#c8c8c8" : "#666666" }}>Chitkara University, Himachal Pradesh</p>
            <p style={{ color: isDarkMode ? "#a0a0a0" : "#888888" }}>2022 - Present</p>
          </div>
          <div
            style={{
              backgroundColor: colors.card,
              transition: "background-color 0.3s, transform 0.3s",
            }}
            className="p-5 rounded-lg shadow-lg hover:scale-[1.01]"
          >
            <img
              src={schoolLogo}
              alt="DAV Public School"
              style={{ borderColor: colors.secondary }}
              className="w-20 h-20 mx-auto mb-3 rounded-md border"
            />
            <h3 style={{ color: colors.secondary }} className="text-xl font-semibold">Senior Secondary (XII)</h3>
            <p style={{ color: isDarkMode ? "#c8c8c8" : "#666666" }}>DAV Public Sr. Sec School, Parwanoo (CBSE)</p>
            <p style={{ color: isDarkMode ? "#a0a0a0" : "#888888" }}>2022</p>
            <p style={{ color: isDarkMode ? "#a0a0a0" : "#888888" }}>Opted for Computer Science as an elective subject</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-12 text-center">
        <h2 style={{ color: colors.primary }} className="text-4xl font-bold">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.card,
                transition: "background-color 0.3s, transform 0.3s",
              }}
              className="p-6 rounded-lg shadow-lg hover:scale-[1.02]"
            >
              <div className="w-full aspect-[16/9]">
                <img
                  src={proj.img}
                  alt={proj.title}
                  style={{ borderColor: colors.secondary }}
                  className="w-full h-full object-cover rounded-md border"
                />
              </div>

              <h3 className="text-2xl font-semibold mt-4">{proj.title}</h3>
              <p style={{ color: isDarkMode ? "#c8c8c8" : "#666666" }} className="text-sm">{proj.description}</p>
              <div className="flex justify-center gap-4 mt-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: colors.secondary,
                    color: isDarkMode ? "#000000" : "#ffffff"
                  }}
                  className="px-4 py-2 rounded-md font-semibold flex items-center gap-2 transition hover:opacity-90"
                >
                  <FaGithub size={18} /> Source Code
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: colors.primary,
                    color: isDarkMode ? "#000000" : "#ffffff"
                  }}
                  className="px-4 py-2 rounded-md font-semibold flex items-center gap-2 transition hover:opacity-90"
                >
                  <FaExternalLinkAlt size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 text-center">
        <h2 style={{ color: colors.primary }} className="text-4xl font-bold">📩 Contact Me</h2>
        <p style={{ color: isDarkMode ? "#a0a0a0" : "#888888" }} className="mt-2">Feel free to reach out to me for collaborations or opportunities!</p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a
            href="mailto:sharadchandel2005@gmail.com"
            style={{
              backgroundColor: isDarkMode ? "#6272a4" : "#e3f2fd",
              color: isDarkMode ? "#f8f8f2" : "#1565c0",
              transition: "background-color 0.3s, transform 0.3s"
            }}
            className="flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#50fa7b] hover:text-black font-semibold"
          >
            <FaEnvelope size={20} /> Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/sharadchandel2005/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: isDarkMode ? colors.secondary : "#e8eaf6",
              color: isDarkMode ? "#f8f8f2" : "#3f51b5",
              transition: "background-color 0.3s, transform 0.3s"
            }}
            className="flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#ff79c6] hover:text-black font-semibold"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/SharadJ19"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: isDarkMode ? colors.accent : "#fff3e0",
              color: isDarkMode ? "#f8f8f2" : "#e65100",
              transition: "background-color 0.3s, transform 0.3s"
            }}
            className="flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg transform hover:scale-105 hover:bg-[#ff5555] hover:text-black font-semibold"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: colors.nav,
          color: isDarkMode ? "#c8c8c8" : "#666666",
          transition: "background-color 0.3s"
        }}
        className="text-center p-5"
      >
        <p className="flex items-center justify-center gap-2">
          Made with <span className="text-red-500">❤️</span> by Sharad Chandel | © 2025 All Rights Reserved
        </p>
      </footer>

    </div>
  );
};

export default App;
