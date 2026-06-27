export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-linen p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}
