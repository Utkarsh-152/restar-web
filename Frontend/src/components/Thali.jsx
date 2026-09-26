import { useState } from 'react'
import { dishes } from '../data'

export default function Thali() {
  const [angle, setAngle] = useState(0)
  const step = 360 / dishes.length

  return (
    <section id="menu" className="relative overflow-x-clip px-6 py-28 md:px-12">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.35em] text-ember">03 — THE THALI</p>
          <h2 className="mt-3 max-w-xl font-display text-5xl italic text-bone md:text-7xl">
            Spin the fire. Five plates, one night.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-cursor
            onClick={() => setAngle((a) => a + step)}
            className="rounded-full border border-bone/20 px-5 py-3 font-mono text-[11px] tracking-[0.2em] uppercase transition hover:border-ember hover:text-ember"
          >
            Rotate
          </button>
          <p className="max-w-xs font-light text-smoke">
            Drag nothing. The kitchen turns. Click rotate to see the next course on the coal ring.
          </p>
        </div>
      </div>

      <div className="thali hidden py-10 md:block">
        <div
          className="thali-ring"
          style={{ transform: `rotateX(16deg) rotateY(${angle}deg)` }}
        >
          <div className="absolute inset-[18%] rounded-full border border-copper/30" />
          <div className="absolute inset-[32%] rounded-full bg-gradient-to-br from-ash to-soot shadow-[0_0_80px_#ff531422]" />
          {dishes.map((dish, i) => (
            <article
              key={dish.id}
              className="thali-card overflow-hidden rounded-2xl border border-bone/10 bg-ash/90 shadow-2xl"
              style={{
                transform: `rotateY(${i * step}deg) translateZ(250px)`,
              }}
            >
              <img src={dish.image} alt={dish.name} className="h-36 w-full object-cover" />
              <div className="p-4">
                <p className="font-mono text-[10px] tracking-[0.25em] text-ember">{dish.course}</p>
                <h3 className="mt-1 font-display text-2xl italic">{dish.name}</h3>
                <p className="mt-2 text-sm text-smoke">{dish.note}</p>
                <p className="mt-3 font-mono text-sm text-saffron">₹{dish.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ul className="mx-auto mt-8 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/5 md:grid-cols-5">
        {dishes.map((dish, i) => (
          <li key={dish.id}>
            <button
              type="button"
              data-cursor
              onClick={() => setAngle(-i * step)}
              className="w-full px-4 py-5 text-left transition hover:bg-ember/10"
            >
              <span className="font-mono text-[10px] text-ember">{dish.id}</span>
              <p className="font-display text-xl italic">{dish.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
