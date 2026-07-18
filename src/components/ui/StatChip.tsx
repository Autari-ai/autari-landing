import type { Stat } from "@/types";

export default function StatChip({
  stat,
  className = "",
  floatDelay = 0,
}: {
  stat: Stat;
  className?: string;
  floatDelay?: number;
}) {
  return (
    <div
      className={`glass float-soft rounded-2xl px-4 py-3 ${className}`}
      style={{ animationDelay: `${floatDelay}s` }}
    >
      <div className="flex items-baseline gap-1">
        <span className="font-display text-2xl font-bold leading-none text-fga sm:text-3xl">
          {stat.value}
        </span>
        {stat.unit && (
          <span className="text-xs font-medium text-spark">{stat.unit}</span>
        )}
      </div>
      <div className="mt-1 text-[11px] leading-tight text-fga/55">{stat.label}</div>
    </div>
  );
}
