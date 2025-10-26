
# PRD - Refonte Landing Page VibeCoding 2025

**Document Auteur:** Gemini
**Version:** 1.0
**Date:** 2025-10-13

## 1.0 Vue d'ensemble

Ce document définit les exigences pour la refonte complète de la landing page de VibeCoding et de ses pages associées. L'objectif est de créer une expérience utilisateur plus claire, plus engageante et optimisée pour la conversion, tout en établissant un nouveau Design System (nom de code "VibeUI v2.0") pour assurer la cohérence et la qualité visuelle.

### 1.1 Objectifs Principaux

1.  **Augmenter le Taux de Conversion (CRO):** Simplifier le parcours utilisateur pour l'inscription à la masterclass.
2.  **Améliorer l'Image de Marque:** Projeter une image moderne, professionnelle et experte dans le domaine de l'IA et du développement.
3.  **Clarifier l'Offre:** Rendre la section "Programme" plus digeste et facile à comprendre.
4.  **Performance & Accessibilité:** Assurer un chargement rapide et une compatibilité totale avec les standards d'accessibilité (WCAG).
5.  **Modularité:** Construire la page avec des composants réutilisables pour faciliter les futures itérations.

### 1.2 Public Cible

*   **Développeurs en Reconversion:** Professionnels de la tech souhaitant se spécialiser en IA.
*   **Étudiants & Jeunes Diplômés:** Cherchant à acquérir des compétences de pointe pour le marché du travail.
*   **Chefs de Projet & Product Managers:** Voulant comprendre les enjeux techniques de l'IA.

---

## 2.0 Architecture du Site & URLs

La structure des URLs doit être simple, sémantique et optimisée pour le SEO.

*   **Page d'accueil (FR):** `https://vibecoding.com/`
*   **Page d'accueil (EN):** `https://vibecoding.com/en`
*   **À Propos:** `https://vibecoding.com/a-propos` (EN: `/en/about`)
*   **Contact:** `https://vibecoding.com/contact` (EN: `/en/contact`)
*   **Mentions Légales:** `https://vibecoding.com/mentions-legales` (EN: `/en/legal-notice`)
*   **Conditions Générales de Vente:** `https://vibecoding.com/cgv` (EN: `/en/terms-of-service`)

---

## 3.0 Internationalisation & Thèmes

### 3.1 Versioning Linguistique (FR/EN)

*   Le site sera disponible en Français (par défaut) et en Anglais.
*   Un composant `LanguageSwitcher` permettra de basculer entre les langues. Le choix de l'utilisateur sera sauvegardé.
*   La détection de la langue du navigateur sera utilisée pour la première visite.

### 3.2 Thèmes (Dark / Light / System)

*   Le site proposera 3 modes d'affichage : Clair, Sombre et Système.
*   Un composant `ThemeSwitcher` permettra à l'utilisateur de choisir son mode préféré.
*   Le mode Sombre sera le mode par défaut pour préserver l'identité "coding" de la marque.

---

## 4.0 Design System "VibeUI v2.0"

Ce nouveau Design System sera la fondation visuelle du projet.

*   **Philosophie:** Minimaliste, centré sur la typographie, avec des touches de couleurs vives pour les actions. Accessible et moderne.
*   **Palette de Couleurs:**
    *   **Dark Mode:**
        *   Background: `#0A0A0A`
        *   Surface (Cards/Modals): `#141414`
        *   Primary Text: `#F5F5F5`
        *   Secondary Text: `#A3A3A3`
        *   Accent (CTA, Links): `#8A2BE2` (Violet Électrique)
        *   Accent Hover: `#9932CC`
    *   **Light Mode:**
        *   Background: `#F5F5F5`
        *   Surface (Cards/Modals): `#FFFFFF`
        *   Primary Text: `#0A0A0A`
        *   Secondary Text: `#525252`
        *   Accent (CTA, Links): `#8A2BE2`
        *   Accent Hover: `#7B1FA2`
*   **Typographie:**
    *   **Titres (Headings):** `Poppins` (Bold, SemiBold)
    *   **Corps de texte (Body):** `Inter` (Regular, Medium)
*   **Espacement & Grille:** Base de `8px`. Tous les espacements (paddings, margins) seront des multiples de 8.
*   **Composants de Base:** Button, Card, Input, Accordion, Tabs, Dialog, Badge. Chaque composant sera conçu pour être entièrement accessible (navigation clavier, ARIA attributes).

---

## 5.0 Section Map (Plan de la Landing Page)

1.  `#header`: Navigation principale.
2.  `#hero`: Section d'introduction percutante.
3.  `#partners`: Preuve sociale (logos des partenaires).
4.  `#why-vibe`: Proposition de valeur (pourquoi nous choisir ?).
5.  `#programme`: **(Refonte)** Contenu détaillé de la formation, rendu digeste.
6.  `#next-masterclass`: Informations sur la prochaine session et CTA principal.
7.  `#method`: Les 3 étapes de la méthode VibeCoding.
8.  `#social-proof`: Témoignages des anciens élèves.
9.  `#pricing`: Grille tarifaire.
10. `#faq`: Foire Aux Questions.
11. `#footer`: Pied de page avec liens de navigation et informations légales.

---

## 6.0 Contenu Détaillé par Section

### 6.1 Header (`#header`)

*   **Objectif:** Permettre une navigation simple et rapide.
*   **Contenu (Gauche):** Logo VibeCoding.
*   **Contenu (Droite):** Liens (`Programme`, `Tarifs`, `FAQ`), `LanguageSwitcher`, `ThemeSwitcher`, CTA "S'inscrire".
*   **Comportement:** Le header est "sticky" et se réduit légèrement au scroll pour maximiser l'espace visible.

