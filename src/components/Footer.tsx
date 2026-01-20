"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import portfolioData from "@/data/portfolio.json";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-6 sm:py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs sm:text-sm">AT</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {currentYear} {portfolioData.personal.name}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</a>
            <a href="#process" className="hover:text-primary transition-colors">{t.nav.process}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`https://${portfolioData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              aria-label="Email"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href={`tel:${portfolioData.personal.phone}`}
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              aria-label="Phone"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/30 text-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            {t.footer.designedBy} {portfolioData.personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
