export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block text-[10px] sm:text-xs font-medium tracking-[0.08em] uppercase text-ember ${className}`}
    >
      {children}
    </span>
  );
}
