# Guide de Test GA4 - Tracking des CTA de Paiement

## Vue d'ensemble

Ce guide vous explique comment tester et valider le tracking GA4 des CTA (Call-to-Action) de paiement sur votre site Vibe Coding Paris.

## Événements GA4 Implémentés

### 1. Événements E-commerce (Paiement)

| CTA | Événement GA4 | Prix | Plan |
|-----|--------------|------|------|
| **Starter Plan** (149€) | `begin_checkout` | 149 EUR | Starter - Product Builder Masterclass |
| **Standard Plan** (299€) | `begin_checkout` | 299 EUR | Standard - Product Builder Masterclass |
| **Team Plan** (Cal.com) | `consultation_click` | N/A | Team consultation |

**Paramètres envoyés avec `begin_checkout`:**
```javascript
{
  currency: "EUR",
  value: 149 // ou 299
  items: [{
    item_id: "starter_-_product_builder_masterclass",
    item_name: "Starter - Product Builder Masterclass",
    price: 149, // ou 299
    quantity: 1
  }]
}
```

### 2. Événements CTA Secondaires

| Emplacement | CTA | Événement | Label |
|------------|-----|-----------|-------|
| **Hero Section** | "Je m'inscris — 149€" | `cta_click` | Register Starter - Hero Section |
| **Hero Section** | "Réserver au tarif normal" | `cta_click` | Register Standard - Hero Section |
| **Header Desktop** | "Je m'inscris — 149€" | `cta_click` | Register - Header |
| **Footer** | "Rejoindre la prochaine session" | `cta_click` | Join Next Session - Footer |

### 3. Événements Cal.com (Consultations)

| Emplacement | Événement | Label |
|------------|-----------|-------|
| **Student Dialog** | `consultation_click` | Student Dialog - Header |
| **Team Plan (Pricing)** | `consultation_click` | Pricing - Team Plan |

---

## Comment Tester avec GA4 DebugView

### Étape 1: Activer le Mode Debug

#### Option A: Extension Chrome (Recommandée)
1. Installez l'extension **[Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)**
2. Cliquez sur l'icône de l'extension pour l'activer (elle devient bleue)
3. Rechargez votre page

#### Option B: Paramètre URL
Ajoutez `?debug_mode=true` à votre URL:
```
https://vb.tfq.one/?debug_mode=true
```

#### Option C: Console JavaScript
Ouvrez la console du navigateur (F12) et exécutez:
```javascript
window.gtag('config', 'VOTRE_GA_TRACKING_ID', { 'debug_mode': true });
```

### Étape 2: Accéder à DebugView

