import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Laptop, Globe, Sparkles, Settings } from 'lucide-react';

const requirements = [
  { 
    icon: <CheckCircle className="h-5 w-5 text-primary" />, 
    text: "Un compte GitHub",
    completed: true 
  },
  { 
    icon: <CheckCircle className="h-5 w-5 text-primary" />, 
    text: "Un compte Google",
    completed: true 
  },
  { 
    icon: <CheckCircle className="h-5 w-5 text-primary" />, 
    text: "Un navigateur moderne (Chrome, Arc...)",
    completed: true 
  },
  { 
    icon: <CheckCircle className="h-5 w-5 text-primary" />, 
    text: "Aucune ligne de code nécessaire",
    completed: true 
  }
];

const benefits = [
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Configuration simple",
    description: "Matériel requis minimal"
  },
  {
    icon: <Laptop className="h-8 w-8 text-primary" />,
    title: "Accessible",
    description: "Aucune expérience de code requise"
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Simple",
    description: "Juste un navigateur moderne"
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "AI Moderne",
    description: "Exploite l'IA générative"
  }
];

export default function BYOD() {
  return (
    <section id="byod" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Bring Your Own Device
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Pas besoin d'être développeur ! Voici tout ce qu'il vous faut
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Liste de vérification */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 font-headline">
              Liste de vérification
            </h3>
            <div className="space-y-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 transition-all hover:bg-muted/50">
                  {requirement.icon}
                  <span className="text-lg font-medium text-foreground">{requirement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cartes d'avantages */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center bg-card/80 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg font-headline">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-medium text-foreground">Configuration en moins de 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}