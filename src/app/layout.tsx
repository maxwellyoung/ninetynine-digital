import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ninetynine digital",
  description: "made with 🩵 in auckland, new zealand.",
  icons: {
    icon: "/tempiconninetynine.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tempiconninetynine.webp" />
      </head>
      <body className="bg-background text-text font-sans">{children}</body>
    </html>
  );
}
