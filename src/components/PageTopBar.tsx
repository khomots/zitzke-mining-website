
import Link from "next/link";

type PageTopBarProps = {
  pageName: string;
  actionText?: string;
  actionHref?: string;
};

export default function PageTopBar({
  pageName,
  actionText,
  actionHref,
}: PageTopBarProps) {
  return (
    <div className="border-b border-white/10 bg-[#0B1D30] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">

        {/* Breadcrumb navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm"
        >
          <Link
            href="/"
            className="text-slate-300 transition hover:text-orange-400"
          >
            Home
          </Link>

          <span
            aria-hidden="true"
            className="text-orange-400"
          >
            /
          </span>

          <span
            aria-current="page"
            className="font-semibold text-white"
          >
            {pageName}
          </span>
        </nav>

        {/* Optional action link */}
        {actionText && actionHref && (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-orange-400 transition hover:text-orange-300 sm:self-auto"
          >
            {actionText}
            <span aria-hidden="true">→</span>
          </Link>
        )}

      </div>
    </div>
  );
}
