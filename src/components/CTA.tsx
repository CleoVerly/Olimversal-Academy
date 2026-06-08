"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { IMAGES } from "../data/content";
import { Button } from "./ui/Button";
import { MaskText } from "./ui/MaskText";
import { scaleIn } from "../lib/variants";

export function CTA() {
  return (
    <section className="relative px-6 py-24">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grain relative mx-auto max-w-5xl overflow-hidden rounded-5xl border border-white/10 px-8 py-20 text-center sm:px-16"
      >
        <img
          src={IMAGES.cta}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/92 via-indigo-950/75 to-indigo-900/85" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accentl">
            <Rocket className="h-3.5 w-3.5" />
            Kuota batch baru terbatas
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl">
            <MaskText className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
              Siap jadi{" "}
              <span className="bg-gradient-to-r from-primaryl to-accentl bg-clip-text italic text-transparent">
                juara berikutnya?
              </span>
            </MaskText>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Gabung Olimversal sekarang dan mulai perjalananmu menuju podium
            olimpiade bareng mentor terbaik di Indonesia.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#paket">
              Daftar Sekarang
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#bidang" variant="ghost">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
