import type { Category } from "@/app/lib/posts";

// Deterministic generative cover art. Each post gets a distinct geometric
// composition derived from its slug, themed by category palette — so the grid
// reads like a designed art magazine with zero external image dependencies.

const PALETTES: Record<Category, { bg: string; shapes: string[] }> = {
  "AI & ML": { bg: "#10131a", shapes: ["#5b8cff", "#c9d6ff", "#ff7a59", "#ffffff"] },
  Neuroscience: { bg: "#1a1020", shapes: ["#e85aa8", "#ffd166", "#9b5de5", "#fdf0ff"] },
  Physics: { bg: "#0c1714", shapes: ["#2ec4b6", "#cbf3f0", "#ff9f1c", "#ffffff"] },
  Climate: { bg: "#13180c", shapes: ["#8ab84a", "#e9f5db", "#f4a259", "#1f3a1a"] },
  Biology: { bg: "#1b0f10", shapes: ["#ef476f", "#ffd6a5", "#06d6a0", "#fff1e6"] },
  "Data Science": { bg: "#0d1320", shapes: ["#ffb703", "#8ecae6", "#fb8500", "#edf6ff"] },
};

/** Tiny deterministic hash → 0..1 generator seeded by a string. */
function seeded(slug: string) {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function CoverArt({
  slug,
  category,
  className = "",
}: {
  slug: string;
  category: Category;
  className?: string;
}) {
  const palette = PALETTES[category];
  const rand = seeded(slug);
  const variant = Math.floor(rand() * 3);
  const pick = () => palette.shapes[Math.floor(rand() * palette.shapes.length)];

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${category} cover artwork`}
    >
      <rect width="400" height="300" fill={palette.bg} />

      {variant === 0 &&
        // Stacked bars
        Array.from({ length: 5 }).map((_, i) => {
          const w = 40 + rand() * 120;
          const h = 18 + rand() * 30;
          const x = rand() * (400 - w);
          const y = 40 + i * 48 + rand() * 10;
          const r = (rand() - 0.5) * 30;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={w}
              height={h}
              rx="3"
              fill={pick()}
              transform={`rotate(${r} ${x + w / 2} ${y + h / 2})`}
            />
          );
        })}

      {variant === 1 &&
        // Orbiting circles
        Array.from({ length: 7 }).map((_, i) => {
          const cx = 60 + rand() * 280;
          const cy = 50 + rand() * 200;
          const rr = 14 + rand() * 50;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={rr}
              fill={pick()}
              opacity={0.65 + rand() * 0.35}
            />
          );
        })}

      {variant === 2 &&
        // Crossing diagonals + accent node
        Array.from({ length: 6 }).map((_, i) => {
          const x1 = rand() * 400;
          const y1 = rand() * 300;
          const x2 = rand() * 400;
          const y2 = rand() * 300;
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={pick()}
                strokeWidth={2 + rand() * 6}
                strokeLinecap="round"
              />
              <circle cx={x2} cy={y2} r={6 + rand() * 10} fill={pick()} />
            </g>
          );
        })}
    </svg>
  );
}
