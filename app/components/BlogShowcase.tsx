"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/app/lib/posts";
import { CATEGORIES } from "@/app/lib/posts";
import PostCard from "./PostCard";

const ALL = "All" as const;

export default function BlogShowcase({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );

  const filters = [ALL, ...CATEGORIES];

  return (
    <section id="archive" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div
        id="topics"
        className="flex flex-col gap-6 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-ink-faint">
            The Archive
          </span>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Latest writing
          </h2>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by topic">
          {filters.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-faint">
          No articles in this topic yet — check back soon.
        </p>
      )}
    </section>
  );
}
