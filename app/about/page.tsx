
export default function About() {
  return (
    <div className="space-y-10">
      {/* About introduction */}
      <section>
        <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          About
        </h1>

        <p className="mt-8 max-w-5xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
          I’m a Digital Product Designer based in Braga, Portugal,
          passionate about turning complexity into clear, accessible,
          and intuitive experiences. With 10 years of experience in tech,
          I currently work as a UX Designer at Instituto de Informática,
          focusing on usability, accessibility, and Design Systems.
        </p>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-foreground/70">
          <span className="uppercase tracking-widest">
            Links:
          </span>

          <a
            href="https://twitter.com/TEU_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            Twitter / X ↗
          </a>

          <a
            href="https://codepen.io/TEU_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            CodePen ↗
          </a>
        </div>
      </section>
    </div>
  );
}

