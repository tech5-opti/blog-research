import { getAllPosts } from "@/app/lib/posts";

export default function Hero() {
  const total = getAllPosts().length;

  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* faint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-ink-faint">
          <span className="inline-block h-px w-8 bg-ink-faint" />
          Frontier research, written for the curious
        </div>

        <h1 className="font-display mt-8 text-[clamp(3.5rem,15vw,13rem)] font-semibold leading-[0.84] tracking-tight text-ink">
          <span className="block animate-rise">RESEARCH</span>
          <span
            className="block animate-rise italic text-ink-soft"
            style={{ animationDelay: "0.08s" }}
          >
            JOURNAL
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Deeply reported essays on artificial intelligence, neuroscience,
            physics, climate, and biology — the ideas reshaping how we
            understand the world, explained without the jargon.
          </p>
          <dl className="flex gap-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                Articles
              </dt>
              <dd className="font-display text-3xl font-semibold text-ink">
                {String(total).padStart(2, "0")}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                Edition
              </dt>
              <dd className="font-display text-3xl font-semibold text-ink">
                Vol.&nbsp;IV
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
