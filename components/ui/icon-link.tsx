import type { IconType } from "react-icons";

type IconLinkProps = {
  href: string;
  label: string;
  icon: IconType;
  dark?: boolean;
};

export function IconLink({
  href,
  label,
  icon: Icon,
  dark = false,
}: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={[
        "flex size-[55px] items-center justify-center rounded-full border transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        dark
          ? "border-white/85 text-white focus-visible:ring-white focus-visible:ring-offset-[var(--color-surface-dark)]"
          : "border-[var(--color-border)] text-[var(--color-ink)] focus-visible:ring-[var(--color-border)] focus-visible:ring-offset-[var(--color-surface)]",
      ].join(" ")}
    >
      <Icon className="size-5" aria-hidden="true" />
    </a>
  );
}
