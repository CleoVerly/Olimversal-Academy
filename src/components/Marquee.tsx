import { SUBJECTS } from "../data/content";

export function Marquee() {
  // duplicate once so a -50% translate loops seamlessly
  const items = [...SUBJECTS, ...SUBJECTS];
  return (
    <section className="border-y border-white/5 bg-night-950/40 py-6">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10">
          {items.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-serif text-xl italic text-cream-200/40"
            >
              <s.icon className="h-5 w-5 text-amber-300/70" />
              {s.name}
              <span className="text-amber-500/40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
