"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowDownRight } from "lucide-react"

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2])

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-background pb-16 pt-32 md:pb-24"
    >
      {/* Ambient light */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{
          backgroundPosition: ["20% 30%", "30% 50%", "20% 30%"],
        }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 20% 30%, color-mix(in oklab, var(--gold) 18%, transparent) 0%, transparent 60%), radial-gradient(40% 50% at 80% 70%, color-mix(in oklab, var(--gold) 10%, transparent) 0%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />
      {/* Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, color-mix(in oklab, var(--ink) 80%, transparent) 100%)",
        }}
      />
      {/* Grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Grain */}
      <div className="grain absolute inset-0 -z-10" />

      <motion.div
        style={{ y, opacity }}
        className="mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-12 gap-y-10"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="col-span-12 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Luxury Visual Studio · Est. Kashmir
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="col-span-12 font-serif text-[clamp(3.5rem,12vw,12rem)] font-light leading-[0.95] tracking-[-0.02em] text-balance"
          >
            <span className="block">PIXEL</span>
            <span className="block italic text-gold">FORGEE</span>
          </motion.h1>

          {/* Subline + meta */}
          <motion.div variants={fadeUp} className="col-span-12 mt-6 grid grid-cols-12 gap-6 md:mt-10">
            <p className="col-span-12 font-serif text-2xl leading-snug text-foreground md:col-span-7 md:text-3xl">
              Crafting Luxury Visual Experiences.
            </p>
            <p className="col-span-12 max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-5 md:ml-auto md:text-right">
              Where ideas are transformed into cinematic, high-end visuals that command attention and elevate brands.
            </p>
          </motion.div>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            className="col-span-12 mt-12 flex flex-col items-start justify-between gap-8 border-t border-border/60 pt-8 md:mt-16 md:flex-row md:items-end"
          >
            <a
              href="#work"
              className="group relative inline-flex items-center gap-4 overflow-hidden border border-gold/60 bg-transparent px-8 py-4 text-[11px] uppercase tracking-[0.36em] text-foreground transition-colors duration-500 hover:text-primary-foreground"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
              <span className="relative">View Portfolio</span>
              <ArrowDownRight className="relative h-4 w-4 transition-transform duration-500 group-hover:rotate-[-45deg]" />
            </a>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-gold" />
                <span>Posters</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-gold" />
                <span>Cinematic Edits</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-gold" />
                <span>Brand Identity</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Scroll</span>
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="block h-10 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
