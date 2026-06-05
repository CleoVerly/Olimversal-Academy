"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { IMAGES } from "../data/content";
import { Reveal } from "./ui/Reveal";
import { MaskText } from "./ui/MaskText";

export function StoryBand() {
  return (
    <section className="relative px-6 py-12">
      <Reveal className="grain relative mx-auto flex min-h-[420px] max-w-6xl items-center justify-center overflow-hidden rounded-5xl border border-cream-100/10">
        <img
          src={IMAGES.story}
          alt="Hutan berkabut"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/50 to-night-950/40" />

        <div className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center">
          <motion.button
            aria-label="Putar video kisah juara"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="group relative grid h-20 w-20 place-items-center rounded-full border border-cream-100/40 bg-night-950/30 text-cream-100 backdrop-blur transition-colors hover:border-amber-300"
          >
            <span className="absolute inset-0 rounded-full border border-amber-300/40 animate-ping [animation-duration:2.5s]" />
            <Play className="h-7 w-7 translate-x-0.5 fill-current" />
          </motion.button>
          <MaskText
            delay={0.1}
            className="mt-7 font-serif text-2xl font-medium italic leading-snug text-cream-100 sm:text-3xl"
          >
            "Dari ruang kelas Olimversal, ke panggung olimpiade dunia."
          </MaskText>
          <p className="mt-3 text-sm uppercase tracking-[0.28em] text-amber-200">
            Tonton kisah para juara
          </p>
        </div>
      </Reveal>
    </section>
  );
}
