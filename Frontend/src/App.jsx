import { useEffect, useState } from 'react'
import Cursor from './components/Cursor'
import Plate3D from './components/Plate3D'
import Thali from './components/Thali'
import { flavors, portals, rooms } from './data'

const nav = [
  { href: '#story', label: 'House' },
  { href: '#menu', label: 'Thali' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#portals', label: 'Portals' },
  { href: '#reserve', label: 'Reserve' },
]

export default function App() {
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const [slot, setSlot] = useState('20:00')

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? window.scrollY / h : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const book = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    setNotice(
      `Held for ${form.get('name')} — ${form.get('date')} at ${slot}. The house will confirm by dusk.`,
    )
    e.target.reset()
  }

  return (
    <div className="relative min-h-screen bg-soot text-bone">
      <div className="grain" />
      <Cursor />

      <div className="pointer-events-none fixed top-0 left-6 z-50 hidden h-screen w-px bg-bone/10 md:block">
        <div
          className="flame-bar absolute bottom-0 left-1/2 w-2 -translate-x-1/2 rounded-full bg-gradient-to-t from-ember via-saffron to-transparent"
          style={{ height: `${Math.max(8, progress * 100)}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="font-display text-2xl italic tracking-wide">
          Soot.
        </a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.28em] uppercase text-smoke md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ember">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#reserve"
          className="hidden rounded-full bg-bone px-5 py-2 font-mono text-[11px] tracking-[0.2em] text-soot uppercase md:inline-flex"
        >
          A table
        </a>
        <button
          type="button"
          className="rounded-full border border-bone/20 px-4 py-2 font-mono text-[11px] uppercase md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 flex flex-col justify-end bg-soot/95 p-8 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-bone/10 py-5 font-display text-4xl italic"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <main id="top">
        <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 md:px-12 md:pt-32">
          <div className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-ember/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-saffron/10 blur-[90px]" />

          <div className="flex items-start justify-between font-mono text-[11px] tracking-[0.35em] text-smoke">
            <span>01 — CHARCOAL KITCHEN</span>
            <span className="hidden md:block">LODHI · NEW DELHI</span>
          </div>

          <div className="relative mt-8 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="reveal max-w-md text-lg font-light text-smoke">
                Open when the city exhales. A fire-led kitchen where Indian memory meets
                tasting-menu patience.
              </p>
              <h1 className="reveal mt-4 font-display text-[22vw] leading-[0.78] italic lg:text-[12rem]">
                Soot
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a
                  href="#menu"
                  className="rounded-full border border-ember bg-ember px-6 py-3 font-mono text-[11px] tracking-[0.22em] text-soot uppercase"
                >
                  Taste the night
                </a>
                <p className="font-mono text-[11px] tracking-[0.2em] text-smoke">
                  DINNER · 19:00—00:30
                </p>
              </div>
            </div>
            <Plate3D />
          </div>
        </section>

        <div className="overflow-hidden border-y border-bone/10 bg-ash py-4">
          <div className="marquee-track font-mono text-[12px] tracking-[0.4em] text-saffron">
            {[...flavors, ...flavors].map((item, i) => (
              <span key={`${item}-${i}`}>{item} ✦</span>
            ))}
          </div>
        </div>

        <section id="story" className="grid gap-12 px-6 py-28 md:px-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[11px] tracking-[0.35em] text-ember">02 — THE HOUSE</p>
            <h2 className="mt-4 font-display text-5xl italic md:text-7xl">
              Built around a pit, not a pass.
            </h2>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-smoke">
              Soot is a 50-cover kitchen in a restored Lodhi warehouse. We cook on live coal —
              no hidden gas, no garnish theatre. The plate is the fire, cooled just enough to
              hold.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-bone/10 pt-8 font-mono text-[11px] tracking-[0.18em] uppercase">
              <div>
                <dt className="text-smoke">Est.</dt>
                <dd className="mt-2 text-2xl text-bone">2019</dd>
              </div>
              <div>
                <dt className="text-smoke">Covers</dt>
                <dd className="mt-2 text-2xl text-bone">50</dd>
              </div>
              <div>
                <dt className="text-smoke">Fire</dt>
                <dd className="mt-2 text-2xl text-bone">Live</dd>
              </div>
            </dl>
          </div>
          <div className="relative min-h-[70vh] overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
              alt="Soot dining room"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soot via-transparent to-transparent" />
            <p className="absolute bottom-8 left-8 max-w-xs font-display text-3xl italic">
              The room smells of ghee and monsoon brick.
            </p>
          </div>
        </section>

        <Thali />

        <section id="rooms" className="px-6 py-24 md:px-12">
          <p className="font-mono text-[11px] tracking-[0.35em] text-ember">04 — ROOMS</p>
          <h2 className="mt-3 max-w-2xl font-display text-5xl italic md:text-7xl">
            Three atmospheres. One kitchen.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {rooms.map((room, i) => (
              <article
                key={room.title}
                data-cursor
                className="group relative min-h-[380px] overflow-hidden rounded-[1.6rem] border border-bone/10 bg-ash p-8 transition duration-500 hover:-translate-y-2 hover:border-ember/40"
              >
                <span className="font-mono text-ember">0{i + 1}</span>
                <h3 className="mt-16 font-display text-4xl italic">{room.title}</h3>
                <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-saffron">
                  {room.seats}
                </p>
                <p className="mt-6 font-light leading-relaxed text-smoke">{room.copy}</p>
                <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-ember/0 blur-3xl transition group-hover:bg-ember/30" />
              </article>
            ))}
          </div>
        </section>

        <section className="relative mx-6 overflow-hidden rounded-[2rem] md:mx-12">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80"
            alt="Plated course"
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
          <div className="absolute inset-0 bg-soot/55" />
          <blockquote className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <p className="max-w-3xl font-display text-4xl italic md:text-6xl">
              “We do not plate India. We burn it slowly until it tells the truth.”
            </p>
          </blockquote>
        </section>

        <section id="portals" className="px-6 py-28 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] tracking-[0.35em] text-ember">05 — PORTALS</p>
              <h2 className="mt-3 font-display text-5xl italic md:text-7xl">How the fire travels.</h2>
            </div>
            <p className="max-w-sm font-light text-smoke">
              Dining is live. Delivery rails are designed, not yet lit — so the same kitchen can
              hold its standard when we leave the building.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {portals.map((portal) => (
              <article
                key={portal.name}
                className="relative overflow-hidden rounded-[1.6rem] border border-bone/10 p-8"
              >
                {portal.status === 'soon' && (
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,#ff531408_12px,#ff531408_24px)]" />
                )}
                <div className="relative">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase ${
                      portal.status === 'open'
                        ? 'bg-ember text-soot'
                        : 'border border-saffron/40 text-saffron'
                    }`}
                  >
                    {portal.tag}
                  </span>
                  <h3 className="mt-8 font-display text-4xl italic">{portal.name}</h3>
                  <p className="mt-4 font-light text-smoke">{portal.copy}</p>
                  <a
                    href={portal.href}
                    className="mt-8 inline-flex rounded-full border border-bone/20 px-5 py-2 font-mono text-[11px] tracking-[0.2em] uppercase hover:border-ember"
                  >
                    {portal.action}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="reserve"
          className="mx-6 mb-20 grid overflow-hidden rounded-[2rem] border border-bone/10 md:mx-12 lg:grid-cols-2"
        >
          <div className="bg-ash p-8 md:p-12">
            <p className="font-mono text-[11px] tracking-[0.35em] text-ember">06 — HOLD A COVER</p>
            <h2 className="mt-4 font-display text-5xl italic">Sit with the fire.</h2>
            <form onSubmit={book} className="mt-10 grid gap-5">
              <label className="grid gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-smoke">
                Name
                <input
                  required
                  name="name"
                  className="rounded-xl border border-bone/15 bg-soot px-4 py-3 font-sans text-base tracking-normal text-bone outline-none focus:border-ember"
                />
              </label>
              <label className="grid gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-smoke">
                Date
                <input
                  required
                  type="date"
                  name="date"
                  className="rounded-xl border border-bone/15 bg-soot px-4 py-3 font-sans text-base tracking-normal text-bone outline-none focus:border-ember"
                />
              </label>
              <fieldset>
                <legend className="font-mono text-[11px] tracking-[0.2em] uppercase text-smoke">
                  Hour
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['19:00', '20:00', '21:30', '23:00'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSlot(time)}
                      className={`rounded-full px-4 py-2 font-mono text-[11px] ${
                        slot === time ? 'bg-ember text-soot' : 'border border-bone/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </fieldset>
              <label className="grid gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-smoke">
                Portal waitlist
                <select
                  name="portal"
                  className="rounded-xl border border-bone/15 bg-soot px-4 py-3 font-sans text-base tracking-normal text-bone outline-none focus:border-ember"
                >
                  <option>Dining only</option>
                  <option>Soot Direct (soon)</option>
                  <option>Swiggy / Zomato (soon)</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-bone py-4 font-mono text-[12px] tracking-[0.28em] text-soot uppercase"
              >
                Request the table
              </button>
              {notice && <p className="text-saffron">{notice}</p>}
            </form>
          </div>
          <div className="relative min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
              alt="Night service"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-soot via-soot/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-mono text-[11px] tracking-[0.3em] text-ember">ADDRESS</p>
              <p className="mt-2 font-display text-3xl italic">
                14 Khanna Market Lane
                <br />
                Lodhi, New Delhi 110003
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-6 border-t border-bone/10 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="font-display text-3xl italic">Soot.</p>
        <p className="font-mono text-[11px] tracking-[0.2em] text-smoke">
          © 2026 SOOT KITCHEN · FIRE, NOT THEATRE
        </p>
        <p className="font-mono text-[11px] tracking-[0.2em] text-smoke">RESERVE@SOOT.KITCHEN</p>
      </footer>
    </div>
  )
}
