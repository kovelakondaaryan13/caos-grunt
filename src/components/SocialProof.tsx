import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const SocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();
  const firmsAnalyzed = useCountUp(300, isVisible);
  const partnerFirms = useCountUp(15, isVisible);

  return (
    <section className="py-14 border-y border-border/20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {[
            { value: `${firmsAnalyzed}+`, label: "CA firm workflows analyzed" },
            { value: `${partnerFirms}+`, label: "Partner firms during development" },
            { value: "ICAI", label: "AI research initiative insights" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-14">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground tracking-tight">{stat.value}</p>
                <p className="text-xs text-foreground/35 mt-1.5 font-medium">{stat.label}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block w-px h-10 bg-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
