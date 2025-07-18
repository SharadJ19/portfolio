import React, { useState, useContext, useEffect } from "react";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt,
  FaCode, FaReact, FaServer, FaPlug,
  FaDatabase, FaCloud, FaGitAlt, FaUserTie,
  FaBars, FaTimes, FaMoon, FaSun, FaArrowRight, FaDownload
} from "react-icons/fa";
import { Link } from "react-scroll";
import { ThemeContext } from "./ThemeContext";
import { ContactForm } from "./ContactForm";

// Assets
import profilePic from "./assets/profile.jpg";
import homeEase from "./assets/homeease.jpg";
import mdEditor from "./assets/mdeditor.jpg";
import anonChat from "./assets/anonchat.jpg";
import aiChatbot from "./assets/aichatbot.jpg";
import portfolioPic from "./assets/portfolio.jpg";
import artCraftEcom from './assets/artCraftEcom.jpg';
import jmoExports from './assets/jmoExports.jpg';
import chitkaraLogo from "./assets/chitkara.jpg";
import schoolLogo from "./assets/school.jpg";
import codingIllustration from "./assets/coding.svg";

// Social Links Component to avoid repetition
const SocialLinks = ({ size = 20, className = "" }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://github.com/SharadJ19"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="GitHub"
      >
        <FaGithub size={size} style={{ color: isDarkMode ? '#cbd5e1' : '#475569' }} />
      </a>
      <a
        href="https://www.linkedin.com/in/sharadchandel2005/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={size} style={{ color: isDarkMode ? '#cbd5e1' : '#475569' }} />
      </a>
      <a
        href="mailto:sharadchandel2005@gmail.com"
        className="transition-transform hover:scale-110"
        aria-label="Email"
      >
        <FaEnvelope size={size} style={{ color: isDarkMode ? '#cbd5e1' : '#475569' }} />
      </a>
    </div>
  );
};

// Stats Component
const Stats = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      <div className="px-6 py-3 rounded-lg" style={{ background: 'var(--primary)10' }}>
        <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>5+</div>
        <div style={{ color: 'var(--text-secondary)' }}>Projects</div>
      </div>
      <div className="px-6 py-3 rounded-lg" style={{ background: 'var(--secondary)10' }}>
        <div className="text-2xl font-bold" style={{ color: 'var(--secondary)' }}>2+</div>
        <div style={{ color: 'var(--text-secondary)' }}>Years Experience</div>
      </div>
      <div className="px-6 py-3 rounded-lg" style={{ background: 'var(--accent)10' }}>
        <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>10+</div>
        <div style={{ color: 'var(--text-secondary)' }}>Technologies</div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
      style={{
        backgroundColor: 'var(--card)',
        boxShadow: 'var(--shadow)',
      }}
    >
      <div className="relative overflow-hidden group h-48">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(0,0,0,0.7)" }}
        >
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-gray-900 hover:scale-110 transition-transform"
              aria-label="View source code"
            >
              <FaGithub size={20} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-gray-900 hover:scale-110 transition-transform"
                aria-label="View live demo"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{project.icon}</span>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>

        <p style={{ color: 'var(--text-secondary)' }} className="mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: 'var(--primary)15',
                color: 'var(--primary)'
              }}
              className="px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {expanded && (
          <div className="mt-4 mb-4" style={{ color: 'var(--text-secondary)' }}>
            <h4 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>Key Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium"
            style={{ color: 'var(--primary)' }}
            aria-label={expanded ? "Show less details" : "Show more details"}
          >
            {expanded ? "Show Less" : "Learn More"}
          </button>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="GitHub repository"
            >
              <FaGithub size={14} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Live demo"
              >
                <FaExternalLinkAlt size={12} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Skill Category Component
