import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

type InlineLinkProps = {
  href: string;
  variant: "live" | "github";
};

export function InlineLink({ href, variant }: InlineLinkProps) {
  const isGithub = variant === "github";
  const Icon = isGithub ? FaGithub : FaArrowUpRightFromSquare;

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 text-[15px] font-bold leading-none text-[var(--color-ink)] transition-opacity hover:opacity-65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <span>{isGithub ? "GitHub" : "Click !"}</span>
      <Icon className="size-3.5" aria-hidden="true" />
    </a>
  );
}
