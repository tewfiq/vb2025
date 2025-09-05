import Image from 'next/image';

const partnerLogos = [
  { src: "https://storage.googleapis.com/maker-studio-5a503.appspot.com/user_managed/6b85d4f3-a26a-4993-a442-d699e15f839a/logo-ecoles-partenaires-light-V2.png", alt: "Partner logos", hint: "school logos" },
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
            <Image 
              src="https://storage.googleapis.com/maker-studio-5a503.appspot.com/user_managed/6b85d4f3-a26a-4993-a442-d699e15f839a/logo-ecoles-partenaires-light-V2.png" 
              alt="Partner logos" 
              data-ai-hint="school logos"
              width={1000} 
              height={60} 
              className="h-auto w-full max-w-4xl object-contain" 
            />
        </div>
      </div>
    </section>
  );
}
