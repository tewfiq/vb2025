# Social Proof Realtime Toasts - Setup Guide

## Overview

Ce guide vous accompagne pour mettre en place le widget de social proof en temps réel sur vb.tfq.one. Le système affiche des toasts en bas à gauche montrant les visites, consultations de blog, et réservations en temps réel via Supabase Realtime.

## 🚀 Quick Start

### 1. Configuration Supabase

#### a) Exécuter le SQL
1. Allez sur [Supabase Dashboard](https://app.supabase.com)
2. Sélectionnez votre projet
3. Allez à **SQL Editor** > **New Query**
4. Copie le contenu de `SUPABASE_SETUP.sql`
5. Exécutez la query

**Résultat attendu**: Pas d'erreur, table `visits` créée

#### b) Récupérer la Service Role Key
1. Allez à **Settings > API**
2. Cherchez la section "service_role"
3. Copiez la clé complète (commence par `eyJ...`)

### 2. Variables d'Environnement

`.env.local` (local development):
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
NEXT_PUBLIC_TOAST_SHOW_MS=6000
NEXT_PUBLIC_SOCIAL_PROOF_ENABLED=true
```

**Vercel/Production**:
1. Allez à votre projet Vercel
2. **Settings > Environment Variables**
3. Ajouter les mêmes variables (sauf NEXT_PUBLIC_SUPABASE_ANON_KEY qui est public)

### 3. Fichiers Créés

```
src/
├── lib/supabase/
│   └── client.ts          # Client Supabase (anon) - pour Realtime
├── components/social-proof/
│   ├── track-visit.tsx         # Envoie visites à /api/track
│   └── social-proof-toasts.tsx # Affiche toasts en temps réel
├── app/api/track/
│   └── route.ts           # API endpoint pour logger visites (crée client service_role au runtime)
└── types/
    └── social-proof.ts    # Types TypeScript
```

**Note**: Le client Supabase avec service role est créé uniquement au runtime dans `/api/track/route.ts`, jamais à l'import time. Cela empêche Next.js d'inclure les secrets dans le webpack bundle.

## 📊 Architecture

### Flow complet:

```
1. Visiteur arrive sur vb.tfq.one
   ↓
2. TrackVisit.tsx détecte la visite
   ↓
3. Envoie POST /api/track avec:
   - page_path
   - lang (browser language)
   - eventType (visit, booking, blog_view, pricing_view)
   ↓
4. API route /api/track:
   - Récupère IP et géolocalisation (ipapi.co)
   - Insère dans Supabase.visits via service_role
   ↓
5. Supabase Realtime notifie tous les clients abonnés
   ↓
6. SocialProofToasts.tsx affiche le toast animé
```

## 🎯 Configuration Avancée

### Types d'événements

Le système supporte 4 types d'événements:

| Type | Description | Détection |
|------|-------------|-----------|
| `visit` | Visite simple | Page par défaut |
| `blog_view` | Consultation blog | `/blog` en URL |
| `pricing_view` | Consultation pricing | `/pricing` ou `#pricing` en URL |
| `booking` | Réservation effectuée | À implémenter (voir ci-dessous) |

### Tracker une réservation custom

Dans votre composant de paiement/réservation:

```tsx
export async function trackBooking() {
  const response = await fetch("/api/track", {
    method: "POST",
    body: JSON.stringify({
      pagePath: "/pricing",
      lang: navigator.language?.split("-")[0],
      eventType: "booking", // ← Type custom
    }),
  });
  
  if (!response.ok) {
    console.error("Failed to track booking");
  }
}
```

**Important**: N'importez JAMAIS `supabaseServer` ou les clés secrètes côté client. L'API `/api/track` s'occupe de tout côté serveur.

### Personnaliser les noms/villes

Éditez `src/components/social-proof/social-proof-toasts.tsx`:

```tsx
const NAMES = [
  "Sophie", "Mohamed", "Camille", 
  // Ajouter vos noms ici
];

const CITIES = [
  "Paris", "Lyon", "Marseille",
  // Ajouter vos villes ici
];
```

### Changer la durée d'affichage

`.env.local`:
```env
NEXT_PUBLIC_TOAST_SHOW_MS=8000  # 8 secondes au lieu de 6
```

### Désactiver le widget

`.env.local`:
```env
NEXT_PUBLIC_SOCIAL_PROOF_ENABLED=false
```

## 🧪 Tests

### Test Local

1. Démarrez votre dev server:
   ```bash
   npm run dev
   ```

2. Ouvrez http://localhost:9002

3. Attendez 2-5 secondes - un toast doit apparaître en bas à gauche

4. Ouvrez une 2e tab et modifiez l'URL (ex: `/blog`) - un toast pour chaque nouvelle URL

5. Allez dans Supabase > Table Editor > `visits` - vérifiez les données

### Test Production

1. Déployez sur Vercel:
   ```bash
   git push
   ```

2. Vérifiez les variables d'env sont configurées dans Vercel

3. Ouvrez votre site en production

4. Toasts doivent apparaître en temps réel

5. Vérifiez dans Supabase que les visites sont loggées

## 🔒 Sécurité & Privacy

### Qu'est-ce qui est collecté?

✅ Collecté:
- `page_path`: Page consultée
- `city`: Ville approximative (via ipapi.co, best-effort)
- `country`: Code pays
- `lang`: Langue du navigateur
- `event_type`: Type d'événement (visit, booking, etc.)

❌ NON collecté:
- IP exacte (pas stockée)
- Email
- Nom réel
- User Agent (stocké mais jamais affiché)

### RLS (Row Level Security)

La table `visits` a RLS activé:
- ✅ Les clients anonymes peuvent **lire** (`SELECT`)
- ❌ Les clients anonymes **ne peuvent pas écrire** (`INSERT/UPDATE/DELETE`)
- ✅ Seul le `service_role` (API backend) peut insérer

**Résultat**: Impossible d'abuserdu système côté client

### RGPD Compliant

- Pas de cookies de tracking (sauf si consente)
- Pas de PII stockée
- Données anonymisées
- Peut être désactivé facilement

## 🐛 Troubleshooting

### Les toasts n'apparaissent pas

**Checklist**:
- [ ] `.env.local` configuré correctement?
- [ ] SQL exécuté dans Supabase?
- [ ] Service role key ajoutée à `.env.local`?
- [ ] `/api/track` répond 200? (Testez avec Postman)
- [ ] Realtime activé? (Supabase > Settings > Realtime doit être ON)
- [ ] `NEXT_PUBLIC_SOCIAL_PROOF_ENABLED=true` dans `.env.local`?

### Les visites ne sont pas loggées

**Debug**:
1. Ouvrez la console browser (F12)
2. Allez à Network > Fetch/XHR
3. Vérifiez que `/api/track` envoie une request
4. Vérifiez la réponse (doit être 200 avec `{"ok": true}`)

Si pas de request:
- Vérifiez que `sessionStorage` n'a pas déjà marqué cette URL comme trackée
- Effacez sessionStorage et rechargez

### Supabase Realtime ne fonctionne pas

**Solution**:
1. Allez à Supabase > Settings > Realtime
2. Vérifiez que "Realtime" est ENABLED
3. Vérifiez que la table `visits` est ajoutée à la publication

## 📈 Monitoring

### Voir les visites en temps réel

1. Supabase Dashboard > Table Editor
2. Sélectionnez `visits`
3. Vous verrez les nouveaux inserts en temps réel

### Analytics

Les données dans Supabase peuvent être requêtées via:
- SQL: `SELECT COUNT(*) FROM visits WHERE created_at > now() - interval '1 hour'`
- API: Utiliser les clients Supabase pour faire des queries

## 🎨 Customization

### Changer les couleurs du toast

Éditez `src/components/social-proof/social-proof-toasts.tsx`:

```tsx
className="... bg-white/95 dark:bg-neutral-900/95 ..."  // Background
className="... bg-blue-600 text-white hover:bg-blue-700 ..."  // Button
```

### Changer la position

`src/components/social-proof/social-proof-toasts.tsx`:

```tsx
<div className={`fixed bottom-4 ${side === "left" ? "left-4" : "right-4"} ...`}>
```

Ou dans `src/app/layout.tsx`:

```tsx
<SocialProofToasts side="right" enabled={...} />  // right au lieu de left
```

### Ajouter d'autres infos au toast

Éditez le rendu du toast dans `social-proof-toasts.tsx`:

```tsx
<p className="text-xs">
  {current.city} • {current.country} • {new Date(current.created_at).toLocaleTimeString()}
</p>
```

## 📚 Ressources

- [Supabase Docs](https://supabase.com/docs)
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)
- [ipapi.co API](https://ipapi.co/api/)
- [Framer Motion](https://www.framer.com/motion/)

## 🚨 Support

Si vous rencontrez des problèmes:

1. Vérifiez les logs de la console (F12)
2. Vérifiez les logs Supabase (Settings > Logs)
3. Testez l'API `/api/track` directement avec Postman
4. Vérifiez que Realtime est activé dans Supabase

---

**Version**: 1.0  
**Last Updated**: 29 Octobre 2025  
**Maintainer**: Tewfiq Ziouche
