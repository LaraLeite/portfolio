function Card({
  title,
  desc,
  meta,
}: {
  title: string;
  desc: string;
  meta: string;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      <p className="mt-3 text-xs text-zinc-400">{meta}</p>
      <a className="mt-4 inline-block text-sm text-zinc-200 hover:underline" href="#">
        Ver caso
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">
          UX Designer a desenhar produtos simples e humanos.
        </h1>
        <p className="max-w-2xl text-pretty text-zinc-300">
          Projetos selecionados com foco em clareza, acessibilidade e impacto.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projetos"
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
          >
            Ver projetos
          </a>
          <a
            href="/about"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5"
          >
            Sobre mim
          </a>
        </div>
      </section>

      <section id="projetos" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Projeto 01"
          desc="Problema → abordagem → impacto (2–3 linhas)."
          meta="Research · UX · Prototipagem"
        />
        <Card
          title="Projeto 02"
          desc="Problema → abordagem → impacto (2–3 linhas)."
          meta="Design System · Acessibilidade"
        />
        <Card
          title="Projeto 03"
          desc="Problema → abordagem → impacto (2–3 linhas)."
          meta="Produto · Métricas · Iteração"
        />
      </section>
    </div>
  );
}
