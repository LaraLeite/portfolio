
import Link from "next/link";

const experience = [
  {
    company: "Instituto de Informática",
    role: "UX Designer",
    description:
      "Usability, accessibility and Design Systems, creating clearer and more consistent digital experiences.",
    areas: ["UX Design", "Accessibility", "Design Systems"],
  },
  {
    company: "Loggi",
    role: "Mid-level Product Designer",
    description:
      "Internal platforms for transport operations, exploring user needs, route management and opportunities to improve operational workflows.",
    areas: ["Product Design", "User Research", "Internal Platforms"],
  },
  {
    company: "Kinetik",
    role: "Product Design",
    description:
      "Design work across a healthcare product ecosystem, with a focus on clarity, consistency and usability.",
    areas: ["Healthcare", "Product Experience", "Consistency"],
  },
  {
    company: "Charted",
    role: "Product Design",
    description:
      "Exploring how product design can bring clarity to financial automation and complex workflows.",
    areas: ["Fintech", "Product Strategy", "Interaction Design"],
  },
  {
    company: "Solvd",
    role: "Product Design",
    description:
      "Designing experiences that make enterprise technology and AI easier to understand.",
    areas: ["AI", "Enterprise", "Digital Products"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <Link
          href="/"
          className="text-sm text-foreground/50 transition-opacity hover:opacity-60"
        >
          ← Back home
        </Link>

        <div className="space-y-4">

          <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-6xl">
            A selection of my work across digital products and experiences.
          </h1>

          <p className="max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            My experience spans user research, product design and the
            challenge of making complex systems easier to understand and use.
          </p>
        </div>
      </header>

      <section className="space-y-0" aria-label="Professional experience">
        {experience.map((item, index) => (
          <article
            key={item.company}
            className="grid gap-4 border-t border-foreground/10 py-8 sm:grid-cols-[180px_1fr] sm:gap-10"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground/50">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-lg font-medium text-foreground">
                {item.company}
              </h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium tracking-tight text-foreground">
                {item.role}
              </h3>

              <p className="max-w-2xl text-base leading-7 text-foreground/70">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.areas.map((area) => (
                  <span
                    key={area}
                    className="bg-foreground/5 px-3 py-2 text-xs text-foreground/70"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="border-t border-foreground/10 pt-8">
        <Link
          href="/"
          className="text-sm text-foreground/70 transition-opacity hover:opacity-60"
        >
          ← Back to home
        </Link>
      </footer>
    </div>
  );
}
