import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CoverArt from "@/app/components/CoverArt";
import PostCard from "@/app/components/PostCard";
import {
  formatDate,
  getAllPosts,
  getAllSlugs,
  getPostBySlug,
} from "@/app/lib/posts";

// Pre-render every article at build time.
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found — First Principles" };
  return {
    title: `${post.title} — First Principles`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Link
            href="/#archive"
            className="text-sm text-ink-soft transition-colors hover:text-ink"
          >
            ← Back to the journal
          </Link>

          {/* Full-width header */}
          <header className="mt-8 border-b border-line pb-10">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full border border-line px-3 py-1 uppercase tracking-wide text-ink-soft">
                {post.category}
              </span>
              <time className="text-ink-faint" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span className="text-ink-faint">
                · {post.readingTime} min read
              </span>
            </div>

            <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {post.excerpt}
            </p>
          </header>

          {/* Full-width cover */}
          <div className="mt-10 overflow-hidden rounded-xl border border-line">
            <CoverArt
              slug={post.slug}
              category={post.category}
              className="aspect-[21/9] w-full"
            />
          </div>

          {/* Two-column body: sticky meta sidebar + wide content */}
          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-medium text-paper">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .slice(-2)
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">
                    {post.author}
                  </div>
                  <div className="text-xs text-ink-faint">
                    {post.authorRole}
                  </div>
                </div>
              </div>
              <dl className="mt-6 space-y-4 border-t border-line pt-6 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    Published
                  </dt>
                  <dd className="mt-1 text-ink-soft">{formatDate(post.date)}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    Topic
                  </dt>
                  <dd className="mt-1 text-ink-soft">{post.category}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    Reading time
                  </dt>
                  <dd className="mt-1 text-ink-soft">
                    {post.readingTime} minutes
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="max-w-2xl space-y-6">
              {post.body.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-ink first-letter:font-display first-letter:mr-2 first-letter:float-left first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8]"
                      : "text-lg leading-relaxed text-ink-soft"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-line">
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
                More in {post.category}
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
