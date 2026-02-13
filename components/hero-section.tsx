"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random(),
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 230, 255, ${star.opacity})`
        ctx.fill()

        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starfield */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Hero image overlay */}
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/images/comet-hero.jpg)" }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-background to-transparent" />

      {/* Glowing comet accent */}
      <div className="absolute top-1/4 right-1/4 z-[2] w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 left-1/4 z-[2] w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
          <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="text-sm text-primary font-medium">Bureau Des Etudiants 2025-2026</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance">
          BDE{" "}
          <span className="text-primary relative">
            Comete
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/40 blur-sm" />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          {
            "Une equipe de 6 passionnes prets a illuminer votre annee etudiante. Evenements, soirees, projets... On vise les etoiles !"
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#equipe"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,220,0.3)]"
          >
            {"Decouvrir l'equipe"}
          </a>
          <a
            href="#programme"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-display font-semibold text-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Voir le programme
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#equipe" aria-label="Defiler vers le bas">
          <ChevronDown className="text-muted-foreground" size={32} />
        </a>
      </div>
    </section>
  )
}
