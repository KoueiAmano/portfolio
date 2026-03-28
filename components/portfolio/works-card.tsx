import { CardShell } from "@/components/ui/card-shell";
import { InlineLink } from "@/components/ui/inline-link";

type WorksCardProps = {
  project: {
    title: string;
    description: string;
    liveHref: string;
    repoHref: string;
  };
};

export function WorksCard({ project }: WorksCardProps) {
  return (
    <CardShell as="section" className="p-0" aria-labelledby="side-project-title">
      <div className="h-[280px] w-full bg-[var(--color-accent)] sm:h-[390px]" />
      <div className="flex flex-col gap-5 px-[30px] py-7">
        <h2 id="side-project-title" className="text-[20px] font-bold leading-none">
          {project.title}
        </h2>
        <p className="text-[15px] leading-none text-[var(--color-ink)]">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <InlineLink href={project.liveHref} variant="live" />
          <InlineLink href={project.repoHref} variant="github" />
        </div>
      </div>
    </CardShell>
  );
}
