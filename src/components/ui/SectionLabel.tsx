export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-3 text-[10px] sm:text-[11px] text-spark ${className}`}
    >
      <span className="h-px w-7 bg-gradient-to-r from-spark to-spark/10" />
      {children}
    </span>
  );
}
