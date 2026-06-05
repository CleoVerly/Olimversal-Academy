"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { EASE } from "../../lib/variants";

type Props = {
  children: ReactNode;
  /** classes for the clip wrapper (sizing / typography / alignment) */
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};

/**
 * Line-mask reveal: text slides up from behind a clipped edge.
 * Uses its own in-view detection + explicit `animate`, so it works
 * reliably even when nested inside other animated (variant) parents.
 */
export function MaskText({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  once = true,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount: 0.4 });

  return (
    <span ref={ref} className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block pb-[0.15em]"
        initial={{ y: "120%" }}
        animate={inView ? { y: 0 } : { y: "120%" }}
        transition={{ duration, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
