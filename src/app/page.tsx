import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import "./globals.css";

const Welcome = () => {
  return (
    <div className="font-sans">
      <div className="min-h-screen bg-gradient-animated flex flex-col justify-center items-center p-10 relative w-screen">
        <div className="text-center space-y-4 relative z-10">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-96 h-96 bg-blue-400 rounded-full blur-xl opacity-40 animate-twinkle"></div>
          </div>
          <h1 className="text-5xl font-bold text-white relative">
            ninetynine digital
          </h1>
          <p className="text-xl text-gray-200 relative">
            made with 🩵 in auckland, new zealand.
          </p>
          <p className="text-xl text-gray-200 relative">
            by{" "}
            <Link
              href="https://dev.maxwellyoung.info"
              className="hover:underline"
            >
              Maxwell Young
            </Link>
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-animated flex flex-col justify-center items-center p-10 relative w-screen">
        <div className="text-center space-y-4 relative z-10">
          <h2 className="text-4xl font-bold text-white">
            Introducing StudentView
          </h2>
          <p className="text-xl text-gray-200">
            The ultimate companion app for students, offering budgeting,
            note-taking, and mental well-being tools.
          </p>
          <p className="text-xl text-muted-foreground italic">Coming Soon</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
            <Card className="bg-neutral-900 bg-opacity-70 backdrop-blur-md shadow-lg rounded-lg">
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
            </Card>
            <Card className="bg-neutral-900 bg-opacity-70 backdrop-blur-md shadow-lg rounded-lg">
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
            </Card>
            <Card className="bg-neutral-900 bg-opacity-70 backdrop-blur-md shadow-lg rounded-lg">
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
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
