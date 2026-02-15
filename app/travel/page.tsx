function TravelCard({
  title,
  desc,
  meta,
}: {
  title: string;
  desc: string;
  meta: string;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      <p className="mt-3 text-xs text-zinc-400">{meta}</p>
      <a className="mt-4 inline-block text-sm text-zinc-200 hover:underline" href="#">
        Ver
      </a>
    </article>
  );
}

export default function Travel() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold sm:text-4xl">Travel</h1>
      <p className="max-w-2xl text-zinc-300">
        Uma coleção de viagens, fotos e notas (podes ir alimentando quando te apetecer).
      </p>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TravelCard title="Lisboa → Porto" desc="Café, museus e ruas bonitas." meta="2026 · 8 fotos" />
        <TravelCard title="Guimarães" desc="Arquitetura, história e passeios lentos." meta="2026 · 12 fotos" />
        <TravelCard title="Próxima viagem" desc="Ideias e listas: hotspots, comida, trilhos." meta="Em planeamento" />
      </section>
    </div>
  );
}
