"use client";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Aliya brought a strategic vision to our product design that directly contributed to attracting 5 investment deals. Her ability to translate complex requirements into intuitive interfaces is exceptional.",
    author: "CEO",
    company: "Orion Innovation",
    role: "B2B SaaS Platform",
  },
  {
    quote: "Working with Aliya on our AI-powered platform was a game-changer. She increased our web traffic by 20% and significantly improved user engagement through her research-driven approach.",
    author: "Founder",
    company: "AI Startup",
    role: "Healthcare Tech",
  },
  {
    quote: "Aliya's design work helped us achieve a 15% increase in client inquiries. Her understanding of both user needs and business goals made her an invaluable partner.",
    author: "Product Manager",
    company: "International Startup",
    role: "FinTech",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm uppercase tracking-widest text-primary mb-3 sm:mb-4">Testimonials</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            What <span className="text-gradient">Clients Say</span>
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/30 border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                {/* Quote icon */}
                <svg
                  className="w-8 h-8 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-medium text-foreground text-sm sm:text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.company} · {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
