"use client"

import { Layout, Pointer, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface TabContent {
  badge: string
  title: string
  description: string
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
    <section id="programme" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-3xl text-3xl font-semibold md:text-4xl">{heading}</h1>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>

        <Tabs defaultValue={tabs[0]?.value} className="mt-8">
          {/* Mobile: Horizontal scroll, Desktop: Centered row */}
          <div className="mx-auto max-w-4xl">
            <TabsList className="flex w-full overflow-x-auto scrollbar-hide gap-3 md:justify-center md:gap-6 lg:gap-10 pb-2 md:pb-0 h-auto">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted dark:data-[state=active]:bg-muted/30 data-[state=active]:text-primary whitespace-nowrap flex-shrink-0 min-w-fit"
                >
                  {tab.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-muted/70 dark:bg-muted/20 p-4 lg:p-10">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-8 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="default" className="w-fit">{tab.content.badge}</Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl" dangerouslySetInnerHTML={{ __html: tab.content.title }}></h3>
                  <p className="text-muted-foreground lg:text-lg">{tab.content.description}</p>
                </div>
                <img src={tab.content.imageSrc} alt={tab.content.imageAlt} className="rounded-xl max-h-[320px] lg:max-h-[380px] object-contain w-full" />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { Feature108 }