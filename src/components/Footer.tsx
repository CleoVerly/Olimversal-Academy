import { GraduationCap, Instagram, Mail, MessageCircle, Youtube } from "lucide-react";
import { BRAND, FOOTER_GROUPS } from "../data/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-sage-400">
                <GraduationCap className="h-5 w-5 text-night-950" strokeWidth={2.5} />
              </span>
              <span className="font-serif text-lg font-bold">
                {BRAND.name}
                <span className="text-amber-400">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/60">
              {BRAND.description}
            </p>
            <div className="mt-5 flex gap-2.5">
              {[Instagram, Youtube, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass grid h-10 w-10 place-items-center rounded-xl text-cream-200/70 transition-colors hover:text-amber-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <h4 className="font-serif text-sm font-bold text-cream-100">
                {g.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-cream-200/60 transition-colors hover:text-amber-300"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-sm text-cream-200/50 sm:flex-row">
          <p>
            © {BRAND.full} 2026 · {BRAND.city}
          </p>
          <p>
            Dibuat dengan <span className="text-clay-400">♥</span> untuk para
            calon juara.
          </p>
        </div>
      </div>
    </footer>
  );
}
