# Logos des Entreprises Participantes

Ce dossier contient les logos des entreprises ayant participé à la 1ère Masterclass Vibe Coding Paris.

## Fichiers actuels (placeholders SVG)

- `le-progres.svg` - Logo placeholder pour Le Progrès
- `moon-croissant.svg` - Logo placeholder pour Moon Croissant
- `pretty-box-paris.svg` - Logo placeholder pour Pretty Box Paris

## Comment remplacer les logos

Pour remplacer ces placeholders SVG par les vrais logos :

1. **Obtenez les logos officiels** de chaque entreprise (formats recommandés : PNG, SVG, ou WebP)
2. **Optimisez les images** pour le web (dimensions recommandées : largeur 200-400px)
3. **Remplacez les fichiers** en gardant le même nom mais en changeant l'extension si nécessaire :
   - `le-progres.svg` → `le-progres.png` (ou `.svg`, `.webp`)
   - `moon-croissant.svg` → `moon-croissant.png`
   - `pretty-box-paris.svg` → `pretty-box-paris.png`
4. **Mettez à jour le composant** si vous changez l'extension de fichier :
   - Fichier : `/src/components/landing/first-masterclass-gallery.tsx`
   - Modifiez la propriété `logo` de chaque entreprise

## Format d'image recommandé

- **Format** : PNG (avec fond transparent) ou SVG
- **Largeur** : 200-400px
- **Hauteur** : 80-120px
- **Ratio** : Environ 2:1 ou 3:1 (largeur:hauteur)
- **Optimisation** : Utilisez [TinyPNG](https://tinypng.com/) ou [SVGOMG](https://jakearchibald.github.io/svgomg/)

## Notes

Les logos s'affichent avec un effet grayscale par défaut et en couleur au survol.
