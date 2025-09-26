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
  contact: {
    title: string
    description: string
  }
  legal: {
    title: string
    subtitle: string
    lastUpdated: string
    sections: {
      editor: {
        title: string
        content: {
          description: string
          name: string
          organization: string
          address1: string
          address2: string
          email: string
          status: string
          siret: string
          tva: string
        }
      }
      director: {
        title: string
        content: string
      }
      hosting: {
        title: string
        content: {
          description: string
          name: string
          address: string
          website: string
        }
      }
      intellectual: {
        title: string
        content: {
          para1: string
          para2: string
        }
      }
      privacy: {
        title: string
        content: {
          para1: string
          para2: string
          para3: string
          para4: string
        }
      }
      cookies: {
        title: string
        content: {
          para1: string
          para2: string
        }
      }
      liability: {
        title: string
        content: {
          para1: string
          para2: string
        }
      }
      law: {
        title: string
        content: {
          para1: string
          para2: string
        }
      }
    }
  }
  terms: {
    title: string
    subtitle: string
    lastUpdated: string
    sections: {
      object: {
        title: string
        content: {
          para1: string
          para2: string
        }
      }
      registration: {
        title: string
        content: {
          para1: string
          para2: string
          para3: string
          para4: string
        }
      }
      pricing: {
        title: string
        content: {
          para1: string
          para2: string
          pricing: {
            starter: string
            standard: string
            enterprise: string
          }
          para3: string
          para4: string
        }
      }
      withdrawal: {
        title: string
        content: {
          para1: string
          para2: string
          para3: string
          para4: string
          warning: string
        }
      }
      cancellation: {
        title: string
        content: {
          para1: string
          para2: string
          para3: string
        }
      }
      training: {
        title: string
        content: {
          para1: string
          para2: string
          para3: string
          para4: string
        }
      }
      intellectual: {
        title: string
        content: {
          para1: string
          para2: string
          para3: string
        }
      }
      liability: {
        title: string
        content: {
          para1: string
          para2: string
          para3: string
        }
      }
      privacy: {
        title: string
        content: {
          para1: string
          para2: string
          para3: string
        }
      }
      law: {
        title: string
        content: {
          para1: string
          para2: string
        }
      }
      acceptance: {
        title: string
        content: string
      }
    }
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
          title: "🚀 Product Builder Masterclass",
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
          title: "🚀 Product Builder Masterclass",
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
          buttonText: "Réserver une Session"
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
    contact: {
      title: "Contact",
      description: "Réservez directement un créneau de 15 minutes pour discuter de votre projet ou poser vos questions."
    },
    legal: {
      title: "Mentions légales",
      subtitle: "Vibe Coding Paris",
      lastUpdated: "Dernière mise à jour : 24 septembre 2025",
      sections: {
        editor: {
          title: "1. Éditeur du site",
          content: {
            description: "Le présent site est édité par :",
            name: "Tewfiq Ferahi",
            organization: "Vibe Coding Paris",
            address1: "25, rue des Renaudes",
            address2: "75017 Paris — France",
            email: "tewfiqonline@gmail.com",
            status: "Statut juridique : Micro-entreprise",
            siret: "N° SIRET : 803 737 311",
            tva: "TVA intracommunautaire : FR10803737311"
          }
        },
        director: {
          title: "2. Directeur de publication",
          content: "Le directeur de la publication est Tewfiq Ferahi, en sa qualité de fondateur de Vibe Coding Paris."
        },
        hosting: {
          title: "3. Hébergeur du site",
          content: {
            description: "Le site est hébergé par :",
            name: "Netlify",
            address: "https://www.netlify.com/",
            website: "https://vb.tfq.one/"
          }
        },
        intellectual: {
          title: "4. Propriété intellectuelle",
          content: {
            para1: "L'ensemble des contenus du site (textes, images, graphismes, logos, vidéos, etc.) est protégé par le droit d'auteur et reste la propriété exclusive de Vibe Coding Paris, sauf mention contraire.",
            para2: "Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite."
          }
        },
        privacy: {
          title: "5. Données personnelles",
          content: {
            para1: "Conformément au Règlement Général sur la Protection des Données (RGPD) :",
            para2: "Les informations collectées via le site (formulaire de contact, réservation, paiement) sont nécessaires à la gestion des inscriptions et de la relation client.",
            para3: "Les données sont traitées de manière confidentielle et ne sont jamais revendues à des tiers.",
            para4: "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données, que vous pouvez exercer en écrivant à :"
          }
        },
        cookies: {
          title: "6. Cookies",
          content: {
            para1: "Le site peut utiliser des cookies pour améliorer l'expérience utilisateur et des outils de mesure d'audience.",
            para2: "Vous pouvez gérer vos préférences de cookies directement depuis votre navigateur."
          }
        },
        liability: {
          title: "7. Responsabilité",
          content: {
            para1: "L'éditeur du site met tout en œuvre pour assurer l'exactitude des informations diffusées, mais ne peut être tenu responsable d'erreurs, d'omissions ou de dysfonctionnements techniques.",
            para2: "L'utilisation du site se fait sous la responsabilité exclusive de l'utilisateur."
          }
        },
        law: {
          title: "8. Droit applicable",
          content: {
            para1: "Les présentes mentions légales sont régies par le droit français.",
            para2: "Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux de Paris."
          }
        }
      }
    },
    terms: {
      title: "Conditions Générales",
      subtitle: "de Vente (CGV)",
      lastUpdated: "Dernière mise à jour : 24 septembre 2025",
      sections: {
        object: {
          title: "1. Objet",
          content: {
            para1: "Les présentes Conditions Générales de Vente (CGV) régissent la vente en ligne des ateliers et formations proposés par Vibe Coding Paris (ci-après \"l'Organisateur\"), accessibles via le site internet https://vb.tfq.one/",
            para2: "Toute inscription à une formation implique l'acceptation sans réserve des présentes CGV."
          }
        },
        registration: {
          title: "2. Inscription & Public concerné",
          content: {
            para1: "Les formations sont ouvertes à toute personne majeure.",
            para2: "Les mineurs de plus de 15 ans peuvent participer uniquement avec une autorisation écrite de leurs représentants légaux.",
            para3: "Chaque session est limitée à 14 participants maximum.",
            para4: "L'inscription est validée après paiement en ligne via Stripe et réception de l'email de confirmation."
          }
        },
        pricing: {
          title: "3. Tarifs & Modalités de paiement",
          content: {
            para1: "Les prix sont indiqués en euros, TTC (toutes taxes comprises).",
            para2: "Trois formules sont proposées :",
            pricing: {
              starter: "Starter : 149 € TTC (tarif -26 ans et demandeurs d'emploi).",
              standard: "Standard : 299 € TTC par personne.",
              enterprise: "Entreprise/École : tarif sur devis."
            },
            para3: "Le paiement s'effectue exclusivement en ligne via la plateforme sécurisée Stripe.",
            para4: "Aucune participation ne sera possible sans paiement complet au moment de l'inscription."
          }
        },
        withdrawal: {
          title: "4. Droit de rétractation",
          content: {
            para1: "Conformément au Code de la consommation :",
            para2: "Vous disposez d'un délai de 14 jours après votre inscription pour exercer votre droit de rétractation, sans motif.",
            para3: "Pour exercer ce droit, envoyez un email à [adresse de contact] en indiquant vos coordonnées et la formation concernée.",
            para4: "Le remboursement sera effectué via Stripe dans un délai de 14 jours maximum.",
            warning: "Si la formation a lieu avant la fin du délai légal de rétractation, vous reconnaissez renoncer expressément à ce droit."
          }
        },
        cancellation: {
          title: "5. Annulation & report",
          content: {
            para1: "En cas d'annulation de la part de l'Organisateur (force majeure, nombre insuffisant de participants…), un remboursement intégral sera proposé ou une reprogrammation à une date ultérieure.",
            para2: "En cas d'annulation par le participant après la période légale de rétractation, aucun remboursement ne sera effectué, sauf cas de force majeure justifié (maladie grave, hospitalisation).",
            para3: "Le transfert d'une place à une autre personne est possible sur demande écrite avant la formation."
          }
        },
        training: {
          title: "6. Déroulement des formations",
          content: {
            para1: "Les ateliers se déroulent en présentiel à Paris, en salle équipée (adresse précisée lors de l'inscription).",
            para2: "Les sessions accueillent jusqu'à 14 participants.",
            para3: "Les participants doivent apporter leur propre ordinateur (BYOD – Bring Your Own Device).",
            para4: "L'Organisateur ne pourra être tenu responsable d'éventuels problèmes techniques liés au matériel personnel du participant."
          }
        },
        intellectual: {
          title: "7. Propriété intellectuelle",
          content: {
            para1: "Les supports pédagogiques, méthodes et contenus partagés durant les formations sont protégés par le droit d'auteur.",
            para2: "Toute reproduction, diffusion ou utilisation en dehors d'un cadre strictement personnel est interdite sans l'accord écrit de l'Organisateur.",
            para3: "Le participant conserve l'entière propriété des projets réalisés lors de la formation."
          }
        },
        liability: {
          title: "8. Responsabilité",
          content: {
            para1: "L'Organisateur met tout en œuvre pour assurer la qualité des formations.",
            para2: "Il ne pourra être tenu responsable en cas de force majeure (grève, coupure internet/électricité, indisponibilité des locaux, etc.).",
            para3: "L'Organisateur ne pourra être tenu responsable des dommages matériels, pertes de données ou préjudices indirects liés à l'utilisation des outils présentés."
          }
        },
        privacy: {
          title: "9. Protection des données personnelles (RGPD)",
          content: {
            para1: "Les informations collectées (nom, prénom, email, données de paiement) sont nécessaires pour gérer les inscriptions et le suivi des formations.",
            para2: "Elles sont traitées de manière confidentielle et sécurisée via Stripe et Cal.com.",
            para3: "Conformément à la réglementation RGPD, vous pouvez exercer vos droits d'accès, de rectification ou de suppression de vos données en écrivant à [adresse de contact]."
          }
        },
        law: {
          title: "10. Droit applicable & litiges",
          content: {
            para1: "Les présentes CGV sont régies par le droit français.",
            para2: "En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux de Paris seront compétents."
          }
        },
        acceptance: {
          title: "✍️ Acceptation",
          content: "En validant votre inscription et en procédant au paiement en ligne, vous reconnaissez avoir lu, compris et accepté les présentes CGV."
        }
      }
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
          title: "🚀 Product Builder Masterclass",
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
          title: "🚀 Product Builder Masterclass",
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
          buttonText: "Book a Session"
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
    contact: {
      title: "Contact",
      description: "Book directly a 15-minute slot to discuss your project or ask your questions."
    },
    legal: {
      title: "Legal Notice",
      subtitle: "Vibe Coding Paris",
      lastUpdated: "Last updated: September 24, 2025",
      sections: {
        editor: {
          title: "1. Site Editor",
          content: {
            description: "This site is published by:",
            name: "Tewfiq Ferahi",
            organization: "Vibe Coding Paris",
            address1: "25, rue des Renaudes",
            address2: "75017 Paris — France",
            email: "tewfiqonline@gmail.com",
            status: "Legal status: Micro-enterprise",
            siret: "SIRET No.: 803 737 311",
            tva: "Intra-community VAT: FR10803737311"
          }
        },
        director: {
          title: "2. Publication Director",
          content: "The publication director is Tewfiq Ferahi, in his capacity as founder of Vibe Coding Paris."
        },
        hosting: {
          title: "3. Website Hosting",
          content: {
            description: "The site is hosted by:",
            name: "Netlify",
            address: "https://www.netlify.com/",
            website: "https://vb.tfq.one/"
          }
        },
        intellectual: {
          title: "4. Intellectual Property",
          content: {
            para1: "All site content (text, images, graphics, logos, videos, etc.) is protected by copyright and remains the exclusive property of Vibe Coding Paris, unless otherwise stated.",
            para2: "Any reproduction, representation, modification or exploitation, total or partial, without prior written authorization, is strictly prohibited."
          }
        },
        privacy: {
          title: "5. Personal Data",
          content: {
            para1: "In accordance with the General Data Protection Regulation (GDPR):",
            para2: "Information collected via the site (contact form, reservation, payment) is necessary for managing registrations and customer relations.",
            para3: "Data is processed confidentially and is never resold to third parties.",
            para4: "You have the right to access, rectify and delete your data, which you can exercise by writing to:"
          }
        },
        cookies: {
          title: "6. Cookies",
          content: {
            para1: "The site may use cookies to improve user experience and audience measurement tools.",
            para2: "You can manage your cookie preferences directly from your browser."
          }
        },
        liability: {
          title: "7. Liability",
          content: {
            para1: "The site editor makes every effort to ensure the accuracy of the information disseminated, but cannot be held responsible for errors, omissions or technical malfunctions.",
            para2: "Use of the site is under the exclusive responsibility of the user."
          }
        },
        law: {
          title: "8. Applicable Law",
          content: {
            para1: "These legal notices are governed by French law.",
            para2: "Any dispute relating to the use of the site will be subject to the exclusive jurisdiction of the Paris courts."
          }
        }
      }
    },
    terms: {
      title: "Terms and Conditions",
      subtitle: "of Sale (T&C)",
      lastUpdated: "Last updated: September 24, 2025",
      sections: {
        object: {
          title: "1. Purpose",
          content: {
            para1: "These Terms and Conditions of Sale (T&C) govern the online sale of workshops and training offered by Vibe Coding Paris (hereinafter \"the Organizer\"), accessible via the website https://vb.tfq.one/",
            para2: "Any registration for training implies unreserved acceptance of these T&C."
          }
        },
        registration: {
          title: "2. Registration & Target Audience",
          content: {
            para1: "Training is open to any adult.",
            para2: "Minors over 15 years old can participate only with written authorization from their legal guardians.",
            para3: "Each session is limited to a maximum of 14 participants.",
            para4: "Registration is validated after online payment via Stripe and receipt of the confirmation email."
          }
        },
        pricing: {
          title: "3. Pricing & Payment Methods",
          content: {
            para1: "Prices are indicated in euros, all taxes included (TTC).",
            para2: "Three formulas are offered:",
            pricing: {
              starter: "Starter: €149 TTC (rate for under 26 & job seekers).",
              standard: "Standard: €299 TTC per person.",
              enterprise: "Company/School: quote on request."
            },
            para3: "Payment is made exclusively online via the secure Stripe platform.",
            para4: "No participation will be possible without full payment at the time of registration."
          }
        },
        withdrawal: {
          title: "4. Right of Withdrawal",
          content: {
            para1: "In accordance with the Consumer Code:",
            para2: "You have 14 days after your registration to exercise your right of withdrawal, without reason.",
            para3: "To exercise this right, send an email to [contact address] indicating your details and the training concerned.",
            para4: "The refund will be made via Stripe within a maximum of 14 days.",
            warning: "However, if the training takes place before the end of the legal withdrawal period, you acknowledge expressly waiving this right."
          }
        },
        cancellation: {
          title: "5. Cancellation & Postponement",
          content: {
            para1: "In case of cancellation by the Organizer (force majeure, insufficient number of participants...), a full refund will be offered or rescheduling to a later date.",
            para2: "In case of cancellation by the participant after the legal withdrawal period, no refund will be made, except in cases of justified force majeure (serious illness, hospitalization).",
            para3: "Transfer of a place to another person is possible upon written request before the training."
          }
        },
        training: {
          title: "6. Training Conduct",
          content: {
            para1: "Workshops take place in person in Paris, in an equipped room (address specified during registration).",
            para2: "Sessions accommodate up to 14 participants.",
            para3: "Participants must bring their own computer (BYOD – Bring Your Own Device).",
            para4: "The Organizer cannot be held responsible for any technical problems related to the participant's personal equipment."
          }
        },
        intellectual: {
          title: "7. Intellectual Property",
          content: {
            para1: "Educational materials, methods and content shared during training are protected by copyright.",
            para2: "Any reproduction, distribution or use outside of a strictly personal framework is prohibited without the written agreement of the Organizer.",
            para3: "The participant retains full ownership of projects created during the training."
          }
        },
        liability: {
          title: "8. Liability",
          content: {
            para1: "The Organizer makes every effort to ensure the quality of training.",
            para2: "It cannot be held responsible in cases of force majeure (strike, internet/electricity outage, unavailability of premises, etc.).",
            para3: "The Organizer cannot be held responsible for material damage, data loss or indirect damages related to the use of the tools presented."
          }
        },
        privacy: {
          title: "9. Personal Data Protection (GDPR)",
          content: {
            para1: "The information collected (name, first name, email, payment data) is necessary to manage registrations and training follow-up.",
            para2: "They are processed confidentially and securely via Stripe and Cal.com.",
            para3: "In accordance with GDPR regulations, you can exercise your rights of access, rectification or deletion of your data by writing to [contact address]."
          }
        },
        law: {
          title: "10. Applicable Law & Disputes",
          content: {
            para1: "These T&C are governed by French law.",
            para2: "In case of dispute, an amicable solution will be sought. Otherwise, the Paris courts will be competent."
          }
        },
        acceptance: {
          title: "✍️ Acceptance",
          content: "By validating your registration and proceeding with online payment, you acknowledge having read, understood and accepted these T&C."
        }
      }
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