import Image from 'next/image';

const partnerLogos = [
  { src: "https://picsum.photos/150/50?grayscale&random=1", alt: "Partner 1", hint: "university logo" },
  { src: "https://picsum.photos/150/50?grayscale&random=2", alt: "Partner 2", hint: "design school" },
  { src: "https://picsum.photos/150/50?grayscale&random=3", alt: "Partner 3", hint: "art school" },
  { src: "https://picsum.photos/150/50?grayscale&random=4", alt: "Partner 4", hint: "business school" },
  { src: "https://picsum.photos/150/50?grayscale&random=5", alt: "Partner 5", hint: "communication school" },
  { src: "https://picsum.photos/150/50?grayscale&random=6", alt: "Partner 6", hint: "business school" },
  { src: "https://picsum.photos/150/50?grayscale&random=7", alt: "Partner 7", hint: "tech school" },
  { src: "https://picsum.photos/150/50?grayscale&random=8", alt: "Partner 8", hint: "online courses" },
];

export default function Partners() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-muted-foreground font-headline">Un grand merci à tous mes Étudiants en Bachelor, Master & MBA en 2024-2025 👏</h3>
          <p className="text-sm text-muted-foreground">Logos des écoles partenaires - Bachelor, Master & MBA 2024-2025</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partnerLogos.map((logo, index) => (
            <Image 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              data-ai-hint={logo.hint}
              width={120} 
              height={40} 
              className="h-8 w-auto object-contain" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
