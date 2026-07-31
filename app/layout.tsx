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
          {/* Header with enhanced styling */}
          <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-gradient-to-b from-zinc-950/95 to-zinc-950/80 backdrop-blur-xl">
            <div className="container-max flex items-center justify-between py-4">
              <Link
                href="/"
                className="text-sm font-bold tracking-[0.15em] text-white uppercase hover:text-blue-400 transition-colors duration-300"
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

          {/* Enhanced Footer */}
          <footer className="relative border-t border-zinc-800/50 bg-gradient-to-t from-zinc-900/50 to-transparent overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>
            <div className="container-max flex flex-col gap-12 py-16 md:flex-row md:items-start md:justify-between">
              <div className="space-y-4 max-w-sm">
                <p className="text-lg font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  HODOPHILE
                </p>
                <p className="text-sm leading-7 text-zinc-400">
                  Full-stack developer building practical web apps, backend
                  systems, and AI-powered products with a focus on clarity,
                  usefulness, and execution.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Navigation</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="text-sm text-zinc-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block">
                        → Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects" className="text-sm text-zinc-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block">
                        → Projects
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Connect</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="mailto:mamcbt@gmail.com"
                        className="text-sm text-zinc-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                      >
                        ✉️ Email
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/mamcbt-ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                      >
                        💻 GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/muhammed-asarudheen-m/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-400 transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                      >
                        💼 LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-zinc-800/50">
              <div className="container-max py-6 text-xs text-zinc-500 flex items-center justify-between">
                <p>© {new Date().getFullYear()} HODOPHILE. All rights reserved.</p>
                <p className="hidden sm:block">Crafted with care • Built on Next.js</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
