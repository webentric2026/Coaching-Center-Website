import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-gold-500 border border-navy-900",
  secondary:
    "bg-white text-navy-900 border border-line hover:border-navy-900 hover:bg-navy-50",
  accent: "bg-gold-500 text-navy-950 hover:bg-gold-400 border border-gold-500",
  light:
    "bg-white text-navy-900 hover:bg-navy-50 border border-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & (React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement>)) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide uppercase text-[13px] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );
  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as object)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as object)}>
      {children}
    </button>
  );
}
