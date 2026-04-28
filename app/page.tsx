import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { FeaturedShowcase } from "@/components/featured-showcase"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Approach } from "@/components/approach"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Portfolio />
      <FeaturedShowcase />
      <About />
      <Services />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}
