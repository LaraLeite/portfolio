
const trips = [
    {
    title: "Taiwan",
    desc: "Tainan, Taiwan - Oct, 2026",
    meta: "Tainan, Taiwan - Oct, 2026",
    image: "/travel/taiwan-2026-oct.jpg",
    imageAlt: "Ruas e arquitetura de Guimarães",
  },
  {
    title: "Iran",
    desc: "Kerman, Iran - Oct, 2018",
    meta: "Kerman, Iran - Oct, 2018",
    image: "/travel/iran-oct-2018.jpg",
    imageAlt: "Kerman, Iran - Oct, 2018",
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
            <div>
              <p className="text-base leading-relaxed text-foreground/70">
                {trip.desc}
              </p>
            </div>

          </article>
        ))}
      </section>
    </div>
  );
}
