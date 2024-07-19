import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ninetynine digital",
  description: "made with 🩵 in auckland, new zealand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-sans">{children}</body>
    </html>
  );
}
