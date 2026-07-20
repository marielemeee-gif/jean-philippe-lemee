# Plan d’exécution — Jean-Philippe Lemée

## Résultat

Créer un site éditorial autonome, responsive et accessible présentant Jean-Philippe Lemée comme artiste, historien de l’art, enseignant et explorateur de l’« art-chitecture ».

## Décisions

- Application Next.js statique, sans compte externe ni base de données.
- Contenus fondés sur DDAB Bretagne, INHA, Frac Bretagne, L’Architiste et les publications Instagram publiques.
- Aucun visuel tiers n’est recopié sans autorisation : la première version utilise une direction graphique originale et des compositions typographiques.
- Les informations récentes provenant de l’entretien de juillet 2026 sont distinguées du corpus institutionnel plus ancien.

## Architecture

- `src/app/page.tsx` : narration éditoriale et sections du site.
- `src/app/globals.css` : système graphique, animations et responsive.
- `src/components/site-client.tsx` : navigation mobile, filtres de projets et interactions.
- `src/data/content.ts` : contenus structurés et sources.

## Vérifications

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- contrôle visuel ordinateur et mobile.

## Risques et replis

- Droits d’image : aucun média tiers intégré sans autorisation explicite.
- Données contradictoires : préférer l’entretien récent ou signaler la divergence.
- Instagram incomplet hors connexion : présenter une sélection documentée et prévoir un import ultérieur depuis l’export officiel.

## Critères de sortie

- Site lançable localement.
- Navigation claire et responsive.
- Projets récents présents : ACSLS, Abécédaire des lieux, Deux par deux et voyage chez soi.
- Sources et réserves éditoriales visibles.
