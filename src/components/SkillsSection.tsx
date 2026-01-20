"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import portfolioData from "@/data/portfolio.json";

function SkillBar({ name, proficiency }: { name: string; proficiency: number }) {
  return (
    <div className="space-y-1.5 sm:space-y-2">
      <div className="flex justify-between text-xs sm:text-sm">
        <span className="text-foreground truncate mr-2">{name}</span>
        <span className="text-muted-foreground shrink-0">{proficiency}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: { name: string; level: string; years: number; description: string } }) {
  return (
    <Card className="bg-secondary/30 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
            {skill.name}
          </h4>
          <Badge variant="outline" className="border-primary/50 text-primary text-[10px] sm:text-xs shrink-0">
            {skill.level}
          </Badge>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 line-clamp-2">{skill.description}</p>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {skill.years} years experience
        </div>
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  const [activeToolTab, setActiveToolTab] = useState("design");
  const toolCategories = Object.keys(portfolioData.skills.tools);

  const tabLabels: Record<string, string> = {
    design: "Design",
    adobe: "Adobe",
    marketing: "Marketing",
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Skills & Expertise</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            My <span className="text-gradient">Technical Arsenal</span>
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            A comprehensive toolkit spanning design, research, and cutting-edge AI technologies
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4 sm:mt-6" />
        </div>

        {/* Design & Research Skills */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Design Skills */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </span>
              <span className="text-sm sm:text-base">Design Expertise</span>
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {portfolioData.skills.design.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Research Skills */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </span>
              <span className="text-sm sm:text-base">Research Expertise</span>
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {portfolioData.skills.research.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader className="pb-2 sm:pb-4">
            <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-center">
              Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6">
            <Tabs value={activeToolTab} onValueChange={setActiveToolTab} className="w-full">
              {/* Scrollable tabs on mobile */}
              <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
                <TabsList className="w-max sm:w-full flex gap-1 sm:gap-2 bg-transparent h-auto p-1 sm:p-2 sm:justify-center sm:flex-wrap">
                  {toolCategories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full whitespace-nowrap"
                    >
                      {tabLabels[category] || category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {toolCategories.map((category) => (
                <TabsContent key={category} value={category} className="mt-4 sm:mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                    {portfolioData.skills.tools[category as keyof typeof portfolioData.skills.tools].map((tool) => (
                      <div key={tool.name} className="p-3 sm:p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all">
                        <SkillBar name={tool.name} proficiency={tool.proficiency} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Languages */}
        <div className="mt-10 sm:mt-12 lg:mt-16">
          <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 text-center">Languages</h4>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {portfolioData.languages.map((lang) => (
              <Badge
                key={lang.name}
                variant="outline"
                className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border-border/50 bg-secondary/30 hover:border-primary/30 transition-colors"
              >
                <span className="text-foreground">{lang.name}</span>
                <span className="text-muted-foreground ml-1 sm:ml-2">({lang.level})</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
