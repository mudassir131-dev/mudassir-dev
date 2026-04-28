"use client"

import { motion } from "framer-motion"
import { Frame, Film, Sparkles, BarChart3 } from "lucide-react"

const services = [
  {
    n: "01",
    title: "Luxury Poster Design",
    desc: "High-end advertising visuals for food, fashion, and product brands.",
    icon: Frame,
  },
  {
    n: "02",
    title: "Cinematic Video Editing",
    desc: "Smooth, premium edits with strong storytelling and refined pacing.",
    icon: Film,
  },
  {
    n: "03",
    title: "Brand Visual Identity",
    desc: "Clean, minimal, high-value branding that communicates authority.",
    icon: Sparkles,
  },
  {
    n: "04",
    title: "Social Media Visual Strategy",
    desc: "Designs optimized for engagement, retention, and conversion.",
    icon: BarChart3,
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-7">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Capabilities · 002
              </span>
            </div>
            <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-balance md:text-7xl">
              Creative
              <span className="italic text-gold"> Services</span>.
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-5 md:ml-auto md:text-right">
            A focused, end-to-end discipline — from first concept to final cinematic delivery.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-border/60 md:mt-24 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-[auto_1fr] gap-6 border-b border-border/60 px-2 py-10 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:pr-12 md:[&:nth-child(even)]:pl-12 md:py-14"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 origin-bottom scale-y-0 bg-gradient-to-t from-charcoal to-transparent opacity-0 transition-all duration-700 group-hover:scale-y-100 group-hover:opacity-100"
              />
              <div className="flex flex-col items-start gap-6">
                <span className="font-mono text-xs text-gold">— {s.n}</span>
                <s.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-foreground transition-transform duration-700 group-hover:rotate-[-8deg] group-hover:text-gold"
                  strokeWidth={1.2}
                />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-light leading-tight text-foreground transition-colors duration-500 group-hover:text-gold md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.desc}
                </p>
                <div className="mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                  <span className="h-px w-8 bg-current" />
                  <span>Engage</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
