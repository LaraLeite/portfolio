
import Link from "next/link";

const expertise = [
  "User Research & Discovery",
  "Product Design",
  "Interaction Design",
  "Usability & Accessibility",
  "Design Systems",
  "Information Architecture",
  "Cross-functional Collaboration",
];

const experience = [
  {
    company: "Instituto de Informática",
    role: "UX Designer",
    description:
      "Working on usability, accessibility and Design Systems to create clearer, more consistent digital experiences.",
    highlights: [
      "UX Design",
      "Accessibility",
      "Design Systems",
    ],
  },
  {
    company: "Loggi",
    role: "Mid-level Product Designer",
    description:
      "Designing internal platforms for transport operations, exploring user needs and opportunities to improve route management and operational workflows.",
    highlights: [
      "User Research",
      "Internal Platforms",
      "Route Operations",
    ],
  },
  {
    company: "Kinetik",
    role: "Product Design",
    description:
      "A healthcare product ecosystem focused on clarity, consistency and usability across multiple digital products.",
    highlights: [
      "Healthcare",
      "Product Experience",
      "Consistency",
    ],
  },
  {
    company: "Charted",
    role: "Product Design",
    description:
      "Exploring ways to make financial automation and complex workflows easier to understand and navigate.",
    highlights: [
      "Financial Automation",
      "Interaction Design",
      "Product Experience",
    ],
  },
  {
    company: "Solvd",
    role: "Product Design",
    description:
      "Working on digital experiences that make enterprise technology and AI easier to understand and use.",
    highlights: [
      "Artificial Intelligence",
      "Enterprise Products",
      "Digital Experiences",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-24">
      {/* Back link */}
      <Link
        href="/"
        className="inline-block text-sm text-foreground/50 transition-opacity hover:opacity-60"
      >
        ← Back home
      </Link>

      {/* Introduction */}
      <header className="space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
          Background & Experience
        </p>

        <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-6xl">
          A selection of my work across digital products and experiences.
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
          My experience spans user research, product design and the challenge
          of making complex systems easier to understand and use.
        </p>
      </header>

      {/* Areas of expertise */}
      <section className="space-y-8">
        <div className="space-y-5">
          <h2 className="text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
            What I do
          </h2>

          <p className="max-w-3xl text-xl leading-relaxed text-foreground/60 sm:text-2xl">
            I work across research, product design and usability to understand
            people&apos;s needs, make sense of complex problems, and create
            digital experiences that are clear, useful and intuitive.
          </p>
        </div>

        <div className="border-t border-foreground/10">
          {expertise.map((item) => (
            <div
              key={item}
              className="border-b border-foreground/10 py-5 text-xl tracking-tight text-foreground sm:py-6 sm:text-2xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Professional experience */}
      <section className="space-y-10">
        <header className="space-y-4">
          <h2 className="text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
            Experience
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-foreground/60">
            A selection of teams, products and challenges that have shaped
            the way I approach design.
          </p>
        </header>

        <div className="border-t border-foreground/10">
          {experience.map((item, index) => (
            <article
              key={item.company}
              className="grid gap-5 border-b border-foreground/10 py-8 sm:grid-cols-[220px_1fr] sm:gap-12 sm:py-10"
            >
              <div className="space-y-2">
                <p className="text-xs tracking-widest text-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  {item.company}
                </h3>
              </div>

              <div className="space-y-5">
                <h4 className="text-lg text-foreground/80 sm:text-xl">
                  {item.role}
                </h4>

                <p className="max-w-2xl text-base leading-7 text-foreground/60 sm:text-lg">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs uppercase tracking-wider text-foreground/50"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Back to home */}
      <footer className="border-t border-foreground/10 pt-8">
        <Link
          href="/"
          className="text-sm text-foreground/60 transition-opacity hover:opacity-50"
        >
          ← Back to home
        </Link>
      </footer>
    </div>
  );
}
