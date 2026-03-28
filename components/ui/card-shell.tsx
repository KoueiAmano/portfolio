import type { HTMLAttributes, ReactNode } from "react";

type CardShellProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "section" | "div";
  children: ReactNode;
  dark?: boolean;
};

export function CardShell({
  as: Component = "article",
  children,
  className,
  dark = false,
  ...props
}: CardShellProps) {
  return (
    <Component
      className={[
        "overflow-hidden rounded-[32px] border border-black/5 p-8 shadow-[var(--card-shadow)]",
        dark
          ? "bg-[var(--color-surface-dark)] text-white"
          : "bg-[var(--color-surface)] text-[var(--color-ink)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
