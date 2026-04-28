"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const showcase = [
  {
    title: "Aureum Campaign",
    sub: "Cinematic Brand Film",
    image: "/portfolio/showcase-1.jpg",
    n: "01",
  },
  {
    title: "Maison Noir",
    sub: "Editorial Direction",
    image: "/portfolio/showcase-2.jpg",
    n: "02",
  },
  {
    title: "Heritage Atelier",
    sub: "Visual Identity",
    image: "/portfolio/showcase-3.jpg",
    n: "03",
  },
  {
    title: "Smoke & Sear",
    sub: "Food Direction",
    image: "/portfolio/food-poster-1.jpg",
    n: "04",
  },
]

export function FeaturedShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Translate horizontally based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"])

  return (
    <section
      ref={containerRef}
      aria-label="Featured Showcase"
      className="relative bg-ink"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header */}
        <div className="mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-6 pt-24 md:px-10 md:pt-28">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Featured · Cinematic
              </span>
            </div>
            <h2 className="font-serif text-4xl font-light leading-tight md:text-6xl">
              Studies in <span className="italic text-gold">light</span>.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">
            Scroll to traverse a selection of recent direction work.
          </p>
        </div>

        {/* Horizontal track */}
        <div className="relative mt-12 flex flex-1 items-center md:mt-16">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex flex-nowrap gap-6 pl-6 pr-[40vw] md:gap-10 md:pl-10"
          >
            {showcase.map((item, i) => (
              <motion.figure
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-[60vh] w-[78vw] shrink-0 overflow-hidden bg-charcoal md:h-[70vh] md:w-[55vw]"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} — ${item.sub}`}
                  fill
                  sizes="(min-width: 768px) 55vw, 78vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, color-mix(in oklab, var(--ink) 85%, transparent) 100%)",
                  }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-10">
                  <div>
                    <p className="font-mono text-xs text-gold">— {item.n}</p>
                    <h3 className="mt-2 font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                      {item.sub}
                    </p>
                  </div>
                  <span className="hidden font-mono text-xs text-muted-foreground md:block">
                    0{i + 1} / 0{showcase.length}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          {/* Edge fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40"
            style={{
              background:
                "linear-gradient(to left, var(--ink), transparent)",
            }}
          />
        </div>

        {/* Progress bar */}
        <div className="mx-auto mt-8 mb-10 w-full max-w-7xl px-6 md:px-10">
          <div className="relative h-px w-full bg-border/60">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
              className="absolute inset-y-0 left-0 h-px w-full bg-gold"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
