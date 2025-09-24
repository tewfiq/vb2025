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
  whyCards: {
    title: {
      line1: string
      line2: string
    }
    subtitle: string
    features: {
      learnByWriting: {
        title: string
        description: string
      }
      launchProjects: {
        title: string
        description: string
      }
      interactiveWorkshops: {
        title: string
        description: string
      }
      instantCreation: {
        title: string
        description: string
      }
      teamSpirit: {
        title: string
        description: string
      }
      unfairAdvantage: {
        title: string
        description: string
      }
    }
  }
  methodSteps: {
    title: string
    steps: {
      ideaToIntention: {
        title: string
        copy: string
        more: string
      }
      byodWorkshop: {
        title: string
        copy: string
        more: string
      }
      deployment: {
        title: string
        copy: string
        more: string
      }
    }
  }
  pricing: {
    title: string
    subtitle: string
    description: string
    plans: {
      starter: {
        title: string
        price: string
        description: string
        features: string[]
        buttonText: string
      }
      standard: {
        title: string
        price: string
        description: string
        features: string[]
        buttonText: string
      }
      team: {
        title: string
        price: string
        description: string
        features: string[]
        buttonText: string
      }
    }
  }
  faq: {
    title: string
    questions: {
      needToCoding: {
        question: string
        answer: string
      }
      projectOnline: {
        question: string
        answer: string
      }
      codeOwnership: {
        question: string
        answer: string
      }
      noIdea: {
        question: string
        answer: string
      }
      whoIsItFor: {
        question: string
        answer: string
      }
    }
  }
  footer: {
    title: string
    description: {
      line1: string
      line2: string
    }
    cta: string
    links: {
      about: string
      contact: string
      mentions: string
      cgv: string
    }
    copyright: string
    tagline: string
  }
  socialProofBadge: {
    spotsRemaining: string
    timezone: string
  }
  partners: {
    title: string
  }
  changelog: {
    title: string
    subtitle: string
    noContributions: string
    viewOnGitHub: string
    viewAllContributions: string
    badges: {
      latest: string
      merged: string
    }
  }
  common: {
    toggleTheme: string
    toggleLanguage: string
  }
  about: {
    name: string
    role: string
    paragraphs: {
      experience: string
      excellence: string
      background: string
      passion: string
    }
    mission: string
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
    whyCards: {
      title: {
        line1: "Pourquoi rejoindre",
        line2: "Vibe Coding Paris ?"
      },
      subtitle: "Ton unfair advantage dans la révolution Gen AI.",
      features: {
        learnByWriting: {
          title: "Apprends en écrivant",
          description: "Prends en main ChatGPT, Copilot, Cursor... et construis en langage naturel."
        },
        launchProjects: {
          title: "Lance tes projets sans barrière",
          description: "Sites, apps, scripts, IA — on prototype ensemble, de A à Z."
        },
        interactiveWorkshops: {
          title: "Ateliers interactifs ✨",
          description: "Coaching bienveillant, pratique guidée, feedback immédiat."
        },
        instantCreation: {
          title: "Créa instantanée",
          description: "Ton flow créatif, boosté par l'IA. Résultat concret immédiat."
        },
        teamSpirit: {
          title: "Team Spirit",
          description: "Une vibe collaborative pour progresser plus vite."
        },
        unfairAdvantage: {
          title: "Unfair Advantage",
          description: "Pendant que d'autres scrollent, toi tu crées. Compétence rare et transférable."
        }
      }
    },
    methodSteps: {
      title: "Comment ça marche ?",
      steps: {
        ideaToIntention: {
          title: "1. Idée → intention",
          copy: "On clarifie ton idée avec un LLM. Objectif: intention nette.",
          more: "Méthode Kindlin en 5 minutes, sans jargon."
        },
        byodWorkshop: {
          title: "2. Atelier BYOD",
          copy: "Tu viens avec ton laptop. On prépare l'environnement et on construit ensemble.",
          more: "Aucun prérequis d'installation. Comptes créés sur place si besoin."
        },
        deployment: {
          title: "3. Mise en ligne",
          copy: "GitHub → Netlify/Vercel. Tu repars avec une URL publique.",
          more: "Vérification à chaque étape pour que tout fonctionne."
        }
      }
    },
    pricing: {
      title: "Tarifs",
      subtitle: "Des formules simples et claires, pour tous les profils.",
      description: "Chaque formule vous transmet la même compétence :<br />apprendre à coder de bout en bout par la pratique et devenir Product Builder.",
      plans: {
        starter: {
          title: "⭐ Starter",
          price: "149 €",
          description: "TTC / -26 ans & demandeurs d'emploi",
          features: [
            "Atelier 2h complet",
            "Même contenu que l'atelier principal",
            "Coaching & accompagnement",
            "Compétence pratique immédiatement applicable"
          ],
          buttonText: "Je m'inscris — 149 €"
        },
        standard: {
          title: "🚀 Devenez Product Builder",
          price: "299 €",
          description: "TTC / personne",
          features: [
            "Atelier 2h intensif en présentiel",
            "Méthode complète end-to-end :<br />idée → code → déploiement",
            "Pratique guidée étape par étape",
            "Projet en ligne, immédiatement partageable",
            "Kit documentaire pour continuer après l'atelier"
          ],
          buttonText: "Réserver — 299 €"
        },
        team: {
          title: "👥 Équipe",
          price: "Sur devis",
          description: "Entreprise / École (5 à 20 pers.)",
          features: [
            "Session privative",
            "Contenu personnalisé (vos cas/projets)",
            "Planning dédié",
            "Idéal pour écoles, agences et incubateurs"
          ],
          buttonText: "Demander un devis"
        }
      }
    },
    faq: {
      title: "FAQ",
      questions: {
        needToCoding: {
          question: "Faut-il savoir coder ?",
          answer: "Non. Tout est guidé, aucun prérequis."
        },
        projectOnline: {
          question: "Je repars vraiment avec un projet en ligne ?",
          answer: "Oui. Tu obtiens ton repo GitHub et une URL publique."
        },
        codeOwnership: {
          question: "Le code est à qui ?",
          answer: "À toi. Le repo est personnel et réutilisable."
        },
        noIdea: {
          question: "Et si je n'ai pas d'idée ?",
          answer: "On en trouve une ensemble, pendant la session."
        },
        whoIsItFor: {
          question: "C'est pour qui ?",
          answer: "Pour toute personne curieuse d'apprendre et d'expérimenter."
        }
      }
    },
    footer: {
      title: "Vibe Coding Paris",
      description: {
        line1: "Vibe Coding Paris — Débloque ton super pouvoir digital en 2h.",
        line2: "De l'idée au site en ligne, avec l'IA comme copilote."
      },
      cta: "Slay le code, inscris-toi maintenant",
      links: {
        about: "À propos",
        contact: "Contact",
        mentions: "Mentions",
        cgv: "CGV"
      },
      copyright: "Tous droits réservés.",
      tagline: "Une compétence en 2h. Rien de personnel."
    },
    socialProofBadge: {
      spotsRemaining: "🔥 Il reste 6 places ! Prenez la vôtre",
      timezone: "(Paris UTC+2)"
    },
    partners: {
      title: "Un grand merci à tous mes Étudiants en Bachelor, Master & MBA en 2024-2025 👏"
    },
    changelog: {
      title: "Changelog",
      subtitle: "Ce site évolue avec la même méthode que vous allez apprendre (GitHub + déploiement en continu).",
      noContributions: "Aucune contribution disponible pour le moment.",
      viewOnGitHub: "Voir sur GitHub",
      viewAllContributions: "Voir toutes les contributions sur GitHub",
      badges: {
        latest: "Latest",
        merged: "Merged"
      }
    },
    common: {
      toggleTheme: "Changer le thème",
      toggleLanguage: "Changer la langue"
    },
    about: {
      name: "Tewfiq Ferahi",
      role: "Fondateur & Formateur Principal",
      paragraphs: {
        experience: "Avec plus de 20 ans d'expérience en transformation et stratégie digitale et 15 ans en design UX/UI, Tewfiq a collaboré avec plus de 30 clients, incluant startups, PME, entreprises du CAC 40, du Fortune 500 et du service public français.",
        excellence: "Il excelle dans l'acculturation, la transmission et le coaching pour accompagner les étudiants et les jeunes professionnels vers l'excellence.",
        background: "Diplômé en sciences économiques, il a cofondé deux Startups à Paris et San Francisco, apportant un mindset entrepreneurial et une expertise en technologies émergentes.",
        passion: "Early adopter et passionné par la veille technologique, il mêle design, digital, business et mentoring pour développer des solutions innovantes et percutantes."
      },
      mission: "Ma mission est de rendre le Design Stratégique et les Solutions de Generative AI accessibles à tous, en combinant Créativité, Technologies et Business pour générer des impacts significatifs."
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
    whyCards: {
      title: {
        line1: "Why join",
        line2: "Vibe Coding Paris?"
      },
      subtitle: "Your unfair advantage in the Gen AI revolution.",
      features: {
        learnByWriting: {
          title: "Learn by writing",
          description: "Master ChatGPT, Copilot, Cursor... and build in natural language."
        },
        launchProjects: {
          title: "Launch projects without barriers",
          description: "Websites, apps, scripts, AI — we prototype together, A to Z."
        },
        interactiveWorkshops: {
          title: "Interactive workshops ✨",
          description: "Supportive coaching, guided practice, immediate feedback."
        },
        instantCreation: {
          title: "Instant creation",
          description: "Your creative flow, boosted by AI. Immediate concrete results."
        },
        teamSpirit: {
          title: "Team Spirit",
          description: "A collaborative vibe to progress faster."
        },
        unfairAdvantage: {
          title: "Unfair Advantage",
          description: "While others scroll, you create. Rare and transferable skill."
        }
      }
    },
    methodSteps: {
      title: "How does it work?",
      steps: {
        ideaToIntention: {
          title: "1. Idea → intention",
          copy: "We clarify your idea with an LLM. Goal: clear intention.",
          more: "Kindlin method in 5 minutes, no jargon."
        },
        byodWorkshop: {
          title: "2. BYOD Workshop",
          copy: "You come with your laptop. We prepare the environment and build together.",
          more: "No installation prerequisites. Accounts created on-site if needed."
        },
        deployment: {
          title: "3. Go live",
          copy: "GitHub → Netlify/Vercel. You leave with a public URL.",
          more: "Verification at each step to ensure everything works."
        }
      }
    },
    pricing: {
      title: "Pricing",
      subtitle: "Simple and clear formulas for all profiles.",
      description: "Each formula gives you the same skill:<br />learn to code end-to-end through practice and become a Product Builder.",
      plans: {
        starter: {
          title: "⭐ Starter",
          price: "€149",
          description: "Tax incl. / Under 26 & job seekers",
          features: [
            "Complete 2h workshop",
            "Same content as main workshop",
            "Coaching & support",
            "Immediately applicable practical skill"
          ],
          buttonText: "Register — €149"
        },
        standard: {
          title: "🚀 Become a Product Builder",
          price: "€299",
          description: "Tax incl. / person",
          features: [
            "Intensive 2h in-person workshop",
            "Complete end-to-end method:<br />idea → code → deployment",
            "Step-by-step guided practice",
            "Online project, immediately shareable",
            "Documentation kit to continue after workshop"
          ],
          buttonText: "Book — €299"
        },
        team: {
          title: "👥 Team",
          price: "Custom quote",
          description: "Company / School (5 to 20 people)",
          features: [
            "Private session",
            "Personalized content (your cases/projects)",
            "Dedicated scheduling",
            "Ideal for schools, agencies and incubators"
          ],
          buttonText: "Request quote"
        }
      }
    },
    faq: {
      title: "FAQ",
      questions: {
        needToCoding: {
          question: "Do I need to know how to code?",
          answer: "No. Everything is guided, no prerequisites."
        },
        projectOnline: {
          question: "Do I really leave with a project online?",
          answer: "Yes. You get your GitHub repo and a public URL."
        },
        codeOwnership: {
          question: "Who owns the code?",
          answer: "You do. The repo is personal and reusable."
        },
        noIdea: {
          question: "What if I don't have an idea?",
          answer: "We'll find one together during the session."
        },
        whoIsItFor: {
          question: "Who is this for?",
          answer: "For anyone curious to learn and experiment."
        }
      }
    },
    footer: {
      title: "Vibe Coding Paris",
      description: {
        line1: "Vibe Coding Paris — Unlock your digital superpower in 2h.",
        line2: "From idea to live website, with AI as copilot."
      },
      cta: "Slay the code, register now",
      links: {
        about: "About",
        contact: "Contact",
        mentions: "Legal",
        cgv: "Terms"
      },
      copyright: "All rights reserved.",
      tagline: "A skill in 2h. Nothing personal."
    },
    socialProofBadge: {
      spotsRemaining: "🔥 6 spots left! Get yours now",
      timezone: "(Paris UTC+2)"
    },
    partners: {
      title: "A big thank you to all my Bachelor, Master & MBA Students in 2024-2025 👏"
    },
    changelog: {
      title: "Changelog",
      subtitle: "This site evolves using the same method you'll learn (GitHub + continuous deployment).",
      noContributions: "No contributions available at the moment.",
      viewOnGitHub: "View on GitHub",
      viewAllContributions: "View all contributions on GitHub",
      badges: {
        latest: "Latest",
        merged: "Merged"
      }
    },
    common: {
      toggleTheme: "Toggle theme",
      toggleLanguage: "Toggle language"
    },
    about: {
      name: "Tewfiq Ferahi",
      role: "Founder & Principal Trainer",
      paragraphs: {
        experience: "With over 20 years of experience in digital transformation and strategy and 15 years in UX/UI design, Tewfiq has collaborated with more than 30 clients, including startups, SMEs, CAC 40 companies, Fortune 500 companies, and French public services.",
        excellence: "He excels in acculturation, knowledge transfer, and coaching to guide students and young professionals toward excellence.",
        background: "A graduate in economic sciences, he co-founded two startups in Paris and San Francisco, bringing an entrepreneurial mindset and expertise in emerging technologies.",
        passion: "An early adopter passionate about technology scouting, he blends design, digital, business, and mentoring to develop innovative and impactful solutions."
      },
      mission: "My mission is to make Strategic Design and Generative AI Solutions accessible to everyone, combining Creativity, Technologies, and Business to generate significant impacts."
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