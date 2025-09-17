"use client"

import { Layout, Pointer, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface TabContent {
  badge: string
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
}

interface Tab {
  value: string
  icon: React.ReactNode
  label: string
  content: TabContent
}

interface Feature108Props {
  badge?: string
  heading?: string
  description?: string
  tabs?: Tab[]
}

const Feature108 = ({
  badge = "Vibe Coding Paris",
  heading = "Programme — Creative Product Builder en 2h",
  description = "En 2h, transforme ton idée en projet concret.",
  tabs = [],
}: Feature108Props) => {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-3xl text-2xl font-semibold md:text-3xl lg:text-4xl">{heading}</h1>
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </div>

        <Tabs defaultValue={tabs[0]?.value} className="w-full">
          <TabsList className="grid w-full grid-cols-1 gap-2 h-auto bg-transparent sm:grid-cols-3 sm:gap-4">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary border border-border sm:text-sm"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-6 w-full rounded-2xl bg-muted/70 p-4 md:p-8 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid gap-8 lg:grid-cols-2 lg:gap-10 place-items-start"
              >
                <div className="flex flex-col gap-4 lg:gap-5 order-2 lg:order-1">
                  <Badge variant="outline" className="w-fit bg-background text-xs">{tab.content.badge}</Badge>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl leading-tight">{tab.content.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">{tab.content.description}</p>
                  <Button className="mt-2 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="w-full order-1 lg:order-2">
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="w-full h-auto max-w-md mx-auto rounded-xl object-cover lg:max-w-none"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature108 }