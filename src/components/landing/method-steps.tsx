import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 
    step: 'Étape 1', 
    title: 'Notre méthode',
    content: 'Un processus simple et efficace : tu discutes tes idées, tu les structures avec l\'IA, puis tu crées ton projet. Pas de jargon technique, juste du concret.',
    image: '/etapes/étape #1 Vibe Coding-min.png'
  },
  { 
    step: 'Étape 2',
    title: 'Apporte ton laptop',
    content: 'Mode BYOD (Bring Your Own Device) : tu viens avec ton ordinateur portable, c\'est tout ce qu\'il faut. On s\'occupe du reste : wifi, outils, accompagnement.',
    image: '/etapes/étape #2 BOYD-min.png'
  },
  { 
    step: 'Étape 3',
    title: 'Publication en ligne',
    content: 'De GitHub au déploiement sur Netlify ou Vercel, ton projet sera accessible via une URL publique. Prêt à être partagé avec le monde entier en quelques clics.',
    image: '/etapes/étape #3 publication-min.png'
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