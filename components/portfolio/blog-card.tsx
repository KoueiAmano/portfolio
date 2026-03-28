import { FaArrowRight } from "react-icons/fa6";
import { CardShell } from "@/components/ui/card-shell";
import { IconLink } from "@/components/ui/icon-link";

type BlogCardProps = {
  href: string;
};

export function BlogCard({ href }: BlogCardProps) {
  return (
    <CardShell
      as="section"
      className="flex h-full min-h-[150px] items-center justify-between gap-6 p-8"
      id="blog"
      aria-labelledby="blog-heading"
    >
      <div className="space-y-5">
        <p className="text-[15px] font-bold leading-none">Read my articles</p>
        <h2 id="blog-heading" className="text-[28px] font-bold leading-none">
          Tech Blog
        </h2>
      </div>
      <IconLink
        href={href}
        label="Tech blog section"
        icon={FaArrowRight}
      />
    </CardShell>
  );
}
