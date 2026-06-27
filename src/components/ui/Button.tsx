import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

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
    "bg-ember text-cream hover:bg-ember/90 shadow-lg shadow-ember/20",
  secondary:
    "border-2 border-ember text-ember hover:bg-ember/10",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as AsLink;
    return <a href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as AsButton)} />;
}
