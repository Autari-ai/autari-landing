import VideoLoop from "@/components/ui/VideoLoop";

// Full-bleed cinematic video background for a section (part of the scroll "story").
// Place as the FIRST child of a `relative isolate` section; give the content
// wrapper `relative z-10` so it sits above this layer. Pass a `.mp4` src; the
// matching `.jpg` poster is used as the still / reduced-motion fallback.
export default function SectionBg({
  src,
  opacity = 0.35,
  objectPosition = "center",
  overlay = "bg-ink/50",
}: {
  src: string;
  opacity?: number;
  objectPosition?: string;
  overlay?: string;
}) {
  const poster = src.replace(/\.(mp4|webm|gif)$/, ".jpg");
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <VideoLoop
        src={src}
        poster={poster}
        className="h-full w-full object-cover"
        style={{ opacity, objectPosition }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
    </div>
  );
}
