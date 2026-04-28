"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 })

  useEffect(() => {
    // Disable on touch devices for performance
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (isTouch) return
    setEnabled(true)

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
        filter: "blur(20px)",
      }}
    />
  )
}
