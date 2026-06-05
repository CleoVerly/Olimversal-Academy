"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { BRAND, HERO_FEATURES, IMAGES } from "../data/content";
import { Button } from "./ui/Button";
import { MaskText } from "./ui/MaskText";
import { stagger, fadeUp, EASE } from "../lib/variants";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative min-h-screen overflow-hidden"
    >
      {/* cinematic background */}
      <img
        src={IMAGES.hero}
        alt="Pegunungan saat golden hour"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        loading="eager"
      />
      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-night-950/75 via-night-950/35 to-night-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-night-950/85 via-transparent to-night-900/40" />

      {/* content */}
      <motion.div
        variants={stagger(0.15, 0.13)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pb-48 pt-32 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4"
        >
          <button
            aria-label="Putar video"
            className="group relative grid h-12 w-12 place-items-center rounded-full border border-cream-100/40 text-cream-100 transition-colors hover:border-amber-300"
          >
            <span className="absolute inset-0 rounded-full border border-amber-300/50 animate-ping [animation-duration:2.5s]" />
            <Play className="h-4 w-4 translate-x-0.5 fill-current" />
          </button>
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200">
            {BRAND.full}
          </span>
        </motion.div>

        <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.04] text-cream-100 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl">
          <MaskText delay={0.15}>Tempa diri jadi</MaskText>
          <MaskText delay={0.32}>
            <span className="text-gradient italic">juara olimpiade</span> sejati
          </MaskText>
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg text-cream-200/80 sm:text-xl"
        >
          Belajar langsung dari para medalis OSN & olimpiade internasional.
          Astronomi, Fisika, Matematika, Informatika & lebih banyak lagi —
          dengan metode yang terbukti membawa siswa ke podium dunia.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="#paket">
            Mulai Perjalananmu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button href="#tutor" variant="ghost">
            Kenalan dengan Tutor
          </Button>
        </motion.div>
      </motion.div>

      {/* feature columns */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
        className="absolute inset-x-0 bottom-0 z-10 border-t border-cream-100/10 bg-night-950/40 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4">
          {HERO_FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 px-3 py-6 md:border-l md:border-cream-100/10 md:px-6 md:first:border-l-0"
            >
              <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
              <div>
                <div className="text-sm font-semibold text-cream-100">
                  {f.title}
                </div>
                <p className="mt-0.5 text-xs leading-snug text-cream-200/55">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
