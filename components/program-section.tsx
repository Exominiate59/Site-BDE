"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"

const days = [
  {
    day: "Lundi",
    events: [
      { time: "12h00", title: "Permanence BDE", location: "Foyer", type: "regulier" },
    ],
  },
  {
    day: "Mardi",
    events: [
      { time: "12h30", title: "Midi Pizza", location: "Cafeteria", type: "food" },
      { time: "18h00", title: "Tournoi FIFA", location: "Salle commune", type: "gaming" },
    ],
  },
  {
    day: "Mercredi",
    events: [
      { time: "14h00", title: "Apres-midi sportif", location: "Gymnase", type: "sport" },
    ],
  },
  {
    day: "Jeudi",
    events: [
      { time: "12h00", title: "Vente de gateaux", location: "Hall principal", type: "food" },
      { time: "20h00", title: "Soiree etudiante", location: "Bar Le Cosmos", type: "soiree" },
    ],
  },
  {
    day: "Vendredi",
    events: [
      { time: "12h30", title: "Chill & musique", location: "Foyer", type: "regulier" },
      { time: "17h00", title: "Afterwork", location: "Terrasse", type: "soiree" },
    ],
  },
]

const typeColors: Record<string, string> = {
  regulier: "bg-muted-foreground/20 text-muted-foreground",
  food: "bg-[hsl(30,80%,52%)]/20 text-[hsl(30,80%,60%)]",
  gaming: "bg-accent/20 text-accent",
  sport: "bg-[hsl(150,60%,45%)]/20 text-[hsl(150,60%,55%)]",
  soiree: "bg-primary/20 text-primary",
}

const typeLabels: Record<string, string> = {
  regulier: "Regulier",
  food: "Food",
  gaming: "Gaming",
  sport: "Sport",
  soiree: "Soiree",
}

export function ProgramSection() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section id="programme" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-widest mb-4">
            Semaine type
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Programme de la semaine
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {
              "Chaque semaine est une nouvelle aventure. Voici ce qui vous attend !"
            }
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {days.map((d, index) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-3 rounded-lg font-display font-semibold text-sm transition-all duration-300 ${
                activeDay === index
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(120,80,220,0.3)]"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {d.day}
            </button>
          ))}
        </div>

        {/* Events for selected day */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="text-accent" size={20} />
            <h3 className="font-display text-2xl font-bold text-foreground">
              {days[activeDay].day}
            </h3>
            <span className="text-sm text-muted-foreground">
              {days[activeDay].events.length} event{days[activeDay].events.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {days[activeDay].events.map((event, index) => (
              <div
                key={`${event.title}-${index}`}
                className="group relative flex items-start gap-6 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              >
                {/* Time */}
                <div className="flex-shrink-0 text-center">
                  <div className="flex items-center gap-1.5 text-accent">
                    <Clock size={14} />
                    <span className="font-display font-bold text-lg">{event.time}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px self-stretch bg-border" />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="font-display text-lg font-bold text-foreground">
                      {event.title}
                    </h4>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[event.type]}`}
                    >
                      {typeLabels[event.type]}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 blur-[40px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
