import type { ReactNode } from "react";

type PrimaryLinkButtonProps = {
  href: string;
  children: ReactNode;
};

export function PrimaryLinkButton({
  href,
  children,
}: PrimaryLinkButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[55px] items-center justify-center gap-2 rounded-[15px] bg-[var(--color-surface-dark)] px-6 text-[17px] font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-surface-dark)] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:px-7"
    >
      {children}
    </a>
  );
}
