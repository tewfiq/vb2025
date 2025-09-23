"use client"
import { Layout, Pointer, Zap } from "lucide-react"
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108"

const demoData = {
  badge: "Vibe Coding Paris",
  heading: "Programme — Creative Product Builder en 2h",
  description: "En 2h, transforme ton idée en projet concret.",
  tabs: [
    {
      value: "phase-1",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "1 • Intention",
      content: {
        badge: "Phase 1 — Intention",
        title: "De ton idée à une intention claire & actionnable",
        description:
          "Apporte ton ordi. On clarifie ton idée avec l'IA, sans jargon, puis on cadre avec la méthode Kindlin : problème → solution, business model, pricing. Tu sais où tu vas.",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "intention",
      },
    },
    {
      value: "phase-2",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "2 • Build",
      content: {
        badge: "Phase 2 — Build & Iterate",
        title: "Travaille avec l'IA, étends, itère et débugge",
        description:
          "Tu apprends à dialoguer et à prompt-er efficacement. On ajoute une base simple, une API ou une extension. On voit sécurité & analytics pour des outputs qualitatifs en gardant la main sur ton projet.",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "build",
      },
    },
    {
      value: "phase-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "3 • Ship",
      content: {
        badge: "Phase 3 — Ship & Grow",
        title: "Mise en ligne immédiate & rôle de Creative Product Builder",
        description:
          "On shippe : AI Code Assistant → GitHub → Netlify/Vercel → exécution async. En 2h tu repars avec une URL publique. Tu poursuis en autonomie. Tu pilotes design, code, SEO, versioning — posture « Agency of One ». Ressources & prochaines étapes incluses.",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "ship",
      },
    },
  ],
}

export default function Feature108Demo() {
  return <Feature108 {...demoData} />
}