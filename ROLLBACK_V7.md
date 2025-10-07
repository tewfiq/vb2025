# 🔄 Guide de Rollback v8 → v7

Si vous souhaitez revenir à la version v7 (tutoiement), voici les instructions :

## Option 1 : Rollback complet (recommandé)

```bash
# Revenir au commit v7 (avant vouvoiement)
git checkout backup/v7-before-vouvoiement

# Créer une nouvelle branche si besoin
git checkout -b retour-v7

# Ou annuler le commit v8 sur la branche actuelle
git checkout terragon/update-vibe-coding-paris-v8-5ryshw
git revert HEAD --no-edit
```

## Option 2 : Restaurer uniquement les fichiers modifiés

```bash
# Restaurer les traductions v7
git restore --source=backup/v7-before-vouvoiement src/lib/translations.ts

# Restaurer la structure des sections v7
git restore --source=backup/v7-before-vouvoiement src/app/page.tsx

# Rebuild
npm run build
```

## Option 3 : Cherry-pick partiel

Si vous souhaitez garder certains changements v8 mais pas tous :

```bash
# Voir les différences
git diff backup/v7-before-vouvoiement HEAD src/lib/translations.ts

# Éditer manuellement les fichiers pour ne garder que ce qui vous plaît
```

---

## Référence des commits

- **v7 (tutoiement)** : `5aef22b` - Merge pull request #123
- **v8 (vouvoiement)** : `9a82262` - refactor(translations): update French translations for tone and clarity
- **Branche backup** : `backup/v7-before-vouvoiement`

---

## Résumé des changements v8

### Fichiers modifiés :
1. `src/lib/translations.ts` - Passage au vouvoiement complet
2. `src/app/page.tsx` - Suppression de NextMasterclass et Changelog

### Principaux changements textuels :
- "tu" → "vous"
- "ton/ta" → "votre"
- "Apprends" → "Apprenez"
- "Slay le code" → "Rejoindre la prochaine session"
- "Débloque ton super pouvoir" → "Développez votre super-pouvoir"

---

💡 **Conseil** : Testez d'abord sur une branche avant de modifier main/production.
