
const projects = [
  {
    name: "Kinetik",
    description:
      "Trust, clarity and consistency for a growing healthcare platform",
    tag: "4 YEAR PARTNERSHIP, 4 PRODUCT ECOSYSTEM",
    image: "/projects/kinetik.jpg",
    imageAlt: "Kinetik healthcare platform",
  },
  {
    name: "Charted",
    description: "Bringing flow and clarity to financial automation",
    tag: "NEW BRAND, NEW CATEGORY POSITION",
    image: "/projects/charted.jpg",
    imageAlt: "Charted financial automation",
  },
  {
    name: "Solvd",
    description:
      "Making AI tangible for enterprises navigating transformation",
    tag: "PARTNERS SINCE 2024",
    image: "/projects/solvd.jpg",
    imageAlt: "Solvd AI enterprise transformation",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section>
      {/* Hero */}
        <h1 className="max-w-6xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          I’m a Product Designer creating solutions that extend beyond screens.
        </h1>

        <p className="mt-6 text-lg text-foreground/60 sm:text-xl">
          Projetos selecionados com foco em clareza, acessibilidade e impacto.
        </p>
      </section>

      {/* Selected projects */}
      <section
        id="projetos"
        aria-label="Projetos selecionados"
        className="grid grid-cols-1 items-start gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <article key={project.name} className="min-w-0">
            {/* Project image */}
            <div className="mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* Project title */}
            <h2 className="text-3xl font-normal tracking-tight text-foreground">
              {project.name}
            </h2>

            {/* Project description */}
            <p className="mt-2 max-w-md text-base leading-relaxed text-foreground/70">
              {project.description}
            </p>

            {/* Project label */}
            <div className="mt-5 inline-block max-w-full bg-neutral-100 px-3 py-2">
              <span className="font-mono text-xs tracking-wide text-neutral-800">
                {project.tag}
              </span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
