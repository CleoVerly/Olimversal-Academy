/** Ambient warm gradient glow used behind key sections. */
export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute -left-[10%] -top-[20%] h-[55vh] w-[55vh] rounded-full bg-amber-500/25 blur-[120px] animate-aurora" />
      <div className="absolute right-[-8%] top-[5%] h-[48vh] w-[48vh] rounded-full bg-sage-500/20 blur-[120px] animate-aurora [animation-delay:-7s]" />
      <div className="absolute bottom-[-15%] left-[30%] h-[50vh] w-[50vh] rounded-full bg-clay-500/20 blur-[130px] animate-aurora [animation-delay:-13s]" />
    </div>
  );
}