1. Connectez-vous à **[Google Analytics](https://analytics.google.com/)**
2. Sélectionnez votre propriété GA4
3. Dans le menu de gauche, allez à **Admin** > **DebugView**
4. Ou accédez directement: **Rapports** > **Temps réel** > Cliquez sur **DebugView**

### Étape 3: Tester Chaque CTA

Suivez cette checklist en cliquant sur chaque CTA:

#### ✅ Tests de Paiement (Pricing Section)

**Test 1: Starter Plan (149€)**
1. Allez à la section #pricing
2. Cliquez sur "Je m'inscris — 149€" (carte Starter)
3. Vérifiez dans DebugView:
   - ✓ Événement: `begin_checkout`
   - ✓ `currency`: EUR
   - ✓ `value`: 149
   - ✓ `items[0].item_name`: "Starter - Product Builder Masterclass"
   - ✓ `items[0].price`: 149

**Test 2: Standard Plan (299€)**
1. Cliquez sur "Réserver — 299€" (carte Standard)
2. Vérifiez dans DebugView:
   - ✓ Événement: `begin_checkout`
   - ✓ `currency`: EUR
   - ✓ `value`: 299
   - ✓ `items[0].item_name`: "Standard - Product Builder Masterclass"
   - ✓ `items[0].price`: 299

**Test 3: Team Plan (Cal.com)**
1. Cliquez sur "Réserver une Session" (carte Team)
2. Vérifiez dans DebugView:
   - ✓ Événement: `consultation_click`
   - ✓ `event_label`: "Pricing - Team Plan"
   - ✓ Redirection vers Cal.com

#### ✅ Tests CTA Hero Section

**Test 4: CTA Hero Starter**
1. Cliquez sur "Je m'inscris — 149€" (Hero)
2. Vérifiez dans DebugView:
   - ✓ Événement: `cta_click`
   - ✓ `event_label`: "Register Starter - Hero Section"

**Test 5: CTA Hero Standard**
1. Cliquez sur "Réserver au tarif normal" (Hero)
2. Vérifiez dans DebugView:
   - ✓ Événement: `cta_click`
   - ✓ `event_label`: "Register Standard - Hero Section"

#### ✅ Tests CTA Header & Footer

**Test 6: CTA Header**
1. Cliquez sur "Je m'inscris — 149€" (Header desktop)
2. Vérifiez dans DebugView:
   - ✓ Événement: `cta_click`
   - ✓ `event_label`: "Register - Header"

**Test 7: CTA Footer**
1. Scrollez en bas de page
2. Cliquez sur "Rejoindre la prochaine session" (Footer)
3. Vérifiez dans DebugView:
   - ✓ Événement: `cta_click`
   - ✓ `event_label`: "Join Next Session - Footer"

#### ✅ Tests Student Dialog

**Test 8: Student Dialog**
1. Cliquez sur "Mes étudiants" (Header)
2. Vérifiez dans DebugView:
   - ✓ Événement: `consultation_click`
   - ✓ `event_label`: "Student Dialog - Header"

---

## Vérification dans les Rapports GA4

### Rapports Temps Réel (Immédiat)
1. **Rapports** > **Temps réel** > **Aperçu**
2. Vérifiez les événements dans la section "Événements par nom d'événement"
3. Vous devriez voir:
   - `begin_checkout`
   - `cta_click`
   - `consultation_click`

### Rapports Événements (24h de délai)
1. **Rapports** > **Engagement** > **Événements**
2. Attendez 24-48h pour voir les données agrégées
3. Cliquez sur chaque événement pour voir les détails

### Explorations Personnalisées
1. **Explorer** > **Créer une exploration vierge**
2. Ajoutez ces dimensions:
   - Nom de l'événement
   - Libellé de l'événement
   - Valeur de l'événement
3. Ajoutez ces métriques:
   - Nombre d'événements
   - Nombre total d'utilisateurs
   - Valeur de l'événement

---

## Résolution de Problèmes

### Problème: Aucun événement n'apparaît dans DebugView

**Solutions:**
1. ✓ Vérifiez que `NEXT_PUBLIC_GA_TRACKING_ID` est défini dans `.env.local`
2. ✓ Vérifiez que le mode debug est activé (extension Chrome ou paramètre URL)
3. ✓ Ouvrez la console (F12) et cherchez des erreurs JavaScript
4. ✓ Vérifiez que `gtag` est chargé:
   ```javascript
   console.log(typeof window.gtag); // doit afficher "function"
   ```

### Problème: Les événements apparaissent mais sans paramètres

**Solutions:**
1. ✓ Vérifiez la console pour des erreurs lors du clic
2. ✓ Testez manuellement:
   ```javascript
   // Ouvrez la console et testez
   window.gtag('event', 'begin_checkout', {
     currency: 'EUR',
     value: 149,
     items: [{ item_name: 'Test', price: 149 }]
   });
   ```

### Problème: Les événements ne s'affichent pas en production

**Solutions:**
1. ✓ Assurez-vous que le build Next.js inclut les variables d'environnement
2. ✓ Vérifiez que Google Analytics n'est pas bloqué par un ad-blocker
3. ✓ Testez en mode navigation privée

---

## Analyse des Données E-commerce dans GA4

### Funnel d'Achat
Créez un rapport de funnel pour analyser le parcours:

1. **Explorer** > **Analyse de l'entonnoir**
2. Configurez les étapes:
   - Étape 1: `page_view` (page d'accueil)
   - Étape 2: `cta_click` (Hero ou Header)
   - Étape 3: `page_view` (section pricing)
   - Étape 4: `begin_checkout` (clic sur CTA de paiement)

### Segmentation par Plan
Créez un rapport pour comparer les performances:

1. **Explorer** > **Exploration libre**
2. Dimensions: `item_name`
3. Métriques:
   - `event_count` (begin_checkout)
   - `event_value` (valeur totale)
4. Visualisation: Graphique à barres

### Attribution des Sources
Identifiez d'où viennent vos conversions:

1. **Rapports** > **Acquisition** > **Acquisition de trafic**
2. Événement secondaire: `begin_checkout`
3. Comparez:
   - Source/Support
   - Campagne
   - Support

---

## Événements Clés à Marquer

Dans GA4, marquez ces événements comme **événements clés** (conversions):

1. **Admin** > **Événements**
2. Basculez "Marquer comme événement clé" pour:
   - ✓ `begin_checkout` (paiements)
   - ✓ `consultation_click` (demandes de consultation)

Cela permettra de:
- Suivre les conversions dans Google Ads
- Créer des audiences de remarketing
- Optimiser les campagnes publicitaires

---

## Tests de Validation Finale

### Checklist Complète

- [ ] Tous les 8 tests passent dans DebugView
- [ ] Les événements apparaissent dans Temps Réel
- [ ] Les paramètres e-commerce sont correctement envoyés
- [ ] Les événements sont marqués comme événements clés
- [ ] Testez sur Desktop et Mobile
- [ ] Testez sur Chrome, Firefox, Safari
- [ ] Testez en navigation privée
- [ ] Vérifiez les données après 24h dans les rapports

---

## Support et Documentation

### Ressources Google Analytics
- [Documentation GA4 E-commerce](https://developers.google.com/analytics/devguides/collection/ga4/ecommerce)
- [Guide DebugView](https://support.google.com/analytics/answer/7201382)
- [Événements Recommandés](https://support.google.com/analytics/answer/9267735)

### Fichiers Modifiés
- `/src/lib/analytics.ts` - Fonctions de tracking
- `/src/components/landing/pricing.tsx` - CTA de paiement
- `/src/components/landing/hero.tsx` - CTA Hero
- `/src/components/landing/header.tsx` - CTA Header
- `/src/components/landing/footer.tsx` - CTA Footer
- `/src/components/landing/student-dialog.tsx` - Student Dialog

---

**Date de création:** 2025-10-18
**Version:** 1.0
**Auteur:** Terry - Terragon Labs
