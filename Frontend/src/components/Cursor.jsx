import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined
    const el = ref.current
    const move = (e) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }
    const over = (e) => {
      const interactive = e.target.closest('a, button, input, select, textarea, [data-cursor]')
      el.classList.toggle('hovering', Boolean(interactive))
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [])

  return <div ref={ref} className="ember-cursor hidden md:block" />
}
