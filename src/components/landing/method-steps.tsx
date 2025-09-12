import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 
    step: 'Étape 1', 
    title: 'Notre méthode',
    content: 'Un processus simple et efficace. Tu poses ton idée à l\'oral ou à l\'écrit, on la clarifie avec l\'IA, puis on la transforme en projet prêt à évoluer. Pas de jargon inutile : chaque étape produit un livrable visible. Tu comprends ce que tu fais et pourquoi tu le fais.',
    image: '/etapes/step1-vibe-coding.png'
  },
  { 
    step: 'Étape 2',
    title: 'Apporte ton laptop (BYOD)',
    content: 'Tu viens avec ton ordinateur, c\'est tout. On prépare l\'environnement ensemble : accès Wi-Fi, outils ouverts, comptes créés si besoin. Tu n\'as rien à installer avant. L\'objectif : te rendre autonome, sans friction.',
    image: '/etapes/step2-boyd.png'
  },
  { 
    step: 'Étape 3',
    title: 'Publication en ligne',
    content: 'De GitHub au déploiement sur Netlify ou Vercel, ton projet obtient une URL publique. Tu peux la partager immédiatement. La mise en ligne est guidée pas à pas, avec vérification à chaque étape pour que tout fonctionne.',
    image: '/etapes/step3-publication.png'
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