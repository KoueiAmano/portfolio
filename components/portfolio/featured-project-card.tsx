import { CardShell } from "@/components/ui/card-shell";
import { InlineLink } from "@/components/ui/inline-link";

type FeaturedProject = {
  title: string;
  description: string;
  tags: string[];
  liveHref: string;
  repoHref: string;
};

type FeaturedProjectCardProps = {
  project: FeaturedProject;
};

export function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <CardShell as="section" className="min-h-[226px]" aria-labelledby="featured-project-title">
      <ul className="flex flex-wrap gap-x-[10px] gap-y-1 px-[10px] text-[14px] font-semibold sm:text-[15px]">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <h2
        id="featured-project-title"
        className="mt-5 text-[36px] font-bold leading-none tracking-[-0.03em] sm:text-[42px]"
      >
        {project.title}
      </h2>

      <p className="mt-5 max-w-[715px] text-[15px] leading-[1.7] text-[var(--color-ink)]">
        {project.description}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 px-[10px]">
        <InlineLink href={project.liveHref} variant="live" />
        <InlineLink href={project.repoHref} variant="github" />
      </div>
    </CardShell>
  );
}
