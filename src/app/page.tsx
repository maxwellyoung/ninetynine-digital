"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

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

  const variants = {
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

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-indigo-500 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <div className="max-w-2xl">
        <motion.div
          className="mb-8"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="w-6 h-6 bg-indigo-500 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
        <div className="space-y-6 font-mono text-sm">
          {[
            "It's time to bring your ideas to life.",
            "Ninetynine Digital partners with founders,\nstartups, and business owners to\nlevel up your brand and web presence.",
            "Projects take 1-2 months.",
            "$2,000/month.",
            "Currently building a student companion app, ",
            "Start a project ",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {text.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i !== text.split("\n").length - 1 && <br />}
                </span>
              ))}
              {index === 4 && (
                <motion.span
                  className="text-indigo-500 hover:underline cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://studentview.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    StudentView
                  </Link>
                  .
                </motion.span>
              )}
              {index === 5 && (
                <>
                  <motion.span
                    className="text-indigo-500 hover:underline cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="mailto:maxtheyoung@gmail.com">here</Link>
                  </motion.span>
                  .
                </>
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
