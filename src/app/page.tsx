"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Twitter } from "lucide-react";

// Separate components for better code organization
const CardWithMotion = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className="group relative bg-white dark:bg-[#1A1A1A] border dark:border-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="absolute -top-8 right-8 transform rotate-12">
        <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[#f2f2f2] dark:bg-[#242424] rounded-full shadow-md text-4xl md:text-5xl">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-[#171717] dark:text-white mt-12 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`min-h-screen bg-gradient-animated flex flex-col justify-center items-center p-10 relative w-full ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
  >
    {children}
  </motion.div>
);

export default function Welcome() {
  const studentViewFeatures = [
    {
      title: "Budgeting",
      description: "Manage your finances effortlessly.",
      icon: "💰",
    },
    {
      title: "Note-Taking",
      description: "Stay organized with your study notes.",
      icon: "📝",
    },
    {
      title: "Mental Well-Being",
      description: "Take care of your mental health.",
      icon: "🧠",
    },
  ];

  const values = [
    {
      title: "Secure",
      description:
        "We prioritize the security of our users' data, ensuring that their information is protected at all times.",
      icon: "🔒",
    },
    {
      title: "Detail",
      description:
        "Attention to detail is in everything we do, from design to implementation, ensuring a flawless user experience.",
      icon: "🔍",
    },
    {
      title: "Innovation",
      description:
        "We constantly seek new ways to solve problems and enhance user experiences with cutting-edge solutions.",
      icon: "💡",
    },
    {
      title: "User-Centric",
      description:
        "Our users are at the heart of our design and development process, guiding us to create what truly matters to them.",
      icon: "👥",
    },
  ];

  return (
    <div className="font-sans overflow-x-hidden">
      <Section>
        <div className="text-center space-y-2 relative z-10 max-w-6xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <motion.div
              className="w-96 h-96 bg-indigo-400 rounded-full blur-xl opacity-40"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white relative"
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            ninetynine digital
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 relative mt-2"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            made with <span aria-label="love">🩵</span> in auckland, new zealand.
          </motion.p>
        </div>
      </Section>

      <Section>
        <div className="text-center space-y-4 relative z-10 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Introducing{" "}
            <motion.span
              className="underline"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="https://studentview.app">StudentView</Link>
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-200"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The ultimate companion app for students, offering budgeting,
            note-taking, and mental well-being tools.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {studentViewFeatures.map((feature, index) => (
              <CardWithMotion key={index} {...feature} />
            ))}
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="text-center space-y-4 relative z-10 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Core Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-5 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {values.map((value, index) => (
              <CardWithMotion key={index} {...value} />
            ))}
          </motion.div>
        </div>
      </Section>

      <motion.footer
        className="text-center space-y-4 relative z-10 text-white bg-gradient-animated grainy-bg flex flex-col justify-center items-center py-6 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-lg relative mt-0">
            by{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="hover:underline cursor-pointer">
                  Maxwell Young
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="backdrop-blur-lg bg-slate-600 shadow-inner rounded-lg p-4 bg-opacity-50">
                Founder of <span className="font-bold">ninetynine digital</span>
              </HoverCardContent>
            </HoverCard>
          </p>
          <p className="text-lg mt-4 flex items-center justify-center">
            Follow us on{" "}
            <a
              href="https://x.com/ninetyninedigi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center ml-2"
            >
              <Twitter className="w-5 h-5 mr-1" />
              Twitter
            </a>
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
