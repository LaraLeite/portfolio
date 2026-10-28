
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  kinetik: {
    name: "Kinetik",
    description: "Designing clarity into complex logistics operations",
    tag: "INTERNAL PLATFORMS · PRODUCT DESIGN",
    image: "/projects/kinetik.jpg",
    imageAlt: "Logistics product design",
    company: "Loggi",
    role: "Mid-level Product Designer",
    year: "—",
    overview: [
      "Loggi is a Brazilian logistics technology company operating at the intersection of technology, transportation, and parcel delivery.",
      "As a Mid-level Product Designer within the Internal Platforms team, I worked on digital tools supporting transport route operations, including distances, delays, and driver-related information.",
      "This experience was an important step in my development as a designer, particularly in user research and translating user needs into product opportunities.",
    ],
    challenge: [
      "Transport operations depend on multiple variables working together. Routes, distances, delivery schedules, delays, and driver information all influence daily decisions.",
      "The opportunity was to improve the clarity and usability of internal tools, identify avoidable errors, and explore ways to support more efficient route management and cost-conscious operations.",
    ],
    approach: [
      {
        title: "Understanding the people behind the operations",
        text: "I focused on understanding the operational context and the challenges people faced in their daily workflows, looking for recurring pain points and opportunities to improve the experience.",
      },
      {
        title: "Turning insights into opportunities",
        text: "I explored opportunities to make operational information easier to understand, simplify route-related workflows, and help users make more informed decisions.",
      },
      {
        title: "Designing for real-world constraints",
        text: "The design process considered usability, information hierarchy, and interaction patterns, balancing user needs with technical and operational requirements.",
      },
    ],
    outcome: [
      "The project reinforced the value of grounding product decisions in a clear understanding of users and their workflows.",
      "It also strengthened my research-driven approach to design, helping me connect usability improvements with the wider needs of the business.",
    ],
  },

  charted: {
    name: "Charted",
    description: "Bringing flow and clarity to financial automation",
    tag: "NEW BRAND, NEW CATEGORY POSITION",
    image: "/projects/charted.jpg",
    imageAlt: "Charted financial automation",
    company: "Charted",
    role: "Product Designer",
    year: "—",
    overview: [
      "Charted focuses on financial automation and the experience of making complex workflows easier to understand.",
      "The project explores the role of product design in communicating a new product category and creating a more intuitive experience.",
    ],
    challenge: [
      "Financial workflows can involve complex information and decisions. The challenge is to make the product understandable while helping users navigate their tasks with confidence.",
    ],
    approach: [
      {
        title: "Bringing clarity to complexity",
        text: "Explore how information architecture, interaction design, and visual hierarchy can make financial workflows easier to navigate.",
      },
      {
        title: "Connecting product and positioning",
        text: "Consider how the product experience communicates its value and supports a coherent new category position.",
      },
    ],
    outcome: [
      "The project aims to create a clearer experience for financial automation while supporting the product's positioning.",
      "Specific design contributions and results can be added once confirmed.",
    ],
  },

  solvd: {
    name: "Solvd",
    description:
      "Making AI tangible for enterprises navigating transformation",
    tag: "PARTNERS SINCE 2024",
    image: "/projects/solvd.jpg",
    imageAlt: "Solvd AI enterprise transformation",
    company: "Solvd",
    role: "Product Designer",
    year: "2024–",
    overview: [
      "Solvd works in the context of enterprise transformation and artificial intelligence.",
      "The design challenge is to help make complex technology and its potential applications easier to understand through product experiences.",
    ],
    challenge: [
      "Enterprise AI can be difficult to translate into clear, useful experiences. Users need to understand how technology fits into their work and where it can provide value.",
    ],
    approach: [
      {
        title: "Making technology understandable",
        text: "Explore how complex concepts and workflows can be translated into clearer product interactions.",
      },
      {
        title: "Designing for enterprise needs",
        text: "Consider user goals, business context, and the practical requirements of integrating AI into existing ways of working.",
      },
    ],
    outcome: [
      "The project focuses on making AI experiences more tangible and understandable for enterprise users.",
      "Specific contributions and measurable outcomes can be added once confirmed.",
    ],
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
    <article className="space-y-16">
      <Link
        href="/"
        className="text-sm text-foreground/60 transition-opacity hover:opacity-60"
      >
        ← Back to projects
      </Link>

      <header className="space-y-8">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            Selected work
          </p>

          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
            {project.name}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            {project.description}
          </p>

          <p className="inline-block bg-foreground/5 px-3 py-2 font-mono text-xs tracking-wide text-foreground/70">
            {project.tag}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 border-y border-foreground/10 py-6 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50">
              Company
            </p>
            <p className="mt-2 text-sm">{project.company}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50">
              Role
            </p>
            <p className="mt-2 text-sm">{project.role}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/50">
              Year
            </p>
            <p className="mt-2 text-sm">{project.year}</p>
          </div>
        </div>
      </header>

      <figure className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-foreground/5">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
        />
      </figure>

      <div className="mx-auto max-w-3xl space-y-16">
        <section className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            01 — Overview
          </p>
          <h2 className="text-3xl font-medium tracking-tight">
            The context
          </h2>
          {project.overview.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-foreground/70"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            02 — Challenge
          </p>
          <h2 className="text-3xl font-medium tracking-tight">
            The challenge
          </h2>
          {project.challenge.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-foreground/70"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section className="space-y-8">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            03 — Approach
          </p>
          <h2 className="text-3xl font-medium tracking-tight">
            The approach
          </h2>
          {project.approach.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="text-base leading-8 text-foreground/70">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <section className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            04 — Outcome
          </p>
          <h2 className="text-3xl font-medium tracking-tight">
            The outcome
          </h2>
          {project.outcome.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-foreground/70"
            >
              {paragraph}
            </p>
          ))}
          {slug === "kinetik" && (
            <p className="text-sm text-foreground/50">
              Project impact and measurable results to be confirmed.
            </p>
          )}
        </section>
      </div>

      <footer className="border-t border-foreground/10 pt-8">
        <Link
          href="/"
          className="text-sm text-foreground/70 transition-opacity hover:opacity-60"
        >
          ← Back to all projects
        </Link>
      </footer>
    </article>
  );
}

