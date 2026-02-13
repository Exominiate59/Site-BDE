export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Comete
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {"BDE Comete 2025-2026. Fait avec passion par l'equipe."}
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#accueil" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#equipe" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Equipe
            </a>
            <a href="#programme" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Programme
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
