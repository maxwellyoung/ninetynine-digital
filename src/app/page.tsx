"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Link from "next/link";
import "./globals.css";

const Welcome = () => {
  return (
    <div className="font-sans overflow-x-hidden">
      <motion.div
        className="min-h-screen bg-gradient-animated flex flex-col justify-center items-center p-10 relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-2 relative z-10">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <motion.div
              className="w-96 h-96 bg-indigo-400 rounded-full blur-xl opacity-40"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </div>
          <motion.h1
            className="text-5xl font-bold text-white relative"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ninetynine digital
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 relative mt-2"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            made with 🩵 in auckland, new zealand.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="min-h-screen bg-gradient-animated flex flex-col justify-center items-center p-10 relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-4 relative z-10 ">
          <motion.h2
            className="text-4xl font-bold text-white"
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
              <Link href="https://studentview.app" legacyBehavior>
                StudentView
              </Link>
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The ultimate companion app for students, offering budgeting,
            note-taking, and mental well-being tools.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 bg-opacity-50 backdrop-blur-md shadow-inner rounded-lg"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">Budgeting</CardTitle>
                <CardDescription className="text-gray-300">
                  Manage your finances effortlessly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Track your spending, set budgets, and save money easily.
                </p>
              </CardContent>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 bg-opacity-50 backdrop-blur-md shadow-inner rounded-lg"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Note-Taking
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Stay organized with your study notes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Capture, organize, and access your notes anytime, anywhere.
                </p>
              </CardContent>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 bg-opacity-50 backdrop-blur-md shadow-inner rounded-lg"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Mental Well-Being
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Take care of your mental health.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Access resources and tools to manage stress and stay healthy.
                </p>
              </CardContent>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="min-h-screen bg-gradient-animated flex flex-col justify-center items-center p-10 relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center space-y-4 relative z-10">
          <h2 className="text-4xl font-bold text-white">Our Values</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 bg-opacity-50 backdrop-blur-md shadow-inner rounded-lg"
            >
              <CardHeader>
                <div className="text-4xl mb-4">🔒</div>
                <CardTitle className="text-2xl text-white">Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We prioritise the security of our users&apos; data, ensuring
                  that their information is protected at all times.
                </p>
              </CardContent>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 bg-opacity-50 backdrop-blur-md shadow-inner rounded-lg"
            >
              <CardHeader>
                <div className="text-4xl mb-4">🔍</div>
                <CardTitle className="text-2xl text-white">Detail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Attention to detail is in everything we do, from design to
                  implementation, ensuring a flawless user experience.
                </p>
              </CardContent>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 bg-opacity-50 backdrop-blur-md shadow-inner rounded-lg"
            >
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle className="text-2xl text-white">
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We constantly seek new ways to solve problems and enhance user
                  experiences with cutting-edge solutions.
                </p>
              </CardContent>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-600 bg-opacity-50 backdrop-blur-md shadow-inner rounded-lg"
            >
              <CardHeader>
                <div className="text-4xl mb-4">👥</div>
                <CardTitle className="text-2xl text-white">
                  User-Centric
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Our users are at the heart of our design and development
                  process, guiding us to create what truly matters to them.
                </p>
              </CardContent>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.footer
        className="text-center space-y-2 relative z-10 h-4 text-white bg-gradient-animated flex flex-col justify-center items-center p-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-md relative mt-0">
          by{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <span className="hover:underline">Maxwell Young</span>
            </HoverCardTrigger>
            <HoverCardContent className="backdrop-blur-md shadow-inner rounded-lg p-4 bg-opacity-50">
              Founder of <span className="font-bold">ninetynine digital</span>
            </HoverCardContent>
          </HoverCard>
        </p>
      </motion.footer>
    </div>
  );
};

export default Welcome;
