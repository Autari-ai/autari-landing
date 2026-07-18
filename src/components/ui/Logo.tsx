// Autari logo — a crisp geometric "A" peak mark (an upward stroke = time/efficiency
// gained) + a clean lowercase wordmark. Pure SVG so it stays razor-sharp at any size,
// in the minimal style of modern tech brands (Linear / Vercel / Ramp).
export default function Logo({
  className = "",
  markClassName = "h-7 w-7",
  showWordmark = true,
  wordmarkClassName = "font-display text-lg font-semibold lowercase tracking-[-0.02em] text-fga",
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        className={markClassName}
        viewBox="0 0 32 32"
        fill="none"
        stroke="url(#autari-mark)"
        strokeWidth={2.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="autari-mark"
            x1="5"
            y1="27"
            x2="27"
            y2="5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0E7C66" />
            <stop offset="1" stopColor="#19D3A2" />
          </linearGradient>
        </defs>
        {/* the A peak */}
        <path d="M4.5 27 L16 4.5 L27.5 27" />
        {/* crossbar */}
        <path d="M10.4 18.6 H21.6" />
      </svg>
      {showWordmark && <span className={wordmarkClassName}>autari</span>}
    </span>
  );
}
