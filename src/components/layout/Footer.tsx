import BrandLogo from "@/components/ui/Logo";
import { BOOK_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <BrandLogo
              markClassName="h-8 w-8"
              wordmarkClassName="font-display text-xl font-semibold lowercase tracking-[-0.02em] text-fga"
            />
            <p className="mt-3 text-sm text-fga/40">
              Automated work for your business. Get your time back.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs font-medium uppercase tracking-[0.12em] text-fga/45">
            <a
              href={`mailto:${BOOK_EMAIL}`}
              className="transition-colors hover:text-fga"
            >
              Book a call
            </a>
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/17105724"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-fga"
            >
              Companies House
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs text-fga/30">
            &copy; {new Date().getFullYear()} Autari Ltd. A UK company registered
            in England &amp; Wales, company no.{" "}
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/17105724"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-fga/70"
            >
              17105724
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