const SkillCategory = ({ category, skills }) => {
  const getCategoryIcon = (cat) => {
    const icons = {
      "Programming Languages": <FaCode size={24} style={{ color: 'var(--primary)' }} />,
      "Frontend Development": <FaReact size={24} style={{ color: 'var(--primary)' }} />,
      "Backend Development": <FaServer size={24} style={{ color: 'var(--primary)' }} />,
      "APIs & Services": <FaPlug size={24} style={{ color: 'var(--primary)' }} />,
      "Databases": <FaDatabase size={24} style={{ color: 'var(--primary)' }} />,
      "DevOps & Cloud": <FaCloud size={24} style={{ color: 'var(--primary)' }} />,
      "Version Control & Tools": <FaGitAlt size={24} style={{ color: 'var(--primary)' }} />,
      "Professional": <FaUserTie size={24} style={{ color: 'var(--primary)' }} />,
    };
    return icons[cat] || <FaCode size={24} style={{ color: 'var(--primary)' }} />;
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--card)',
        boxShadow: 'var(--shadow)',
      }}
      className="p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="p-3 rounded-lg"
          style={{ background: 'var(--primary)15' }}
        >
          {getCategoryIcon(category)}
        </div>
        <h3
          className="text-xl font-semibold"
          style={{ color: 'var(--primary)' }}
        >
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            style={{
              backgroundColor: 'var(--skill-tag)',
              color: 'var(--skill-tag-text)'
            }}
            className="px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ date, title, subtitle, description, points, logo, isFirst, isLast }) => {
  return (
    <div className={`flex flex-col md:flex-row items-start relative ${isFirst ? 'mt-0' : 'mt-12'}`}>
      {/* Left side (date) - shown on desktop */}
      <div className="hidden md:block w-1/2 pr-8 text-right">
        <div
          className="absolute top-0 right-[-12px] w-6 h-6 rounded-full"
          style={{
            background: 'var(--gradient)',
            transform: "translateX(50%)",
            zIndex: 1
          }}
        ></div>
        <h3 className="text-xl font-bold mb-1">{date}</h3>
        <p style={{ color: 'var(--text-secondary)' }} className="text-sm">{subtitle}</p>
      </div>

      {/* Right side (content) */}
      <div className="md:w-1/2 md:pl-8 w-full">
        {/* Dot for mobile */}
        <div
          className="md:hidden absolute top-0 left-[-24px] w-6 h-6 rounded-full"
          style={{ background: 'var(--gradient)' }}
        ></div>

        {/* Date for mobile */}
        <div className="md:hidden text-base font-bold mb-2" style={{ color: 'var(--primary)' }}>
          {date}
        </div>

        {/* Content card */}
        <div
          style={{
            backgroundColor: 'var(--card)',
            boxShadow: 'var(--shadow)',
          }}
          className="p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="flex items-center gap-4 mb-3">
            {logo && (
              <img
                src={logo}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
                style={{ border: `2px solid var(--secondary)` }}
              />
            )}
            <div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--secondary)' }}>
                {title}
              </h3>
              {subtitle && (
                <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {description && (
            <p style={{ color: 'var(--text-secondary)' }} className="mb-3">
              {description}
            </p>
          )}

          {points && (
            <ul className="list-disc list-inside ml-2 space-y-1" style={{ color: 'var(--text-secondary)' }}>
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  const sections = ["hero", "about", "skills", "experience", "projects", "contact"];

  // Enhanced projects data
  const projects = [

    {
      title: "HomeEase",
      icon: "🏠",
      description: "MERN stack home service booking platform with secure payments and service provider management.",
      img: homeEase,
      github: "https://github.com/SharadJ19/homeease",
      live: "https://homeease-oa77.onrender.com/",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
      features: [
        "Role-based authentication (User or Worker)",
        "Real-time booking management system",
        "Worker rating and review system",
        "Planned Secure payment integration with Razorpay"
      ]
    },
    {
      title: "Art & Craft E-commerce Platform",
      icon: "🎨🛍️",
      description: "Full-stack MERN e-commerce platform for art and craft supplies.",
      img: artCraftEcom,
      github: "https://github.com/SharadJ19/artcraft",
      live: "https://artcraft.onrender.com/",
      tags: ["React", "Node.js", "Express", "Mongodb", "JWT Auth", "Tailwind CSS"],
      features: [
        "User authentication and account management",
        "Product browsing with search and filtering",
        "Shopping cart and secure checkout",
        "Admin dashboard for inventory management",
        "Responsive design for all devices"
      ]
    },
    {
      title: "JMO Exports Website",
      icon: "🌐",
      description: "Company website made for Jaunt Merchandise Overseas built with React, Tailwind, and Framer Motion.",
      img: jmoExports,
      github: "https://github.com/SharadJ19/jmo",
      live: "https://jmo.vercel.app/",
      tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
      features: [
        "Smooth scroll animations",
        "Mobile-friendly responsive design",
        "Product showcase section",
        "Working contact form using EmailJS",
      ]
    },
    {
      title: "AI Chatbot",
      icon: "🤖",
      description: "Conversational AI chatbot using Google's Gemini API with natural language processing.",
      img: aiChatbot,
      github: "https://github.com/SharadJ19/aichatbot",
      live: "https://aichatbot-93ke.onrender.com/",
      tags: ["AI", "Gemini API", "React", "NLP"],
      features: [
        "Integration with Google's Gemini AI",
        "Conversation history and context retention",
        "Markdown response formatting"
      ]
    },
    {
      title: "AnonChat",
      icon: "💬",
      description: "Anonymous chat application with live polling and real-time messaging capabilities.",
      img: anonChat,
      github: "https://github.com/SharadJ19/anonchat",
      live: "https://anonchat-w4dw.onrender.com/",
      tags: ["Socket.io", "Express", "React", "Real-time"],
      features: [
        "Real-time anonymous chat rooms",
        "Live polling feature with results visualization",
        "No user data collection or storage"
      ]
    },
    {
      title: "MDeditor",
      icon: "📝",
      description: "Minimal Markdown editor with live rendering and syntax highlighting for developers.",
      img: mdEditor,
      github: "https://github.com/SharadJ19/mdeditor",
      live: "https://mdeditor.onrender.com/",
      tags: ["React", "MongoDB", "JavaScript", "Markdown"],
      features: [
        "Live Markdown preview with syntax highlighting",
        "MongoDB for cloud storage",
        "Save a file or load a file by title"
      ]
    },
    {
      title: "Portfolio Website",
      icon: "🌐",
      description: "Personal portfolio built with React & Tailwind CSS featuring responsive design.",
      img: portfolioPic,
      github: "https://github.com/SharadJ19/portfolio",
      live: "http://sharad.is-a.dev/",
      tags: ["React", "Tailwind CSS", "Responsive"],
      features: [
        "Dark/light mode toggle",
        "Smooth scroll navigation",
        "Project showcase",
        "Responsive design for all devices"
      ]
    }
  ];



  // Enhanced skills data
  const skillGroups = {
    "Programming Languages": ["Java", "JavaScript", "TypeScript", "Python"],
    "Frontend Development": ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    "Backend Development": ["Node.js", "Express.js", "REST APIs"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
    "DevOps & Cloud": ["Docker", "AWS EC2", "CI/CD", "Render"],
    "Version Control & Tools": ["Git", "GitHub", "Postman"],
    "Professional": ["Problem Solving", "Teamwork", "Communication", "Agile Methodology"],
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const positions = sections.map(section => {
        const element = document.getElementById(section);
        if (!element) return { id: section, position: 0 };
        return {
          id: section,
          position: element.getBoundingClientRect().top
        };
      });

      const active = positions.reduce((closest, section) => {
        if (section.position <= 100 && section.position > closest.position) {
          return section;
        }
        return closest;
      }, { id: "hero", position: -Infinity });

      setActiveSection(active.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--text)',
        transition: 'background-color 0.5s, color 0.5s'
      }}
      className="min-h-screen font-sans scroll-smooth"
    >
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: scrolled ? 'var(--nav)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          transition: 'all 0.5s ease'
        }}
        className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 ${scrolled ? 'shadow-lg border-b' : ''
          } md:px-10 px-6 py-4`}
      >
        <Link
          to="hero"
          smooth={true}
          duration={800}
          offset={-70}
          className="text-xl md:text-2xl font-bold cursor-pointer flex items-center"
          aria-label="Home"
        >
          <span
            style={{
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Sharad Chandel
          </span>
        </Link>

        <div className="hidden md:flex gap-8" style={{ color: 'var(--text-secondary)' }}>
          {sections.slice(1).map(section => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={800}
              offset={-70}
              className={`cursor-pointer transition-all duration-300 relative ${activeSection === section ? 'font-medium' : ''
                }`}
              style={{
                color: activeSection === section ? 'var(--primary)' : 'var(--text-secondary)'
              }}
              aria-label={`Navigate to ${section}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <span
                  className="absolute bottom-[-6px] left-0 w-full h-[3px] rounded-full"
                  style={{ background: 'var(--gradient)' }}
                ></span>
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6">
            <SocialLinks />
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-transform hover:scale-110"
            style={{ background: 'var(--background-secondary)' }}
            aria-label="Toggle theme"
          >
            {isDarkMode ?
              <FaSun size={18} style={{ color: "#FFC107" }} /> :
              <FaMoon size={18} style={{ color: "#3b82f6" }} />
            }
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full"
            style={{ background: menuOpen ? 'var(--primary)' : 'var(--background-secondary)' }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ?
              <FaTimes size={18} style={{ color: "#ffffff" }} /> :
              <FaBars size={18} style={{ color: 'var(--text-secondary)' }} />
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundColor: 'var(--nav)',
          backdropFilter: 'blur(10px)',
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? "1" : "0",
          transition: "max-height 0.5s ease, opacity 0.3s ease",
          top: "64px",
        }}
        className="md:hidden fixed left-0 w-full z-40 overflow-hidden"
      >
        <div className="py-4 flex flex-col">
          {sections.slice(1).map(section => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-6 hover:bg-opacity-10 hover:bg-white transition-colors"
              style={{
                color: activeSection === section ? 'var(--primary)' : 'var(--text-secondary)',
                borderLeft: activeSection === section ? '3px solid var(--primary)' : "3px solid transparent"
              }}
              aria-label={`Navigate to ${section}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          <div className="flex justify-center gap-6 py-4 mt-2 border-t" style={{ borderColor: 'var(--border)' }}>
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center pt-16 pb-20 px-6"
        style={{
          background: isDarkMode
            ? `radial-gradient(circle at 80% 20%, var(--background-secondary) 0%, var(--background) 60%)`
            : `radial-gradient(circle at 80% 20%, #ffffff 0%, var(--background) 70%)`
        }}
      >
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-left">
            <div className="mb-4 inline-block">
              <div
                className="px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{
                  background: `linear-gradient(to right, var(--primary)20, var(--primary)00)`,
                  color: 'var(--primary)'
                }}
              >
                Full-Stack Developer
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span
                style={{
                  background: 'var(--gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Sharad Chandel
              </span>
            </h1>

            <p
              className="text-xl leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              A <span style={{ color: 'var(--highlight)' }}>passionate problem solver</span> and
              <span style={{ color: 'var(--secondary)' }}> tech enthusiast</span> crafting
              scalable web applications with modern technologies.
            </p>

            <Stats />

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-70}
                className="cursor-pointer flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-transform hover:scale-105"
                style={{
                  background: 'var(--gradient)',
                  color: "#ffffff"
                }}
                aria-label="View my projects"
              >
                View My Work <FaArrowRight size={16} />
              </Link>

              <a
                href="/Sharad_2211981360_FullStack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 px-8 py-3 rounded-full font-medium border-2 transition-transform hover:scale-105"
                style={{
                  borderColor: 'var(--secondary)',
                  color: 'var(--secondary)',
                  background: 'var(--secondary)10'
                }}
                aria-label="View resume in new tab"
              >
                <FaExternalLinkAlt size={16} /> View Resume
              </a>

              {/* Download CV Button */}
              <a
                href="/Sharad_2211981360_FullStack_Resume.pdf"
                download="Sharad_Chandel_Resume.pdf"
                className="cursor-pointer flex items-center gap-2 px-8 py-3 rounded-full font-medium border-2 transition-transform hover:scale-105"
                style={{
                  borderColor: 'var(--primary)',
                  color: 'var(--primary)',
                  background: 'var(--primary)10'
                }}
                aria-label="Download resume"
              >
                <FaDownload size={16} /> Download Resume
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div
              className="relative"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                padding: "5px",
                background: 'var(--gradient)',
                boxShadow: 'var(--shadow)',
                transform: "perspective(1000px) rotateY(10deg)"
              }}
            >
              <img
                src={profilePic}
                alt="Sharad Chandel"
                className="rounded-[15px] w-64 h-64 md:w-80 md:h-80 object-cover"
                loading="eager"
                fetchPriority="high"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6"
        style={{ backgroundColor: 'var(--background-secondary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block"
              style={{
                background: `linear-gradient(to right, var(--primary)20, var(--primary)00)`,
                color: 'var(--primary)'
              }}
            >
              ABOUT ME
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              Who I Am
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Get to know me beyond the code
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src={codingIllustration}
                alt="Coding illustration"
                className="w-full max-w-md mx-auto"
                loading="lazy"
              />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--secondary)' }}>
                A Bit About Myself
              </h3>

              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  I'm a Computer Science student passionate about building web applications that solve real-world problems.
                  My journey in programming started when I was 16, and since then I've been constantly learning and
                  expanding my skill set.
                </p>

                <p>
                  What drives me is the challenge of turning complex problems into elegant solutions. I believe in writing
                  clean, maintainable code and following best practices to create scalable applications.
                </p>

                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open source, or
                  mentoring fellow developers. I'm always excited to collaborate on interesting projects and learn
                  from others in the field.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>
                  My Development Approach:
                </h4>
                <ul className="list-disc list-inside ml-4 space-y-2" style={{ color: 'var(--text-secondary)' }}>
                  <li>User-centric design and development</li>
                  <li>Performance optimization from the start</li>
                  <li>Clean, modular, and documented code</li>
                  <li>Continuous learning and improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block"
              style={{
                background: `linear-gradient(to right, var(--primary)20, var(--primary)00)`,
                color: 'var(--primary)'
              }}
            >
              MY TOOLBOX
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              Skills & Technologies
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              The tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillGroups).map(([category, skills], index) => (
              <SkillCategory key={index} category={category} skills={skills} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-6"
        style={{ backgroundColor: 'var(--background-secondary)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block"
              style={{
                background: `linear-gradient(to right, var(--primary)20, var(--primary)00)`,
                color: 'var(--primary)'
              }}
            >
              JOURNEY
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              Education & Experience
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              My academic and professional journey so far
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div
              className="absolute left-0 md:left-1/2 top-0 h-full w-[2px] md:transform md:-translate-x-1/2"
              style={{ backgroundColor: 'var(--primary)' }}
            ></div>

            {/* Timeline items */}
            <TimelineItem
              date="2022 - Present"
              title="Bachelor of Engineering in Computer Science"
              subtitle="Higher Education"
              description="Chitkara University, Himachal Pradesh"
              points={[
                "Focused on Data Structures & Algorithms",
                "Good Practical experience in Web Development",
                "Cleared Multiple Hackathons Rounds"
              ]}
              logo={chitkaraLogo}
              isFirst
            />

            <TimelineItem
              date="2022"
              title="Senior Secondary (XII)"
              subtitle="School Education"
              description="DAV Public Sr. Sec School, Parwanoo (CBSE)"
              points={[
                "Specialized in Computer Science",
                "Excellent score in Computer Science subject",
                "Made multiple games like snakegame and flappybird via python"
              ]}
              logo={schoolLogo}
            />

            <TimelineItem
              date="2023 - Present"
              title="Freelance Web Developer"
              subtitle="Professional Experience"
              points={[
                "Built and deployed 5+ web applications for clients",
                "Received client praise for clean UI/UX",
                "Optimized applications for performance and SEO",
                "Technologies used: React, Express, Node.js, MongoDB"
              ]}
              isLast
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block"
              style={{
                background: `linear-gradient(to right, var(--primary)20, var(--primary)00)`,
                color: 'var(--primary)'
              }}
            >
              MY WORK
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              Featured Projects
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              A selection of my recent work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/SharadJ19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-transform hover:scale-105"
              style={{
                background: 'var(--gradient)',
                color: "#ffffff"
              }}
              aria-label="View all projects on GitHub"
            >
              View All Projects <FaGithub size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block"
              style={{
                background: `linear-gradient(to right, var(--primary)20, var(--primary)00)`,
                color: 'var(--primary)'
              }}
            >
              LET'S CONNECT
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                background: 'var(--gradient)',
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}
            >
              Get In Touch
            </h2>
            <p
              className="max-w-2xl mx-auto text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              I'm currently open to new opportunities and collaborations.
              Let's work together to bring your ideas to life!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="mailto:sharadchandel2005@gmail.com"
              className="block p-8 rounded-2xl text-center transition-transform hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--card)',
                boxShadow: 'var(--shadow)',
              }}
              aria-label="Send me an email"
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--primary)15' }}
              >
                <FaEnvelope size={24} style={{ color: 'var(--primary)' }} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p style={{ color: 'var(--primary)' }} className="text-sm">
                sharadchandel2005@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/sharadchandel2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl text-center transition-transform hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--card)',
                boxShadow: 'var(--shadow)',
              }}
              aria-label="Connect on LinkedIn"
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--secondary)15' }}
              >
                <FaLinkedin size={24} style={{ color: 'var(--secondary)' }} />
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p style={{ color: 'var(--secondary)' }} className="text-sm">
                linkedin.com/in/sharadchandel2005
              </p>
            </a>

            <a
              href="https://github.com/SharadJ19"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl text-center transition-transform hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--card)',
                boxShadow: 'var(--shadow)',
              }}
              aria-label="View my GitHub profile"
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                style={{ background: 'var(--accent)15' }}
              >
                <FaGithub size={24} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p style={{ color: 'var(--accent)' }} className="text-sm">
                github.com/SharadJ19
              </p>
            </a>
          </div>

          {/* Contact CTA */}
          <div
            className="mt-16 p-8 rounded-2xl"
            style={{
              backgroundColor: 'var(--card)',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)'
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--primary)' }}>
              Send a Direct Message
            </h3>
            <p
              className="text-center mb-6 max-w-lg mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Prefer a contact form? Fill this out and I'll respond within 24 hours.
            </p>

            <ContactForm />
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: 'var(--nav)',
          borderTopColor: 'var(--border)',
        }}
        className="text-center p-8 border-t"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  background: 'var(--gradient)',
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Sharad Chandel
              </h3>
              <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
                Full-Stack Developer | Software Engineer
              </p>
            </div>

            <SocialLinks className="mt-4 sm:mt-0" />
          </div>

          <div
            className="text-sm mt-6 pt-6 border-t"
            style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
          >
            <p className="flex items-center justify-center gap-2">
              Made with <span className="text-red-500">❤️</span> by Sharad Chandel | © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;