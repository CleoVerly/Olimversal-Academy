"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  onClick,
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors";

  const styles =
    variant === "primary"
      ? "text-night-950 bg-gradient-to-r from-amber-300 via-amber-400 to-clay-400 shadow-[0_12px_40px_-8px_rgba(192,136,56,0.65)]"
      : "glass text-cream-100 hover:bg-white/10";

  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`${base} ${styles} ${className}`}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-clay-400 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}
