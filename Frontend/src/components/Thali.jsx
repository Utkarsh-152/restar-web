import { useState } from 'react'
import { dishes } from '../data'

export default function Thali() {
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState(0)
  const [preview, setPreview] = useState({ show: false, x: 0, y: 0 })
  const dish = dishes[active]

  return (
    <section id="menu" className="relative px-6 py-28 md:px-12">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.35em] text-ember">03 — THE THALI</p>
          <h2 className="mt-3 max-w-xl font-display text-5xl italic text-bone md:text-7xl">
            Five plates, one night.
          </h2>
        </div>
        <p className="max-w-xs font-light text-smoke">
          Hover a course — the plate on the left is the one the kitchen is holding.
        </p>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="relative overflow-hidden rounded-[2rem] border border-bone/10">
          <img
            key={dish.id}
            src={dish.image}
            alt={dish.name}
            className="menu-fade h-[420px] w-full object-cover md:h-[560px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-soot via-transparent to-transparent" />
          <div className="absolute right-7 bottom-7 left-7">
            <p className="font-mono text-[11px] tracking-[0.3em] text-ember">{dish.course}</p>
            <h3 className="mt-2 font-display text-4xl italic md:text-5xl">{dish.name}</h3>
            <p className="mt-3 max-w-sm text-smoke">{dish.note}</p>
            <p className="mt-4 font-mono text-saffron">₹{dish.price}</p>
          </div>
        </article>

        <ul className="divide-y divide-bone/10 border-y border-bone/10">
          {dishes.map((item, i) => (
            <li key={item.id}>
              <button
                type="button"
                data-cursor
                onClick={() => setActive(i)}
                onMouseEnter={() => {
                  setHover(i)
                  setActive(i)
                  setPreview((p) => ({ ...p, show: true }))
                }}
                onMouseMove={(e) => setPreview({ show: true, x: e.clientX, y: e.clientY })}
                onMouseLeave={() => setPreview((p) => ({ ...p, show: false }))}
                className={`menu-row flex w-full items-baseline justify-between gap-6 py-7 text-left transition ${
                  active === i ? 'text-bone' : 'text-smoke hover:text-bone'
                }`}
              >
                <span className="font-mono text-[11px] text-ember">{item.id}</span>
                <span className="flex-1 font-display text-3xl italic md:text-4xl">{item.name}</span>
                <span className="hidden font-mono text-sm md:inline">₹{item.price}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {preview.show && (
        <img
          src={dishes[hover].image}
          alt=""
          className="pointer-events-none fixed z-30 hidden h-52 w-40 rounded-2xl object-cover shadow-2xl md:block"
          style={{
            left: preview.x + 28,
            top: preview.y - 90,
          }}
        />
      )}
    </section>
  )
}
