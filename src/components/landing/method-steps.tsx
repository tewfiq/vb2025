import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 
    step: 'Étape 1', 
    title: 'Notre méthode',
    content: 'Un processus simple et efficace : tu discutes tes idées, tu les structures avec l\'IA, puis tu crées ton projet. Pas de jargon technique, juste du concret.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
  },
  { 
    step: 'Étape 2',
    title: 'Apporte ton laptop',
    content: 'Mode BYOD (Bring Your Own Device) : tu viens avec ton ordinateur portable, c\'est tout ce qu\'il faut. On s\'occupe du reste : wifi, outils, accompagnement.',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop'
  },
  { 
    step: 'Étape 3',
    title: 'Publication en ligne',
    content: 'De GitHub au déploiement sur Netlify ou Vercel, ton projet sera accessible via une URL publique. Prêt à être partagé avec le monde entier en quelques clics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
]

export default function MethodSteps() {
  return (
    <FeatureSteps 
      features={features}
      title="Comment ça marche ?"
      autoPlayInterval={4000}
    />
  )
}