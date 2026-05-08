import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "brand" | "ghost";
type Size = "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-sans font-medium tracking-[-0.005em] " +
  "transition-colors duration-200 ease-out cursor-pointer border-0 active:translate-y-px";

const sizes: Record<Size, string> = {
  md: "h-10 px-[18px] text-[14px]",
  lg: "h-12 px-[22px] text-[15px]",
};

const variants: Record<Variant, string> = {
  brand:
    "bg-primary-60 text-white hover:bg-primary-50",
  ghost:
    "bg-white/[0.04] text-white border border-border-secondary hover:bg-white/[0.08] hover:border-border-tertiary",
};

export function buttonClass({
  variant = "brand",
  size = "md",
  className = "",
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();
}

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children">;

export function ButtonLink({
  variant,
  size,
  className,
  children,
  href,
  ...rest
}: AnchorProps) {
  return (
    <Link
      href={href}
      className={buttonClass({ variant, size, className })}
      {...rest}
    >
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button({
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={buttonClass({ variant, size, className })}
      {...rest}
    >
      {children}
    </button>
  );
}
