import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Churnalyzer - Learn from Business Failures",
  description:
    "Discover the untold stories behind corporate collapses, startup failures, and strategic missteps. Turn other companies' mistakes into your competitive advantage.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Churnalyzer" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Analytics />

        <Footer />
      </body>
    </html>
  );
}
