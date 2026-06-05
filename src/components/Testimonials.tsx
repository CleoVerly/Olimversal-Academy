import { ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const EASE_CLASS = "ease-[cubic-bezier(0.22,1,0.36,1)]";

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-300">
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
            className={`group relative flex aspect-[3/4] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-cream-100/10 bg-night-800 p-5 text-center transition-transform duration-500 ${EASE_CLASS} hover:-translate-y-2`}
          >
            <div className="grain absolute inset-0 opacity-60" />
            <span className="relative font-mono text-[11px] uppercase tracking-[0.24em] text-cream-200/45">
              Ulasan Siswa
            </span>
            <span className="relative font-serif text-2xl font-bold leading-tight text-cream-100">
              2.000+ kisah juara
            </span>
            <span className="relative inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-amber-200">
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

function TestimonialCard({
  t,
}: {
  t: (typeof TESTIMONIALS)[number];
}) {
  return (
    <article
      className={`group relative z-0 aspect-[3/4] overflow-hidden rounded-2xl border border-cream-100/10 transition-[transform,box-shadow] duration-500 ${EASE_CLASS} hover:z-20 hover:-translate-y-2 hover:shadow-[0_28px_70px_-24px_rgba(0,0,0,0.85)]`}
    >
      {/* cover */}
      <img
        src={t.photo}
        alt={t.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/15 to-transparent" />

      {/* default label */}
      <div className="absolute inset-x-0 bottom-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
        <div className="font-serif text-base font-semibold text-cream-100">
          {t.name}
        </div>
        <div className="text-[11px] text-cream-200/60">{t.role}</div>
      </div>

      {/* rising reveal sheet */}
      <div
        className={`absolute inset-0 flex translate-y-full flex-col justify-between bg-night-900/95 p-5 backdrop-blur-sm transition-transform duration-500 ${EASE_CLASS} group-hover:translate-y-0`}
      >
        <Stars />
        <p className="font-serif text-sm italic leading-relaxed text-cream-100/90">
          "{t.quote}"
        </p>
        <div className="flex items-center gap-2.5">
          <img
            src={t.photo}
            alt={t.name}
            loading="lazy"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-amber-300/30"
          />
          <div>
            <div className="text-sm font-bold text-cream-100">{t.name}</div>
            <div className="text-[11px] text-cream-200/60">{t.role}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
