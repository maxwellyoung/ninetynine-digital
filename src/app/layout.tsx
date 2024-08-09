import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ninetynine digital - Innovative Digital Solutions",
  description:
    "ninetynine digital is a forward-thinking digital agency based in Auckland, New Zealand, delivering secure, detailed, and user-centric digital experiences.",
  keywords:
    "digital agency, web development, app development, ninetynine digital, Auckland, New Zealand, innovative design, user-centric design, secure development, creative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />

        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="ninetynine digital is a forward-thinking digital agency based in Auckland, New Zealand, delivering secure, detailed, and user-centric digital experiences."
        />
        <meta
          name="keywords"
          content="digital agency, web development, app development, ninetynine digital, Auckland, New Zealand, innovative design, user-centric design, secure development, creative solutions"
        />
        <meta name="author" content="ninetynine digital" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="ninetynine digital - Innovative Digital Solutions"
        />
        <meta
          property="og:description"
          content="ninetynine digital is a forward-thinking digital agency based in Auckland, New Zealand, delivering secure, detailed, and user-centric digital experiences."
        />
        <meta property="og:image" content="/ninetynine-digital-preview.jpg" />
        <meta property="og:url" content="https://www.ninetynine.digital" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta
          name="twitter:title"
          content="ninetynine digital - Innovative Digital Solutions"
        />
        <meta
          name="twitter:description"
          content="ninetynine digital is a forward-thinking digital agency based in Auckland, New Zealand, delivering secure, detailed, and user-centric digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://www.ninetynine.digital/path/to/ninetynine-digital-preview.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.ninetynine.digital",
            name: "ninetynine digital",
            description:
              "ninetynine digital is a forward-thinking digital agency based in Auckland, New Zealand, delivering secure, detailed, and user-centric digital experiences.",
            logo: "https://www.ninetynine.digital/path/to/logo.jpg",
            foundingDate: "2024",
            founders: [
              {
                "@type": "Person",
                name: "Maxwell Young",
              },
            ],
            location: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Auckland",
                addressCountry: "New Zealand",
              },
            },
          })}
        </script>
      </head>
      <body className="bg-background text-text font-sans">{children}</body>
    </html>
  );
}
