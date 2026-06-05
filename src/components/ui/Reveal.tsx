"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../../lib/variants";

type RevealProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
};

/** Scroll-triggered reveal wrapper. */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}
