export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-bone/10 shadow-[0_40px_80px_#0008]">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
          alt="Charred kingfish at Soot"
          className="hero-ken h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soot via-soot/10 to-transparent" />
        <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between">
          <p className="font-mono text-[10px] tracking-[0.32em] text-bone/80">LIVE COAL · TONIGHT</p>
          <span className="h-2 w-2 animate-pulse rounded-full bg-ember shadow-[0_0_12px_#ff5314]" />
        </div>
      </div>

      <figure className="absolute -left-6 bottom-20 hidden w-32 overflow-hidden rounded-2xl border border-bone/15 shadow-2xl md:block">
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80"
          alt="Opening plate"
          className="h-40 w-full object-cover"
        />
      </figure>

      <figure className="absolute -right-5 top-12 hidden h-28 w-28 overflow-hidden rounded-full border-4 border-soot shadow-[0_0_40px_#ff531433] md:block">
        <img
          src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80"
          alt="Malai fig"
          className="h-full w-full object-cover"
        />
      </figure>
    </div>
  )
}
