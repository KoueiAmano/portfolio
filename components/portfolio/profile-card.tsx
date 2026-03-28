import { CardShell } from "@/components/ui/card-shell";

export function ProfileCard() {
  return (
    <CardShell className="flex min-h-[321px] flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-start lg:gap-[35px]">
      <div className="flex shrink-0 justify-center lg:justify-start">
        <div className="flex size-[140px] items-center justify-center rounded-full bg-white text-[30px] font-bold shadow-[var(--card-shadow)] sm:size-[170px] sm:text-[38px]">
          KA
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-[11px]">
        <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[var(--color-ink)] sm:text-[15px]">
          Welcome to my portfolio
        </p>
        <h1 className="text-[38px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[54px]">
          Kouei Amano
        </h1>
        <p className="text-[20px] font-semibold leading-tight text-[#a9aeb6] sm:text-[23px]">
          Backend Engineer
        </p>
        <p className="max-w-[581px] text-[17px] leading-[1.9] text-[var(--color-ink)] sm:text-[20px]">
          面白いアプリを作ることや、設計を考えるのが好きです。
          <br />
          バックエンドを中心に、DB設計やUXを意識して開発しています。
        </p>
      </div>
    </CardShell>
  );
}
