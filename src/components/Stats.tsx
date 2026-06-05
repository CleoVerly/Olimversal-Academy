"use client";

import { motion } from "framer-motion";
import { STATS } from "../data/content";
import { Counter } from "./ui/Counter";
import { stagger, fadeUp } from "../lib/variants";

export function Stats() {
  return (
    <section className="relative px-6 py-20">
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="glass group relative overflow-hidden rounded-4xl p-7 text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="font-serif text-4xl font-bold text-gradient sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium text-cream-200/70">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
