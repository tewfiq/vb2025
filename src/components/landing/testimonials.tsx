"use client";
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Liste des avatars assignés à chaque témoignage (un avatar par témoignage)
const avatarAssignments = {
  'Alex M.': 'Pierre.jpg', // Masculin
  'Dr. Mathieu D.': 'Marwan.jpg', // Masculin
  'Clara M.': 'Vanessa.jpg', // Féminin
  'Karim N.': 'Simon.jpg', // Masculin
  'Léa R.': 'Aminata.jpg', // Féminin
  'Hugo T.': 'Simon.jpg', // Masculin
};

// Fonction pour obtenir l'avatar en fonction du nom
function getAvatarSrc(name: string) {
  return `/avatars/${avatarAssignments[name] || '107.jpg'}`;
}

const testimonials = [
  { name: 'Alex M.', role: 'Étudiant UX/UI — ECV Paris', quote: "En 2h, j'ai créé et mis en ligne mon projet.", initials: 'AM' },
  { name: 'Dr. Mathieu D.', role: 'Directeur Pédagogique — Digital College', quote: 'Nos étudiants produisent des projets concrets et partagent leur code sur GitHub.', initials: 'MD' },
  { name: 'Clara M.', role: 'Designer Freelance — École Conte (alumni)', quote: 'L\'intégration IA a élevé mes offres clients — +40% de revenus.', initials: 'CM' },
  { name: 'Karim N.', role: 'Étudiant Dev Web — Ascencia', quote: 'Atelier clair, concret, orienté résultat. On repart avec une URL en ligne.', initials: 'KN' },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
            Ils ont testé<br />Vibe Coding Paris
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: false }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <p className="text-foreground flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4 mt-6">
                        <Avatar>
                           <AvatarImage src={getAvatarSrc(testimonial.name)} alt={testimonial.name} data-ai-hint="person portrait"/>
                           <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-14 hidden md:inline-flex" />
          <CarouselNext className="mr-14 hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
