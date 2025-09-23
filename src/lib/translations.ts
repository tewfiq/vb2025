export type Language = "fr" | "en"

export interface Translations {
  navigation: {
    programme: string
    why: string
    info: string
    faq: string
  }
  hero: {
    badgeText: string
    title: {
      mobile: {
        line1: string
        line2: string
        line3: string
      }
      desktop: {
        line1: string
        line2: string
      }
    }
    subtitle: {
      line1: string
      line2: string
    }
    description: string
    studentsCount: string
    buttons: {
      register: string
      registerNormal: string
    }
    features: {
      capacity: string
      location: string
      level: string
      date: string
    }
  }
  programme: {
    badge: string
    heading: string
    description: string
    phases: {
      intention: {
        label: string
        badge: string
        title: string
        description: string
      }
      build: {
        label: string
        badge: string
        title: string
        description: string
      }
      ship: {
        label: string
        badge: string
        title: string
        description: string
      }
    }
  }
  workshops: {
    title: {
      line1: string
      line2: string
    }
    subtitle: string
  }
  common: {
    toggleTheme: string
    toggleLanguage: string
  }
  metadata: {
    title: string
    description: string
  }
}

export const translations: Record<Language, Translations> = {
  fr: {
    navigation: {
      programme: "Programme",
      why: "Pourquoi",
      info: "Infos",
      faq: "FAQ"
    },
    hero: {
      badgeText: "Social proof badge FR", // This will need to be checked in the actual component
      title: {
        mobile: {
          line1: "Une compétence",
          line2: "en 2h.",
          line3: "Rien de personnel."
        },
        desktop: {
          line1: "Une compétence en 2h.",
          line2: "Rien de personnel."
        }
      },
      subtitle: {
        line1: "Apprends à coder sans coder.",
        line2: "Tu écris en français, l'IA t'aide à générer le code et tu déploies ton site."
      },
      description: "Une compétence digitale transférable pour tes études, ton CV et tes projets.",
      studentsCount: "+1 000 étudiants formés en 2024–2025",
      buttons: {
        register: "Je m'inscris — 149 € (-26 ans) ✨",
        registerNormal: "Réserver au tarif normal — 299 €"
      },
      features: {
        capacity: "🎟️ 10 places / session",
        location: "📍 Paris — salle équipée",
        level: "✨ Tous niveaux",
        date: "📅 Samedi 4 Octobre 2025"
      }
    },
    programme: {
      badge: "Vibe Coding Paris",
      heading: "Programme — Creative Product Builder en 2h",
      description: "En 2h, transforme ton idée en projet concret.",
      phases: {
        intention: {
          label: "1 • Intention",
          badge: "Phase 1 — Intention",
          title: "De ton idée à une intention claire & actionnable",
          description: "Apporte ton ordi. On clarifie ton idée avec l'IA, sans jargon, puis on cadre avec la méthode Kindlin : problème → solution, business model, pricing. Tu sais où tu vas."
        },
        build: {
          label: "2 • Build",
          badge: "Phase 2 — Build & Iterate",
          title: "Travaille avec l'IA, étends, itère et débugge",
          description: "Tu apprends à dialoguer et à prompt-er efficacement. On ajoute une base simple, une API ou une extension. On voit sécurité & analytics pour des outputs qualitatifs en gardant la main sur ton projet."
        },
        ship: {
          label: "3 • Ship",
          badge: "Phase 3 — Ship & Grow",
          title: "Mise en ligne immédiate & rôle de Creative Product Builder",
          description: "On shippe : AI Code Assistant → GitHub → Netlify/Vercel → exécution async. En 2h tu repars avec une URL publique. Tu poursuis en autonomie. Tu pilotes design, code, SEO, versioning — posture « Agency of One ». Ressources & prochaines étapes incluses."
        }
      }
    },
    workshops: {
      title: {
        line1: "Nos Ateliers",
        line2: "en Solutions Gen AI"
      },
      subtitle: "pendant l'année académique 2024 - 2025"
    },
    common: {
      toggleTheme: "Changer le thème",
      toggleLanguage: "Changer la langue"
    },
    metadata: {
      title: "Vibe Coding Paris — Débloque ton super pouvoir digital en 2h. De l'idée au site en ligne, avec l'IA comme copilote.",
      description: "Un atelier intensif et accessible. Tu explores, tu structures, tu repars avec un projet en ligne. Une compétence exploitable, en seulement 2h."
    }
  },
  en: {
    navigation: {
      programme: "Program",
      why: "Why",
      info: "Info",
      faq: "FAQ"
    },
    hero: {
      badgeText: "Social proof badge EN",
      title: {
        mobile: {
          line1: "A skill",
          line2: "in 2h.",
          line3: "Nothing personal."
        },
        desktop: {
          line1: "A skill in 2h.",
          line2: "Nothing personal."
        }
      },
      subtitle: {
        line1: "Learn to code without coding.",
        line2: "You write in English, AI helps you generate code and you deploy your site."
      },
      description: "A transferable digital skill for your studies, CV and projects.",
      studentsCount: "+1,000 students trained in 2024–2025",
      buttons: {
        register: "Register — €149 (under 26) ✨",
        registerNormal: "Book at regular price — €299"
      },
      features: {
        capacity: "🎟️ 10 spots / session",
        location: "📍 Paris — equipped room",
        level: "✨ All levels",
        date: "📅 Saturday October 4, 2025"
      }
    },
    programme: {
      badge: "Vibe Coding Paris",
      heading: "Program — Creative Product Builder in 2h",
      description: "In 2h, transform your idea into a concrete project.",
      phases: {
        intention: {
          label: "1 • Intention",
          badge: "Phase 1 — Intention",
          title: "From your idea to a clear & actionable intention",
          description: "Bring your laptop. We clarify your idea with AI, without jargon, then frame it with the Kindlin method: problem → solution, business model, pricing. You know where you're going."
        },
        build: {
          label: "2 • Build",
          badge: "Phase 2 — Build & Iterate",
          title: "Work with AI, extend, iterate and debug",
          description: "You learn to dialogue and prompt effectively. We add a simple base, an API or an extension. We cover security & analytics for quality outputs while keeping control of your project."
        },
        ship: {
          label: "3 • Ship",
          badge: "Phase 3 — Ship & Grow",
          title: "Immediate online deployment & Creative Product Builder role",
          description: "We ship: AI Code Assistant → GitHub → Netlify/Vercel → async execution. In 2h you leave with a public URL. You continue autonomously. You manage design, code, SEO, versioning — 'Agency of One' approach. Resources & next steps included."
        }
      }
    },
    workshops: {
      title: {
        line1: "Our Workshops",
        line2: "in Gen AI Solutions"
      },
      subtitle: "during the 2024 - 2025 academic year"
    },
    common: {
      toggleTheme: "Toggle theme",
      toggleLanguage: "Toggle language"
    },
    metadata: {
      title: "Vibe Coding Paris — Unlock your digital superpower in 2h. From idea to live website, with AI as copilot.",
      description: "An intensive and accessible workshop. You explore, structure, and leave with an online project. A transferable skill, in just 2h."
    }
  }
}

export function getTranslations(language: Language): Translations {
  return translations[language]
}