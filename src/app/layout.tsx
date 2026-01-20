import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aliya Tynybayeva | Senior UX/UI Designer",
  description: "Senior UX/UI Designer specializing in AI products, design systems, and human-centered digital experiences. 8+ years of experience crafting intuitive interfaces for fintech, healthcare, and enterprise applications.",
  keywords: ["UX Designer", "UI Designer", "Product Designer", "AI Products", "Design Systems", "Figma", "User Research"],
  authors: [{ name: "Aliya Tynybayeva" }],
  openGraph: {
    title: "Aliya Tynybayeva | Senior UX/UI Designer",
    description: "Crafting Human-Centered Digital Experiences with AI Innovation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
