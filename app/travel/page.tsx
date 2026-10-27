
const trips = [
  {
    title: "Lisboa → Porto",
    desc: "Café, museus e ruas bonitas.",
    meta: "2026 · 8 fotos",
    image: "/travel/lisboa-porto.jpg",
    imageAlt: "Viagem de Lisboa ao Porto",
  },
  {
    title: "Guimarães",
    desc: "Arquitetura, história e passeios lentos.",
    meta: "2026 · 12 fotos",
    image: "/travel/guimaraes.jpg",
    imageAlt: "Ruas e arquitetura de Guimarães",
  },
  {
    title: "Próxima viagem",
    desc: "Ideias e listas: hotspots, comida e trilhos.",
    meta: "Em planeamento",
    image: "/travel/proxima-viagem.jpg",
    imageAlt: "Inspiração para a próxima viagem",
  },
];

export default function Travel() {
  return (
    <div className="space-y-12">
      {/* Page introduction */}
      <section>
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Travel
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
          A little further from the familiar.
        </p>
      </section>

      {/* Travel list */}
      <section
        aria-label="Viagens"
        className="space-y-12"
      >
        {trips.map((trip) => (
          <article key={trip.title} className="min-w-0">
            {/* Travel image */}
            <div className="mb-5 aspect-[16/9] overflow-hidden rounded-2xl bg-foreground/5">
              <img
                src={trip.image}
                alt={trip.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* Information below the image */}
            <div className="space-y-2">
              <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {trip.title}
              </h2>

              <p className="text-base leading-relaxed text-foreground/70">
                {trip.desc}
              </p>

              <p className="text-xs tracking-wide text-foreground/50">
                {trip.meta}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
