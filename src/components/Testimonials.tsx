import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Preparation work consumes most engagement hours. CAOS directly addresses this.",
    author: "Senior Partner",
    firm: "Mid-tier CA Firm, Mumbai",
  },
  {
    quote: "Automation focused on preparation — not filing — is exactly what the industry needs.",
    author: "Managing Partner",
    firm: "Multi-practice CA Firm, Delhi",
  },
  {
    quote: "Closed-loop document tracking is something we haven't seen before.",
    author: "Audit Partner",
    firm: "Regional CA Firm, Bangalore",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
          What Professionals Say
        </h2>

        <div className="relative">
          <div className="text-center px-8 sm:px-16">
            <Quote className="h-8 w-8 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed mb-6">
              "{testimonials[current].quote}"
            </blockquote>
            <p className="font-semibold text-foreground">{testimonials[current].author}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].firm}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-border hover:bg-card transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="p-2 rounded-full border border-border hover:bg-card transition-colors"
            >
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
