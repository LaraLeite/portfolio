
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  kinetik: {
    name: "Kinetik",
    description:
      "Trust, clarity and consistency for a growing healthcare platform",
    tag: "4 YEAR PARTNERSHIP, 4 PRODUCT ECOSYSTEM",
    image: "/kinetik.jpg",
    imageAlt: "Kinetik healthcare platform",
    company: "Kinetik",
    role: "Product Designer",
    year: "—",
    overview:
      "Describe the project, its context, and the people it was designed for.",
    challenge:
      "Explain the main problem, the user needs, and the challenges the team needed to address.",
    approach:
      "Describe your research, design decisions, explorations, and collaboration with the team.",
    outcome:
      "Share the final solution, its impact, and any results or learnings you can demonstrate.",
  },
  charted: {
    name: "Charted",
    description: "Bringing flow and clarity to financial automation",
    tag: "NEW BRAND, NEW CATEGORY POSITION",
    image: "/charted.jpg",
    imageAlt: "Charted financial automation",
    company: "Charted",
    role: "Product Designer",
    year: "—",
    overview:
      "Introduce the product, its purpose, and the context of the project.",
    challenge:
      "Explain the problem with the existing experience and what needed to change.",
    approach:
      "Show how you explored solutions and translated complex financial workflows into a clearer experience.",
    outcome:
      "Describe the delivered experience and add measurable results when available.",
  },
  solvd: {
    name: "Solvd",
    description:
      "Making AI tangible for enterprises navigating transformation",
    tag: "PARTNERS SINCE 2024",
    image: "/solvd.jpg",
    imageAlt: "Solvd AI enterprise transformation",
    company: "Solvd",
    role: "Product Designer",
    year: "2024–",
    overview:
      "Introduce the project and explain how it fits into the wider product or business context.",
    challenge:
      "Describe the complexity users faced and the opportunity for improvement.",
    approach:
      "Explain how you approached the design problem and made the experience easier to understand.",
    outcome:
      "Describe the final solution and its impact, adding evidence or metrics where possible.",
  },
};

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.hasOwn(projects, slug)) {
    notFound();
  }

  const project = projects[slug as ProjectSlug];

  return (
    <article className="space-y-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-foreground/60 transition-opacity hover:opacity-60"
      >
        <span aria-hidden="true">←</span> Back to projects
      </Link>

      <header className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            Selected work
          </p>

          <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-6xl">
            {project.name}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 border-y border-foreground/10 py-6 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50">
              Company
            </p>
            <p className="mt-2 text-sm text-foreground">{project.company}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50">
              Role
            </p>
            <p className="mt-2 text-sm text-foreground">{project.role}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50">
              Year
            </p>
            <p className="mt-2 text-sm text-foreground">{project.year}</p>
          </div>
        </div>
      </header>

      <figure className="overflow-hidden rounded-2xl bg-foreground/5">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </figure>

      <div className="mx-auto max-w-3xl space-y-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            01 — Overview
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            The project
          </h2>
          <p className="text-base leading-8 text-foreground/70">
            {project.overview}
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            02 — Challenge
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            The challenge
          </h2>
          <p className="text-base leading-8 text-foreground/70">
            {project.challenge}
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            03 — Approach
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            The approach
          </h2>
          <p className="text-base leading-8 text-foreground/70">
            {project.approach}
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            04 — Outcome
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            The outcome
          </h2>
          <p className="text-base leading-8 text-foreground/70">
            {project.outcome}
          </p>
        </section>
      </div>

      <footer className="border-t border-foreground/10 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-opacity hover:opacity-60"
        >
          <span aria-hidden="true">←</span> Back to all projects
        </Link>
      </footer>
    </article>
  );
}

