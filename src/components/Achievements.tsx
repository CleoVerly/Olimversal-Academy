"use client";

import { motion } from "framer-motion";
import { Medal } from "lucide-react";
import { ACHIEVEMENTS } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { AuroraBackground } from "./ui/AuroraBackground";
import { stagger, fadeUp } from "../lib/variants";

export function Achievements() {
  return (
    <section id="prestasi" className="relative overflow-hidden px-6 py-24">
      <AuroraBackground className="opacity-50" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Prestasi"
          align="left"
          title={
            <>
              Rekam jejak yang{" "}
              <span className="text-gradient">berbicara sendiri</span>
            </>
          }
          subtitle="Dari ruang kelas Olimversal ke panggung olimpiade dunia."
        />

        <motion.div
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ACHIEVEMENTS.map((a) => (
            <motion.div
              key={`${a.year}-${a.title}`}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="glass group relative flex items-start gap-4 overflow-hidden rounded-4xl p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-sage-400 shadow-lg">
                <Medal className="h-6 w-6 text-night-950" strokeWidth={2.2} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg font-bold text-cream-100">{a.title}</h3>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs font-semibold text-amber-200">
                    {a.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-cream-200/65">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
