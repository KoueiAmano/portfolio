import type { IconType } from "react-icons";
import { CardShell } from "@/components/ui/card-shell";
import { IconLink } from "@/components/ui/icon-link";

type SocialCardProps = {
  links: Array<{
    href: string;
    label: string;
    icon: IconType;
  }>;
};

export function SocialCard({ links }: SocialCardProps) {
  return (
    <CardShell
      as="section"
      dark
      className="flex h-full min-h-[150px] flex-col items-center justify-between gap-5 p-5 sm:p-6"
      aria-labelledby="social-heading"
    >
      <h2
        id="social-heading"
        className="text-[18px] font-semibold uppercase tracking-[0.03em] text-[#7b8594] sm:text-[20px]"
      >
        Social
      </h2>
      <nav aria-label="Social links" className="w-full">
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-[37px]">
          {links.map(({ href, label, icon }) => (
            <li key={label}>
              <IconLink href={href} label={label} icon={icon} dark />
            </li>
          ))}
        </ul>
      </nav>
    </CardShell>
  );
}
