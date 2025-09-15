import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 
    step: '1', 
    title: 'De l\'idée à l\'intention',
    content: 'Tu viens avec une idée. L\'IA t\'aide à la formuler clairement et à poser les bases.',
    image: '/etapes/step1-vibe-coding.png'
  },
  { 
    step: '2',
    title: 'L\'IA fait le travail',
    content: 'ChatGPT, Claude ou Gemini génèrent le code. Tu comprends en avançant.',
    image: '/etapes/step2-boyd.png'
  },
  { 
    step: '3',
    title: 'Projet en ligne',
    content: 'De GitHub à Netlify/Vercel : ton projet est publié avec une URL publique, immédiatement partageable.',
    image: '/etapes/step3-publication.png'
  },
  { 
    step: '4',
    title: 'BYOD',
    content: 'Mode Bring Your Own Device : tu viens avec ton laptop, le reste est prêt sur place.',
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