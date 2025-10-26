# Configuration du Partage sur les Réseaux Sociaux

Ce document explique comment les meta tags sont configurés pour optimiser le partage sur les réseaux sociaux (Twitter/X, LinkedIn, Facebook).

## 🎯 Vue d'ensemble

Le site utilise les meta tags Open Graph et Twitter Cards pour afficher des previews riches lors du partage sur les réseaux sociaux.

### Formats supportés :
- **Twitter/X** : Twitter Cards (summary_large_image)
- **LinkedIn** : Open Graph
- **Facebook** : Open Graph
- **Autres** : Open Graph (WhatsApp, Slack, Discord, etc.)

## 📐 Dimensions des images

### Format recommandé
- **Taille** : 1200 x 630 pixels
- **Ratio** : 1.91:1
- **Format** : JPG, PNG, GIF
- **Poids max** : < 5MB

### Images actuellement utilisées
- Articles blog : Images des posts (`post.image`)
- Page blog : `/backgrounds/paris-hero.gif`
- Site général : `/backgrounds/paris-hero.gif`

## 🔧 Configuration technique

### 1. Layout principal (`src/app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vibecoding",
  },
}
```

### 2. Pages d'articles (`src/app/blog/[slug]/page.tsx`)

Chaque article génère ses propres meta tags avec :
- Titre de l'article
- Description (excerpt)
- Image spécifique
- Tags/mots-clés
- Auteur
- Date de publication

### 3. Page liste blog (`src/app/blog/page.tsx`)

Meta tags génériques pour la page de liste des articles.

## 🌐 Variables d'environnement

Créer un fichier `.env.local` :

```bash
NEXT_PUBLIC_SITE_URL=https://vb.tfq.one
```

## 📱 Test des previews

### Twitter/X
1. Aller sur https://cards-dev.twitter.com/validator
2. Entrer l'URL de votre article
3. Vérifier la preview

### LinkedIn
1. Aller sur https://www.linkedin.com/post-inspector/
2. Entrer l'URL
3. Vérifier la preview

### Facebook
1. Aller sur https://developers.facebook.com/tools/debug/
2. Entrer l'URL
3. Cliquer sur "Scrape Again" si nécessaire

## 📋 Checklist de vérification

Pour chaque nouvel article :
- [ ] Image de preview (1200x630px)
- [ ] Titre optimisé (< 60 caractères)
- [ ] Description claire (< 160 caractères)
- [ ] Tags pertinents
- [ ] URL canonical définie
- [ ] Test sur validators

## 🎨 Exemples de meta tags générés

### Article de blog

```html
<!-- Open Graph -->
<meta property="og:title" content="PDG d'une armée d'IA : 5 leçons..." />
<meta property="og:description" content="Découvrez comment orchestrer..." />
<meta property="og:url" content="https://vb.tfq.one/blog/..." />
<meta property="og:image" content="https://vb.tfq.one/backgrounds/..." />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="article" />
<meta property="article:published_time" content="2025-10-25" />
<meta property="article:author" content="Tewfiq Ziouche" />
<meta property="article:tag" content="IA" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="PDG d'une armée d'IA..." />
<meta name="twitter:description" content="Découvrez comment..." />
<meta name="twitter:image" content="https://vb.tfq.one/..." />
<meta name="twitter:creator" content="@vibecoding" />
```

## 🔗 Ressources utiles

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Guide](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

## 💡 Bonnes pratiques

1. **Titre** : Concis et accrocheur (50-60 caractères)
2. **Description** : Claire et engageante (120-160 caractères)
3. **Image** : Haute qualité, texte lisible, brand visible
4. **Hashtags** : Dans le texte du post, pas dans les meta tags
5. **Test** : Toujours tester avant de partager largement

## 🚀 Pour aller plus loin

### Créer des images optimisées

Outils recommandés :
- **Canva** : Templates réseaux sociaux
- **Figma** : Design personnalisé
- **ImageMagick** : Conversion/redimensionnement
- **TinyPNG** : Compression

### Template d'image suggéré

```
┌─────────────────────────────────────┐
│                                     │
│  Logo Vibe Coding Paris (haut gauche)│
│                                     │
│     TITRE DE L'ARTICLE              │
│     (Grand, bold, centré)           │
│                                     │
│     Description courte ou           │
│     point clé de l'article          │
│                                     │
│  Tewfiq Ziouche | vb.tfq.one  │
│  (bas, petite taille)               │
└─────────────────────────────────────┘
```

## ⚡ Performance

Les meta tags n'affectent pas les performances :
- Génération statique (SSG)
- Pas de JavaScript côté client
- Cache navigateur/CDN activé
