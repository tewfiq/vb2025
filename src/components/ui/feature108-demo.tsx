"use client"
import { useMemo } from "react"
import { Layout, Pointer, Zap } from "lucide-react"
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108"
import { useTranslation } from "@/hooks/use-translation"

export default function Feature108Demo() {
  const t = useTranslation()

  const demoData = useMemo(() => ({
    badge: t.programme.badge,
    heading: t.programme.heading,
    description: t.programme.description,
    tabs: [
      {
        value: "phase-1",
        icon: <Pointer className="h-auto w-4 shrink-0" />,
        label: t.programme.phases.intention.label,
        content: {
          badge: t.programme.phases.intention.badge,
          title: t.programme.phases.intention.title,
          description: t.programme.phases.intention.description,
          imageSrc: "/programme/intention.png",
          imageAlt: "intention",
        },
      },
      {
        value: "phase-2",
        icon: <Zap className="h-auto w-4 shrink-0" />,
        label: t.programme.phases.build.label,
        content: {
          badge: t.programme.phases.build.badge,
          title: t.programme.phases.build.title,
          description: t.programme.phases.build.description,
          imageSrc: "/programme/build.png",
          imageAlt: "build",
        },
      },
      {
        value: "phase-3",
        icon: <Layout className="h-auto w-4 shrink-0" />,
        label: t.programme.phases.ship.label,
        content: {
          badge: t.programme.phases.ship.badge,
          title: t.programme.phases.ship.title,
          description: t.programme.phases.ship.description,
          imageSrc: "/programme/ship.png",
          imageAlt: "ship",
        },
      },
    ],
  }), [t])

  return <Feature108 {...demoData} />
}