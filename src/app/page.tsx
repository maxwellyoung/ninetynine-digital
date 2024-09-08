"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  link: string;
  color: string;
};

const projects: Project[] = [
  {
    title: "StudentView",
    description:
      "Minimalist task management with a focus on user flow and productivity.",
    link: "https://studentview.app",
    color: "bg-[#FF6B6B]",
  },
  {
    title: "CineSync",
    description:
      "Discover your next favorite movie with CineSync's AI-powered recommendation engine.",
    link: "https://beta-brand.com",
    color: "bg-[#4ECDC4]",
  },
  {
    title: "mindful App",
    description:
      "Mindfulness app with an intuitive interface and seamless user experience.",
    link: "https://gamma-zeta-two.vercel.app",
    color: "bg-[#45B7D1]",
  },
  {
    title: "Resume Forge",
    description:
      "Innovative resume builder with AI-powered suggestions and modern templates.",
    link: "https://resume-forge-ecru.vercel.app/",
    color: "bg-[#F7B731]",
  },
];

const contentSections = [
  "It's time to bring your ideas to life.",
  "Ninetynine Digital partners with founders,\nstartups, and business owners to\nlevel up your brand and web presence.",
  "Projects take 1-2 months.",
  "Start a project here.",
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`${project.color} p-10 rounded-lg shadow-lg transition-all duration-300 transform`}
      style={{
        boxShadow: isHovered
          ? "0 10px 30px rgba(0,0,0,0.2)"
          : "0 4px 6px rgba(0,0,0,0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.h3
        className="font-mono text-xl mb-4"
        animate={{ x: isHovered ? 10 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {project.title}
      </motion.h3>
      <p className="text-sm mb-6 leading-relaxed">{project.description}</p>
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-black font-mono text-sm group"
      >
        View Project
        <motion.span
          className="ml-2"
          animate={{ x: isHovered ? 5 : 0, rotate: isHovered ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <ExternalLink className="w-4 h-4" />
        </motion.span>
      </Link>
      <motion.div
        className="w-full h-1 bg-black mt-4 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const CustomCursor = ({
  mousePosition,
  cursorVariant,
}: {
  mousePosition: { x: number; y: number };
  cursorVariant: string;
}) => {
  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-indigo-500 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

const ContentSection = ({
  text,
  index,
  activeSection,
  setActiveSection,
  textEnter,
  textLeave,
}: {
  text: string;
  index: number;
  activeSection: number;
  setActiveSection: (index: number) => void;
  textEnter: () => void;
  textLeave: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: activeSection === index ? 1 : 0.3, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => {
        textEnter();
        setActiveSection(index);
      }}
      onMouseLeave={textLeave}
      className="relative cursor-pointer px-4"
    >
      <p className="leading-relaxed text-xl">
        {index === 3 ? (
          <>
            Start a project{" "}
            <motion.span
              className="text-indigo-500 hover:underline inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="mailto:maxtheyoung@gmail.com">here</Link>
            </motion.span>
            .
          </>
        ) : (
          text.split("\n").map((line, i) => (
            <span key={i} className="block mb-2">
              {line}
            </span>
          ))
        )}
      </p>
      {activeSection === index && (
        <motion.div
          className="absolute -left-8 top-1/2 transform -translate-y-1/2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-6 h-6 text-indigo-500" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-start justify-center p-8 md:p-24 overflow-hidden">
      <CustomCursor
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
      />
      <div className="max-w-5xl w-full">
        <motion.div
          className="mb-32 flex justify-start"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="w-8 h-8 bg-indigo-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
        <div className="space-y-32 font-mono text-sm mb-48">
          {contentSections.map((text, index) => (
            <ContentSection
              key={index}
              text={text}
              index={index}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              textEnter={textEnter}
              textLeave={textLeave}
            />
          ))}
        </div>
        <motion.h2
          className="text-4xl font-mono mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Past Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
