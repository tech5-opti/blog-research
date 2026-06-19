import Link from "next/link";
import type { Post } from "@/app/lib/posts";
import { formatDate } from "@/app/lib/posts";
import CoverArt from "./CoverArt";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-1 flex-col focus:outline-none"
      >
        <div className="mb-4 flex items-center justify-between">
          <time className="text-xs text-ink-faint" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-wide text-ink-soft">
            {post.category}
          </span>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-line">
          <CoverArt
            slug={post.slug}
            category={post.category}
            className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <h3 className="font-display mt-5 text-2xl font-semibold leading-snug tracking-tight text-ink decoration-from-font underline-offset-4 group-hover:underline">
          {post.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink group-hover:text-accent">
            Read more →
          </span>
          <span className="text-xs text-ink-faint">{post.readingTime} min</span>
        </div>
      </Link>
    </article>
  );
}
