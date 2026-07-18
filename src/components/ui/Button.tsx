import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  className?: string;
};

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsLink;

const variants: Record<Variant, string> = {
  primary:
    "bg-spark text-ink font-semibold shadow-[0_0_40px_-6px_rgba(25,211,162,0.5)] hover:bg-mint hover:shadow-[0_0_60px_-4px_rgba(25,211,162,0.7)]",
  secondary:
    "glass text-fga hover:border-spark/50",
  ghost:
    "text-fga/70 hover:text-fga",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-300 cursor-pointer ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as AsLink;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as AsButton)} />;
}
