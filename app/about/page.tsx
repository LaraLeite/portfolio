export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold sm:text-4xl">About</h1>

      <p className="max-w-2xl text-zinc-300">
        Sou UX Designer ✨ em Lisboa. Gosto de transformar complexidade em fluxos claros,
        com foco em consistência, acessibilidade e decisões baseadas em evidência.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h2 className="text-lg font-semibold">O que faço</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            <li>Discovery e research (entrevistas, testes, síntese)</li>
            <li>Arquitetura de informação e fluxos</li>
            <li>UI, prototipagem e handoff</li>
            <li>Design systems e acessibilidade</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <h2 className="text-lg font-semibold">Contacto</h2>
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <p>📍 Lisboa</p>
            <p>
              <a className="text-zinc-200 hover:underline" href="mailto:teuemail@exemplo.com">
                teuemail@exemplo.com
              </a>
            </p>
            <p>
              <a className="text-zinc-200 hover:underline" href="#">
                LinkedIn
              </a>{" "}
              ·{" "}
              <a className="text-zinc-200 hover:underline" href="#">
                Behance/Dribbble
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
