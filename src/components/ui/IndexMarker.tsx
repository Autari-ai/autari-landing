// Numbered index in the style of the reference themes: a number, a thin rule
// that fades out, and an optional faint total (e.g. 01 ————————— 06).
// Replaces the old [001] bracket markers.
export default function IndexMarker({
  n,
  total,
  className = "",
}: {
  n: number;
  total?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-mono text-sm tabular-nums text-fga/75">
        {String(n).padStart(2, "0")}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-spark/45 via-white/10 to-transparent" />
      {total !== undefined && (
        <span className="font-mono text-xs tabular-nums text-fga/30">
          {String(total).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}
