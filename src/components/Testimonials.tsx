import { ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const EASE_CLASS = "ease-[cubic-bezier(0.22,1,0.36,1)]";

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
  );
}

export function Testimonials() {
  // CTA card sits at index 4 → dead-centre of a 3×3 grid (sm+)
  const before = TESTIMONIALS.slice(0, 4);
  const after = TESTIMONIALS.slice(4);

  return (
    <section id="testimoni" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimoni"
          title={
            <>
              Kata mereka yang udah{" "}
              <span className="text-gradient italic">naik podium</span>
            </>
          }
        />

        <Reveal className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {before.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}

          {/* focal card (à la "Records On Sale / VIEW ALL") */}
          <a
            href="#testimoni"
            className={`group relative flex aspect-[3/4] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-line bg-surface2 p-5 text-center transition-transform duration-500 ${EASE_CLASS} hover:-translate-y-2`}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Ulasan Siswa
            </span>
            <span className="font-serif text-2xl font-bold leading-tight text-ink">
              2.000+ kisah juara
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Baca semua
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          {after.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <article
      className={`group relative z-0 aspect-[3/4] overflow-hidden rounded-2xl border border-line transition-[transform,box-shadow] duration-500 ${EASE_CLASS} hover:z-20 hover:-translate-y-2 hover:shadow-[0_28px_70px_-24px_var(--glow)]`}
    >
      {/* cover */}
      <img
        src={t.photo}
        alt={t.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/10 to-transparent" />

      {/* default label */}
      <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
        <div className="font-serif text-base font-semibold text-white">
          {t.name}
        </div>
        <div className="text-[11px] text-white/70">{t.role}</div>
      </div>

      {/* rising reveal sheet (adapts to theme) */}
      <div
        className={`absolute inset-0 flex translate-y-full flex-col justify-between bg-surface/95 p-5 backdrop-blur-sm transition-transform duration-500 ${EASE_CLASS} group-hover:translate-y-0`}
      >
        <Stars />
        <p className="font-serif text-sm italic leading-relaxed text-ink">
          "{t.quote}"
        </p>
        <div className="flex items-center gap-2.5">
          <img
            src={t.photo}
            alt={t.name}
            loading="lazy"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-accent/30"
          />
          <div>
            <div className="text-sm font-bold text-ink">{t.name}</div>
            <div className="text-[11px] text-muted">{t.role}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
