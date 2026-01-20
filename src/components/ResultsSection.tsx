"use client";

const results = [
  {
    value: "+20%",
    label: "Web Traffic Growth",
    description: "Increased organic traffic through improved UX",
  },
  {
    value: "5",
    label: "Investment Deals",
    description: "Attracted through compelling product design",
  },
  {
    value: "4+",
    label: "International Startups",
    description: "Collaborated with teams across markets",
  },
  {
    value: "+15%",
    label: "Client Inquiries",
    description: "Growth from redesigned user journeys",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Impact</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Business <span className="text-gradient">Results</span>
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
                {result.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-foreground mb-1">
                {result.label}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {result.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
