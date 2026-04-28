"use client"

import { motion } from "framer-motion"

const principles = [
  {
    n: "I",
    title: "Precision",
    body: "Every detail matters — from kerning to lighting to motion timing.",
  },
  {
    n: "II",
    title: "Aesthetic Discipline",
    body: "Clean, refined, and intentional visuals — never overproduced.",
  },
  {
    n: "III",
    title: "Impact",
    body: "Designs engineered to command attention and remain memorable.",
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-ink py-28 md:py-44">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--gold) 10%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Design Philosophy
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-balance md:text-7xl"
          >
            Built on three
            <span className="italic text-gold"> principles</span>.
          </motion.h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border/60 bg-border/60 md:mt-28 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-background p-10 md:p-14"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(60% 80% at 50% 100%, color-mix(in oklab, var(--gold) 10%, transparent), transparent 70%)",
                }}
              />
              <p className="font-serif text-6xl font-light text-gold md:text-7xl">{p.n}</p>
              <h3 className="mt-8 font-serif text-2xl text-foreground md:text-3xl">{p.title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="mt-10 h-px w-12 bg-gold transition-all duration-700 group-hover:w-24" />
            </motion.div>
          ))}
        </div>

        {/* Feature line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-24 max-w-4xl text-center font-serif text-3xl leading-[1.2] tracking-tight text-foreground md:mt-32 md:text-5xl"
        >
          Designed to be <span className="italic text-gold">seen</span>.{" "}
          <br className="hidden md:block" />
          Engineered to be <span className="italic text-gold">remembered</span>.
        </motion.p>
      </div>
    </section>
  )
}
