import { MapPin, Users, Calendar, Layers } from 'lucide-react';

export default function Features() {
  const features = [
    { text: '10 places / session', icon: <Users className="h-5 w-5 text-primary" /> },
    { text: 'Paris — salle équipée', icon: <MapPin className="h-5 w-5 text-primary" /> },
    { text: 'Tous niveaux', icon: <Layers className="h-5 w-5 text-primary" /> },
    { text: 'Septembre 2025', icon: <Calendar className="h-5 w-5 text-primary" /> },
  ];

  return (
    <section id="infos" className="border-y bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              {feature.icon}
              <span className="font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
        <div className="text-center pb-8">
          <p className="text-sm text-muted-foreground">Tarif normal : 299 € TTC | Offre -26 ans / Demandeurs d'emploi : 149 € TTC</p>
        </div>
      </div>
    </section>
  );
}
