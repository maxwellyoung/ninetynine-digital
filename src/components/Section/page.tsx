import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center p-10 relative ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
