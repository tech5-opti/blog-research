// Data layer for the research journal.
// Single source of truth for posts + categories. Presentation components
// depend on these types, never the other way around (design-for-change).

export type Category =
  | "AI & ML"
  | "Neuroscience"
  | "Physics"
  | "Climate"
  | "Biology"
  | "Data Science";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  /** ISO date string (server-stable, no client clock) */
  date: string;
  readingTime: number;
  author: string;
  authorRole: string;
  /** Ordered paragraphs for the article body */
  body: string[];
}

export const CATEGORIES: Category[] = [
  "AI & ML",
  "Neuroscience",
  "Physics",
  "Climate",
  "Biology",
  "Data Science",
];

const POSTS: Post[] = [
  {
    slug: "scaling-laws-beyond-the-plateau",
    title: "Scaling Laws Beyond the Plateau",
    excerpt:
      "What happens when bigger stops meaning better? A look at the empirical limits of scale and the architectures reaching past them.",
    category: "AI & ML",
    date: "2026-05-28",
    readingTime: 9,
    author: "Dr. Priya Nair",
    authorRole: "Machine Learning",
    body: [
      "For half a decade the field operated on a simple, intoxicating premise: add parameters, add data, add compute, and capability follows in a smooth power law. The curves held with eerie precision — until they didn't.",
      "Recent frontier runs show diminishing returns that arrive earlier than the canonical fits predict, particularly on tasks requiring multi-step reasoning. The plateau is not a wall so much as a change in slope, and it is forcing a reckoning about what we are actually measuring.",
      "The most promising responses abandon the idea that a single monolithic network must do everything. Mixture-of-experts routing, retrieval-grounded inference, and explicit search over a model's own outputs all decouple capability from raw parameter count.",
      "If the last era was defined by scale, the next will be defined by allocation — deciding which computation happens where, and when a model should think longer rather than simply be larger.",
    ],
  },
  {
    slug: "the-cortex-as-a-prediction-engine",
    title: "The Cortex as a Prediction Engine",
    excerpt:
      "Predictive coding reframes perception as controlled hallucination. New recordings put the theory to its hardest test yet.",
    category: "Neuroscience",
    date: "2026-05-21",
    readingTime: 11,
    author: "Dr. Marcus Feld",
    authorRole: "Computational Neuroscience",
    body: [
      "The brain does not passively receive the world; it predicts it, and attends only to the error. This inversion — perception as a hypothesis the senses correct — has quietly become the dominant frame in cognitive neuroscience.",
      "High-density recordings from visual cortex now let us watch the error signal directly. When a stimulus matches expectation, deep-layer activity falls silent. When it surprises, the same neurons erupt.",
      "What makes predictive coding compelling is not any single experiment but its reach: it explains illusions, attention, and even the felt quality of surprise within one accounting framework.",
      "The open question is whether the elegance survives contact with the messy, recurrent reality of biological circuits — or whether it is the next theory we will be obliged to correct.",
    ],
  },
  {
    slug: "room-temperature-superconductivity-revisited",
    title: "Room-Temperature Superconductivity, Revisited",
    excerpt:
      "After a year of retractions and replications, where does the search for ambient superconductors actually stand?",
    category: "Physics",
    date: "2026-05-14",
    readingTime: 8,
    author: "Dr. Lena Ortiz",
    authorRole: "Condensed Matter",
    body: [
      "Few claims in modern physics have collapsed as publicly as the room-temperature superconductor. And yet the underlying ambition is sound: a material that carries current without loss at ambient conditions would reorganize the energy economy.",
      "The lesson of the past year is methodological. Resistance dropping to zero is necessary but not sufficient; the Meissner effect, isotope shifts, and reproducible synthesis must all line up.",
      "Hydride compounds under extreme pressure remain the most credible high-temperature superconductors we know of — the catch being the pressure of a planetary core.",
      "Progress here will be incremental and unglamorous: better characterization, shared samples, and a community that treats extraordinary claims with proportionate skepticism.",
    ],
  },
  {
    slug: "carbon-removal-at-the-scale-that-matters",
    title: "Carbon Removal at the Scale That Matters",
    excerpt:
      "Direct air capture works in a press release. Making it work at gigatonne scale is a different physics — and economics — problem.",
    category: "Climate",
    date: "2026-05-07",
    readingTime: 10,
    author: "Dr. Ade Okonkwo",
    authorRole: "Climate Systems",
    body: [
      "Capturing a tonne of CO₂ from the air is no longer in doubt. Capturing a billion of them, every year, for a price the world will actually pay, remains the defining engineering challenge of the decade.",
      "The thermodynamics are unforgiving: atmospheric CO₂ is dilute, and concentrating it costs energy that must itself be carbon-free, or the exercise is self-defeating.",
      "The most credible pathways pair capture with cheap, otherwise-stranded renewable energy and with mineralization that locks carbon away on geological timescales.",
      "What we lack is not a prototype but an industry — supply chains, standards, and a price on carbon honest enough to fund them.",
    ],
  },
  {
    slug: "writing-to-the-genome-without-cutting",
    title: "Writing to the Genome Without Cutting",
    excerpt:
      "Base and prime editing rewrite DNA without the double-strand breaks that made early CRISPR a blunt instrument.",
    category: "Biology",
    date: "2026-04-30",
    readingTime: 7,
    author: "Dr. Hana Sato",
    authorRole: "Molecular Biology",
    body: [
      "The first generation of genome editing was a pair of scissors: precise about where it cut, indifferent to what the cell did next. The repair was the gamble.",
      "Base editors changed the verb. Rather than cutting, they chemically convert one letter of DNA into another, sidestepping the double-strand break entirely.",
      "Prime editing goes further, using a guided reverse transcriptase to write new sequence directly — a search-and-replace for the genome.",
      "The frontier now is delivery: getting these molecular machines into the right cells, in the right numbers, without the immune system noticing.",
    ],
  },
  {
    slug: "the-quiet-crisis-in-benchmark-design",
    title: "The Quiet Crisis in Benchmark Design",
    excerpt:
      "When models train on the internet and benchmarks live on the internet, what exactly are we measuring?",
    category: "Data Science",
    date: "2026-04-23",
    readingTime: 6,
    author: "Dr. Tomas Reuben",
    authorRole: "Evaluation & Statistics",
    body: [
      "A benchmark is a promise: that performance on this small, fixed set of problems predicts performance on the vast set we actually care about. Contamination breaks the promise quietly.",
      "When evaluation data leaks into training corpora, scores rise without capability following. The number goes up; the model has simply seen the answer.",
      "Robust evaluation now demands held-out, freshly authored, and adversarially constructed tasks — and the humility to retire a benchmark the moment it saturates.",
      "Measurement is not a solved problem we can take for granted. It is research, and it deserves the same rigor as the systems it judges.",
    ],
  },
  {
    slug: "agents-that-know-when-to-stop",
    title: "Agents That Know When to Stop",
    excerpt:
      "Autonomy is easy to grant and hard to bound. Calibrated stopping may matter more than calibrated answers.",
    category: "AI & ML",
    date: "2026-04-16",
    readingTime: 8,
    author: "Dr. Priya Nair",
    authorRole: "Machine Learning",
    body: [
      "An agent that never quits is not ambitious; it is broken. The hardest part of building autonomous systems is not capability but knowing the boundary of competence.",
      "Calibration — a model's sense of its own uncertainty — turns out to be the load-bearing skill. An agent that knows it doesn't know can ask, defer, or stop.",
      "We are learning to train this directly: rewarding honest abstention, penalizing confident error more than admitted ignorance.",
      "The agents worth trusting will be the ones that hand control back at exactly the right moment — neither too soon to be useful nor too late to be safe.",
    ],
  },
  {
    slug: "memory-and-the-shape-of-a-place",
    title: "Memory and the Shape of a Place",
    excerpt:
      "Grid cells tile space in hexagons. The same code may organize thought itself.",
    category: "Neuroscience",
    date: "2026-04-09",
    readingTime: 9,
    author: "Dr. Marcus Feld",
    authorRole: "Computational Neuroscience",
    body: [
      "Deep in the entorhinal cortex, neurons fire in a hexagonal lattice as an animal moves — a coordinate system the brain builds for itself.",
      "The striking discovery is that this same machinery activates when subjects navigate abstract spaces: relationships between concepts, not just positions in a room.",
      "If true, the brain reuses a spatial code to organize meaning, mapping ideas as if they had locations.",
      "It suggests that to remember is, in some literal sense, to know where something is — even when the something is a thought.",
    ],
  },
  {
    slug: "turbulence-the-last-classical-mystery",
    title: "Turbulence: The Last Classical Mystery",
    excerpt:
      "The equations are a century old and we still cannot solve them. Machine learning is changing the terms of the problem.",
    category: "Physics",
    date: "2026-04-02",
    readingTime: 10,
    author: "Dr. Lena Ortiz",
    authorRole: "Fluid Dynamics",
    body: [
      "Turbulence is the embarrassment at the heart of classical physics: equations we have written down precisely and cannot solve, governing a phenomenon we see in every poured cup of coffee.",
      "The difficulty is the cascade — energy flowing across scales from the largest eddies to the smallest, coupling everything to everything.",
      "Learned models now approximate this cascade, not by solving the equations but by absorbing the statistics of countless simulations.",
      "Whether that counts as understanding or merely prediction is a question turbulence has always forced us to ask.",
    ],
  },
];

/** Posts sorted newest-first. */
export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return POSTS.map((post) => post.slug);
}

/** Stable formatter — avoids locale/clock differences between server and client. */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[month - 1]} ${day}, ${year}`;
}
