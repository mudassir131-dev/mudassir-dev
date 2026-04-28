"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-8 gap-y-14">
          {/* Portrait */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="col-span-12 md:col-span-5"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal">
              <Image
                src="/about-portrait.jpg"
                alt="Portrait of Muhammad Mudassir, founder of PIXELFORGEE"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--ink) 70%, transparent) 100%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Founder</p>
                  <p className="mt-2 font-serif text-2xl text-foreground">Muhammad Mudassir</p>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Kashmir · IND
                </p>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="col-span-12 md:col-span-7 md:pl-10">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                About · The Designer
              </span>
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-balance md:text-6xl"
            >
              I design for <span className="italic text-gold">presence</span> —
              not for trends.
            </motion.h2>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {[
                "I am Muhammad Mudassir, a graphic designer and video editor based in Kashmir, focused on building high-impact visual experiences for modern brands.",
                "My work revolves around precision, aesthetics, and emotional impact. I specialize in crafting luxury posters, cinematic edits, and premium brand visuals that not only look visually striking but also communicate value and authority.",
                "Every project I create is approached with a high-end mindset — clean composition, controlled lighting, refined color palettes, and intentional motion. I don\u2019t design for trends; I design for presence.",
                "Through PIXELFORGEE, I aim to redefine how digital visuals are perceived — transforming simple ideas into immersive, high-quality experiences that stand out in a saturated market.",
              ].map((p, i) => (
                <motion.p
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  custom={i + 2}
                  className="text-pretty"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.dl
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              custom={6}
              className="mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-10"
            >
              {[
                { k: "Years", v: "06+" },
                { k: "Projects", v: "120+" },
                { k: "Brands", v: "40+" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="mt-3 font-serif text-4xl font-light text-foreground md:text-5xl">
                    {s.v}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  )
}
