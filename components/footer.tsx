"use client"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-ink">
      {/* Oversized wordmark */}
      <div aria-hidden="true" className="px-6 pt-16 md:px-10">
        <p className="select-none font-serif text-[clamp(4rem,18vw,18rem)] font-light leading-[0.85] tracking-[-0.04em] text-foreground/8">
          PIXELFORGEE
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 border-t border-border/60 px-6 py-10 text-xs md:px-10">
        <div className="col-span-12 flex items-center gap-2 md:col-span-4">
          <span
            aria-hidden="true"
            className="block h-1.5 w-1.5 rounded-full bg-gold"
            style={{ boxShadow: "0 0 14px var(--gold)" }}
          />
          <span className="font-serif text-sm tracking-[0.32em] text-foreground">PIXELFORGEE</span>
        </div>

        <div className="col-span-6 text-muted-foreground md:col-span-4 md:text-center">
          © {year} Muhammad Mudassir. All rights reserved.
        </div>

        <div className="col-span-6 flex items-center justify-end gap-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground md:col-span-4">
          <a href="#top" className="transition-colors hover:text-gold">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
