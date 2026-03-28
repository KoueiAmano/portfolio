import { FaBookOpen, FaEnvelope, FaGithub, FaXTwitter } from "react-icons/fa6";
import { BlogCard } from "@/components/portfolio/blog-card";
import { CareerCard } from "@/components/portfolio/career-card";
import { ContactCard } from "@/components/portfolio/contact-card";
import { FeaturedProjectCard } from "@/components/portfolio/featured-project-card";
import { ProfileCard } from "@/components/portfolio/profile-card";
import { SocialCard } from "@/components/portfolio/social-card";
import { TechStackCard } from "@/components/portfolio/tech-stack-card";
import { WorksCard } from "@/components/portfolio/works-card";

const techStack = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Ruby",
  "Ruby on Rails",
];

const featuredProject = {
  title: "Aima",
  description:
    "ふとできた“あいま”の時間を無駄にしないためのアプリ。操作はボタンを押すだけ。直感的なUXを意識しました。",
  tags: ["Next.js", "TypeScript", "Ruby", "Ruby on Rails"],
  liveHref: "#contact",
  repoHref: "#social",
};

const sideProject = {
  title: "自我チェス",
  description: "駒たちが“自我”を持っているチェス",
  liveHref: "#contact",
  repoHref: "#social",
};

const careerHistory = [
  {
    period: "2025/8",
    company: "RIZAPテクノロジーズ株式会社",
    role: "3days インターン",
    summary: "バックエンド",
  },
  {
    period: "2024 - 2025",
    company: "株式会社 魔法アプリ",
    role: "アルバイト",
    summary: "ゲーム開発",
  },
  {
    period: "2024/4",
    company: "日本工学院専門学校 入学",
    role: "ITスペシャリスト科",
  },
];

const socialLinks = [
  {
    href: "#social",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "#blog",
    label: "Blog",
    icon: FaBookOpen,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: FaEnvelope,
  },
  {
    href: "#social",
    label: "X",
    icon: FaXTwitter,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] px-4 py-6 text-[var(--color-ink)] sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex w-full max-w-[1328px] flex-col gap-6 lg:gap-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,2.15fr)_minmax(320px,0.95fr)] lg:items-start">
          <ProfileCard />
          <div
            id="social"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[150px_150px]"
          >
            <SocialCard links={socialLinks} />
            <BlogCard href="#blog" />
          </div>
        </section>

        <section
          id="projects"
          className="grid gap-6 lg:grid-cols-[minmax(0,446px)_minmax(0,1fr)]"
        >
          <TechStackCard items={techStack} />
          <FeaturedProjectCard project={featuredProject} />
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,630px)_minmax(0,653px)]">
          <WorksCard project={sideProject} />
          <CareerCard items={careerHistory} />
        </section>

        <ContactCard />

        <footer className="pb-2 pt-8 text-center text-[13px] font-semibold text-[var(--color-muted)] sm:pt-12">
          © 2026 Kouei Amano. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
