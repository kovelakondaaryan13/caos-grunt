import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "300+", label: "CA firm workflows analyzed" },
  { value: "15+", label: "Partner firms during development" },
  { value: "ICAI", label: "AI research initiative insights" },
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 border-y border-border/30">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-foreground/40 mt-1">{stat.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-border/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
