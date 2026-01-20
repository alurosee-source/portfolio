"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import portfolioData from "@/data/portfolio.json";

type Project = typeof portfolioData.projects[0];

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="fixed inset-0 bg-black/90" />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[101] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="relative z-[101] max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function MetricCard({ label, before, after, change, beforeLabel, afterLabel }: { label: string; before?: string; after?: string; change?: string; value?: string; beforeLabel?: string; afterLabel?: string }) {
  return (
    <div className="p-3 sm:p-4 rounded-lg bg-secondary/30 border border-border/50">
      <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1.5 sm:mb-2">{label}</p>
      {before && after ? (
        <div className="space-y-0.5 sm:space-y-1">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <span className="text-muted-foreground">{beforeLabel || "Before"}:</span>
            <span className="text-foreground">{before}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <span className="text-muted-foreground">{afterLabel || "After"}:</span>
            <span className="text-primary font-semibold">{after}</span>
          </div>
          {change && (
            <div className="text-[10px] sm:text-xs text-green-400 font-medium mt-0.5 sm:mt-1">{change}</div>
          )}
        </div>
      ) : (
        <p className="text-base sm:text-xl font-bold text-gradient">{after || change}</p>
      )}
    </div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const { t } = useLanguage();
  const projectId = project.id as keyof typeof t.projectContent;
  const localizedContent = t.projectContent[projectId];
  const title = localizedContent?.title || project.title;
  const overview = localizedContent?.overview || project.overview;

  return (
    <Card
      className="bg-card/50 border-border/50 hover:border-primary/50 transition-all cursor-pointer group overflow-hidden touch-manipulation"
      onClick={onClick}
    >
      {/* Project thumbnail */}
      <div className="relative h-36 sm:h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl sm:text-6xl font-bold text-gradient opacity-30 group-hover:opacity-50 transition-opacity">
              {title.split(" ").map(w => w[0]).join("").slice(0, 2)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} className="bg-primary/80 text-primary-foreground text-[10px] sm:text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <CardContent className="p-4 sm:p-6">
        <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5 sm:mb-2">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
          {overview}
        </p>
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
          <span className="truncate mr-2">{project.client}</span>
          <span className="shrink-0">{project.duration}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const { t } = useLanguage();

  // Localized content
  const projectId = project.id as keyof typeof t.projectContent;
  const loc = t.projectContent[projectId];
  const title = loc?.title || project.title;
  const overview = loc?.overview || project.overview;
  const challenge = loc?.challenge || project.challenge;
  const approach = loc?.approach || project.solution.approach;
  const userSegments = loc?.userSegments || ("userSegments" in project.research ? project.research.userSegments : null);
  const frictionPoints = loc?.frictionPoints || ("frictionPoints" in project.research ? project.research.frictionPoints : null);
  const methods = loc?.methods || project.research.methods;
  const personas = loc?.personas || project.research.personas;
  const keyFeatures = loc?.keyFeatures || project.solution.keyFeatures;

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start sm:items-center justify-center p-2 sm:p-4">
        <Card className="relative w-full max-w-5xl mx-auto bg-card border-border/50 shadow-2xl shadow-primary/10 my-2 sm:my-4">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="relative h-40 sm:h-52 md:h-64 bg-gradient-to-br from-primary/30 to-accent/30 overflow-hidden">
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl sm:text-7xl md:text-9xl font-bold text-gradient opacity-20">
                  {title.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6">
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} className="bg-primary/80 text-primary-foreground text-[10px] sm:text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
                <span>{project.client}</span>
                <span className="hidden sm:inline">&bull;</span>
                <span>{project.duration}</span>
                <span className="hidden sm:inline">&bull;</span>
                <span className="hidden sm:inline">{project.role}</span>
              </div>
              <p className="sm:hidden text-xs text-muted-foreground mt-1">{project.role}</p>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-3 sm:p-4 md:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Scrollable tabs on mobile */}
              <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
                <TabsList className="w-max sm:w-full flex gap-1 sm:gap-2 bg-transparent h-auto p-0 mb-4 sm:mb-6 sm:flex-wrap sm:justify-start">
                  {(["overview", "research", "solution", "metrics"] as const).map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full whitespace-nowrap"
                    >
                      {t.projects.tabs[tab]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">{t.projects.overview}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{overview}</p>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">{t.projects.challenge}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{challenge}</p>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">{t.projects.team}</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.team.map((member) => (
                      <Badge key={member} variant="outline" className="border-border/50 text-xs sm:text-sm">
                        {member}
                      </Badge>
                    ))}
                  </div>
                </div>
                {"testimonial" in project && project.testimonial ? (
                  <Card className="bg-secondary/30 border-border/50">
                    <CardContent className="p-4 sm:p-6">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary/50 mb-2 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-sm sm:text-lg text-foreground italic mb-3 sm:mb-4">{(project.testimonial as { quote: string }).quote}</p>
                      <div>
                        <p className="font-semibold text-foreground text-sm sm:text-base">{(project.testimonial as { author: string }).author}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{(project.testimonial as { role: string }).role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ) : null}
              </TabsContent>

              {/* Research Tab */}
              <TabsContent value="research" className="space-y-4 sm:space-y-6">
                {"processImage" in project.research && project.research.processImage && (
                  <div className="rounded-lg overflow-hidden border border-border/50 bg-secondary/20 h-64 sm:h-80 md:h-96">
                    <img
                      src={project.research.processImage as string}
                      alt="Research process"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}

                {userSegments && (
                  <>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">{t.projects.coreUserSegments}</h4>
                    <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                      <Card className="bg-secondary/30 border-border/50">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-primary font-semibold">{t.projects.whoPays}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{(userSegments as { whoPays: string }).whoPays}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-secondary/30 border-border/50">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-primary font-semibold">{t.projects.whoUses}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{(userSegments as { whoUses: string }).whoUses}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-secondary/30 border-border/50">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-primary font-semibold">{t.projects.whoSuffers}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{(userSegments as { whoSuffers: string }).whoSuffers}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}

                {frictionPoints && (
                  <>
                    <Separator className="bg-border/50" />
                    <h4 className="text-base sm:text-lg font-semibold text-primary">{t.projects.frictionPoints}</h4>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <Card className="bg-secondary/30 border-border/50 border-l-4 border-l-yellow-500">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <p className="text-xs sm:text-sm font-semibold text-foreground">{t.projects.onboarding}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{(frictionPoints as { onboarding: string }).onboarding}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-secondary/30 border-border/50 border-l-4 border-l-orange-500">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <p className="text-xs sm:text-sm font-semibold text-foreground">{t.projects.activation}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{(frictionPoints as { activation: string }).activation}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-secondary/30 border-border/50 border-l-4 border-l-red-500">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <p className="text-xs sm:text-sm font-semibold text-foreground">{t.projects.dropOff}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{(frictionPoints as { dropOff: string }).dropOff}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-secondary/30 border-border/50 border-l-4 border-l-purple-500">
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <p className="text-xs sm:text-sm font-semibold text-foreground">{t.projects.trustIssues}</p>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground">{(frictionPoints as { trustIssues: string }).trustIssues}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}

                <Separator className="bg-border/50" />
                <h4 className="text-base sm:text-lg font-semibold text-primary">{t.projects.researchMethods}</h4>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {methods.map((method, idx) => (
                    <Card key={method.name} className="bg-secondary/30 border-border/50">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                            <span className="text-primary font-bold text-sm">{idx + 1}</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-foreground text-sm sm:text-base">{method.name}</h5>
                            {method.description && (
                              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{method.description}</p>
                            )}
                          </div>
                        </div>
                        {method.findings && (
                          <div className="mt-3 pt-3 border-t border-border/30">
                            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-2">{t.projects.keyFindings}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {method.findings.map((finding, i) => (
                                <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                                  {finding}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {"colorSystemImage" in project.research && project.research.colorSystemImage && (
                  <>
                    <Separator className="bg-border/50" />
                    <h4 className="text-base sm:text-lg font-semibold text-primary">{t.projects.colorSystem}</h4>
                    <div className="rounded-lg overflow-hidden border border-border/50 bg-secondary/20 h-44 sm:h-56 md:h-64">
                      <img
                        src={project.research.colorSystemImage as string}
                        alt="Color system"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </>
                )}

                <Separator className="bg-border/50" />

                {"personaImage" in project.research && project.research.personaImage ? (
                  <div className="rounded-lg overflow-hidden border border-border/50 bg-secondary/20 h-64 sm:h-80 md:h-96">
                    <img
                      src={project.research.personaImage as string}
                      alt="User persona"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ) : null}
                <h4 className="text-base sm:text-lg font-semibold text-primary">{t.projects.userPersonas}</h4>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {personas.map((persona) => (
                    <Card key={persona.name} className="bg-secondary/30 border-border/50">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                            {persona.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-semibold text-foreground text-sm sm:text-base truncate">{persona.name}</h5>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              {"age" in persona && (persona as { age?: number }).age ? `Age ${(persona as { age: number }).age}` : ""}
                              {"occupation" in persona && (persona as { occupation?: string }).occupation ? ` • ${(persona as { occupation: string }).occupation}` : ""}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-green-500 font-semibold">{t.projects.goals}</p>
                            </div>
                            <ul className="space-y-0.5 pl-5">
                              {persona.goals.map((goal, i) => (
                                <li key={i} className="text-xs sm:text-sm text-muted-foreground list-disc">{goal}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-red-400 font-semibold">{t.projects.painPoints}</p>
                            </div>
                            <ul className="space-y-0.5 pl-5">
                              {persona.painPoints.map((pain, i) => (
                                <li key={i} className="text-xs sm:text-sm text-muted-foreground list-disc">{pain}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Solution Tab */}
              <TabsContent value="solution" className="space-y-4 sm:space-y-6">
                {"image" in project.solution && project.solution.image && (
                  <div
                    className="rounded-lg overflow-hidden border border-border/50 bg-secondary/20 h-64 sm:h-80 md:h-96 cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => setLightboxImage({ src: project.solution.image as string, alt: `${project.title} solution` })}
                  >
                    <img
                      src={project.solution.image as string}
                      alt={`${project.title} solution`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
                {"images" in project.solution && Array.isArray(project.solution.images) && project.solution.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {(project.solution.images as string[]).map((img, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg overflow-hidden border border-border/50 bg-secondary/20 h-48 sm:h-60 md:h-72 cursor-pointer hover:border-primary/50 transition-colors"
                        onClick={() => setLightboxImage({ src: img, alt: `${project.title} solution ${idx + 1}` })}
                      >
                        <img
                          src={img}
                          alt={`${project.title} solution ${idx + 1}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">{t.projects.approach}</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">{approach}</p>
                </div>

                <h4 className="text-base sm:text-lg font-semibold text-primary">{t.projects.keyFeatures}</h4>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {keyFeatures.map((feature, idx) => (
                    <Card key={feature.name} className="bg-secondary/30 border-border/50 hover:border-primary/30 transition-colors">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                              {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />}
                              {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />}
                              {idx >= 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-foreground text-sm sm:text-base mb-1">{feature.name}</h5>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-2">{feature.description}</p>
                            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-green-500 font-medium">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              {feature.impact}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {project.solution.designSystem && (
                  <>
                    <Separator className="bg-border/50" />
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-primary mb-2 sm:mb-3">{t.projects.designSystem}</h4>
                      <Card className="bg-gradient-to-br from-secondary/30 to-primary/5 border-border/50">
                        <CardContent className="p-4 sm:p-6">
                          <p className="font-semibold text-foreground text-base sm:text-lg mb-4">{project.solution.designSystem.name}</p>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-2">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                                </svg>
                              </div>
                              <p className="text-xl sm:text-2xl font-bold text-gradient">{project.solution.designSystem.components}</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{t.projects.components}</p>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-2">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                              </div>
                              <p className="text-xl sm:text-2xl font-bold text-gradient">{project.solution.designSystem.tokens}</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{t.projects.tokens}</p>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <p className="text-sm sm:text-base font-bold text-foreground">Figma</p>
                              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">{t.projects.docs}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}

              </TabsContent>

              {/* Metrics Tab */}
              <TabsContent value="metrics" className="space-y-4 sm:space-y-6">
                <h4 className="text-base sm:text-lg font-semibold text-primary">{t.projects.resultsImpact}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => {
                    const label = key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
                    if (typeof value === "object" && "before" in value) {
                      return (
                        <MetricCard
                          key={key}
                          label={label}
                          before={String(value.before)}
                          after={String(value.after)}
                          change={value.change}
                          beforeLabel={t.projects.before}
                          afterLabel={t.projects.after}
                        />
                      );
                    } else if (typeof value === "object" && "value" in value) {
                      return (
                        <MetricCard
                          key={key}
                          label={label}
                          after={String(value.value)}
                          change={"description" in value ? value.description as string : undefined}
                        />
                      );
                    }
                    return null;
                  })}
                </div>

              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">{t.projects.sectionTitle}</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t.projects.heading} <span className="text-gradient">{t.projects.headingHighlight}</span>
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            {t.projects.description}
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4 sm:mt-6" />
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border/50 hover:border-primary/50 hover:bg-primary/10 h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base"
          >
            {t.projects.viewAll}
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
