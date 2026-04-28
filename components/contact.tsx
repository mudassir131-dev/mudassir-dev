"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Mail, ArrowUpRight, Check } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate request
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-background py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-10 gap-y-16">
          {/* Heading */}
          <div className="col-span-12 md:col-span-6">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                Contact · 003
              </span>
            </div>
            <h2 className="font-serif text-5xl font-light leading-[1.02] tracking-tight text-balance md:text-7xl">
              Let&apos;s build
              <br />
              something
              <span className="italic text-gold"> exceptional</span>.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              If you&apos;re looking for visuals that feel premium, refined, and impactful — let&apos;s work together.
            </p>

            <div className="mt-12 space-y-5 border-t border-border/60 pt-10">
              <a
                href="mailto:hello@pixelforgee.studio"
                className="group flex items-center justify-between gap-6 border-b border-border/60 py-5 transition-colors duration-300 hover:border-gold"
              >
                <span className="flex items-center gap-4">
                  <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="text-base text-foreground md:text-lg">hello@pixelforgee.studio</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </a>
              <a
                href="https://instagram.com/pixelforgee"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-6 border-b border-border/60 py-5 transition-colors duration-300 hover:border-gold"
              >
                <span className="flex items-center gap-4">
                  <Instagram className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  <span className="text-base text-foreground md:text-lg">@pixelforgee</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-xs">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Studio</p>
                <p className="mt-2 text-foreground">Kashmir, India</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Availability</p>
                <p className="mt-2 text-foreground">Q3 — Q4 2026</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-12 md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative border border-border/60 bg-charcoal/40 p-8 backdrop-blur md:p-12"
            >
              {submitted ? (
                <div className="flex flex-col items-start gap-6 py-10">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
                    <Check className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
                    Inquiry received.
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thank you. I personally read every message and will respond within 24–48 hours with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-8" noValidate>
                  <Field id="name" label="Name" autoComplete="name" required />
                  <Field id="email" label="Email" type="email" autoComplete="email" required />
                  <Field id="brand" label="Brand / Project" />
                  <FieldTextarea id="message" label="Tell me about your vision" required />

                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative mt-2 inline-flex items-center justify-between gap-4 overflow-hidden border border-gold/60 px-6 py-4 text-[11px] uppercase tracking-[0.36em] text-foreground transition-colors duration-500 hover:text-primary-foreground disabled:opacity-60"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 origin-left scale-x-0 bg-gold transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                    />
                    <span className="relative">{loading ? "Sending\u2026" : "Send Inquiry"}</span>
                    <ArrowUpRight className="relative h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.32em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-3 text-base text-foreground outline-none transition-colors duration-500 focus:border-gold"
      />
    </div>
  )
}

function FieldTextarea({
  id,
  label,
  required,
}: {
  id: string
  label: string
  required?: boolean
}) {
  return (
    <div className="group relative">
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.32em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={4}
        required={required}
        className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent pb-3 text-base text-foreground outline-none transition-colors duration-500 focus:border-gold"
      />
    </div>
  )
}
