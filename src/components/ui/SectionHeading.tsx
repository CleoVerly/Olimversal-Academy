import type { ReactNode } from "react";
import { MaskText } from "./MaskText";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <MaskText delay={0}>
        <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
        </span>
      </MaskText>

      <MaskText
        delay={0.1}
        className={`font-serif text-4xl font-bold leading-[1.1] text-cream-100 sm:text-5xl ${
          isCenter ? "max-w-3xl" : "max-w-2xl"
        }`}
      >
        {title}
      </MaskText>

      {subtitle && (
        <MaskText
          delay={0.2}
          className={`text-base text-cream-200/65 sm:text-lg ${
            isCenter ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </MaskText>
      )}
    </div>
  );
}
