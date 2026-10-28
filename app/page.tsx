

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white flex items-center justify-center px-6">
      <section className="w-full max-w-xl">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs tracking-[0.2em] text-neutral-400">
            SERVER STATUS
          </p>
          <span className="text-xs text-amber-400">
            SERVICE UNAVAILABLE
          </span>
        </div>

        <div className="border-t border-neutral-800 pt-10">
          <h1 className="text-7xl md:text-8xl font-medium tracking-tight mb-5">
            503
          </h1>

          <h2 className="text-xl md:text-2xl mb-4">
            Service Temporarily Unavailable
          </h2>

          <p className="text-neutral-400 leading-relaxed">
            The server is temporarily unable to handle this
            request. This may be due to maintenance or a
            temporary overload. Please try again later.
          </p>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-5">
          <p className="text-xs tracking-wider text-neutral-500">
            HTTP ERROR 503 · PLEASE TRY AGAIN LATER
          </p>
        </div>
      </section>
    </main>
  );
}

