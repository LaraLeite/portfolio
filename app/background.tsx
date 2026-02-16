export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />

      {/* glows animados (muito subtil) */}
      <div className="bg-orb orb-1 absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-white/10 blur-[120px]" />
      <div className="bg-orb orb-2 absolute -top-60 right-[-15%] h-[620px] w-[620px] rounded-full bg-white/5 blur-[140px]" />
      <div className="bg-orb orb-3 absolute bottom-[-40%] left-[20%] h-[720px] w-[720px] rounded-full bg-white/5 blur-[160px]" />

      {/* noise subtil */}
      <div className="noise absolute inset-0 opacity-[0.06]" />
      <div className="noise noise-anim absolute inset-0 opacity-[0.04]" />
    </div>
  );
}

