"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PACKAGES } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { stagger, fadeUp } from "../lib/variants";

export function Packages() {
  return (
    <section id="paket" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Paket Belajar"
          title={
            <>
              Investasi terbaik buat{" "}
              <span className="text-gradient">masa depanmu</span>
            </>
          }
          subtitle="Pilih paket yang pas sama tujuanmu. Upgrade kapan aja seiring kamu makin jago."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3"
        >
          {PACKAGES.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-5xl p-8 ${
                p.highlight
                  ? "glass glow-amber ring-1 ring-amber-400/40"
                  : "glass"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-clay-400 px-4 py-1.5 text-xs font-bold text-night-950">
                  <Sparkles className="h-3.5 w-3.5" />
                  Paling Populer
                </span>
              )}

              <h3 className="font-serif text-xl font-bold text-cream-100">{p.name}</h3>
              <p className="mt-1 text-sm text-cream-200/65">{p.blurb}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-serif text-4xl font-bold text-gradient">
                  {p.price}
                </span>
                <span className="mb-1 text-sm text-cream-200/50">
                  {p.period}
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {p.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2.5 text-sm text-cream-100/85"
                  >
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        p.highlight
                          ? "bg-gradient-to-br from-amber-300 to-amber-500"
                          : "bg-white/10"
                      }`}
                    >
                      <Check className="h-3 w-3 text-night-950" strokeWidth={3} />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Button
                  href="#"
                  variant={p.highlight ? "primary" : "ghost"}
                  className="w-full"
                >
                  Pilih {p.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
