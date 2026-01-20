"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import portfolioData from "@/data/portfolio.json";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[95dvh] flex items-center justify-center pt-14 sm:pt-16 pb-20 sm:pb-24">
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        {/* Profile image */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-lg opacity-50" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30">
            <Image
              src="/profile.jpg"
              alt="Aliya Tynybayeva"
              fill
              className="object-cover object-[center_30%]"
              priority
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 sm:mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs sm:text-sm text-primary">{t.hero.available}</span>
        </div>

        {/* Name */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight text-foreground">
          {portfolioData.personal.name}
        </h1>

        {/* Title */}
        <h2 className="text-base sm:text-xl md:text-2xl text-muted-foreground font-light mb-4 sm:mb-6">
          {t.hero.title}
        </h2>

        {/* Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10">
          {t.hero.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base"
          >
            <a href="#projects">{t.hero.viewProjects}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base"
          >
            <a href="#contact">{t.hero.contactMe}</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#projects" className="flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest">{t.hero.scroll}</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
