
import Link from "next/link";

const expertise = [
  "Payment Systems & Financial Operations: Worked as a Product/UX Designer on complex payment experiences, including payment channels, homebanking, international transfers and direct debits, translating business rules and technical constraints into clear user flows and interfaces.",
  "Digital Document Wallet: Worked as a Product Designer & UX Researcher from discovery to delivery, covering research, international benchmarking, concept development, document management flows, prototyping, usability testing and development handoff.",
  "Explored as a UX Designer how intelligent automation could simplify document identification and categorisation while maintaining transparency, trust and user control.",
  "Design System: Scalable & Consistent Experiences: Contributed as a Product Designer by applying and validating components across projects, identifying gaps and collaborating on new reusable patterns and component needs.",
  "Design System: How AI could support smarter Design Systems, component creation, documentation, prototyping and more contextual guidance for designers.",
  "Bilateral Agreements | Complex Public Services: Translating complex international processes, legislation, business rules and operational requirements into clearer digital journeys.",
  "Accessibility & UX Writing | Inclusive Experiences: Integrating accessibility, terminology, microcopy, error handling, system feedback and inclusive interaction patterns into complex public services.",
  "Institutional Management & Complex Administrative Processes: Processes involving IPSS and Mutual Associations, translating administrative and business requirements into end-to-end digital journeys, from UX planning and user flows to prototyping, handoff and post-development UX review"
];

const experience = [
  {
    company: "Instituto de Informática",
    role: "UX Designer",
    description:
      "Working on usability, accessibility and Design Systems to create clearer, more consistent digital experiences.",
    topics: [
      "User Research & Discovery",
      "Product Design",
      "Interaction Design",
      "Usability & Accessibility",
      "Design Systems",
      "Information Architecture",
      "Cross-functional Collaboration",
    ],
    highlights: ["UX Design", "Accessibility", "Design Systems"],
  },
  {
    company: "Loggi",
    role: "Mid-level Product Designer",
    description:
      "Designing internal platforms for transport operations, exploring user needs and opportunities to improve route management and operational workflows.",
    topics: [
      "User Research & Discovery",
      "Route Planning & Optimization",
      "Operational Workflows",
      "Usability & Accessibility",
      "Information Architecture",
      "Data-informed Design",
      "Cross-functional Collaboration",
    ],
    highlights: ["Product Design", "Internal Platforms", "Logistics"],
  },
  {
    company: "Kinetik",
    role: "Product Design",
    description:
      "A healthcare product ecosystem focused on clarity, consistency and usability across multiple digital products.",
    topics: [
      "Product Design",
      "User Experience",
      "Interaction Design",
      "Usability & Accessibility",
      "Design Systems",
      "Information Architecture",
      "Cross-functional Collaboration",
    ],
    highlights: ["Healthcare", "Product Experience", "Consistency"],
  },
  {
    company: "Charted",
    role: "Product Design",
    description:
      "Exploring ways to make financial automation and complex workflows easier to understand and navigate.",
    topics: [
      "Product Design",
      "User Research & Discovery",
      "Interaction Design",
      "Workflow Design",
      "Information Architecture",
      "Usability",
      "Cross-functional Collaboration",
    ],
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
    topics: [
      "Product Design",
      "User Research & Discovery",
      "AI Experiences",
      "Interaction Design",
      "Usability & Accessibility",
      "Information Architecture",
      "Cross-functional Collaboration",
    ],
    highlights: [
      "Artificial Intelligence",
      "Enterprise Products",
      "Digital Experiences",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      {/* Introduction */}
      <header className="space-y-5">
        <Link
          href="/"
          className="inline-block text-sm text-foreground/50 transition-opacity hover:opacity-60"
        >
          ← Back home
        </Link>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            Background & Experience
          </p>

          <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-6xl">
            Where I’ve contributed and what I’ve worked on.
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-foreground/60">
            An overview of my contributions across different teams and products.
          </p>
        </div>
      </header>

      {/* Professional experience */}
      <section className="space-y-8">
    

        <div className="border-t border-foreground/10">
          {experience.map((item, index) => (
            <article
              key={item.company}
              className="grid gap-4 border-b border-foreground/10 py-7 sm:grid-cols-[200px_1fr] sm:gap-10 sm:py-8"
            >
              {/* Company */}
              <div className="space-y-2">
                <p className="text-xs tracking-widest text-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.company}
                </h3>
              </div>

              {/* Role and details */}
              <div className="space-y-4">
                <h4 className="text-base font-medium text-foreground/80 sm:text-lg">
                  {item.role}
                </h4>

                <p className="max-w-2xl text-base leading-7 text-foreground/60">
                  {item.description}
                </p>

                {/* Topics below the description */}
                <div className="border-t border-foreground/10">
                  {item.topics.map((topic) => (
                    <div
                      key={topic}
                      className="border-b border-foreground/10 py-3 text-base text-foreground sm:text-lg"
                    >
                      {topic}
                    </div>
                  ))}
                </div>

                {/* Existing tags */}
                <div className="flex flex-wrap gap-x-4 gap-y-2">
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

      {/* Footer */}
      <footer className="border-t border-foreground/10 pt-6">
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


