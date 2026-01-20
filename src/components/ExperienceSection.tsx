"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import portfolioData from "@/data/portfolio.json";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Career Journey</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - positioned for mobile on left, centered on md+ */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-primary to-accent md:-translate-x-1/2 ring-2 sm:ring-4 ring-background z-10 top-1" />

                {/* Content */}
                <div className={`ml-10 sm:ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12 md:text-right" : "md:pl-8 lg:pl-12"}`}>
                  <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4 sm:p-5 lg:p-6">
                      {/* Duration badge */}
                      <Badge className="mb-2 sm:mb-3 bg-primary/20 text-primary border-none text-[10px] sm:text-xs">
                        {exp.duration}
                      </Badge>

                      {/* Role & Company */}
                      <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-0.5 sm:mb-1">{exp.role}</h4>
                      <p className="text-primary text-sm sm:text-base mb-3 sm:mb-4">{exp.company}</p>

                      {/* Description */}
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{exp.description}</p>

                      {/* Highlights */}
                      <ul className={`space-y-1.5 sm:space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className={`text-xs sm:text-sm text-muted-foreground flex items-start gap-1.5 sm:gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                            <span className={`text-accent mt-0.5 shrink-0 ${index % 2 === 0 ? "md:order-2" : ""}`}>
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className={index % 2 === 0 ? "md:text-right" : ""}>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="text-center mb-8 sm:mb-10">
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">Leadership & Extracurricular</h4>
            <p className="text-sm text-muted-foreground">Building communities and driving initiatives</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioData.leadership.map((item) => (
              <Card key={item.organization} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all">
                <CardContent className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <Badge className="mb-2 bg-primary/20 text-primary border-none text-[10px] sm:text-xs">
                        {item.role}
                      </Badge>
                      <h5 className="font-semibold text-foreground text-sm sm:text-base mb-1">{item.organization}</h5>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.location} • {item.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-1.5">
                        <span className="text-accent mt-0.5 shrink-0">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
