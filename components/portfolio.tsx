"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Item = {
  id: string
  title: string
  category: "Food Posters" | "Fashion Edits" | "Product Ads"
  image: string
  year: string
}

const items: Item[] = [
  {
    id: "f1",
    title: "Smoke & Sear",
    category: "Food Posters",
    image: "/portfolio/food-poster-1.jpg",
    year: "2025",
  },
  {
    id: "fa1",
    title: "Noir Atelier",
    category: "Fashion Edits",
    image: "/portfolio/fashion-1.jpg",
    year: "2025",
  },
  {
    id: "p1",
    title: "Aureum No. 7",
    category: "Product Ads",
    image: "/portfolio/product-1.jpg",
    year: "2024",
  },
  {
    id: "f2",
    title: "Golden Course",
    category: "Food Posters",
    image: "/portfolio/food-poster-2.jpg",
    year: "2025",
  },
  {
    id: "fa2",
    title: "Silhouette",
    category: "Fashion Edits",
    image: "/portfolio/fashion-2.jpg",
    year: "2024",
  },
  {
    id: "p2",
    title: "Hour of Gold",
    category: "Product Ads",
    image: "/portfolio/product-2.jpg",
    year: "2025",
  },
]

const categories = ["All", "Food Posters", "Fashion Edits", "Product Ads"] as const

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All")
  const [active, setActive] = useState<Item | null>(null)

  const visible = filter === "All" ? items : items.filter((i) => i.category === filter)

  return (
    <section id="work" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div className="mb-14 grid grid-cols-12 items-end gap-6 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Selected Work · 001 / 006
              </span>
            </div>
            <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-balance md:text-7xl">
              A study in
              <span className="italic text-gold"> precision</span>
              <br className="hidden md:block" /> and presence.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:ml-auto md:text-right">
              An evolving archive of cinematic posters, fashion editorials, and product campaigns — each piece engineered to feel inevitable.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center gap-2 border-y border-border/60 py-4 md:mb-16">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={cn(
                "relative rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.3em] transition-colors duration-300",
                filter === c
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 280, damping: 30 }}
                />
              )}
              {c}
            </button>
          ))}
          <span className="ml-auto hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
            {visible.length} Projects
          </span>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, idx) => (
              <motion.button
                key={item.id}
                layout
                type="button"
                onClick={() => setActive(item)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.title} — ${item.category}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.06]"
                    priority={idx < 3}
                  />
                  {/* Gradient overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--ink) 85%, transparent) 100%)",
                    }}
                  />
                  {/* Gold glow ring on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:opacity-100 group-hover:ring-gold/40"
                  />
                  {/* View label */}
                  <div className="absolute bottom-5 right-5 flex translate-y-2 items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span>View</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="flex items-baseline justify-between pt-5">
                  <div>
                    <h3 className="font-serif text-xl text-foreground transition-colors duration-300 group-hover:text-gold md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-ink/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-0 overflow-hidden border border-border/60 bg-background md:grid-cols-[1.4fr_1fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/5] md:aspect-auto">
                <Image
                  src={active.image || "/placeholder.svg"}
                  alt={active.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex flex-col justify-between gap-10 p-8 md:p-12">
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-gold">{active.category}</p>
                  <h3 className="font-serif text-4xl font-light leading-tight md:text-5xl">{active.title}</h3>
                  <div className="my-8 h-px w-12 bg-gold" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    A bespoke composition built for {active.category.toLowerCase()} — directed lighting,
                    intentional negative space, and a refined palette that elevates the subject from
                    photograph to statement.
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-y-5 border-t border-border/60 pt-8 text-xs">
                  <dt className="uppercase tracking-[0.28em] text-muted-foreground">Year</dt>
                  <dd className="font-mono text-foreground">{active.year}</dd>
                  <dt className="uppercase tracking-[0.28em] text-muted-foreground">Discipline</dt>
                  <dd className="text-foreground">Direction · Design</dd>
                  <dt className="uppercase tracking-[0.28em] text-muted-foreground">Studio</dt>
                  <dd className="text-foreground">PIXELFORGEE</dd>
                </dl>
              </div>

              <button
                type="button"
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center border border-border/60 bg-background/60 text-foreground backdrop-blur transition-colors hover:border-gold hover:text-gold"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
