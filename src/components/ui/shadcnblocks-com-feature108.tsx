"use client"

import { useEffect, useState } from "react"
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
  enableAutoplay?: boolean
  autoplayInterval?: number
}

const Feature108 = ({
  badge = "Vibe Coding Paris",
  heading = "Programme — Creative Product Builder en 2h",
  description = "En 2h, transforme ton idée en projet concret.",
  tabs = [],
  enableAutoplay = true,
  autoplayInterval = 5000,
}: Feature108Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "")
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  // Initialize activeTab when tabs are available
  useEffect(() => {
    if (tabs.length > 0 && !activeTab) {
      setActiveTab(tabs[0].value)
    }
  }, [tabs, activeTab])

  // Progress bar effect - updates every 100ms for smooth animation
  useEffect(() => {
    if (!enableAutoplay || tabs.length === 0 || isPaused || !activeTab) {
      setProgress(0)
      return
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = (100 / autoplayInterval) * 100
        return prev + increment
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [enableAutoplay, autoplayInterval, tabs.length, isPaused, activeTab])

  // Autoplay effect - switches to next tab when progress reaches 100%
  useEffect(() => {
    if (!enableAutoplay || tabs.length === 0 || isPaused || !activeTab) return

    if (progress >= 100) {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.findIndex((tab) => tab.value === currentTab)
        const nextIndex = (currentIndex + 1) % tabs.length
        return tabs[nextIndex].value
      })
      setProgress(0)
    }
  }, [progress, enableAutoplay, tabs, isPaused, activeTab])

  const handleTabClick = (value: string) => {
    setActiveTab(value)
    setProgress(0)
    // Reset autoplay timer by briefly pausing and resuming
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 100)
  }

  return (
    <section
      id="programme"
      className="py-24 md:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-3xl text-3xl font-semibold md:text-4xl">{heading}</h1>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabClick} className="mt-8">
          {/* Mobile: Horizontal scroll, Desktop: Centered row */}
          <div className="mx-auto max-w-4xl">
            <TabsList className="flex w-full overflow-x-auto scrollbar-hide gap-3 md:justify-center md:gap-6 lg:gap-10 pb-2 md:pb-0 h-auto">
              {tabs.map((tab) => (
                <div key={tab.value} className="relative flex flex-col flex-shrink-0">
                  <TabsTrigger
                    value={tab.value}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted dark:data-[state=active]:bg-muted/30 data-[state=active]:text-primary whitespace-nowrap min-w-fit"
                  >
                    {tab.icon} {tab.label}
                  </TabsTrigger>
                  {enableAutoplay && activeTab === tab.value && !isPaused && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-100 ease-linear"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  )}
                </div>
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