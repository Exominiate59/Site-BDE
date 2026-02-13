"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

const members = [
  {
    name: "Gaspard Bry",
    role: "President",
    image: "/images/member-1.jpg",
    description: "Le capitaine de la comete. Il garde le cap et motive les troupes !",
    instagram: "#",
  },
  {
    name: "Antoine Rousselle aka Gonzalez",
    role: "Vice-President",
    image: "/images/member-2.jpg",
    description: "Bras droit de choc, il organise tout avec une precision stellaire.",
    instagram: "#",
  },
  {
    name: "Mato Urbanac",
    role: "Tresorier",
    image: "/images/member-3.jpg",
    description: "Gardien du budget, il fait en sorte que chaque euro brille.",
    instagram: "#",
  },
  {
    name: "Julien Plomion",
    role: "Responsable Partenariat",
    image: "/images/member-4.jpg",
    description: "La memoire de l'equipe, rien ne lui echappe dans la galaxie.",
    instagram: "#",
  },
  {
    name: "Remi Deroussent",
    role: "Responsable Communication",
    image: "/images/member-5.jpg",
    description: "Il diffuse nos messages a la vitesse de la lumiere sur les reseaux.",
    instagram: "#",
  },
  {
    name: "Mathys Dupont",
    role: "Responsable Evenements",
    image: "/images/member-6.jpg",
    description: "Createur de soirees cosmiques et d'events memorables.",
    instagram: "#",
  },
]

export { members }

export function TeamSection() {
  return (
    <section id="equipe" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            {"L'Equipage"}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"6 etoiles, 1 comete"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {
              "Chacun apporte son energie et ses talents pour faire de cette annee une aventure inoubliable."
            }
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`Photo de ${member.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Role badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <a
                    href={member.instagram}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <Instagram size={18} />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-[60px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
