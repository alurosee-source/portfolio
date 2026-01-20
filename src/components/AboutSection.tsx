"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import portfolioData from "@/data/portfolio.json";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">About Me</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Designing the <span className="text-gradient">Future</span>
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image/Avatar side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="absolute inset-0 border-gradient rounded-2xl" />

              {/* Profile image */}
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Aliya Tynybayeva"
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs sm:text-sm animate-float">
                Product Designer
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/20 border border-accent/50 text-accent text-xs sm:text-sm animate-float" style={{ animationDelay: "1s" }}>
                UX Researcher
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            {/* Strengths & Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Strengths */}
              <Card className="bg-secondary/30 border-border/50">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Strengths</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {portfolioData.strengths.map((strength) => (
                      <span
                        key={strength}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm border border-primary/20"
                      >
                        {strength}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="bg-secondary/30 border-border/50">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">Interests</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {portfolioData.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm border border-accent/20"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education & Certifications */}
            <div className="pt-4 sm:pt-6 border-t border-border/50">
              <h4 className="text-xs sm:text-sm uppercase tracking-wider text-primary mb-3 sm:mb-4">Education</h4>
              <div className="space-y-2 sm:space-y-3">
                {portfolioData.education.map((edu) => (
                  <div key={edu.degree} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 sm:gap-2">
                    <div className="min-w-0">
                      <p className="font-medium text-foreground text-sm sm:text-base truncate">{edu.degree}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{edu.school}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground shrink-0">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
