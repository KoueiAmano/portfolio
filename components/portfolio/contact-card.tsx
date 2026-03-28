import { FaEnvelope } from "react-icons/fa6";
import { CardShell } from "@/components/ui/card-shell";
import { PrimaryLinkButton } from "@/components/ui/primary-link-button";

export function ContactCard() {
  return (
    <CardShell
      as="section"
      id="contact"
      className="flex flex-col items-start justify-between gap-6 px-[32px] py-[30px] sm:min-h-[119px] sm:flex-row sm:items-center sm:px-[38px]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[393px]">
        <h2 id="contact-heading" className="text-[17px] font-bold leading-none">
          Interested in working together?
        </h2>
        <p className="mt-[10px] text-[15px] font-semibold leading-none text-[#989898]">
          採用に関するご連絡やお仕事のご相談はこちらから。
        </p>
      </div>

      <PrimaryLinkButton href="mailto:hello@example.com">
        <FaEnvelope className="size-4" aria-hidden="true" />
        <span>Contact Me</span>
      </PrimaryLinkButton>
    </CardShell>
  );
}