### 6.2 Hero Section (`#hero`)

*   **Objectif:** Capter l'attention en 3 secondes et communiquer la proposition de valeur principale.
*   **UX Writing:**
    *   **Titre Principal (H1):** "Devenez Développeur IA en 12 semaines."
    *   **Sous-titre:** "Notre masterclass intensive vous forme à construire, entraîner et déployer des applications basées sur les derniers modèles de langage (LLMs)."
    *   **CTA Primaire:** `[Button Primary]` "Réserver ma place" (ancre vers `#pricing`)
    *   **CTA Secondaire:** `[Button Secondary]` "Voir le programme" (ancre vers `#programme`)
*   **Visuel:** Animation de fond subtile (type `RetroGrid` ou `GlowingEffect`) pour un look tech. Pas d'image de stock.
*   **CRO:** Le H1 et le sous-titre doivent être extrêmement clairs. Le CTA principal doit être la couleur la plus vive de la page.

### 6.3 Programme (`#programme`) - **REFONTE MAJEURE**

*   **Objectif:** Présenter le programme de manière structurée, digeste et non intimidante.
*   **Structure:** Utilisation d'un composant `Tabs` ou `Accordion` pour diviser le programme en 3 blocs logiques.
    *   **Tab 1: Les Fondations (Semaines 1-4)**
        *   **Titre:** Maîtrisez les bases de l'IA et de Python.
        *   **Contenu:**
            *   Introduction aux LLMs (GPT, Llama, Mistral).
            *   Setup de l'environnement de développement.
            *   Python pour l'IA : librairies essentielles (Pandas, NumPy).
            *   Principes du Prompt Engineering.
            *   **Projet 1:** Création d'un chatbot simple en ligne de commande.
    *   **Tab 2: Développement Backend & APIs (Semaines 5-8)**
        *   **Titre:** Construisez des applications robustes.
        *   **Contenu:**
            *   Frameworks Backend (FastAPI, Flask).
            *   Intégration d'APIs (OpenAI, Genkit).
            *   Bases de données vectorielles (Pinecone, ChromaDB).
            *   Techniques de RAG (Retrieval-Augmented Generation).
            *   **Projet 2:** Développement d'une API de Q&A sur une base de documents.
    *   **Tab 3: Frontend & Déploiement (Semaines 9-12)**
        *   **Titre:** Donnez vie à vos projets et mettez-les en ligne.
        *   **Contenu:**
            *   Bases de React/Next.js pour l'IA.
            *   State management pour applications interactives.
            *   Déploiement sur le cloud (Vercel, Google Cloud).
            *   Monitoring et optimisation des coûts.
            *   **Projet Final:** Création et déploiement d'une application full-stack complète (ex: un agent de recherche autonome).
*   **Composants Clés:** `Tabs`, `Card`, `Badge` (pour les technologies).

### 6.4 Pricing (`#pricing`)

*   **Objectif:** Présenter les tarifs de manière transparente et inciter à l'action.
*   **UX Writing:**
    *   **Titre:** "Choisissez votre voie vers l'expertise."
    *   **Contenu:** 2 ou 3 cartes de prix claires.
        *   **Option 1: "Masterclass Complète"** - €XXXX - Liste des bénéfices. CTA "S'inscrire maintenant".
        *   **Option 2: "Paiement en 3x"** - €YYYY/mois - CTA "Choisir cette option".
*   **CRO:** Mettre en avant l'option la plus populaire avec un badge "Recommandé". Afficher clairement les logos des moyens de paiement (Stripe, CB, etc.).

---

## 7.0 Widgets & Éléments Flottants

### 7.1 Floating QR Code Button

*   **Objectif:** Faciliter le partage de la page ou la transition vers le mobile.
*   **Composant:** `QRShareButton`.
*   **Position:** Flottant en bas à droite de l'écran.
*   **Interaction:**
    1.  Au clic, une modale (`Dialog`) s'ouvre.
    2.  La modale affiche un QR code de l'URL actuelle (`https://vibecoding.com`).
    3.  Texte dans la modale : "Flashez pour ouvrir sur votre mobile ou partager."
*   **Design:** Le bouton flottant est un cercle avec une icône de QR code, utilisant la couleur d'accent.

---

## 8.0 Animations & Composants d'Animation

L'animation doit être subtile et servir l'expérience, pas la distraire.

*   **On Scroll Animations:** Utiliser `framer-motion` pour des effets de `fadeIn` et `slideIn` légers lorsque les sections apparaissent dans le viewport.
*   **Hover Effects:** Les boutons et les cartes auront une légère animation de `scale` ou de `box-shadow` au survol.
*   **Micro-interactions:**
    *   `Button`: Effet de "ripple" au clic.
    *   `Input`: Le label se déplace lorsque l'utilisateur commence à taper.
*   **Composants d'animation dédiés:**
    *   `RetroGrid`: Grille animée pour l'arrière-plan du Hero.
    *   `Typewriter`: Effet de machine à écrire pour certains titres ou slogans si nécessaire.
    *   `GlowingEffect`: Effet de lueur subtil autour des cartes importantes.

---

## 9.0 Intégrations & Add-ons

*   **Analytics:** Vercel Analytics (par défaut) + Google Analytics (via `react-ga`).
*   **Paiement:** Stripe Checkout pour une intégration sécurisée et simple.
*   **Emailing/CRM:** Resend ou SendGrid pour les emails transactionnels (confirmation d'inscription).
*   **Police:** Google Fonts (`Poppins`, `Inter`).

---
