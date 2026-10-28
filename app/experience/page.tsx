
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
    areas: ["UX Design", "Accessibility", "Design Systems"],
  },
  {
    company: "Loggi",
    role: "Mid-level Product Designer",
    description:
      "Designing internal platform experiences for logistics operations, helping teams understand delivery routes, distances, delays and driver-related challenges.",
    topics: [
      "User Research & Discovery",
      "Product Design",
      "Interaction Design",
      "Usability & Accessibility",
      "Information Architecture",
      "Data-informed Design",
      "Cross-functional Collaboration",
    ],
    areas: [
      "Product Design",
      "Internal Platforms",
      "Logistics",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Experience
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/60">
          A selection of my professional experience, the teams I have worked
          with and the areas I have contributed to.
        </p>
      </section>

      <section aria-label="Professional experience" className="space-y-16">
        {experience.map((item) => (
          <article
            key={item.company}
            className="border-t border-foreground/10 pt-8"
          >
            <div className="space-y-3">
              <p className="text-sm tracking-wide text-foreground/50">
                {item.company}
              </p>

              <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {item.role}
              </h2>

              <p className="max-w-2xl text-base leading-7 text-foreground/60">
                {item.description}
              </p>
            </div>

            {/* Topics */}
            <div className="mt-6 border-t border-foreground/10">
              {item.topics.map((topic) => (
                <div
                  key={topic}
                  className="border-b border-foreground/10 py-3 text-base text-foreground sm:text-lg"
                >
                  {topic}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {item.areas.map((area) => (
                <span
                  key={area}
                  className="text-xs tracking-widest text-foreground/50 uppercase"
                >
                  {area}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}


