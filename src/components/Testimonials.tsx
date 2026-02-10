import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="py-24 lg:py-32">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
        <div className="text-center">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-snug tracking-tight">
            "{testimonials[current].quote}"
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-foreground/70">{testimonials[current].author}</p>
            <p className="text-sm text-foreground/35">{testimonials[current].firm}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-foreground/30" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-primary" : "w-1.5 bg-foreground/10"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-foreground/30" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
