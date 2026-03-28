import { FaBriefcase } from "react-icons/fa6";
import { CardShell } from "@/components/ui/card-shell";

type CareerItem = {
  period: string;
  company: string;
  role: string;
  summary?: string;
};

type CareerCardProps = {
  items: CareerItem[];
};

export function CareerCard({ items }: CareerCardProps) {
  return (
    <CardShell as="section" className="min-h-[527px]" aria-labelledby="career-heading">
      <h2
        id="career-heading"
        className="flex items-center gap-3 text-[20px] font-bold leading-none"
      >
        <FaBriefcase className="size-4 text-[#7d5f4b]" aria-hidden="true" />
        <span>Career History</span>
      </h2>

      <ol className="mt-[13px] space-y-[10px]">
        {items.map((item) => (
          <li key={`${item.period}-${item.company}`} className="flex gap-[10px] px-[10px] py-5">
            <span
              className="mt-[6px] block size-[13px] shrink-0 rounded-full border border-[var(--color-border)] bg-white shadow-[var(--card-shadow)]"
              aria-hidden="true"
            />
            <div className="space-y-[13px] px-[20px] sm:px-[30px]">
              <p className="inline-flex min-h-[22px] items-center rounded-[6px] border border-[var(--color-border)] px-3 text-[14px] font-bold leading-none text-[#9d9d9d] sm:min-w-[102px] sm:justify-center sm:text-[15px]">
                {item.period}
              </p>
              <div className="space-y-[13px]">
                <h3 className="text-[20px] font-bold leading-tight">{item.company}</h3>
                <p className="text-[15px] font-bold leading-none text-[#989898]">
                  {item.role}
                </p>
                {item.summary ? (
                  <p className="text-[15px] leading-none text-[#878787]">
                    {item.summary}
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </CardShell>
  );
}
