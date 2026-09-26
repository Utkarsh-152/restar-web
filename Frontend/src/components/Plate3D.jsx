import { useRef } from 'react'

export default function Plate3D() {
  const scene = useRef(null)

  const tilt = (e) => {
    const box = scene.current.getBoundingClientRect()
    const x = (e.clientX - box.left) / box.width - 0.5
    const y = (e.clientY - box.top) / box.height - 0.5
    scene.current.style.transform = `rotateX(${-y * 16}deg) rotateY(${x * 22}deg)`
  }

  return (
    <div
      ref={scene}
      onPointerMove={tilt}
      onPointerLeave={() => {
        if (scene.current) scene.current.style.transform = 'rotateX(8deg) rotateY(-18deg)'
      }}
      className="plate-scene mx-auto"
      style={{ transform: 'rotateX(8deg) rotateY(-18deg)' }}
    >
      <div className="plate mx-auto">
        <div
          className="plate-layer"
          style={{
            background:
              'radial-gradient(circle at 40% 35%, #3a322b, #1a1612 55%, #0c0a08 78%)',
            boxShadow: '0 40px 80px #000c, inset 0 0 40px #0008',
            transform: 'translateZ(0px)',
          }}
        />
        <div
          className="plate-layer"
          style={{
            inset: '28px',
            border: '1px solid #c4843c55',
            transform: 'translateZ(12px)',
          }}
        />
        <div
          className="plate-layer"
          style={{
            inset: '58px',
            background:
              'radial-gradient(circle at 45% 40%, #5a2410, #2a1208 60%, #120806)',
            transform: 'translateZ(28px)',
            boxShadow: '0 0 40px #ff531433',
          }}
        />
        <div
          className="plate-layer"
          style={{
            inset: '108px',
            background: 'radial-gradient(circle, #e3a21a, #ff5314 70%)',
            filter: 'blur(10px)',
            transform: 'translateZ(48px)',
            opacity: 0.85,
          }}
        />
        <div
          className="plate-layer flex items-center justify-center font-mono text-[10px] tracking-[0.4em] text-bone/70"
          style={{ transform: 'translateZ(70px) rotateX(70deg)' }}
        >
          FIRE
        </div>
        {[0, 72, 144, 216, 288].map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-saffron"
            style={{
              transform: `rotateZ(${deg}deg) translateY(-148px) translateZ(40px)`,
              boxShadow: '0 0 12px #e3a21a',
            }}
          />
        ))}
      </div>
    </div>
  )
}
