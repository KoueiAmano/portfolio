import { CardShell } from "@/components/ui/card-shell";

type TechStackCardProps = {
  items: string[];
};

export function TechStackCard({ items }: TechStackCardProps) {
  return (
    <CardShell as="section" className="min-h-[226px]" aria-labelledby="stack-heading">
      <h2 id="stack-heading" className="text-[20px] font-semibold leading-none">
        Tech Stack
      </h2>
      <ul className="mt-5 flex flex-wrap gap-[10px]">
        {items.map((item) => (
          <li
            key={item}
            className="flex min-h-[33px] min-w-[114px] items-center justify-center rounded-[8px] border border-[var(--color-border)] px-3 text-center text-[15px] font-semibold leading-none"
          >
            {item}
          </li>
        ))}
      </ul>
    </CardShell>
  );
}
