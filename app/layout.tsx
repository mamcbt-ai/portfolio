import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HODOPHILE | Full-Stack Developer",
    template: "%s | HODOPHILE",
  },
  description:
    "Full-stack developer building modern web apps, backend systems, and AI-powered products for startups and businesses.",
  metadataBase: new URL("https://hodophile.dev"),
  openGraph: {
    title: "HODOPHILE | Full-Stack Developer",
    description:
      "Full-stack developer building modern web apps, backend systems, and AI-powered products for startups and businesses.",
    url: "https://hodophile.dev",
    siteName: "HODOPHILE Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HODOPHILE | Full-Stack Developer",
    description:
      "Full-stack developer building modern web apps, backend systems, and AI-powered products for startups and businesses.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-950">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur">
            <div className="container-max flex items-center justify-between py-4">
              <Link
                href="/"
                className="text-sm font-bold tracking-[0.15em] text-white uppercase"
              >
                HODOPHILE
              </Link>
              <Navigation />
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-zinc-800">
            <div className="container-max flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="font-medium text-white">
                  HODOPHILE
                </p>
                <p className="max-w-xl text-sm leading-7 text-zinc-400">
                  Full-stack developer building practical web apps, backend
                  systems, and AI-powered products with a focus on clarity,
                  usefulness, and execution.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
                <Link href="/projects" className="transition hover:text-white">
                  Projects
                </Link>
                <a
                  href="mailto:mamcbt@gmail.com"
                  className="transition hover:text-white"
                >
                  Email
                </a>
                <a
                  href="https://github.com/azar-asr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammed-asarudheen-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="border-t border-zinc-800">
              <div className="container-max py-4 text-xs text-zinc-500">
                © {new Date().getFullYear()} HODOPHILE. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
