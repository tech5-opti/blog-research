import Link from "next/link";

const SECTIONS = [
  {
    title: "Topics",
    links: [
      "AI & ML",
      "Neuroscience",
      "Physics",
      "Climate",
      "Biology",
      "Data Science",
    ],
  },
  {
    title: "Journal",
    links: ["About", "Editorial standards", "Contributors", "Archive"],
  },
  {
    title: "Connect",
    links: ["Newsletter", "RSS", "Mastodon", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer id="subscribe" className="mt-24 border-t border-line">
      {/* Newsletter band */}
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              The week in research, every Sunday.
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              One careful email. No noise, no hype — just the work that matters.
            </p>
          </div>
          <form
            className="flex w-full max-w-sm items-center gap-2"
            // Static demo form — no backend wired up.
            action="/#subscribe"
          >
            <input
              type="email"
              required
              placeholder="you@institution.edu"
              aria-label="Email address"
              className="h-11 w-full rounded-full border border-line bg-paper-raised px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            First Principles
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            An independent research journal connecting the dots between
            disciplines.
          </p>
        </div>

        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              {section.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {section.links.map((link) => (
                <li key={link}>
                  <Link
                    href="/#archive"
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 First Principles. All rights reserved.</span>
          <span>Set in Fraunces &amp; Inter.</span>
        </div>
      </div>
    </footer>
  );
}
