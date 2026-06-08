"use client";

import { useState, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { TUTORS, type Tutor } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";

const SPACING = 250; // px between neighbouring cards

export function Tutors() {
  const n = TUTORS.length;
  const [active, setActive] = useState(Math.floor(n / 2));

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);

  return (
    <section id="tutor" className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tutor Medalis"
          title={
            <>
              Diajar langsung oleh{" "}
              <span className="text-gradient italic">para juara sungguhan</span>
            </>
          }
        />
      </div>

      {/* coverflow stage */}
      <div className="perspective relative mx-auto mt-16 h-[480px] w-full max-w-5xl">
        {TUTORS.map((t, i) => {
          // shortest circular distance → seamless infinite loop
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          return (
            <TutorCard
              key={t.name}
              tutor={t}
              offset={offset}
              isActive={i === active}
              onSelect={() => setActive(i)}
            />
          );
        })}

        {/* arrows flanking the centre card */}
        <div
          style={{ left: "calc(50% - 158px)" }}
          className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        >
          <CtrlButton label="Tutor sebelumnya" onClick={() => go(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </CtrlButton>
        </div>
        <div
          style={{ left: "calc(50% + 158px)" }}
          className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
        >
          <CtrlButton label="Tutor berikutnya" onClick={() => go(1)}>
            <ChevronRight className="h-5 w-5" />
          </CtrlButton>
        </div>
      </div>
    </section>
  );
}

function CtrlButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      aria-label={label}
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="glass grid h-12 w-12 place-items-center rounded-full text-ink transition-colors hover:text-accent"
    >
      {children}
    </motion.button>
  );
}

function TutorCard({
  tutor,
  offset,
  isActive,
  onSelect,
}: {
  tutor: Tutor;
  offset: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const abs = Math.abs(offset);
  const hidden = abs > 2;

  // cursor-driven 3D tilt (active card only)
  const rx = useSpring(0, { stiffness: 150, damping: 15 });
  const ry = useSpring(0, { stiffness: 150, damping: 15 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(245,239,226,0.35), transparent 55%)`;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 18);
    rx.set(-py * 18);
    gx.set(50 + px * 70);
    gy.set(50 + py * 70);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  };

  return (
    <motion.div
      onClick={onSelect}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{
        x: offset * SPACING,
        scale: isActive ? 1 : 0.82,
        rotateY: isActive ? 0 : offset > 0 ? -32 : 32,
        opacity: hidden ? 0 : isActive ? 1 : 0.4,
        filter: isActive ? "blur(0px)" : "blur(2.5px)",
      }}
      transition={{ type: "spring", stiffness: 240, damping: 30 }}
      style={{ zIndex: 20 - abs, pointerEvents: hidden ? "none" : "auto" }}
      className="preserve-3d absolute left-1/2 top-1/2 -ml-[150px] -mt-[230px] h-[460px] w-[300px] cursor-pointer"
    >
      <motion.div
        style={{ rotateX: isActive ? rx : 0, rotateY: isActive ? ry : 0 }}
        className={`preserve-3d relative h-full w-full overflow-hidden rounded-[2rem] border border-line bg-surface2 shadow-2xl ${
          isActive ? "glow-primary" : ""
        }`}
      >
        <img
          src={tutor.photo}
          alt={tutor.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        {/* readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/30 to-transparent" />

        {/* glare follows cursor (active only) */}
        {isActive && (
          <motion.div
            aria-hidden
            style={{ backgroundImage: glare }}
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          />
        )}

        {/* subject badge — lifted in 3D space */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="absolute left-5 top-5"
        >
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {tutor.subject}
          </span>
        </div>

        {/* info */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="absolute inset-x-0 bottom-0 p-6"
        >
          <h3 className="font-serif text-xl font-bold leading-tight text-white">
            {tutor.name}
          </h3>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-accentl">
            <BadgeCheck className="h-4 w-4" />
            {tutor.medal}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
            <GraduationCap className="h-3.5 w-3.5" />
            {tutor.school}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
