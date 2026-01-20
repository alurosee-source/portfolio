"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import portfolioData from "@/data/portfolio.json";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section header */}
        <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">{t.contact.sectionTitle}</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          {t.contact.heading} <span className="text-gradient">{t.contact.headingHighlight}</span>
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-8">
          {t.contact.description}
        </p>

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12"
          >
            <a href={`mailto:${portfolioData.personal.email}`}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.contact.emailMe}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-border/50 hover:border-primary/50 px-8 h-12"
          >
            <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {t.contact.linkedin}
            </a>
          </Button>
        </div>

        {/* Availability status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/50">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm text-muted-foreground">{t.contact.availableForProjects}</span>
        </div>
      </div>
    </section>
  );
}
