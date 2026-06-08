"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SUBJECTS, SUBJECT_GROUPS, type Subject } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { EASE } from "../lib/variants";

const pad = (n: number) => String(n).padStart(2, "0");

export function Subjects() {
  const [group, setGroup] = useState(SUBJECT_GROUPS[0]);
  const [active, setActive] = useState(0);

  const list =
    group === SUBJECT_GROUPS[0]
      ? SUBJECTS
      : SUBJECTS.filter((s) => s.group === group);
  const safe = Math.min(active, list.length - 1);
  const current = list[safe];

  return (
    <section id="bidang" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Bidang Olimpiade"
          title={
            <>
              Arsip disiplin{" "}
              <span className="text-gradient italic">para juara</span>
            </>
          }
        />

        {/* archival sub-header + filter tabs */}
        <div className="mt-12 flex flex-col gap-4 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Olimversal Archive · {pad(list.length)} Bidang
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SUBJECT_GROUPS.map((g) => (
              <button
                key={g}
                onClick={() => {
                  setGroup(g);
                  setActive(0);
                }}
                className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  g === group
                    ? "bg-primary text-white"
                    : "text-soft hover:bg-primary/10 hover:text-ink"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* shelf */}
        <div className="mt-8 flex h-[320px] gap-2 sm:h-[440px]">
          {list.map((s, i) => (
            <Panel
              key={s.name}
              subject={s}
              index={i}
              isActive={i === safe}
              onActivate={() => setActive(i)}
            />
          ))}
        </div>

        {/* active detail + pagination (poster caption) */}
        <div className="mt-7 flex items-end justify-between gap-6 border-t border-line pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
                  {current.name}
                </h3>
                <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                  {current.target}
                </span>
              </div>
              <p className="mt-2 text-sm text-soft sm:text-base">
                {current.blurb}
              </p>
            </motion.div>
          </AnimatePresence>

          <span className="shrink-0 font-mono text-sm text-muted">
            {pad(safe + 1)} <span className="text-muted/50">/ {pad(list.length)}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

function Panel({
  subject,
  index,
  isActive,
  onActivate,
}: {
  subject: Subject;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const Icon = subject.icon;
  return (
    <motion.div
      onMouseEnter={onActivate}
      onClick={onActivate}
      animate={{ flexGrow: isActive ? 7 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 26 }}
      style={{ flexBasis: 0 }}
      className="relative h-full min-w-[26px] cursor-pointer overflow-hidden rounded-2xl border border-line sm:min-w-[44px]"
    >
      {/* accent cover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${subject.accent}`}
      />
      {/* darkening — lighter when active */}
      <div
        className={`absolute inset-0 bg-indigo-950 transition-opacity duration-500 ${
          isActive ? "opacity-40" : "opacity-[0.72]"
        }`}
      />
      <div className="grain absolute inset-0" />

      {/* giant icon watermark */}
      <Icon
        className={`pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 text-white transition-opacity duration-500 ${
          isActive ? "opacity-[0.14]" : "opacity-[0.08]"
        }`}
        strokeWidth={1.2}
      />

      {/* collapsed spine label */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isActive ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap font-serif text-lg font-medium text-white/85">
          {subject.name}
        </span>
      </div>

      {/* expanded content */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-500 ${
          isActive ? "opacity-100 delay-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            {pad(index + 1)} — {subject.group}
          </span>
          <ArrowUpRight className="h-5 w-5 text-white/80" />
        </div>

        <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 backdrop-blur">
          <Icon className="h-6 w-6 text-white" strokeWidth={2} />
        </div>

        <h3 className="whitespace-nowrap font-serif text-3xl font-bold text-white sm:text-4xl">
          {subject.name}
        </h3>
      </div>
    </motion.div>
  );
}
